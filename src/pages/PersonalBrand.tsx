import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { ArrowUpRight, ArrowRight, Linkedin, Sparkles, MessageSquare, Users, TrendingUp, Lightbulb } from 'lucide-react';

export const PersonalBrand: React.FC = () => {
  const contentPillars = [
    {
      title: 'Consumer Psychology',
      description: 'Analyzing what triggers brand-switching, cognitive biases in retail environments, and the emotional mechanics of consumer habit loops.',
      status: 'Ongoing Exploration',
    },
    {
      title: 'Brand Strategy & Differentiation',
      description: 'Why category creators win, how to avoid commoditization traps, and establishing defensible brand positioning.',
      status: 'Core Focus',
    },
    {
      title: 'Digital Marketing & Discoverability',
      description: 'Balancing intent-driven search engine visibility with organic community resonance across digital channels.',
      status: 'Field Experience',
    },
    {
      title: 'Social Media Dynamics',
      description: 'Dissecting algorithm shifts, audience fatigue, and creating content that invites dialogue rather than passive scrolling.',
      status: 'Active Publishing',
    },
    {
      title: 'Regional Market Trends',
      description: 'Understanding consumer nuance and distribution realities in emerging Tier 2 and Tier 3 Indian markets.',
      status: 'Research Focus',
    },
    {
      title: 'Audience-First SEO',
      description: 'Structuring content architectures that solve human user inquiries first, algorithm compliance second.',
      status: 'Operational Practice',
    },
  ];

  const brandFramework = [
    { step: '01', name: 'Content', role: 'Publishing qualitative observations & strategic marketing breakdowns' },
    { step: '02', name: 'Consistency', role: 'Maintaining deliberate cadence and sustained intellectual curiosity' },
    { step: '03', name: 'Professional Network', role: 'Connecting with 2,000+ marketers, brand strategists & founders' },
    { step: '04', name: 'Personal Brand', role: 'Establishing a reputation for thoughtful, research-backed perspective' },
    { step: '05', name: 'Industry Visibility', role: 'Attracting collaborative projects, client inquiries & career opportunities' },
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Personal Brand &amp; Digital Presence</span>
          <span className="text-[#A8A29E]">·</span>
          <span>LinkedIn Network</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          Building a Personal Brand in{' '}
          <span className="italic font-serif text-[#8B2616]">Marketing.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          {profileData.heroDescription} Through continuous professional sharing, I actively engage with industry practitioners across marketing strategy, branding, and consumer insights.
        </p>
      </section>

      {/* 1. LinkedIn Highlight Showcase */}
      <section className="bg-[#181615] text-[#FAF8F5] p-8 sm:p-12 md:p-16 border border-[#2C2927] rounded-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97706] font-mono">
            <Linkedin className="w-4 h-4" />
            <span>Professional Network Verification</span>
          </div>

          <div className="space-y-2">
            <div className="font-serif text-5xl sm:text-6xl font-light text-white tracking-tight tabular-nums">
              2,000+
            </div>
            <div className="text-base sm:text-lg text-[#FAF8F5] font-serif font-light">
              Marketers, founders, and brand strategists in professional network
            </div>
          </div>

          <p className="text-sm text-[#A8A29E] leading-relaxed">
            Built a professional LinkedIn network of 2,000+ marketers, founders, and brand strategists through consistent publishing focused on marketing, branding, and consumer psychology.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#181615] text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F5] hover:text-[#8B2616] transition-colors rounded-sm"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-[#78716C] font-mono">
              {profileData.linkedinDisplay}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Visual Representation: Content to Visibility Framework */}
      <section className="space-y-6">
        <div className="border-b border-[#1C1917]/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block mb-1">
            Network Architecture
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
            How the Personal Brand Operates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {brandFramework.map((item, idx) => (
            <div
              key={item.step}
              className="p-5 bg-[#FAF8F5] border border-[#1C1917]/10 space-y-3 relative group hover:border-[#8B2616]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8B2616]">
                <span>STAGE {item.step}</span>
                {idx < brandFramework.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#A8A29E] hidden lg:block" />
                )}
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#1C1917]">
                {item.name}
              </h3>

              <p className="text-xs text-[#57534E] leading-relaxed">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Ideas I Think About (Thought Leadership) */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1C1917]/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block mb-1">
              Intellectual Curiosity &amp; Research Themes
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
              Ideas I Think About
            </h2>
          </div>
          <span className="text-xs font-mono text-[#78716C]">
            RESEARCH TOPICS &amp; ESSAY FOCUS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] border border-[#1C1917]/10 p-6 flex flex-col justify-between space-y-4 hover:border-[#8B2616]/40 transition-colors shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8B2616]">
                  <span>THEME 0{idx + 1}</span>
                  <span className="text-[#78716C] text-[11px]">{pillar.status}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1C1917]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1C1917]/10 text-[11px] text-[#A8A29E] font-mono italic">
                In-depth essays &amp; breakdowns coming soon.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Collaboration CTA */}
      <section className="pt-8 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-[#78716C]">
          Interested in discussing a marketing topic or collaborating on research?
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
        >
          <span>Start a Dialogue</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
};
