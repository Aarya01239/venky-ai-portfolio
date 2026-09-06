import {
  Experience,
  EducationItem,
  ProfessionalDevelopmentItem,
  TransformationItem,
  SkillCategory,
  ProjectCaseStudy
} from '../types';

export const PERSONAL_DETAILS = {
  name: 'Venkata Kumar Pulapa',
  title: 'Business Analyst | Data Analytics | Business Analytics | Product Analytics',
  headline: 'Turning Business Problems into Data-Driven Decisions.',
  subheadline:
    'Business Analyst and Analytics Professional combining real-world business experience, customer understanding, stakeholder communication and modern analytics to transform business problems into actionable insights.',
  location: 'Kakinada, Andhra Pradesh, India',
  email: 'venkatakumar.pulapa@gmail.com',
  phone: '+91 7032554436',
  linkedin: 'https://www.linkedin.com/in/venkata-kumar-pulapa-28612a206',
  github: 'https://github.com/Aarya01239',
  githubUsername: 'Aarya01239',
  resumeUrl: '/resume.pdf',
  status: 'Open to Business Analyst, Data Analyst & Product Analyst Opportunities',
  corePhilosophy: 'I understand business problems before analyzing data.',
  storyFormula: [
    'Real-World Business Experience',
    'Customer & Business Understanding',
    'Business Problem Solving',
    'Business Analytics',
    'Data Analytics',
    'Product Analytics',
    'AI-Powered Analytics'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'delta-agri-mech',
    company: 'Delta Agri Mech India Pvt. Ltd.',
    role: 'Divisional Sales Officer / Sales Officer',
    duration: 'July 2024 – November 2025',
    location: 'Andhra Pradesh, India',
    keyResponsibilities: [
      'Analyzed sales performance, customer activity, and territory trends across 22 mandals.',
      'Maintained approximately 220 customer and lead records, systematically categorizing ~50 priority prospects.',
      'Analyzed customer operational requirements, financial budgets, purchase timing, and competitor machine alternatives.',
      'Monitored operational KPIs and prepared target-vs-achievement business & management reports.',
      'Prepared and delivered executive PowerPoint presentations to Team Lead and State Sales Head.',
      'Presented granular market insights, lead progression funnels, and competitor dynamics to executive leadership.',
      'Identified high-potential agricultural clusters and recommended strategic demonstration and roadshow locations.',
      'Coordinated cross-functionally with technical service teams to address customer concerns and reduce delivery turnaround.'
    ],
    achievement: {
      highlight: 'Exceeded Harvester Sales Quota by 120%',
      metrics: {
        target: 5,
        actual: 6,
        percentage: 120,
        unit: 'Harvesters'
      },
      description: 'Achieved 120% of target by delivering 6 harvesters against a 5-unit quota through structured pipeline tracking and customer objection analysis.'
    },
    metricsSummary: [
      { label: 'Achievement Rate', value: '120%', subtext: '6 Harvesters Delivered (Target: 5)' },
      { label: 'Territory Scope', value: '22 Mandals', subtext: 'Comprehensive field coverage' },
      { label: 'Data Management', value: '220+ Customer & Lead Records', subtext: 'Systematically tracked in Excel' },
      { label: 'High-Value Pipeline', value: '~50 Prospects', subtext: 'Priority qualification & follow-up' }
    ],
    skillsAcquired: [
      'Business Reporting',
      'Stakeholder Communication',
      'Market Analysis',
      'Customer Understanding',
      'KPI Analysis',
      'Business Recommendations',
      'Territory Management',
      'Executive Presentations'
    ]
  },
  {
    id: 'sri-venkateshwara',
    company: 'Sri Venkateshwara Seven Infra LLP',
    role: 'Sales Executive',
    duration: 'February 2023 – May 2024',
    location: 'Andhra Pradesh, India',
    keyResponsibilities: [
      'Engaged directly with prospective machinery buyers to uncover technical requirements and operational budget constraints.',
      'Analyzed customer objections, evaluated competitor equipment alternatives, and framed clear value propositions.',
      'Maintained structured customer and lead information systems, ensuring clean pipeline documentation.',
      'Utilized Microsoft Excel extensively for day-to-day sales reporting, pipeline velocity tracking, and trend analysis.',
      'Prepared target-versus-achievement operational variance reports for management reviews.',
      'Analyzed ground-level market feedback to provide practical, revenue-driving commercial recommendations.'
    ],
    achievement: {
      highlight: '9 Commercial Tractor Sales Closed',
      metrics: {
        actual: 9,
        unit: 'Tractor Units'
      },
      description: 'Successfully negotiated, financed, and closed 9 commercial tractor transactions by tailoring financing options to buyer cash cycles.'
    },
    metricsSummary: [
      { label: 'Units Closed', value: '9 Tractors', subtext: 'End-to-end transaction closures' },
      { label: 'Core Methodology', value: 'Needs Discovery', subtext: 'Budget & objection analysis' },
      { label: 'Reporting Cadence', value: 'Weekly Variance', subtext: 'Target vs. achievement in Excel' }
    ],
    skillsAcquired: [
      'Customer Requirements Understanding',
      'Objection Handling',
      'Target vs Achievement Reporting',
      'Excel Pipeline Tracking',
      'Competitor Analysis',
      'Commercial Recommendations'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'mba',
    degree: 'MBA (Master of Business Administration)',
    field: 'Marketing & Business Analytics',
    institution: 'JNTUK / Kakinada Institute of Technological Sciences',
    year: '2024 – 2026',
    status: 'In Progress',
    highlights: [
      'Advanced Business Analytics, Predictive Modeling & Quantitative Decision Science',
      'Marketing Analytics, Customer Lifetime Value & Market Segmentation',
      'Managerial Economics, Financial Modeling & Strategic Operations'
    ]
  },
  {
    id: 'bcom',
    degree: 'B.Com (Bachelor of Commerce)',
    field: 'Computer Applications',
    institution: 'Adikavi Nannaya University',
    year: '2024',
    status: 'Graduated',
    highlights: [
      'Database Management Systems, Information Systems & Programming Fundamentals',
      'Corporate Accounting, Financial Auditing & Commercial Law',
      'Applied Business Mathematics & Statistical Foundations'
    ]
  }
];

export const PROFESSIONAL_DEVELOPMENT: ProfessionalDevelopmentItem[] = [
  {
    id: 'flm-ba-ai',
    title: 'Business Analytics with AI',
    provider: 'FLM',
    year: '2026',
    status: 'Ongoing'
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'trans-1',
    businessExperience: 'Customer Conversations',
    analyticsDiscipline: 'Requirements Understanding',
    explanation: 'Listening to commercial buyers on the field translated directly into translating ambiguity into structured business requirements (BRDs), user stories, and acceptance criteria.',
    realWorldExample: 'Interpreting farmer objections on equipment downtime into tractor power and financing specifications.',
    transferableOutcome: 'Bridges executive stakeholders, technical devs, and end-users with crystal-clear requirement definition.',
    tag: 'Discovery & Scoping'
  },
  {
    id: 'trans-2',
    businessExperience: 'Sales Reporting',
    analyticsDiscipline: 'Business Reporting',
    explanation: 'Transitioned from compiling manual target vs. achievement logs into architecting automated, scalable KPI dashboards and executive scorecards.',
    realWorldExample: 'Replaced manual spreadsheets with automated target variance trackers and pacing indicators.',
    transferableOutcome: 'Designs high-clarity BI reporting models that eliminate manual data latency.',
    tag: 'BI & Reporting'
  },
  {
    id: 'trans-3',
    businessExperience: 'Territory Analysis',
    analyticsDiscipline: 'Market & Trend Analysis',
    explanation: 'Evaluating regional sales across 22 mandals became spatial and time-series performance analysis identifying regional velocity and market penetration gaps.',
    realWorldExample: 'Benchmarking harvester adoption rates across mandals to uncover underserved agricultural belts.',
    transferableOutcome: 'Uncovers geographical, cohort, and temporal patterns to guide resource allocation.',
    tag: 'Market Analytics'
  },
  {
    id: 'trans-4',
    businessExperience: 'Lead Tracking',
    analyticsDiscipline: 'Pipeline Analysis',
    explanation: 'Managing 220+ customer and lead records evolved into funnel analytics: monitoring conversion rates, drop-off stages, and stage transition velocity.',
    realWorldExample: 'Tracking 50 priority prospects from demonstration to token payment and delivery.',
    transferableOutcome: 'Identifies friction points and bottleneck stages across customer acquisition funnels.',
    tag: 'Funnel Science'
  },
  {
    id: 'trans-5',
    businessExperience: 'Competitor Analysis',
    analyticsDiscipline: 'Market Intelligence',
    explanation: 'Documenting alternative brand features and pricing in the field transformed into structured competitor feature matrices and market intelligence.',
    realWorldExample: 'Analyzing competitor pricing, financing tenure, and horsepower to structure competitive packaging.',
    transferableOutcome: 'Supplies product and commercial teams with actionable competitive differentiation data.',
    tag: 'Strategic Intel'
  },
  {
    id: 'trans-6',
    businessExperience: 'Management Presentations',
    analyticsDiscipline: 'Executive Communication',
    explanation: 'Presenting monthly field findings to the State Sales Head forged the ability to articulate complex trends in concise, high-impact business narratives.',
    realWorldExample: 'Pitching roadshow allocations with quantitative justification of lead conversion probabilities.',
    transferableOutcome: 'Translates raw data findings into C-suite executive language focused on ROI, risk, and growth.',
    tag: 'Executive Storytelling'
  },
  {
    id: 'trans-7',
    businessExperience: 'Field Insights',
    analyticsDiscipline: 'Business Recommendations',
    explanation: 'Ground observations regarding agricultural harvest windows transformed into prescriptive data recommendations for operational readiness.',
    realWorldExample: 'Forecasting peak harvest machinery demand 45 days early to stage demonstration inventory.',
    transferableOutcome: 'Delivers actionable recommendations that alter business outcomes rather than just describing past metrics.',
    tag: 'Prescriptive Action'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Business Analysis',
    description: 'Deconstructing business friction into structured requirements, gap identification, and measurable recommendations.',
    skills: [
      {
        name: 'Business Requirements Understanding',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['AI Customer Support & VoC Intelligence', 'Product Analytics & User Journey'],
        evidence: 'Synthesized stakeholder needs into structured requirements across 22 mandals and 5 analytics portfolio modules.'
      },
      {
        name: 'Stakeholder Needs Analysis',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['AI E-commerce Business Intelligence'],
        evidence: 'Facilitated decision reviews with Team Leads and State Sales Head to align analytical roadmaps with commercial goals.'
      },
      {
        name: 'Business Problem Analysis',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['Customer Analytics — RFM, Churn & LTV'],
        evidence: 'Diagnosed customer churn drivers and lead leakage prior to querying databases or building dashboards.'
      },
      {
        name: 'Process Analysis',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['GA4 Marketing Funnel & Customer Journey'],
        evidence: 'Mapped step-by-step buyer journeys from inquiry to product delivery, optimizing hand-off points.'
      },
      {
        name: 'Gap Identification',
        usedInExperience: ['Sri Venkateshwara', 'Delta Agri Mech'],
        usedInProjects: ['Product Analytics & User Journey'],
        evidence: 'Pinpointed funnel friction where 42% of prospective buyers dropped off during onboarding checkout.'
      },
      {
        name: 'Business Recommendations',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['AI E-commerce Business Intelligence', 'AI Customer Support'],
        evidence: 'Delivered prescriptive recommendations on demonstration locations that increased harvester sales by 120%.'
      }
    ]
  },
  {
    category: 'Data Analytics',
    description: 'Transforming raw transactional and event records into rigorous analytical findings using SQL and Python.',
    skills: [
      {
        name: 'SQL',
        usedInExperience: ['Academic Projects'],
        usedInProjects: ['AI Customer Support', 'Product Analytics', 'Customer Analytics', 'AI E-commerce BI', 'GA4 Funnel'],
        evidence: 'Authored multi-table CTEs, window functions (ROW_NUMBER, DENSE_RANK, LAG/LEAD), aggregations, and subqueries across all 5 case studies.'
      },
      {
        name: 'Python',
        usedInExperience: ['Academic Projects', 'FLM Certification'],
        usedInProjects: ['Customer Analytics (RFM)', 'Product Analytics', 'AI Support VoC'],
        evidence: 'Built automated analytical scripts using Python for cohort retention calculations, text sentiment scoring, and RFM scoring.'
      },
      {
        name: 'Pandas',
        usedInExperience: ['Academic Projects'],
        usedInProjects: ['Customer Analytics', 'AI E-commerce BI', 'Product Analytics'],
        evidence: 'Performed vectorized transformations, missing value imputation, group-by aggregations, and datetime indexing.'
      },
      {
        name: 'NumPy',
        usedInExperience: ['Academic Projects'],
        usedInProjects: ['Customer Analytics', 'Product Analytics'],
        evidence: 'Applied mathematical arrays, percentile cutoffs, and statistical calculations for variance and outlier detection.'
      },
      {
        name: 'Data Cleaning',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['Customer Analytics', 'AI Support VoC'],
        evidence: 'Standardized 220+ unstructured field records and resolved formatting discrepancies in multi-source datasets.'
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['All 5 Portfolio Projects'],
        evidence: 'Conducted systematic distribution checks, correlation matrices, and anomaly inspections across customer datasets.'
      }
    ]
  },
  {
    category: 'Business Intelligence',
    description: 'Designing intuitive, high-density executive dashboards that drive operational accountability.',
    skills: [
      {
        name: 'Power BI',
        usedInExperience: ['Academic Projects', 'FLM'],
        usedInProjects: ['Product Analytics', 'AI E-commerce BI', 'Customer Analytics'],
        evidence: 'Architected star-schema data models, interactive slicers, drill-through pages, and executive KPI summaries.'
      },
      {
        name: 'Dashboards',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['Product Analytics', 'AI E-commerce BI'],
        evidence: 'Built visual reporting cockpits replacing manual multi-sheet status trackers with automated KPIs.'
      },
      {
        name: 'KPI Reporting',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['AI E-commerce BI', 'GA4 Marketing Funnel'],
        evidence: 'Established target-vs-actual variance tracking, run-rate pacing, and customer acquisition cost monitoring.'
      },
      {
        name: 'Data Visualization',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['All 5 Projects'],
        evidence: 'Employed Gestalt principles, visual contrast, and zero-chart-junk design for rapid cognitive comprehension.'
      },
      {
        name: 'DAX Concepts',
        usedInExperience: ['Academic Projects'],
        usedInProjects: ['AI E-commerce BI', 'Product Analytics'],
        evidence: 'Formulated measures including CALCULATE, FILTER, DATESYTD, SAMEPERIODLASTYEAR, and dynamic cohort metrics.'
      }
    ]
  },
  {
    category: 'Excel',
    description: 'Deep spreadsheet engineering for operational tracking, reconciliation, and executive summary tables.',
    skills: [
      {
        name: 'Pivot Tables',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['Customer Analytics', 'AI E-commerce BI'],
        evidence: 'Aggregated territory sales logs across 22 mandals and generated weekly multi-dimensional summaries.'
      },
      {
        name: 'XLOOKUP / VLOOKUP',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['Customer Analytics'],
        evidence: 'Merged field lead records with transactional billing databases to detect repeat inquiries.'
      },
      {
        name: 'Power Query',
        usedInExperience: ['Academic / Field'],
        usedInProjects: ['AI E-commerce BI'],
        evidence: 'Extracted, transformed, and merged multiple CSV sales exports into clean reporting staging tables.'
      },
      {
        name: 'Business Reporting',
        usedInExperience: ['Delta Agri Mech', 'Sri Venkateshwara'],
        usedInProjects: ['All 5 Projects'],
        evidence: 'Maintained executive target-versus-achievement trackers reviewed weekly by senior territory leadership.'
      }
    ]
  },
  {
    category: 'Product Analytics',
    description: 'Deconstructing digital user behavior, feature adoption, and lifecycle progression.',
    skills: [
      {
        name: 'User Journey Analysis',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['Product Analytics & User Journey', 'GA4 Funnel'],
        evidence: 'Mapped multi-touch user pathways from landing page through feature activation and subscription renewal.'
      },
      {
        name: 'Funnel Analysis',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['Product Analytics', 'GA4 Marketing Funnel'],
        evidence: 'Calculated step-by-step conversion drop-offs, identifying 3 key micro-friction moments in the purchase sequence.'
      },
      {
        name: 'User Behavior Analysis',
        usedInExperience: ['Field Customer Observation'],
        usedInProjects: ['Product Analytics & User Journey'],
        evidence: 'Segmented users by session duration, frequency of key action triggers, and sticky feature engagement.'
      },
      {
        name: 'Customer Journey',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['Product Analytics', 'Customer Analytics'],
        evidence: 'Modeled the entire customer lifecycle from initial awareness to advocacy and reactivation.'
      }
    ]
  },
  {
    category: 'Customer Analytics',
    description: 'Quantifying customer value, retention hazards, and segment-specific growth levers.',
    skills: [
      {
        name: 'RFM (Recency, Frequency, Monetary)',
        usedInExperience: ['Lead Prioritization at Delta Agri Mech'],
        usedInProjects: ['Customer Analytics — RFM, Churn & LTV'],
        evidence: 'Segmented customer cohorts into Champions, Loyal, At Risk, and Inactive based on quintile scoring.'
      },
      {
        name: 'Churn Analysis',
        usedInExperience: ['Delta Agri Mech'],
        usedInProjects: ['Customer Analytics — RFM, Churn & LTV'],
        evidence: 'Identified inactivity warning flags (days since last purchase > 90) to trigger proactive outreach.'
      },
      {
        name: 'Customer Lifetime Value (LTV)',
        usedInExperience: ['Customer Lifetime Observation'],
        usedInProjects: ['Customer Analytics — RFM, Churn & LTV'],
        evidence: 'Calculated average order value (AOV) multiplied by purchase frequency and expected lifespan.'
      },
      {
        name: 'Segmentation',
        usedInExperience: ['Delta Agri Mech (~50 priority prospects)'],
        usedInProjects: ['Customer Analytics', 'AI E-commerce BI'],
        evidence: 'Categorized 220+ leads into operational tiers to maximize sales conversion velocity.'
      }
    ]
  },
  {
    category: 'AI & Generative AI',
    description: 'Leveraging large language models and prompt engineering to augment business intelligence workflows.',
    skills: [
      {
        name: 'Generative AI',
        usedInExperience: ['FLM Coursework'],
        usedInProjects: ['AI Customer Support', 'AI E-commerce BI'],
        evidence: 'Utilized Gemini LLMs for automated VoC sentiment synthesis, root-cause tagging, and executive summaries.'
      },
      {
        name: 'AI-Powered Analytics',
        usedInExperience: ['Portfolio Architecture'],
        usedInProjects: ['AI Customer Support & VoC Intelligence'],
        evidence: 'Constructed hybrid pipelines combining structured SQL aggregations with LLM-based qualitative extraction.'
      },
      {
        name: 'Prompt Engineering',
        usedInExperience: ['FLM Coursework'],
        usedInProjects: ['AI Support VoC', 'Venky AI Portfolio'],
        evidence: 'Designed strict zero-hallucination system instructions, few-shot schemas, and JSON output constraints.'
      },
      {
        name: 'AI-Assisted Business Intelligence',
        usedInExperience: ['Portfolio & FLM'],
        usedInProjects: ['AI E-commerce Business Intelligence'],
        evidence: 'Automated executive narrative generation from weekly KPI metric shifts using conversational prompts.'
      }
    ]
  }
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'ai-customer-support-voc-intelligence',
    title: 'AI Customer Support & Voice-of-Customer Intelligence',
    tagline: 'Automated unstructured feedback parsing to uncover service friction & sentiment signals.',
    category: 'AI & VoC Analytics',
    businessProblem:
      'Analyze customer support interactions and feedback to identify recurring issues, pain points, sentiment signals, and service improvement opportunities.',
    tools: ['SQL', 'Python', 'Business Intelligence', 'Generative AI'],
    githubRepoName: 'ai-customer-support-voc-intelligence',
    githubUrl: 'https://github.com/Aarya01239/ai-customer-support-voc-intelligence',
    caseStudy: {
      businessContext:
        'Modern customer support teams generate thousands of unstructured ticket conversations, customer survey notes, and escalation logs. High-volume customer frustration often remains buried in qualitative notes until churn rates spike, creating an acute need for automated semantic intelligence.',
      problemStatement:
        'Support managers lacked a unified view connecting ticket categories with underlying sentiment, resolution delays, and agent handling times. Critical product flaws were discovered reactively rather than flagged proactively.',
      keyBusinessQuestions: [
        'Which product features generate the highest proportion of negative customer sentiment?',
        'What is the correlation between ticket resolution time and customer satisfaction scores?',
        'How can repetitive customer pain points be categorized automatically without manual auditing?',
        'Where should engineering and operations focus resources to reduce ticket inflow?'
      ],
      dataAndMethodology:
        'Aggregated multi-channel support ticket datasets containing timestamps, category tags, resolution duration, agent notes, and satisfaction ratings. Applied Python NLP for sentiment polarity and Generative AI prompt workflows to distill root causes into structured JSON records.',
      analysisProcess: [
        'Data Ingestion & Hygiene: Cleaned text strings, normalized timestamps, and imputed missing resolution timestamps.',
        'SQL Categorization: Built queries grouping tickets by resolution time quartiles and agent tiers.',
        'Sentiment Extraction: Passed unstructured customer messages through Gemini prompt pipelines to extract primary sentiment, secondary emotion, and explicit product friction tags.',
        'BI Synthesis: Created an interactive support dashboard showcasing sentiment velocity by product module.'
      ],
      keyInsights: [
        'Billing & checkout friction accounted for 38% of all negative sentiment tickets despite representing only 18% of total ticket volume.',
        'First-contact resolution (FCR) drop-off beyond 4 hours led to an exponential 65% drop in customer satisfaction scores.',
        'Repetitive user confusion around refund timelines caused over 25% of re-opened tickets.'
      ],
      recommendations: [
        'Deploy automated proactive self-service status banners on the checkout page during payment processor maintenance.',
        'Implement an AI-assisted ticket triage queue that routes billing complaints directly to senior resolution specialists.',
        'Revamp the automated refund notification email to include an explicit step-by-step progress tracker.'
      ],
      toolsDetail: [
        'SQL: CTEs, aggregate functions, and window ranking for agent resolution performance.',
        'Python: Pandas, Regex text normalization, and API pipeline scripts.',
        'Generative AI: Prompt engineering for root-cause tagging and customer sentiment synthesis.',
        'Power BI: Executive Voice-of-Customer scorecard and real-time sentiment distribution heatmaps.'
      ],
      businessValue:
        'Transforms qualitative customer complaints into quantifiable, prioritized engineering and operational roadmap items, reducing customer support escalations and mitigating preventable churn.'
    },
    interactiveData: {
      type: 'voc',
      stats: [
        { label: 'Analyzed Tickets', value: '1,420', trend: '+12% MoM' },
        { label: 'Negative Sentiment', value: '28.4%', trend: '-4.2% after triage' },
        { label: 'Avg Resolution Time', value: '4.2 hrs', trend: '-35% target' },
        { label: 'Top Friction Area', value: 'Billing Flow', trend: '38% of escalations' }
      ],
      chartData: [
        { category: 'Billing & Checkout', tickets: 340, negativeRate: 64 },
        { category: 'Account Access', tickets: 480, negativeRate: 22 },
        { category: 'Product Features', tickets: 310, negativeRate: 31 },
        { category: 'Delivery & Shipping', tickets: 290, negativeRate: 45 }
      ]
    }
  },
  {
    id: 'product-analytics-user-journey',
    title: 'Product Analytics & User Journey',
    tagline: 'Friction mapping, funnel step drops, and feature retention cohort modeling.',
    category: 'Product & User Behavior',
    businessProblem:
      'Understand user behavior and identify friction points in the user journey across acquisition, activation, and feature adoption.',
    tools: ['SQL', 'Python', 'Power BI'],
    githubRepoName: 'product-analytics-user-journey',
    githubUrl: 'https://github.com/Aarya01239/product-analytics-user-journey',
    caseStudy: {
      businessContext:
        'SaaS and web product teams invest heavily in user acquisition, but often experience steep drop-offs during onboarding and initial feature discovery. Pinpointing exactly where users abandon the journey is vital for sustainable product-led growth.',
      problemStatement:
        'Product leadership observed a 45% drop-off between account signup and core feature activation, but lacked granular event-level visibility into which UI elements or workflow steps induced friction.',
      keyBusinessQuestions: [
        'At which step of the onboarding funnel do the highest percentage of users churn?',
        'Which product features correlate most strongly with Day-30 user retention?',
        'What behavioral differences exist between freemium users who convert to paid tiers vs. those who remain inactive?',
        'How does session length and event density impact user conversion velocity?'
      ],
      dataAndMethodology:
        'Modeled millions of granular user event logs (page views, button clicks, modal views, project creations). Used SQL window functions (LAG, LEAD) to calculate session durations and step-to-step drop percentages, supplemented by Python cohort heatmaps.',
      analysisProcess: [
        'Event Log Schema Design: Structured user events into session IDs, event timestamps, and step sequences.',
        'Funnel Stage Calculation: Calculated conversion rates across 5 canonical stages: Visit -> Signup -> Onboarding -> Workspace Creation -> First Export.',
        'Cohort Retention Modeling: Built rolling 7-day and 30-day retention matrices in Python to isolate sticky features.',
        'Power BI Dashboard: Created an interactive journey visualizer with filters by acquisition channel and device type.'
      ],
      keyInsights: [
        'A mandatory multi-step team invite modal during onboarding was the single largest point of drop-off (42% abandoned).',
        'Users who completed at least one "Workspace Creation" within the first 24 hours exhibited a 3.8x higher Day-30 retention rate.',
        'Mobile web users experienced a 28% higher bounce rate during credential verification compared to desktop counterparts.'
      ],
      recommendations: [
        'Make the team invitation step optional during initial onboarding, deferring it until the user achieves their "Aha!" moment.',
        'Introduce an interactive progress checklist guiding new users directly to "Workspace Creation".',
        'Streamline the mobile authentication flow with one-click social SSO.'
      ],
      toolsDetail: [
        'SQL: Sessionization queries using window functions, funnel transition rates, and drop-off aggregations.',
        'Python: Pandas for cohort retention tables, Seaborn for heatmap visualization.',
        'Power BI: Interactive Sankey diagrams and step-by-step conversion funnel visualizers.'
      ],
      businessValue:
        'Provided product managers with quantitative justification to redesign the onboarding flow, targeting an estimated 15-20% uplift in core feature activation.'
    },
    interactiveData: {
      type: 'funnel',
      stats: [
        { label: 'Total Signups', value: '12,450', trend: 'Base cohort' },
        { label: 'Onboarding Completed', value: '58.2%', trend: '-41.8% drop' },
        { label: 'Core Action Taken', value: '34.1%', trend: 'Key activation' },
        { label: 'D30 Retention', value: '22.8%', trend: 'Sticky users' }
      ],
      chartData: [
        { stage: '1. Landing Visit', users: 50000, dropRate: 0 },
        { stage: '2. Account Signup', users: 12450, dropRate: 75.1 },
        { stage: '3. Profile Setup', users: 8900, dropRate: 28.5 },
        { stage: '4. Workspace Created', users: 4250, dropRate: 52.2 },
        { stage: '5. Paid Conversion', users: 1420, dropRate: 66.6 }
      ]
    }
  },
  {
    id: 'customer-analytics-rfm-churn-ltv',
    title: 'Customer Analytics — RFM, Churn & LTV',
    tagline: 'Strategic cohort segmentation, customer lifetime value modeling & retention risk mitigation.',
    category: 'Customer Intelligence',
    businessProblem:
      'Understand customer value and retention risk by analyzing transaction histories, purchase recency, order frequency, and monetary contribution.',
    tools: ['SQL', 'Python', 'Business Intelligence'],
    githubRepoName: 'customer-analytics-rfm-churn-ltv',
    githubUrl: 'https://github.com/Aarya01239/customer-analytics-rfm-churn-ltv',
    caseStudy: {
      businessContext:
        'Businesses treating all customers with identical marketing strategies experience poor ROI and elevated churn. Segmenting accounts by true behavioral value allows commercial teams to concentrate retention resources where revenue impact is greatest.',
      problemStatement:
        'Marketing and sales teams lacked a data-backed customer segmentation model. High-value loyal accounts received generic promotions while disengaging accounts churned unnoticed.',
      keyBusinessQuestions: [
        'Who are our top 20% high-value customers generating 80% of operating revenue?',
        'Which customer accounts show early indicators of dormant churn risk?',
        'What is the predicted Customer Lifetime Value (CLV) across diverse purchase cohorts?',
        'How should marketing allocate promotional budget across Champions vs. At-Risk segments?'
      ],
      dataAndMethodology:
        'Extracted transactional order lines spanning over 24 months. Computed individual Recency (days since last order), Frequency (total completed orders), and Monetary value (total spend). Assigned 1-5 quintile scores to each dimension and segmented customers into 8 actionable groups.',
      analysisProcess: [
        'Transactional Hygiene: Filtered out cancelled orders, returns, and duplicate payment transactions.',
        'RFM Metric Engineering: Formulated SQL queries computing MAX(order_date), COUNT(order_id), and SUM(order_amount).',
        'Segment Classification: Categorized customers into Champions, Loyal Customers, Potential Loyalists, At Risk, and Hibernating.',
        'LTV & Churn Modeling: Calculated historical average order frequency and margin retention rates across segments.'
      ],
      keyInsights: [
        'The "Champions" segment represented just 11% of the total customer base but contributed 49% of cumulative revenue.',
        'The "At Risk" segment contained 23% of historically high-spending accounts who had not purchased within 120 days.',
        'Customers who placed a second order within 30 days of their initial purchase had a 2.7x higher lifetime monetary value.'
      ],
      recommendations: [
        'Establish an automated VIP account management tier for Champions with early product access and dedicated support.',
        'Deploy a personalized "We Miss You" win-back email campaign with exclusive discounts specifically targeted at the At Risk cohort.',
        'Focus growth marketing on immediate second-order activation through post-purchase onboarding sequences.'
      ],
      toolsDetail: [
        'SQL: NTILE window functions for quintile distribution scoring and cohort metrics.',
        'Python: Pandas for RFM matrix calculations, Matplotlib for 2D recency-monetary scatter maps.',
        'Business Intelligence: Dynamic RFM segmentation matrix with real-time drill-down to customer account IDs.'
      ],
      businessValue:
        'Enables marketing leadership to reallocate retention spending from untargeted discounts to high-ROI account preservation, protecting vital recurring revenue streams.'
    },
    interactiveData: {
      type: 'rfm',
      stats: [
        { label: 'Total Customer Base', value: '4,850', trend: 'Active portfolio' },
        { label: 'Champions Segment', value: '11.2%', trend: '49% of revenue' },
        { label: 'At-Risk Revenue', value: '$184K', trend: 'Retention priority' },
        { label: 'Avg Customer LTV', value: '$1,240', trend: '+8.4% YoY' }
      ],
      chartData: [
        { segment: 'Champions', count: 540, revenueShare: 49, risk: 'Low' },
        { segment: 'Loyal Customers', count: 920, revenueShare: 24, risk: 'Low' },
        { segment: 'Potential Loyalists', count: 1150, revenueShare: 12, risk: 'Medium' },
        { segment: 'At Risk', count: 810, revenueShare: 11, risk: 'High' },
        { segment: 'Hibernating', count: 1430, revenueShare: 4, risk: 'Critical' }
      ]
    }
  },
  {
    id: 'ai-ecommerce-business-intelligence',
    title: 'AI E-commerce Business Intelligence',
    tagline: 'Multi-channel sales performance, channel unit economics, and AI-assisted executive KPI reporting.',
    category: 'E-commerce & Revenue BI',
    businessProblem:
      'Analyze e-commerce commercial performance across products, channels, and geographies to identify actionable revenue opportunities and profitability drivers.',
    tools: ['SQL', 'Python', 'Power BI', 'Generative AI'],
    githubRepoName: 'ai-ecommerce-business-intelligence',
    githubUrl: 'https://github.com/Aarya01239/ai-ecommerce-business-intelligence',
    caseStudy: {
      businessContext:
        'Multi-channel e-commerce operators operate across direct web stores, marketplace channels, and partner distributors. Siloed reporting obscures real gross margin after shipping, ad spend, and merchant fees.',
      problemStatement:
        'Executive management struggled to understand net margin contribution across 4 distinct sales channels and 6 product categories, relying on delayed monthly end-of-period spreadsheets.',
      keyBusinessQuestions: [
        'Which sales channels deliver the highest net profit margin after deducting direct acquisition and fulfillment expenses?',
        'What are the seasonal purchasing trends and peak revenue drivers across product categories?',
        'How are regional delivery costs impacting product profitability in Tier-2 and Tier-3 markets?',
        'How can executive KPI summaries be generated automatically each week using Generative AI?'
      ],
      dataAndMethodology:
        'Consolidated order transactions, customer shipping records, and advertising spend across multi-channel sales pipelines into a unified data schema. Formulated DAX measures for gross margin, return on ad spend (ROAS), and inventory turnover.',
      analysisProcess: [
        'Data Unification: Reconciled disjointed sales feeds across webstore, marketplace, and affiliate channels.',
        'Margin Engineering: Calculated Net Margin = Gross Revenue - (COGS + Platform Fees + Shipping + Channel Ad Spend).',
        'Power BI Modeling: Built dynamic executive views displaying Top Products, Channel Contribution, and Regional Heatmaps.',
        'AI Executive Narrative: Integrated a generative prompt summarizing weekly metric shifts into 3 executive bullet points.'
      ],
      keyInsights: [
        'Direct-to-Consumer (D2C) web store generated the highest gross margin (58%) compared to marketplace channels (39%), but required tighter ad spend management.',
        'Electronics drove 45% of top-line revenue but had a 14% return rate that eroded net profitability.',
        'Tier-2 regional shipping surcharges reduced operating margin by 6.2% on orders below $40.'
      ],
      recommendations: [
        'Implement an automated free-shipping threshold at $49 to preserve margin on regional deliveries.',
        'Reallocate 15% of marketplace marketing budget towards high-margin direct webstore customer acquisition.',
        'Introduce pre-purchase compatibility checklists for electronics to suppress return rates.'
      ],
      toolsDetail: [
        'SQL: Advanced aggregation, multi-table joins, and fiscal calendar date dimension modeling.',
        'Python: Automated ETL validation, price elasticity modeling, and anomaly detection.',
        'Power BI: Star-schema data modeling, custom DAX measures, and mobile layout views.',
        'Generative AI: Automated natural language generation of executive performance briefs.'
      ],
      businessValue:
        'Delivered transparent unit economics across all sales channels, empowering leadership to optimize ad spend and shipping policies to boost net margins.'
    },
    interactiveData: {
      type: 'ecommerce',
      stats: [
        { label: 'Gross Revenue', value: '$842,500', trend: '+14.2% YoY' },
        { label: 'Net Profit Margin', value: '23.8%', trend: '+3.1% pts' },
        { label: 'Blended ROAS', value: '3.6x', trend: 'Target: 3.2x' },
        { label: 'Order Volume', value: '18,940', trend: 'Across 4 channels' }
      ],
      chartData: [
        { channel: 'Direct Webstore', revenue: 380000, margin: 34 },
        { channel: 'Marketplace A', revenue: 260000, margin: 18 },
        { channel: 'Marketplace B', revenue: 135000, margin: 15 },
        { channel: 'Affiliate Partners', revenue: 67500, margin: 22 }
      ]
    }
  },
  {
    id: 'ga4-marketing-funnel-customer-journey',
    title: 'GA4 Marketing Funnel & Customer Journey',
    tagline: 'Attribution modeling, acquisition channels, and user flow conversion analytics.',
    category: 'Marketing & Acquisition',
    businessProblem:
      'Understand customer movement from acquisition to conversion across marketing campaigns, traffic sources, and website landing flows.',
    tools: ['GA4 Concepts', 'SQL', 'Python'],
    githubRepoName: 'ga4-marketing-funnel-customer-journey',
    githubUrl: 'https://github.com/Aarya01239/ga4-marketing-funnel-customer-journey',
    caseStudy: {
      businessContext:
        'Digital marketers frequently focus purely on click-through rates and top-of-funnel impressions without examining mid-funnel content engagement and final transaction conversion by acquisition channel.',
      problemStatement:
        'Marketing leadership was unable to pinpoint which campaign channels were delivering high-intent converters versus low-quality bounce traffic, leading to inefficient ad budget allocation.',
      keyBusinessQuestions: [
        'Which acquisition channels generate the highest conversion rate from session to completed goal?',
        'How does user engagement duration vary between organic search, paid ads, and social referrals?',
        'What are the primary exit pages where potential customers drop off prior to conversion?',
        'What is the multi-touch path that typical high-converting customers follow before completing checkout?'
      ],
      dataAndMethodology:
        'Analyzed event-based Google Analytics 4 (GA4) schema exports containing session starts, page views, scroll events, lead form submissions, and purchases. Mapped user flow journeys in Python and constructed SQL funnel staging queries.',
      analysisProcess: [
        'GA4 Event Schema Parsing: Extracted user pseudo-IDs, event names, traffic mediums, and campaign parameters.',
        'Attribution Modeling: Evaluated first-click vs. last-click touchpoints across the customer conversion timeline.',
        'Conversion Velocity Analysis: Measured the time lag and touchpoint count required for cold visitors to become paying leads.',
        'Exit Page Audit: Identified pages with anomalous exit rates (>60%) following high-cost ad traffic.'
      ],
      keyInsights: [
        'Organic Search traffic yielded a 4.2% conversion rate compared to Paid Social at 1.8%, despite Paid Social consuming 45% of total budget.',
        'Visitors who viewed the "Customer Case Studies" page converted at 3.1x the site-wide baseline.',
        'Mobile visitors on the primary pricing table exhibited a 52% higher exit rate due to poor horizontal scrolling responsiveness.'
      ],
      recommendations: [
        'Shift 20% of paid ad budget into high-intent search intent campaigns and technical SEO for commercial keywords.',
        'Place prominent links to customer proof points and case studies within paid landing pages.',
        'Refactor the mobile pricing table into a vertical comparison card layout to remove horizontal scroll friction.'
      ],
      toolsDetail: [
        'GA4 Concepts: Event-driven tracking, custom user properties, session_engaged metrics.',
        'SQL: Funnel conversion queries, attribution lag modeling, and traffic source cohort analysis.',
        'Python: Data transformation with Pandas, funnel flow visualizations with Plotly/Matplotlib.'
      ],
      businessValue:
        'Provided the marketing team with objective attribution data to eliminate unprofitable ad spend and redesign high-drop landing pages.'
    },
    interactiveData: {
      type: 'ga4',
      stats: [
        { label: 'Total Sessions', value: '94,200', trend: '30-day window' },
        { label: 'Avg Engagement Time', value: '2m 18s', trend: '+18s vs benchmark' },
        { label: 'Goal Conversion Rate', value: '3.42%', trend: '+0.6% MoM' },
        { label: 'Top Converting Source', value: 'Organic Search', trend: '4.2% CR' }
      ],
      chartData: [
        { source: 'Organic Search', sessions: 38000, convRate: 4.2 },
        { source: 'Paid Search', sessions: 24000, convRate: 3.8 },
        { source: 'Paid Social', sessions: 18000, convRate: 1.8 },
        { source: 'Direct / Bookmark', sessions: 9200, convRate: 3.1 },
        { source: 'Referral', sessions: 5000, convRate: 2.9 }
      ]
    }
  }
];

