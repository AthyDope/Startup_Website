import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCode, LuServer, LuPalette, LuGitBranch, LuSmartphone, LuSearch, LuMapPin, LuClock, LuIndianRupee } from 'react-icons/lu';

const positions = [
  {
    title: 'Frontend Developer',
    location: 'Remote / Delhi',
    type: 'Full-time',
    dept: 'Engineering',
    icon: LuCode,
    salary: '₹8-15 LPA',
    desc: 'Build beautiful, performant UIs using React and modern frontend tooling.',
    fullDesc: 'We\'re seeking a talented Frontend Developer to join our engineering team. You\'ll be responsible for building scalable, high-performance user interfaces using React, TypeScript, and modern web technologies. You\'ll collaborate with our design and backend teams to create seamless user experiences for enterprise clients.',
    requirements: ['5+ years of React experience', 'Strong TypeScript & JavaScript', 'Experience with Tailwind CSS', 'Git & version control', 'REST API integration', 'Browser DevTools proficiency'],
    responsibilities: ['Build responsive UI components', 'Optimize application performance', 'Implement state management solutions', 'Write unit & integration tests', 'Collaborate with designers', 'Code reviews and mentoring'],
    experience: '5-8 years',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vite', 'Testing Library'],
  },
  {
    title: 'Backend Developer',
    location: 'Remote / Delhi',
    type: 'Full-time',
    dept: 'Engineering',
    icon: LuServer,
    salary: '₹10-18 LPA',
    desc: 'Design and build scalable APIs and microservices using Node.js and Python.',
    fullDesc: 'Join our backend team and architect scalable microservices that power enterprise applications. You\'ll work with Node.js, Python, and cloud technologies to build robust APIs, optimize databases, and implement system designs that handle millions of requests.',
    requirements: ['6+ years backend development', 'Node.js or Python expertise', 'RESTful API design', 'Database design (SQL/NoSQL)', 'System design knowledge', 'Docker & Kubernetes basics'],
    responsibilities: ['Design and develop APIs', 'Optimize database queries', 'Implement caching strategies', 'Build microservices', 'Write comprehensive tests', 'DevOps collaboration'],
    experience: '6-10 years',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    dept: 'Design',
    icon: LuPalette,
    salary: '₹6-12 LPA',
    desc: 'Create intuitive user experiences and design systems using Figma.',
    fullDesc: 'We\'re looking for a creative UI/UX Designer to shape the digital experiences of our enterprise clients. You\'ll lead design projects from research to handoff, create design systems, and collaborate closely with product and engineering teams.',
    requirements: ['5+ years UI/UX design', 'Figma expertise', 'Design system experience', 'User research skills', 'Prototyping experience', 'Web & mobile design'],
    responsibilities: ['Conduct user research', 'Create wireframes & prototypes', 'Build design systems', 'Collaborate with engineering', 'Usability testing', 'Design documentation'],
    experience: '5-8 years',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Interaction Design', 'Adobe XD'],
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Contract',
    dept: 'Infrastructure',
    icon: LuGitBranch,
    salary: '₹12-20 LPA',
    desc: 'Manage cloud infrastructure, CI/CD pipelines, and deployment automation.',
    fullDesc: 'We\'re seeking an experienced DevOps Engineer to manage our infrastructure, automate deployments, and ensure system reliability at scale. You\'ll work with AWS, Kubernetes, and modern DevOps tooling.',
    requirements: ['7+ years DevOps experience', 'AWS or GCP expertise', 'Kubernetes knowledge', 'CI/CD pipeline design', 'Infrastructure as Code', 'Monitoring & logging'],
    responsibilities: ['Design AWS architecture', 'Manage Kubernetes clusters', 'Build CI/CD pipelines', 'Infrastructure automation', 'Security implementation', 'Performance monitoring'],
    experience: '7-12 years',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Prometheus'],
  },
  {
    title: 'Android Developer',
    location: 'Remote / Bangalore',
    type: 'Full-time',
    dept: 'Engineering',
    icon: LuSmartphone,
    salary: '₹9-16 LPA',
    desc: 'Develop high-performance native Android applications with modern architecture patterns.',
    fullDesc: 'Join our mobile team and build world-class Android applications used by thousands of enterprise users. You\'ll work with Kotlin, modern Android architecture, and agile methodologies to deliver robust mobile solutions.',
    requirements: ['5+ years Android development', 'Kotlin expertise', 'MVVM/MVI architecture', 'Jetpack libraries experience', 'Android Studio proficiency', 'REST API integration'],
    responsibilities: ['Develop Android features', 'Optimize app performance', 'Implement UI/UX designs', 'Write unit & UI tests', 'Debug and troubleshoot', 'API integration'],
    experience: '5-9 years',
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Android Studio', 'Firebase', 'SQLite'],
  },
  {
    title: 'SEO Specialist',
    location: 'Remote / Mumbai',
    type: 'Full-time',
    dept: 'Marketing',
    icon: LuSearch,
    salary: '₹5-10 LPA',
    desc: 'Drive organic growth through technical SEO, content strategy, and analytics.',
    fullDesc: 'We\'re looking for an SEO Specialist to lead our search engine optimization efforts. You\'ll manage our digital presence, conduct keyword research, optimize technical SEO, and collaborate with content creators to improve organic rankings.',
    requirements: ['4+ years SEO experience', 'Technical SEO knowledge', 'Google Analytics expertise', 'SEO tools (Semrush, Ahrefs)', 'Keyword research skills', 'Content optimization'],
    responsibilities: ['Conduct SEO audits', 'Manage keyword strategy', 'Optimize on-page elements', 'Build backlink strategy', 'Monitor rankings', 'Report analytics'],
    experience: '4-7 years',
    skills: ['Technical SEO', 'Google Analytics', 'Keyword Research', 'Link Building', 'Content Optimization', 'Semrush/Ahrefs'],
  },
];

