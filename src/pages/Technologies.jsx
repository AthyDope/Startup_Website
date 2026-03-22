import React, { useState, useEffect } from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiFastapi,
  SiMysql, SiMongodb, SiPostgresql, SiRedis,
  SiDocker, SiKubernetes, SiGithubactions,
  SiFlutter, SiApple, SiAndroid,
  SiGithub, SiFigma, SiJira, SiPostman
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import Skeleton from '../components/Skeleton';

const techStack = [
  { 
    category: 'Frontend', 
    color: 'from-blue-600 to-indigo-600', 
    items: [
      { icon: <SiReact color="#61DAFB" />, name: 'React' }, 
      { icon: <SiNextdotjs color="#FFFFFF" />, name: 'Next.js' }, 
      { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' }, 
      { icon: <SiTailwindcss color="#38B2AC" />, name: 'Tailwind CSS' }
    ] 
  },
  { 
    category: 'Backend', 
    color: 'from-emerald-600 to-teal-600', 
    items: [
      { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' }, 
      { icon: <SiPython color="#3776AB" />, name: 'Python' }, 
      { icon: <SiDjango color="#092E20" />, name: 'Django' }, 
      { icon: <SiFastapi color="#05998B" />, name: 'FastAPI' }
    ] 
  },
  { 
    category: 'Database', 
    color: 'from-orange-600 to-red-600', 
    items: [
      { icon: <SiMysql color="#4479A1" />, name: 'MySQL' }, 
      { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' }, 
      { icon: <SiPostgresql color="#4169E1" />, name: 'PostgreSQL' }, 
      { icon: <SiRedis color="#DC382D" />, name: 'Redis' }
    ] 
  },
  { 
    category: 'Cloud & DevOps', 
    color: 'from-violet-600 to-purple-600', 
    items: [
      { icon: <FaAws color="#FF9900" />, name: 'AWS' }, 
      { icon: <SiDocker color="#2496ED" />, name: 'Docker' }, 
      { icon: <SiKubernetes color="#326CE5" />, name: 'Kubernetes' }, 
      { icon: <SiGithubactions color="#2088FF" />, name: 'CI/CD' }
    ] 
  },
  { 
    category: 'Mobile', 
    color: 'from-cyan-600 to-blue-600', 
    items: [
      { icon: <SiReact color="#61DAFB" />, name: 'React Native' }, 
      { icon: <SiFlutter color="#02569B" />, name: 'Flutter' }, 
      { icon: <SiApple color="#FFFFFF" />, name: 'iOS' }, 
      { icon: <SiAndroid color="#3DDC84" />, name: 'Android' }
    ] 
  },
  { 
    category: 'Tools', 
    color: 'from-rose-600 to-pink-600', 
    items: [
      { icon: <SiGithub color="#FFFFFF" />, name: 'GitHub' }, 
      { icon: <SiFigma color="#F24E1E" />, name: 'Figma' }, 
      { icon: <SiJira color="#0052CC" />, name: 'Jira' }, 
      { icon: <SiPostman color="#FF6C37" />, name: 'Postman' }
    ] 
  },
];

const Technologies = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 bg-[#0A0F24] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Expertise
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Master</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We leverage the latest, battle-tested technologies to build scalable, secure, and high-performance solutions for our global clients.
          </p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-72 flex flex-col">
                  <Skeleton className="h-16 w-full rounded-none" />
                  <div className="p-8 grid grid-cols-2 gap-4 flex-grow">
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                  </div>
                </div>
              ))
            ) : (
              techStack.map(({ category, color, items }) => (
                <div key={category} className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                  <div className={`bg-gradient-to-r ${color} px-8 py-5 flex items-center justify-between`}>
                    <h3 className="text-white font-bold text-lg tracking-wide">{category}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                  <div className="p-8 grid grid-cols-2 gap-4">
                    {items.map(({ icon, name }) => (
                      <div key={name} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 transition-all group/item">
                        <span className="text-2xl opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300">
                          {icon}
                        </span>
                        <span className="text-slate-300 font-semibold text-xs group-hover/item:text-white transition-colors">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a specific tech stack?</h2>
          <p className="text-slate-400 mb-10">Our team is versatile and can adapt to your project's unique requirements.</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
