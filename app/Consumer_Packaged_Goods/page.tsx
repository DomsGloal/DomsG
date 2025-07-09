'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import  ConsumerBG from '../../lib/industriesImages/consumerBG.jpg';
import ConsumerImg from '../../lib/industriesImages/consumerImg.jpg';

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

export default function ConsumerPackagedGoodsPage() {
  const router = useRouter();
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={ConsumerBG} 
          alt="CPG industry background"
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
        <motion.button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white mb-6 hover:underline"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ArrowLeft size={18} />
          <span className="text-base">Go Back</span>
        </motion.button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <motion.div variants={item} className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Consumer Packaged Goods <span className="text-[#fd4f00]">Solutions</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Enabling CPG Growth with Innovation, Brand Strength & Digital Agility
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global partners with fast-moving consumer goods (FMCG) brands, D2C startups, and retail-backed manufacturers to unlock next-stage growth. From brand innovation to go-to-market execution, we help CPG players compete, scale, and adapt across geographies.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See CPG Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={ConsumerImg} 
              alt="CPG products"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Challenges & Roadblocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "🛒 Margin pressure and shelf competition",
                "🌐 Fragmented channel and D2C execution",
                "🧪 Slow product innovation cycles",
                "📦 Inefficient inventory and demand forecasting",
                "🌿 ESG goals unmet across packaging and sourcing",
                "🧍 Changing consumer behavior and loyalty"
              ].map((challenge, index) => (
                <motion.div 
                  key={index}
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
              We blend consumer insights, brand design, digital operations, and category strategy to power next-gen CPG growth.
            </p>
            <p className="font-medium italic">
              Example: An Indian clean-beauty D2C brand collaborated with DOMS to optimize unit economics, re-launch with new packaging, and expand into Middle East retail chains — achieving a 32% increase in conversion.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services in Strategy & Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Brand & Product Innovation",
                  desc: "Develops standout offerings with strategic design and positioning"
                },
                {
                  title: "Omni-channel & D2C Strategy",
                  desc: "Drives consistent engagement across digital and retail touchpoints"
                },
                {
                  title: "Supply Chain Modernization",
                  desc: "Improves efficiency, agility, and demand forecasting"
                },
                {
                  title: "Consumer Insight & Research",
                  desc: "Informs launch strategies with real-time consumer trends"
                },
                {
                  title: "ESG Strategy & Packaging Design",
                  desc: "Aligns sustainability goals with packaging, sourcing, and operations"
                },
                {
                  title: "International Expansion Strategy",
                  desc: "Supports localization, compliance, and retail partnerships"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Delivered Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "New SKU launch strategy with competitive pricing",
                "Inventory analytics for reducing stock-outs",
                "Direct-to-retail entry for premium snack brand",
                "Cost-to-serve model for personal care startup",
                "Eco-packaging partner sourcing for sustainability target"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Resources & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📘",
                  title: "Rethinking FMCG Distribution in Tier 2 Cities",
                  type: "Guide"
                },
                {
                  icon: "📊",
                  title: "2025 D2C Trends in Personal Care",
                  type: "Report"
                },
                {
                  icon: "🧠",
                  title: "How Packaging Influences Brand Stickiness",
                  type: "Case Study"
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