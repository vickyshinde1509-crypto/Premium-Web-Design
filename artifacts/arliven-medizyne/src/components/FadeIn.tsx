import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  duration = 0.72,
}: FadeInProps) {
  const offsets = {
    up:    { y: 22, x: 0 },
    down:  { y: -22, x: 0 },
    left:  { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none:  { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", ...offsets[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration, delay, ease: APPLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
