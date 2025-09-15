import React, { useState, useEffect } from 'react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Go to top"
    >
      <div className="relative">
        {/* Background with gradient and spotlight effect */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-black-500/20 to-gray-500/20 border border-blue-500/30 backdrop-blur-sm group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25">
          {/* Spotlight effect on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          
          {/* Icon */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <i className="bx bx-chevron-up text-2xl text-white group-hover:text-blue-300 transition-colors duration-300"></i>
          </div>
        </div>
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping group-hover:border-blue-300/50"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Go to top
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </div>
    </button>
  );
};

export default GoToTop;
