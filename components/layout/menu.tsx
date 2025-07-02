'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
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
  
  // Mobile-specific states
  const [mobileActiveLevel1, setMobileActiveLevel1] = useState<Category | null>(null);
  const [mobileActiveLevel2, setMobileActiveLevel2] = useState<Category | null>(null);
  const [mobileActiveLevel3, setMobileActiveLevel3] = useState<Category | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeMenus = () => {
    setHovered(null);
    setSubHovered(null);
    setTertiaryHovered(null);
    setMobileActiveLevel1(null);
    setMobileActiveLevel2(null);
    setMobileActiveLevel3(null);
    setMenuOpen(false);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHovered(null);
        setSubHovered(null);
        setTertiaryHovered(null);
      }, 300);
    }
  };

  const cancelClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleMobileToggle = (item: Category, level: number) => {
    if (level === 1) {
      setMobileActiveLevel1(mobileActiveLevel1?.name === item.name ? null : item);
      setMobileActiveLevel2(null);
      setMobileActiveLevel3(null);
    } else if (level === 2) {
      setMobileActiveLevel2(mobileActiveLevel2?.name === item.name ? null : item);
      setMobileActiveLevel3(null);
    } else if (level === 3) {
      setMobileActiveLevel3(mobileActiveLevel3?.name === item.name ? null : item);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenus();
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Desktop hover handlers
  const handleDesktopHover = (item: Category, level: number) => {
    if (isMobile) return;
    
    cancelClose();
    if (level === 1) {
      setHovered(item);
      setSubHovered(null);
      setTertiaryHovered(null);
    } else if (level === 2) {
      setSubHovered(item);
      setTertiaryHovered(null);
    } else if (level === 3) {
      setTertiaryHovered(item);
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[9998] md:hidden"
            onClick={closeMenus}
          />
        )}
      </AnimatePresence>

      <div className="relative z-50">
        {/* Menu Button */}
        <div className={`fixed ${isMobile ? 'top-4 left-4' : 'top-8 left-8'} z-[9999]`}>
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className={`flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 ${
              menuOpen ? 'bg-orange-50 border-orange-200 text-orange-700' : ''
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`fixed z-[9999]   ${
                isMobile 
                  ? 'top-20 left-4 right-4 max-h-[80vh]' 
                  : 'top-24 left-8 w-[95vw] max-w-[1200px] max-h-[85vh]'
              }`}
              ref={containerRef}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={cancelClose}
            >
              {isMobile ? (
                // Mobile Layout - Accordion Style
                <div className="overflow-y-auto max-h-[80vh]">
                  {menuData.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <button
                        onClick={() => handleMobileToggle(item, 1)}
                        className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                        {item.subcategories && (
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform ${
                              mobileActiveLevel1?.name === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {mobileActiveLevel1?.name === item.name && item.subcategories && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gray-50 dark:bg-gray-800"
                          >
                            {item.subcategories.map((sub, i) => (
                              <div key={i}>
                                <button
                                  onClick={() => handleMobileToggle(sub, 2)}
                                  className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{sub.name}</span>
                                  {sub.subcategories && (
                                    <ChevronRight 
                                      size={14} 
                                      className={`transform transition-transform ${
                                        mobileActiveLevel2?.name === sub.name ? 'rotate-90' : ''
                                      }`}
                                    />
                                  )}
                                </button>
                                
                                <AnimatePresence>
                                  {mobileActiveLevel2?.name === sub.name && sub.subcategories && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden bg-gray-100 dark:bg-gray-700"
                                    >
                                      {sub.subcategories.map((tertiary, j) => (
                                        <div key={j}>
                                          <button
                                            onClick={() => handleMobileToggle(tertiary, 3)}
                                            className="w-full flex items-center justify-between px-8 py-2.5 text-left hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                          >
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{tertiary.name}</span>
                                            {tertiary.details && (
                                              <ChevronRight 
                                                size={12} 
                                                className={`transform transition-transform ${
                                                  mobileActiveLevel3?.name === tertiary.name ? 'rotate-90' : ''
                                                }`}
                                              />
                                            )}
                                          </button>
                                          
                                          <AnimatePresence>
                                            {mobileActiveLevel3?.name === tertiary.name && tertiary.details && (
                                              <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden bg-gray-200 dark:bg-gray-600 px-10 py-3"
                                              >
                                                <ul className="space-y-1">
                                                  {tertiary.details.map((detail, k) => (
                                                    <li key={k} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                                      <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                      {detail}
                                                    </li>
                                                  ))}
                                                </ul>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              ) : (
                // Desktop Layout - Dynamic Column Grid
                <div className="flex h-full min-h-[350px] max-h-[80vh]">
                  {/* Level 1 */}
                  <div className="flex-shrink-0 w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto transition-all duration-300">
                    <div className="p-2">
                      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-3 py-2">Main Categories</h3>
                      {menuData.map((item, idx) => (
                        <div
                          key={idx}
                          onMouseEnter={() => handleDesktopHover(item, 1)}
                          className={`mx-1 mb-1 px-3 py-3 text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 ${
                            hovered?.name === item.name 
                              ? 'bg-orange-100 text-orange-800 shadow-sm transform scale-[1.02]' 
                              : 'hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            {item.name}
                            {item.subcategories && <ChevronRight size={14} className="opacity-60" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Level 2 */}
                  {hovered?.subcategories?.length && (
                    <div className="flex-shrink-0 w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-y-auto transition-all duration-300">
                      <div className="p-4">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                          {hovered.name}
                        </h3>
                        {hovered.subcategories.map((sub, i) => (
                          <div
                            key={i}
                            onMouseEnter={() => handleDesktopHover(sub, 2)}
                            className={`mb-2 px-3 py-2.5 text-sm cursor-pointer rounded-md transition-all duration-150 ${
                              subHovered?.name === sub.name 
                                ? 'bg-orange-50 text-orange-700 border-l-2 border-orange-400' 
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              {sub.name}
                              {sub.subcategories && <ChevronRight size={12} className="opacity-60" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Level 3 */}
                  {subHovered?.subcategories?.length && (
                    <div className="flex-shrink-0 w-64 border-r border-gray-200 dark:border-gray-700 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-y-auto transition-all duration-300">
                      <div className="p-4">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                          {subHovered.name}
                        </h3>
                        <ul className="space-y-1">
                          {subHovered.subcategories.map((item, j) => (
                            <li
                              key={j}
                              onMouseEnter={() => handleDesktopHover(item, 3)}
                              className={`px-3 py-2 text-sm cursor-pointer rounded-md transition-all duration-150 ${
                                tertiaryHovered?.name === item.name 
                                  ? 'bg-orange-100 text-orange-700 shadow-sm' 
                                  : 'hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                              }`}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Level 4 */}
                  {tertiaryHovered?.details && (
                    <div className="flex-shrink-0 w-64 bg-white dark:bg-gray-900 overflow-y-auto transition-all duration-300">
                      <div className="p-4">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                          {tertiaryHovered.name} Details
                        </h3>
                        <ul className="space-y-3">
                          {tertiaryHovered.details.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DropdownMenu;