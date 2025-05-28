import { Loader2 } from "lucide-react";

export function Loader({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <Loader2 className="animate-spin" />
      {children}
    </div>
  );
}
