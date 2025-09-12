import React from "react";
import SpotlightCard from "./SpotlightCard";
import ShinyText from "./ShinyText";
import ScrollVelocity from "./ScrollVelocity";
import { Link } from "react-router-dom";
import { FEATURES } from "../constants/features";

const Freature = () => {
  const features = FEATURES.map(feature => ({
    ...feature,
    icon: feature.slug === 'admission-system'
      ? <span className="text-2xl">📥</span>
      : <i className={`bx ${feature.icon} text-2xl text-white`}></i>,
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

  return (
    <section id="Features-Section" className="feature-section my-[6rem] container mx-auto px-4 lg:px-16 flex flex-col justify-center items-center gap-12 text-center">
      <div className="feature-text flex flex-col items-stretch justify-stretch sm:items-center sm:justify-center space-y-6">
        <ScrollVelocity
          texts={[
            " Features Of Student Management Software",
            "Features Of College Management Software"
          ]}
          velocity={120} // adjust scroll speed
          className="text-4xl md:text-5xl  lg:text-[5rem] font-semibold tighting-wide mb-3"
        />
        <p className="text-center text-base md:text-lg lg:text-xl font-light tighting-wide">
          Our comprehensive Student Management System includes core modules, admission system, 
          and communication tools designed to streamline academic operations for schools, colleges, and universities.
        </p>
      </div>
      
      {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
        <div key={category} className="w-full max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left">
            {category}
          </h2>
          <div className="feature-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr gap-6 w-full">
            {categoryFeatures.map((feature, index) => (
              <SpotlightCard key={index} className="h-full">
                <div className="flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${feature.gradient} hover:bg-white/20 transition-colors duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed flex-grow font-light">
                    {feature.description}
                  </p>
                  <div className="pt-4">
                    <Link to={`/${feature.slug}`} className="nav-a-link inline-flex items-center gap-1">
                      Learn more <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Freature;
