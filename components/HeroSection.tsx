"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect, ReactNode, MouseEvent } from "react";
import dynamic from "next/dynamic";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

const SplineScene = dynamic(() => import("@/components/ui/splite").then(m => m.SplineScene), { ssr: false });

function ParticleButton({ children, onClick }: any) {
  const [showParticles, setShowParticles] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    
    setShowParticles(true);
    setTimeout(() => {
      setShowParticles(false);
    }, 600);
  };

  if (!mounted) {
    return (
      <Button
        className="inline-flex items-center bg-gradient-to-r from-[#18181b]/90 to-[#27272a]/90 shadow-lg shadow-black/30 text-white font-semibold text-xs px-4 py-1 rounded-full hover:brightness-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
        size="sm"
        onClick={handleClick}
      >
        {children}
      </Button>
    );
  }

  const rect = buttonRef.current?.getBoundingClientRect();
  const centerX = rect ? rect.left + rect.width / 2 : 0;
  const centerY = rect ? rect.top + rect.height / 2 : 0;

  return (
    <>
      {showParticles && (
        <AnimatePresence>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50"
              style={{ left: centerX, top: centerY }}
              initial={{
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                x: [0, (i % 2 ? 1 : -1) * (Math.random() * 30 + 15)],
                y: [0, -Math.random() * 30 - 15],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </AnimatePresence>
      )}
      <Button
        ref={buttonRef}
        className="inline-flex items-center bg-gradient-to-r from-[#18181b]/90 to-[#27272a]/90 shadow-lg shadow-black/30 text-white font-semibold text-xs px-4 py-1 rounded-full hover:brightness-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
        size="sm"
        onClick={handleClick}
      >
        {children}
      </Button>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen h-screen bg-black text-white overflow-hidden flex flex-col lg:flex-row">
      {/* Spotlight hover animation behind robot */}
      <Spotlight className="absolute inset-0 z-0" fill="white" />
      <div className="relative flex flex-1 flex-col lg:flex-row w-full h-full">
        {/* Text content: always at the top on mobile, left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left w-full lg:w-1/3 flex flex-col justify-center px-4 sm:px-6 lg:px-16 lg:mr-16 pt-8 pb-4 lg:pt-0 lg:pb-0"
        >
          {/* Status badge: Open to Hiring, transparent glass effect */}
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Actively Seeking Data Engineer Roles
          </span>

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-white via-blue-300 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Nagi Reddy
          </h1>
          <span 
            className="block text-primary text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-wide"
            style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}
          >
            Data Engineer
          </span>

          <p className="text-base sm:text-lg md:text-xl mb-10 text-muted-foreground max-w-xl mx-auto lg:mx-0 px-2 font-inter">
          Designing smart data pipelines with AI, AWS, dbt & Snowflake.
          </p>

          <ParticleButton onClick={() => console.log('Button clicked')}>
            <span className="flex items-center gap-1">
              View My Work
              <MousePointerClick className="h-4 w-4" />
            </span>
          </ParticleButton>
        </motion.div>
        {/* Spline robot for large screens: absolutely positioned on the right, with negative margin to hug edge */}
        <div className="hidden lg:block absolute right-0 bottom-0 h-full w-[70vw] max-w-[1100px] z-10 -mr-24">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full max-w-none" />
        </div>
        {/* Spline robot for mobile: fills all remaining space, no bottom gap */}
        <div className="block lg:hidden flex-1 w-full min-h-0 h-0 relative z-10 flex">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full max-w-none" />
        </div>
      </div>
    </section>
  );
}
