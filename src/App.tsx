import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { TerminalView } from './components/TerminalView';
import { PrintableResumeModal } from './components/PrintableResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-white selection:text-black ${darkMode ? 'dark bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'}`}>
      {/* Navigation Bar */}
      <Navbar
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          darkMode={darkMode}
        />

        <AboutSection darkMode={darkMode} />

        <ExperienceEducation darkMode={darkMode} />

        <SkillsSection darkMode={darkMode} />

        <ProjectsSection darkMode={darkMode} />

        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Modals & Overlays */}
      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        darkMode={darkMode}
      />

      <TerminalView
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        darkMode={darkMode}
      />

      <PrintableResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
