// src/components/Animated.tsx
import React from "react";

interface AnimatedProps {
  children: React.ReactNode;
  animationClass?: string;
  delay?: number;
}

export default function Animated({ children, animationClass = "", delay = 0 }: AnimatedProps) {
  return (
    <div
      className={`${animationClass}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
}
