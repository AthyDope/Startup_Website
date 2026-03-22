import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from '../components/Skeleton';

const projects = [
  { gradient: 'from-blue-600 to-blue-900', title: 'E-Commerce Platform', desc: 'A full-stack shopping platform with real-time inventory, payment gateway integration, and admin dashboard.', tags: ['React', 'Node.js', 'MongoDB'], tag: 'Web App', fullDesc: 'Built an enterprise-grade e-commerce platform serving 50k+ monthly users with real-time inventory management, integrated Stripe payment gateway, and an intuitive admin dashboard for order tracking and analytics.' },
  { gradient: 'from-violet-600 to-violet-900', title: 'FinTech Mobile App', desc: 'Cross-platform mobile app for personal finance management with analytics and budgeting tools.', tags: ['React Native', 'Firebase'], tag: 'Mobile', fullDesc: 'Developed a cross-platform mobile application with advanced financial analytics, budget tracking, and investment portfolio management powered by Firebase real-time database.' },
  { gradient: 'from-cyan-600 to-cyan-900', title: 'SaaS Dashboard', desc: 'Enterprise-grade SaaS platform with multi-tenant architecture, role-based access, and real-time analytics.', tags: ['Next.js', 'AWS', 'PostgreSQL'], tag: 'SaaS', fullDesc: 'Engineered a scalable SaaS dashboard with multi-tenant architecture, role-based access control, real-time data visualization, and enterprise-grade security compliance.' },
  { gradient: 'from-emerald-600 to-emerald-900', title: 'Healthcare Portal', desc: 'Patient management system with appointment scheduling, telemedicine, and EHR integration.', tags: ['React', 'Python', 'MySQL'], tag: 'Healthcare', fullDesc: 'Delivered a HIPAA-compliant healthcare portal featuring secure patient records, appointment scheduling, video telemedicine integration, and comprehensive EHR system integration.' },
  { gradient: 'from-orange-600 to-orange-900', title: 'Logistics Platform', desc: 'Real-time fleet tracking and logistics management platform with route optimization.', tags: ['Vue.js', 'Node.js', 'Redis'], tag: 'Enterprise', fullDesc: 'Created a real-time logistics management platform with GPS fleet tracking, AI-powered route optimization, and predictive delivery analytics for a leading logistics company.' },
  { gradient: 'from-rose-600 to-rose-900', title: 'EdTech Application', desc: 'Online learning platform with live classes, course management, and progress tracking.', tags: ['React', 'WebRTC', 'AWS'], tag: 'EdTech', fullDesc: 'Built a comprehensive edtech platform with live video classes using WebRTC, course management system, student progress tracking, and gamified learning experience.' },
];

const categories = ['All', 'Web App', 'Mobile', 'SaaS', 'Healthcare', 'Enterprise', 'EdTech'];

const SectionTitle = ({ label, title, subtitle }) => (
  <motion.div 
    className="text-center mb-16 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {label && (
      <motion.div 
        className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        {label}
      </motion.div>
    )}
    <motion.h2 
      className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.2] tracking-tight"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-slate-400 text-base max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative max-w-2xl w-full bg-[#0A0F24] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Gradient Header */}
            <motion.div
              className={`h-64 bg-gradient-to-br ${project.gradient}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />

            {/* Content */}
            <motion.div
              className="p-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-4xl font-extrabold text-white mb-4">{project.title}</h2>
              
              <div className="mb-6 pb-6 border-b border-white/10">
                <p className="text-slate-300 text-lg leading-relaxed">{project.fullDesc}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Technologies Used</h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, staggerChildren: 0.05 }}
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium border border-blue-500/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.button
                onClick={onClose}
                className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.tag === activeCategory);

  return (
    <div className="pt-16 bg-[#0A0F24] min-h-screen transition-colors duration-500">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        <motion.div 
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.7 }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <SectionTitle 
            label="Our Portfolio" 
            title="Projects We've Built" 
            subtitle="A showcase of enterprise-grade digital products and bespoke solutions delivered for our global clients." 
          />
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] border-blue-500" 
                    : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ duration: 0.4 }}
          >
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <motion.div 
                  key={i} 
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 h-96 flex flex-col gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-16 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </motion.div>
              ))
            ) : (
              filteredProjects.map(({ gradient, title, desc, tags, tag }, idx) => (
                <motion.div 
                  key={title}
                  layoutId={title}
                  onClick={() => setSelectedProject(filteredProjects[idx])}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex flex-col h-full cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className={`h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <span className="text-white font-semibold">Click to view details</span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="flex-1 p-6 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
                    </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                    >
                      {tags.map((t) => (
                        <motion.span 
                          key={t}
                          className="text-xs font-medium text-slate-400 bg-white/5 px-2.5 py-1.5 rounded-md border border-white/10 group-hover:border-blue-500/50 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projects;
