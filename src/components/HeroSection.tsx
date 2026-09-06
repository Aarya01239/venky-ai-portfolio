import React from 'react';
import { 
  ArrowDown, 
  Linkedin, 
  Github, 
  FileText, 
  Briefcase, 
  BarChart3, 
  TrendingUp, 
  Database,
  Sparkles,
  Bot
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { PortraitCard } from './PortraitCard';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenRecruiter: () => void;
  onOpenAskVenky: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onOpenRecruiter,
  onOpenAskVenky
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 data-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/10 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning, Headline & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Radar Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-neutral-300 tracking-tight">
                {PERSONAL_DETAILS.status}
              </span>
            </div>

            {/* Main Headline & Display Name */}
            <div className="space-y-3">
              <div className="text-sm font-semibold tracking-wide text-cyan-400 font-mono uppercase">
                {PERSONAL_DETAILS.name}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-[1.12]">
                Turning Business Problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Data-Driven Decisions.</span>
              </h1>
            </div>

            {/* Subheadline & Philosophy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_DETAILS.subheadline}
            </p>

            {/* Positioning Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: 'Business Analyst', icon: Briefcase },
                { label: 'Data Analytics', icon: BarChart3 },
                { label: 'Business Analytics', icon: TrendingUp },
                { label: 'Product Analytics', icon: Database }
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-900/80 text-neutral-300 border border-neutral-800"
                >
                  <item.icon className="w-3.5 h-3.5 text-cyan-400" />
                  {item.label}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-recruiter-view-btn"
                onClick={onOpenRecruiter}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 font-medium text-sm transition flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>Recruiter View</span>
              </button>

              <button
                id="hero-ask-venky-btn"
                onClick={onOpenAskVenky}
                className="px-4 py-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-800/60 text-cyan-300 font-medium text-sm transition flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask Venky AI</span>
              </button>

              <a
                id="hero-resume-download"
                href={PERSONAL_DETAILS.resumeUrl}
                download="Venkata_Kumar_Pulapa_Resume.pdf"
                className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-sm font-medium transition flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Proof & Quick Links */}
            <div className="flex items-center gap-6 pt-3 text-xs text-neutral-400 border-t border-neutral-800/80">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Kakinada, Andhra Pradesh, India
              </span>
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub (@Aarya01239)
              </a>
            </div>
          </div>

          {/* Right Column: Premium Portrait Composition & Floating Metrics */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Center Portrait Component */}
            <div className="w-full max-w-sm sm:max-w-md relative">
              <PortraitCard variant="hero" />

              {/* Floating Metric 1: Harvester Sales Overachievement */}
              <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Sales Achievement</div>
                    <div className="text-sm font-bold text-neutral-100 font-mono">120% Harvester Target</div>
                  </div>
                </div>
              </div>

              {/* Floating Metric 2: Field Mandals & Lead Records */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400">Territory & Pipeline</div>
                    <div className="text-sm font-bold text-neutral-100 font-mono">22 Mandals | 220+ Records</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Metric Bar (visible on small screens) */}
            <div className="grid grid-cols-2 gap-3 w-full mt-6 sm:hidden">
              <div className="bg-neutral-900/80 border border-neutral-800 p-2.5 rounded-xl text-center">
                <div className="text-lg font-bold text-emerald-400 font-mono">120%</div>
                <div className="text-[11px] text-neutral-400">Target Achievement</div>
              </div>
              <div className="bg-neutral-900/80 border border-neutral-800 p-2.5 rounded-xl text-center">
                <div className="text-lg font-bold text-cyan-400 font-mono">220+</div>
                <div className="text-[11px] text-neutral-400">Lead Records Tracked</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
