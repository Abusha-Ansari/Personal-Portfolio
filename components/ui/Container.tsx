"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Container({
  children,
  className,
  id,
  animate = true,
}: ContainerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  if (animate) {
    return (
      <motion.div
        id={id}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}