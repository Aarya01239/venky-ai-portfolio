import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  FileText, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    // Simulate sending message and construct mailto fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name} (${formState.roleOrCompany || 'Recruiter/Leader'})`);
    const body = encodeURIComponent(`Hi Venkata Kumar,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`);
    
    setIsSent(true);
    // Open default mail client as reliable transmission
    window.location.href = `mailto:${PERSONAL_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-100">
            Let's Discuss Analytics & Business Growth.
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed">
            Open to Business Analyst, Data Analyst, Business Analytics, and Product Analytics opportunities. Let's talk about how I can bring commercial rigor to your data team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_DETAILS.email}`}
                    className="text-sm font-semibold text-neutral-100 hover:text-cyan-400 transition"
                  >
                    {PERSONAL_DETAILS.email}
                  </a>
                </div>
              </div>

              <button
                id="btn-copy-email"
                onClick={() => handleCopy(PERSONAL_DETAILS.email, 'email')}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition text-xs"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Phone Number</div>
                  <a
                    href={`tel:${PERSONAL_DETAILS.phone}`}
                    className="text-sm font-semibold text-neutral-100 hover:text-emerald-400 font-mono transition"
                  >
                    {PERSONAL_DETAILS.phone}
                  </a>
                </div>
              </div>

              <button
                id="btn-copy-phone"
                onClick={() => handleCopy(PERSONAL_DETAILS.phone, 'phone')}
                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition text-xs"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400">Location</div>
                <div className="text-sm font-semibold text-neutral-100">
                  {PERSONAL_DETAILS.location}
                </div>
              </div>
            </div>

            {/* Social Profiles & Resume */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 hover:text-cyan-400 flex items-center justify-center gap-2 transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 hover:text-cyan-400 flex items-center justify-center gap-2 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (@Aarya01239)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-7 sm:p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 shadow-xl space-y-4 backdrop-blur-sm"
            >
              <div className="text-sm font-bold text-neutral-100 flex items-center justify-between">
                <span>Send a Direct Message</span>
                <span className="text-xs font-mono text-neutral-500">Fast Response Guaranteed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-400">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-neutral-400">Role / Company / Opportunity Type</label>
                <input
                  type="text"
                  value={formState.roleOrCompany}
                  onChange={(e) => setFormState({ ...formState, roleOrCompany: e.target.value })}
                  placeholder="e.g. Senior Recruiter @ TechCorp — Business Analyst Role"
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-neutral-400">Message / Inquiries</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the role, key responsibilities, and how we can connect..."
                  className="w-full p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message Directly</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Drafting your message to venkatakumar.pulapa@gmail.com... Thank you!</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Portfolio Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-left">
          <div className="space-y-0.5">
            <div className="font-semibold text-neutral-300">
              Venkata Kumar Pulapa — Business Analyst & Analytics Portfolio
            </div>
            <div>
              Built with React 18, Vite, Tailwind CSS, TypeScript & Gemini AI.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_DETAILS.resumeUrl}
              download="Venkata_Kumar_Pulapa_Resume.pdf"
              className="hover:text-cyan-400 transition"
            >
              Resume PDF
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
