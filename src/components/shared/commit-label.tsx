import { cn } from "@/lib/utils";

interface CommitLabelProps {
  className?: string;
  hash: string;
  isHead?: boolean;
  message: string;
}

export function CommitLabel({
  hash,
  message,
  isHead = false,
  className,
}: CommitLabelProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[11px] text-muted-foreground tracking-widest",
        className
      )}
    >
      commit{" "}
      <span className="text-orange-600 dark:text-orange-400">{hash}</span>{" "}
      {isHead && (
        <span>
          &#40;
          <span className="text-purple-600 dark:text-purple-400">HEAD</span>{" "}
          <span>-&gt;</span>{" "}
          <span className="text-green-600 dark:text-green-400">main</span>
          &#41;{" "}
        </span>
      )}
      <span>{message}</span>
    </span>
  );
}