const perks = [
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>, title: 'Remote Friendly', desc: 'Work from anywhere in India.' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: 'Learning Budget', desc: 'Annual budget for courses and conferences.' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Competitive Pay', desc: 'Market-rate salaries with performance bonuses.' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Flexible Leaves', desc: 'Generous PTO and flexible working hours.' },
];

const JobModal = ({ job, isOpen, onClose }) => {
  if (!job) return null;

    const JobIcon = job.icon;
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', resume: null });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // idle | error | success

  useEffect(() => {
    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', resume: null });
    setErrors({});
    setSubmitState('idle');
  }, [job]);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!/[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
    if (!/[0-9+()\-\s]{7,15}$/.test(formData.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!formData.resume) nextErrors.resume = 'Upload your resume (PDF/Doc).';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitState('success');
      // TODO: wire API submission
    } else {
      setSubmitState('error');
    }
  };

  const inputBase = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all';

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
            className="relative max-w-3xl w-full bg-[#0A0F24] border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
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

            {/* Header */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 flex items-start gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <JobIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">{job.title}</h2>
                <p className="text-blue-100">{job.dept}</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="p-8 space-y-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <LuMapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-400 uppercase">Location</span>
                  </div>
                  <p className="text-white font-semibold">{job.location}</p>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <LuClock className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-slate-400 uppercase">Type</span>
                  </div>
                  <p className="text-white font-semibold">{job.type}</p>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <LuIndianRupee className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-slate-400 uppercase">Salary</span>
                  </div>
                  <p className="text-white font-semibold">{job.salary}</p>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-lg p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs text-slate-400 uppercase">Experience</span>
                  </div>
                  <p className="text-white font-semibold">{job.experience}</p>
                </motion.div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">About This Role</h3>
                <p className="text-slate-300 leading-relaxed">{job.fullDesc}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                    >
                      <span className="text-blue-400 mt-1">✓</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Required Skills & Experience</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.35 + idx * 0.05 }}
                    >
                      <span className="text-indigo-400 mt-1">✓</span>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5, staggerChildren: 0.05 }}
                >
                  {job.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

                            {/* CTA + Quick Apply */}
              <motion.div
                className="flex flex-col gap-6 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex gap-4 flex-col sm:flex-row">
                  <motion.button
                    onClick={() => setShowForm(true)}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                  <motion.button
                    onClick={onClose}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3 rounded-xl border border-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>

                <AnimatePresence initial={false}>
                  {showForm && (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="md:col-span-2 flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-bold mb-1">Quick Apply</p>
                          <h3 className="text-lg font-semibold text-white">Send your details for {job.title}</h3>
                        </div>
                        {submitState === 'success' && (
                          <span className="text-green-400 text-sm">Application sent!</span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-slate-300">Full Name</label>
                        <input
                          className={`${inputBase} ${errors.name ? 'border-red-500/70 ring-2 ring-red-500/40' : ''}`}
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-slate-300">Email</label>
                        <input
                          type="email"
                          className={`${inputBase} ${errors.email ? 'border-red-500/70 ring-2 ring-red-500/40' : ''}`}
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-slate-300">Phone Number</label>
                        <input
                          className={`${inputBase} ${errors.phone ? 'border-red-500/70 ring-2 ring-red-500/40' : ''}`}
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-slate-300">Resume / CV</label>
                        <label
                          className={`${inputBase} cursor-pointer flex items-center justify-between gap-3 ${errors.resume ? 'border-red-500/70 ring-2 ring-red-500/40' : 'hover:border-blue-400/60'}`}
                        >
                          <span className="truncate text-slate-300">
                            {formData.resume ? formData.resume.name : 'Upload PDF or DOC (max 5MB)'}
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-white/10 text-sm text-white border border-white/10">Choose</span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                          />
                        </label>
                        {errors.resume && <p className="text-xs text-red-400">{errors.resume}</p>}
                      </div>

                      <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className={`text-sm ${submitState === 'error' ? 'text-red-400' : 'text-slate-400'}`}>
                          We typically respond within 3-4 business days.
                        </p>
                        <motion.button
                          type="submit"
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl text-white font-semibold shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(79,70,229,0.45)] transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Submit Application
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  
  return (
    <div className="pt-16 bg-[#0A0F24] min-h-screen">
    {/* Hero */}
    <section className="relative pt-32 pb-24 text-center overflow-hidden border-b border-white/5">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Join Our Team
        </motion.span>
        <motion.h1 
          className="text-5xl lg:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quantam</span>
        </motion.h1>
        <motion.p 
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Build the future of enterprise software with a world-class team that deeply values your engineering growth and personal innovation.
        </motion.p>
      </motion.div>
    </section>

    {/* Perks */}
    <section className="py-24 bg-[#0B1229] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Why Work With Us</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map(({ icon, title, desc }, idx) => (
            <motion.div 
              key={title} 
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 rounded-2xl flex items-center justify-center text-blue-400 mb-6 transition-all shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover:scale-110">
                {icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-24 bg-[#0A0F24] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Open Positions</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-4 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
        </motion.div>
        <div className="space-y-6">
          {positions.map(({ title, location, type, dept, desc, icon: JobIcon }, idx) => (
            <motion.div
              key={title}
              onClick={() => setSelectedJob(positions[idx])}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-blue-500/50 transition-all flex flex-col sm:flex-row sm:items-center gap-6 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <JobIcon className="w-8 h-8" />
              </motion.div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">{title}</h3>
                  <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{dept}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>
                <div className="flex gap-4 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5"><LuMapPin className="w-4 h-4 text-slate-400" />{location}</span>
                  <span className="flex items-center gap-1.5"><LuClock className="w-4 h-4 text-slate-400" />{type}</span>
                </div>
              </div>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(positions[idx]);
                }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] whitespace-nowrap group-hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Job Modal */}
    <JobModal 
      job={selectedJob} 
      isOpen={!!selectedJob} 
      onClose={() => setSelectedJob(null)} 
    />
    </div>
  );
};

export default Careers;





