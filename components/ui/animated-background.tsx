'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary Gradient Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Gradient Overlays */}
      <motion.div
        animate={{
          background: [
            'linear-gradient(135deg, rgba(10, 38, 71, 0.9) 0%, rgba(32, 82, 149, 0.8) 50%, rgba(44, 116, 179, 0.7) 100%)',
            'linear-gradient(135deg, rgba(44, 116, 179, 0.8) 0%, rgba(20, 66, 114, 0.9) 50%, rgba(10, 38, 71, 0.7) 100%)',
            'linear-gradient(135deg, rgba(10, 38, 71, 0.9) 0%, rgba(32, 82, 149, 0.8) 50%, rgba(44, 116, 179, 0.7) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute inset-0"
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * (window.innerWidth || 1920),
              y: Math.random() * (window.innerHeight || 1080),
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 2,
            }}
          >
            <div
              className={`w-${8 + i * 4} h-${8 + i * 4} ${
                i % 2 === 0 ? 'rounded-full' : 'rounded-lg'
              } bg-white/20 backdrop-blur-sm`}
              style={{
                width: `${8 + i * 4}rem`,
                height: `${8 + i * 4}rem`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * (window.innerWidth || 1920),
              y: Math.random() * (window.innerHeight || 1080),
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  );
}