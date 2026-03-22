import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F24]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src="/favicon.png" alt="Quantam Solutions Logo" className="h-[100px] w-auto object-contain" />
          <span className="text-white font-semibold text-lg hidden sm:block">
            Quantam Solutions Pvt LTD
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/projects', 'Projects'], ['/careers', 'Careers'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <li key={path}>
              <Link to={path} className="text-white/90 hover:text-white font-medium text-sm transition-colors no-underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all no-underline"
        >
          Contact Us
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0F24]/95 backdrop-blur-2xl px-6 pb-4 border-b border-white/10">
          {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/projects', 'Projects'], ['/careers', 'Careers'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className="block text-white/90 hover:text-white py-2 text-sm font-medium no-underline border-b border-white/10 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
