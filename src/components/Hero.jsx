import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
import Globe from './Globe';

const Hero = () => {
  return (
    <section className="relative bg-[#0A0F24] pt-32 pb-24 overflow-hidden mt-16 min-h-[90vh] flex items-center">
      
      {/* Abstract Animated Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-fade-in duration-1000" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-fade-in delay-300" />
      


      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/90 text-sm font-medium px-5 py-2 rounded-full mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:bg-white/10 transition-colors cursor-pointer animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Trusted Global Technology Partner
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight animate-fade-in-up delay-100">
              Empowering Businesses <br/>
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Smart IT Solutions</span>
            </h1>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
              We deliver enterprise-grade software, cloud infrastructure, and digital transformation services to accelerate your business growth.
            </p>
            
            <div className="flex gap-5 flex-wrap animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all no-underline text-sm"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Get Started 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all no-underline text-sm backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Premium Stats */}
            <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10 animate-fade-in-up delay-400">
              {[
                { num: '500+', label: 'Enterprise Clients' },
                { num: '10+', label: 'Global Locations' },
                { num: '99.9%', label: 'System Uptime' }
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    <AnimatedCounter value={num} duration={4000} />
                  </span>
                  <span className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Premium Glassmorphism Visual */}
          <div className="relative h-[520px] hidden lg:block animate-scale-in delay-300">
            {/* <div className="absolute inset-0 z-0 opacity-40">
              <Globe />
            </div> */}
            
            {/* Main Glass Dashboard Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-80 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 z-20">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="h-2 w-24 bg-white/10 rounded-full" />
              </div>
              
              {/* Fake UI Content */}
              <div className="h-10 w-3/4 bg-blue-500/20 rounded-xl mb-4 flex items-center px-4 border border-blue-500/10">
                <div className="w-full flex justify-between items-center">
                  <div className="h-2 w-16 bg-blue-400/50 rounded-full" />
                  <div className="h-2 w-8 bg-blue-400/30 rounded-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-end">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-indigo-500 rounded-full" />
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-xl border border-blue-400/20 flex items-center justify-center flex-col gap-2">
                   <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   <span className="text-blue-200 text-xs font-medium">System Optimal</span>
                </div>
              </div>

              <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4">
                 <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-800" />
                    <div className="w-6 h-6 rounded-full bg-blue-400 border border-slate-800" />
                    <div className="w-6 h-6 rounded-full bg-indigo-400 border border-slate-800" />
                 </div>
                 <div className="ml-4 h-1.5 w-20 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Floating Glass Component 1 */}
            <div className="absolute top-10 right-4 animate-fade-in-up delay-500 z-30">
               <div className="w-40 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-4 animate-float">
                 <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-3">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                 </div>
                 <div className="h-2 w-20 bg-white/20 rounded-full mb-2" />
                 <div className="h-2 w-12 bg-slate-500/50 rounded-full" />
               </div>
            </div>

            {/* Floating Glass Component 2 */}
            <div className="absolute bottom-16 -left-6 animate-fade-in-up delay-700 z-30">
               <div className="w-48 h-20 bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-xl border border-blue-400/30 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] p-4 animate-float flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden bg-white/10">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                 </div>
                 <div>
                   <div className="text-white font-bold text-sm">Cloud Sync</div>
                   <div className="text-blue-200 text-xs">Active server</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



