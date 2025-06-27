// components/AnimatedNumber.tsx (Perbaikan)

"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  className?: string;
};

export default function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 0, 
        }).format(latest);
      }
    });
    
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref} className={className} />;
}