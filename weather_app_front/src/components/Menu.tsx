import React, { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';
import { Button } from './ui/Button';

const Menu: React.FC = () => {
  const { buttons } = useContext(HeaderContext);

  return (
    <nav className="flex items-center h-full space-x-4">
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          onClick={btn.onClick}
          variant="default"
        >
          {btn.name}
        </Button>
      ))}
    </nav>
  );
};

export default Menu;