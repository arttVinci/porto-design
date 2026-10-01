"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 240,
  gradientColor = "rgba(2, 132, 199, 0.08)", // Technical Ocean/Indigo accent
  gradientOpacity = 0.8,
  gradientFrom = "rgba(2, 132, 199, 0.25)",
  gradientTo = "rgba(148, 163, 184, 0.15)",
}: MagicCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md",
          className
        )}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative isolate overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-sm",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {/* Dynamic Border Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom},
              ${gradientTo},
              transparent 70%
            )
          `,
        }}
      />

      {/* Surface Background */}
      <div className="absolute inset-[1px] z-20 rounded-[inherit] bg-white" />

      {/* Surface Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute inset-[1px] z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
          opacity: gradientOpacity,
        }}
      />

      {/* Card Content */}
      <div className="relative z-40">{children}</div>
    </motion.div>
  );
}
