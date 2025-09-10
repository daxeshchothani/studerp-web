import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import { FEATURES } from "../constants/features";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleFeatures = () => {
    setIsFeaturesOpen((prev) => !prev);
  };

  const closeFeatures = () => {
    setIsFeaturesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFeaturesOpen && !event.target.closest('.features-dropdown')) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFeaturesOpen]);

  const scrollToHashTarget = (hash) => {
    const targetId = hash.startsWith('#') ? hash : `#${hash}`;
    const target = document.querySelector(targetId);
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;

    if (target) {
      const rect = target.getBoundingClientRect();
      const y = window.scrollY + rect.top - headerHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      if (isOpen) closeMenu();
      setTimeout(() => scrollToHashTarget(href), 0);
    }
  };
  return (
    <header className="z-50 w-full flex items-center justify-between p-4 lg:px-16">
      {/* Navigation */}
      <nav className="md:flex w-full items-center justify-between  ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
            STUEDU
          </h1>
        </div>
        <ul className="hidden md:flex gap-6 text-lg lg:text-xl items-center">
          <li>
            <a href="#app.jsx" className="nav-a-link" onClick={handleAnchorClick}>
              Home
            </a>
          </li>
          <li className="relative group features-dropdown">
            <button 
              className="nav-a-link flex items-center gap-1"
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              Features
              <i className="bx bx-chevron-down text-sm"></i>
            </button>
            {isFeaturesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 features-dropdown"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                <div className="p-4">
                  <div className="space-y-4">
                    {Object.entries(
                      FEATURES.reduce((acc, feature) => {
                        const category = feature.category || 'Other';
                        if (!acc[category]) acc[category] = [];
                        acc[category].push(feature);
                        return acc;
                      }, {})
                    ).map(([category, features]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">
                          {category}
                        </h3>
                        <div className="space-y-2">
                          {features.map((feature) => (
                            <Link
                              key={feature.id}
                              to={`/${feature.slug}`}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                              onClick={closeFeatures}
                            >
                              <div className={`w-8 h-8 rounded-lg ${feature.gradient} flex items-center justify-center`}>
                                <i className={`bx ${feature.icon} text-sm text-white`}></i>
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{feature.title}</p>
                                <p className="text-white/60 text-xs line-clamp-1">{feature.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <a href="#Why-Us" className="nav-a-link" onClick={handleAnchorClick}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#Contact-Section" className="nav-a-link" onClick={handleAnchorClick}>
              Contact
            </a>
          </li>
          <li>
            <a href="#Contact-Section" className="btn" onClick={handleAnchorClick}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
      {/*Mobile user menu button */}

      <button onClick={toggleMenu} className="text-4xl font-light z-50 md:hidden">
        <i id="menuButton" className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </button>

      {/* Mobile menu hidden by deafult */}

      <div
        id="mobileMenu"
        className={`${isOpen ? "block" : "hidden"} z-40 fixed inset-0 h-full w-full md:hidden bg-black/90 backdrop-blur-sm`}
        onClick={closeMenu}
      >
        <nav className="h-full w-full flex flex-col px-8 pt-12" onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col items-start justify-center gap-4 text-2xl">
            <li>
              <a href="#app.jsx" className="nav-a-link" onClick={handleAnchorClick}>
                Home
              </a>
            </li>
            <li className="w-full features-dropdown">
              <button 
                className="nav-a-link flex items-center gap-2 w-full text-left"
                onClick={toggleFeatures}
              >
                Features
                <i className={`bx ${isFeaturesOpen ? 'bx-chevron-up' : 'bx-chevron-down'} text-lg`}></i>
              </button>
              {isFeaturesOpen && (
                <div className="mt-4 ml-4 space-y-3">
                  {Object.entries(
                    FEATURES.reduce((acc, feature) => {
                      const category = feature.category || 'Other';
                      if (!acc[category]) acc[category] = [];
                      acc[category].push(feature);
                      return acc;
                    }, {})
                  ).map(([category, features]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {features.map((feature) => (
                          <Link
                            key={feature.id}
                            to={`/${feature.slug}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg"
                            onClick={() => {
                              closeMenu();
                              closeFeatures();
                            }}
                          >
                            <div className={`w-6 h-6 rounded-lg ${feature.gradient} flex items-center justify-center`}>
                              <i className={`bx ${feature.icon} text-sm text-white`}></i>
                            </div>
                            <div>
                              <p className="text-white font-medium">{feature.title}</p>
                              <p className="text-white/60 text-sm line-clamp-1">{feature.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <a href="#Why-Us" className="nav-a-link" onClick={handleAnchorClick}>
                Why us
              </a>
            </li>
            <li>
              <a href="#Contact-Section" className="nav-a-link" onClick={handleAnchorClick}>
                Contact
              </a>
            </li>
            <li className="mt-4">
              <a href="#Contact-Section" className="btn" onClick={handleAnchorClick}>
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
