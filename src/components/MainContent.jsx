import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { config } from '../config';
import { useTheme } from '../context/ThemeContext';

const MainContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="lg:ml-96 lg:mr-20 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements - Fixed Position */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 lg:ml-96 lg:mr-20">
        {/* Small scattered geometric shapes across the page */}
        
        {/* Top Section */}
        <div className="absolute top-10 left-20 w-8 h-8 border border-primary/5 dark:border-primary/[0.01] rounded-lg rotate-12" />
        <div className="absolute top-24 right-32 w-6 h-6 border border-secondary/5 dark:border-secondary/[0.01] rotate-45" />
        <div className="absolute top-40 left-1/3 w-10 h-10 border border-primary/4 dark:border-primary/[0.01] rounded-full" />
        <div className="absolute top-16 right-1/4 w-7 h-7 border border-secondary/6 dark:border-secondary/[0.01] rounded-lg -rotate-12" />
        
        {/* Middle Section */}
        <div className="absolute top-1/4 left-16 w-12 h-12 border border-primary/5 dark:border-primary/[0.01] rotate-45" />
        <div className="absolute top-1/3 right-20 w-8 h-8 border border-secondary/5 dark:border-secondary/[0.01] rounded-full" />
        <div className="absolute top-[40%] left-1/4 w-6 h-6 border border-primary/4 dark:border-primary/[0.01] rounded-lg rotate-[30deg]" />
        <div className="absolute top-[45%] right-1/3 w-9 h-9 border border-secondary/6 dark:border-secondary/[0.01] rotate-[60deg]" />
        <div className="absolute top-1/2 left-[15%] w-7 h-7 border border-primary/5 dark:border-primary/[0.01] rounded-full" />
        <div className="absolute top-[55%] right-[15%] w-10 h-10 border border-secondary/4 dark:border-secondary/[0.01] rounded-lg -rotate-45" />
        
        {/* Lower Middle Section */}
        <div className="absolute top-[60%] left-1/3 w-8 h-8 border border-primary/5 dark:border-primary/[0.01] rotate-12" />
        <div className="absolute top-[65%] right-1/4 w-6 h-6 border border-secondary/6 dark:border-secondary/[0.01] rounded-full" />
        <div className="absolute top-[70%] left-20 w-9 h-9 border border-primary/4 dark:border-primary/[0.01] rotate-[75deg]" />
        <div className="absolute top-3/4 right-28 w-7 h-7 border border-secondary/5 dark:border-secondary/[0.01] rounded-lg rotate-[15deg]" />
        
        {/* Bottom Section */}
        <div className="absolute bottom-32 left-1/4 w-10 h-10 border border-primary/5 dark:border-primary/[0.01] rounded-full" />
        <div className="absolute bottom-40 right-20 w-8 h-8 border border-secondary/4 dark:border-secondary/[0.01] rotate-45" />
        <div className="absolute bottom-24 left-[15%] w-6 h-6 border border-primary/6 dark:border-primary/[0.01] rounded-lg -rotate-[20deg]" />
        <div className="absolute bottom-48 right-1/3 w-7 h-7 border border-secondary/5 dark:border-secondary/[0.01] rotate-[45deg]" />
        <div className="absolute bottom-16 left-1/3 w-9 h-9 border border-primary/4 dark:border-primary/[0.01] rounded-full" />
        
        {/* Far Right scattered */}
        <div className="absolute top-[20%] right-12 w-6 h-6 border border-primary/5 dark:border-primary/[0.01] rounded-lg rotate-[25deg]" />
        <div className="absolute top-[50%] right-8 w-8 h-8 border border-secondary/4 dark:border-secondary/[0.01] rotate-[10deg]" />
        <div className="absolute top-[80%] right-16 w-7 h-7 border border-primary/6 dark:border-primary/[0.01] rounded-full" />
        
        {/* Data Visualization Elements - Chart Icons */}
        {/* Bar Chart */}
        <div className="absolute top-[15%] left-[40%] opacity-[0.04] dark:opacity-[0.01]">
          <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="14" width="4" height="7" />
            <rect x="10" y="8" width="4" height="13" />
            <rect x="17" y="4" width="4" height="17" />
          </svg>
        </div>
        
        {/* Line Chart */}
        <div className="absolute top-[35%] right-[25%] opacity-[0.04] dark:opacity-[0.01] rotate-12">
          <svg className="w-14 h-14 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3,18 7,12 11,15 15,8 19,11 23,6" />
            <circle cx="3" cy="18" r="1.5" fill="currentColor" />
            <circle cx="7" cy="12" r="1.5" fill="currentColor" />
            <circle cx="11" cy="15" r="1.5" fill="currentColor" />
            <circle cx="15" cy="8" r="1.5" fill="currentColor" />
            <circle cx="19" cy="11" r="1.5" fill="currentColor" />
          </svg>
        </div>
        
        {/* Pie Chart */}
        <div className="absolute bottom-[25%] left-[20%] opacity-[0.05] dark:opacity-[0.01]">
          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L12 12 L22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 12 2 Z" />
          </svg>
        </div>
        
        {/* Python Logo */}
        <div className="absolute top-[25%] left-[10%] opacity-[0.04] dark:opacity-[0.01] rotate-[-15deg]">
          <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none">
            <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.155 3 7.155 3s-2.432.12-2.432 2.35v3.201h4.862v.647H4.723s-2.431.082-2.431 2.432v4.121s-.268 2.432 2.432 2.432h1.216v-1.984s-.133-2.432 2.432-2.432l4.862-.012h.351z" fill="#3776ab" fillOpacity="0.15"/>
            <circle cx="8.5" cy="5.5" r="0.8" fill="#3776ab" fillOpacity="0.15"/>
          </svg>
        </div>
        
        {/* Database/SQL Icon */}
        <div className="absolute top-[55%] left-[35%] opacity-[0.04] dark:opacity-[0.01] rotate-6">
          <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 5v4c0 1.657-4.03 3-9 3S3 10.657 3 9V5" />
            <path d="M21 9v4c0 1.657-4.03 3-9 3S3 14.657 3 13V9" />
            <path d="M21 13v4c0 1.657-4.03 3-9 3s-9-1.343-9-3v-4" />
          </svg>
        </div>
        
        {/* MongoDB Icon */}
        <div className="absolute bottom-[35%] right-[18%] opacity-[0.04] dark:opacity-[0.01]">
          <svg className="w-14 h-14" viewBox="0 0 24 24" fill="#47A248" fillOpacity="0.2">
            <path d="M12 3c-.975 0-9 1.5-9 9.75 0 6.75 8.025 8.25 8.775 8.25.225 1.5.525 3 .525 3h.6s.3-1.5.525-3c.75 0 8.775-1.5 8.775-8.25C21 4.5 12.975 3 12 3z"/>
          </svg>
        </div>
        
        {/* Excel/Spreadsheet Icon */}
        <div className="absolute top-[45%] right-[8%] opacity-[0.04] dark:opacity-[0.01] rotate-[-10deg]">
          <svg className="w-12 h-12 text-secondary" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="15" y1="3" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Git Branch Icon */}
        <div className="absolute top-[68%] left-[12%] opacity-[0.04] dark:opacity-[0.01] rotate-12">
          <svg className="w-14 h-14 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
            <path d="M6 9v6" />
          </svg>
        </div>
        
        {/* Code Brackets */}
        <div className="absolute bottom-[45%] left-[8%] opacity-[0.04] dark:opacity-[0.01]">
          <svg className="w-12 h-12 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        
        {/* Dashboard/Analytics Icon */}
        <div className="absolute top-[8%] right-[15%] opacity-[0.04] dark:opacity-[0.01] rotate-[-8deg]">
          <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        
        {/* Tableau/Power BI style icon */}
        <div className="absolute bottom-[15%] right-[28%] opacity-[0.04] dark:opacity-[0.01] rotate-6">
          <svg className="w-14 h-14 text-secondary" viewBox="0 0 24 24" fill="currentColor">
            <rect x="10" y="2" width="4" height="8" />
            <rect x="2" y="10" width="8" height="4" />
            <rect x="14" y="10" width="8" height="4" />
            <rect x="10" y="14" width="4" height="8" />
          </svg>
        </div>
        
        {/* Data Arrow Flow */}
        <div className="absolute top-[78%] right-[12%] opacity-[0.04] dark:opacity-[0.01]">
          <svg className="w-14 h-14 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        
        {/* Binary/Data Code */}
        <div className="absolute top-[88%] left-[25%] opacity-[0.03] dark:opacity-[0.008] text-primary font-mono text-xs rotate-[-5deg]">
          <div>01010</div>
          <div>11001</div>
        </div>
        
        {/* PostgreSQL Elephant silhouette */}
        <div className="absolute top-[48%] left-[5%] opacity-[0.04] dark:opacity-[0.01]">
          <svg className="w-12 h-12 text-secondary" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="10" r="8"/>
            <ellipse cx="12" cy="18" rx="4" ry="2"/>
          </svg>
        </div>
        
        {/* R Language Logo hint */}
        <div className="absolute bottom-[55%] right-[35%] opacity-[0.04] dark:opacity-[0.01] text-primary font-bold text-2xl rotate-12">
          R
        </div>
        
        {/* Python hint */}
        <div className="absolute top-[62%] right-[5%] opacity-[0.03] dark:opacity-[0.008] text-secondary font-bold text-xl rotate-[-8deg]">
          py
        </div>
      </div>

      <div className="w-full mx-auto px-6 py-12 lg:px-12 lg:py-16 relative z-10">
        
        {/* Mobile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden mb-12"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-lg mb-4">
              <img 
                src="/profile.png" 
                alt={config.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-2">
              {config.personal.name}
            </h1>
            <p className="text-base text-mutedText dark:text-gray-400 font-inter mb-3">
              {config.personal.tagline}
            </p>
            <div className="flex items-center gap-2 text-mutedText dark:text-gray-400 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-inter">{config.personal.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-darkText hover:text-white dark:hover:bg-gray-700 transition-all shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={`mailto:${config.personal.email}`} className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
            >
              Work
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
            >
              Education
            </button>
            <button
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
            >
              Certifications
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all"
            >
              Skills
            </button>
            <a
              href="https://drive.google.com/file/d/19SnfUNNHYeAV3TxTgz1IvR1hnCN2z8bm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white dark:bg-gray-800 text-darkText dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg font-inter text-sm font-medium hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all text-center"
            >
              Resume
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center gap-3 text-sm">
              <svg className="w-4 h-4 text-mutedText dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${config.personal.email}`} className="text-mutedText dark:text-gray-400 hover:text-primary dark:hover:text-primary font-inter transition-colors">
                {config.personal.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <svg className="w-4 h-4 text-mutedText dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-mutedText dark:text-gray-400 font-inter">{config.personal.phone}</span>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-darkText dark:text-white mb-6">
            Hey, I'm {config.personal.name.split(' ')[0]}
          </h2>
          <p className="text-lg font-inter text-mutedText dark:text-gray-400 leading-relaxed text-justify">
            {config.personal.description}
          </p>
        </motion.div>

        {/* Work Experience Section */}
        <motion.section
          id="work"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-8">
            Work Highlights
          </h3>
          <div className="space-y-8">
            {config.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold font-poppins text-darkText dark:text-white mb-2">
                  {exp.company}
                </h4>
                <p className="text-base font-semibold text-primary dark:text-blue-400 mb-2 font-inter">
                  {exp.title} • {exp.location} • {exp.duration}
                </p>
                <p className="text-mutedText dark:text-gray-400 font-inter leading-relaxed text-justify mb-4">
                  {exp.achievements.join(' ')}
                </p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary dark:text-blue-400 hover:text-primary/80 dark:hover:text-blue-300 transition-colors font-inter text-sm font-medium"
                  >
                    View Certificate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-8">
            Projects
          </h3>
          <div className="space-y-8">
            {config.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold font-poppins text-darkText dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm font-semibold text-mutedText dark:text-gray-400 mb-3 font-inter">
                  {project.technologies.join(' • ')}
                </p>
                <p className="text-mutedText dark:text-gray-400 font-inter leading-relaxed text-justify mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-inter text-sm font-medium transition-colors underline"
                    >
                      Project Link
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-inter text-sm font-medium transition-colors underline"
                    >
                      Live Site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-8">
            Education
          </h3>
          <div className="space-y-6">
            {config.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + idx * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-bold font-poppins text-darkText dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-base font-semibold text-primary dark:text-blue-400 mb-1 font-inter">
                  {edu.institution}
                </p>
                <p className="text-sm text-mutedText dark:text-gray-400 font-inter mb-2">
                  {edu.location} • {edu.duration}
                </p>
                {edu.details && (
                  <p className="text-sm text-mutedText dark:text-gray-400 font-inter italic">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-8">
            Certifications
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <ul className="space-y-3">
              {config.certifications.map((cert, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.3 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mutedText dark:text-gray-300 font-inter hover:text-primary dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span>{cert.name}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold font-poppins text-darkText dark:text-white mb-6">
            Skills & Technologies
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
            {Object.entries(config.skills).map(([category, skillList], idx) => (
              <div key={category} className={idx !== 0 ? 'mt-3 pt-3 border-t border-gray-100 dark:border-gray-700' : ''}>
                <h4 className="text-sm font-bold font-poppins text-darkText dark:text-white mb-1.5">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700 text-mutedText dark:text-gray-300 text-sm font-inter rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-mutedText dark:text-gray-400 font-inter text-center">
            © {new Date().getFullYear()} {config.personal.name}
          </p>
        </footer>
      </div>

      {/* Theme Toggle Button - Mobile Only */}
      <motion.button
        onClick={toggleTheme}
        className="lg:hidden fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          // Sun icon for light mode
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </motion.svg>
        ) : (
          // Moon icon for dark mode
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </motion.button>

      {/* Scroll to Top Button - Mobile Only */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-8 right-8 z-50 w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-darkText dark:text-gray-300 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </main>
  );
};

export default MainContent;
