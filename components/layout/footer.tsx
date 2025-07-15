'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import DomsLogo from '../../lib/DOMS-logo1.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'News & Blog', href: '#blog' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Consulting', href: '#services' },
  ],
  resources: [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'White Papers', href: '#resources' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Support', href: '#support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Disclaimer', href: '#disclaimer' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <footer className="bg-background border-t border-border" ref={ref}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-16"
        >
          <div className="grid ">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  {/* <span className="text-white font-bold text-xl font-heading">D</span> */}
                 <Image src={DomsLogo} alt="DOMS Global Logo" width={80} height={80} priority />
                </div>
                <span className="text-2xl  font-bodoni font-light  tracking-tight  text-foreground">
                  DOMS Global
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming ideas into digital reality. We partner with visionary organizations 
                to create innovative solutions that drive meaningful change.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>sales@domsglobal.co</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 7032222707</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Gachibowli, Hyderabad</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {/* <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-foreground mb-4 font-heading capitalize">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DOMS Global. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="ml-4 group"
              >
                Back to Top
                <ArrowUp className="ml-2 bg-white w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}