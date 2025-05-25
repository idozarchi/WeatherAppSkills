import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { Text } from "../ui/Typography";

const WeatherDescription: React.FC = () => {
  const { description } = useContext(WeatherContext);
  return (
    <div className="flex flex-col items-begin w-full mb-2">
      <Text className="text-lg text-gray-600 mb-0 text-begin w-full">
        {description || "Weather description"}
      </Text>
    </div>
  );
};

export default WeatherDescription;
