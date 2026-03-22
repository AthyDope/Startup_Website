import React from 'react';
import { Link } from 'react-router-dom';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <footer className="relative bg-[#0A0F24] border-t border-white/5 text-slate-300 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src="/favicon.png" alt="Quantam Solutions Logo" className="h-[120px] w-auto object-contain" />
            <span className="font-bold text-lg text-white">Quantam Solutions Pvt LTD</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
            Empowering businesses with innovative technology solutions. We deliver cutting-edge web, app & digital solutions.
          </p>
          <div className="flex gap-3">
            {[
              { label: 'LinkedIn', icon: FiLinkedin },
              { label: 'Twitter', icon: FiTwitter },
              { label: 'Facebook', icon: FiFacebook },
              { label: 'Instagram', icon: FiInstagram },
            ].map(({ label, icon: Icon }) => (
              <a key={label} href="#" aria-label={label}
                className="w-10 h-10 bg-white/5 hover:bg-blue-600 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white text-sm font-bold transition-all hover:-translate-y-1 shadow-lg">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 after:rounded">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/projects', 'Projects'], ['/careers', 'Careers'], ['/contact', 'Contact']].map(([path, label]) => (
              <li key={path}>
                <Link to={path} className="text-slate-400 hover:text-blue-400 text-sm transition-colors no-underline hover:translate-x-1 inline-block transition-transform">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 after:rounded">
            Services
          </h4>
          <ul className="space-y-3">
            {['Web Development', 'App Development', 'UI/UX Design', 'Digital Marketing', 'SEO Optimization', 'Cloud & DevOps'].map(s => (
              <li key={s}>
                <Link to="/services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors no-underline">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-500 after:rounded">
            Get In Touch
          </h4>
          <div className="space-y-4 mb-8">
            {[
              { icon: LuMapPin, text: '123 Tech Street, New Delhi, India', href: '#' },
              { icon: LuPhone, text: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: LuMail, text: 'info@quatamsolution.com', href: 'mailto:info@quatamsolution.com' },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-center gap-3">
                <a href={href} className="w-10 h-10 bg-white/5 hover:bg-blue-600 border border-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-y-1 shadow-lg flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </a>
                <span className="text-slate-400 text-xs leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <div className="relative z-10">
              <h4 className="text-white text-sm font-bold mb-1">Stay Updated</h4>
              <p className="text-slate-400 text-xs mb-4">Get the latest enterprise insights.</p>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Work email..."
                  className="w-full bg-[#0A0F24]/80 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white text-sm placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                />
                <button aria-label="Subscribe" className="absolute right-1.5 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs font-medium">© 2024 Quantam Solutions Pvt LTD. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
            <a key={l} href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors no-underline font-medium">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
