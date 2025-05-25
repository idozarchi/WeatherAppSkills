import React from "react";
import { Card, CardContent } from "./ui/Card";
import Location from "./weather/Location";
import Temperatures from "./weather/Temperatures";
import WeatherDescription from "./weather/WeatherDescription";

const WeatherContent: React.FC = () => (
  <div className="w-full max-w-lg mx-auto mt-8">
    <Card>
      <CardContent className="flex flex-col gap-4 m-2 sm:m-5">
        <div className="flex flex-row">
          <Location />
          <Temperatures />
        </div>
        <WeatherDescription />
      </CardContent>
    </Card>
  </div>
);

export default WeatherContent;
