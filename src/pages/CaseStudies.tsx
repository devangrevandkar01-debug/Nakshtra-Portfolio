import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';
import { ArrowRight, Compass, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Case Studies', value: 'all' },
    { label: 'Brand Strategy', value: 'Brand Strategy' },
    { label: 'Consumer Research', value: 'Consumer Research' },
    { label: 'Live Brand Activation', value: 'Live Brand Activation' },
    { label: 'Market Research', value: 'Market Research' },
  ];

  const filteredStudies = caseStudiesData.filter((study) => {
    if (filter === 'all') return true;
    return study.categoryTag === filter;
  });

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Strategic Work &amp; Research</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Marketing Case Studies</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          Turning consumer insights into{' '}
          <span className="italic font-serif text-[#8B2616]">brands people remember.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Detailed breakdowns of strategic positioning, consumer psychology audits, on-ground venture launches, and market entry research. Each case study documents the complete journey from initial problem to strategic outcome.
        </p>

        {/* Filter controls */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border rounded-sm ${
                filter === cat.value
                  ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#1C1917]/15 hover:border-[#8B2616] hover:text-[#1C1917]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid - High-End Large Editorial Cards */}
      <section className="space-y-16">
        {filteredStudies.map((study, idx) => (
          <article
            key={study.id}
            className="bg-[#FAF8F5] border border-[#1C1917]/10 overflow-hidden shadow-sm hover:border-[#8B2616]/40 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Column (Left) */}
              <div className="lg:col-span-5 relative bg-[#EBE5DE] min-h-[320px] lg:min-h-[440px] overflow-hidden group">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono tracking-wider uppercase">
                  CASE STUDY 0{study.id}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D6D3D1] font-medium block">
                    {study.typeBadge}
                  </span>
                  <div className="text-sm font-serif font-light text-white/90 truncate">
                    {study.category}
                  </div>
                </div>
              </div>

              {/* Information Column (Right) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
                      {study.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] leading-tight">
                      <Link
                        to={`/case-studies/${study.slug}`}
                        className="hover:text-[#8B2616] transition-colors"
                      >
                        {study.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-[#44403C] leading-relaxed">
                      {study.shortDescription}
                    </p>
                  </div>

                  {/* Strategic Flow Strip */}
                  {study.flowSteps && (
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-[#78716C] block mb-2">
                        Methodological Sequence
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#57534E]">
                        {study.flowSteps.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="bg-[#F4EFEB] px-2.5 py-1 border border-[#1C1917]/10 text-[11px] font-medium">
                              {step}
                            </span>
                            {sIdx < study.flowSteps!.length - 1 && (
                              <span className="text-[#A8A29E] text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Problem vs Insight vs Strategy Snapshot */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 bg-[#F4EFEB] border-l-2 border-[#1C1917]/30 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-[#57534E] block">
                        The Challenge
                      </span>
                      <p className="text-xs text-[#1C1917] leading-snug line-clamp-3">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#F4EFEB] border-l-2 border-[#8B2616] space-y-1">
                      <span className="text-[10px] uppercase tracking-widest font-mono text-[#8B2616] block font-semibold">
                        The Core Insight
                      </span>
                      <p className="text-xs text-[#1C1917] leading-snug line-clamp-3">
                        {study.consumerInsight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer action bar */}
                <div className="pt-4 border-t border-[#1C1917]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#78716C]">
                    <span className="font-semibold text-[#1C1917]">Outcome: </span>
                    <span>{study.outcome}</span>
                  </div>

                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm self-start sm:self-auto shrink-0"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
