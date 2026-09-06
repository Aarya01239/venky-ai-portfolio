import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Database, 
  Cpu, 
  TrendingUp, 
  Lightbulb, 
  Layers
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { ProjectDataVisualizer } from './ProjectDataVisualizer';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="case-study-modal-content"
        className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 text-left relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="p-6 sm:px-8 border-b border-neutral-800 flex items-start justify-between bg-neutral-900/95 sticky top-0 z-20 backdrop-blur-md">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                10-Section Case Study
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              {project.tagline}
            </p>
          </div>

          <button
            id="btn-close-case-study"
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-6 sm:p-8 space-y-10 overflow-y-auto">
          
          {/* Interactive Chart Visualizer if available */}
          {project.interactiveData && (
            <div className="space-y-3 p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                <span>Interactive Analysis Snapshot</span>
                <span className="text-neutral-500">Live Simulation</span>
              </div>
              <ProjectDataVisualizer 
                type={project.interactiveData.type}
                stats={project.interactiveData.stats}
                chartData={project.interactiveData.chartData}
              />
            </div>
          )}

          {/* 01 Business Context */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                01
              </span>
              Business Context
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pl-7">
              {caseStudy.businessContext}
            </p>
          </div>

          {/* 02 Problem Statement */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-rose-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-rose-950 border border-rose-800 text-rose-300 flex items-center justify-center text-[10px]">
                02
              </span>
              Problem Statement
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pl-7">
              {caseStudy.problemStatement}
            </p>
          </div>

          {/* 03 Key Business Questions */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                03
              </span>
              Key Business Questions Investigated
            </div>
            <div className="pl-7 space-y-2">
              {caseStudy.keyBusinessQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 04 Data & Methodology */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                04
              </span>
              Data & Methodology
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pl-7">
              {caseStudy.dataAndMethodology}
            </p>
          </div>

          {/* 05 Analysis Process */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                05
              </span>
              Analysis Execution Process
            </div>
            <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.analysisProcess.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-300 leading-relaxed">
                  <div className="text-cyan-400 font-mono font-bold mb-1">Stage 0{idx + 1}</div>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* 06 Key Insights */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-800 text-amber-300 flex items-center justify-center text-[10px]">
                06
              </span>
              Discovered Business Insights
            </div>
            <div className="pl-7 space-y-2">
              {caseStudy.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-start gap-2.5 text-xs text-neutral-200">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 07 Recommendations */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 flex items-center justify-center text-[10px]">
                07
              </span>
              Strategic Recommendations
            </div>
            <div className="pl-7 space-y-2">
              {caseStudy.recommendations.map((rec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-start gap-2.5 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 08 Tools & Implementation Detail */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                08
              </span>
              Technical Stack & Implementation
            </div>
            <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.toolsDetail.map((tool, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* 09 Business Value */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 flex items-center justify-center text-[10px]">
                09
              </span>
              Commercial Value Delivered
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed pl-7 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              {caseStudy.businessValue}
            </p>
          </div>

          {/* 10 GitHub Repository */}
          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <div className="text-xs font-mono text-neutral-400 font-semibold tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center text-[10px]">
                10
              </span>
              GitHub Codebase & Dataset Repository
            </div>
            <div className="pl-7 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="flex items-center gap-3">
                <Github className="w-6 h-6 text-neutral-300" />
                <div>
                  <div className="text-xs font-bold text-neutral-100 font-mono">
                    Aarya01239/{project.githubRepoName}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Includes SQL schemas, Python scripts, CSV data, and documentation
                  </div>
                </div>
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
              >
                <span>Open Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs text-neutral-500">
          <span>Venkata Kumar Pulapa • Portfolio Case Study</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
