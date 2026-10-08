import React from 'react';
import { Link } from 'react-router-dom';
import { certificationsData } from '../data/certifications';
import { educationData } from '../data/education';
import { Award, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Continuous Learning</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Credentials &amp; Education</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          Verified credentials in{' '}
          <span className="italic font-serif text-[#8B2616]">digital marketing,</span>{' '}
          research, and business intelligence.
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Structured accreditations from Google, Great Learning, HP Life, and NISM establishing domain foundations across digital strategy, consumer research, AI business tooling, and financial fundamentals.
        </p>
      </section>

      {/* 1. Certifications Section - Clean Editorial Typographic Cards */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
              Industry Accreditations
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
              Professional Certifications
            </h2>
          </div>
          <span className="text-xs font-mono text-[#78716C]">
            5 VERIFIED PROGRAMMES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#FAF8F5] border border-[#1C1917]/10 p-6 flex flex-col justify-between space-y-6 hover:border-[#8B2616]/40 transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-[#1C1917]/10 pb-2">
                  <span className="text-xs font-semibold text-[#8B2616] uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <Award className="w-4 h-4 text-[#8B2616]" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1C1917] leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-[#78716C]">
                  {cert.field}
                </p>

                <p className="text-xs text-[#57534E] leading-relaxed pt-1">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1C1917]/10 flex items-center gap-2 text-xs text-[#1C1917] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B2616]" />
                <span>Verified Curriculum Completion</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Academic Background Section (Secondary to Experience) */}
      <section className="space-y-8 pt-6">
        <div className="flex items-center justify-between border-b border-[#1C1917]/10 pb-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
              Academic Background
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
              Educational Foundations
            </h2>
          </div>
          <span className="text-xs font-mono text-[#78716C]">
            DEGREE &amp; SECONDARY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                  <span>{edu.year}</span>
                  <span className="text-[#8B2616] font-semibold">{edu.statusOrScore}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                  {edu.degree}
                </h3>
                <p className="text-xs text-[#57534E]">
                  {edu.institution}, {edu.location}
                </p>
              </div>

              {edu.highlight && (
                <p className="text-xs text-[#78716C] pt-3 border-t border-[#1C1917]/10 italic">
                  {edu.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <div className="pt-8 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-[#78716C]">
          Looking to review complete academic documents or verified certificates?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
        >
          <span>Request Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
