import React from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  Languages,
  Target,
  Clock,
  MessageSquare,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { PERSONAL_INFO, SPOKEN_LANGUAGES, SOFT_SKILLS } from '../data/resumeData';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-24 transition-colors border-t border-white/10 ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400 mb-2">
            002 / BACKGROUND & OVERVIEW
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[ -0.03em] font-display">
            PROFILE & EXPERTISE
          </h2>
          <div className="h-[2px] w-24 bg-white mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Profile Story Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 bg-zinc-900/80 border border-white/10 text-white relative">
              <h3 className="text-xl font-black uppercase tracking-wider font-display mb-4">
                PROFILE & MISSION
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-300 font-normal">
                {PERSONAL_INFO.profileSummary}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400 font-normal">
                Currently enrolled in the Diploma in Artificial Intelligence & Machine Learning program at{' '}
                <strong className="text-white uppercase font-bold">
                  {PERSONAL_INFO.institution}
                </strong>{' '}
                (2024–2027), I bring strong problem-solving skills across Python algorithms, database management with MySQL, and software development principles in Java and C.
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-white">2024-27</div>
                  <div className="text-[10px] uppercase tracking-widest font-mono-custom text-zinc-400 mt-1">
                    Diploma AIML
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-white">3 MOS</div>
                  <div className="text-[10px] uppercase tracking-widest font-mono-custom text-zinc-400 mt-1">
                    Pro Azure Intern
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-display text-white">4 TECHS</div>
                  <div className="text-[10px] uppercase tracking-widest font-mono-custom text-zinc-400 mt-1">
                    Python, Java, C, SQL
                  </div>
                </div>
              </div>
            </div>

            {/* Soft / Professional Skills Cards */}
            <div className="p-8 bg-zinc-900/80 border border-white/10">
              <h3 className="text-xl font-black uppercase tracking-wider font-display mb-6">
                PROFESSIONAL STRENGTHS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SOFT_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 border border-white/10 bg-zinc-950 hover:bg-white hover:text-black transition-all group"
                  >
                    <div className="font-bold text-xs uppercase tracking-wider mb-2 font-mono-custom group-hover:text-black">
                      {skill.name}
                    </div>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-800 leading-normal">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Quick Reference */}
          <div className="lg:col-span-5 space-y-6">
            {/* Spoken Languages Card */}
            <div className="p-8 bg-zinc-900/80 border border-white/10">
              <h3 className="text-xl font-black uppercase tracking-wider font-display mb-6">
                SPOKEN LANGUAGES
              </h3>
              <div className="space-y-6">
                {SPOKEN_LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs uppercase tracking-widest font-mono-custom">
                      <span className="font-bold text-white">{lang.name}</span>
                      <span className="text-zinc-400">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Institution Card */}
            <div className="p-6 bg-zinc-900/90 border border-white/10">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-1">
                ACADEMIC INSTITUTION
              </div>
              <h4 className="text-lg font-black uppercase font-display text-white">
                Ajeenkya DY Patil School of Engineering
              </h4>
              <p className="text-xs text-zinc-400 mt-2 font-mono-custom">
                Diploma in AI & Machine Learning (2024–2027)
              </p>
            </div>

            {/* Internship Card */}
            <div className="p-6 bg-zinc-900/90 border border-white/10">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-1">
                INDUSTRY INTERNSHIP
              </div>
              <h4 className="text-lg font-black uppercase font-display text-white">Pro Azure</h4>
              <p className="text-xs text-zinc-400 mt-2 font-mono-custom">
                Student Intern (3 Months) • Cloud & Full Stack Workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
