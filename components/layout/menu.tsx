'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
  name: string;
  subcategories: string[];
}

const categories: Category[] = [

  {
    name: 'Strategy & Business Transformation',
    subcategories: [
      'Corporate Strategy',
      'Business Restructuring',
      'Business Building',
      'Strategy & Corporate Finance',
      'Innovation Strategy',
      'Global Expansion Advisory',
      'Growth Strategy',
      'Business Growth & Transformation',
      'Business Model Innovation',
      'Start-up Advisory',
      'Start-up Catalyst',
      'Business Incubation Support',
      'Market Research & Validation',
      'Funding & Investment Guidance',
      'Business Development & Growth Strategy',
    ],
  },
  {
    name: 'Marketing, Branding & Customer Strategy',
    subcategories: [
      'Customer & Market Strategy',
      'Customer Experience',
      'Customer Insights',
      'Branding & Brand Management',
      'Product & Portfolio Management',
      'Pricing & Revenue Management',
      'Pricing',
      'Demand Marketing',
      'Marketing Campaigns',
      'Channel to Market Strategies',
      'Advertising',
      'Public Relations',
      'Digital Marketing',
      'E-commerce',
      'Digital Sales',
      'Sales Channel Strategy',
    ],
  },
  {
    name: 'Operations & Supply Chain',
    subcategories: [
      'Operations Excellence',
      'Supply Chain Management',
      'Supply Chain Transformation',
      'Sales & Operations Planning',
      'Operation Efficiency',
      'Cost Management',
      'Lean Transformation',
      'Strategic Sourcing & Procurement',
      'Planning Operation Efficiency',
    ],
  },
  {
    name: 'Technology, IT & Digital Transformation',
    subcategories: [
      'Digital, AI & Technology',
      'Digital Strategy Consulting',
      'Technology Transformation',
      'Artificial Intelligence',
      'Web 3.0',
      'IT Services',
      'System Architecture Design',
      'IT Portfolio Management',
      'Evolution of Custom Systems & Services',
      'Digital Transformation',
      'Cybersecurity Roadmaps',
      'Compliance Tracking',
      'IT Governance',
      'Risk Assessment',
      'Policy & Procedure Preparation & Review',
      'Content Assessment',
    ],
  },
  {
    name: 'Finance, Risk & Assurance',
    subcategories: [
      'M&A, Transactions, and Post-Merger Integration (PMI)',
      'Valuation & Modeling',
      'Financial Due Diligence (Financial, Commercial, Tax)',
      'Tax Planning (Direct & Indirect)',
      'Global Trade & Compliance',
      'Financial Accounting & Corporate Reporting',
      'Risk Management & Compliance',
      'Technology Risk',
      'Cybersecurity Services',
      'Financial Services Risk Management',
      'Internal Audit & Risk Assessments',
      'Third-Party Risk Management',
      'Tax Managed Services',
      'Virtual CFO',
      'Virtual Compliance',
      'Virtual Operations',
      'Virtual Counsel HRO',
      'Risk Managed Services',
    ],
  },
  {
    name: 'People, Culture & Organizational Performance',
    subcategories: [
      'People Strategy',
      'HR Transformation',
      'Change Management',
      'Learning & Development',
      'Reward & Recognition Advisory',
      'Cultural & Change Management',
      'Organisation Design',
      'People & Organizational Performance',
    ],
  },
  {
    name: 'GTM, Innovation & Growth Advisory',
    subcategories: [
      'GTM Innovation Strategy',
      'Market Entry Strategy',
      'Driving Business Growth',
      'Optimising Brand Growth',
      'Revenue Growth Advisory',
      'Strategic Partnership & Change',
      'Global Capability Centres',
      'Offshore Development Centres',
    ],
  },

];

const DropdownMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hoveredCat, setHoveredCat] = useState<Category | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setHoveredCat(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed top-20 left-4 z-50">
        <div
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => {
            setMenuOpen(false);
            setHoveredCat(null);
          }}
          className="relative"
        >
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-3 px-5 py-3 from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
            <span className="text-sm font-semibold tracking-wide">Services</span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute top-full mt-3 w-[28rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 shadow-2xl rounded-2xl overflow-hidden"
              >
                <div className="flex min-h-[400px]">
                  {/* Category List */}
                  <div className="w-1/2 border-r border-gray-200/40 dark:border-gray-700/40 bg-gradient-to-b from-gray-50/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-900/30">
                    <div className="p-4 border-b border-gray-200/40 dark:border-gray-700/40">
                      <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service Categories</h3>
                    </div>
                    {categories.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        onMouseEnter={() => setHoveredCat(cat)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className={`px-4 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 cursor-pointer transition-all duration-300 border-l-4 ${
                          hoveredCat?.name === cat.name
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-900/40 dark:to-orange-800/20 border-l-orange-500 text-orange-700 dark:text-orange-300 shadow-sm'
                            : 'hover:bg-gray-50/80 dark:hover:bg-gray-800/50 border-l-transparent hover:border-l-gray-300 dark:hover:border-l-gray-600'
                        }`}
                      >
                        <div className="leading-tight">{cat.name}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subcategory List */}
                  <div className="w-1/2 p-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
                    <AnimatePresence mode="wait">
                      {hoveredCat ? (
                        <motion.div
                          key={hoveredCat.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="mb-3">
                            <h4 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
                              Specializations
                            </h4>
                            <div className="h-px bg-gradient-to-r from-orange-300 to-transparent dark:from-orange-600"></div>
                          </div>
                          <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 text-xs max-h-80 overflow-y-auto custom-scrollbar">
                            {hoveredCat.subcategories.map((sub, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                className="hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer transition-all duration-200 px-2 py-1.5 rounded-lg hover:bg-orange-50/80 dark:hover:bg-orange-900/20 group"
                              >
                                <span className="inline-block w-2 h-2 bg-orange-300 dark:bg-orange-600 rounded-full mr-2 group-hover:bg-orange-500 transition-colors duration-200"></span>
                                {sub}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500"
                        >
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Menu size={20} className="text-orange-500 dark:text-orange-400" />
                            </div>
                            <p className="text-xs font-medium">Hover over a category to see services</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tailwind scrollbar custom styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
    </>
  );
};

export default DropdownMenu;
