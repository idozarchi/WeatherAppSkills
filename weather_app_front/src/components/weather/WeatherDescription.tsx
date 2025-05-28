import React from "react";
import { Text } from "../ui/Typography";
import {
  descriptionContainerClass,
  descriptionClass,
} from "../../styles/tailwindStyles";

type WeatherDescriptionProps = { description: string };

const WeatherDescription = ({ description }: WeatherDescriptionProps) => {
  return (
    <div className={descriptionContainerClass}>
      <Text className={descriptionClass}>{description}</Text>
    </div>
  );
};

export default WeatherDescription;
