import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Search, 
  Cpu, 
  FileText, 
  ArrowRight, 
  Layers, 
  Database,
  ExternalLink,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { AiJobMatcher } from './AiJobMatcher';
import { PROJECTS } from '../data/portfolioData';

interface AiLabSectionProps {
  onOpenAskVenky: () => void;
  onSelectProject: (projectId: string) => void;
}

export const AiLabSection: React.FC<AiLabSectionProps> = ({ onOpenAskVenky, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'job-matcher' | 'project-explorer' | 'architecture'>('job-matcher');
  
  // Natural language project explorer state
  const [explorerQuery, setExplorerQuery] = useState('');
  const [explorerLoading, setExplorerLoading] = useState(false);
  const [explorerResult, setExplorerResult] = useState<{
    recommendedProjectIds: string[];
    explanation: string;
    suggestedSkills: string[];
  } | null>(null);

  const sampleExplorerQueries = [
    'Which projects demonstrate SQL window functions and cohort analysis?',
    'Show me projects dealing with customer churn and lifetime value.',
    'Where is Generative AI integrated with business intelligence?',
    'Show projects relevant to a SaaS Product Analyst role.'
  ];

  const handleRunExplorer = async (queryToRun?: string) => {
    const q = (queryToRun || explorerQuery).trim();
    if (!q) return;

    setExplorerLoading(true);
    try {
      const res = await fetch('/api/gemini/project-explorer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q })
      });

      if (res.ok) {
        const data = await res.json();
        setExplorerResult(data.result);
      } else {
        throw new Error('Fallback needed');
      }
    } catch (err) {
      const qLower = q.toLowerCase();
      if (qLower.includes('churn') || qLower.includes('lifetime') || qLower.includes('rfm')) {
        setExplorerResult({
          recommendedProjectIds: ['customer-analytics-rfm', 'ai-voc-intelligence'],
          explanation: 'These projects directly analyze customer retention, purchase intervals, and churn risk using SQL & Python.',
          suggestedSkills: ['RFM Segmentation', 'SQL CTEs', 'Python Churn Modeling', 'Power BI']
        });
      } else if (qLower.includes('generative') || qLower.includes('ai') || qLower.includes('nlp')) {
        setExplorerResult({
          recommendedProjectIds: ['ai-voc-intelligence', 'ecommerce-bi'],
          explanation: 'These projects integrate Gemini AI and NLP models to extract sentiment and synthesize unstructured customer feedback.',
          suggestedSkills: ['Google Gemini API', 'NLP Sentiment Clustering', 'SQL', 'Prompt Engineering']
        });
      } else if (qLower.includes('product') || qLower.includes('saas') || qLower.includes('funnel')) {
        setExplorerResult({
          recommendedProjectIds: ['product-analytics-journey', 'ga4-funnel-journey'],
          explanation: 'Focuses on feature adoption, user journey drop-offs, and behavioral funnel optimization.',
          suggestedSkills: ['Funnel Analysis', 'GA4 Events', 'SQL Window Functions', 'Cohort Retention']
        });
      } else {
        setExplorerResult({
          recommendedProjectIds: ['customer-analytics-rfm', 'product-analytics-journey'],
          explanation: 'Highlights core analytical rigor across complex SQL CTEs, window functions, and business KPIs.',
          suggestedSkills: ['SQL Window Functions', 'Python Pandas', 'Cohort Analysis', 'Power BI']
        });
      }
    } finally {
      setExplorerLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Cpu className="w-3.5 h-3.5" />
            AI-Powered Analytics Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Intelligent Recruiter & Analytics Tools.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Experience real-world AI applications: match candidate fit against any Job Description, query projects in plain English, and converse with Ask Venky AI.
          </p>
        </div>

        {/* Lab Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-neutral-800">
          <button
            id="tab-ai-job-matcher"
            onClick={() => setActiveTab('job-matcher')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition border flex items-center gap-2 ${
              activeTab === 'job-matcher'
                ? 'bg-cyan-500 text-neutral-950 border-cyan-500 shadow-md shadow-cyan-500/20'
                : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Job Matcher</span>
          </button>

          <button
            id="tab-ai-project-explorer"
            onClick={() => setActiveTab('project-explorer')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition border flex items-center gap-2 ${
              activeTab === 'project-explorer'
                ? 'bg-cyan-500 text-neutral-950 border-cyan-500 shadow-md shadow-cyan-500/20'
                : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Natural Language Project Explorer</span>
          </button>

          <button
            id="tab-ai-architecture"
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition border flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-cyan-500 text-neutral-950 border-cyan-500 shadow-md shadow-cyan-500/20'
                : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-neutral-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>AI-Augmented Analytics Architecture</span>
          </button>

          <button
            id="tab-launch-ask-venky"
            onClick={onOpenAskVenky}
            className="ml-auto px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-cyan-300 border border-cyan-800/60 text-xs font-semibold flex items-center gap-2 transition"
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>Open Ask Venky AI Modal</span>
          </button>
        </div>

        {/* Tab 1: AI Job Matcher */}
        {activeTab === 'job-matcher' && (
          <div className="max-w-4xl mx-auto">
            <AiJobMatcher />
          </div>
        )}

        {/* Tab 2: Natural Language Project Explorer */}
        {activeTab === 'project-explorer' && (
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <div className="space-y-3">
              <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Ask anything about Venky's projects in natural language
              </label>
              <div className="flex gap-2">
                <input
                  id="project-explorer-input"
                  type="text"
                  value={explorerQuery}
                  onChange={(e) => setExplorerQuery(e.target.value)}
                  placeholder="e.g. Which projects analyze customer drop-off or funnel friction?"
                  className="flex-1 px-4 py-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500 font-mono transition"
                />
                <button
                  id="btn-run-project-explorer"
                  onClick={() => handleRunExplorer()}
                  disabled={explorerLoading}
                  className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs flex items-center gap-2 transition"
                >
                  {explorerLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>Search</span>
                </button>
              </div>

              {/* Sample Queries */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] text-neutral-500 mr-1">Try asking:</span>
                {sampleExplorerQueries.map((sq, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setExplorerQuery(sq);
                      handleRunExplorer(sq);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cyan-300 transition"
                  >
                    "{sq}"
                  </button>
                ))}
              </div>
            </div>

            {/* Results Display */}
            {explorerResult && (
              <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    AI Recommender Analysis
                  </div>
                  <p className="text-sm text-neutral-200 leading-relaxed bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
                    {explorerResult.explanation}
                  </p>
                </div>

                {/* Matched Projects */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Recommended Production Repositories
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {explorerResult.recommendedProjectIds.map((id) => {
                      const proj = PROJECTS.find((p) => p.id === id || p.githubRepoName === id);
                      if (!proj) return null;
                      return (
                        <div
                          key={proj.id}
                          className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-3"
                        >
                          <div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                              {proj.category}
                            </span>
                            <h4 className="text-sm font-bold text-neutral-100 mt-2">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                              {proj.tagline}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                            >
                              <span>View Repo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Suggested Related Skills */}
                {explorerResult.suggestedSkills?.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-800">
                    <span className="text-xs text-neutral-500 mr-1">Relevant Skills:</span>
                    {explorerResult.suggestedSkills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-0.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-mono"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: AI-Augmented Analytics Architecture */}
        {activeTab === 'architecture' && (
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div className="p-7 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <h3 className="text-lg font-bold text-neutral-100">
                How Venky Combines Business Analysis with Generative AI
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Rather than treating AI as a buzzword, I use large language models as semantic coprocessors alongside relational SQL engines and statistical models.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">
                    SQL
                  </div>
                  <h4 className="font-semibold text-xs text-neutral-100">Deterministic Truth</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Transaction aggregation, revenue sums, funnel transition times, and windowed rankings are computed deterministically.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xs">
                    LLM
                  </div>
                  <h4 className="font-semibold text-xs text-neutral-100">Semantic Extraction</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Unstructured customer feedback, survey notes, and support tickets are classified with structured schemas into sentiment and root-cause tags.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    BI
                  </div>
                  <h4 className="font-semibold text-xs text-neutral-100">Executive Narrative</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    KPI variations are synthesized into C-suite executive briefings, accelerating decision cycles from weeks to minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
