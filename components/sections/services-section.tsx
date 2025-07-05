// Updated ServicesSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Compass,
  Megaphone,
  Package,
  Cpu,
  Banknote,
  Users,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/**
 * NOTE: All gradients follow Tailwind's `from-* to-*` pattern so you can tweak
 * your palette in one place. The icons are sourced from lucide-react to keep
 * the visual language consistent with the rest of the design system.
 */

const services = [
  {
    icon: Compass,
    title: 'Strategy & Business Transformation',
    description:
      'Holistic strategies to realign your business model, boost resilience, and accelerate enterprise‑wide transformation.',
    features: [
      'Market & Competitor Insights',
      'Business Model Innovation',
      'M&A Strategy',
      'Change Management',
    ],
    color: 'from-blue-600 to-purple-600',
  },
  {
    icon: Megaphone,
    title: 'Marketing, Branding & Customer Strategy',
    description:
      'End‑to‑end brand and marketing programs that build awareness, loyalty, and measurable growth.',
    features: [
      'Brand Positioning',
      'Digital Marketing',
      'Customer Journey Mapping',
      'Campaign Analytics',
    ],
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Package,
    title: 'Operations & Supply Chain',
    description:
      'Operational excellence initiatives that unlock efficiency, reduce cost, and harden supply‑chain resilience.',
    features: [
      'Process Optimization',
      'Lean & Six Sigma',
      'Procurement Strategy',
      'Logistics & Distribution',
    ],
    color: 'from-green-600 to-emerald-500',
  },
  {
    icon: Cpu,
    title: 'Technology, IT & Digital Transformation',
    description:
      'Technology roadmaps and digital platforms that future‑proof your organization and deliver at scale.',
    features: [
      'IT Strategy',
      'Cloud Migration',
      'Data & Analytics',
      'Automation',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Banknote,
    title: 'Finance, Risk & Assurance',
    description:
      'Robust frameworks to safeguard assets, drive financial performance, and ensure compliance in a shifting landscape.',
    features: [
      'Financial Planning & Analysis',
      'Risk Management',
      'Regulatory Compliance',
      'Internal Audit',
    ],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Users,
    title: 'People, Culture & Organizational Performance',
    description:
      'Talent and culture initiatives that inspire high‑performing teams and foster a winning workplace.',
    features: [
      'Leadership Development',
      'Employee Engagement',
      'Org Design',
      'Performance Metrics',
    ],
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Rocket,
    title: 'GTM, Innovation & Growth Advisory',
    description:
      'Actionable go‑to‑market plans and innovation pipelines that spark sustainable, scalable growth.',
    features: [
      'Market Entry Strategy',
      'Product Innovation',
      'Pricing & Monetization',
      'Growth Hacking',
    ],
    color: 'from-teal-500 to-cyan-500',
  },
] as const;

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
  } as const;

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
  } as const;

  return (
    <section id="services" className="py-24 bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Section Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {' '}
              Modern Businesses
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We deliver end-to-end advisory and execution support that empowers organisations to thrive in the digital age.
            From strategy through to implementation, we are your trusted partner at every step of the value chain.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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

/**
 * Individual service card. Hover state animates icon and reveals list items.
 */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay for hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      <CardContent className="p-8 relative z-10">
        {/* Icon */}
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

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                x: isHovered ? 0 : -20,
              }}
              transition={{ delay: featureIndex * 0.1 }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
              />
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
