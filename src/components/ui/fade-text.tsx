"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import React, { useMemo, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

type FadeTextProps = {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
  text: string;
};

export function FadeText({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } }
  },
  text
}: FadeTextProps) {
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0
      }
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={FADE_ANIMATION_VARIANTS}
    >
      <motion.span className={cn('w-full', className)}>{text}</motion.span>
    </motion.div>
  );
}

type FadeElementProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  framerProps?: Variants;
};
export function FadeElement({
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } }
  },
  children
}: FadeElementProps) {
  const matches = useMediaQuery("(min-width: 768px)");

  const trigger = useRef(null);
  const isInView = useInView(trigger, {
    once: true,
    amount: matches ? 0.3 : 0.1
  });
  const directionOffset = useMemo(() => {
    const map = { up: 20, down: -20, left: -20, right: 20 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps as {
      [name: string]: { [name: string]: number; opacity: number };
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        blur: 20,
        [axis]: hidden?.[axis] ?? directionOffset
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        blur: 0,
        [axis]: show?.[axis] ?? 0
      }
    };
  }, [directionOffset, axis, framerProps]);
  return (
    <motion.div
      ref={trigger}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={FADE_ANIMATION_VARIANTS}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.span key={index} className={className}>
          {child}
        </motion.span>
      ))}{" "}
    </motion.div>
  );
}
