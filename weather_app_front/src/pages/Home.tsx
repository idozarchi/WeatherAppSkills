import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { HeaderProvider, HeaderContext } from "../context/HeaderContext";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/weather/WeatherContent";
import HistoryContent from "../components/HistoryContent";
import { getDefaultCity } from "../api/defaultLocation";
import { fetchWeather } from "../api/weatherData";
import { useQuery } from "@tanstack/react-query";
import {
  appContainerClass,
  containerClass,
  loadingTextClass,
  errorTextClass,
} from "../styles/tailwindStyles";

const HomeContent: React.FC = () => {
  const { setButtons } = useContext(HeaderContext);
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const {
    data: weather,
    isLoading: loading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => (city ? fetchWeather(city) : Promise.resolve(null)),
    enabled: !!city,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setButtons([
      { name: "Home", onClick: () => navigate("/") },
      { name: "Search History", onClick: () => navigate("/history") },
    ]);
  }, [setButtons, navigate]);

  useEffect(() => {
    getDefaultCity().then((defaultCity) => {
      if (defaultCity) setCity(defaultCity);
    });
  }, []);

  const handleSearch = (newCity: string) => {
    setCity(newCity);
    refetch();

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    if (
      !history
        .map((c: string) => c.toLowerCase())
        .includes(newCity.toLowerCase())
    ) {
      history.unshift(newCity);
      // Keep only the latest 20 searches
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(history.slice(0, 20))
      );
    }
  };

  const temperature = weather?.current_condition?.[0]?.temp_C || "";
  const feelsLike = weather?.current_condition?.[0]?.FeelsLikeC || "";
  const description =
    weather?.current_condition?.[0]?.weatherDesc?.[0]?.value || "";
  const country = weather?.nearest_area?.[0]?.country?.[0]?.value || "";
  const isInvalidLocation = city && !loading && !temperature && !isError;

  return (
    <>
      <Header />
      <div className={containerClass}>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading && (
                  <div className={loadingTextClass}>Loading weather...</div>
                )}
                {temperature && (
                  <WeatherContent
                    city={city}
                    country={country}
                    temperature={temperature}
                    feelsLike={feelsLike}
                    description={description}
                  />
                )}
                {(isInvalidLocation || isError) && (
                  <div className={errorTextClass}>
                    Unable to detect your location. Please search for a city.
                  </div>
                )}
              </>
            }
          />
          <Route path="/history" element={<HistoryContent />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const Home: React.FC = () => (
  <HeaderProvider>
    <div className={appContainerClass}>
      <HomeContent />
    </div>
  </HeaderProvider>
);

export default Home;
