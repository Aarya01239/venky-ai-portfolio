import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  Building2, 
  LineChart, 
  Cpu, 
  FileSpreadsheet, 
  Compass,
  Briefcase
} from 'lucide-react';
import { PERSONAL_DETAILS, EDUCATION, PROFESSIONAL_DEVELOPMENT } from '../data/portfolioData';
import { PortraitCard } from './PortraitCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Compass className="w-3.5 h-3.5" />
            Strategic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Business Understanding Meets Analytics.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Why I approach data differently: before writing a single line of SQL or modeling a dashboard, I focus on the commercial friction, operational workflow, and stakeholder expectations.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Foundation */}
          <div className="lg:col-span-5 space-y-6">
            <PortraitCard variant="about" />

            {/* Core Philosophy Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 text-left">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Guiding Philosophy
              </div>
              <blockquote className="text-xl font-medium text-neutral-100 leading-snug border-l-2 border-cyan-500 pl-4 py-1 italic">
                "{PERSONAL_DETAILS.corePhilosophy}"
              </blockquote>
              <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                Data without business context produces vanity charts. True analytics starts with customer conversations, operational constraints, and executive goals.
              </p>
            </div>

            {/* Academic Credentials */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 text-left">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Academic & Professional Rigor
              </div>
              <div className="space-y-4 text-xs">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="border-l border-neutral-800 pl-3 space-y-1">
                    <div className="font-semibold text-neutral-200 text-sm">{edu.degree}</div>
                    <div className="text-cyan-400">{edu.field}</div>
                    <div className="text-neutral-400">{edu.institution} ({edu.year})</div>
                  </div>
                ))}

                {PROFESSIONAL_DEVELOPMENT.map((dev) => (
                  <div key={dev.id} className="border-l border-neutral-800 pl-3 space-y-1">
                    <div className="font-semibold text-neutral-200 text-sm">{dev.title}</div>
                    <div className="text-neutral-400">{dev.provider} • {dev.year} ({dev.status})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Story & Competency Matrix */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* The Storyline */}
            <div className="prose prose-invert max-w-none text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                My trajectory in analytics is grounded in high-stakes commercial reality. During my time at <strong className="text-neutral-100">Delta Agri Mech India Pvt. Ltd.</strong> and <strong className="text-neutral-100">Sri Venkateshwara Seven Infra LLP</strong>, I wasn't examining simulated exercises — I was navigating real customer budgets, tracking 220+ Customer & Lead Records, analyzing machine purchase objections across 22 mandals, and reporting target-vs-actual variances directly to senior sales leaders.
              </p>
              <p>
                That ground-level experience developed an instinct for what matters to business stakeholders. When I listen to commercial leaders, I don't just hear metrics; I understand the underlying commercial problem: lead drop-offs, margin dilution, territory friction, and operational bottlenecks.
              </p>
              <p>
                To scale this business problem-solving capability, I augmented my commercial experience with an <strong className="text-neutral-100">MBA in Marketing & Business Analytics</strong> and mastered modern analytical tools: <strong className="text-cyan-300">SQL, Python, Power BI, Advanced Excel</strong>, and <strong className="text-cyan-300">Generative AI workflows</strong>. Today, I translate complex enterprise data into high-conviction decisions.
              </p>
            </div>

            {/* Evolution Flowchart */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                The Progression Formula
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_DETAILS.storyFormula.map((step, idx) => (
                  <div 
                    key={step} 
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs"
                  >
                    <span className="w-5 h-5 rounded-md bg-neutral-800 text-cyan-400 font-mono flex items-center justify-center text-[10px] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-medium text-neutral-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Rooted in Experience */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-neutral-200">
                Foundational Strengths Developed in the Field
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Stakeholder Elicitation', desc: 'Translating executive questions and field objections into clear business requirements.' },
                  { title: 'Variance & KPI Analysis', desc: 'Tracking target versus achievement pacing and isolating operational gaps.' },
                  { title: 'Territory & Funnel Modeling', desc: 'Evaluating lead progression from initial inquiry to transaction delivery.' },
                  { title: 'Executive Presentation', desc: 'Delivering clear, high-density briefings focused on revenue impact and recommendations.' }
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1">
                    <div className="font-semibold text-xs text-neutral-100 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
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
