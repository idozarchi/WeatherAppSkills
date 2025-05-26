import React from "react";
import { Text } from "../ui/Typography";
import {
  descriptionContainerClass,
  descriptionClass,
} from "../../styles/tailwindStyles";

const WeatherDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div className={descriptionContainerClass}>
      <Text className={descriptionClass}>
        {description || "Weather description"}
      </Text>
    </div>
  );
};

export default WeatherDescription;
