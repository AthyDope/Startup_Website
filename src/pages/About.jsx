import React from 'react';
import quantamHQ from '../assets/about/quantam-hq.png';

const values = [
  { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Innovation', desc: 'We constantly explore new technologies to deliver forward-thinking enterprise solutions.' },
  { icon: <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Quality Assured', desc: 'Every line of code is crafted with precision and tested to the highest industry standards.' },
  { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: 'Client Focus', desc: 'Your success is our success. We build long-term strategic partnerships, not just projects.' },
  { icon: <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: 'Integrity', desc: 'Transparent communication and honest, highly secure practices in everything we do.' },
];

const team = [
  { name: 'Rahul Sharma', role: 'CEO & Founder', initials: 'RS' },
  { name: 'Priya Patel', role: 'Lead Developer', initials: 'PP' },
  { name: 'Arjun Singh', role: 'UI/UX Designer', initials: 'AS' },
  { name: 'Neha Gupta', role: 'Project Manager', initials: 'NG' },
];

const SectionTitle = ({ label, title, subtitle }) => (
  <div className="text-center mb-16 relative z-10 block animate-fade-in-up">
    {label && (
      <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 relative">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {label}
      </div>
    )}
    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.2] tracking-tight">{title}</h2>
    {subtitle && <p className="text-slate-400 text-base max-w-2xl mx-auto delay-100">{subtitle}</p>}
  </div>
);

const About = () => (
  <div className="pt-16 bg-[#0A0F24] min-h-screen">


    {/* Hero */}
    <section className="relative pt-32 pb-24 text-center overflow-hidden border-b border-white/5">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-fade-in duration-1000" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
          Who We Are
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up delay-100">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quantam Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
          A passionate team of enterprise technologists building robust, scalable digital solutions that drive real and quantifiable business growth globally.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-24 bg-[#0B1229] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] flex items-center justify-center overflow-hidden group animate-scale-in delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
                        <img src={quantamHQ} alt="Quantam HQ exterior" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F24]/20 via-transparent to-blue-900/20" />
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 shadow-2xl animate-fade-in-up delay-500">
               <div className="text-white font-bold text-sm">Quantam HQ</div>
               <div className="text-blue-300 text-[10px] uppercase tracking-wider">Est. 2019</div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">Our Story</span>
            <h2 className="text-4xl font-extrabold text-white mt-2 mb-6 leading-tight tracking-tight animate-fade-in-up delay-100">Built on Vision, <br/> Driven by Results</h2>
            <p className="text-slate-400 font-medium text-base mb-6 border-l-2 border-blue-500 pl-4 py-1 animate-fade-in-up delay-200">
              Quantam Solutions Pvt LTD was founded with a clear vision: to bridge the critical gap between complex enterprise operations and modern scalable technology.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm animate-fade-in-up delay-300">
              We started as an elite team of developers and architects who believed that precision-engineered software could transform any business. Today, we've grown into a full-service multinational IT company serving enterprise clients across India and beyond, delivering everything from custom cloud-native web apps to deeply integrated SaaS platforms.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 bg-[#0A0F24] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <SectionTitle label="Our Mission" title="What Drives Us Every Day" />
        <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-blue-500/20 relative animate-scale-in delay-200">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl shadow-[0_0_30px_rgba(37,99,235,0.6)] border-4 border-[#0A0F24]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <p className="text-blue-100 text-xl font-medium leading-relaxed italic mt-4">
            "To engineer cutting-edge, resilient technology solutions that explicitly empower enterprises to scale, innovate, and dominate in the digital era — executing with absolute integrity, unprecedented quality, and a client-first mindset."
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-[#0B1229] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle label="Our Values" title="Principles We Stand For" subtitle="The foundational pillars that guarantee our quality and client success." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon, title, desc }, idx) => (
            <div key={title} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/5 hover:border-white/10 transition-all group animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-blue-500/20 group-hover:bg-blue-600/30 transition-colors shadow-lg shadow-blue-900/20">
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-[#0A0F24] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-fade-in duration-1000" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle label="Our Team" title="Executive Leadership" subtitle="Meet the visionaries directing Quantam Solutions' global strategy." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ name, role, initials }, idx) => (
            <div key={name} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-white/20 transition-all group animate-scale-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl text-white font-bold mx-auto mb-6 shadow-xl shadow-blue-900/30 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                {initials}
              </div>
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-blue-400 text-sm mt-1.5 font-medium tracking-wide uppercase">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;


