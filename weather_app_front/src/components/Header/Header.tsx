import React, { memo } from "react";
import Headline from "./Headline";
import Menu from "./Menu";
import { headerClass, headerInnerClass } from "../../styles/tailwindStyles";

const Header = memo(() => (
  <header className={headerClass}>
    <div className={headerInnerClass}>
      <Headline />
      <Menu />
    </div>
  </header>
));

export default Header;
