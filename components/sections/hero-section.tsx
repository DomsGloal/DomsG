'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import DropdownMenu from '../layout/menu';
import DomsLogo from '../../lib/DOMS-logo1.png';

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeTheme = isMounted ? resolvedTheme : 'light';

  return (
    <>
      <DropdownMenu />
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-20 text-center bg-background text-foreground overflow-hidden transition-all duration-500"
      >
        <AnimatePresence>
          {showInitialAnimation && (
            <motion.div
              initial={{ scale: 10, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Image
                  src={DomsLogo}
                  alt="DOMS GLOBAL Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-3xl font-bold mt-4 text-white"
                >
                  DOMS GLOBAL
                </motion.h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-radial-gradient z-0 transition-all duration-500" />

        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none">
          <Image
            src={DomsLogo}
            alt="DOMS Logo"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100 + 100}%`,
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 12 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              className="absolute rounded-full blur-xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-500"
              style={{
                width: `${Math.random() * 150 + 80}px`,
                height: `${Math.random() * 150 + 80}px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl w-full mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 2.2, duration: 0.8, ease: 'easeOut' },
              },
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary drop-shadow-[0_2px_4px_rgba(255,145,0,0.6)]">
                Transforming Today&apos;s Ideas into Tomorrow&apos;s Impact.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-colors duration-500">
              We partner with visionary organizations to create innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg font-medium rounded-xl shadow-md hover:shadow-primary/50 transition-all"
              >
                Explore Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-muted hover:bg-muted/80 text-foreground border border-border px-6 py-3 text-lg font-medium rounded-xl backdrop-blur-md transition-all"
              >
                Watch Our Story
              </motion.button>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center cursor-pointer text-primary"
              onClick={scrollToServices}
            >
              <span className="text-sm mb-2 opacity-70 text-primary transition-colors duration-500">
                Scroll to explore
              </span>
              <ChevronDown className="w-6 h-6 drop-shadow-[0_0_6px_rgba(255,145,0,0.7)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
