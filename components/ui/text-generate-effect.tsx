"use client";

import { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextGenerateEffectProps {
  words: string;
  className?: string;
  children?: React.ReactNode;
}

const TextGenerateEffect: FC<TextGenerateEffectProps> = ({
  words,
  className,
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("h-6 bg-gray-800/50 rounded w-full", className)} />;
  }

  return (
    <div className={cn("relative", className)}>
      {words.split(" ").map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block opacity-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: idx * 0.03,
              duration: 0.5,
              ease: "easeOut"
            }
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </div>
  );
};

export default TextGenerateEffect;
