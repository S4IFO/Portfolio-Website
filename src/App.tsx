/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  ChevronDown,
  Terminal,
  Database,
  Layout,
  Server,
  Smartphone
} from 'lucide-react';

import { AnimatedGradientBackground } from './components/AnimatedGradientBackground';
import { Loader } from './components/Loader';
import { SkillsMarquee } from './components/SkillsMarquee';

const projects = [
  {
    title: "EcoSphere AI",
    description: "A full-stack environmental monitoring dashboard using React, Node.js, and Gemini API for predictive analysis.",
    tags: ["React", "Node.js", "Gemini AI", "Tailwind"],
    image: "https://picsum.photos/seed/eco/800/600",
    link: "#"
  },
  {
    title: "Quantum Ledger",
    description: "Real-time cryptocurrency tracking platform with advanced data visualization and multi-wallet support.",
    tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
    image: "https://picsum.photos/seed/crypto/800/600",
    link: "#"
  },
  {
    title: "Nexus Chat",
    description: "High-performance real-time communication platform built on WebSockets with end-to-end encryption.",
    tags: ["Socket.io", "Express", "Redis", "React"],
    image: "https://picsum.photos/seed/chat/800/600",
    link: "#"
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Loader isLoading={isLoading} />
      <AnimatedGradientBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter"
        >
          SW<span className="text-blue-500">.</span>
        </motion.div>
        <div className="flex gap-8 items-center">
          {['About', 'Work', 'Skills', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-4"
          >
            Hi i'm Saif <span className="text-gradient">waleed</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 font-light tracking-widest uppercase mb-12"
          >
            Full-Stack Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
              View My Work
            </button>
            <div className="gradient-border-container group">
              <div className="gradient-border-bg animate-rotate" />
              <a 
                href="https://www.linkedin.com/in/saif-salim-b5a5a62a4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-border-content px-8 py-4 glass text-white font-semibold flex items-center justify-center transition-all duration-300 border-none!"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">Get to know me</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">About me</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I’m Saif Waleed, a Full Stack Developer who enjoys building complete web solutions from front-end interfaces to back-end systems. My goal is to create clean, efficient, and user-friendly applications that solve real problems.
              </p>
              <p>
                I have experience working with modern web technologies and enjoy learning new tools that improve performance and development workflow. I’m always exploring new ideas, improving my skills, and working on projects that challenge me as a developer.
              </p>
              <p>
                When I’m not coding, I like exploring new technologies, working on personal projects, and expanding my knowledge in software development.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
              <img 
                src="https://picsum.photos/seed/saif/800/800" 
                alt="Saif Waleed" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center animate-float">
              <Code2 className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>

        {/* What I Do Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative h-[500px]"
          >
            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {[
                { d: "M 15% 10% L 85% 30%", color: ["#ff0000", "#00ff00", "#0000ff"] }, // HTML - CSS
                { d: "M 15% 10% L 25% 75%", color: ["#00ffff", "#ff00ff", "#ffff00"] }, // HTML - JS
                { d: "M 15% 10% L 90% 90%", color: ["#ff00ff", "#ffff00", "#00ffff"] }, // HTML - React
                { d: "M 85% 30% L 25% 75%", color: ["#ffff00", "#00ffff", "#ff00ff"] }, // CSS - JS
                { d: "M 85% 30% L 90% 90%", color: ["#00ff00", "#0000ff", "#ff0000"] }, // CSS - React
                { d: "M 25% 75% L 90% 90%", color: ["#0000ff", "#ff0000", "#00ff00"] }  // JS - React
              ].map((path, idx) => (
                <motion.path
                  key={idx}
                  d={path.d}
                  fill="none"
                  strokeWidth="1.5"
                  strokeDasharray="5, 5"
                  filter="url(#glow)"
                  animate={{ 
                    stroke: [...path.color, path.color[0]],
                    strokeDashoffset: [0, -50]
                  }}
                  transition={{ 
                    stroke: { duration: 4 + idx, repeat: Infinity, ease: "linear" },
                    strokeDashoffset: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  className="opacity-30"
                />
              ))}
            </svg>

            {/* HTML Bubble */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-[10%] w-24 h-24 glass rounded-full flex items-center justify-center p-6 shadow-xl shadow-orange-500/10 z-10"
            >
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" 
                alt="HTML5" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* CSS Bubble */}
            <motion.div 
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[20%] right-[15%] w-28 h-28 glass rounded-full flex items-center justify-center p-7 shadow-xl shadow-blue-500/10 z-10"
            >
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" 
                alt="CSS3" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* JS Bubble */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] left-[20%] w-32 h-32 glass rounded-full flex items-center justify-center p-8 shadow-xl shadow-yellow-500/10 z-10"
            >
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                alt="JavaScript" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* React Bubble */}
            <motion.div 
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-0 right-[10%] w-36 h-36 glass rounded-full flex items-center justify-center p-9 shadow-xl shadow-cyan-500/10 z-10"
            >
              <img 
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" 
                alt="React" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">My Expertise</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">What I Do</h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                I design and develop modern web applications from start to finish. My work focuses on building responsive interfaces, creating efficient backend systems, and delivering scalable digital solutions.
              </p>
              <p>
                I enjoy solving complex problems with clean code and building applications that provide great user experiences. I continuously learn new technologies and tools to improve performance, development workflow, and application architecture.
              </p>
              <p>
                My goal is to build reliable and efficient web solutions that help bring ideas to life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold">Selected Work</h2>
            </div>
            <p className="hidden md:block max-w-xs text-white/40 text-sm">
              A collection of projects that showcase my expertise in full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-2 py-1 border border-white/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4 block">Technical Arsenal</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Tools & Technologies</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base">
              A curated selection of the frameworks and tools I use to bring complex ideas to life.
            </p>
          </motion.div>
        </div>
        
        <SkillsMarquee />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Let's build something <span className="text-blue-500">extraordinary</span>.
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
              Currently available for freelance projects and full-time opportunities. 
              Have a project in mind? Let's talk.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:saifowaleed2018@gmail.com" 
                className="group px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saif-salim-b5a5a62a4/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm font-mono">
            © 2024 SAIF WALEED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer >
    </motion.div>
  </div>
);
}
