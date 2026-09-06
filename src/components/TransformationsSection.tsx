import React, { useState } from 'react';
import { 
  ArrowRight, 
  GitCommit, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  TrendingUp,
  FileCode,
  MessageSquareQuote
} from 'lucide-react';
import { TRANSFORMATIONS } from '../data/portfolioData';

export const TransformationsSection: React.FC = () => {
  const [activeTransId, setActiveTransId] = useState<string>(TRANSFORMATIONS[0].id);
  const activeTrans = TRANSFORMATIONS.find((t) => t.id === activeTransId) || TRANSFORMATIONS[0];

  return (
    <section id="transformations" className="py-24 relative border-t border-neutral-800/80 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <GitCommit className="w-3.5 h-3.5" />
            Transferable Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            From Business Experience to Analytics.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            How commercial territory execution and ground-level customer interactions translate directly into modern analytical problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Transformation Pipeline List */}
          <div className="lg:col-span-6 space-y-2.5">
            {TRANSFORMATIONS.map((trans, index) => {
              const isSelected = trans.id === activeTransId;
              return (
                <button
                  key={trans.id}
                  id={`trans-item-${trans.id}`}
                  onClick={() => setActiveTransId(trans.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-neutral-900 border-cyan-500/50 shadow-md ring-1 ring-cyan-500/30'
                      : 'bg-neutral-900/30 border-neutral-800/80 hover:bg-neutral-900/60 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-neutral-800 text-neutral-400 font-mono text-xs font-bold flex items-center justify-center group-hover:text-cyan-400">
                      0{index + 1}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs text-neutral-400 line-through decoration-neutral-600 decoration-1">
                        {trans.businessExperience}
                      </div>
                      <div className="text-sm font-semibold text-neutral-100 flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                        <span className="text-cyan-300">{trans.analyticsDiscipline}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800/70 text-neutral-400 border border-neutral-700/50 hidden sm:inline">
                    {trans.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Deep Dive Analysis Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-xl space-y-6 text-left backdrop-blur-md">
              
              {/* Category Tag & Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                  {activeTrans.tag}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  Transferable Architecture
                </span>
              </div>

              {/* Transformation Bridge Diagram */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800/80 space-y-3">
                <div className="text-xs text-neutral-500 font-mono">Bridge Analysis</div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex-1">
                    <div className="text-[11px] text-neutral-400">Field Foundation</div>
                    <div className="text-sm font-bold text-neutral-200 mt-0.5">
                      {activeTrans.businessExperience}
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shrink-0 mx-auto">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex-1">
                    <div className="text-[11px] text-cyan-400 font-medium">Analytical Discipline</div>
                    <div className="text-sm font-bold text-cyan-200 mt-0.5">
                      {activeTrans.analyticsDiscipline}
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytical Explanation */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  How the Translation Works
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeTrans.explanation}
                </p>
              </div>

              {/* Field Real-World Example */}
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1.5">
                <div className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                  <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
                  Ground-Level Scenario
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  "{activeTrans.realWorldExample}"
                </p>
              </div>

              {/* Transferable Value for Recruiters */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30 space-y-1.5">
                <div className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Business Outcome for Teams
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {activeTrans.transferableOutcome}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
