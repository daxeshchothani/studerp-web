import React, { useState, useEffect } from "react";
import SpotlightCard from "./SpotlightCard";
import ShinyText from "./ShinyText";
import ScrollVelocity from "./ScrollVelocity";
import { Link } from "react-router-dom";
import { FEATURES } from "../constants/features";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Freature = () => {
  const [activeCategory, setActiveCategory] = useState('Core Modules');
  const [visibleCards, setVisibleCards] = useState(6); // Show only 6 cards initially
  const [isExpanded, setIsExpanded] = useState(false);

  const features = FEATURES.map(feature => ({
    ...feature,
    icon: <i className={`bx ${feature.icon} text-2xl text-white`}></i>,
  }));

  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    const category = feature.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {});

  const categories = Object.keys(groupedFeatures);
  const currentFeatures = groupedFeatures[activeCategory] || [];

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleCards(6);
      setIsExpanded(false);
    } else {
      setVisibleCards(currentFeatures.length);
      setIsExpanded(true);
    }
  };

  return (
    <section id="Features-Section" className="feature-section my-[8rem] container mx-auto px-4 lg:px-16">
      {/* Header */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-16">
        <ScrollVelocity
          texts={[
            " Features Of Student Management Software",
            "Features Of College Management Software"
          ]}
          velocity={100}
          className="text-4xl md:text-5xl lg:text-[5rem] font-semibold tighting-wide mb-6"
        />
        <p className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/80">
          Our comprehensive Student Management System includes core modules, admission system, 
          and communication tools designed to streamline academic operations for schools, colleges, and universities.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCards(6);
              setIsExpanded(false);
            }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-black -500 to-white-600 text-white shadow-lg shadow-white-500/25'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFeatures.slice(0, visibleCards).map((feature, index) => (
            <div
              key={feature.id}
              className="transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SpotlightCard className="h-full cursor-pointer group">
                <div className="flex flex-col h-full p-8">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80">
                      {feature.category}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed flex-grow mb-6 line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Key Benefits Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/90 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                          <i className="bx bx-check text-green-400 text-xs"></i>
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Link 
                      to={`/${feature.slug}`} 
                      className="inline-flex items-center gap-2 text-white hover:text-gray-300 font-medium transition-colors duration-300 group-hover:gap-3"
                      onClick={scrollToTop}
                    >
                      Learn more 
                      <i className="bx bx-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {currentFeatures.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="px-8 py-4 rounded-full bg-white/10 text- font-medium text-white/80 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {isExpanded ? 'Show Less' : `Show All ${currentFeatures.length} Features`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Freature;
