import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const boxCornerVariants = cva(
  "absolute z-2 size-2 rounded-xs border border-border bg-background",
  {
    variants: {
      position: {
        "top-left": "-top-1 -left-1",
        "top-right": "-top-1 -right-1",
        "bottom-left": "-bottom-1 -left-1",
        "bottom-right": "-right-1 -bottom-1",
      },
    },
    defaultVariants: {
      position: "bottom-left",
    },
  }
);

export function BoxCorner({
  className,
  position = "bottom-left",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof boxCornerVariants>) {
  return (
    <div
      className={cn(boxCornerVariants({ position, className }))}
      {...props}
    />
  );
}
