'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import DomsLogo from '../../lib/DOMS-logo1.png';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Industries', href: '#industries' },
  { name: 'Insights', href: '#insights' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    const onSection = () => {
      const sections = ['hero','services','about','contact','industries','insights'];
      const cur = sections.find(sec => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
      });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onSection);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', onSection);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#',''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20, rotateX: -90, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1, y: 0, rotateX: 0, scale: 1,
      transition: { delay: 0.5 + i * 0.15, duration: 0.8, type: 'spring', stiffness: 200, damping: 12 }
    }),
    hover: {
      y: -8, scale: 1.2, color: '#fd4f00',
      textShadow: '0 0 20px rgba(253,79,0,0.5)',
      transition: { duration: 0.3, type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  const globalVariants = {
    initial: { opacity: 0, x: -20, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { delay: 1.2, duration: 0.8, type: 'spring', stiffness: 150, damping: 12 } },
    hover: { scale: 1.1, color: '#fd4f00', textShadow: '0 0 15px rgba(253,79,0,0.3)', transition: { duration: 0.3, type: 'spring', stiffness: 300 } }
  };

  const taglineVariants = {
    initial: { opacity: 0, scale: 0.8, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { delay: 1.8, duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, color: '#6b7280', transition: { duration: 0.2 } }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[9999] transition-all duration-500',
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
            : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
        )}
      >
        <nav className="container-custom h-20 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            onClick={toTop}
            className="flex items-center space-x-4 cursor-pointer group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], filter: 'drop-shadow(0 4px 8px rgba(253,79,0,0.3))' }}
              whileTap={{ scale: 0.95 }}
              transition={{ rotate: { duration: 0.6 }, scale: { duration: 0.2 } }}
              className="relative"
            >
              <Image src={DomsLogo} alt="DOMS Global Logo" width={50} height={50}
                className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300" priority />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500/0 pointer-events-none"
                animate={isHovered ? {
                  scale: [1, 1.2, 1],
                  borderColor: ['rgba(253,79,0,0)', 'rgba(253,79,0,0.6)', 'rgba(253,79,0,0)'],
                } : {}}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }} className="flex items-center relative">
                {/* Animated 'DOMS' letters */}
                {['D','O','M','S'].map((l, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants} initial="initial"
                    animate="animate" whileHover="hover"
                    className="text-xl md:text-2xl font-bold font-heading text-gray-900 dark:text-white cursor-pointer inline-block"
                    style={{ display: 'inline-block', transformOrigin: 'center bottom', transformStyle: 'preserve-3d' }}
                  >
                    {l}
                  </motion.span>
                ))}

                <motion.span variants={globalVariants} initial="initial" animate="animate" whileHover="hover"
                  className="ml-2 text-xl md:text-2xl font-bold font-heading text-gray-900 dark:text-white cursor-pointer relative">
                  GLOBAL
                </motion.span>
              </motion.div>
              <motion.span variants={taglineVariants} initial="initial" animate="animate" whileHover="hover"
                className="text-xs text-gray-800/90 dark:text-gray-200/90 hidden sm:block leading-none mt-1 font-medium tracking-wide">
                Holistic Revenue Generating Company
              </motion.span>
            </div>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.button key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400',
                  activeSection === item.href.replace('#','') 
                    ? 'text-gray-900 dark:text-white font-semibold' 
                    : 'text-gray-600 dark:text-gray-300'
                )}
                whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href.replace('#','') && (
                  <motion.div layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full cursor-pointer border-2 border-gray-300 dark:border-gray-600 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-800 overflow-hidden shadow-inner"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900"
                animate={{
                  opacity: isDark ? 0.8 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Animated wave burst */}
              <motion.div
                key={theme + 'burst'}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full pointer-events-none",
                  isDark ? "bg-slate-100/20" : "bg-yellow-300/30"
                )}
              />

              {/* Toggle Knob with smooth transition */}
              <motion.div
                animate={{
                  x: isDark ? 32 : 4,
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 30,
                  duration: 0.3 
                }}
                className="absolute top-1 h-6 w-6 rounded-full bg-white dark:bg-gray-100 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-300"
              >
                <motion.div
                  animate={{ 
                    rotate: isDark ? 360 : 0,
                    scale: isDark ? 1 : 1.1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? (
                    <Moon className="h-3 w-3 text-indigo-600" />
                  ) : (
                    <Sun className="h-3 w-3 text-yellow-600" />
                  )}
                </motion.div>
              </motion.div>

              {/* Background stars for dark mode */}
              {isDark && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
                  <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
                </motion.div>
              )}
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }} 
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 md:hidden pointer-events-auto shadow-lg"
          >
            <div className="container-custom py-6">
              <nav className="space-y-2">
                {navItems.map((item, idx) => (
                  <motion.button key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollTo(item.href)}
                    className={cn(
                      'block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 rounded-lg',
                      activeSection === item.href.replace('#','') 
                        ? 'text-orange-600 dark:text-orange-400 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20' 
                        : 'text-gray-700 dark:text-gray-300'
                    )}
                    whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}