import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HeaderProvider, HeaderContext } from "../context/HeaderContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import HomeRoutes from "../components/HomeRoutes";
import { useHomeWeather } from "../hooks/useHomeWeather";

import {
  appContainerClass,
  containerClass,
  loadingTextClass,
  errorTextClass,
} from "../styles/tailwindStyles";

const HomeContent = () => {
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
        <HomeRoutes
          isInitializing={isInitializing}
          loading={loading}
          weather={weather}
          city={city}
          country={country}
          temperature={temperature}
          feelsLike={feelsLike}
          description={description}
          isInvalidLocation={!!isInvalidLocation}
          isError={isError}
          loadingTextClass={loadingTextClass}
          errorTextClass={errorTextClass}
        />
      </div>
      <Footer
        footerText={
          "@" + new Date().getFullYear() + " Weather App. All rights reserved."
        }
      />
    </>
  );
};

const Home = () => (
  <HeaderProvider>
    <div className={appContainerClass}>
      <HomeContent />
    </div>
  </HeaderProvider>
);

export default Home;
