import React from "react";
import { Card, CardContent } from "../ui/Card";
import Location from "./Location";
import Temperatures from "./Temperatures";
import WeatherDescription from "./WeatherDescription";
import {
  containerClass,
  cardContentInnerClass,
  weatherContentRowClass,
} from "../../styles/tailwindStyles";

type WeatherContentProps = {
  city: string;
  country: string;
  temperature: string;
  feelsLike: string;
  description: string;
};

const WeatherContent = ({
  city,
  country,
  temperature,
  feelsLike,
  description,
}: WeatherContentProps) => (
  <div className={containerClass}>
    <Card>
      <CardContent className={cardContentInnerClass}>
        <div className={weatherContentRowClass}>
          <Location city={city} country={country} />
          <Temperatures temperature={temperature} feelsLike={feelsLike} />
        </div>
        {description && <WeatherDescription description={description} />}
      </CardContent>
    </Card>
  </div>
);

export default WeatherContent;
