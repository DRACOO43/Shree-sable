import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle,
  Building2,
  BookOpen,
} from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/resumeData';

interface ExperienceEducationProps {
  darkMode: boolean;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section
      id="experience"
      className={`py-24 transition-colors border-t border-white/10 ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400 mb-2">
            003 / CAREER JOURNEY
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] font-display">
            EXPERIENCE & EDUCATION
          </h2>
          <div className="h-[2px] w-24 bg-white mt-4"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              All Timeline
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                activeTab === 'experience'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              Internships (Pro Azure)
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              Education (ADYPSOE)
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl space-y-8">
          {/* Internship Card */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="p-8 bg-zinc-900/80 border border-white/10 text-white relative">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold font-mono-custom uppercase tracking-[0.3em] text-zinc-400 block mb-1">
                    STUDENT INTERNSHIP
                  </span>
                  <h3 className="text-3xl font-black uppercase font-display">Pro Azure</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-mono-custom text-zinc-300 mt-1">
                    Student Intern (3 Months)
                  </p>
                </div>
                <div className="px-4 py-2 border border-white/20 text-xs font-mono-custom text-zinc-300 uppercase tracking-widest">
                  DURATION: 3 MONTHS
                </div>
              </div>

              <p className="text-base leading-relaxed text-zinc-300 font-normal mb-6">
                {EXPERIENCE_DATA[0].description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400">
                  KEY RESPONSIBILITIES & EXPERIENCE:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs uppercase tracking-wider font-mono-custom text-zinc-300">
                  {EXPERIENCE_DATA[0].responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white shrink-0 mt-1.5"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-8">
                <span className="text-xs font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mr-2">SKILLS:</span>
                {EXPERIENCE_DATA[0].skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education Card */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="p-8 bg-zinc-900/80 border border-white/10 text-white relative">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold font-mono-custom uppercase tracking-[0.3em] text-zinc-400 block mb-1">
                    ACADEMIC DIPLOMA
                  </span>
                  <h3 className="text-3xl font-black uppercase font-display">
                    Ajeenkya DY Patil School of Engineering
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-mono-custom text-zinc-300 mt-1">
                    Diploma in Artificial Intelligence & Machine Learning
                  </p>
                </div>
                <div className="px-4 py-2 border border-white/20 text-xs font-mono-custom text-zinc-300 uppercase tracking-widest">
                  PERIOD: 2024 - 2027
                </div>
              </div>

              <p className="text-base leading-relaxed text-zinc-300 font-normal mb-6">
                {EDUCATION_DATA[0].description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400">
                  COURSEWORK HIGHLIGHTS:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs uppercase tracking-wider font-mono-custom text-zinc-300">
                  {EDUCATION_DATA[0].highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white shrink-0 mt-1.5"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
