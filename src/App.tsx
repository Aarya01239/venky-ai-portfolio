import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TransformationsSection } from './components/TransformationsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AiLabSection } from './components/AiLabSection';
import { RecruiterSection } from './components/RecruiterSection';
import { ContactSection } from './components/ContactSection';
import { AskVenkyModal } from './components/AskVenkyModal';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isAskVenkyOpen, setIsAskVenkyOpen] = useState<boolean>(false);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);

  // Sync dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  // Section observer to update active tab on scroll
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'experience',
      'transformations',
      'skills',
      'projects',
      'ai-lab',
      'recruiter',
      'contact'
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 220;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSkillForProject = (skillName: string) => {
    setSelectedSkillFilter(skillName);
    scrollToSection('projects');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-neutral-50 text-neutral-900'
    }`}>
      {/* Primary Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenAskVenky={() => setIsAskVenkyOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <HeroSection
          onExploreWork={() => scrollToSection('projects')}
          onOpenRecruiter={() => scrollToSection('recruiter')}
          onOpenAskVenky={() => setIsAskVenkyOpen(true)}
        />

        <AboutSection />

        <ExperienceSection />

        <TransformationsSection />

        <SkillsSection onSelectSkillForProject={handleSelectSkillForProject} />

        <ProjectsSection
          selectedSkillFilter={selectedSkillFilter}
          onClearSkillFilter={() => setSelectedSkillFilter(null)}
        />

        <AiLabSection
          onOpenAskVenky={() => setIsAskVenkyOpen(true)}
          onSelectProject={(id) => {
            scrollToSection('projects');
          }}
        />

        <RecruiterSection
          onOpenAskVenky={() => setIsAskVenkyOpen(true)}
        />

        <ContactSection />
      </main>

      {/* Floating Ask Venky AI Assistant Quick-Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="btn-floating-ask-venky"
          onClick={() => setIsAskVenkyOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 border border-neutral-700/80 hover:border-cyan-500/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
        >
          {/* Ambient Glow */}
          <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 group-hover:opacity-60 blur transition duration-300 -z-10" />
          
          <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
            <Bot className="w-4 h-4" />
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-neutral-100 flex items-center gap-1.5">
              <span>Ask Venky AI</span>
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </div>
            <div className="text-[10px] text-neutral-400 font-mono">
              Candidate Knowledge
            </div>
          </div>
        </button>
      </div>

      {/* Grounded Zero-Hallucination AI Modal */}
      <AskVenkyModal
        isOpen={isAskVenkyOpen}
        onClose={() => setIsAskVenkyOpen(false)}
      />
    </div>
  );
}
