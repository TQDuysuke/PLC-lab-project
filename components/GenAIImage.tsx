import React, { useState } from 'react';
import { generateLabImage } from '../services/geminiService';

interface GenAIImageProps {
  prompt: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export const GenAIImage: React.FC<GenAIImageProps> = ({ prompt, fallbackSrc, alt, className }) => {
  const [imgSrc, setImgSrc] = useState<string>(fallbackSrc);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent click events
    setLoading(true);
    const result = await generateLabImage(prompt);
    if (result) {
      setImgSrc(result);
      setGenerated(true);
    } else {
      alert("Không thể tạo ảnh. Vui lòng kiểm tra API Key.");
    }
    setLoading(false);
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img 
        src={imgSrc} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay control to generate AI image */}
      {!generated && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-black/70 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-1 transition-colors"
          >
            {loading ? (
              <span className="animate-spin h-3 w-3 border-2 border-white border-t-transparent rounded-full block"></span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 12z"/><path d="M21 3v9h-9"/></svg>
            )}
            {loading ? 'Đang tạo...' : 'AI Generate'}
          </button>
        </div>
      )}
      
      {/* Gradient Overlay for better text readability if used as background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};
