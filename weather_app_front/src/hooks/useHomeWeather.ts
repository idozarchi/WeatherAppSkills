import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherData";
import { parseWeather } from "../api/parseWeather";
import { isInvalidLocation as getIsInvalidLocation } from "../api/isInvalidLocation";
import { useSearchHistory } from "../hooks/useSearchHistory";
import { useHeaderButtons } from "../hooks/useHeaderButtons";
import { useDefaultCity } from "../hooks/useDefaultCity";
import { useLocationStateHandler } from "../hooks/useLocationStateHandler";
import { Location, NavigateFunction } from "react-router-dom";

interface ButtonConfig {
  name: string;
  onClick: () => void;
}

interface UseHomeWeatherParams {
  setButtons: (buttons: ButtonConfig[]) => void;
  navigate: NavigateFunction;
  location: Location & { state?: { city?: string } };
}

export interface WeatherApiResponse {
  current_condition?: Array<{
    temp_C?: string;
    FeelsLikeC?: string;
    weatherDesc?: Array<{ value: string }>;
  }>;
  nearest_area?: Array<{
    country?: Array<{ value: string }>;
  }>;
}

export const useHomeWeather = ({
  setButtons,
  navigate,
  location,
}: UseHomeWeatherParams) => {
  const [city, setCity] = useState("");
  const [isInitializing, setIsInitializing] = useState(true);
  const { addToHistory } = useSearchHistory();

  const {
    data: weather,
    isLoading: loading,
    isError,
  } = useQuery<WeatherApiResponse>({
    queryKey: ["weather", city],
    queryFn: () => (city ? fetchWeather(city) : Promise.resolve(null)),
    enabled: !!city,
    refetchOnWindowFocus: false,
  });

  const handleSearch = useCallback(
    (newCity: string) => {
      setCity(newCity);

      if (location.pathname !== "/") {
        navigate("/");
      }

      addToHistory(newCity);
    },
    [location.pathname, navigate, addToHistory]
  );

  useHeaderButtons(setButtons, navigate);
  useDefaultCity(setCity, setIsInitializing);
  useLocationStateHandler(location, handleSearch);

  const { temperature, feelsLike, description, country } =
    parseWeather(weather);
  const isInvalidLocation = getIsInvalidLocation(
    city,
    loading,
    temperature,
    isError
  );

  return {
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
  };
};
