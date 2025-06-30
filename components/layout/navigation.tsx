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
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
            : 'bg-transparent'
        )}
      >
        
        
        <nav className="relative    w-full h-28 sm:h-32 pt-10 pb-2 flex items-center px-1 sm:px-6 lg:px-4 max-w-7xl mx-auto">

          {/* Left: Dropdown */}
          <div className="flex-1   flex items-center  justify-start h-full " >
            <div className="h-full flex items-center mb-16 " >
              <DropdownMenu  />
            </div>  
          </div>

          {/* Center: Logo */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
className="flex items-center justify-center flex-1"

          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                filter: 'drop-shadow(0 4px 16px rgba(253,79,0,0.4))'
              }}
              className="relative"
            >
              <Image
                src={DomsLogo}
                alt="DOMS Global Logo"
                style={{position:'relative',top:'-12px'}}
                width={120}
                height={120}
                className="h-26 w-26 object-contain transition-all duration-300 "
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-500/0 pointer-events-none"
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.3, 1],
                        borderColor: [
                          'rgba(253,79,0,0)',
                          'rgba(253,79,0,0.6)',
                          'rgba(253,79,0,0)'
                        ]
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              />
            </motion.div>
          </motion.button>

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center  gap-4 sm:gap-5 " >
            <motion.button
              onClick={toggleTheme}
          
              className={cn(
                
                'relative w-12 h-6 sm:w-16 sm:h-8 rounded-full cursor-pointer',
                
                'border-2 border-gray-300 dark:border-gray-600',
                'bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-900',
                'overflow-hidden shadow-inner transition-all duration-300',
                'hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50'
              )}
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <motion.div
                animate={{ x: isDark ? (window.innerWidth < 640 ? 24 : 32) : 2 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3
                  
                }}
                className="absolute top-0.5  sm:top-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white dark:bg-gray-100 shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-300"
              >
                {isDark ? (
                  <Moon className="h-3 w-3 text-indigo-600" />
                ) : (
                  <Sun className="h-3 w-3 text-yellow-600" />
                )}
              </motion.div>
            </motion.button>

            <Button
              className={cn(
                'relative overflow-hidden group ',
                'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
                'text-white font-semibold shadow-lg hover:shadow-xl',
                'transition-all duration-300 transform hover:scale-105',
                'text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 ',
                'border-0 rounded-full'
              )}
              
              onClick={scrollToContact}
            >
              <span className="relative z-10" >Let&apos;s Connect</span>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
