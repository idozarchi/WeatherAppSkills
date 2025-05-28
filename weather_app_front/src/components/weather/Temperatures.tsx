import React from "react";
import { Heading } from "../ui/Typography";
import {
  temperaturesContainerClass,
  temperatureValueClass,
  feelsLikeClass,
} from "../../styles/tailwindStyles";

const Temperatures: React.FC<{ temperature: string; feelsLike: string }> = ({
  temperature,
  feelsLike,
}) => {
  return (
    <div className={temperaturesContainerClass}>
      <Heading className={temperatureValueClass}>{temperature}</Heading>
      <span className={feelsLikeClass}>{feelsLike}</span>
    </div>
  );
};

export default Temperatures;
