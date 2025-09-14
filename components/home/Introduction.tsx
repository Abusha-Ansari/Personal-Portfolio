"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const displayText = useTransform(rounded, (latest) => {
    return text.split(" ").slice(0, latest).join(" ");
  });

  useEffect(() => {
    const words = text.split(" ").length;
    const controls = animate(count, words, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [text]);

  return <motion.span className={className}>{displayText}</motion.span>;
};

const SkillPill = ({ skill, index }: { skill: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, type: 'spring', stiffness: 100 }}
      onMouseEnter={() => {
        setIsHovered(true);
        scale.set(1.1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        scale.set(1);
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium",
        "bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm",
        "border border-white/10 shadow-lg cursor-pointer overflow-hidden",
        "transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
      )}
      style={{
        transform: isHovered 
          ? `translate(${x.get() * 0.2}px, ${y.get() * 0.2}px) scale(${scale.get()})` 
          : 'translate(0, 0) scale(1)',
      }}
    >
      {isHovered && (
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        {skill}
      </span>
    </motion.span>
  );
};

export function Introduction() {
  const skills = SKILLS.flatMap((category) => category.items.map((item) => item.name)).slice(0, 8);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      rotate: 2,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <Container className="py-32 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover="hover"
            className="relative h-[500px] w-full rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl z-10 mix-blend-overlay"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900/80 to-gray-900/90 rounded-[22px] z-0"></div>
            <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900 to-gray-900 rounded-2xl z-0"></div>
            <div className="absolute inset-1 rounded-2xl overflow-hidden z-0">
              <Image
                src="https://res.cloudinary.com/dhi6ul49y/image/upload/v1748359875/mqokdzh397fqyqfowuie.jpg"
                alt="Abusha Ansari portrait"
                fill
                className="object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full filter blur-xl z-0"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full filter blur-xl z-0"></div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-10">
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800/50">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  About Me
                </motion.h2>
                <div className="space-y-4 text-gray-300">
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <AnimatedText text="With over 2 years of experience in software development, I specialize in building modern web applications using React, TypeScript, and Next.js. My passion lies in creating intuitive, performant, and accessible user interfaces that solve real-world problems." />
                  </motion.p>
                  <motion.p 
                    className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <AnimatedText text="I'm currently Joint Technical Head of CSI PCE, the Computer Society of India and the largest student body in the Mumbai chapter where I lead the organization of various technical events. I'm passionate about writing clean code, crafting intuitive user experiences, and staying up to date with the latest technologies." />
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
              <div className="relative bg-gray-900/80 p-6 rounded-lg border border-gray-800/50 backdrop-blur-sm">
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Technical Skills
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <SkillPill key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}