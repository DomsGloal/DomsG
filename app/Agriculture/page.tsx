'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import agri01 from '../../lib/industriesImages/agri01.jpg';
import agriBg from '../../lib/industriesImages/agriBg.jpg';

import { useRouter } from 'next/navigation'

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

export default function AgriculturePage() {
  const router = useRouter();
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={agriBg}
          alt="Agriculture background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
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
              Agriculture <span className="text-[#fd4f00]">Solutions</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Transforming Agriculture with Vision, Innovation & Strategic Direction
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global empowers agri-businesses, cooperatives, and agri-tech startups to thrive in an evolving global food ecosystem. From seed to scale, we deliver strategy-led transformation that helps agricultural enterprises grow sustainably, embrace innovation, and enter new markets with confidence.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See Agri Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={agri01} 
              alt="Agriculture field"
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
                "🌍 Limited market access and scalability",
                "🧭 Unclear roadmap for digital or operational transformation",
                "🚜 Inefficiencies in production-to-distribution flow",
                "💰 Unstructured funding approach or investor-readiness issues",
                "🌱 Sustainability goals without actionable plans",
                "⚠ Regulatory complexity and global trade uncertainty"
              ].map((challenge, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <p className="text-lg">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Story */}
          <motion.div variants={item} className="bg-[#fd4f00] bg-opacity-20 p-8 rounded-2xl border-l-4 border-[#fd4f00] text-gray-200 backdrop-blur-sm">
            <p className="mb-4">
              At DOMS Global, we help you bridge these gaps. We turn agribusiness challenges into strategic opportunities—equipping you with the right research, models, and growth blueprints to scale smartly.
            </p>
            <p className="font-medium italic">
              Example: A third-generation organic farm in India partnered with DOMS to redesign its business model, improve value-chain margins, and expand into two international markets within 10 months—with 23% profit increase.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services in Strategy & Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Strategy",
                  desc: "Aligns your vision with market realities and stakeholder goals"
                },
                {
                  title: "Growth Strategy",
                  desc: "Identifies new revenue streams, geographies, or customer segments"
                },
                {
                  title: "Innovation & Business Model Design",
                  desc: "Modernizes your offerings (e.g., farm-to-fork, smart agri models)"
                },
                {
                  title: "Market Research & Validation",
                  desc: "Confirms product demand, pricing strategy, and regional feasibility"
                },
                {
                  title: "Startup Advisory & Business Incubation",
                  desc: "Helps agri-tech startups develop MVPs and go-to-market plans"
                },
                {
                  title: "Global Expansion Advisory",
                  desc: "Supports exports, certifications, localization, and compliance"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:border-[#fd4f00] transition-colors"
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
                "Multi-year roadmap tailored for agribusiness lifecycle",
                "Export plans, local partnerships, D2C marketplace entry",
                "Regional feasibility study for a new organic product line",
                "Setup and support for farmer collectives launching processed goods",
                "Go-to-market and pitch deck for a smart irrigation system startup"
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
                  title: "How Smart Agri-Tech is Shaping the Future of Farming",
                  type: "Guide"
                },
                {
                  icon: "📊",
                  title: "Agricultural Business Models That Scale in Emerging Markets",
                  type: "Report"
                },
                {
                  icon: "🧠",
                  title: "Organic Farming to Global Distribution – A Case Study",
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