'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Palette, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Cloud,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Full-Stack Solutions', 'API Integration', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user engagement and drive conversions.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Data-driven strategies to accelerate your digital transformation and business growth.',
    features: ['Market Analysis', 'Growth Planning', 'Digital Roadmap', 'KPI Tracking'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and sensitive data.',
    features: ['Security Audits', 'Threat Detection', 'Compliance', 'Risk Assessment'],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern business needs.',
    features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto Scaling'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export function ServicesSection() {
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

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="text-primary font-semibold text-lg">Our Services</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-balance"
          >
            Comprehensive Solutions for
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Modern Businesses</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We deliver end-to-end digital solutions that empower businesses to thrive in the digital age. 
            From concept to deployment, we're your trusted partner in innovation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <CardContent className="p-8 relative z-10">
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0.7, 
                x: isHovered ? 0 : -20 
              }}
              transition={{ delay: featureIndex * 0.1 }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
              {feature}
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}