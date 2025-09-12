import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import { FEATURES } from "../constants/features";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const clearTimers = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openFeaturesWithDelay = (delay = 220) => {
    clearTimers();
    openTimerRef.current = setTimeout(() => {
      setIsFeaturesOpen(true);
    }, delay);
  };

  const closeFeaturesWithDelay = (delay = 320) => {
    clearTimers();
    closeTimerRef.current = setTimeout(() => {
      setIsFeaturesOpen(false);
    }, delay);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // On mobile (menu open), don't auto-close the features panel via outside clicks
      if (isOpen) return;
      if (isFeaturesOpen && !event.target.closest('.features-dropdown')) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimers();
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

  const handleFeaturesKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsFeaturesOpen(false);
    }
    if (e.key === 'ArrowDown') {
      setIsFeaturesOpen(true);
    }
    if (e.key === 'ArrowUp') {
      setIsFeaturesOpen(false);
    }
  };

  return (
    <header className="z-50 w-full flex items-center justify-between p-4 lg:px-16">
      {/* Navigation */}
      <nav className="md:flex w-full items-center justify-between  ">
        <div>
          <Link to="/" className="text-3xl md:text-4xl lg:text-5xl font-light m-0 block">
            STUDERP
          </Link>
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
              onMouseEnter={() => openFeaturesWithDelay()}
              onMouseLeave={() => closeFeaturesWithDelay()}
              onClick={() => setIsFeaturesOpen((prev) => !prev)}
              onKeyDown={handleFeaturesKeyDown}
              aria-expanded={isFeaturesOpen}
              aria-haspopup="menu"
            >
              Features
              <i className={`bx bx-chevron-down text-sm transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isFeaturesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-[90vw] sm:w-[34rem] md:w-[40rem] max-h-96 overflow-y-auto bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl z-50 features-dropdown transition-all duration-200 ease-out origin-top transform opacity-100 translate-y-0"
                role="menu"
                aria-label="Features"
                onMouseEnter={() => {
                  clearTimers();
                  setIsFeaturesOpen(true);
                }}
                onMouseLeave={() => closeFeaturesWithDelay()}
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
                      <div key={category} className="pt-3 mt-3 border-t border-white/10 first:pt-0 first:mt-0 first:border-t-0">
                        <h3 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">
                          {category}
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                          {Array.from({ length: Math.ceil(features.length / 5) }, (_, colIdx) => (
                            <div key={colIdx} className="space-y-2">
                              {features.slice(colIdx * 5, (colIdx + 1) * 5).map((feature) => (
                                <Link
                                  key={feature.id}
                                  to={`/${feature.slug}`}
                                  role="menuitem"
                                  className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition-colors duration-150"
                                  onClick={() => {
                                    clearTimers();
                                    setIsFeaturesOpen(false);
                                  }}
                                >
                                  <div className={`w-9 h-9 rounded-lg ${feature.gradient} flex items-center justify-center`}>
                                    {feature.slug === 'admission-system' ? (
                                      <span className="text-base">📥</span>
                                    ) : (
                                      <i className={`bx ${feature.icon} text-base text-white`}></i>
                                    )}
                                  </div>
                                  <div>
                                    <p className="text-white font-medium text-sm">{feature.title}</p>
                                    <p className="text-white/60 text-xs line-clamp-1">{feature.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
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
        className={`${isOpen ? "block" : "hidden"} z-40 fixed inset-0 h-full w-full md:hidden bg-black/90 backdrop-blur-sm overflow-y-auto`}
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
                onClick={() => setIsFeaturesOpen((prev) => !prev)}
              >
                Features
                <i className={`bx ${isFeaturesOpen ? 'bx-chevron-up' : 'bx-chevron-down'} text-lg`}></i>
              </button>
              {isFeaturesOpen && (
                <div className="mt-4 ml-4 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
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
                              setIsFeaturesOpen(false);
                            }}
                          >
                            <div className={`w-8 h-8 rounded-lg ${feature.gradient} flex items-center justify-center`}>
                              {feature.slug === 'admission-system' ? (
                                <span className="text-base">📥</span>
                              ) : (
                                <i className={`bx ${feature.icon} text-base text-white`}></i>
                              )}
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
