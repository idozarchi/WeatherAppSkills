import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Heading } from "../ui/Typography";

const Temperatures: React.FC = () => {
  const { temperature, feelsLike } = useContext(WeatherContext);
  return (
    <div className="flex flex-col items-begin w-full mb-2">
      <Heading className="text-2xl mb-0">{temperature || "--"}°C</Heading>
      <span className="text-lg text-gray-300 font-semibold">
        Feels like: {feelsLike || "--"}°C
      </span>
    </div>
  );
};

export default Temperatures;
