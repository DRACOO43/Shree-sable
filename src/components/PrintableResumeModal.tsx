import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Wrench, Languages, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, TECHNICAL_SKILLS, TOOLS_TECHNOLOGIES, SPOKEN_LANGUAGES, SOFT_SKILLS } from '../data/resumeData';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const PrintableResumeModal: React.FC<PrintableResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white text-slate-900 shadow-2xl overflow-hidden my-auto print:shadow-none print:w-full print:max-w-none">
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white print:hidden">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-base">Shree Sable - Official Resume Preview</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-400 flex items-center gap-2 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body (Exact Layout matching original document structure) */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-900 font-sans print:p-6">
          {/* Header Banner */}
          <div className="border-b-2 border-slate-900 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-slate-900">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-slate-600 mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>
            <div className="text-xs sm:text-sm space-y-1 font-medium text-slate-700 text-center sm:text-right">
              <div>Phone: {PERSONAL_INFO.phone}</div>
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>Location: {PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* Profile Section */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Profile
            </h2>
            <p className="text-sm leading-relaxed text-slate-800">
              {PERSONAL_INFO.profileSummary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Internship */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Internship
                </h2>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    {EXPERIENCE_DATA[0].company}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    {EXPERIENCE_DATA[0].role} ({EXPERIENCE_DATA[0].duration})
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-700 list-disc list-inside">
                    {EXPERIENCE_DATA[0].responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Education
                </h2>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    {EDUCATION_DATA[0].institution}
                  </h3>
                  <div className="text-xs font-semibold text-slate-600">
                    {EDUCATION_DATA[0].degree}
                  </div>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">
                    ( {EDUCATION_DATA[0].period} )
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800">
                  {SPOKEN_LANGUAGES.map((l) => (
                    <span key={l.name} className="px-2.5 py-1 bg-slate-100 rounded border border-slate-300">
                      • {l.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Technical Skills
                </h2>
                <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                  {TECHNICAL_SKILLS.map((s) => (
                    <li key={s.name} className="flex justify-between items-center">
                      <span>• {s.name}</span>
                      <span className="text-slate-500 font-mono text-[11px]">{s.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Tools & Technologies
                </h2>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                  {TOOLS_TECHNOLOGIES.map((t) => (
                    <div key={t.name} className="p-1.5 bg-slate-100 rounded border border-slate-200 text-center">
                      {t.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Professional Skills
                </h2>
                <ul className="space-y-1 text-xs text-slate-800">
                  {SOFT_SKILLS.map((s) => (
                    <li key={s.name}>• {s.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
