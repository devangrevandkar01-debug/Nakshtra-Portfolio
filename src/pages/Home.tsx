import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, FileText, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';
import { caseStudiesData } from '../data/caseStudies';
import { experiencesData } from '../data/experiences';
import { StrategyFramework } from '../components/StrategyFramework';
import heroStrategyBoard from '../assets/images/hero_strategy_board_1790961653613.jpg';

interface HomeProps {
  onOpenResume: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenResume }) => {
  return (
    <div className="space-y-24 md:space-y-32 pt-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
              <span>Marketing</span>
              <span className="text-[#A8A29E]">·</span>
              <span>Branding</span>
              <span className="text-[#A8A29E]">·</span>
              <span>Consumer Insights</span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
              Building brands around what people{' '}
              <span className="italic font-serif text-[#8B2616]">actually care about.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-[#44403C] font-normal leading-relaxed max-w-xl">
              Marketing strategist focused on brand positioning, digital growth, consumer insights, and audience-first storytelling.
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl">
              I combine creative storytelling with consumer research to develop practical marketing strategies that connect brands with the right audiences.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm shadow-sm group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1C1917]/25 text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:border-[#8B2616] hover:text-[#8B2616] hover:bg-[#F4EFEB] transition-colors rounded-sm"
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Artistic Marketing Strategy Board Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#F4EFEB] border border-[#1C1917]/10 p-4 md:p-6 shadow-[0_20px_40px_-15px_rgba(28,25,23,0.07)] rounded-sm overflow-hidden group">
              {/* Strategy Board Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBE5DE] rounded-sm">
                <img
                  src={heroStrategyBoard}
                  alt="Tactile brand strategy and consumer insight planning board"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating Strategic Sequence Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono tracking-wider bg-[#181615]/80 backdrop-blur-md px-3 py-2 flex items-center justify-between border border-white/10 rounded-sm">
                  <span className="text-[#D6D3D1]">STRATEGIC FLOW:</span>
                  <span className="text-white font-medium">
                    BRAND → CONSUMER → INSIGHT → GROWTH
                  </span>
                </div>
              </div>

              {/* Floating Strategy Snippet Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#FAF8F5] border border-[#1C1917]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#8B2616] font-mono block mb-1">
                    Consumer Lens
                  </span>
                  <p className="text-[#1C1917] font-medium leading-tight">
                    "Decisions stem from identity, not features."
                  </p>
                </div>
                <div className="p-3 bg-[#FAF8F5] border border-[#1C1917]/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#8B2616] font-mono block mb-1">
                    Market Focus
                  </span>
                  <p className="text-[#1C1917] font-medium leading-tight">
                    Positioning for organic resonance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MINIMAL VERIFIED STATISTICS STRIP */}
      <section className="border-y border-[#1C1917]/10 bg-[#F4EFEB]/60 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="space-y-1.5 border-l-2 border-[#8B2616] pl-4 sm:pl-6"
              >
                <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#57534E]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE EDITORIAL PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 sm:p-12 md:p-16 bg-[#181615] text-[#FAF8F5] relative overflow-hidden rounded-sm">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-[#A8A29E] block">
              Core Strategic Philosophy
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-white">
              "{profileData.philosophy}"
            </blockquote>
            <p className="text-sm text-[#A8A29E] max-w-xl leading-relaxed">
              Effective marketing bridges rigorous qualitative understanding with sharp narrative execution. It doesn't scream for attention; it creates lasting resonance by addressing the genuine concerns and aspirations of its audience.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FAF8F5] hover:text-[#D97706] font-semibold transition-colors"
              >
                <span>Read About My Approach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1917]/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold mb-2">
              <span>Selected Works</span>
              <span className="text-[#A8A29E]">·</span>
              <span>Case Studies &amp; Research</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
              Strategic Work in Action
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2616] font-semibold hover:text-[#1C1917] transition-colors"
          >
            <span>View All 4 Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2x2 Editorial Case Study Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudiesData.slice(0, 4).map((study) => (
            <article
              key={study.id}
              className="bg-[#FAF8F5] border border-[#1C1917]/10 flex flex-col group hover:border-[#8B2616]/40 transition-colors"
            >
              {/* Media Slot with Zero-Broken Fallback */}
              <Link
                to={`/case-studies/${study.slug}`}
                className="relative aspect-[16/9] overflow-hidden bg-[#EBE5DE] block cursor-pointer"
              >
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 backdrop-blur-sm px-2.5 py-1">
                  {study.typeBadge}
                </div>
              </Link>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#8B2616] font-semibold">
                    {study.category}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] group-hover:text-[#8B2616] transition-colors">
                    <Link to={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {study.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#78716C]">CASE 0{study.id}</span>
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] group-hover:text-[#8B2616] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. STRATEGY FRAMEWORK SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <StrategyFramework />
      </section>

      {/* 6. PROFESSIONAL EXPERIENCE PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1917]/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold mb-2">
              Career Trajectory
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917] tracking-tight">
              Verified Experience
            </h2>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2616] font-semibold hover:text-[#1C1917] transition-colors"
          >
            <span>View Full Experience Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiencesData.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 flex flex-col justify-between space-y-4 hover:border-[#1C1917]/30 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-[#78716C] font-mono">
                  <span>{exp.date}</span>
                  <span className="text-[#8B2616] font-sans font-semibold uppercase text-[10px]">
                    {exp.categoryLabel}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
                  {exp.role}
                </h3>
                <p className="text-xs text-[#57534E] font-medium">
                  {exp.company}
                </p>
                <p className="text-xs text-[#78716C] leading-relaxed pt-1">
                  {exp.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1C1917]/10 text-xs text-[#44403C]">
                <span className="font-semibold text-[#1C1917]">Contribution: </span>
                {exp.keyContribution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INVITATION / CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="p-8 sm:p-12 md:p-16 border border-[#1C1917]/15 bg-[#F4EFEB] flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-sm">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
              Open to Opportunities &amp; Collaborations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1917]">
              Have a brand challenge or looking for a marketing strategist?
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Available for brand strategy, digital marketing, market research engagements, and forward-thinking marketing roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#1C1917]/25 text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:border-[#1C1917] transition-colors rounded-sm bg-white"
            >
              <span>LinkedIn Network</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
