'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import DomsLogo from '../../lib/DOMS-logo1.png';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },

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
      const sections = ['services','industries','about','contact'];
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

 const scrollToContact = () => scrollTo('#contact');
  
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
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and Brand */}
            <motion.button
              onClick={toTop}
              className="flex items-center space-x-2 sm:space-x-4 cursor-pointer group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0], 
                  filter: 'drop-shadow(0 4px 8px rgba(253,79,0,0.3))' 
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex-shrink-0"
              >
                <Image 
                  src={DomsLogo} 
                  alt="DOMS Global Logo" 
                  width={40} 
                  height={40} 
                  className="sm:w-[50px] sm:h-[50px]"
                  priority 
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-500/0 pointer-events-none"
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.2, 1],
                          borderColor: [
                            'rgba(253,79,0,0)',
                            'rgba(253,79,0,0.6)',
                            'rgba(253,79,0,0)',
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                />
              </motion.div>
              
              <div className="flex flex-col min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center"
                >
                  {['D', 'O', 'M', 'S'].map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="text-lg sm:text-xl md:text-2xl font-bodoni font-light tracking-tight text-gray-900 dark:text-white"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <motion.span
                    variants={globalVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="ml-1 sm:ml-2 text-lg sm:text-xl md:text-2xl font-bodoni font-light tracking-tight text-gray-900 dark:text-white"
                  >
                    GLOBAL
                  </motion.span>
                </motion.div>
                
                <motion.span
                  variants={taglineVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block mt-1 font-medium truncate"
                >
                  Holistic Revenue Generating Company
                </motion.span>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => scrollTo(item.href)}
                  aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md',
                    'hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20',
                    activeSection === item.href.replace('#', '')
                      ? 'text-orange-600 dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 dark:text-gray-300'
                  )}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Contact Button */}
              <Button
                onClick={scrollToContact}
                className="hidden sm:inline-flex bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full px-4 py-2 text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
              </Button>

              {/* Mobile Contact Button */}
              <Button
                onClick={scrollToContact}
                className="sm:hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full p-2 shadow-md"
                size="icon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="sr-only">Contact</span>
              </Button>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-11 h-6 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-gray-400 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  animate={{ 
                    x: theme === 'dark' ? '1.25rem' : '0.125rem',
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff'
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 h-4 w-4 rounded-full shadow-md border border-gray-300 dark:border-gray-600 flex items-center justify-center"
                >
                  {theme === 'dark' ? (
                    <Moon className="h-2.5 w-2.5 text-blue-400" />
                  ) : (
                    <Sun className="h-2.5 w-2.5 text-yellow-500" />
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mobile-menu-container fixed top-16 sm:top-20 left-0 right-0 z-[9999] mx-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl lg:hidden"
            >
              <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
                <nav className="p-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollTo(item.href)}
                      className={cn(
                        'flex items-center w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                        'hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400',
                        activeSection === item.href.replace('#', '')
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 font-semibold'
                          : 'text-gray-700 dark:text-gray-300'
                      )}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.name}</span>
                      {activeSection === item.href.replace('#', '') && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="ml-auto w-2 h-2 bg-orange-500 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}