import axios from 'axios';

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`https://wttr.in/${city}?format=j1`);
  return response.data;
};