import React from "react";
import { Link } from "react-router-dom";
import SpotlightCard from "./SpotlightCard";

const Footer = () => {
  return (
    <SpotlightCard >
      <footer >
        <div className="container mx-auto px-4 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand + Blurb */}
            <div className="md:col-span-5">
              <Link to="/" className="text-2xl font-semibold tracking-wide block">
                STUDERP
              </Link>
              <p className="text-white/60 mt-3 leading-relaxed">
                Simplify student, course, attendance, and grade management with
                a secure, modern platform designed for schools, colleges, and
                universities.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <i className="bx bxl-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <i className="bx bxl-github text-xl"></i>
                </a>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                  Product
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="nav-a-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/#Features-Section" className="nav-a-link">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/#Why-Us" className="nav-a-link">
                      Why Us
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                  Company
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/#Contact-Section" className="nav-a-link">
                      Contact
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy" className="nav-a-link">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="nav-a-link">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                  Resources
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/docs" className="nav-a-link">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link to="/support" className="nav-a-link">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/status" className="nav-a-link">
                      Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} STUDERP. All rights reserved.</p>
          
          </div>
        </div>
      </footer>
    </SpotlightCard>
  );
};

export default Footer;
