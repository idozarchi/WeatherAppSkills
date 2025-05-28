import { AlertTriangle } from "lucide-react";

export function Error({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`flex items-center gap-2 text-red-600 ${className || ""}`}>
      <AlertTriangle />
      {children}
    </div>
  );
}
