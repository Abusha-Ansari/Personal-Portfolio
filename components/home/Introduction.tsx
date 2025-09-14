"use client";

import { motion, useMotionValue, useTransform, animate, useAnimation, AnimatePresence, useSpring, useInView, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { SKILLS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import components with no SSR
import type { BackgroundGradient as BackgroundGradientType } from "@/components/ui/background-gradient";
import type { TextGenerateEffect as TextGenerateEffectType } from "@/components/ui/text-generate-effect";

const BackgroundGradient = dynamic<React.ComponentProps<typeof BackgroundGradientType>>(
  () => import("@/components/ui/background-gradient"),
  { 
    ssr: false,
    loading: () => <div className="h-full w-full" />,
  }
);

const TextGenerateEffect = dynamic<React.ComponentProps<typeof TextGenerateEffectType>>(
  () => import("@/components/ui/text-generate-effect"),
  { 
    ssr: false,
    loading: () => <div className={cn("h-6 bg-gray-800/50 rounded w-full")} />,
  }
);

// Social links data
const SOCIAL_LINKS = [
  { 
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: Github 
  },
  { 
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: Linkedin 
  },
  { 
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: Twitter 
  }
];

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const displayText = useTransform(rounded, (latest) => {
    return text.split(" ").slice(0, latest).join(" ");
  });

  useEffect(() => {
    const words = text.split(" ").length;
    const controls = animate(count, words, {
      type: "spring",
      mass: 0.8,
      damping: 10,
      stiffness: 50,
      duration: 2,
    });
    return controls.stop;
  }, [text]);

  return (
    <motion.span 
      className={cn("relative inline-block", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {displayText}
    </motion.span>
  );
};

const SkillPill = ({ skill, index }: { skill: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  
  // Spring animation for smooth movement
  const springConfig = { damping: 15, stiffness: 300 };
  const xSmooth = useSpring(x, springConfig);
  const ySmooth = useSpring(y, springConfig);
  const scaleSmooth = useSpring(scale, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
    }
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
          delay: 0.05 * index, 
          type: 'spring', 
          stiffness: 100,
          damping: 12
        } 
      }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      whileHover={{ 
        scale: 1.1,
        y: -2,
        transition: { 
          type: 'spring',
          stiffness: 400,
          damping: 15
        }
      }}
      onHoverStart={() => {
        setIsHovered(true);
        scale.set(1.1);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        scale.set(1);
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium",
        "bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm",
        "border border-white/10 shadow-lg cursor-pointer overflow-hidden",
        "transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20",
        "cursor-none" // Prevent default cursor
      )}
      style={{
        x: xSmooth,
        y: ySmooth,
        scale: scaleSmooth,
      }}
      data-cursor-text={skill}
    >
      <motion.span 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 font-medium">
        {skill}
      </span>
    </motion.span>
  );
};

const SocialIcon = ({ icon: Icon, href, label }: { icon: any; href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
    whileHover={{ y: -4, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
    data-cursor-text={label}
  >
    <Icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
  </motion.a>
);

export function Introduction() {
  const skills = SKILLS.flatMap((category) => category.items.map((item) => item.name)).slice(0, 10);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  
  // Animation controls
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </motion.div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: 'spring', 
                  stiffness: 100,
                  damping: 15
                } 
              }
            }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium mb-6 border border-blue-500/20">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                  } 
                }
              }}
            >
              <span className="block text-white/90 mb-2">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Abusha Ansari
              </span>
            </motion.h1>
            
            <motion.div
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.2,
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                  } 
                }
              }}
            >
              <TextGenerateEffect 
                words="I'm a passionate developer who loves building beautiful, responsive, and performant web applications."
                className="leading-relaxed text-gray-300"
              />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.4,
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                  } 
                }
              }}
            >
              <Button 
                asChild
                className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                data-cursor-text="Let's Talk!"
              >
                <Link href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="group relative overflow-hidden rounded-full px-8 py-6 text-base font-medium border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                data-cursor-text="View Work"
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  } 
                }
              }}
            >
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-400">Follow me</p>
                <div className="flex items-center gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <SocialIcon 
                      key={social.id}
                      icon={social.icon} 
                      href={social.href} 
                      label={social.label} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="h-10 w-px bg-white/10" />
              
              <Button 
                asChild
                variant="ghost"
                className="group relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                data-cursor-text="Download CV"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                y: 0,
              } : {}}
              transition={{ 
                delay: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }}
            >
              <div className="p-8 bg-gray-900/80 rounded-xl">
                <motion.p 
                  className="text-sm font-medium bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Available for freelance work
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 1.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 15
                    } 
                  }}
                >
                  <div className="h-10 w-10 rounded-full bg-green-400/10 border-2 border-green-400/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Currently working on</p>
                    <p className="text-sm font-medium text-white">Portfolio v2.0</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 15
            } 
          } : {}}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-medium text-gray-400">TECH I WORK WITH</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-6" />
            <button 
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View all skills <span className="inline-block ml-1">→</span>
            </button>
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 1
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    } 
                  }
                }}
              >
                <SkillPill skill={skill} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}