/* This File Is Not In Use! */

import React, { createContext, useState, ReactNode } from "react";

type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
  country: string;
  setCountry: (country: string) => void;
  temperature: string;
  setTemperature: (temperature: string) => void;
  feelsLike: string;
  setFeelsLike: (feelsLike: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

export const WeatherContext = createContext<WeatherContextType>({
  city: "",
  setCity: () => {},
  country: "",
  setCountry: () => {},
  temperature: "",
  setTemperature: () => {},
  feelsLike: "",
  setFeelsLike: () => {},
  description: "",
  setDescription: () => {},
});

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [description, setDescription] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        country,
        setCountry,
        temperature,
        setTemperature,
        feelsLike,
        setFeelsLike,
        description,
        setDescription,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
