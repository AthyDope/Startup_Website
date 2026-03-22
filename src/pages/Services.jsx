import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: 'Enterprise Web Development', desc: 'We engineer fast, highly scalable, and secure web applications using React, Next.js, and modern architectures tailored to your enterprise goals.', tags: ['React', 'Next.js', 'Node.js'] },
  { icon: <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>, title: 'Mobile App Solutions', desc: 'High-performance native and cross-platform mobile applications for iOS and Android that deliver frictionless user experiences.', tags: ['React Native', 'Flutter', 'iOS/Android'] },
  { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, title: 'UI/UX Architecture', desc: 'Data-driven, user-centered design that merges compelling aesthetics with flawless functionality to create globally intuitive digital workflows.', tags: ['Figma', 'Prototyping', 'User Research'] },
  { icon: <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: 'Strategic Digital Marketing', desc: 'Advanced, data-driven marketing frameworks including algorithmic social media strategies, precision PPC, and authoritative content distribution.', tags: ['SEO', 'PPC', 'Social Media'] },
  { icon: <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, title: 'Technical SEO Optimization', desc: 'Dominate search rankings and drive qualified organic traffic with our proprietary technical audits and enterprise SEO strategies.', tags: ['On-Page SEO', 'Technical SEO', 'Analytics'] },
  { icon: <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>, title: 'Cloud & DevOps Infrastructure', desc: 'Resilient, hyper-scalable cloud architectures, automated CI/CD pipelines, and robust DevOps practices to accelerate your engineering lifecycle.', tags: ['AWS', 'Docker', 'Kubernetes'] },
];

const Services = () => (
  <div className="pt-16 bg-[#0A0F24] min-h-screen">
    {/* Grid Background */}


    {/* Hero */}
    <section className="relative pt-32 pb-24 text-center overflow-hidden border-b border-white/5">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-fade-in duration-1000" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          What We Offer
        </span>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up delay-100">
          Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Services</span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
          End-to-end IT solutions designed to architect your digital transformation and exponentially accelerate global business growth.
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-24 bg-[#0B1229] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon, title, desc, tags }, idx) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 group shadow-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 rounded-2xl flex items-center justify-center mb-6 transition-all shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] group-hover:scale-110">
                {icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {tags.map(t => (
                  <span key={t} className="bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full group-hover:border-blue-500/30 group-hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-32 bg-[#0A0F24] border-t border-white/5 overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[10rem] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none animate-fade-in" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up">Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Custom Solution?</span></h2>
        <p className="text-slate-400 mb-10 text-lg animate-fade-in-up delay-100">Tell our experts about your enterprise parameters and we'll architect the perfect technical roadmap for you.</p>
        <div className="animate-fade-in-up delay-200">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all no-underline text-base min-w-[200px]">
            Get a Free Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
