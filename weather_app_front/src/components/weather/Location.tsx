import React from "react";
import { Heading } from "../ui/Typography";
import {
  locationContainerClass,
  locationCityClass,
  locationCountryClass,
} from "../../styles/tailwindStyles";

type LocationProps = { city: string; country: string };

const Location = ({ city, country }: LocationProps) => (
  <div className={locationContainerClass}>
    {city && <Heading className={locationCityClass}>{city}</Heading>}
    {country && <span className={locationCountryClass}>{country}</span>}
  </div>
);

export default Location;
