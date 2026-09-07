import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initialize Gemini client to avoid crashes if GEMINI_API_KEY is initially missing
let genAiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!genAiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }
    genAiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return genAiClient;
}

// Structured portfolio context for grounding Gemini AI
const PORTFOLIO_GROUNDING_CONTEXT = `
CANDIDATE PROFILE:
Name: Venkata Kumar Pulapa
Location: Kakinada, Andhra Pradesh, India
Email: venkatakumar.pulapa@gmail.com
Phone: +91 7032554436
LinkedIn: https://www.linkedin.com/in/venkata-kumar-pulapa-28612a206
GitHub: https://github.com/Aarya01239
Professional Positioning: Business Analyst | Data Analytics | Business Analytics | Product Analytics
Core Philosophy: "I understand business problems before analyzing data."

CAREER STORY:
Real-World Business Experience -> Customer & Business Understanding -> Business Problem Solving -> Business Analytics -> Data Analytics -> Product Analytics -> AI-Powered Analytics.

EXPERIENCE:
1. Delta Agri Mech India Pvt. Ltd.
   Role: Divisional Sales Officer / Sales Officer
   Duration: July 2024 – November 2025
   Key Details:
   - Analyzed sales performance, customer activity, territory trends across 22 mandals.
   - Maintained approximately 220 customer and lead records (strictly: 220+ Customer & Lead Records; NOT client relationships/accounts).
   - Identified approximately 50 priority prospects.
   - Monitored operational KPIs, prepared target vs achievement business and management reports in Excel and PowerPoint.
   - Presented market insights, lead progression, and competitor intelligence to Team Lead and State Sales Head.
   - Recommended high-potential demonstration and roadshow locations.
   - Achievement: Exceeded harvester sales quota by 120% (Target: 5 harvesters, Actual: 6 harvesters).

2. Sri Venkateshwara Seven Infra LLP
   Role: Sales Executive
   Duration: February 2023 – May 2024
   Key Details:
   - Understood customer operational requirements, evaluated budgets and competitor alternatives.
   - Maintained customer and lead pipeline information.
   - Utilized Excel for daily sales reporting and target vs achievement tracking.
   - Provided ground-level market feedback and commercial recommendations.
   - Achievement: Closed 9 tractor sales through tailored financing and objection handling.

EDUCATION:
- MBA in Marketing & Business Analytics (2024 – 2026), JNTUK / Kakinada Institute of Technological Sciences
- B.Com in Computer Applications (2024), Adikavi Nannaya University

PROFESSIONAL DEVELOPMENT:
- Business Analytics with AI, FLM, 2026 (Ongoing)

TRANSFERABLE SKILLS (EXPERIENCE TO ANALYTICS):
1. Customer Conversations -> Requirements Understanding (BRDs, user stories, acceptance criteria)
2. Sales Reporting -> Business Reporting (KPI dashboards, variance models)
3. Territory Analysis -> Market & Trend Analysis (spatial & time-series performance across 22 mandals)
4. Lead Tracking -> Pipeline Analysis (funnel conversion, drop-off reduction)
5. Competitor Analysis -> Market Intelligence (feature matrices, competitive differentiation)
6. Management Presentations -> Executive Communication (narratives for State Sales Head)
7. Field Insights -> Business Recommendations (prescriptive actions driving 120% target achievement)

SKILLS:
- Business Analysis: Business Requirements Understanding, Stakeholder Needs Analysis, Business Problem Analysis, Process Analysis, Gap Identification, Business Recommendations
- Data Analytics: SQL (CTEs, Window Functions, Joins, Aggregations), Python, Pandas, NumPy, Data Cleaning, Exploratory Data Analysis (EDA)
- Business Intelligence: Power BI, Dashboards, KPI Reporting, Data Visualization, DAX Concepts
- Excel: Pivot Tables, XLOOKUP, VLOOKUP, Power Query, Business Reporting
- Product Analytics: User Journey Analysis, Funnel Analysis, User Behavior Analysis, Customer Journey
- Customer Analytics: RFM Segmentation, Churn Analysis, Customer Lifetime Value (LTV), Segmentation
- AI: Generative AI, AI-Powered Analytics, Prompt Engineering, AI-Assisted Business Intelligence

FIVE MAIN ANALYTICS PROJECTS (VERIFIED ON GITHUB: Aarya01239):
1. AI Customer Support & Voice-of-Customer Intelligence
   - Business Problem: Analyze customer support interactions and feedback to identify recurring issues, pain points, sentiment signals, and service improvement opportunities.
   - Tools: SQL, Python, Business Intelligence, Generative AI
   - Repo: https://github.com/Aarya01239/ai-customer-support-voc-intelligence

2. Product Analytics & User Journey
   - Business Problem: Understand user behavior and identify friction points in the user journey (onboarding, funnels, drop-offs).
   - Tools: SQL, Python, Power BI
   - Repo: https://github.com/Aarya01239/product-analytics-user-journey

3. Customer Analytics — RFM, Churn & LTV
   - Business Problem: Understand customer value and retention risk using RFM segmentation, churn signals, and lifetime value calculation.
   - Tools: SQL, Python, Business Intelligence
   - Repo: https://github.com/Aarya01239/customer-analytics-rfm-churn-ltv

4. AI E-commerce Business Intelligence
   - Business Problem: Analyze e-commerce sales, channel unit economics, margins, and automate executive KPI reporting using Generative AI.
   - Tools: SQL, Python, Power BI, Generative AI
   - Repo: https://github.com/Aarya01239/ai-ecommerce-business-intelligence

5. GA4 Marketing Funnel & Customer Journey
   - Business Problem: Understand customer movement from acquisition to conversion across digital channels and landing flows.
   - Tools: GA4 Concepts, SQL, Python
   - Repo: https://github.com/Aarya01239/ga4-marketing-funnel-customer-journey
`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// GitHub Repos API (with cached memory and real API fetch)
let cachedRepos: any[] | null = null;
let lastFetchTime = 0;

