"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 60,
  delay = 100,
  pauseDelay = 1800,
  loop = true,
  ...props
}: TypingAnimationProps) {
  const wordsToAnimate = useMemo(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState<string>(
    shouldReduceMotion ? wordsToAnimate[0] || "" : ""
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  useEffect(() => {
    if (shouldReduceMotion || wordsToAnimate.length === 0 || !isInView) return;

    let timeout: NodeJS.Timeout;

    if (delay > 0 && displayedText === "" && currentCharIndex === 0 && !isDeleting) {
      timeout = setTimeout(() => {
        const firstWord = wordsToAnimate[0] || "";
        setDisplayedText(firstWord.slice(0, 1));
        setCurrentCharIndex(1);
      }, delay);
      return () => clearTimeout(timeout);
    }

    const currentWord = wordsToAnimate[currentWordIndex] || "";

    if (!isDeleting) {
      if (currentCharIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);
        }, duration);
      } else {
        if (wordsToAnimate.length > 1 || loop) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
        }
      }
    } else {
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, currentCharIndex - 1));
          setCurrentCharIndex((prev) => prev - 1);
        }, duration / 2);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % wordsToAnimate.length);
        }, duration / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    isInView,
    currentCharIndex,
    currentWordIndex,
    isDeleting,
    wordsToAnimate,
    duration,
    pauseDelay,
    delay,
    loop,
    shouldReduceMotion,
    displayedText,
  ]);

  if (shouldReduceMotion) {
    return (
      <span ref={elementRef} className={cn("inline-block", className)} {...props}>
        {wordsToAnimate[0] || children}
      </span>
    );
  }

  return (
    <span
      ref={elementRef}
      className={cn("inline-flex items-center", className)}
      {...props}
    >
      <span>{displayedText}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-current animate-pulse align-middle" />
    </span>
  );
}
