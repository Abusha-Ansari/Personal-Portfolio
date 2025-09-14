"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Add event listeners for mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isVisible]);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div 
      className={`fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      <div 
        className={`absolute rounded-full transition-all duration-300 ease-out ${
          isHovered 
            ? 'w-12 h-12 bg-primary/20 border-2 border-primary' 
            : 'w-6 h-6 bg-primary/10 border border-primary/50'
        }`}
        style={{
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
        }}
      />
      <div 
        className={`absolute rounded-full bg-primary transition-all duration-200 ease-out ${
          isHovered ? 'w-1.5 h-1.5' : 'w-2 h-2'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
      />
      {isHovered && (
        <div 
          className="absolute text-xs font-medium text-white whitespace-nowrap"
          style={{
            left: '50%',
            top: 'calc(100% + 8px)',
            transform: 'translateX(-50%)',
            textShadow: '0 0 5px rgba(0,0,0,0.5)',
          }}
        >
          Click me!
        </div>
      )}
    </div>
  );
}
