import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t border-white/10 transition-colors ${
        darkMode ? 'bg-[#0A0A0A] text-zinc-400' : 'bg-[#F4F4F5] text-zinc-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copy */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-black text-white text-base flex items-center justify-center md:justify-start gap-2 font-display uppercase tracking-wider">
              <span className="w-6 h-6 bg-white text-black font-extrabold text-xs flex items-center justify-center">
                SS
              </span>
              <span>{PERSONAL_INFO.name} PORTFOLIO</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-mono-custom text-zinc-400">
              AI & ML Student • Ajeenkya DY Patil School of Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 border border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 border border-white/20 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] font-mono-custom hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED. • WEBSITE DEVELOPED BY ANSHUMAN BHALERAO
        </div>
      </div>
    </footer>
  );
};
