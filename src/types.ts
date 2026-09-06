export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  keyResponsibilities: string[];
  achievement: {
    highlight: string;
    metrics?: {
      target?: number;
      actual?: number;
      percentage?: number;
      unit?: string;
    };
    description: string;
  };
  metricsSummary: {
    label: string;
    value: string;
    subtext: string;
  }[];
  skillsAcquired: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  status?: string;
  highlights?: string[];
}

export interface ProfessionalDevelopmentItem {
  id: string;
  title: string;
  provider: string;
  year: string;
  status: string;
}

export interface TransformationItem {
  id: string;
  businessExperience: string;
  analyticsDiscipline: string;
  explanation: string;
  realWorldExample: string;
  transferableOutcome: string;
  tag: string;
}

export interface SkillItem {
  name: string;
  usedInExperience: string[];
  usedInProjects: string[];
  evidence: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface CaseStudySection {
  title: string;
  content: string;
  keyPoints?: string[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  businessProblem: string;
  tools: string[];
  githubRepoName: string;
  githubUrl: string;
  caseStudy: {
    businessContext: string;
    problemStatement: string;
    keyBusinessQuestions: string[];
    dataAndMethodology: string;
    analysisProcess: string[];
    keyInsights: string[];
    recommendations: string[];
    toolsDetail: string[];
    businessValue: string;
  };
  interactiveData?: {
    type: 'funnel' | 'rfm' | 'voc' | 'ecommerce' | 'ga4';
    stats: { label: string; value: string; trend?: string }[];
    chartData: any[];
  };
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
}

export interface JobMatchResult {
  summary: string;
  matchScoreTier: 'Strong Match' | 'Good Match' | 'Transferable Match' | 'Learning Opportunity';
  strongMatches: { item: string; evidence: string; type: 'skill' | 'experience' | 'project' }[];
  goodMatches: { item: string; evidence: string; type: 'skill' | 'experience' | 'project' }[];
  transferableSkills: { businessAction: string; technicalTranslation: string; evidence: string }[];
  relevantExperience: { company: string; role: string; contribution: string }[];
  relevantProjects: { projectTitle: string; relevance: string; url?: string }[];
  technicalMatches: { skill: string; verifiedUse: string }[];
  learningGaps: { gap: string; pathForward: string }[];
  interviewDiscussionAreas: { topic: string; whyAsk: string; suggestedQuestion: string }[];
}