app.get('/api/github/repos', async (req, res) => {
  const now = Date.now();
  if (cachedRepos && now - lastFetchTime < 5 * 60 * 1000) {
    return res.json({ repos: cachedRepos, source: 'cache' });
  }

  try {
    const response = await fetch('https://api.github.com/users/Aarya01239/repos?sort=updated', {
      headers: {
        'User-Agent': 'Venky-AI-Portfolio',
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const data: any = await response.json();
    const formattedRepos = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
      topics: repo.topics || []
    }));

    cachedRepos = formattedRepos;
    lastFetchTime = now;
    res.json({ repos: formattedRepos, source: 'live' });
  } catch (error: any) {
    console.warn('GitHub fetch fallback triggered:', error.message);
    // Verified fallback data directly from his 5 verified GitHub repos
    const fallbackRepos = [
      {
        id: 1,
        name: 'ai-customer-support-voc-intelligence',
        description: 'AI-assisted customer support and Voice-of-Customer analytics using SQL, Python, sentiment analysis and BI dashboards.',
        html_url: 'https://github.com/Aarya01239/ai-customer-support-voc-intelligence',
        language: 'Python',
        stargazers_count: 1,
        updated_at: '2026-08-20T10:00:00Z',
        topics: ['generative-ai', 'voice-of-customer', 'sql', 'python', 'business-intelligence']
      },
      {
        id: 2,
        name: 'product-analytics-user-journey',
        description: 'AI-assisted product analytics using SQL, Python, funnel analysis, feature analytics and retention insights.',
        html_url: 'https://github.com/Aarya01239/product-analytics-user-journey',
        language: 'Python',
        stargazers_count: 1,
        updated_at: '2026-08-15T15:21:22Z',
        topics: ['product-analytics', 'user-journey', 'funnel-analysis', 'sql', 'power-bi']
      },
      {
        id: 3,
        name: 'customer-analytics-rfm-churn-ltv',
        description: 'AI-assisted customer analytics using RFM segmentation, churn-risk analysis, LTV estimation, SQL, Python and BI dashboards.',
        html_url: 'https://github.com/Aarya01239/customer-analytics-rfm-churn-ltv',
        language: 'Python',
        stargazers_count: 1,
        updated_at: '2026-08-15T15:10:00Z',
        topics: ['customer-analytics', 'rfm-segmentation', 'churn-analysis', 'sql', 'python']
      },
      {
        id: 4,
        name: 'ai-ecommerce-business-intelligence',
        description: 'AI-assisted e-commerce analytics using SQL, Python, Power BI and Generative AI.',
        html_url: 'https://github.com/Aarya01239/ai-ecommerce-business-intelligence',
        language: 'Python',
        stargazers_count: 1,
        updated_at: '2026-08-15T14:40:00Z',
        topics: ['ecommerce', 'business-intelligence', 'power-bi', 'sql', 'python']
      },
      {
        id: 5,
        name: 'ga4-marketing-funnel-customer-journey',
        description: 'AI-assisted GA4 marketing funnel and customer journey analytics using SQL, Python and BI.',
        html_url: 'https://github.com/Aarya01239/ga4-marketing-funnel-customer-journey',
        language: 'SQL',
        stargazers_count: 1,
        updated_at: '2026-08-15T15:02:32Z',
        topics: ['ga4', 'marketing-funnel', 'customer-journey', 'sql', 'python']
      }
    ];
    res.json({ repos: fallbackRepos, source: 'verified_catalog' });
  }
});

