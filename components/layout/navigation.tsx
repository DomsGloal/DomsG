'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import DomsLogo from '../../lib/DOMS-logo1.png';
import DropdownMenu from './menu';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="w-full max-w-7xl mx-auto h-16 sm:h-20 md:h-24 lg:h-28 px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Left: Dropdown */}
          <div className="flex items-center h-full">
            <DropdownMenu />
          </div>

          {/* Center: Logo */}
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -4, 4, 0],
                filter: 'drop-shadow(0 4px 16px rgba(253,79,0,0.4))',
              }}
              className="relative md:ml-28"
            >
              <Image
                src={DomsLogo}
                alt="DOMS Global Logo"
                width={100}
                height={100}
                priority
                className="w-[70px] sm:w-[80px]  md:w-[90px] lg:w-[100px] ml-28  object-contain transition-all duration-300"
              />

              {/* <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500/0 pointer-events-none"
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.3, 1],
                        borderColor: [
                          'rgba(253,79,0,0)',
                          'rgba(253,79,0,0.6)',
                          'rgba(253,79,0,0)',
                        ],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              />*/}
            </motion.div> 
          </motion.button>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <Button
              onClick={scrollToContact}
              className={cn(
                'relative overflow-hidden group',
                'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
                'text-white font-semibold shadow-md hover:shadow-lg',
                'transition-all duration-300 transform hover:scale-105',
                'border-0 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base',
                'hidden sm:inline-flex' // Hide on mobile, show on sm and up
              )}
            >
              <span className="relative z-10">Let&apos;s Connect</span>
            </Button>

            {/* Mobile contact button */}
            <Button
              onClick={scrollToContact}
              className={cn(
                'relative overflow-hidden sm:hidden',
                'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
                'text-white font-semibold shadow-md',
                'transition-all duration-300 transform hover:scale-105',
                'border-0 rounded-full p-2 text-xs',
                'flex items-center justify-center'
              )}
              size="icon"
            >
              <span className="sr-only">Contact</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Button>

            <motion.button
              onClick={toggleTheme}
              className={cn(
                'relative w-10 h-5 sm:w-12 sm:h-6 md:w-14 md:h-7 lg:w-16 lg:h-8',
                'rounded-full cursor-pointer border-2',
                'border-gray-300 dark:border-gray-700',
                'bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-900',
                'overflow-hidden shadow-inner transition-all duration-300',
                'hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <motion.div
                animate={{ 
                  x: isDark ? 
                    'calc(100% - 1.25rem)' : // Adjusted for mobile
                    '0.125rem' 
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-0.5 left-0 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-full bg-white dark:bg-gray-100 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-300"
              >
                {isDark ? (
                  <Moon className="h-2 w-2 sm:h-3 sm:w-3 text-indigo-600" />
                ) : (
                  <Sun className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-500" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Spacer */}
      <div className="h-16 sm:h-20 md:h-24 lg:h-28" />
    </>
  );
}