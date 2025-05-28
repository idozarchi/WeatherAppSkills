import { WeatherApiResponse } from "../hooks/useHomeWeather";

export const parseWeather = (weather: WeatherApiResponse | undefined) => ({
  temperature: weather?.current_condition?.[0]?.temp_C
    ? weather.current_condition[0].temp_C + "°C"
    : "",
  feelsLike: weather?.current_condition?.[0]?.FeelsLikeC
    ? "Feels like: " + weather.current_condition[0].FeelsLikeC + "°C"
    : "",
  description: weather?.current_condition?.[0]?.weatherDesc?.[0]?.value || "",
  country: weather?.nearest_area?.[0]?.country?.[0]?.value || "",
});
