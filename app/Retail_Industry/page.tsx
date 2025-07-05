'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import retail from '../../lib/industriesImages/RetailIMG.jpg'; 
import retailBG from '../../lib/industriesImages/RetailBG.jpg';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const hoverCard = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

export default function RetailIndustryPage() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={retailBG}
          alt="Modern retail store background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content Container */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={container}
        className="px-4 sm:px-6 lg:px-20 py-16 text-gray-100 max-w-7xl mx-auto relative"
      >
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <motion.div variants={item} className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Retail Industry <span className="text-[#fd4f00]">Solutions</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Reimagining Omnichannel Retail for the Experience-Driven Economy
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global supports retail brands, D2C startups, and multi-store chains to innovate across merchandising, digital commerce, supply chain and customer experience. From physical shelves to digital journeys, we enable retail that converts.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See Retail Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={retail}
              alt="Modern retail shopping experience"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* White Content Boxes */}
        <div className="space-y-16">
          {/* Challenges Section */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl text-gray-800 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Retail Challenges & Roadblocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "🛍 Shrinking footfalls and rising CAC",
                "📦 Inventory and last-mile inefficiencies",
                "🧠 Lack of data-backed merchandising",
                "📉 Price competition without differentiation",
                "📱 Disconnected online-offline journeys",
                "📊 Ineffective loyalty mechanics"
              ].map((challenge, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                   whileHover={hoverCard.hover}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <p className="text-lg">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Story */}
          <motion.div variants={item} className="bg-[#fd4f00] bg-opacity-20 p-8 rounded-2xl border-l-4 border-[#fd4f00] text-gray-200 backdrop-blur-sm">
            <p className="mb-4">
              We deliver full-funnel transformation—merchandising strategy, omnichannel enablement, digital growth, store experience innovation, and demand intelligence.
            </p>
            <p className="font-medium italic">
              Example: A regional retail chain partnered with DOMS to implement a unified POS, redesign store layouts, and launch their online platform—doubling conversion in 8 months.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services for Retail Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Omnichannel Strategy",
                  desc: "Unifies store, web, app, and marketplace touchpoints"
                },
                {
                  title: "Store Experience Design",
                  desc: "Optimizes layout, flow and in-store conversion"
                },
                {
                  title: "Merchandising Strategy",
                  desc: "Data-driven assortment planning and margin optimization"
                },
                {
                  title: "Digital Commerce",
                  desc: "Builds, scales or improves ecommerce platforms"
                },
                {
                  title: "Loyalty & Retention",
                  desc: "Designs programs for repeat customers and LTV"
                },
                {
                  title: "Retail Analytics",
                  desc: "Data-driven decisions from POS to shelf"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                   whileHover={hoverCard.hover}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#fd4f00] transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Delivered Solutions */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Delivered Retail Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Omnichannel strategy for fashion brand",
                "Customer segmentation for cosmetics",
                "Hyperlocal demand model for grocery",
                "Shop-in-shop format for D2C apparel",
                "Ecommerce UX redesign for electronics"
              ].map((solution, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#fd4f00] bg-opacity-10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-[#fd4f00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Retail Insights & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📘",
                  title: "Future of Omnichannel Retail",
                  type: "Report"
                },
                {
                  icon: "📊",
                  title: "Smart Merchandising with Data",
                  type: "Guide"
                },
                {
                  icon: "🧠",
                  title: "Emotionally Intelligent Stores",
                  type: "Article"
                },
                {
                  icon: "🛒",
                  title: "Personalization at Scale",
                  type: "Case Study"
                },
                {
                  icon: "🎙",
                  title: "Retail CX in Phygital World",
                  type: "Webinar"
                },
                {
                  icon: "📈",
                  title: "D2C Retail Playbook",
                  type: "Framework"
                }
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  <span className="text-2xl mb-3 block">{resource.icon}</span>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{resource.title}</h3>
                  <span className="text-sm text-[#fd4f00] font-medium">{resource.type}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};