export const WHY_DIFFERENT_PILLARS = [
  {
    step: '01',
    title: 'Real Business Experience',
    subtitle: 'Ground-level customer & market interactions',
    description: 'Practical field experience across 22 mandals and 220+ records. I know what buyers actually say, how objections arise, and why targets matter.'
  },
  {
    step: '02',
    title: 'Analytical Rigor',
    subtitle: 'Structured problem solving & scoping',
    description: 'Before touching SQL or Power BI, I analyze the commercial root cause: revenue leakage, user friction, retention risk, and stakeholder objectives.'
  },
  {
    step: '03',
    title: 'Production Projects',
    subtitle: 'Verified code, datasets & models',
    description: '5 public GitHub repositories featuring real SQL scripts, Python analysis, Power BI data models, and executive insights.'
  },
  {
    step: '04',
    title: 'AI-Native Capabilities',
    subtitle: 'Generative AI & LLM workflows',
    description: 'Integrating Google Gemini for automated Voice-of-Customer sentiment synthesis, AI project discovery, and recruiter decision support.'
  },
  {
    step: '05',
    title: 'Executive Communication',
    subtitle: 'Translating data into commercial action',
    description: 'Experience delivering presentations to State Sales Heads ensures insights are communicated with clarity, brevity, and business ROI.'
  }
];

