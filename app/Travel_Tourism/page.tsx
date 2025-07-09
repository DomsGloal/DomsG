'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import TravelBG from '../../lib/industriesImages/TravelBG.jpg';
import TravelIMG from '../../lib/industriesImages/TravelIMG.jpg';

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

export default function TravelTourismPage() {
  const router = useRouter();
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={TravelBG}
          alt="Travel destination background"
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
              Travel & Tourism <span className="text-[#fd4f00]"> Solutions </span>
            </h1>
            <p className="text-xl font-medium mb-6 text-gray-200">
              Redefining Journeys, Experiences & Destination Growth
            </p>
            <p className="mb-8 max-w-3xl text-gray-300 leading-relaxed">
              DOMS Global partners with travel operators, tourism boards, hospitality brands, and experience startups to reimagine experiences for the modern traveler. We drive strategies that fuel visitor engagement, digital booking, and destination branding.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#fd4f00] hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Book a Strategy Call <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="px-8 py-6 text-lg border-gray-300 text-gray-900 hover:bg-white hover:text-gray-900">
                  See Travel Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="lg:w-1/3 relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src={TravelIMG}
              alt="Modern travel experience"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Travel Industry Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "✈️ Fluctuating travel demand",
                "📉 Low booking conversions",
                "📲 Disconnected platforms",
                "🏨 Inefficient partnerships",
                "🌍 Weak destination branding",
                "🧳 Fragmented experiences"
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
              We enable seamless journeys by modernizing digital platforms, crafting brand narratives, and optimizing destination strategies to elevate traveler delight and business ROI.
            </p>
            <p className="font-medium italic">
              Example: A heritage destination startup collaborated with DOMS to create immersive travel packages, design its digital funnel, and onboard 120+ experience vendors in under a year.
            </p>
          </motion.div>

          {/* Core Services */}
          <motion.div variants={item} className="bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">Core Travel & Tourism Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Destination Strategy",
                  desc: "Drives visitor growth and market outreach"
                },
                {
                  title: "Experience Design",
                  desc: "Creates journeys aligned with traveler personas"
                },
                {
                  title: "Digital Booking Advisory",
                  desc: "Optimizes booking flows and mobile-first UX"
                },
                {
                  title: "Partnerships Enablement",
                  desc: "Structures co-marketing and affiliate programs"
                },
                {
                  title: "Tourism Intelligence",
                  desc: "Dashboards to track traffic and behavior"
                },
                {
                  title: "Sustainability Design",
                  desc: "Eco-conscious programs with community benefits"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Delivered Travel Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Destination brand strategy for tourism board",
                "UX redesign for travel aggregator",
                "Vendor toolkit for tour operator",
                "Data dashboard for travel center",
                "Content strategy for luxury brand"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">Travel Insights & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📘",
                  title: "Travel Funnel Optimization",
                  type: "Guide"
                },
                {
                  icon: "📊",
                  title: "Experience-First Itineraries",
                  type: "Playbook"
                },
                {
                  icon: "🌿",
                  title: "Sustainable Travel Programs",
                  type: "Report"
                },
                {
                  icon: "🏷",
                  title: "Destination Branding",
                  type: "Framework"
                },
                {
                  icon: "🎙",
                  title: "Post-Pandemic Strategy",
                  type: "Webinar"
                },
                {
                  icon: "📱",
                  title: "Mobile Booking Trends",
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
}