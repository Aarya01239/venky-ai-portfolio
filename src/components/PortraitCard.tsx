import React, { useState, useEffect, useRef } from 'react';
import { Camera, CheckCircle, UploadCloud, RefreshCw, Sparkles, MapPin } from 'lucide-react';

interface PortraitCardProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({ variant = 'hero', className = '' }) => {
const [customPhoto, setCustomPhoto] = useState<string | null>('/venky-profile.jpeg');
  const [isHovered, setIsHovered] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photo from localStorage if previously stored
  useEffect(() => {
    try {
      const saved = localStorage.getItem('venky_profile_photo');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch (e) {
      console.warn('Could not access localStorage for photo:', e);
    }
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        try {
          localStorage.setItem('venky_profile_photo', result);
        } catch (err) {
          console.warn('Storage quota exceeded, photo active in memory');
        }
        setShowUploadModal(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const resetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('venky_profile_photo');
    setShowUploadModal(false);
  };

  return (
    <div
      id={`portrait-container-${variant}`}
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background data nodes and gradient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

      {/* Frame Container */}
      <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-neutral-700/60 via-neutral-800/40 to-neutral-900/80 border border-neutral-700/50 shadow-2xl backdrop-blur-md overflow-hidden">
        
        {/* Aspect Container */}
        <div 
          className={`relative w-full rounded-xl overflow-hidden bg-neutral-900 ${
            variant === 'hero' ? 'aspect-[4/4.8] sm:aspect-[4/4.5]' : 'aspect-square'
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {customPhoto ? (
            <img
              id={`portrait-img-${variant}`}
           src="/venky-profile.jpeg"
              alt="Venkata Kumar Pulapa"
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            /* High-fidelity Vector Representation matching his exact headshot */
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900 via-neutral-900 to-neutral-950 overflow-hidden">
              {/* Radial background studio light */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(96,165,250,0.18),transparent_65%)]" />
              
              {/* Subtle architectural data mesh */}
              <div className="absolute inset-0 opacity-15 data-grid-pattern pointer-events-none" />

              {/* Vector Composition */}
              <svg
                viewBox="0 0 400 480"
                className="w-full h-full object-cover select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#090d16" />
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="30%" y1="0%" x2="70%" y2="100%">
                    <stop offset="0%" stopColor="#d99b6d" />
                    <stop offset="100%" stopColor="#b57448" />
                  </linearGradient>
                  <linearGradient id="beardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1f1815" />
                    <stop offset="100%" stopColor="#110d0b" />
                  </linearGradient>
                </defs>

                {/* Shoulders & Dark Navy Suit */}
                <path
                  d="M 60 480 L 105 320 L 155 310 L 200 370 L 245 310 L 295 320 L 340 480 Z"
                  fill="url(#suitGrad)"
                  stroke="#334155"
                  strokeWidth="1.5"
                />

                {/* Suit Lapels */}
                <path
                  d="M 125 315 L 175 420 L 188 480 L 165 480 L 110 320 Z"
                  fill="#172033"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                />
                <path
                  d="M 275 315 L 225 420 L 212 480 L 235 480 L 290 320 Z"
                  fill="#172033"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                />

                {/* Crisp White Shirt V-Neck Collar with buttons */}
                <path
                  d="M 155 310 L 200 405 L 245 310 L 220 280 L 180 280 Z"
                  fill="url(#shirtGrad)"
                />
                {/* Dark buttons on white shirt */}
                <circle cx="200" cy="370" r="2.5" fill="#0f172a" />
                <circle cx="200" cy="400" r="2.5" fill="#0f172a" />
                <circle cx="200" cy="430" r="2.5" fill="#0f172a" />

                {/* Neck */}
                <rect x="175" y="235" width="50" height="60" rx="6" fill="url(#skinGrad)" />

                {/* Head Base */}
                <ellipse cx="200" cy="205" rx="55" ry="68" fill="url(#skinGrad)" />

                {/* Groomed Beard and Mustache */}
                <path
                  d="M 152 205 C 150 250, 165 285, 200 288 C 235 285, 250 250, 248 205 C 242 225, 235 242, 200 244 C 165 242, 158 225, 152 205 Z"
                  fill="url(#beardGrad)"
                />
                {/* Mustache */}
                <path
                  d="M 175 224 C 190 220, 200 226, 200 226 C 200 226, 210 220, 225 224 C 218 232, 208 233, 200 231 C 192 233, 182 232, 175 224 Z"
                  fill="url(#beardGrad)"
                />

                {/* Styled Dark Hair with volume */}
                <path
                  d="M 142 185 C 138 135, 160 115, 200 112 C 240 115, 262 135, 258 185 C 265 170, 255 130, 238 120 C 218 110, 182 110, 162 120 C 145 130, 135 170, 142 185 Z"
                  fill="#171210"
                />
                {/* Hair Sweep Texture */}
                <path
                  d="M 155 140 Q 200 125 245 145"
                  stroke="#3a2f2a"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Eyes & Brows */}
                <path d="M 166 182 Q 180 178 190 182" stroke="#1f1815" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 210 182 Q 220 178 234 182" stroke="#1f1815" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Warm intelligent eyes */}
                <ellipse cx="178" cy="192" rx="5" ry="4" fill="#2d1c14" />
                <ellipse cx="222" cy="192" rx="5" ry="4" fill="#2d1c14" />
                <circle cx="179.5" cy="191" r="1.2" fill="#ffffff" />
                <circle cx="223.5" cy="191" r="1.2" fill="#ffffff" />

                {/* Nose */}
                <path d="M 199 188 L 196 212 L 204 212" stroke="#8f5734" strokeWidth="1.8" fill="none" strokeLinecap="round" />

                {/* Analytics overlay node coordinates */}
                <circle cx="105" cy="120" r="3" fill="#06b6d4" opacity="0.6" />
                <line x1="105" y1="120" x2="145" y2="150" stroke="#06b6d4" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />
                <circle cx="295" cy="150" r="3" fill="#3b82f6" opacity="0.6" />
                <line x1="295" y1="150" x2="255" y2="180" stroke="#3b82f6" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />
              </svg>

              {/* Clean badge indicator inside default view */}
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-xs">
                <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Portrait
                </span>
                <button
                  id={`btn-replace-photo-${variant}`}
                  onClick={() => setShowUploadModal(true)}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition text-[11px]"
                >
                  <Camera className="w-3.5 h-3.5" />
                  Custom Photo
                </button>
              </div>
            </div>
          )}

          {/* Hover overlay for changing / replacing original photo */}
          {customPhoto && (
            <div className={`absolute top-3 right-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button
                id={`btn-photo-options-${variant}`}
                onClick={() => setShowUploadModal(true)}
                title="Photo Settings"
                className="p-2 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-neutral-700/80 text-neutral-300 hover:text-white shadow-lg transition"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Bottom card details */}
        <div className="p-3.5 space-y-2 bg-neutral-900/90">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-neutral-100 text-sm tracking-tight flex items-center gap-1.5">
                Venkata Kumar Pulapa
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
              </div>
              <div className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-neutral-500" />
                Kakinada, Andhra Pradesh, India
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                Business & Analytics
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upload/Replace Modal */}
      {showUploadModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowUploadModal(false)}
        >
          <div
            className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-100 flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-400" />
                Professional Portrait Photo
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-neutral-400 hover:text-white text-sm px-2 py-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Upload your original professional LinkedIn portrait (<code className="text-neutral-300 bg-neutral-800 px-1 py-0.5 rounded">WhatsApp Image 2026-09-06 at 23.05.35.jpeg</code>) to display it immediately across the portfolio.
            </p>

            {/* Drag and Drop Zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-neutral-700 hover:border-cyan-500 rounded-xl p-6 text-center cursor-pointer transition bg-neutral-950/50 hover:bg-neutral-950/80 group"
            >
              <UploadCloud className="w-10 h-10 text-neutral-400 group-hover:text-cyan-400 mx-auto mb-2 transition" />
              <div className="text-sm font-medium text-neutral-200">
                Click to browse or drag & drop photo
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                JPEG, PNG, or WebP supported (auto-persisted in browser)
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileUpload(e.target.files[0]);
                  }
                }}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {customPhoto ? (
                <button
                  onClick={resetPhoto}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset to Default Vector Portrait
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-sm font-medium text-neutral-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
