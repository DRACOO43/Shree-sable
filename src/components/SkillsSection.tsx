import React, { useState } from 'react';
import {
  Code,
  Wrench,
  Sparkles,
  Database,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  GitBranch,
  Figma as FigmaIcon,
  CheckCircle2,
} from 'lucide-react';
import { TECHNICAL_SKILLS, TOOLS_TECHNOLOGIES, SOFT_SKILLS } from '../data/resumeData';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'programming' | 'tools' | 'soft'>(
    'all'
  );

  return (
    <section
      id="skills"
      className={`py-24 transition-colors border-t border-white/10 ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400 mb-2">
            004 / TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] font-display">
            SKILLS & TOOLS
          </h2>
          <div className="h-[2px] w-24 bg-white mt-4"></div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setSelectedCategory('programming')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                selectedCategory === 'programming'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              Programming & DB
            </button>
            <button
              onClick={() => setSelectedCategory('tools')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                selectedCategory === 'tools'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              Tools & Software
            </button>
            <button
              onClick={() => setSelectedCategory('soft')}
              className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                selectedCategory === 'soft'
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
              }`}
            >
              Strengths
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {/* Programming Languages */}
          {(selectedCategory === 'all' || selectedCategory === 'programming') && (
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-mono-custom font-bold text-zinc-400 mb-6">
                PROGRAMMING LANGUAGES & DATABASES
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TECHNICAL_SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-6 bg-zinc-900/80 border border-white/10 hover:border-white transition-all text-white group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-black uppercase font-display">{skill.name}</h4>
                      {skill.badge && (
                        <span className="px-2 py-0.5 border border-white/20 text-[9px] uppercase tracking-widest font-mono-custom">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 mb-6 h-12 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-widest font-mono-custom">
                        <span className="text-zinc-400">Proficiency</span>
                        <span className="font-bold text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Technologies */}
          {(selectedCategory === 'all' || selectedCategory === 'tools') && (
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-mono-custom font-bold text-zinc-400 mb-6">
                SOFTWARE TOOLS & UTILITIES
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TOOLS_TECHNOLOGIES.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-6 bg-zinc-900/80 border border-white/10 hover:border-white transition-all text-white group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-black uppercase font-display">{tool.name}</h4>
                      <span className="px-2 py-0.5 border border-white/20 text-[9px] uppercase tracking-widest font-mono-custom">
                        Tool
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mb-6 h-12 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-widest font-mono-custom">
                        <span className="text-zinc-400">Skill Level</span>
                        <span className="font-bold text-white">{tool.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full bg-white transition-all duration-500"
                          style={{ width: `${tool.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills & Professional Strengths */}
          {(selectedCategory === 'all' || selectedCategory === 'soft') && (
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-mono-custom font-bold text-zinc-400 mb-6">
                PROFESSIONAL & INTERPERSONAL STRENGTHS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SOFT_SKILLS.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 bg-zinc-900/80 border border-white/10 hover:bg-white hover:text-black transition-all group"
                  >
                    <h4 className="text-lg font-black uppercase font-display mb-2 group-hover:text-black">{item.name}</h4>
                    <p className="text-xs text-zinc-400 group-hover:text-zinc-800 leading-relaxed font-mono-custom">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
