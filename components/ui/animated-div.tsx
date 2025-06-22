
"use client"; 

import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  className?: string;
}

export function AnimatedDiv({ children, className, ...rest }: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      {...rest} // Spread all other Framer Motion props and standard div props
    >
      {children}
    </motion.div>
  );
}