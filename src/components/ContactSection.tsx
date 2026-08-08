import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors border-t border-white/10 ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F4F4F5] text-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.4em] font-bold font-mono-custom text-zinc-400 mb-2">
            006 / CONNECT & COLLABORATE
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] font-display">
            GET IN TOUCH
          </h2>
          <div className="h-[2px] w-24 bg-white mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-zinc-900/80 border border-white/10 text-white">
              <h3 className="text-xl font-black uppercase font-display mb-6">CONTACT DETAILS</h3>

              <div className="space-y-4">
                {/* Phone Card */}
                <div className="p-4 bg-black border border-white/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 mb-1">
                      PHONE NUMBER
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-bold text-sm font-mono-custom text-white hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email Card */}
                <div className="p-4 bg-black border border-white/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 mb-1">
                      EMAIL ADDRESS
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-xs sm:text-sm font-mono-custom text-white hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 bg-black border border-white/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-custom uppercase tracking-widest text-zinc-400 mb-1">
                      INSTITUTE LOCATION
                    </div>
                    <div className="font-bold text-xs sm:text-sm font-mono-custom text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-zinc-400 mb-4">
                  CONNECT ONLINE:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-white/20 bg-black text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-white/20 bg-black text-xs font-bold uppercase tracking-[0.2em] font-mono-custom text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-zinc-900/80 border border-white/10 text-white">
              <h3 className="text-xl font-black uppercase font-display mb-2">SEND DIRECT MESSAGE</h3>
              <p className="text-xs font-mono-custom text-zinc-400 uppercase tracking-wider mb-6">
                Fill out the fields below to reach Shree Sable directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="NAME"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="EMAIL"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mb-2">
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mb-2">
                      SUBJECT
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
                    >
                      <option value="General Inquiry">GENERAL INQUIRY</option>
                      <option value="Internship / Role Offer">INTERNSHIP OFFER</option>
                      <option value="Project Collaboration">PROJECT COLLABORATION</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold font-mono-custom uppercase tracking-widest text-zinc-400 mb-2">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="WRITE YOUR MESSAGE..."
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white text-xs font-mono-custom uppercase tracking-wider outline-none focus:border-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md p-8 bg-[#0A0A0A] border border-white/20 text-white text-center space-y-4">
            <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto text-white">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase font-display">MESSAGE SENT!</h3>
            <p className="text-xs font-mono-custom text-zinc-400 leading-relaxed">
              Thank you for reaching out. Shree Sable has received your transmission and will get back to you promptly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-white text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-zinc-200"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
