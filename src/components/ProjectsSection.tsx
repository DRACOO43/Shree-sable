import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Search,
  Sparkles,
  Tag,
  CheckCircle,
  X,
  Code2,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/resumeData';
import { Project } from '../types';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'Cloud & Azure', 'Database', 'Full Stack'];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className={`py-24 transition-colors border-t border-white/10 ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400 mb-2">
            005 / PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] font-display">
            FEATURED PROJECTS
          </h2>
          <div className="h-[2px] w-24 bg-white mt-4"></div>

          {/* Controls: Search & Category Filter */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 border border-white/20 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/80 border border-white/10 hover:border-white transition-all duration-300 flex flex-col justify-between text-white group"
            >
              {/* Image & Category Overlay */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-black border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-black border border-white/30 text-[10px] font-black uppercase tracking-[0.2em] font-mono-custom text-white">
                  {project.category}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase font-display mb-3">{project.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-mono-custom">
                    {project.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border border-white/20 text-[10px] font-mono-custom uppercase tracking-widest text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-black uppercase tracking-[0.2em] text-white hover:text-zinc-300 flex items-center gap-2"
                  >
                    <span>Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-white/20 hover:bg-white hover:text-black transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/20 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-white" />
                <h3 className="text-xl font-black uppercase font-display">{activeProjectModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-8 overflow-y-auto space-y-6">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-56 object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-2">
                  OVERVIEW
                </h4>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {activeProjectModal.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-3">
                  KEY HIGHLIGHTS
                </h4>
                <ul className="space-y-2 text-xs uppercase tracking-wider font-mono-custom text-zinc-300">
                  {activeProjectModal.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white shrink-0 mt-1.5"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-3">
                  STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-widest font-mono-custom"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 border-t border-white/10 flex justify-end gap-3 bg-zinc-950">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-6 py-2.5 border border-white/20 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
