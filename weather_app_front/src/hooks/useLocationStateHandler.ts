import { useEffect } from "react";
import { Location } from "react-router-dom";

export const useLocationStateHandler = (
  location: Location & { state?: { city?: string } },
  handleSearch: (city: string) => void
) => {
  useEffect(() => {
    if (location.state?.city) {
      handleSearch(location.state.city);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, handleSearch]);
};
