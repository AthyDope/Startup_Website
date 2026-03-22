import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/projects', 'Projects'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact Us'],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // close mobile menu on route change
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F24]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]'
          : 'bg-[#0A0F24]/60 backdrop-blur-lg border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="relative">
            <img src="/favicon.png" alt="Quantam Solutions Logo" className="h-[60px] w-auto object-contain" />
            <div className="absolute inset-0 blur-xl bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="text-white font-semibold text-lg hidden sm:block tracking-tight">
            Quantam Solutions Pvt LTD
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map(([path, label]) => {
            const active = location.pathname === path;
            return (
              <li key={path} className="relative group">
                <Link
                  to={path}
                  className={`no-underline text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    active ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300 ${
                    active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-[0_0_25px_rgba(79,70,229,0.45)] hover:shadow-[0_0_35px_rgba(79,70,229,0.65)] transition-all duration-300 hover:-translate-y-0.5 no-underline"
        >
          <span>Contact Us</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 shadow hover:shadow-lg transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0A0F24]/95 backdrop-blur-2xl border-t border-white/10 px-6`}
      >
        {links.map(([path, label]) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`block py-3 text-sm font-semibold no-underline transition-all duration-200 border-b border-white/5 last:border-0 ${
                active ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
            >
              {label}
            </Link>
          );
        })}
        <div className="py-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-sm px-4 py-3 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_28px_rgba(79,70,229,0.55)] transition-all duration-300"
          >
            <span>Contact Us</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
