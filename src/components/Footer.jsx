import React from 'react';
import { Link } from 'react-router-dom';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const socials = [
  { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { label: 'Twitter', icon: FiTwitter, href: '#' },
  { label: 'Facebook', icon: FiFacebook, href: '#' },
  { label: 'Instagram', icon: FiInstagram, href: '#' },
];

const Footer = () => (
  <footer className="relative bg-[#070d1c] text-slate-300 overflow-hidden border-t border-white/5 pt-24">
    {/* background glows */}
    <div className="absolute -top-32 -left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px]" />
    <div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] bg-indigo-600/15 rounded-full blur-[140px]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/favicon.png" alt="Quantam Solutions Logo" className="h-[70px] w-auto object-contain" />
              <div className="absolute inset-0 blur-lg bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">Quantam Solutions Pvt LTD</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md">
            Empowering businesses with innovative technology solutions. We deliver cutting-edge web, app & digital platforms tailored for enterprise scale.
          </p>
          <div className="flex gap-3 flex-wrap">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center text-slate-200 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded-full">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ['/', 'Home'],
              ['/about', 'About Us'],
              ['/services', 'Services'],
              ['/projects', 'Projects'],
              ['/careers', 'Careers'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="text-slate-400 hover:text-white text-sm transition-all duration-200 inline-flex items-center gap-2 group no-underline"
                >
                  <span className="block w-1.5 h-1.5 rounded-full bg-blue-500/60 scale-0 group-hover:scale-100 transition-transform" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded-full">
            Services
          </h4>
          <ul className="space-y-3">
            {['Web Development', 'App Development', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization', 'Cloud & DevOps'].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors no-underline">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-blue-500 after:rounded-full">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {[
                { icon: LuMapPin, text: '123 Tech Street, New Delhi, India', href: '#' },
                { icon: LuPhone, text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: LuMail, text: 'info@quatamsolution.com', href: 'mailto:info@quatamsolution.com' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors no-underline"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:border-white/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs leading-relaxed">{text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <div className="relative z-10 space-y-3">
              <h4 className="text-white text-sm font-bold">Stay Updated</h4>
              <p className="text-slate-400 text-xs">Get the latest enterprise insights.</p>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Work email..."
                  className="w-full bg-[#0A0F24]/80 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white text-sm placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                />
                <button
                  aria-label="Subscribe"
                  className="absolute right-1.5 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-[0_0_18px_rgba(37,99,235,0.45)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p className="font-medium">© 2024 Quantam Solutions Pvt LTD. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <a key={l} href="#" className="hover:text-slate-200 transition-colors no-underline font-medium">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
