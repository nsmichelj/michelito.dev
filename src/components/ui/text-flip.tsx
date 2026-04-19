"use client";

import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Children, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
};

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.code;

export interface TextFlipProps {
  /**
   * Motion element to render.
   * @defaultValue motion.p
   */
  as?: MotionElement;
  /** Array of children to cycle through. */
  children: React.ReactNode[];
  className?: string;

  /**
   * Time in seconds between each flip.
   * @defaultValue 2
   */
  interval?: number;

  /** Called with the new index after each flip. */
  onIndexChange?: (index: number) => void;
  /**
   * Motion transition configuration.
   * @defaultValue { duration: 0.3 }
   */
  transition?: Transition;
  /** Motion variants for enter/exit animations. */
  variants?: Variants;
}

export function TextFlip({
  as: Component = motion.p,
  className,
  children,

  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,

  onIndexChange,
}: TextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = Children.toArray(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <Component
        animate="animate"
        className={cn("inline-block", className)}
        exit="exit"
        initial="initial"
        key={currentIndex}
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  );
}
