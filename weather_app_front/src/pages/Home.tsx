import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { HeaderProvider, HeaderContext } from "../context/HeaderContext";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/WeatherContent";
import { getDefaultCity } from "../api/defaultLocation";
import { fetchWeather } from "../api/weatherData";
import { WeatherProvider, WeatherContext } from "../context/WeatherContext";

const HomeContent: React.FC = () => {
  const { setButtons } = useContext(HeaderContext);
  const {
    city,
    setCity,
    country,
    setCountry,
    temperature,
    setTemperature,
    feelsLike,
    setFeelsLike,
    description,
    setDescription,
  } = useContext(WeatherContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setButtons([
      { name: "Home", onClick: () => alert("Home clicked!") },
      { name: "Search History", onClick: () => alert("Weather clicked!") },
    ]);
  }, [setButtons]);

  useEffect(() => {
    getDefaultCity().then((defaultCity) => {
      if (defaultCity) setCity(defaultCity);
    });
  }, [setCity]);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchWeather(city)
        .then((data) => {
          setTemperature(data.current_condition?.[0]?.temp_C || "");
          setFeelsLike(data.current_condition?.[0]?.FeelsLikeC || "");
          setDescription(
            data.current_condition?.[0]?.weatherDesc?.[0]?.value || ""
          );
          setCountry(data.nearest_area?.[0]?.country?.[0]?.value || "");
        })
        .finally(() => setLoading(false));
    }
  }, [city, setTemperature, setFeelsLike, setDescription, setCountry]);

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-lg mx-auto">
        <SearchBar onSearch={handleSearch} />
        {loading && <div className="mt-8">Loading weather...</div>}
        {(temperature || description || feelsLike || country) && (
          <WeatherContent />
        )}
      </div>
      {!loading && !temperature && (
        <div className="mt-8 text-red-500">
          Unable to detect your location. Please search for a city.
        </div>
      )}
      <Footer />
    </>
  );
};

const Home: React.FC = () => (
  <HeaderProvider>
    <WeatherProvider>
      <div className="w-full flex flex-col items-center min-h-screen bg-blue-100">
        <HomeContent />
      </div>
    </WeatherProvider>
  </HeaderProvider>
);

export default Home;
