// components/ui/animated-mobile-sidebar.tsx
"use client";

import { HTMLMotionProps, motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AnimatedMobileSidebarProps extends HTMLMotionProps<'aside'> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  widthClass?: string; // Tailwind class for width, e.g., "w-72"
  bgColorClass?: string; // Tailwind class for background, e.g., "bg-gradient-to-b from-black to-gray-900"
  shadowClass?: string; // Tailwind class for shadow, e.g., "shadow-2xl"
  borderClass?: string; // Tailwind class for border, e.g., "border-l border-white/10"
}

export function AnimatedMobileSidebar({
  isOpen,
  onClose,
  children,
  widthClass = "w-72", // Default width
  bgColorClass = "bg-gradient-to-b from-black to-gray-900", // Default background
  shadowClass = "shadow-2xl", // Default shadow
  borderClass = "border-l border-white/10", // Default border
  ...rest // All other Framer Motion and HTML aside props
}: AnimatedMobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed inset-y-0 right-0 z-50 text-white p-6 h-screen overflow-y-auto ${widthClass} ${bgColorClass} ${shadowClass} ${borderClass}`}
          {...rest}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10">
                  <X className="h-6 w-6" />
                </span>
                <span className="absolute inset-0 bg-[#7F38E8]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            {children} {/* Render children passed to the component */}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}