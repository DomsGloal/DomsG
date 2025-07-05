'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import infrastructureBackground from "../../lib/industriesImages/InfraBG.jpg";
import infrastructureForeground from "../../lib/industriesImages/infraIMG.jpg";

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

export default function InfrastructurePage() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={infrastructureBackground}
          alt="Infrastructure background"
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
              Infrastructure <span className="text-[#fd4f00]">Soluations</span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Enabling Smart Infrastructure with Planning, Policy & Execution Alignment
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global helps infrastructure developers, EPC firms, urban planners, and government agencies design and deliver infrastructure projects with strategic vision and execution excellence. From concept to commission, we accelerate outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See Infrastructure Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={infrastructureForeground}
              alt="Modern infrastructure"
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
                "🏗 Delays in project clearances, land acquisition & stakeholder alignment",
                "📉 Poor feasibility assessment and misaligned budgeting",
                "🌍 Fragmented sustainability goals and ESG non-compliance",
                "🔧 Lack of execution control and weak PMC frameworks",
                "🛣 Limited integration of smart technologies and IoT",
                "📊 No central monitoring system for infra KPIs and impact"
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
              We bring strategic clarity and policy-to-ground execution frameworks that fast-track complex infrastructure mandates—across transport, energy, urban housing, and more.
            </p>
            <p className="font-medium italic">
              Example: A smart city SPV worked with DOMS to set up a 3-year implementation roadmap with cost-optimized phasing, ESG impact modeling, and stakeholder governance—improving project pace by 42%.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Services in Strategy & Transformation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Feasibility Studies & Business Planning",
                  desc: "Provides financial, technical & socio-economic viability reports"
                },
                {
                  title: "PPP Structuring & Stakeholder Engagement",
                  desc: "Aligns governments, investors & citizens with project vision"
                },
                {
                  title: "Execution Strategy & PMC Frameworks",
                  desc: "Defines program milestones, partner roles & delivery controls"
                },
                {
                  title: "Smart Infra & IoT Integration Strategy",
                  desc: "Integrates sensors, analytics & connected infra planning"
                },
                {
                  title: "ESG Impact Modeling & Sustainability",
                  desc: "Quantifies environmental & social ROI of infra projects"
                },
                {
                  title: "Policy Advisory & Reform Support",
                  desc: "Assists infra ministries & agencies with reform roadmaps"
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
                "Infra execution roadmap for North Indian industrial corridor",
                "PPP structuring model for rural digital infrastructure",
                "Smart utility infrastructure plan for Tier-2 cities",
                "Stakeholder governance model for renewable infra SPV",
                "Centralized dashboard strategy for national infra ministry"
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
                  title: "Building Infrastructure with ESG in Mind",
                  type: "Guide"
                },
                {
                  icon: "📊",
                  title: "Smart Infra: From Blueprint to Reality",
                  type: "Report"
                },
                {
                  icon: "🧠",
                  title: "Land & Stakeholder Strategy in Infra Projects",
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