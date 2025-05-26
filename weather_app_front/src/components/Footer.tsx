import React, { memo } from "react";
import { Text } from "./ui/Typography";

const Footer: React.FC = memo(() => (
  <footer className="w-full bg-blue-300 text-white py-4 mt-auto text-center shadow-inner">
    <Text className="text-sm">
      &copy; {new Date().getFullYear()} Weather App. All rights reserved.
    </Text>
  </footer>
));

export default Footer;
