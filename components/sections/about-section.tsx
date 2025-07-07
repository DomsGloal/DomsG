'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We are committed to delivering solutions that create lasting impact and drive meaningful change.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.',
  },
  {
    icon: Zap,
    title: 'Innovation-First',
    description: 'We stay at the forefront of technology to provide cutting-edge solutions that give you a competitive edge.',
  },
];

const achievements = [
  'Industry-leading 98% client satisfaction rate',
  'Over 500 successful projects delivered globally',
  'Certified partnerships with major technology platforms',
  'Award-winning design and development team',
  '24/7 support and maintenance services',
  'ISO 27001 certified security practices',
];

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={slideInLeft} className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-lg mb-4 block">About DOMS Global</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-balance">
                Pioneering Innovation for a
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Digital Future</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
                DOMS Global has been at the forefront of digital innovation for over 15 years.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine deep technical expertise with strategic thinking to help organizations navigate complex 
                digital challenges and unlock new opportunities for growth. Our team of passionate innovators is 
                dedicated to turning your boldest ideas into reality.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 font-heading">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div variants={slideInRight} className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border shadow-lg">
              <h3 className="text-2xl font-bold mb-6 font-heading">Why Choose DOMS Global?</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '15+', label: 'Years of Excellence' },
                { number: '50+', label: 'Projects Completed' },
                { number: '10+', label: 'Global Clients' },
                { number: '100%', label: 'Success Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card p-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-primary mb-2 font-heading">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}