export const RECRUITER_DATA = {
  title: 'Recruiter View',
  whoIAm:
    'A business-minded analytics professional combining practical customer, market and business experience with modern data analytics and AI.',
  quickFacts: {
    name: 'Venkata Kumar Pulapa',
    location: 'Kakinada, Andhra Pradesh, India',
    targetRoles: ['Business Analyst', 'Data Analyst', 'Business Analytics', 'Product Analyst'],
    availability: 'Open to Immediate / Early Joining',
    workMode: 'Remote / Hybrid / On-site'
  },
  elevatorPitch:
    'I bring genuine commercial field execution — having exceeded commercial harvester delivery quotas to 120% and tracked 220+ customer and lead records across 22 mandals — coupled with rigorous modern analytics (SQL, Python, Power BI, Advanced Excel) and Generative AI workflows. I understand business problems before analyzing data.',
  topStrengths: [
    'Business Understanding',
    'Customer Requirements',
    'Stakeholder Communication',
    'Business Reporting',
    'Market Analysis',
    'KPI Analysis',
    'SQL',
    'Excel',
    'Power BI',
    'Python',
    'AI-Powered Analytics'
  ],
  whyHire: [
    {
      title: 'Real-World Business Grounding',
      desc: 'Practical commercial experience managing customer objections, pipeline health, and ground-level purchasing dynamics.'
    },
    {
      title: 'Proven Commercial Execution',
      desc: 'Delivered 6 harvesters against a 5-unit target (120% quota achievement) at Delta Agri Mech India.'
    },
    {
      title: 'Hands-On Analytics Stack',
      desc: 'Deep proficiency in SQL (joins, aggregations, window queries), Python, Power BI modeling, and Advanced Excel.'
    },
    {
      title: 'Executive Communication',
      desc: 'Experienced delivering performance variance presentations directly to State Sales Heads and business leaders.'
    },
    {
      title: 'AI-Augmented Velocity',
      desc: 'Leverages Gemini and LLM workflows to process qualitative customer sentiment and accelerate analysis.'
    },
    {
      title: 'Business-First Mindset',
      desc: 'Anchors every dashboard and metric in unit economics, customer friction reduction, and revenue outcomes.'
    }
  ],
  interviewQuestions: [
    {
      topic: 'Business Problem Definition',
      context: 'Evaluating requirements gathering & problem diagnosis',
      question: 'How did your field customer conversations at Delta Agri Mech influence how you structure a business requirements document or KPI dashboard?'
    },
    {
      topic: 'SQL & Data Modeling',
      context: 'Testing query logic and analytical complexity',
      question: 'In your Customer Analytics or Product Analytics projects, what SQL window functions or CTE structures did you use to model retention cohorts and funnels?'
    },
    {
      topic: 'Stakeholder Conflict & Prioritization',
      context: 'Assessing communication and commercial judgment',
      question: 'When management goals conflict with field reality or data findings, how do you communicate variances to senior leadership?'
    }
  ],
  analyticsPortfolio: [
    'Product Analytics',
    'Customer Analytics',
    'Voice of Customer',
    'E-commerce BI',
    'Marketing Funnel Analytics'
  ],
  whyHireMe:
    'I combine practical business understanding with modern analytics and AI capabilities.',
  availableRoles: [
    'Business Analyst',
    'Data Analyst',
    'Product Analyst',
    'Business Intelligence Analyst',
    'Analytics Consultant'
  ]
};

