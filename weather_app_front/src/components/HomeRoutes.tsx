import React from "react";
import { Routes, Route } from "react-router-dom";
import WeatherContent from "./weather/WeatherContent";
import History from "../pages/History";
import { Loader } from "./ui/Loader";
import { Error as ErrorComponent } from "./ui/Error";

interface HomeRoutesProps {
  isInitializing: boolean;
  loading: boolean;
  weather: any;
  city: string;
  country: string;
  temperature: string;
  feelsLike: string;
  description: string;
  isInvalidLocation: boolean;
  isError: boolean;
  loadingTextClass: string;
  errorTextClass: string;
}

const HomeRoutes = ({
  isInitializing,
  loading,
  weather,
  city,
  country,
  temperature,
  feelsLike,
  description,
  isInvalidLocation,
  isError,
  loadingTextClass,
  errorTextClass,
}: HomeRoutesProps) => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          {(isInitializing || loading) && (
            <Loader className={loadingTextClass}>Loading weather...</Loader>
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
);

export default HomeRoutes;
