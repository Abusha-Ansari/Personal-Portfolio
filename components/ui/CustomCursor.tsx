"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring, useTransform, useMotionValue, animate, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLDivElement>(null);

  // Spring animation config
  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5
  };

  // Mouse position with spring physics
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);
  const opacity = useSpring(0, { damping: 20 });
  const textOpacity = useSpring(0, { damping: 20 });
  const rotate = useSpring(0, { damping: 15, stiffness: 200 });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Update spring values for smooth animation
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Add subtle rotation based on movement
      const movementX = e.movementX || 0;
      const movementY = e.movementY || 0;
      const movement = Math.sqrt(movementX * movementX + movementY * movementY);
      rotate.set(rotate.get() + movement * 0.2);
      
      // Slight scale effect on fast movement
      if (movement > 5) {
        scale.set(1.1);
        setTimeout(() => scale.set(1), 100);
      }
    };

    // Handle click animation
    const handleMouseDown = () => {
      setIsClicking(true);
      scale.set(0.8);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
      scale.set(1);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial fade in
    opacity.set(1);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  // Handle hover states for interactive elements
  useEffect(() => {
    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovered(true);
      
      // Scale up on hover with animation
      animate(scale, 1.6, { type: 'spring', damping: 15, stiffness: 300 });
      
      // Get hover text if available
      const hoverText = target.getAttribute('data-cursor-text');
      if (hoverText && cursorTextRef.current) {
        cursorTextRef.current.textContent = hoverText;
        textOpacity.set(1);
      }
      
      // Special styles for different element types
      if (target.tagName === 'A') {
        animate(scale, 1.8, { type: 'spring', damping: 15, stiffness: 300 });
      } else if (target.tagName === 'BUTTON') {
        animate(scale, 2, { type: 'spring', damping: 15, stiffness: 300 });
      }
      
      // Add a subtle pulse effect on hover
      if (cursorInnerRef.current) {
        animate(
          cursorInnerRef.current,
          { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' },
          { duration: 0.3, repeat: Infinity, repeatType: 'reverse' }
        );
      }
    };

    const handleHoverEnd = () => {
      setIsHovered(false);
      scale.set(1);
      textOpacity.set(0);
    };

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"]), .cursor-hover'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  // Define particle type
  type Particle = {
    id: string;
    size: number;
    x: number;
    y: number;
    speedX: number;
    speedY: number;
  };

  // Animated background effect with particles
  const [particles, setParticlesState] = useState<Particle[]>(() => 
    Array.from({ length: 20 }).map((): Particle => ({
      id: Math.random().toString(36).substr(2, 9),
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: Math.random() * 0.4 - 0.2,
      speedY: Math.random() * 0.4 - 0.2,
    }))
  );
  
  // Wrapper function to safely update particles state
  const setParticles = useCallback((updater: ((prev: Particle[]) => Particle[]) | Particle[]) => {
    setParticlesState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return next;
    });
  }, []);

  // Animated gradient background
  const [gradientPos, setGradientPos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  // Update background position based on mouse movement with parallax effect
  const updateBackgroundPosition = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 10 - 5; // Reduced range for subtlety
    const y = (clientY / window.innerHeight) * 10 - 5;
    
    setGradientPos({ x, y });
    
    // Smooth animation for the gradient
    controls.start({
      backgroundPosition: `${50 + x}% ${50 + y}%`,
      transition: { type: 'spring', damping: 30, stiffness: 100 }
    });
  }, [controls]);

  // Update particles animation frame
  useEffect(() => {
    let animationFrameId: number;
    let isMounted = true;
    
    const animateParticles = () => {
      if (!isMounted) return;
      
      setParticles(prev => 
        prev.map(p => {
          let newX = (p.x + p.speedX) % 100;
          let newY = (p.y + p.speedY) % 100;
          
          // Handle boundary conditions
          newX = newX < 0 ? 100 + newX : newX > 100 ? newX - 100 : newX;
          newY = newY < 0 ? 100 + newY : newY > 100 ? newY - 100 : newY;
          
          return {
            ...p,
            x: newX,
            y: newY
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animateParticles);
    
    // Cleanup
    return () => {
      isMounted = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [setParticles]);

  // Add mousemove listener for background effect
  useEffect(() => {
    const handleMove = (e: MouseEvent) => updateBackgroundPosition(e);
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [updateBackgroundPosition]);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <div>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Animated gradient layer */}
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={controls}
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%, 
                rgba(99, 102, 241, 0.15) 0%, 
                rgba(16, 16, 16, 0.95) 100%
              )
            `,
            backgroundSize: '200% 200%',
            willChange: 'background',
            transform: `translate3d(${gradientPos.x * 0.5}px, ${gradientPos.y * 0.5}px, 0)`,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        
        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              transform: `translate3d(${gradientPos.x * -0.5}px, ${gradientPos.y * -0.5}px, 0)`,
              willChange: 'transform',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ))}
      </div>
      
      {/* Cursor */}
      <motion.div 
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          scale,
          rotate,
          opacity,
          willChange: 'transform',
        }}
      >
        {/* Outer circle with animated border */}
        <motion.div
          ref={cursorOuterRef}
          className={cn(
            'absolute rounded-full transition-all duration-300 ease-out',
            isHovered 
              ? 'w-16 h-16 bg-transparent border-2 border-primary/80' 
              : 'w-8 h-8 bg-transparent border border-white/50',
            isClicking && 'scale-75'
          )}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          }}
        />
        
        {/* Inner circle */}
        <motion.div
          ref={cursorInnerRef}
          className={cn(
            'absolute rounded-full transition-all duration-200 ease-out',
            isHovered 
              ? 'w-2 h-2 bg-white' 
              : 'w-3 h-3 bg-primary',
            isClicking && 'scale-150'
          )}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: isHovered ? '0 0 10px rgba(255, 255, 255, 0.8)' : 'none',
          }}
        />
        
        {/* Hover text */}
        <motion.div 
          ref={cursorTextRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 px-3 py-1 
                   bg-white text-black text-xs font-medium whitespace-nowrap rounded-full"
          style={{
            opacity: textOpacity,
            transform: 'translate(-50%, 0) scale(0.8)',
            transformOrigin: 'top center',
          }}
        />
        
        {/* Trailing effect */}
        {Array.from({ length: 3 }).map((_, i) => {
          const x = useTransform(
            mouseX,
            (val) => {
              const angle = rotate.get() * (Math.PI / 180);
              const offsetX = Math.cos(angle) * (i + 1) * 10;
              return val - offsetX;
            }
          );
          
          const y = useTransform(
            mouseY,
            (val) => {
              const angle = rotate.get() * (Math.PI / 180);
              const offsetY = Math.sin(angle) * (i + 1) * 10;
              return val - offsetY;
            }
          );
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: 8 - i * 2,
                height: 8 - i * 2,
                x,
                y,
                opacity: 0.5 - (i * 0.15),
                left: 0,
                top: 0,
                position: 'absolute',
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
