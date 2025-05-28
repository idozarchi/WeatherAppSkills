import React, { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { menuButtonClass } from "../../styles/tailwindStyles";

const Menu = () => {
  const { buttons } = useContext(HeaderContext);

  return (
    <nav className="flex gap-2">
      {buttons.map((btn, idx) => (
        <button key={idx} className={menuButtonClass} onClick={btn.onClick}>
          {btn.name}
        </button>
      ))}
    </nav>
  );
};

export default Menu;
