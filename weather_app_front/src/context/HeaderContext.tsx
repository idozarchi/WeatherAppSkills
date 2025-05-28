import React, { createContext, useState, ReactNode } from "react";

type HeaderButton = {
  name: string;
  onClick: () => void;
};

type HeaderContextType = {
  title: string;
  setTitle: (title: string) => void;
  buttons: HeaderButton[];
  setButtons: (buttons: HeaderButton[]) => void;
};

export const HeaderContext = createContext<HeaderContextType>({
  title: "Weather App",
  setTitle: () => {},
  buttons: [],
  setButtons: () => {},
});

type HeaderProviderProps = { children: ReactNode };

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [title, setTitle] = useState("Weather App");
  const [buttons, setButtons] = useState<HeaderButton[]>([]);

  return (
    <HeaderContext.Provider value={{ title, setTitle, buttons, setButtons }}>
      {children}
    </HeaderContext.Provider>
  );
};
