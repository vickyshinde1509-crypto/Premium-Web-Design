import { motion } from "framer-motion";
import { ReactNode } from "react";
import { skipFadeAnimations } from "@/lib/navState";

const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.9,
}: FadeInProps) {
  const offsets = {
    up:    { y: 28, x: 0 },
    down:  { y: -28, x: 0 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0, y: 0 },
  };

  // On back navigation: skip the animation entirely — content appears instantly
  if (skipFadeAnimations) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration, delay, ease: APPLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
