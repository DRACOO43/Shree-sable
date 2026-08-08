import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Terminal,
  MapPin,
  CheckCircle2,
  Cpu,
  Database,
  Cloud,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenAiAssistant: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAiAssistant,
  onOpenResumeModal,
  onOpenTerminal,
  darkMode,
}) => {
  return (
    <section
      id="home"
      className={`relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden transition-colors ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      {/* Background Soft Spotlight Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A1A1A] opacity-40 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>

      {/* Background Huge Watermark */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none select-none">
        <span className="text-[220px] sm:text-[320px] font-black leading-none uppercase font-display">SS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap justify-between items-baseline mb-12 border-b border-white/10 pb-6">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400">
            SHREE SABLE / 001
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              STATUS: AVAILABLE FOR HIRE
            </span>
            <span className="hidden sm:inline">LOCATION: {PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Huge Bold Heading & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            {/* Title */}
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold font-mono-custom mb-3 opacity-60">
                AI & MACHINE LEARNING ENGINEER
              </div>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl leading-[0.8] font-black tracking-[-0.04em] uppercase font-display m-0 p-0">
                SHREE<br />SABLE
              </h1>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-white/60"></div>
                <p className="text-lg sm:text-xl font-light tracking-wide text-zinc-300">
                  {PERSONAL_INFO.title} & Systems Architect
                </p>
              </div>
            </div>

            {/* Profile Bio */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-zinc-400 font-normal">
              {PERSONAL_INFO.profileSummary} Student intern with 3 months experience at{' '}
              <strong className="text-white uppercase font-bold">Pro Azure</strong> and currently pursuing diploma at{' '}
              <strong className="text-white uppercase font-bold">Ajeenkya DY Patil School of Engineering</strong>.
            </p>

            {/* Primary Action Buttons - Bold & Sharp */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAiAssistant}
                id="hero-ai-assistant-btn"
                className="bg-white text-black px-7 py-3.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Copilot</span>
              </button>

              <a
                href="#contact"
                className="border border-white/20 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="border border-white/20 text-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-2"
                title="View & Download PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="bg-zinc-900 border border-white/20 text-emerald-400 px-5 py-3.5 text-xs font-bold font-mono-custom uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-2"
                title="Open Interactive CLI Terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI</span>
              </button>
            </div>

            {/* Skill Tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom">Python</span>
              <span className="px-3.5 py-1.5 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom">MySQL</span>
              <span className="px-3.5 py-1.5 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom">Azure</span>
              <span className="px-3.5 py-1.5 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom">Java & C</span>
              <span className="px-3.5 py-1.5 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom">AIML</span>
            </div>
          </div>

          {/* Right Column: High Contrast Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-zinc-900/90 border border-white/10 p-8 text-white relative z-10 shadow-2xl">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>

              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 border-2 border-white p-1 overflow-hidden">
                    <img
                      src={https://github.com/DRACOO43/Shree-sable/blob/8e4cfce8dd72785bab0cab700b8db9dd7ab35577/src/assets/images/ChatGPT%20Image%20Aug%208%2C%202026%2C%2009_59_01%20PM.png}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-wider font-display">{PERSONAL_INFO.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mt-1">
                  AIML Student @ Ajeenkya DY Patil
                </p>

                <div className="w-full my-6 border-t border-white/10" />

                {/* Summary Checklist */}
                <div className="w-full space-y-3 text-left text-xs uppercase tracking-wider font-mono-custom text-zinc-300">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <span>3-Month Intern @ <strong className="text-white">Pro Azure</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <span>Diploma AIML (2024 - 2027)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <span>English • Hindi • Marathi</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 grid grid-cols-4 gap-2 w-full pt-6 border-t border-white/10">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 text-center hover:bg-white hover:text-black transition-colors flex justify-center items-center"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 text-center hover:bg-white hover:text-black transition-colors flex justify-center items-center"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 border border-white/20 text-center hover:bg-white hover:text-black transition-colors flex justify-center items-center"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="p-3 border border-white/20 text-center hover:bg-white hover:text-black transition-colors flex justify-center items-center"
                    title="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
