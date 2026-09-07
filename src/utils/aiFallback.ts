// Smart client-side fallback engine for Ask Venky AI & AI Job Matcher
// Ensures 100% uptime on static hosting (like Vercel) even if Gemini API key or serverless functions are not yet configured.

import { PERSONAL_DETAILS } from '../data/portfolioData';

export interface JobMatchResult {
  summary: string;
  matchScoreTier: 'Strong Match' | 'Good Match' | 'Transferable Match';
  matchScorePercentage?: number;
  strongMatches: Array<{ item: string; evidence: string; type: string }>;
  goodMatches: Array<{ item: string; evidence: string; type: string }>;
  transferableSkills: Array<{ businessAction: string; technicalTranslation: string; evidence: string }>;
  relevantExperience: Array<{ company: string; role: string; contribution: string }>;
  relevantProjects: Array<{ projectTitle: string; relevance: string }>;
  technicalMatches: Array<{ skill: string; verifiedUse: string }>;
  learningGaps: Array<{ gap: string; pathForward: string }>;
  interviewDiscussionAreas: Array<{ topic: string; whyAsk: string; suggestedQuestion: string }>;
}

export function generateSmartAskVenkyReply(query: string): string {
  const q = query.toLowerCase();

  // Why hire Venky / USP
  if (q.includes('why hire') || q.includes('unique') || q.includes('hire him') || q.includes('why choose') || q.includes('strength')) {
    return `Here is why Venkata Kumar Pulapa is uniquely valuable to analytics & product teams:

• **Business-First Mindset**: Unlike purely theoretical analysts, Venky spent 1.5+ years as a Divisional Sales Officer at Delta Agri Mech managing 22 mandals and 220+ customer & lead records. He understands how field operations, lead leakage, and business friction actually occur before opening a notebook.
• **Full Modern Analytics Stack**: Proven proficiency with SQL (BigQuery, PostgreSQL), Python (Pandas, Scikit-learn), Power BI, and GA4.
• **AI-Enabled Analytics**: Actively bridges classic BI with Generative AI (NLP sentiment extraction, customer voice intelligence).
• **Core Philosophy**: *"I understand business problems before analyzing data."* Every metric he builds ties directly to revenue, retention, or operational efficiency.`;
  }

  // Real world experience / Delta Agri Mech / Sales
  if (q.includes('experience') || q.includes('delta') || q.includes('sales') || q.includes('work') || q.includes('role') || q.includes('job history')) {
    return `**Venkata Kumar's Real-World Experience:**

1. **Delta Agri Mech India Pvt. Ltd.** (July 2024 – November 2025)
   • *Role*: Divisional Sales Officer / Sales Officer
   • *Operations*: Monitored sales performance, customer conversion, and territory trends across 22 mandals in Andhra Pradesh.
   • *Data Handling*: Maintained 220+ verified customer & lead records; prioritized ~50 high-probability prospects.
   • *Executive Reporting*: Built target vs. achievement business reports in Excel & PowerPoint; recommended high-ROI demonstration locations to State Sales Leadership.

2. **Sri Venkateshwara Traders** (April 2023 – June 2024)
   • *Role*: Business Operations & Inventory Coordinator
   • *Operations*: Optimized seasonal stock turnover, tracked payment reconciliation, and reduced localized stockouts by 18%.`;
  }

  // Technical Skills / Tools / SQL / Python
  if (q.includes('skill') || q.includes('sql') || q.includes('python') || q.includes('tool') || q.includes('power bi') || q.includes('tableau') || q.includes('excel') || q.includes('tech stack')) {
    return `**Venkata Kumar's Verified Technical Stack:**

• **Querying & Databases**: SQL (Complex CTEs, Window Functions, PostgreSQL, Google BigQuery).
• **Data Science & Scripting**: Python (Data cleaning with Pandas, numerical computing with NumPy, statistical modeling with Scikit-learn).
• **Data Visualization & BI**: Microsoft Power BI (DAX, star-schema data modeling), Tableau, Interactive Executive Dashboards.
• **Digital Analytics**: Google Analytics 4 (GA4), Event Tracking, Funnel Drop-off Analysis.
• **Spreadsheet Analytics**: Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Pivot Tables, What-If Analysis).
• **Modern AI**: Prompt engineering with Google Gemini API, Voice of Customer text analytics, and automated reporting.`;
  }

  // Projects / Portfolio Work
  if (q.includes('project') || q.includes('github') || q.includes('churn') || q.includes('rfm') || q.includes('ecommerce') || q.includes('voc') || q.includes('portfolio')) {
    return `**Venky's 5 Flagship Analytical Projects:**

1. **AI Customer Support & VoC Intelligence**
   • Built an NLP & SQL pipeline categorizing customer feedback sentiment into actionable churn triggers.
2. **Customer Analytics (RFM, Churn & LTV)**
   • Segmented 4,300+ customers using Recency, Frequency, and Monetary scoring in Python & SQL to predict 90-day churn risk.
3. **Product Analytics & User Journey**
   • Mapped multi-step onboarding funnels, identifying a 28% drop-off bottleneck between signup and core activation.
4. **AI E-Commerce Business Intelligence**
   • Designed an end-to-end sales, inventory velocity, and gross margin analytics suite with Power BI.
5. **GA4 Marketing Funnel & Acquisition Analytics**
   • Audited multi-channel marketing campaigns to calculate true CAC and ROAS across organic and paid channels.

All project code and documentation are live on his GitHub: github.com/Aarya01239.`;
  }

  // Contact / Location / Availability / Relocation
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('location') || q.includes('hire') || q.includes('relocate') || q.includes('available') || q.includes('kakinada')) {
    return `**Contact & Availability Details:**

• **Full Name**: Venkata Kumar Pulapa
• **Current Location**: Kakinada, Andhra Pradesh, India
• **Target Locations**: Hyderabad, Bengaluru, Chennai, Pune, Remote / Hybrid across India
• **Email**: venkatakumar.pulapa@gmail.com
• **Phone**: +91 7032554436
• **LinkedIn**: linkedin.com/in/venkata-kumar-pulapa-28612a206
• **Availability**: Ready to interview immediately for Business Analyst, Data Analyst, or Product Analyst roles.`;
  }

  // Education / Degrees
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('study')) {
    return `**Academic Background:**

• **Bachelor of Science (B.Sc)** — Completed with strong foundations in analytical thinking, quantitative logic, and research methodologies.
• **Continuous Specialized Certifications**: Completed advanced tracks in SQL for Data Analysis, Python for Data Science, and Power BI Business Intelligence.`;
  }

  // Default intelligent overview
  return `Venkata Kumar Pulapa is a Business & Data Analyst based in Andhra Pradesh with 1.5+ years of frontline commercial and territory sales experience at Delta Agri Mech (monitoring 22 mandals and 220+ customer records). 

He translates business friction into high-impact data solutions using **SQL, Python, Power BI, Excel, and Google Gemini AI**.

Feel free to ask about:
• His commercial experience and sales territory management
• His technical stack (SQL, Python, Power BI, GA4)
• His 5 analytics case studies (RFM Churn, VoC Intelligence, Product Funnel)
• Why he stands out for Business Analyst & Data Analyst roles`;
}

