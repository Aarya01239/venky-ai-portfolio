import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  Award, 
  ChevronRight,
  Database,
  BarChart,
  FileSpreadsheet
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Building2 className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Real-World Commercial Experience.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Practical business grounding across commercial sales, territory analysis, and executive reporting.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {EXPERIENCES.map((exp) => {
            const isSelected = exp.id === selectedExpId;
            return (
              <button
                key={exp.id}
                id={`exp-tab-${exp.id}`}
                onClick={() => setSelectedExpId(exp.id)}
                className={`p-5 rounded-2xl text-left transition duration-200 border relative ${
                  isSelected
                    ? 'bg-neutral-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/20 ring-1 ring-cyan-500/30'
                    : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/70 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {exp.duration}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-100">
                      {exp.company}
                    </h3>
                    <div className="text-xs text-neutral-400">
                      {exp.role}
                    </div>
                  </div>

                  <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold font-mono ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    {exp.achievement.highlight.includes('120%') ? '120% Quota' : '9 Tractors'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Detail Panel */}
        <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-8 text-left backdrop-blur-sm">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeExp.duration}
                <span>•</span>
                <MapPin className="w-3.5 h-3.5" />
                {activeExp.location}
              </div>
              <h3 className="text-2xl font-bold text-neutral-100">
                {activeExp.role}
              </h3>
              <div className="text-sm font-medium text-neutral-400 mt-0.5">
                {activeExp.company}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400">Key Commercial Outcome</div>
                <div className="text-sm font-bold text-neutral-100 font-mono">
                  {activeExp.achievement.highlight}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive KPI Visualization Metrics */}
          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
              Operational Metrics & Scope
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {activeExp.metricsSummary.map((metric) => (
                <div 
                  key={metric.label}
                  className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1"
                >
                  <div className="text-xs text-neutral-400">{metric.label}</div>
                  <div className="text-lg font-bold text-neutral-100 font-mono tracking-tight text-cyan-300">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-neutral-500">{metric.subtext}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Specific Harvester Sales KPI Visualization Bar if Delta */}
          {activeExp.id === 'delta-agri-mech' && (
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  Harvester Target vs. Actual Delivery Benchmark
                </span>
                <span className="font-mono text-emerald-400 font-bold">120% Achievement</span>
              </div>

              {/* Progress bar */}
              <div className="relative w-full h-3.5 bg-neutral-800 rounded-full overflow-hidden">
                {/* 100% Target marker line */}
                <div className="absolute top-0 bottom-0 left-[83.33%] w-0.5 bg-neutral-400 z-10" title="Target (5 Harvesters)" />
                {/* Achievement bar */}
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ width: '100%' }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Target: 5 Units</span>
                <span>Delivered: 6 Units (+1 Over quota)</span>
              </div>
            </div>
          )}

          {/* Key Responsibilities & Daily Analytical Operations */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Responsibilities & Business Analysis in Practice
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeExp.keyResponsibilities.map((resp, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/40 border border-neutral-800/60 text-xs text-neutral-300 leading-relaxed"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transferable Skills Acquired */}
          <div className="pt-2 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2">Analytical Skills Applied:</span>
            {activeExp.skillsAcquired.map((skill) => (
              <span 
                key={skill}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-800/80 text-neutral-200 border border-neutral-700/60"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
