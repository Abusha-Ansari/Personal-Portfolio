import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, FC } from "react";

export interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

const BackgroundGradient: FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  return (
    <div className={cn("relative group", containerClassName)}>
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500",
          className
        )}
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundGradient;
