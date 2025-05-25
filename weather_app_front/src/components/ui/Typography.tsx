import * as React from "react";
//import { cn } from "@/lib/utils"; // If you don't have a cn utility, you can use className directly

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      ref={ref}
      className={`scroll-m-20 text-3xl font-bold tracking-tight mb-2 ${className ?? ""}`}
      {...props}
    />
  )
);
Heading.displayName = "Heading";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ""}`}
      {...props}
    />
  )
);
Text.displayName = "Text";