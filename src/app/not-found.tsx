import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center gap-10 overflow-hidden bg-background px-8 py-16 text-center sm:py-24">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 border border-border bg-background/50 px-3 py-1 font-mono text-[10px] text-muted-foreground uppercase tracking-wider backdrop-blur-sm">
          <span className="size-1 animate-pulse bg-destructive" />
          Error: 404_NOT_FOUND
        </div>

        <div className="relative">
          <h1 className="select-none font-bold font-heading text-8xl text-foreground tracking-tight md:text-9xl">
            404
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] opacity-50">
            System Breakpoint
          </div>
        </div>
      </div>

      <div className="max-w-md space-y-6">
        <p className="font-sans text-muted-foreground text-sm leading-relaxed">
          The page you are looking for does not exist.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="group font-mono" variant="outline">
            <Link href="/">
              <ChevronLeft className="opacity-50 transition-transform group-hover:translate-x-0.5" />
              Go to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
