'use client';

import React, { useEffect, useState } from 'react';
import { categories } from '@/lib/categories';


 

const FindYourSolution: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(categories[0].subcategories[0]);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


   useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    const matched = categories.find(cat => cat.name === newCategory);
    if (matched) {
      setSelectedSubcategory(matched.subcategories[0]);
    }
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubcategory(e.target.value);
  };

    if (!mounted) return null;

  return (
    <section className="max-w-6xl mx-auto p-6 sm:p-8 bg-white dark:bg-[#0d0d0d] rounded-2xl shadow-xl mt-16 transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Find Your Perfect Solution
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Tell us about your industry and focus area to discover tailored solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
        <div className="flex flex-col w-full sm:w-1/2">
          <label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            We work in...
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            aria-label="Select industry category"
            className="border border-orange-300 dark:border-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-full sm:w-1/2">
          <label htmlFor="subcategory" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Our focus is on...
          </label>
          <select
            id="subcategory"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            aria-label="Select focus subcategory"
            className="border border-orange-300 dark:border-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            {categories
              .find((cat) => cat.name === selectedCategory)
              ?.subcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-glow transition-all duration-300"
        >
          See Our Solutions →
        </button>
      </div>
    </section>
  );
};

export default FindYourSolution;
