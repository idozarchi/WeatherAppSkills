import * as React from "react";

interface ScrollAreaProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({
  className = "",
  style,
  children,
}) => {
  return (
    <div
      className={`overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-300 ${className}`}
      style={{ maxHeight: 320, ...style }}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
