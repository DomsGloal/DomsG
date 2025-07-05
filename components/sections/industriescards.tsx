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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
]

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

export function IndustriesSection() {
  return (
    <div className="bg-white py-12 px-6 md:px-16" id="industries">
      <h2 className="text-3xl md:text-4xl font-bold text-[#fd4f00] mb-10 text-center">
        Our Industries
      </h2>
      
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
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 relative"
            variants={cardVariants}
            whileHover="hover"
          >

            <p className="text-sm text-gray-400 mb-2">Industry</p>
            <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
            <p className="text-sm text-gray-500 mt-2">Explore services</p>

            <motion.div 
              className="absolute bottom-4 right-4 bg-[#fd4f00] text-white p-2 rounded-full"
              variants={iconVariants}
            >

              <Link href={industriesLinks[index]}><ArrowUpRight size={16} /></Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};