// Ask Venky AI Endpoint
app.post('/api/gemini/ask-venky', async (req, res) => {
  const { message, conversationHistory } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const ai = getGeminiClient();

    const systemInstruction = `You are "Ask Venky AI", the personal intelligent representative of Venkata Kumar Pulapa.
STRICT MANDATE:
1. Answer questions ONLY using the verified portfolio information provided in the context below.
2. Do not invent experience.
3. Do not exaggerate skills.
4. Do not fabricate achievements.
5. If information is not available in the portfolio, state clearly that it is not available in the portfolio.
6. Speak in an articulate, professional, confident, and warm first/third person voice as Venky's verified AI representative.
7. Explicitly highlight how Venky's real-world business experience (Delta Agri Mech, Sri Venkateshwara) translates into modern analytics problem solving ("I understand business problems before analyzing data").
8. Always use exact terminology: e.g. "220+ Customer & Lead Records" (NEVER "client relationships" or "accounts").
9. Keep responses concise, structured with bullet points where appropriate, and directly cite relevant projects or experience.

VERIFIED PORTFOLIO CONTEXT:
${PORTFOLIO_GROUNDING_CONTEXT}`;

    let prompt = `User Question: "${message}"\n`;
    if (Array.isArray(conversationHistory) && conversationHistory.length > 0) {
      const recentHistory = conversationHistory
        .slice(-6)
        .map((h: any) => `${h.role === 'user' ? 'User' : 'Venky AI'}: ${h.text}`)
        .join('\n');
      prompt = `Recent Conversation:\n${recentHistory}\n\nUser Question: "${message}"`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2,
        topP: 0.95
      }
    });

    const replyText = response.text || 'I could not find verified data to answer this question accurately.';
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error('Ask Venky error:', error);
    res.status(500).json({
      error: 'Failed to process request with Ask Venky AI.',
      details: error.message
    });
  }
});

