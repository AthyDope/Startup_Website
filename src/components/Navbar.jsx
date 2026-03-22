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
    setMenuOpen(false);
  }, [location.pathname]);

  const barClass = scrolled
    ? 'bg-gradient-to-r from-[#0a0f24]/95 via-[#0c1536]/90 to-[#0a0f24]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.45)]'
    : 'bg-gradient-to-r from-[#0a0f24]/70 via-[#0c1536]/65 to-[#0a0f24]/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.3)]';

  return (
    <nav className={ixed top-0 left-0 right-0 z-50 transition-all duration-300 }>
      <div className= max-w-7xl mx-auto px-6 flex items-center justify-between py-3>
        {/* Logo */}
        <Link to=/ className=flex items-center gap-3 no-underline group>
          <div className=relative>
            <img src=/favicon.png alt=Quantam Solutions Logo className=h-[60px] w-auto object-contain />
            <div className=absolute inset-0 blur-xl bg-[#5cf0e6]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 />
          </div>
          <span className=text-white font-semibold text-lg hidden sm:flex tracking-tight items-center gap-2>
            Quantam Solutions
            <span className=text-[11px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-white/10 border border-white/10 text-[#5cf0e6]>Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className=hidden md:flex items-center gap-3 px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_12px_35px_rgba 0 0 0 0.35 ] >
          <ul className= flex items-center gap-3 list-none m-0 p-0>
            {links.map(([path, label]) => {
              const active = location.pathname === path;
              return (
                <li key={path} className=relative group px-3 py-1 rounded-full hover:bg-white/5 transition-colors>
                  <Link
                    to={path}
                    className={
o-underline text-sm font-semibold tracking-wide transition-colors duration-200 }
                  >
                    {label}
                  </Link>
                  <span
                    className={bsolute left-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#5cf0e6] to-[#7c5bff] transition-all duration-300 }
                  />
                </li>
              );
            })}
          </ul>
          <Link
            to=/contact
            className=inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full pill-primary no-underline transition-all duration-300 hover:-translate-y-0.5
          >
            <span>Contact</span>
            <svg className=w-4 h-4 fill=none viewBox=0 0 24 24 stroke=currentColor>
              <path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M14 5l7 7m0 0l-7 7m7-7H3 />
            </svg>
          </Link>
        </div>

        {/* Mobile CTA + hamburger */}
        <div className=flex items-center gap-2 md:hidden>
          <Link
            to=/contact
            className=inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-full pill-primary no-underline transition-all duration-300
          >
            Hire Us
          </Link>
          <button
            className=text-white p-2 rounded-lg bg-white/5 border border-white/10 shadow hover:shadow-lg transition-all duration-300
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label=Toggle menu
          >
            <div className={w-6 h-0.5 bg-white mb-1 transition-all } />
            <div className={w-6 h-0.5 bg-white mb-1 transition-all } />
            <div className={w-6 h-0.5 bg-white transition-all } />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={md:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out  bg-[#0A0F24]/95 backdrop-blur-2xl border-t border-white/10 px-6}
      >
        {links.map(([path, label]) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={lock py-3 text-sm font-semibold no-underline transition-all duration-200 border-b border-white/5 last:border-0 }
            >
              {label}
            </Link>
          );
        })}
        <div className=py-4>
          <Link
            to=/contact
            className=inline-flex items-center gap-2 w-full justify-center rounded-full pill-primary px-4 py-3 text-sm font-semibold no-underline shadow-[0_0_20px_rgba 124 91 255 0.45 ] hover:shadow-[0_0_28px_rgba 92 240 230 0.55 ] transition-all duration-300
          >
            <span>Book a Call</span>
            <svg className=w-4 h-4 fill=none viewBox=0 0 24 24 stroke=currentColor>
              <path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M14 5l7 7m0 0l-7 7m7-7H3 />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
