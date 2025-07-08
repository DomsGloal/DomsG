'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  "Agriculture",
  "Automotive & Assembly",
  "Chemicals",
  "Consumer Packaged Goods / Products",
  "Education",
  "Engineering, Construction & Building Materials",
  "Financial Institutions / Services",
  "Healthcare / Life Sciences",
  "Industrials & Electronics / Industrial Goods",
  "Infrastructure",
  "Insurance Industry",
  "Logistics / Transportation",
  "Packaging & Paper",
  "Principal Investors and Private Equity / Private Capital",
  "Real Estate",
  "Retail Industry",
  "Technology, Media & Telecommunications",
  "Travel and Tourism",
];

const industriesLinks = [
  "/Agriculture",
  "/Automotive",
  "/Chemicals",
  "/Consumer_Packaged_Goods",
  "/Education",
  "/Engineering",
  "/Financial",
  "/Healthcare_Life_Sciences",
  "/Industrials_Electronics_Industrial_Goods",
  "/Infrastructure",
  "/Insurance_Industry",
  "/Logistics_Transportation",
  "/Packaging_&_Paper",
  "/Principal_Investors_and_Private_Equity_Private_Capital",
  "/Real_Estate",
  "/Retail_Industry",
  "/Technology_Media_Telecommunications",
  "/Travel_Tourism",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    borderRadius: "12px",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
    },
  },
};

const iconVariants = {
  hover: {
    rotate: 45,
    transition: {
      duration: 0.3,
    },
  },
};

export  function IndustriesSection() {
  return (
    <section className="py-24 bg-muted/30" id="industries">
      <div className="container-custom px-6 md:px-16">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We bring deep expertise across a wide range of industries to help you solve your toughest challenges and seize your biggest opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="h-38  min-h-[120px] bg-white dark:bg-card border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-6 relative group transition-colors"
              variants={cardVariants}
              whileHover="hover"
            >
              
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-bodoni font-bold tracking-tight ">{industry}</h3>
              <p className="flex text-sm text-gray-500 dark:text-gray-400 mt-14 absolute bottom-6 right-14 ">Explore</p>

              <motion.div
                className="absolute bottom-4 right-4 bg-[#fd4f00] text-white p-2 rounded-full  transition-colors"
                variants={iconVariants}
              >
                <Link href={industriesLinks[index]}>
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
