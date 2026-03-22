import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import AnimatedCounter from "../components/AnimatedCounter";
import { 
  SiReact, SiNodedotjs, SiPython, 
  SiMysql, SiDocker, SiFigma, SiFlutter, 
  SiGoogleanalytics, SiSemrush, SiHubspot, SiNextdotjs, 
  SiKubernetes, SiTailwindcss, SiSketch 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { 
  LuCodeXml, LuSmartphone, LuPalette, 
  LuMegaphone, LuSearch, LuCloud,
  LuUsers, LuDollarSign, LuClock, LuShieldCheck
} from "react-icons/lu";

const services = [
  { icon: <LuCodeXml className="w-7 h-7" />, title: "Web Development", desc: "Modern, responsive websites built with cutting-edge technologies." },
  { icon: <LuSmartphone className="w-7 h-7" />, title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
  { icon: <LuPalette className="w-7 h-7" />, title: "UI/UX Design", desc: "Intuitive, user-centered designs that convert visitors to customers." },
  { icon: <LuMegaphone className="w-7 h-7" />, title: "Digital Marketing", desc: "Data-driven strategies to grow your online presence." },
  { icon: <LuSearch className="w-7 h-7" />, title: "SEO Optimization", desc: "Rank higher on search engines and drive organic traffic." },
  { icon: <LuCloud className="w-7 h-7" />, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and automated deployment pipelines." },
];

const whyUs = [
  { icon: <LuUsers className="w-8 h-8" />, title: "Experienced Team", desc: "5+ years of expertise across diverse technologies and industries." },
  { icon: <LuDollarSign className="w-8 h-8" />, title: "Affordable Pricing", desc: "Premium quality solutions at competitive, transparent pricing." },
  { icon: <LuClock className="w-8 h-8" />, title: "On-Time Delivery", desc: "We respect deadlines and deliver projects on schedule, every time." },
  { icon: <LuShieldCheck className="w-8 h-8" />, title: "Client Satisfaction", desc: "98% client satisfaction rate with long-term partnerships." },
];

const techCategories = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "Cloud & DevOps"
];

const techs = [
  { icon: <SiReact color="#61DAFB" className="w-5 h-5" />, name: "React",         categories: ["Web Development", "App Development"] },
  { icon: <SiNodedotjs color="#339933" className="w-5 h-5" />, name: "Node.js",       categories: ["Web Development", "Cloud & DevOps"] },
  { icon: <SiPython color="#3776AB" className="w-5 h-5" />, name: "Python",        categories: ["Web Development", "Cloud & DevOps"] },
  { icon: <FaAws color="#FF9900" className="w-5 h-5" />, name: "AWS",           categories: ["Cloud & DevOps", "Web Development"] },
  { icon: <SiMysql color="#4479A1" className="w-5 h-5" />, name: "MySQL",         categories: ["Web Development", "Cloud & DevOps"] },
  { icon: <SiDocker color="#2496ED" className="w-5 h-5" />, name: "Docker",        categories: ["Cloud & DevOps"] },
  { icon: <SiFigma color="#F24E1E" className="w-5 h-5" />, name: "Figma",         categories: ["UI/UX Design"] },
  { icon: <SiFlutter color="#02569B" className="w-5 h-5" />, name: "Flutter",       categories: ["App Development"] },
  { icon: <SiGoogleanalytics color="#E37400" className="w-5 h-5" />, name: "Google Analytics", categories: ["Digital Marketing", "SEO Optimization"] },
  { icon: <SiSemrush color="#FF642D" className="w-5 h-5" />, name: "Semrush",       categories: ["SEO Optimization"] },
  { icon: <SiHubspot color="#FF7A59" className="w-5 h-5" />, name: "HubSpot",       categories: ["Digital Marketing"] },
  { icon: <SiNextdotjs color="#FFFFFF" className="w-5 h-5" />, name: "Next.js",       categories: ["Web Development"] },
  { icon: <SiKubernetes color="#326CE5" className="w-5 h-5" />, name: "Kubernetes",    categories: ["Cloud & DevOps"] },
  { icon: <SiTailwindcss color="#06B6D4" className="w-5 h-5" />, name: "Tailwind CSS",  categories: ["Web Development", "UI/UX Design"] },
  { icon: <SiReact color="#61DAFB" className="w-5 h-5" />, name: "React Native", categories: ["App Development"] },
  { icon: <SiSketch color="#F7B500" className="w-5 h-5" />, name: "Sketch",      categories: ["UI/UX Design"] },
];

const projects = [
  { gradient: "from-blue-500 to-blue-800", title: "E-Commerce Platform", desc: "Full-stack shopping platform with payment integration.", tag: "Web App" },
  { gradient: "from-violet-500 to-violet-800", title: "Mobile App Design", desc: "Cross-platform mobile app for a fintech startup.", tag: "Mobile" },
  { gradient: "from-cyan-500 to-cyan-800", title: "SaaS Application", desc: "Cloud-based SaaS dashboard for enterprise clients.", tag: "SaaS" },
];

const testimonials = [
  { quote: "Quatam Solution transformed our online presence. Professional, responsive, and delivered beyond expectations.", name: "Riya Sharma", role: "CEO, TechVentures", avatar: "" },
  { quote: "Outstanding service and top-notch technical expertise. Built our app on time and within budget.", name: "Amit Verma", role: "Founder, StartupHub", avatar: "" },
];

const SectionTitle = ({ label, title, subtitle, light = false }) => (
  <div className="text-center mb-16 relative z-10 block animate-fade-in-up">
    {label && (
      <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {label}
      </div>
    )}
    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.2] tracking-tight">{title}</h2>
    {subtitle && <p className="text-slate-400 text-base max-w-2xl mx-auto delay-100">{subtitle}</p>}
  </div>
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechs = activeCategory === "All" 
    ? techs 
    : techs.filter(t => t.categories.includes(activeCategory));

  return (
    <div>
      <Hero />

      <section className="relative py-28 bg-[#0B1229] border-t border-white/5 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-fade-in duration-1000" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-fade-in delay-300" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 relative">
              <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Who We Are
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.2] tracking-tight animate-fade-in-up delay-100">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quantam Solutions</span>
              </h2>
              
              <p className="text-blue-200 font-medium text-lg mb-6 border-l-2 border-blue-500 pl-4 py-1 animate-fade-in-up delay-200">
                Your Trusted Global Technology Partner for Web, App and Digital Transformations.
              </p>
              
              <p className="text-slate-400 leading-relaxed mb-10 text-base max-w-lg animate-fade-in-up delay-300">
                Founded with a vision to empower enterprises through cutting-edge technology, Quantam Solutions Pvt LTD delivers scalable, secure, and highly innovative digital products that drive quantifiable business growth worldwide.
              </p>
              
              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/10 animate-fade-in-up delay-400">
                {[
                  { n: "500+", l: "Projects Delivered" },
                  { n: "10+", l: "Years Excellence" },
                  { n: "300+", l: "Global Clients" }
                ].map(({ n, l }) => (
                  <div key={l} className="group cursor-default">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      <AnimatedCounter value={n} duration={4000} />
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Glass Visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative animate-scale-in delay-300">
              {/* Decorative background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent z-0 animate-[spin_30s_linear_infinite]" />
              
              {/* Main Glass Card */}
              <div className="relative w-full max-w-sm aspect-square bg-[#0F172A]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 flex flex-col justify-between z-10 group overflow-hidden">
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Top Section */}
                <div className="flex justify-between items-start relative z-10 animate-fade-in-up delay-400">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-3 py-1 shadow-lg text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <AnimatedCounter value="99%" duration={4000} /> Client Retention
                  </div>
                </div>

                {/* Middle Chart Graphic */}
                <div className="relative z-10 my-8 animate-fade-in-up delay-500">
                  <div className="flex items-end gap-2 h-24 justify-center">
                    {[40, 70, 45, 90, 60, 100].map((height, i) => (
                      <div key={i} className="w-8 bg-white/5 rounded-t-sm border-t border-white/10 relative group-hover:bg-white/10 transition-colors duration-500" style={{ height: `${height}%` }}>
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm transition-all duration-700 ease-out" style={{ height: `${height * 0.7}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Section */}
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md animate-fade-in-up delay-600">
                  <div>
                    <div className="text-white font-bold mb-0.5">Global Reach</div>
                    <div className="text-slate-400 text-xs">Scaling operations seamlessly</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 shadow-2xl animate-fade-in-up delay-700 z-30">
                  <div className="animate-float">
                    <div className="text-xs font-bold text-white">ISO Certified</div>
                    <div className="text-[10px] text-blue-300">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0F24] relative overflow-hidden">
        {/* Decorative Grid Removed */}
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle label="What We Do" title="Our Services" subtitle="Comprehensive enterprise IT solutions tailored to your business needs." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, title, desc }, idx) => (
              <div key={title} className={`bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg animate-fade-in-up`} style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-6 transition-all shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]">{icon || "⚡"}</div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1229] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle label="Our Edge" title="Why Choose Us" subtitle="We go beyond code, building strategic partnerships that last." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map(({ icon, title, desc }, idx) => (
              <div key={title} className="text-center p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all group animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-300 text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(37,99,235,0.15)]">{icon || "🛡️"}</div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-[#0A0F24] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-fade-in duration-1000" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle label="Tech Stack" title="Technologies We Use" subtitle="Modern, battle-tested technologies for highly reliable digital solutions." />
          
          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-5xl mx-auto animate-fade-in-up delay-100">
            {techCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-blue-500" 
                    : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center content-start gap-4 max-w-4xl mx-auto mt-12 min-h-[150px]">
            {filteredTechs.map(({ icon, name }, idx) => (
              <div key={name} className="bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 px-6 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:text-white transition-all cursor-default font-medium shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] animate-scale-in group" style={{ animationDelay: `${(idx % 15) * 50}ms` }}>
                <span className="flex items-center justify-center opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all">{icon}</span>{name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1229] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle label="Our Work" title="Featured Projects" subtitle="A glimpse of our recent work and enterprise-grade delivered solutions." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ gradient, title, desc, tag }, idx) => (
              <div key={title} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all group animate-fade-in-up" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                <div className={`h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="w-32 h-24 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <div className="w-24 h-14 bg-white/20 rounded-xl" />
                  </div>
                  <span className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 z-10">{tag}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-[#0A0F24] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle label="Testimonials" title="What Our Clients Say" subtitle="Don't just take our word for it—hear from the enterprises we've transformed." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {testimonials.map(({ quote, name, role, avatar }, idx) => (
              <div key={name} className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl relative hover:bg-white/10 transition-colors animate-scale-in" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                <div className="absolute text-6xl text-blue-500/20 top-6 left-8 font-serif leading-none">"</div>
                <p className="text-slate-300 text-base leading-relaxed italic mb-8 relative z-10 pt-4">"{quote}"</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg border border-white/20">{avatar || name.charAt(0)}</div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-wide">{name}</div>
                    <div className="text-blue-400 text-xs mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#0B1229] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[10rem] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none animate-fade-in" />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up">Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Great?</span></h2>
          <p className="text-slate-400 mb-10 text-lg animate-fade-in-up delay-100">Let us discuss your project parameters and turn your innovative ideas into a scalable enterprise reality.</p>
          <div className="animate-fade-in-up delay-200">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all no-underline text-base min-w-[200px]">
              Start a Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}