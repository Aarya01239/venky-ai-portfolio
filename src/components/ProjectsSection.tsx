import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  ArrowRight, 
  Github, 
  Sparkles, 
  BarChart2, 
  Code, 
  Layers,
  CheckCircle,
  Filter
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy, GitHubRepo } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ProjectDataVisualizer } from './ProjectDataVisualizer';

interface ProjectsSectionProps {
  selectedSkillFilter?: string | null;
  onClearSkillFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedSkillFilter,
  onClearSkillFilter
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [githubLoading, setGithubLoading] = useState<boolean>(true);

  // Fetch GitHub repos from backend proxy
  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('/api/github/repos');
        if (res.ok) {
          const data = await res.json();
          setGithubRepos(data.repos || []);
        }
      } catch (err) {
        console.warn('Failed to load GitHub repos:', err);
      } finally {
        setGithubLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const categories = ['All', 'AI & VoC Analytics', 'Product & User Behavior', 'Customer Intelligence', 'E-commerce & Revenue BI', 'Marketing & Acquisition'];

  const filteredProjects = PROJECTS.filter((proj) => {
    // Category filter
    if (selectedCategory !== 'All' && proj.category !== selectedCategory) {
      return false;
    }
    // Skill filter from ecosystem
    if (selectedSkillFilter) {
      const matchInTools = proj.tools.some((t) => t.toLowerCase().includes(selectedSkillFilter.toLowerCase()));
      const matchInText = proj.caseStudy.dataAndMethodology.toLowerCase().includes(selectedSkillFilter.toLowerCase()) ||
                          proj.caseStudy.toolsDetail.some((td) => td.toLowerCase().includes(selectedSkillFilter.toLowerCase()));
      if (!matchInTools && !matchInText) return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchTagline = proj.tagline.toLowerCase().includes(q);
      const matchProb = proj.businessProblem.toLowerCase().includes(q);
      const matchTool = proj.tools.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchTagline || matchProb || matchTool;
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
              <FolderGit2 className="w-3.5 h-3.5" />
              Verified Analytics Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
              End-to-End Case Studies.
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Every project represents an analytical solution built with SQL, Python, and BI tools, complete with public GitHub code and verified datasets.
            </p>
          </div>

          {/* GitHub Status Badge */}
          <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-3 shrink-0">
            <Github className="w-5 h-5 text-neutral-300" />
            <div className="text-left">
              <div className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                GitHub: @Aarya01239
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                {githubLoading ? 'Connecting to GitHub API...' : `${githubRepos.length} Repositories Verified`}
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="projects-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, SQL, funnels..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            {/* Active Skill Filter Banner if active */}
            {selectedSkillFilter && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-xs text-cyan-300">
                <Filter className="w-3.5 h-3.5" />
                <span>Filtered by skill: <strong>{selectedSkillFilter}</strong></span>
                {onClearSkillFilter && (
                  <button
                    onClick={onClearSkillFilter}
                    className="ml-1 text-neutral-400 hover:text-white text-xs px-1"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition border ${
                    isSelected
                      ? 'bg-neutral-100 text-neutral-900 border-neutral-100 font-semibold shadow-sm'
                      : 'bg-neutral-900/40 text-neutral-400 border-neutral-800/80 hover:bg-neutral-900 hover:text-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="p-6 sm:p-7 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition duration-300 flex flex-col justify-between space-y-6 text-left group backdrop-blur-sm shadow-xl"
            >
              <div className="space-y-4">
                {/* Header line */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-400 text-xs font-mono flex items-center gap-1.5 transition"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Repo</span>
                  </a>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-100 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Business Problem Solved */}
                <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Core Business Problem
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>

                {/* Interactive Data Preview if available */}
                {project.interactiveData && (
                  <div className="pt-1">
                    <ProjectDataVisualizer
                      type={project.interactiveData.type}
                      stats={project.interactiveData.stats}
                      chartData={project.interactiveData.chartData}
                    />
                  </div>
                )}

                {/* Tools Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-950 text-neutral-300 border border-neutral-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                <button
                  id={`btn-open-case-study-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-semibold flex items-center gap-2 shadow-sm transition"
                >
                  <span>10-Section Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-300 hover:text-white font-medium flex items-center gap-1.5 transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-neutral-900/30 border border-neutral-800 space-y-3">
            <p className="text-neutral-400 text-sm">No projects matched your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                if (onClearSkillFilter) onClearSkillFilter();
              }}
              className="px-4 py-2 rounded-xl bg-neutral-800 text-xs text-neutral-200"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
