import React, { useState, useEffect } from 'react';
import {
  Bot,
  FileText,
  Menu,
  X,
  Sparkles,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Phone,
  Moon,
  Sun,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface NavbarProps {
  onOpenAiAssistant: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAiAssistant,
  onOpenResumeModal,
  onOpenTerminal,
  darkMode,
  setDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: Code2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', id: 'skills', icon: GraduationCap },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-md'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
          >
            <div
              className={`w-9 h-9 flex items-center justify-center font-display font-black text-sm uppercase transition-colors tracking-widest ${
                darkMode
                  ? 'bg-white text-black group-hover:bg-zinc-200'
                  : 'bg-black text-white group-hover:bg-zinc-800'
              }`}
            >
              01
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-black text-sm sm:text-base leading-none uppercase tracking-[0.15em] transition-colors ${
                  darkMode ? 'text-white group-hover:text-zinc-300' : 'text-black group-hover:text-zinc-700'
                }`}
              >
                {PERSONAL_INFO.name}
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.25em] font-mono-custom mt-1 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-500'
                }`}
              >
                System Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all relative py-1 ${
                    isActive
                      ? darkMode
                        ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white'
                        : 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-500 hover:text-black'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Tools & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Button */}
            <button
              onClick={onOpenTerminal}
              id="terminal-toggle-btn"
              title="Open Terminal View"
              className={`px-3 py-1.5 border text-[10px] uppercase tracking-[0.2em] font-mono-custom font-bold transition-all flex items-center gap-1.5 ${
                darkMode
                  ? 'bg-zinc-900 border-white/20 text-emerald-400 hover:bg-white hover:text-black'
                  : 'bg-zinc-100 border-black/20 text-zinc-900 hover:bg-black hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">CLI</span>
            </button>

            {/* AI Copilot Button */}
            <button
              onClick={onOpenAiAssistant}
              id="ai-assistant-btn"
              className={`px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-black transition-all flex items-center gap-1.5 ${
                darkMode
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'bg-black text-white hover:bg-zinc-800'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Copilot</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              id="resume-modal-btn"
              className={`px-3 py-1.5 border text-[10px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1.5 ${
                darkMode
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-black/20 text-black hover:bg-black/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="theme-toggle-btn"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 border transition-colors ${
                darkMode
                  ? 'bg-zinc-900 border-white/20 text-zinc-300 hover:bg-white hover:text-black'
                  : 'bg-zinc-100 border-black/20 text-zinc-800 hover:bg-black hover:text-white'
              }`}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-hamburger"
              className={`md:hidden p-2 border ${
                darkMode
                  ? 'bg-zinc-900 border-white/20 text-white'
                  : 'bg-zinc-100 border-black/20 text-black'
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b transition-all ${
            darkMode
              ? 'bg-slate-950/95 border-slate-800 text-slate-200'
              : 'bg-white/95 border-slate-200 text-slate-800'
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    darkMode
                      ? 'hover:bg-slate-800/80 text-slate-200'
                      : 'hover:bg-slate-100 text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-500" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-800/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Ask AI Assistant
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 px-3 rounded-lg border border-slate-700 text-sm font-medium flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View & Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
