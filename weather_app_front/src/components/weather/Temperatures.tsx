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
      <Heading className={temperatureValueClass}>
        {temperature || "--"}°C
      </Heading>
      <span className={feelsLikeClass}>Feels like: {feelsLike || "--"}°C</span>
    </div>
  );
};

export default Temperatures;
