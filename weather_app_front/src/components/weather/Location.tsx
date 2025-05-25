import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Heading } from "../ui/Typography";

const Location: React.FC = () => {
  const { city, country } = useContext(WeatherContext);
  return (
    <div className="flex flex-col items-begin w-full mb-2">
      <Heading className="text-2xl mb-0">{city || "City Name"}</Heading>
      <span className="text-lg text-gray-300 font-semibold">
        {country || "Country"}
      </span>
    </div>
  );
};

export default Location;
