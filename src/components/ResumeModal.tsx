import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, ExternalLink, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';
import { experiencesData } from '../data/experiences';
import { skillGroupsData } from '../data/skills';
import { certificationsData } from '../data/certifications';
import { educationData } from '../data/education';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#FAF8F5] text-[#1C1917] shadow-2xl flex flex-col border border-[#1C1917]/15 overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1917]/10 bg-[#F4EFEB] shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8B2616]">
              Verified Resume
            </span>
            <span className="text-[#A8A29E]">·</span>
            <span className="text-xs text-[#57534E]">Nakshatra Jaysing Pachpund</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#1C1917]/15 hover:bg-[#FAF8F5] transition-colors rounded-sm"
              title="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-white border border-[#1C1917]/15 hover:bg-[#FAF8F5] transition-colors rounded-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#EBE5DE] transition-colors rounded-sm ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-[#1C1917]/15 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
                NAKSHATRA JAYSING PACHPUND
              </h1>
              <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
                Marketing &amp; Brand Strategist
              </span>
            </div>

            <p className="text-sm font-medium text-[#57534E] leading-relaxed max-w-2xl">
              Marketing strategist focused on brand positioning, digital growth, consumer insights, and audience-first storytelling. Combining creative storytelling with consumer research to develop practical marketing strategies.
            </p>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#57534E] pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#8B2616]" />
                <a href={`mailto:${profileData.email}`} className="hover:underline">
                  {profileData.email}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#8B2616]" />
                <a href={`tel:${profileData.phone}`} className="hover:underline">
                  {profileData.phone}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B2616]" />
                <span>{profileData.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#8B2616]" />
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#8B2616] font-medium"
                >
                  {profileData.linkedinDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#8B2616] border-b border-[#1C1917]/10 pb-1.5">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <div>
                    <span className="font-semibold text-[#1C1917]">{edu.degree}</span>
                    <span className="text-[#57534E]"> — {edu.institution}, {edu.location}</span>
                    {edu.highlight && (
                      <p className="text-xs text-[#78716C] mt-0.5">{edu.highlight}</p>
                    )}
                  </div>
                  <div className="text-xs text-[#78716C] font-mono sm:text-right shrink-0">
                    <span>{edu.statusOrScore}</span> · <span>{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#8B2616] border-b border-[#1C1917]/10 pb-1.5">
              Professional Experience &amp; Internships
            </h2>
            <div className="space-y-6">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1917]">{exp.role}</h3>
                      <p className="text-xs text-[#57534E] font-medium">
                        {exp.company} {exp.project && `(${exp.project})`} ·{' '}
                        <span className="text-[#8B2616]">{exp.categoryLabel}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#78716C]">{exp.date}</span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#44403C] leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#1C1917] bg-[#F4EFEB] p-2 border-l-2 border-[#8B2616]">
                    <span className="font-semibold">Key Contribution:</span> {exp.keyContribution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#8B2616] border-b border-[#1C1917]/10 pb-1.5">
              Core Competencies &amp; Skills Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {skillGroupsData.map((group) => (
                <div key={group.number} className="space-y-1 p-3 bg-[#F4EFEB] rounded-sm">
                  <h3 className="font-bold text-[#1C1917] uppercase tracking-wider text-[11px]">
                    {group.number}. {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#57534E]">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx}>
                        {skill}
                        {sIdx < group.skills.length - 1 && <span className="text-[#A8A29E] ml-2">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#8B2616] border-b border-[#1C1917]/10 pb-1.5">
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3 border border-[#1C1917]/10 bg-white">
                  <div className="font-semibold text-[#1C1917]">{cert.title}</div>
                  <div className="text-[#8B2616] font-medium">{cert.issuer}</div>
                  <div className="text-[#78716C] text-[11px] mt-0.5">{cert.field}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Network Footnote */}
          <div className="pt-4 border-t border-[#1C1917]/10 text-xs text-[#78716C] flex justify-between items-center">
            <span>Professional Network: 2,000+ marketers, founders &amp; brand strategists on LinkedIn</span>
            <span className="font-mono">Expected BBA 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
};
