'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import EducationIMG from '../../lib/industriesImages/educationIMG.jpg';
import EducationBG from '../../lib/industriesImages/educationBG.jpg';

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

export default function EngineeringPage() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={EducationBG}
          alt="Engineering industry background"
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
              Engineering, Construction & Building Materials <span className="text-[#fd4f00]">Solutions</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Engineering the Future with Precision, Productivity & Global Vision
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global works with EPC firms, design and simulation providers, and industrial engineering companies to drive operational excellence, talent optimization, and future-forward innovation. We bring strategy, digital transformation, and industry partnerships together.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-800 hover:bg-white hover:text-gray-900">
                  See Engineering Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={EducationIMG}
              alt="Engineering project"
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
                "🏗 Legacy systems and poor tech integration",
                "📉 Low margins and overreliance on manpower-based execution",
                "💼 Unstructured business development or pipeline strategy",
                "🌍 Lack of global partnerships or multi-market access",
                "🧠 Talent gaps in emerging tech and advanced modeling",
                "🔍 Difficulty in productizing or IP-leveraging core capabilities"
              ].map((challenge, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover="hover"
                  variants={hoverCard}
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
              We help engineering firms move from legacy consulting models to scalable, digitized, and globally competitive organizations by reimagining delivery and unlocking strategic innovation.
            </p>
            <p className="font-medium italic">
              Example: A 40-year-old structural design firm worked with DOMS to create an IP licensing model, rebrand its core services, and enter the Middle East market with two EPC clients in under a year.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services in Strategy & Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Model Re-Engineering",
                  desc: "Transforms traditional delivery models into scalable, repeatable IP-led businesses"
                },
                {
                  title: "Digital Tools & Platform Strategy",
                  desc: "Assesses and deploys BIM, CAD, PLM, and collaboration platforms"
                },
                {
                  title: "Partner Ecosystem & Expansion",
                  desc: "Builds JV, alliance or subcontract networks for international delivery"
                },
                {
                  title: "Operational Excellence Advisory",
                  desc: "Streamlines project planning, quality benchmarks, and delivery KPIs"
                },
                {
                  title: "R&D Commercialization",
                  desc: "Helps monetize proprietary engineering processes or IP"
                },
                {
                  title: "Talent Capability & Future-Skills",
                  desc: "Designs internal upskilling and tech talent acquisition pathways"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover="hover"
                  variants={hoverCard}
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
                "Global BD playbook for India-based EPC firm",
                "Talent bench design for digital twin deployment services",
                "New revenue stream via structural design IP licensing",
                "Software platform recommendation for design review automation",
                "Engineering delivery unit setup in East Africa for mining infrastructure"
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
                  title: "Reimagining Engineering Consulting for the Digital Age",
                  type: "Guide"
                },
                {
                  icon: "📊",
                  title: "Global Engineering Services: Growth Trends & Models",
                  type: "Report"
                },
                {
                  icon: "🧠",
                  title: "From CAD to Cloud – Where Engineering IP Lives",
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