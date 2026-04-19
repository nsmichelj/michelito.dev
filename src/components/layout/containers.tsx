import { cn } from "@/lib/utils";

export function PageWrapper({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative w-full px-2", className)} {...props}>
      {children}
    </div>
  );
}

export function PageContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-3xl border-border border-x",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