export const ROLE_FIT_EVALUATIONS = {
  'Business Analyst': {
    role: 'Business Analyst',
    pitch:
      'Translates operational friction, customer requirements, and executive goals into structured technical deliverables, KPI dashboards, and high-impact business decisions.',
    matches: [
      'Requirements elicitation & user story scoping',
      'Operational KPI dashboarding with Power BI & Excel',
      'Cross-functional communication between commercial and technical teams',
      'Root-cause analysis and business process modeling'
    ],
    evidence: [
      'Managed 220+ Customer & Lead Records and customer inquiries across 22 mandals',
      'Delivered variance reports and territory briefings to State Sales Heads',
      'Completed MBA in Marketing & Business Analytics (2025)'
    ]
  },
  'Data Analyst': {
    role: 'Data Analyst',
    pitch:
      'Extracts, transforms, and analyzes complex structured datasets using SQL, Python, and BI tools to deliver rigorous quantitative insights and cohort analysis.',
    matches: [
      'Complex SQL queries (CTEs, subqueries, aggregations, window functions)',
      'Customer segmentation (RFM quintiles, churn risk, LTV estimation)',
      'Interactive Power BI data modeling, DAX measures, and Star schemas',
      'Exploratory data analysis and data cleansing with Python (Pandas)'
    ],
    evidence: [
      'Built 5 end-to-end verified GitHub analytics projects with clean SQL scripts',
      'Analyzed customer cohorts, transaction recency, and marketing attribution data',
      'Rebuilt and validated data integrity across Excel and relational tables'
    ]
  },
  'Product Analyst': {
    role: 'Product Analyst',
    pitch:
      'Audits digital user journeys, funnel transitions, feature adoption, and retention curves to optimize conversion rates and eliminate friction in product workflows.',
    matches: [
      'Step-by-step conversion funnel drop-off analysis',
      'User activation, cohort retention, and session engagement metrics',
      'Voice-of-Customer semantic ticket categorization using AI',
      'Data-backed hypothesis formulation for product improvements'
    ],
    evidence: [
      'Product Analytics & User Journey Case Study with funnel conversion modeling',
      'AI-Powered Voice-of-Customer ticket classification and sentiment analysis',
      'Google Analytics 4 marketing funnel and user attribution audits'
    ]
  }
};


