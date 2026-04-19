"use client";

import type { VariantProps } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { Button, type buttonVariants } from "@/components/ui/button";

const isViewTransitionSupported = () =>
  typeof document !== "undefined" && "startViewTransition" in document;

export interface ThemeToggleHandle
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  duration?: number;
}

export function ThemeToggle({
  duration = 400,
  className,
  size = "icon",
  variant = "ghost",
  ...props
}: ThemeToggleHandle) {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current;
    if (!button) {
      return;
    }
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );
    const applyTheme = () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };
    if (!isViewTransitionSupported()) {
      applyTheme();
      return;
    }
    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });
    const ready = transition?.ready;
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    }
  }, [setTheme, resolvedTheme, duration]);

  return (
    <Button
      className={className}
      onClick={toggleTheme}
      ref={buttonRef}
      size={size}
      variant={variant}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
