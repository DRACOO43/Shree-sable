import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, EXPERIENCE_DATA, EDUCATION_DATA, FEATURED_PROJECTS } from '../data/resumeData';

interface TerminalViewProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalView: React.FC<TerminalViewProps> = ({ isOpen, onClose, darkMode }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="text-emerald-400 font-mono text-xs sm:text-sm space-y-1">
          <p>Shree Sable CLI [Version 1.0.0]</p>
          <p>Type <span className="text-cyan-300 font-bold">help</span> to list all available commands.</p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs sm:text-sm text-slate-300 font-mono">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-bold">bio</span> - Display Shree Sable's summary profile</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - Display programming skills & tools</p>
            <p><span className="text-emerald-400 font-bold">education</span> - Display college & diploma details</p>
            <p><span className="text-emerald-400 font-bold">internship</span> - Display Pro Azure internship info</p>
            <p><span className="text-emerald-400 font-bold">projects</span> - Display top projects</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Display email and phone number</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal logs</p>
            <p><span className="text-emerald-400 font-bold">sudo hire</span> - Executive recruiter trigger</p>
          </div>
        );
        break;

      case 'bio':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-1">
            <p className="text-cyan-400 font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-slate-400">{PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.profileSummary}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-2">
            <p className="text-cyan-400 font-bold">Technical Skills:</p>
            <p>• Languages: Python (90%), Java (82%), C (80%), MySQL (85%)</p>
            <p>• Tools: Git, GitHub, VS Code, Figma</p>
            <p>• Soft Skills: Strategic Planning, Scheduling, Communication</p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-1">
            <p className="text-indigo-400 font-bold">{EDUCATION_DATA[0].institution}</p>
            <p>{EDUCATION_DATA[0].degree} ({EDUCATION_DATA[0].period})</p>
          </div>
        );
        break;

      case 'internship':
      case 'experience':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-1">
            <p className="text-cyan-400 font-bold">{EXPERIENCE_DATA[0].company}</p>
            <p>Role: {EXPERIENCE_DATA[0].role} ({EXPERIENCE_DATA[0].duration})</p>
            <p>{EXPERIENCE_DATA[0].description}</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-2">
            {FEATURED_PROJECTS.map((p, idx) => (
              <p key={idx}>
                <span className="text-cyan-400 font-bold">{idx + 1}. {p.title}</span> - {p.shortDescription}
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs sm:text-sm text-slate-300 font-mono space-y-1">
            <p>Email: <span className="text-cyan-300">{PERSONAL_INFO.email}</span></p>
            <p>Phone: <span className="text-cyan-300">{PERSONAL_INFO.phone}</span></p>
            <p>Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'sudo hire':
        outputNode = (
          <div className="text-xs sm:text-sm text-emerald-400 font-mono font-bold space-y-1 p-3 border border-emerald-500/40 rounded bg-emerald-950/30">
            <p>🎉 ACCESS GRANTED! You have hired Shree Sable!</p>
            <p className="text-white font-normal">
              Shree is ready to bring AI/ML problem solving, full-stack enthusiasm, and dedication to your team.
            </p>
            <p className="text-cyan-300">Contact directly: {PERSONAL_INFO.email}</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs sm:text-sm text-rose-400 font-mono">
            Command not recognized: '{cleanCmd}'. Type 'help' for command list.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { cmd: inputVal, output: outputNode }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 text-slate-200 shadow-2xl overflow-hidden h-[80vh] flex flex-col font-mono">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-slate-400 font-semibold">
              shreesable@portfolio:~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1">
              {log.cmd !== 'welcome' && (
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="text-emerald-400">shree@portfolio:~$</span>
                  <span className="text-white font-semibold">{log.cmd}</span>
                </div>
              )}
              <div className="pl-2 border-l border-slate-800">{log.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-xs sm:text-sm">shree@portfolio:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'bio', 'skills', 'contact', 'sudo hire'..."
            className="flex-1 bg-transparent text-xs sm:text-sm text-white border-none outline-none font-mono"
            autoFocus
          />
          <button type="submit" className="p-1.5 rounded text-slate-400 hover:text-emerald-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
