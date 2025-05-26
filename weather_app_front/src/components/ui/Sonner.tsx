import React from "react";

interface SonnerProps {
  children: React.ReactNode;
}

const Sonner: React.FC<SonnerProps> = ({ children }) => (
  <div className="rounded-md border px-4 py-2 bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
    {children}
  </div>
);

export default Sonner;