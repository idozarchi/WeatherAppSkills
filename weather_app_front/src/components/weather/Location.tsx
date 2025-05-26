import React from "react";
import { Heading } from "../ui/Typography";
import {
  locationContainerClass,
  locationCityClass,
  locationCountryClass,
} from "../../styles/tailwindStyles";

const Location: React.FC<{ city: string; country: string }> = ({
  city,
  country,
}) => {
  return (
    <div className={locationContainerClass}>
      <Heading className={locationCityClass}>{city || "City Name"}</Heading>
      <span className={locationCountryClass}>{country || "Country"}</span>
    </div>
  );
};

export default Location;
