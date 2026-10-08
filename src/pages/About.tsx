import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, MapPin, GraduationCap, Compass, Target, Brain } from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-6 md:px-10">
      {/* 1. Header / Editorial Lead */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>About Nakshatra Jaysing Pachpund</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Strategy &amp; Philosophy</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.15]">
          Strategy starts with <span className="italic font-serif text-[#8B2616]">understanding people.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#44403C] leading-relaxed font-normal">
          I am a Bachelor of Business Administration student and marketing strategist specializing in brand strategy, digital growth, consumer psychology, and market research.
        </p>
      </section>

      {/* 2. Core Triad & Strategic Approach */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-6 text-[#44403C] text-base leading-relaxed">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] tracking-tight">
            Connecting Consumer Insights with Tangible Growth
          </h2>

          <p>
            Too much of modern marketing is either purely subjective creativity without audience reality, or dry data analytics that misses the emotional heart of why people choose one brand over another.
          </p>

          <p>
            My work is grounded at the intersection of three disciplines:
          </p>

          <div className="p-6 bg-[#F4EFEB] border-l-2 border-[#8B2616] space-y-3 my-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8B2616] font-semibold">
              The Strategic Triad
            </div>
            <div className="text-base sm:text-lg font-serif italic text-[#1C1917]">
              Creative Storytelling <span className="text-[#8B2616] font-sans font-normal">×</span> Consumer Insights <span className="text-[#8B2616] font-sans font-normal">×</span> Marketing Strategy
            </div>
            <p className="text-xs text-[#57534E]">
              To engineer audience-first positioning that cuts through market noise and produces lasting brand preference.
            </p>
          </div>

          <p>
            Whether uncovering behavioral friction points in consumer decision cycles, planning multi-platform social editorial calendars, or mapping commercial entry opportunities across emerging Tier 2 and Tier 3 markets, I approach every project with research rigor, clear empathy, and disciplined execution.
          </p>

          <p>
            I believe brands should never scream for attention. When you deeply understand what people actually care about, your strategy becomes unmistakable.
          </p>
        </div>

        {/* Right Pillars */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              <Brain className="w-4 h-4" />
              <span>Consumer Psychology</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-[#1C1917]">
              Observing Real Behavior
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Moving beyond what consumers claim they do in surveys to uncover the emotional subconscious drivers behind their purchasing choices.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              <Compass className="w-4 h-4" />
              <span>Brand Positioning</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-[#1C1917]">
              Uncontested Mental Space
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Finding the single authentic category dimension that competitors overlook, giving the audience a clear reason to choose and remember the brand.
            </p>
          </div>

          <div className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              <Target className="w-4 h-4" />
              <span>Disciplined Execution</span>
            </div>
            <h3 className="font-serif text-lg font-medium text-[#1C1917]">
              Measurable Consistency
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Translating strategy into sustainable editorial schedules, search presence, and clear KPIs that hold campaign performance accountable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROFILE SNAPSHOT GRID */}
      <section className="space-y-6">
        <div className="border-b border-[#1C1917]/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block mb-1">
            Information Architecture
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
            Profile Snapshot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Education */}
          <div className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#1C1917]">
                Bachelor of Business Administration
              </h3>
              <p className="text-xs text-[#57534E]">
                Sanjay Ghodawat University, Kolhapur
              </p>
              <p className="text-xs font-mono text-[#8B2616] pt-1">
                Expected Graduation: 2027
              </p>
            </div>
          </div>

          {/* Card 2: Location */}
          <div className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#1C1917]">
                Malshiras, Solapur
              </h3>
              <p className="text-xs text-[#57534E]">
                Maharashtra, India
              </p>
              <p className="text-xs text-[#78716C] pt-1">
                Open to remote engagements &amp; hybrid marketing roles.
              </p>
            </div>
          </div>

          {/* Card 3: Focus Areas */}
          <div className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              Focus Areas
            </div>
            <ul className="space-y-1 text-xs text-[#44403C]">
              {profileData.focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#8B2616] font-mono text-[10px]">0{idx + 1}.</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Professional Interests */}
          <div className="p-6 bg-[#F4EFEB] border border-[#1C1917]/10 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#8B2616]">
              Professional Interests
            </div>
            <ul className="space-y-1 text-xs text-[#44403C]">
              {profileData.professionalInterests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#8B2616] font-mono text-[10px]">0{idx + 1}.</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FOUNDATION */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#1C1917]/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block mb-1">
            Academic Track Record
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
            Education &amp; Foundations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF8F5] border border-[#1C1917]/10 flex flex-col justify-between space-y-4"
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

      {/* Next Step Links */}
      <div className="pt-8 border-t border-[#1C1917]/10 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1917] hover:text-[#8B2616] font-semibold transition-colors"
        >
          <span>Explore Professional Experience</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1917] hover:text-[#8B2616] font-semibold transition-colors"
        >
          <span>Examine Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