export const SAMPLE_JOB_DESCRIPTIONS = [
  {
    id: 'sample-ba',
    title: 'Business Analyst (SaaS & Products)',
    text: `Role: Business Analyst
Responsibilities:
- Collaborate with business stakeholders to elicit, analyze, and document business and functional requirements.
- Analyze operational KPIs, prepare weekly management dashboards, and identify process bottlenecks.
- Work with product and data engineering teams to define user stories and acceptance criteria.
- Conduct exploratory data analysis using SQL and Excel to uncover customer behavior and performance trends.
- Deliver executive presentations to senior management with actionable business recommendations.
Requirements:
- Strong business acumen and understanding of customer journey and stakeholder needs.
- Hands-on proficiency with SQL (CTEs, joins, aggregations) and Advanced Excel (Pivot tables, XLOOKUP).
- Experience with Power BI or Tableau for executive KPI reporting.
- Experience or strong interest in Generative AI for business intelligence.`
  },
  {
    id: 'sample-da',
    title: 'Data Analyst (Customer & Growth)',
    text: `Role: Data Analyst
Responsibilities:
- Query complex relational databases using SQL to extract marketing, product, and customer transaction data.
- Perform RFM customer segmentation, churn risk modeling, and customer lifetime value (LTV) estimation.
- Build and maintain interactive Power BI / Tableau dashboards for cross-functional stakeholders.
- Partner with marketing to analyze acquisition funnels, attribution, and conversion drop-offs.
- Automate data workflows using Python (Pandas, NumPy).
Requirements:
- Proven SQL proficiency for data cleaning and exploratory data analysis.
- Experience with customer cohort analysis, retention metrics, and funnel conversion tracking.
- Strong communication skills to present insights to non-technical leaders.`
  },
  {
    id: 'sample-pa',
    title: 'Product Analyst (User Journey & Retention)',
    text: `Role: Product Analyst
Responsibilities:
- Track and measure user engagement, activation rates, and feature adoption across the digital user journey.
- Perform funnel analysis and session drop-off audits to identify user friction points.
- Define product metrics and North Star KPIs in collaboration with Product Managers.
- Conduct cohort retention analysis using SQL, Python, and event-based analytics tools (GA4 / Mixpanel).
- Formulate data-driven hypotheses for A/B testing and onboarding redesigns.
Requirements:
- Strong understanding of product-led growth, customer journeys, and conversion funnels.
- Proficiency in SQL, Python data manipulation, and data visualization.`
  }
];
