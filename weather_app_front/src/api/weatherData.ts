import axios from "axios";

const WEATHER_API_URL =
  process.env.REACT_APP_WEATHER_API_URL || "https://wttr.in";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(`${WEATHER_API_URL}/${city}?format=j1`);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      throw new Error("Location not found");
    }
    throw error;
  }
};
