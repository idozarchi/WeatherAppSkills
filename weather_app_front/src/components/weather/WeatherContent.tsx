import React from "react";
import { Card, CardContent } from "../ui/Card";
import Location from "./Location";
import Temperatures from "./Temperatures";
import WeatherDescription from "./WeatherDescription";

const WeatherContent: React.FC<{
  city: string;
  country: string;
  temperature: string;
  feelsLike: string;
  description: string;
}> = ({ city, country, temperature, feelsLike, description }) => (
  <div className="w-full max-w-lg mx-auto mt-8">
    <Card>
      <CardContent className="flex flex-col gap-4 m-2 sm:m-5">
        <div className="flex flex-row">
          <Location city={city} country={country} />
          <Temperatures temperature={temperature} feelsLike={feelsLike} />
        </div>
        <WeatherDescription description={description} />
      </CardContent>
    </Card>
  </div>
);

export default WeatherContent;
