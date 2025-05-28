import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { HeaderProvider, HeaderContext } from "../context/HeaderContext";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/weather/WeatherContent";
import History from "./History";
import { useHomeWeather } from "../hooks/useHomeWeather";
import {
  appContainerClass,
  containerClass,
  loadingTextClass,
  errorTextClass,
} from "../styles/tailwindStyles";

const HomeContent: React.FC = () => {
  const { setButtons } = useContext(HeaderContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    city,
    setCity,
    isInitializing,
    weather,
    loading,
    isError,
    handleSearch,
    temperature,
    feelsLike,
    description,
    country,
    isInvalidLocation,
  } = useHomeWeather({ setButtons, navigate, location });

  return (
    <>
      <Header />
      <div className={containerClass}>
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search for a city..."
          buttonText="Search"
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {(isInitializing || loading) && (
                  <div className={loadingTextClass}>Loading weather...</div>
                )}
                {!isInitializing && !loading && weather && (
                  <WeatherContent
                    city={city}
                    country={country}
                    temperature={temperature}
                    feelsLike={feelsLike}
                    description={description}
                  />
                )}
                {!isInitializing && (isInvalidLocation || isError) && (
                  <div className={errorTextClass}>
                    Unable to detect your location. Please search for a city.
                  </div>
                )}
              </>
            }
          />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      <Footer
        footerText={
          "&" + new Date().getFullYear() + " Weather App. All rights reserved."
        }
      />
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
