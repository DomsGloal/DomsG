'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(
  () => import('@/components/ui/animated-background').then((mod) => ({ default: mod.AnimatedBackground })),
  { ssr: false }
);

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-heading"
          >
            <span className="block">Transforming Today's</span>
            <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ideas into Tomorrow's
            </span>
            <span className="block">Impact</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We partner with visionary organizations to create innovative solutions that drive meaningful change and sustainable growth in an ever-evolving digital landscape.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 group"
              onClick={scrollToServices}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl backdrop-blur-sm group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+', label: 'Global Clients' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}