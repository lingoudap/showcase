import { useState } from "react";

function ServiceFilter({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="mb-12 space-y-4 md:space-y-6">
      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search services by title, category, or technologies..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-5 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-emerald-500 focus:border-emerald-400 text-white placeholder-gray-500 rounded-xl focus:outline-none transition-all duration-300 shadow-lg focus:shadow-emerald-500/20"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50"
                : "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-emerald-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ServiceFilter;
