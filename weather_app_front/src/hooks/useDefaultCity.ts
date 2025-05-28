import { useEffect } from "react";
import { getDefaultCity } from "../api/defaultLocation";

export const useDefaultCity = (
  setCity: (city: string) => void,
  setIsInitializing: (isInitializing: boolean) => void
) => {
  useEffect(() => {
    getDefaultCity().then((defaultCity) => {
      if (defaultCity) setCity(defaultCity);
      setIsInitializing(false);
    });
  }, [setCity, setIsInitializing]);
};