export function generateSmartJobMatch(jobDescription: string): JobMatchResult {
  const jd = jobDescription.toLowerCase();

  const strongMatches: Array<{ item: string; evidence: string; type: string }> = [];
  const goodMatches: Array<{ item: string; evidence: string; type: string }> = [];
  const transferableSkills: Array<{ businessAction: string; technicalTranslation: string; evidence: string }> = [];
  const relevantExperience: Array<{ company: string; role: string; contribution: string }> = [];
  const relevantProjects: Array<{ projectTitle: string; relevance: string }> = [];
  const technicalMatches: Array<{ skill: string; verifiedUse: string }> = [];
  const learningGaps: Array<{ gap: string; pathForward: string }> = [];
  const interviewDiscussionAreas: Array<{ topic: string; whyAsk: string; suggestedQuestion: string }> = [];

  let matchScore = 75;

  // SQL check
  if (jd.includes('sql') || jd.includes('query') || jd.includes('database') || jd.includes('postgres') || jd.includes('bigquery')) {
    strongMatches.push({
      item: 'Advanced SQL Querying',
      evidence: 'Proven experience writing complex CTEs, window functions, aggregations, and multi-table joins across 5 repositories.',
      type: 'skill'
    });
    technicalMatches.push({
      skill: 'SQL (PostgreSQL / BigQuery)',
      verifiedUse: 'Core database querying in Customer Analytics RFM and E-Commerce BI projects.'
    });
    matchScore += 5;
  }

  // Python check
  if (jd.includes('python') || jd.includes('pandas') || jd.includes('numpy') || jd.includes('data science') || jd.includes('scikit')) {
    strongMatches.push({
      item: 'Python Data Analytics (Pandas, NumPy)',
      evidence: 'Used for RFM scoring, churn probability estimation, and customer sentiment clustering in GitHub repositories.',
      type: 'skill'
    });
    technicalMatches.push({
      skill: 'Python',
      verifiedUse: 'Automated data transformation and machine learning modeling.'
    });
    matchScore += 5;
  }

  // BI / Dashboards check
  if (jd.includes('power bi') || jd.includes('tableau') || jd.includes('dashboard') || jd.includes('bi') || jd.includes('visualization')) {
    strongMatches.push({
      item: 'Interactive BI Dashboarding (Power BI / Tableau)',
      evidence: 'Designed executive dashboards with star-schema modeling, DAX measures, and drill-through capabilities.',
      type: 'skill'
    });
    technicalMatches.push({
      skill: 'Power BI & Tableau',
      verifiedUse: 'Executive KPI tracking, target vs achievement reporting.'
    });
    matchScore += 5;
  }

  // Business Analysis & Stakeholder
  if (jd.includes('business') || jd.includes('analyst') || jd.includes('stakeholder') || jd.includes('requirement') || jd.includes('kpi') || jd.includes('communication')) {
    transferableSkills.push({
      businessAction: 'Presenting lead progression & territory trends to State Sales Leadership at Delta Agri Mech',
      technicalTranslation: 'Executive KPI dashboard storytelling, bridging raw data with leadership action items',
      evidence: 'Delta Agri Mech (22 mandals, 220+ customer records)'
    });
    relevantExperience.push({
      company: 'Delta Agri Mech India Pvt. Ltd.',
      role: 'Divisional Sales Officer',
      contribution: 'Monitored target vs achievement across 22 mandals, building executive reviews for state management.'
    });
  }

  // Customer / Churn / Product
  if (jd.includes('customer') || jd.includes('churn') || jd.includes('funnel') || jd.includes('retention') || jd.includes('product') || jd.includes('journey')) {
    relevantProjects.push({
      projectTitle: 'Customer Analytics (RFM, Churn & LTV)',
      relevance: 'Directly addresses retention modeling and high-value customer segmentation.'
    });
    relevantProjects.push({
      projectTitle: 'Product Analytics & User Journey',
      relevance: 'Identified a 28% drop-off bottleneck in signup funnels to lift conversion.'
    });
  } else {
    relevantProjects.push({
      projectTitle: 'AI Customer Support & VoC Intelligence',
      relevance: 'Applies NLP and SQL to diagnose root causes of customer friction.'
    });
  }

  // Ensure default strengths if short text
  if (strongMatches.length === 0) {
    strongMatches.push({
      item: 'Commercial Problem Framing',
      evidence: 'Proven field track record translating frontline business bottlenecks into analytical metrics.',
      type: 'experience'
    });
  }

  goodMatches.push({
    item: 'Modern Generative AI Integration',
    evidence: 'Actively utilizes Gemini API for customer feedback sentiment clustering and automated data synthesis.',
    type: 'skill'
  });

  // Learning gaps (intellectually honest)
  if (jd.includes('cloud') || jd.includes('aws') || jd.includes('snowflake') || jd.includes('spark')) {
    learningGaps.push({
      gap: 'Enterprise Cloud Warehouse Tools (Snowflake / AWS Redshift)',
      pathForward: 'Already strong in BigQuery and PostgreSQL; actively translating concepts to cloud warehouse equivalents.'
    });
  } else {
    learningGaps.push({
      gap: 'Proprietary Company-Specific Schema',
      pathForward: 'Rapid domain onboarding demonstrated by analyzing complex multi-tier sales territories within 30 days.'
    });
  }

  interviewDiscussionAreas.push({
    topic: 'Transition from Field Sales to Data Analytics',
    whyAsk: 'Validates candidate depth on understanding operational friction before modeling data.',
    suggestedQuestion: 'How did your experience managing 22 mandals at Delta Agri Mech change the way you write SQL queries and build dashboards?'
  });

  interviewDiscussionAreas.push({
    topic: 'Customer Segmentation & Churn Trade-offs',
    whyAsk: 'Tests practical statistical decision-making under business constraints.',
    suggestedQuestion: 'Walk me through how you balanced Recency, Frequency, and Monetary weights in your RFM project.'
  });

  const tier: 'Strong Match' | 'Good Match' | 'Transferable Match' = 
    matchScore >= 85 ? 'Strong Match' : matchScore >= 75 ? 'Good Match' : 'Transferable Match';

  return {
    summary: `Venkata Kumar is a strong candidate for this role. His dual background combining frontline commercial execution (1.5+ years managing 22 mandals at Delta Agri Mech) with a modern analytics technical stack (SQL, Python, Power BI, Gemini AI) allows him to immediately connect data insights to business profitability.`,
    matchScoreTier: tier,
    matchScorePercentage: Math.min(matchScore, 95),
    strongMatches,
    goodMatches,
    transferableSkills,
    relevantExperience,
    relevantProjects,
    technicalMatches,
    learningGaps,
    interviewDiscussionAreas
  };
}
