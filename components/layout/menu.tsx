'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
  name: string;
  href?: string;
  subcategories?: Category[];
  details?: string[];
}

const industriesWithDetails: Category[] = [
  { name: 'Agriculture', details: ['Modernize supply chains for efficiency', 'Digital advisory for precision farming'] },
  { name: 'Automotive & Assembly', details: ['Optimize manufacturing processes', 'Enable EV transition and smart mobility'] },
  { name: 'Chemicals', details: ['Improve operational sustainability', 'Strategic expansion into green chemicals'] },
  { name: 'Consumer Packaged Goods / Products', details: ['Brand positioning and product innovation', 'Route-to-market transformation'] },
  { name: 'Education', details: ['EdTech implementation strategies', 'Institutional growth planning'] },
  { name: 'Engineering, Construction & Building Materials', details: ['Smart construction project planning', 'Supply chain digitalization'] },
  { name: 'Financial Institutions / Services', details: ['FinTech integration strategies', 'Customer-centric transformation'] },
  { name: 'Healthcare / Life Sciences', details: ['Operational excellence for hospitals', 'Market entry for pharma innovations'] },
  { name: 'Industrials & Electronics / Industrial Goods', details: ['Industry 4.0 transformation', 'Asset lifecycle optimization'] },
  { name: 'Infrastructure', details: ['Smart city advisory services', 'Infrastructure investment planning'] },
  { name: 'Insurance Industry', details: ['Customer analytics and segmentation', 'Claims digitization and automation'] },
  { name: 'Logistics / Transportation', details: ['Fleet optimization strategies', 'AI-powered route efficiency'] },
  { name: 'Packaging & Paper', details: ['Sustainable packaging strategy', 'Cost-efficiency through automation'] },
  { name: 'Principal Investors and Private Equity / Private Capital', details: ['Due diligence and valuation support', 'Portfolio growth strategy'] },
  { name: 'Real Estate', details: ['Property tech transformation', 'Sustainable construction advisory'] },
  { name: 'Retail Industry', details: ['Omnichannel retail strategy', 'Consumer behavior analytics'] },
  { name: 'Technology, Media & Telecommunications', details: ['Digital product strategy', 'Cloud and cybersecurity roadmap'] },
  { name: 'Travel and Tourism', details: ['Digital booking experience upgrade', 'Customer journey mapping'] }
];

const menuData: Category[] = [
  {
    name: 'Services',
    subcategories: [
      {
        name: 'Capabilities',
        subcategories: [
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
              'Business Development & Growth Strategy'
            ].map(name => ({ name }))
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
              'Sales Channel Strategy'
            ].map(name => ({ name }))
          }
        ]
      },
      {
        name: 'Industries',
        subcategories: industriesWithDetails.map(industry => ({
          name: industry.name,
          details: industry.details
        }))
      }
    ]
  },
  {
    name: 'Insights',
    subcategories: [
      { name: 'Case Studies' },
      { name: 'Blogs & Articles' },
      { name: 'Resources & Reports' },
      { name: 'Press & News' }
    ]
  },
  {
    name: 'About Us',
    subcategories: [
      { name: 'Who We Are' },
      { name: 'Our Team' },
      { name: 'Our Approach' },
      { name: 'Careers' }
    ]
  },
  {
    name: 'Contact',
    subcategories: [
      { name: 'Book a Meeting' },
      { name: 'Support' },
      { name: 'Office Locations' }
    ]
  }
];

const DropdownMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<Category | null>(null);
  const [subHovered, setSubHovered] = useState<Category | null>(null);
  const [tertiaryHovered, setTertiaryHovered] = useState<Category | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeMenus = () => {
    setHovered(null);
    setSubHovered(null);
    setTertiaryHovered(null);
    setMenuOpen(false);
  };

  // Gracefully handle mouse leave with delay
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      closeMenus();
    }, 300); // 300ms delay before auto-close
  };

  const cancelClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50">
      <div className="fixed left-4 z-[9999]">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-800 dark:text-gray-100 shadow hover:shadow-md transition"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          Menu
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[90px] left-[24px] w-[90vw] max-w-[1280px] max-h-[90vh] overflow-auto z-[9999] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-xl font-inter p-2 md:p-0"
            ref={containerRef}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={cancelClose}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Level 1 */}
              <div className="md:w-1/4 border-b md:border-b-0 md:border-r bg-gray-50 dark:bg-gray-800 overflow-y-auto">
                {menuData.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => {
                      cancelClose();
                      setHovered(item);
                      setSubHovered(null);
                      setTertiaryHovered(null);
                    }}
                    className={`px-4 py-3 text-[15px] cursor-pointer ${
                      hovered?.name === item.name ? 'bg-orange-100 text-orange-800' : 'hover:bg-orange-50'
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Level 2 */}
              <div className="md:w-1/4 border-b md:border-b-0 md:border-r p-4 overflow-y-auto">
                {hovered?.subcategories?.map((sub, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => {
                      cancelClose();
                      setSubHovered(sub);
                      setTertiaryHovered(null);
                    }}
                    className={`mb-2 text-[14px] cursor-pointer ${
                      subHovered?.name === sub.name ? 'text-orange-600' : 'hover:text-orange-500'
                    }`}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>

              {/* Level 3 */}
              <div className="md:w-1/4 border-b md:border-b-0 md:border-r p-4 bg-gray-50 dark:bg-gray-800 overflow-y-auto">
                {subHovered?.subcategories?.length ? (
                  <ul className="space-y-2">
                    {subHovered.subcategories.map((item, j) => (
                      <li
                        key={j}
                        onMouseEnter={() => {
                          cancelClose();
                          setTertiaryHovered(item);
                        }}
                        className={`text-[14px] cursor-pointer ${
                          tertiaryHovered?.name === item.name ? 'text-orange-600' : 'hover:text-orange-500'
                        }`}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400">Hover a category to see more</p>
                )}
              </div>

              {/* Level 4 */}
              <div className="md:w-1/4 p-4 bg-white dark:bg-gray-900 overflow-y-auto">
                {tertiaryHovered?.details ? (
                  <ul className="list-disc list-inside text-[14px] text-gray-600 dark:text-gray-300 space-y-2">
                    {tertiaryHovered.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400">Hover an item for insights</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;