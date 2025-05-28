import React, { useContext } from "react";
import { titleClass } from "../../styles/tailwindStyles";
import { HeaderContext } from "../../context/HeaderContext";

const Headline: React.FC = () => {
  const { title } = useContext(HeaderContext);

  return <h1 className={titleClass}>{title}</h1>;
};

export default Headline;
