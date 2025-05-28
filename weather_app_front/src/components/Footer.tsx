import React, { memo } from "react";
import { Text } from "./ui/Typography";
import { footerClass, footerTextClass } from "../styles/tailwindStyles";

interface FooterProps {
  footerText?: string;
}

const Footer: React.FC<FooterProps> = memo(({ footerText }) => (
  <footer className={footerClass}>
    <Text className={footerTextClass}>{footerText}</Text>
  </footer>
));

export default Footer;
