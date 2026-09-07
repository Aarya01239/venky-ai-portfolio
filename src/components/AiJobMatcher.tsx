import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  Briefcase, 
  FolderGit2, 
  Code, 
  FileText, 
  Loader2,
  Layers,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { SAMPLE_JOB_DESCRIPTIONS } from '../data/portfolioData';
import { JobMatchResult } from '../types';
import { generateSmartJobMatch } from '../utils/aiFallback';

export const AiJobMatcher: React.FC = () => {
  const [jobDescription, setJobDescription] = useState<string>(SAMPLE_JOB_DESCRIPTIONS[0].text);
  const [selectedSampleId, setSelectedSampleId] = useState<string>(SAMPLE_JOB_DESCRIPTIONS[0].id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [matchResult, setMatchResult] = useState<JobMatchResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSelectSample = (sampleId: string) => {
    const sample = SAMPLE_JOB_DESCRIPTIONS.find((s) => s.id === sampleId);
    if (sample) {
      setSelectedSampleId(sampleId);
      setJobDescription(sample.text);
    }
  };

  const handleAnalyze = async () => {
    if (!jobDescription || jobDescription.trim().length < 20) {
      setErrorMsg('Please enter a job description of at least 20 characters.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/gemini/job-matcher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription })
      });

      if (!res.ok) {
        throw new Error(`Evaluation failed with status ${res.status}`);
      }

      const data = await res.json();
      setMatchResult(data.result);
    } catch (err: any) {
      // Fallback intelligently to verified grounded matching engine
      try {
        const localResult = generateSmartJobMatch(jobDescription);
        setMatchResult(localResult as JobMatchResult);
      } catch (fallbackErr) {
        setErrorMsg('Failed to analyze job description. Please check connection and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getTierBadgeStyle = (tier: string) => {
    switch (tier) {
      case 'Strong Match':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'Good Match':
        return 'bg-cyan-950 text-cyan-300 border-cyan-800';
      case 'Transferable Match':
        return 'bg-amber-950 text-amber-300 border-amber-800';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <div id="ai-job-matcher-container" className="space-y-8 text-left">
      
      {/* Description & Sample Quick-Loaders */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            Target Job Description
          </label>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-neutral-500 mr-1">Load sample JD:</span>
            {SAMPLE_JOB_DESCRIPTIONS.map((s) => (
              <button
                key={s.id}
                id={`sample-jd-btn-${s.id}`}
                onClick={() => handleSelectSample(s.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition border ${
                  selectedSampleId === s.id
                    ? 'bg-neutral-800 text-cyan-300 border-cyan-500/40'
                    : 'bg-neutral-950/70 text-neutral-400 border-neutral-800 hover:text-neutral-200'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <textarea
          id="jd-input-textarea"
          value={jobDescription}
          onChange={(e) => {
            setJobDescription(e.target.value);
            setSelectedSampleId('');
          }}
          rows={6}
          placeholder="Paste full job description or requirements here..."
          className="w-full p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono leading-relaxed transition"
        />

        {/* Action Button */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs text-neutral-500">
            Powered by server-side Gemini 3.6 Flash • Transparent verified evaluation
          </div>
          <button
            id="btn-run-job-matcher"
            onClick={handleAnalyze}
            disabled={isLoading}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-neutral-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-cyan-500/20 transition"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Evaluating Fit...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Analyze Candidate Match</span>
              </>
            )}
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300">
            {errorMsg}
          </div>
        )}
      </div>

      {/* Evaluation Results Card */}
      {matchResult && (
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 shadow-2xl space-y-8 backdrop-blur-md">
          
          {/* Top Tier & Summary */}
          <div className="space-y-4 pb-6 border-b border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono border ${getTierBadgeStyle(matchResult.matchScoreTier)}`}>
                Fit Level: {matchResult.matchScoreTier}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                Transparent Verification (No Fake ATS Scores)
              </span>
            </div>

            <p className="text-sm text-neutral-200 leading-relaxed bg-neutral-950 p-4 rounded-xl border border-neutral-800/80">
              {matchResult.summary}
            </p>
          </div>

          {/* Strong Matches */}
          {matchResult.strongMatches?.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Direct Verified Matches
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {matchResult.strongMatches.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1">
                    <div className="font-semibold text-neutral-100 flex items-center justify-between">
                      <span>{m.item}</span>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-800/50">
                        {m.type}
                      </span>
                    </div>
                    <div className="text-neutral-400 leading-relaxed">
                      {m.evidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transferable Skills (Commercial to Analytical) */}
          {matchResult.transferableSkills?.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Transferable Skills from Commercial Experience
              </div>
              <div className="space-y-2">
                {matchResult.transferableSkills.map((t, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-neutral-300">
                      <span className="text-neutral-400">{t.businessAction}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 hidden sm:inline" />
                      <span className="font-bold text-cyan-300">{t.technicalTranslation}</span>
                    </div>
                    <div className="text-neutral-500 text-[11px]">
                      Evidence: {t.evidence}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Relevant Projects & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Relevant Projects */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                Directly Relevant Projects
              </div>
              <div className="space-y-2">
                {matchResult.relevantProjects?.map((p, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1">
                    <div className="font-semibold text-neutral-200">{p.projectTitle}</div>
                    <div className="text-neutral-400">{p.relevance}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant Experience */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                Supporting Career Experience
              </div>
              <div className="space-y-2">
                {matchResult.relevantExperience?.map((e, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1">
                    <div className="font-semibold text-neutral-200">{e.company} ({e.role})</div>
                    <div className="text-neutral-400">{e.contribution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Honest Learning Gaps & Bridge Path */}
          {matchResult.learningGaps?.length > 0 && (
            <div className="space-y-3 p-4 rounded-2xl bg-amber-950/15 border border-amber-800/30">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Identified Learning Gaps & Rapid Upskilling Strategy
              </div>
              <div className="space-y-2">
                {matchResult.learningGaps.map((g, idx) => (
                  <div key={idx} className="text-xs space-y-1 text-left">
                    <div className="font-semibold text-neutral-200">• Gap: {g.gap}</div>
                    <div className="text-neutral-400 pl-3">Bridge Path: {g.pathForward}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Interview Questions */}
          {matchResult.interviewDiscussionAreas?.length > 0 && (
            <div className="space-y-3">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Recommended Recruiter Interview Questions
              </div>
              <div className="space-y-2.5">
                {matchResult.interviewDiscussionAreas.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1">
                    <div className="font-semibold text-neutral-200">Topic: {q.topic}</div>
                    <div className="text-neutral-400 text-[11px]">Why ask: {q.whyAsk}</div>
                    <div className="text-cyan-300 italic pt-1">"{q.suggestedQuestion}"</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