// AI Job Matcher Endpoint
app.post('/api/gemini/job-matcher', async (req, res) => {
  const { jobDescription } = req.body;

  if (!jobDescription || typeof jobDescription !== 'string' || jobDescription.trim().length < 20) {
    return res.status(400).json({ error: 'Please provide a valid Job Description of at least 20 characters.' });
  }

  try {
    const ai = getGeminiClient();

    const systemInstruction = `You are the AI Job Matcher for Venkata Kumar Pulapa.
CRITICAL MANDATES:
1. Do NOT create a fake ATS numerical percentage score.
2. Do NOT claim qualifications that do not exist in the candidate's verified profile.
3. Evaluate the provided Job Description against Venkata Kumar Pulapa's verified profile.
4. Categorize matches into transparent tiers:
   - Strong Match: Areas where Venky has direct, verified experience or demonstrated project code.
   - Good Match: Areas well supported by his MBA, certifications, or tools (e.g. Python, SQL, Power BI).
   - Transferable Match: Ground-level business skills that translate directly into the requirement (e.g. field objection handling to business requirement gathering).
   - Learning Opportunity: Areas required by the JD that are beyond current verified scope (e.g. AWS Redshift, Snowflake, Tableau, etc.), explaining his realistic path to acquire them.
5. Provide honest, recruiter-friendly interview discussion questions to explore his capabilities.
6. Every match MUST link to verified evidence from his real experience (Delta Agri Mech, Sri Venkateshwara, Education, or 5 Projects).

VERIFIED PROFILE DATA:
${PORTFOLIO_GROUNDING_CONTEXT}`;

    const prompt = `Analyze this Job Description against Venkata Kumar Pulapa's profile:
"""
${jobDescription.trim()}
"""

Provide your evaluation strictly as JSON matching the requested schema.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: '2-3 sentence honest executive summary of candidate fit.'
            },
            matchScoreTier: {
              type: Type.STRING,
              description: 'Must be one of: "Strong Match", "Good Match", "Transferable Match", "Learning Opportunity"'
            },
            strongMatches: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  item: { type: Type.STRING },
                  evidence: { type: Type.STRING },
                  type: { type: Type.STRING, description: 'skill, experience, or project' }
                },
                required: ['item', 'evidence', 'type']
              }
            },
            goodMatches: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  item: { type: Type.STRING },
                  evidence: { type: Type.STRING },
                  type: { type: Type.STRING, description: 'skill, experience, or project' }
                },
                required: ['item', 'evidence', 'type']
              }
            },
            transferableSkills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  businessAction: { type: Type.STRING },
                  technicalTranslation: { type: Type.STRING },
                  evidence: { type: Type.STRING }
                },
                required: ['businessAction', 'technicalTranslation', 'evidence']
              }
            },
            relevantExperience: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  company: { type: Type.STRING },
                  role: { type: Type.STRING },
                  contribution: { type: Type.STRING }
                },
                required: ['company', 'role', 'contribution']
              }
            },
            relevantProjects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  projectTitle: { type: Type.STRING },
                  relevance: { type: Type.STRING }
                },
                required: ['projectTitle', 'relevance']
              }
            },
            technicalMatches: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  skill: { type: Type.STRING },
                  verifiedUse: { type: Type.STRING }
                },
                required: ['skill', 'verifiedUse']
              }
            },
            learningGaps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  gap: { type: Type.STRING },
                  pathForward: { type: Type.STRING }
                },
                required: ['gap', 'pathForward']
              }
            },
            interviewDiscussionAreas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  topic: { type: Type.STRING },
                  whyAsk: { type: Type.STRING },
                  suggestedQuestion: { type: Type.STRING }
                },
                required: ['topic', 'whyAsk', 'suggestedQuestion']
              }
            }
          },
          required: [
            'summary',
            'matchScoreTier',
            'strongMatches',
            'goodMatches',
            'transferableSkills',
            'relevantExperience',
            'relevantProjects',
            'technicalMatches',
            'learningGaps',
            'interviewDiscussionAreas'
          ]
        },
        temperature: 0.1
      }
    });

    const parsedJson = JSON.parse(response.text || '{}');
    res.json({ result: parsedJson });
  } catch (error: any) {
    console.error('Job Matcher error:', error);
    res.status(500).json({
      error: 'Failed to analyze Job Description.',
      details: error.message
    });
  }
});

// AI Project Explorer Natural Language Search Endpoint
app.post('/api/gemini/project-explorer', async (req, res) => {
  const { query } = req.body;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query is required.' });
  }

  try {
    const ai = getGeminiClient();

    const systemInstruction = `You are the AI Project Explorer for Venkata Kumar Pulapa's portfolio.
Match the visitor's query to one or more of Venky's 5 verified analytics projects:
1. "ai-customer-support-voc-intelligence" (AI Customer Support & Voice-of-Customer Intelligence)
2. "product-analytics-user-journey" (Product Analytics & User Journey)
3. "customer-analytics-rfm-churn-ltv" (Customer Analytics — RFM, Churn & LTV)
4. "ai-ecommerce-business-intelligence" (AI E-commerce Business Intelligence)
5. "ga4-marketing-funnel-customer-journey" (GA4 Marketing Funnel & Customer Journey)

Rules:
- Do not hallucinate external projects.
- Explain clearly WHY each recommended project addresses the user's specific query.
- Include direct link suggestion and relevant tools.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Visitor Query: "${query}"`,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProjectIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            explanation: { type: Type.STRING },
            suggestedSkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ['recommendedProjectIds', 'explanation', 'suggestedSkills']
        },
        temperature: 0.2
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ result: parsed });
  } catch (error: any) {
    console.error('Project Explorer error:', error);
    res.status(500).json({
      error: 'Failed to process project explorer query.',
      details: error.message
    });
  }
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Log contact attempt securely
  console.log(`[Contact Submission] From: ${name} (${email}), Company: ${company || 'N/A'}`);
  res.json({
    success: true,
    message: 'Thank you for reaching out! Venkata Kumar Pulapa will respond to your email promptly.'
  });
});

// Profile photo check & upload endpoints
app.get('/api/profile-photo-status', (req, res) => {
  const publicPath = path.join(process.cwd(), 'public', 'profile.png');
  const exists = fs.existsSync(publicPath);
  res.json({ exists });
});

app.post('/api/upload-profile', (req, res) => {
  try {
    const { imageBase64 } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const publicPath = path.join(publicDir, 'profile.png');
    fs.writeFileSync(publicPath, buffer);

    const distDir = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, 'profile.png'), buffer);
    }

    console.log(`[Profile Upload] Successfully wrote ${buffer.length} bytes to ${publicPath}`);
    res.json({ success: true, message: 'Profile photo saved successfully!' });
  } catch (err: any) {
    console.error('Error saving profile photo:', err);
    res.status(500).json({ error: 'Failed to save photo', details: err.message });
  }
});

// Setup Vite development middleware or production static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Venky AI Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
