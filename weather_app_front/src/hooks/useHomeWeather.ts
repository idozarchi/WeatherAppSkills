import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDefaultCity } from "../api/defaultLocation";
import { fetchWeather } from "../api/weatherData";
import { useSearchHistory } from "../hooks/useSearchHistory";
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

interface WeatherApiResponse {
  current_condition?: Array<{
    temp_C?: string;
    FeelsLikeC?: string;
    weatherDesc?: Array<{ value: string }>;
  }>;
  nearest_area?: Array<{
    country?: Array<{ value: string }>;
  }>;
}

export function useHomeWeather({
  setButtons,
  navigate,
  location,
}: UseHomeWeatherParams) {
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

  useEffect(() => {
    setButtons([
      { name: "Home", onClick: () => navigate("/") },
      { name: "Search History", onClick: () => navigate("/history") },
    ]);
  }, [setButtons, navigate]);

  useEffect(() => {
    getDefaultCity().then((defaultCity) => {
      if (defaultCity) setCity(defaultCity);
      setIsInitializing(false);
    });
  }, []);

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

  useEffect(() => {
    if (location.state?.city) {
      handleSearch(location.state.city);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, handleSearch]);

  const temperature = weather?.current_condition?.[0]?.temp_C + "°C" || "";
  const feelsLike =
    "Feels like: " + (weather?.current_condition?.[0]?.FeelsLikeC + "°C") || "";
  const description =
    weather?.current_condition?.[0]?.weatherDesc?.[0]?.value || "";
  const country = weather?.nearest_area?.[0]?.country?.[0]?.value || "";
  const isInvalidLocation = city && !loading && !temperature && !isError;

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
}
