import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
          <li>
            <a href="#Features-Section" className="nav-a-link" onClick={handleAnchorClick}>
              Features
            </a>
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
            <li>
              <a href="#Features-Section" className="nav-a-link" onClick={handleAnchorClick}>
                Feature
              </a>
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
