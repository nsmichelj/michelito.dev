import { cn } from "@/lib/utils";

export const BorderLine = ({
  position = "top",
  className = "",
}: {
  position?: "top" | "bottom";
  className?: string;
}) => (
  <div
    className={cn(
      "absolute left-0 z-1 h-px w-full bg-border",
      position === "top" ? "top-0" : "bottom-0",
      className
    )}
  />
);
