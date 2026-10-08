import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find previous and next case studies
  const currentIndex = caseStudiesData.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudiesData[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudiesData.length - 1 ? caseStudiesData[currentIndex + 1] : null;

  const sections = [
    { number: '01', title: 'Overview', content: study.overview },
    { number: '02', title: 'Challenge', content: study.challenge },
    { number: '03', title: 'Research', content: study.research },
    { number: '04', title: 'Consumer Insight', content: study.consumerInsight, highlight: true },
    { number: '05', title: 'Strategy', content: study.strategy },
    { number: '06', title: 'Execution', content: study.execution },
    { number: '07', title: 'Learning', content: study.learning },
    { number: '08', title: 'Outcome', content: study.outcome },
  ];

  return (
    <article className="pt-28 pb-20 space-y-16 max-w-5xl mx-auto px-6 md:px-10">
      {/* Back button & Breadcrumb */}
      <div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] hover:text-[#8B2616] transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Case Header */}
      <header className="space-y-6 border-b border-[#1C1917]/10 pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>CASE STUDY 0{study.id}</span>
          <span className="text-[#A8A29E]">·</span>
          <span>{study.category}</span>
          <span className="text-[#A8A29E]">·</span>
          <span className="text-[#57534E]">{study.typeBadge}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] tracking-tight leading-[1.15]">
          {study.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#44403C] leading-relaxed max-w-3xl">
          {study.shortDescription}
        </p>
      </header>

      {/* Hero Media Visual with Fallback */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EBE5DE] border border-[#1C1917]/10">
        <img
          src={study.heroImage}
          alt={study.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-6 text-white text-xs font-mono tracking-widest uppercase">
          STRATEGIC CASE ARCHIVE · NAKSHATRA PACHPUND
        </div>
      </div>

      {/* Sequential Methodological Flow */}
      {study.flowSteps && (
        <section className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#8B2616] font-semibold block">
            Operational Progression
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {study.flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1 bg-white border border-[#1C1917]/10 font-medium text-[#1C1917]">
                  {step}
                </span>
                {idx < study.flowSteps!.length - 1 && (
                  <span className="text-[#8B2616] font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      {/* 8-Section Structured Case Analysis */}
      <div className="space-y-12 pt-4">
        {sections.map((section) => (
          <section
            key={section.number}
            className={`p-6 sm:p-8 border transition-colors ${
              section.highlight
                ? 'bg-[#F4EFEB] border-[#8B2616]/40 shadow-sm'
                : 'bg-[#FAF8F5] border-[#1C1917]/10'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-[#8B2616]">
                {section.number}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#78716C]">
                —
              </span>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[#1C1917]">
                {section.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              {section.content || 'Details available upon request.'}
            </p>
          </section>
        ))}
      </div>

      {/* Approach Breakdown if available */}
      {study.approach && (
        <section className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-4">
          <h3 className="text-xs uppercase tracking-widest font-bold text-[#8B2616]">
            Key Strategic Pillars
          </h3>
          <ul className="space-y-2 text-sm text-[#44403C]">
            {study.approach.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#8B2616] font-mono text-xs mt-0.5 font-bold">
                  0{idx + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Navigation to Previous / Next Case Study */}
      <nav className="pt-12 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          {prevStudy ? (
            <Link
              to={`/case-studies/${prevStudy.slug}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1917] hover:text-[#8B2616] transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev: {prevStudy.title}</span>
            </Link>
          ) : (
            <span className="text-xs text-[#A8A29E] uppercase tracking-widest">
              First Case Study
            </span>
          )}
        </div>

        <Link
          to="/contact"
          className="px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
        >
          Discuss This Case Study
        </Link>

        <div>
          {nextStudy ? (
            <Link
              to={`/case-studies/${nextStudy.slug}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1917] hover:text-[#8B2616] transition-colors font-semibold"
            >
              <span>Next: {nextStudy.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="text-xs text-[#A8A29E] uppercase tracking-widest">
              End of Case Studies
            </span>
          )}
        </div>
      </nav>
    </article>
  );
};
