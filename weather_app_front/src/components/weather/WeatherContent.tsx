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

const WeatherContent: React.FC<{
  city: string;
  country: string;
  temperature: string;
  feelsLike: string;
  description: string;
}> = ({ city, country, temperature, feelsLike, description }) => (
  <div className={containerClass}>
    <Card>
      <CardContent className={cardContentInnerClass}>
        <div className={weatherContentRowClass}>
          <Location city={city} country={country} />
          <Temperatures temperature={temperature} feelsLike={feelsLike} />
        </div>
        <WeatherDescription description={description} />
      </CardContent>
    </Card>
  </div>
);

export default WeatherContent;
