import React from "react";
import { Heading } from "../ui/Typography";
import {
  temperaturesContainerClass,
  temperatureValueClass,
  feelsLikeClass,
} from "../../styles/tailwindStyles";

type TemperaturesProps = { temperature: string; feelsLike: string };

const Temperatures = ({ temperature, feelsLike }: TemperaturesProps) => (
  <div className={temperaturesContainerClass}>
    {temperature && (
      <Heading className={temperatureValueClass}>{temperature}</Heading>
    )}
    {feelsLike && <span className={feelsLikeClass}>{feelsLike}</span>}
  </div>
);

export default Temperatures;
