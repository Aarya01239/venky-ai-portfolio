import React, { useState } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  FileText, 
  Copy, 
  Check, 
  HelpCircle, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  ExternalLink,
  Bot,
  MapPin,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { RECRUITER_DATA, PERSONAL_DETAILS, ROLE_FIT_EVALUATIONS } from '../data/portfolioData';

interface RecruiterSectionProps {
  onOpenAskVenky: () => void;
}

export const RecruiterSection: React.FC<RecruiterSectionProps> = ({ onOpenAskVenky }) => {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [selectedRoleFit, setSelectedRoleFit] = useState<'Business Analyst' | 'Data Analyst' | 'Product Analyst'>('Business Analyst');

  const handleCopySummary = () => {
    const summaryText = `Venkata Kumar Pulapa — Business Analyst & Analytics Professional
Location: Kakinada, Andhra Pradesh, India
Target Roles: Business Analyst | Data Analyst | Business Analytics | Product Analyst
Phone: ${PERSONAL_DETAILS.phone} | Email: ${PERSONAL_DETAILS.email}
LinkedIn: ${PERSONAL_DETAILS.linkedin}
GitHub: ${PERSONAL_DETAILS.github}

Core Value Proposition:
- Real-world commercial grounding (120% target delivery at Delta Agri Mech; managed 220+ customer & lead records across 22 mandals).
- Technical Analytics Stack: SQL, Python, Power BI, Advanced Excel, Generative AI.
- MBA in Marketing & Business Analytics (2025).
- Core Philosophy: "I understand business problems before analyzing data."`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const activeRoleFit = ROLE_FIT_EVALUATIONS[selectedRoleFit];

  return (
    <section id="recruiter" className="py-24 relative border-t border-neutral-800/80 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Briefcase className="w-3.5 h-3.5" />
            Recruiter & Hiring Manager Command Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Everything You Need in 30 Seconds.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Curated specifically for talent acquisition teams, recruitment leads, and engineering/analytics hiring managers seeking proven commercial problem solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Quick Facts & 30-Second Elevator Pitch */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Quick Facts Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Candidate Snapshot
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Interview
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Candidate Name:</span>
                  <span className="font-semibold text-neutral-100">{RECRUITER_DATA.quickFacts.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Location:</span>
                  <span className="text-neutral-200">{RECRUITER_DATA.quickFacts.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Target Roles:</span>
                  <span className="text-cyan-300 font-medium text-right">{RECRUITER_DATA.quickFacts.targetRoles.join(', ')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Availability:</span>
                  <span className="text-emerald-400 font-medium">{RECRUITER_DATA.quickFacts.availability}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Work Mode:</span>
                  <span className="text-neutral-200">{RECRUITER_DATA.quickFacts.workMode}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400">Direct Email:</span>
                  <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-cyan-400 hover:underline">{PERSONAL_DETAILS.email}</a>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Direct Phone:</span>
                  <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-neutral-200 hover:text-white font-mono">{PERSONAL_DETAILS.phone}</a>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={PERSONAL_DETAILS.resumeUrl}
                  download="Venkata_Kumar_Pulapa_Resume.pdf"
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </a>

                <button
                  id="btn-copy-recruiter-summary"
                  onClick={handleCopySummary}
                  className="px-3.5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium flex items-center justify-center gap-1.5 transition"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
              </div>
            </div>

            {/* 30-Second Elevator Pitch */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                30-Second Pitch
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed italic border-l-2 border-cyan-500 pl-3 py-0.5">
                "{RECRUITER_DATA.elevatorPitch}"
              </p>
            </div>

          </div>

          {/* Right: Why Hire Venky (6 Pillars) & Role Fit Evaluator */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Why Hire Venky: 6 Strategic Pillars */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Why Hire Venky: 6 Strategic Pillars
                </div>
                <button
                  onClick={onOpenAskVenky}
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Ask AI for deeper fit analysis</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {RECRUITER_DATA.whyHire.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 space-y-1.5"
                  >
                    <div className="font-semibold text-xs text-neutral-100 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 font-mono text-[10px] font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Fit Breakdown Tabs */}
            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Role-Specific Fit Matrix
                </div>
                
                {/* Role Switcher */}
                <div className="flex gap-1.5">
                  {(['Business Analyst', 'Data Analyst', 'Product Analyst'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRoleFit(role)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                        selectedRoleFit === role
                          ? 'bg-cyan-500 text-neutral-950 font-bold'
                          : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Role Matrix Content */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-sm font-bold text-neutral-100 mb-1">
                    Venky as your {activeRoleFit.role}:
                  </div>
                  <p className="text-neutral-300 leading-relaxed bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                    {activeRoleFit.pitch}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="font-mono text-cyan-400 font-semibold text-[11px] uppercase">
                      Direct Capabilities
                    </div>
                    <div className="space-y-1">
                      {activeRoleFit.matches.map((m, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-cyan-400 font-semibold text-[11px] uppercase">
                      Evidence from Track Record
                    </div>
                    <div className="space-y-1">
                      {activeRoleFit.evidence.map((e, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-neutral-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                          <span>{e}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hiring Manager Interview Discussion Cheatsheet */}
            <div className="p-6 rounded-3xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                Suggested Interview Discussion Topics for Hiring Managers
              </div>

              <div className="space-y-3">
                {RECRUITER_DATA.interviewQuestions.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1 text-xs">
                    <div className="font-semibold text-neutral-200">
                      Topic: {q.topic}
                    </div>
                    <div className="text-neutral-400 text-[11px]">
                      Target competency: {q.context}
                    </div>
                    <div className="text-cyan-300 italic pt-0.5">
                      "{q.question}"
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
