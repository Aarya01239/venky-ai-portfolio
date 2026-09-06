import React, { useState } from 'react';
import { 
  Check, 
  Layers, 
  Database, 
  Cpu, 
  FileSpreadsheet, 
  LineChart, 
  Users, 
  Bot, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

interface SkillsSectionProps {
  onSelectSkillForProject?: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectSkillForProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].category);
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILL_CATEGORIES[0].skills[0]);

  const currentCategory = SKILL_CATEGORIES.find((c) => c.category === selectedCategory) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Business Analysis':
        return Briefcase;
      case 'Data Analytics':
        return Database;
      case 'Business Intelligence':
        return LineChart;
      case 'Excel':
        return FileSpreadsheet;
      case 'Product Analytics':
        return Layers;
      case 'Customer Analytics':
        return Users;
      case 'AI & Generative AI':
        return Bot;
      default:
        return Database;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Layers className="w-3.5 h-3.5" />
            Skill Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Evidence-Backed Competencies.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            No subjective percentage sliders. Every skill below is anchored to real commercial field execution or verified codebase implementations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.category);
            const isSelected = cat.category === selectedCategory;
            return (
              <button
                key={cat.category}
                id={`skill-cat-${cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => {
                  setSelectedCategory(cat.category);
                  setActiveSkill(cat.skills[0]);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-neutral-100 text-neutral-900 border-neutral-100 font-semibold shadow-sm'
                    : 'bg-neutral-900/50 text-neutral-400 border-neutral-800 hover:bg-neutral-900 hover:text-neutral-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-neutral-900' : 'text-cyan-400'}`} />
                <span>{cat.category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-neutral-300 text-neutral-900' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid and Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentCategory.skills.map((skill) => {
              const isSelected = activeSkill?.name === skill.name;
              return (
                <button
                  key={skill.name}
                  id={`skill-btn-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveSkill(skill)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-neutral-900 border-cyan-500/60 shadow-lg shadow-cyan-950/20 ring-1 ring-cyan-500/40'
                      : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="font-semibold text-sm text-neutral-200 flex items-center justify-between mb-1.5">
                    <span>{skill.name}</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {skill.evidence}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-neutral-800/60 text-[11px] text-cyan-400/80 font-mono">
                    <span>{skill.usedInProjects.length} Projects</span>
                    <span>•</span>
                    <span>{skill.usedInExperience.length} Commercial Roles</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Evidence Inspector Card */}
          <div className="lg:col-span-5 sticky top-28">
            {activeSkill ? (
              <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-xl space-y-5 text-left backdrop-blur-md">
                
                <div className="border-b border-neutral-800 pb-4">
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    {selectedCategory}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-100">
                    {activeSkill.name}
                  </h3>
                </div>

                {/* Verified Evidence Summary */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Verified Evidence
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950 p-3.5 rounded-xl border border-neutral-800/80">
                    {activeSkill.evidence}
                  </p>
                </div>

                {/* Where Used in Experience */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Applied in Real-World Roles
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSkill.usedInExperience.map((exp) => (
                      <span
                        key={exp}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-800 text-neutral-200 border border-neutral-700/60"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Where Used in Projects */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Demonstrated in GitHub Projects
                  </div>
                  <div className="space-y-1.5">
                    {activeSkill.usedInProjects.map((proj) => (
                      <div
                        key={proj}
                        className="p-2.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-cyan-300 flex items-center justify-between"
                      >
                        <span>{proj}</span>
                        {onSelectSkillForProject && (
                          <button
                            onClick={() => onSelectSkillForProject(activeSkill.name)}
                            className="text-[11px] text-neutral-400 hover:text-cyan-400 flex items-center gap-1"
                          >
                            <span>Filter</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 text-center text-neutral-500 text-sm">
                Select a skill to inspect verified evidence.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
