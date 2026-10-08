import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { experiencesData } from '../data/experiences';
import { ArrowRight, Briefcase, Calendar, CheckCircle2, Building, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { label: 'All Engagements', value: 'all' },
    { label: 'Social Media & Brand', value: 'social' },
    { label: 'Digital Marketing & SEO', value: 'seo' },
    { label: 'Venture & Activation', value: 'launch' },
    { label: 'Market Research', value: 'research' },
  ];

  const filteredExperiences = experiencesData.filter((exp) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'social') return exp.categoryLabel.toLowerCase().includes('social') || exp.categoryLabel.toLowerCase().includes('branding');
    if (selectedFilter === 'seo') return exp.categoryLabel.toLowerCase().includes('seo') || exp.categoryLabel.toLowerCase().includes('digital');
    if (selectedFilter === 'launch') return exp.categoryLabel.toLowerCase().includes('launch');
    if (selectedFilter === 'research') return exp.categoryLabel.toLowerCase().includes('research');
    return true;
  });

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Career Track Record</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Professional Experience</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          Applied strategy, measurable execution, and{' '}
          <span className="italic font-serif text-[#8B2616]">hands-on leadership.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          From multi-platform agency content planning to launching an on-ground beverage venture and conducting regional commercial market intelligence, each engagement reflects a commitment to consumer-first thinking.
        </p>

        {/* Filter Tabs (Functional segmented controls) */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border rounded-sm ${
                selectedFilter === cat.value
                  ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#1C1917]/15 hover:border-[#8B2616] hover:text-[#1C1917]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Vertical Editorial Timeline */}
      <section className="relative">
        {/* Timeline subtle vertical hairline for desktop */}
        <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[1px] bg-[#1C1917]/15" />

        <div className="space-y-12 md:space-y-16">
          {filteredExperiences.map((exp, index) => (
            <article
              key={exp.id}
              className="relative md:pl-24 group transition-all"
            >
              {/* Timeline marker for desktop */}
              <div className="hidden md:flex absolute left-6 top-6 -translate-x-1/2 w-4 h-4 bg-[#FAF8F5] border-2 border-[#1C1917] group-hover:border-[#8B2616] group-hover:scale-125 transition-all items-center justify-center rounded-full">
                <div className="w-1.5 h-1.5 bg-[#8B2616] rounded-full" />
              </div>

              {/* Card Container */}
              <div className="bg-[#FAF8F5] border border-[#1C1917]/10 p-6 sm:p-10 space-y-6 hover:border-[#8B2616]/40 transition-colors shadow-sm">
                {/* Top Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#1C1917]/10 pb-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
                      <span>{exp.categoryLabel}</span>
                      {exp.project && (
                        <>
                          <span className="text-[#A8A29E]">·</span>
                          <span className="text-[#1C1917]">{exp.project}</span>
                        </>
                      )}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
                      {exp.role}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-[#57534E]">
                      <Building className="w-3.5 h-3.5 text-[#A8A29E]" />
                      <span className="font-medium text-[#1C1917]">{exp.company}</span>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#78716C] bg-[#F4EFEB] px-3 py-1.5 border border-[#1C1917]/10 self-start">
                    <Calendar className="w-3 h-3 text-[#8B2616]" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Description narrative */}
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
                    Core Operational Responsibilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#57534E]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5">
                        <span className="text-[#8B2616] mt-0.5 font-mono text-[10px] shrink-0">
                          —
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Contribution Highlight Box */}
                <div className="p-4 bg-[#F4EFEB] border-l-2 border-[#8B2616] text-xs text-[#1C1917] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#8B2616] mt-0.5 shrink-0" />
                  <div className="leading-relaxed">
                    <strong className="font-semibold text-[#1C1917] uppercase tracking-wider text-[11px] block sm:inline sm:mr-2">
                      Key Contribution:
                    </strong>
                    <span>{exp.keyContribution}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pt-8 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-[#78716C]">
          Interested in discussing specific campaign or research methodology?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
        >
          <span>Connect for Collaboration</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
};
