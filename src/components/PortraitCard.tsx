import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, MapPin, Camera, UploadCloud, Check } from 'lucide-react';

interface PortraitCardProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({ variant = 'hero', className = '' }) => {
  const [photoSrc, setPhotoSrc] = useState<string>('/profile.png');
  const [fallbackAttempt, setFallbackAttempt] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check saved photo on mount or prioritize bundled static asset
  useEffect(() => {
    try {
      const saved = localStorage.getItem('venky_profile_photo');
      if (saved) {
        setPhotoSrc(saved);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleImageError = () => {
    if (fallbackAttempt === 0) {
      setFallbackAttempt(1);
      setPhotoSrc('/venky-profile.jpeg');
    } else if (fallbackAttempt === 1) {
      setFallbackAttempt(2);
      setPhotoSrc('https://raw.githubusercontent.com/Aarya01239/venky-ai-portfolio/main/venky-profile.jpeg');
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        // Update client display immediately
        setPhotoSrc(dataUrl);
        try {
          localStorage.setItem('venky_profile_photo', dataUrl);
        } catch (err) {
          console.warn('Storage quota exceeded, keeping in memory', err);
        }

        // Save permanently to server public/profile.png
        try {
          const res = await fetch('/api/upload-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: dataUrl })
          });
          if (res.ok) {
            setUploadSuccess(true);
            setTimeout(() => setUploadSuccess(false), 3500);
          }
        } catch (err) {
          console.error('Failed to sync photo to server:', err);
        } finally {
          setIsUploading(false);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      id={`portrait-container-${variant}`}
      className={`relative group ${className}`}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

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
          onDrop={onDrop}
        >
          {photoSrc ? (
            <img
              id={`portrait-img-${variant}`}
              src={photoSrc}
              alt="Venkata Kumar Pulapa"
              onError={handleImageError}
              className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            /* Upload Call-To-Action if image is not yet loaded */
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-neutral-900/90 hover:bg-neutral-800/80 transition-colors group/cta"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-700/40 flex items-center justify-center mb-3 text-cyan-400 group-hover/cta:scale-110 group-hover/cta:border-cyan-400 transition-all shadow-lg">
                <UploadCloud className="w-8 h-8" />
              </div>
              <div className="text-sm font-semibold text-neutral-100">
                Click to Upload profile.png
              </div>
              <p className="text-xs text-neutral-400 mt-1 max-w-[200px]">
                Drag & drop or select your original LinkedIn photo
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Camera className="w-3.5 h-3.5" />
                Select Photo
              </span>
            </div>
          )}

          {/* Quick-Change Camera Button (Floating on top right) */}
          <button
            id={`btn-change-photo-${variant}`}
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Upload or Change profile.png"
            className="absolute top-3 right-3 p-2 rounded-xl bg-neutral-950/80 hover:bg-neutral-900 text-neutral-300 hover:text-cyan-400 border border-neutral-700/70 hover:border-cyan-500/60 shadow-lg backdrop-blur-md transition duration-200"
          >
            <Camera className="w-4 h-4" />
          </button>

          {/* Upload Status Toast */}
          {uploadSuccess && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/90 border border-emerald-600/50 text-emerald-300 text-xs shadow-lg backdrop-blur-md animate-fade-in">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Saved as profile.png!
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-xs text-cyan-300 font-medium">
              Uploading photo...
            </div>
          )}
          
          {/* Clean badge indicator */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-xs">
            <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Professional Portrait
            </span>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-cyan-400 hover:text-cyan-300 text-[11px] font-medium transition"
            >
              {photoSrc ? 'Change' : 'Upload'}
            </button>
          </div>
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
    </div>
  );
};
