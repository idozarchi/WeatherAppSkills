import React, { useContext } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { HeaderProvider, HeaderContext } from "../context/HeaderContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import WeatherContent from "../components/weather/WeatherContent";
import History from "./History";
import { useHomeWeather } from "../hooks/useHomeWeather";
import { Loader } from "../components/ui/Loader";
import { Error as ErrorComponent } from "../components/ui/Error";

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
          placeholder="Search for a location..."
          buttonText="Search"
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {(isInitializing || loading) && (
                  <Loader className={loadingTextClass}>
                    Loading weather...
                  </Loader>
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
                  <ErrorComponent className={errorTextClass}>
                    Unable to detect the location. Please search for a city.
                  </ErrorComponent>
                )}
              </>
            }
          />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      <Footer
        footerText={
          "@" + new Date().getFullYear() + " Weather App. All rights reserved."
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
