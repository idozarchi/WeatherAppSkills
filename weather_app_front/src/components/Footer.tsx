import React, { memo } from "react";
import { Text } from "./ui/Typography";
import { footerClass, footerTextClass } from "../styles/tailwindStyles";

const Footer: React.FC = memo(() => (
  <footer className={footerClass}>
    <Text className={footerTextClass}>
      &copy; {new Date().getFullYear()} Weather App. All rights reserved.
    </Text>
  </footer>
));

export default Footer;
