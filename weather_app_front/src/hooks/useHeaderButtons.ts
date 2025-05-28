import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";

interface ButtonConfig {
  name: string;
  onClick: () => void;
}

export const useHeaderButtons = (
  setButtons: (buttons: ButtonConfig[]) => void,
  navigate: NavigateFunction
) => {
  useEffect(() => {
    setButtons([
      { name: "Home", onClick: () => navigate("/") },
      { name: "Search History", onClick: () => navigate("/history") },
    ]);
  }, [setButtons, navigate]);
};
