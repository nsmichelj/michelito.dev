import { cn } from "@/lib/utils";

export function SectionHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

export function SectionEyebrow({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "flex items-center gap-2 font-bold font-mono text-[10px] text-muted-foreground uppercase tracking-widest",
        className
      )}
      {...props}
    >
      <div className="size-1 animate-pulse bg-indigo-600 dark:bg-indigo-400" />
      {children}
    </h3>
  );
}

export function SectionTitle({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("font-bold text-3xl uppercase tracking-tighter", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
