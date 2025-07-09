'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import RealIMG from '../../lib/industriesImages/RealIMG.jpg';
import RealBG from '../../lib/industriesImages/RealBG.jpg';

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

export default function RealEstatePage() {
  const router = useRouter();
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={RealBG}
          alt="Real estate development background"
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
              Real Estate <span className="text-[#fd4f00]">Solutions</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Enabling Smarter, Sustainable, and Digitally-Led Real Estate Development
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global works with real estate developers, REITs, proptech startups, and construction firms to design future-ready real estate strategies. From site to skyline, we enable optimized investments, digital tenant journeys, and green innovation.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See Real Estate Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={RealIMG}
              alt="Modern real estate development"
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
                "🏗 Overdependence on cyclical asset classes",
                "📊 Poor demand forecasting & inventory risk",
                "📉 Low ROI on sales enablement tech",
                "🌱 ESG pressure without green innovation",
                "🔄 Inefficient project delivery systems",
                "🏢 Limited proptech integration"
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
              We reimagine the value chain across development, leasing, construction, and exit. With tailored strategy and tech adoption roadmaps, we help unlock value across both assets and operations.
            </p>
            <p className="font-medium italic">
              Example: A commercial real estate firm engaged DOMS to reposition 3 city assets for co-working & green building compliance, achieving 87% occupancy and higher rental yields.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services for Real Estate Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Portfolio Strategy",
                  desc: "Optimizes asset mix, exit timing, and product-market fit"
                },
                {
                  title: "Green Building & ESG",
                  desc: "Supports certification and sustainability innovations"
                },
                {
                  title: "Proptech Integration",
                  desc: "Digital tools for leasing and occupant journeys"
                },
                {
                  title: "Construction PM Strategy",
                  desc: "Improves cost, timeline & risk control across sites"
                },
                {
                  title: "Market Intelligence",
                  desc: "Data science for site selection and pricing"
                },
                {
                  title: "Sales Enablement",
                  desc: "Digital GTM, broker engagement & sales analytics"
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
                "Market repositioning for housing developer",
                "Digital leasing CRM for REIT portfolio",
                "Green building roadmap for SEZ developer",
                "Site selection model for co-living startup",
                "Demand model for retail in Tier 2 cities"
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
                  title: "Real Estate 2030: Smart Assets",
                  type: "Report"
                },
                {
                  icon: "📊",
                  title: "Post-COVID Commercial Leasing",
                  type: "Analysis"
                },
                {
                  icon: "🧠",
                  title: "Green Building Innovations",
                  type: "Guide"
                },
                {
                  icon: "🏙",
                  title: "Digital-First Real Estate",
                  type: "Case Study"
                },
                {
                  icon: "🎙",
                  title: "Future-Proofing Portfolios",
                  type: "Webinar"
                },
                {
                  icon: "📈",
                  title: "Proptech Adoption Trends",
                  type: "Research"
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