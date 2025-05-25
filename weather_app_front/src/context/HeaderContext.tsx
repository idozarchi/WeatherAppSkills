import React, { createContext, useState, ReactNode } from 'react';

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
  title: '',
  setTitle: () => {},
  buttons: [],
  setButtons: () => {},
});

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('Weather App');
  const [buttons, setButtons] = useState<HeaderButton[]>([]);

  return (
    <HeaderContext.Provider value={{ title, setTitle, buttons, setButtons }}>
      {children}
    </HeaderContext.Provider>
  );
};