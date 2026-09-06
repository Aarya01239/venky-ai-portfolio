import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Linkedin, 
  Github, 
  BriefcaseBusiness,
  Bot
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  onOpenAskVenky: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  onOpenAskVenky
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'transformations', label: 'Why Analytics' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-lab', label: 'AI Lab' },
    { id: 'recruiter', label: 'Recruiter View', highlight: true },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity */}
        <button
          id="nav-brand-btn"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/80 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:border-cyan-500/50 transition">
            VK
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-100 tracking-tight flex items-center gap-2">
              <span>{PERSONAL_DETAILS.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[11px] text-neutral-400 font-mono tracking-tight">
              Business & Analytics
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-neutral-800/80 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  item.highlight
                    ? isActive
                      ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-sm'
                      : 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/40 hover:bg-cyan-900/40'
                    : isActive
                    ? 'bg-neutral-800 text-neutral-100 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                }`}
              >
                {item.highlight && <BriefcaseBusiness className="w-3 h-3" />}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls (Right side) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Ask Venky AI trigger */}
          <button
            id="nav-ask-venky-btn"
            onClick={onOpenAskVenky}
            className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-cyan-500/40 text-xs font-medium text-cyan-300 flex items-center gap-1.5 transition"
            title="Ask Venky AI"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ask AI</span>
          </button>

          {/* Resume Download */}
          <a
            id="nav-resume-btn"
            href={PERSONAL_DETAILS.resumeUrl}
            download="Venkata_Kumar_Pulapa_Resume.pdf"
            className="px-3.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-900 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-700" />
            <span>Resume</span>
          </a>

          {/* Social icons */}
          <a
            id="nav-linkedin-link"
            href={PERSONAL_DETAILS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="nav-github-link"
            href={PERSONAL_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition"
            title="GitHub Repositories"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            id="nav-theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-ask-venky-btn"
            onClick={onOpenAskVenky}
            className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl space-y-3">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition ${
                  activeTab === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <a
              href={PERSONAL_DETAILS.resumeUrl}
              download="Venkata_Kumar_Pulapa_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-900 text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-neutral-400 hover:text-white"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
