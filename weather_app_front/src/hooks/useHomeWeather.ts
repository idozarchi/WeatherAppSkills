import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDefaultCity } from "../api/defaultLocation";
import { fetchWeather } from "../api/weatherData";

export function useHomeWeather({ setButtons, navigate, location }: any) {
  const [city, setCity] = useState("");
  const [isInitializing, setIsInitializing] = useState(true);

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
      setIsInitializing(false);
    });
  }, []);

  // Move the effect for handling city from navigation state here:
  useEffect(() => {
    if (location.state?.city) {
      handleSearch(location.state.city);
      // Optionally clear the state so it doesn't repeat on next navigation
      window.history.replaceState({}, document.title);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  const handleSearch = (newCity: string) => {
    setCity(newCity);
    refetch();

    if (location.pathname !== "/") {
      navigate("/");
    }

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    if (
      !history
        .map((c: string) => c.toLowerCase())
        .includes(newCity.toLowerCase())
    ) {
      history.unshift(newCity);
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(history.slice(0, 20))
      );
    }
  };

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
