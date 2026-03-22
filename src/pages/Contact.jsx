import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCodeXml, LuSmartphone, LuPalette, LuMegaphone, LuCloud, LuSearch, LuMessageCircleQuestion, LuBriefcase, LuChevronDown } from 'react-icons/lu';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjects = [
    { label: 'Web Development', icon: LuCodeXml },
    { label: 'Mobile App Development', icon: LuSmartphone },
    { label: 'UI/UX Design', icon: LuPalette },
    { label: 'Digital Marketing', icon: LuMegaphone },
    { label: 'Cloud & DevOps', icon: LuCloud },
    { label: 'SEO Optimization', icon: LuSearch },
    { label: 'General Inquiry', icon: LuMessageCircleQuestion },
    { label: 'Project Consultation', icon: LuBriefcase },
  ];

  // Custom Dropdown Component
  const CustomDropdown = ({ value, onChange, error }) => {
    const selectedSubject = subjects.find(s => s.label === value);
    const SelectedIcon = selectedSubject?.icon;

    return (
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`w-full bg-black/20 border rounded-xl px-5 py-4 text-sm text-white outline-none transition-all shadow-inner text-left flex items-center justify-between ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
              : 'border-white/10 focus:border-blue-500 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10'
          }`}
        >
          <span className="flex items-center gap-3">
            {SelectedIcon ? (
              <SelectedIcon className="w-5 h-5 text-blue-400" />
            ) : (
              <span className="text-slate-500">Select a subject...</span>
            )}
            {value && <span>{value}</span>}
          </span>
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <LuChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-2 bg-[#0B1229] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-h-64 overflow-y-auto">
                {subjects.map((subject, idx) => {
                  const Icon = subject.icon;
                  return (
                    <motion.button
                      key={subject.label}
                      type="button"
                      onClick={() => {
                        onChange(subject.label);
                        setIsDropdownOpen(false);
                        if (errors.subject) {
                          setErrors(prev => ({ ...prev, subject: '' }));
                        }
                      }}
                      className={`w-full px-5 py-3.5 text-left flex items-center gap-3 text-sm transition-colors ${
                        value === subject.label
                          ? 'bg-blue-600/30 text-white border-l-2 border-l-blue-500'
                          : 'text-slate-300 hover:bg-white/5 border-l-2 border-l-transparent'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                      whileHover={{ paddingLeft: '1.375rem' }}
                    >
                      <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="font-medium">{subject.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Subject validation
    if (!form.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setLoading(false);

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16 bg-[#0A0F24] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden border-b border-white/5">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          className="max-w-4xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Reach Out
          </motion.span>
          <motion.h1 
            className="text-5xl lg:text-6xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Us</span>
          </motion.h1>
          <motion.p 
            className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have an enterprise project in mind? Let's engineer the perfect technical solution together.
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#0B1229] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Info */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Get In Touch</h2>
                <p className="text-slate-400 text-sm leading-relaxed">We engineer world-class solutions for elite businesses. Reach out and our technical directors will respond within 24 hours.</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Headquarters', text: '123 Tech Street, New Delhi, India 110001' },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: 'Direct Line', text: '+91 98765 43210' },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: 'General Inquiries', text: 'info@quatamsolution.com' },
                  { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Engineering Hours', text: 'Mon – Fri: 9:00 AM – 6:00 PM IST' },
                ].map(({ icon, title, text }, idx) => (
                  <motion.div 
                    key={title} 
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg flex items-start gap-5 hover:bg-white/10 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="text-2xl font-extrabold text-white mb-8 relative z-10">Send a Secure Transmission</h3>
                
                {/* Success Message */}
                {submitted && (
                  <motion.div
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    <span className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-black/20 border rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all shadow-inner ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                            : 'border-white/10 focus:border-blue-500 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@enterprise.com"
                        className={`w-full bg-black/20 border rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all shadow-inner ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                            : 'border-white/10 focus:border-blue-500 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-black/20 border rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all shadow-inner ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                            : 'border-white/10 focus:border-blue-500 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10'
                        }`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
                    </motion.div>

                    {/* Subject Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Subject *</label>
                      <CustomDropdown 
                        value={form.subject}
                        onChange={(value) => {
                          setForm(prev => ({ ...prev, subject: value }));
                        }}
                        error={errors.subject}
                      />
                      {errors.subject && <p className="text-red-400 text-xs mt-2">{errors.subject}</p>}
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your enterprise requirements..."
                      className={`w-full bg-black/20 border rounded-xl px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition-all shadow-inner resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                          : 'border-white/10 focus:border-blue-500 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-600 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? 'Sending...' : 'Transmit Message'}
                  </motion.button>
                </form>

                <p className="text-slate-500 text-xs mt-6 text-center">All fields marked with * are required</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
