import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillGroupsData } from '../data/skills';
import { StrategyFramework } from '../components/StrategyFramework';
import { Search, Compass, Check, ArrowRight } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const filteredGroups = skillGroupsData.map((group) => {
    const matchesGroup = selectedGroup === 'all' || selectedGroup === group.number;
    const matchingSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      visible: matchesGroup && (searchQuery === '' || matchingSkills.length > 0),
      filteredSkills: searchQuery === '' ? group.skills : matchingSkills,
    };
  }).filter((g) => g.visible);

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-6 md:px-10">
      {/* Header */}
      <section className="space-y-6 max-w-4xl border-b border-[#1C1917]/10 pb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold">
          <span>Competency Matrix</span>
          <span className="text-[#A8A29E]">·</span>
          <span>Strategic Capabilities</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
          An integrated skillset bridging{' '}
          <span className="italic font-serif text-[#8B2616]">creative intuition</span> and{' '}
          <span className="italic font-serif text-[#8B2616]">analytical rigor.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
          Categorized across five core disciplines: from high-level brand architecture to qualitative consumer research, search optimization, and performance analysis.
        </p>

        {/* Search & Filter Controls */}
        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specific skill (e.g. SEO, Positioning, Research)..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#1C1917]/15 text-xs text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B2616] rounded-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedGroup('all')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border rounded-sm ${
                selectedGroup === 'all'
                  ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]'
                  : 'bg-white text-[#57534E] border-[#1C1917]/15 hover:border-[#8B2616]'
              }`}
            >
              All (5)
            </button>
            {skillGroupsData.map((g) => (
              <button
                key={g.number}
                onClick={() => setSelectedGroup(g.number)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border rounded-sm ${
                  selectedGroup === g.number
                    ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]'
                    : 'bg-white text-[#57534E] border-[#1C1917]/15 hover:border-[#8B2616]'
                }`}
              >
                {g.number}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Strategy Framework */}
      <section>
        <StrategyFramework />
      </section>

      {/* Interactive Skills Matrix - Clean Unboxed Discipline */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-[#1C1917]/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#8B2616] font-semibold block mb-1">
            Categorized Capabilities
          </span>
          <h2 className="font-serif text-3xl font-normal text-[#1C1917] tracking-tight">
            Detailed Capability Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.number}
              className="bg-[#FAF8F5] border border-[#1C1917]/10 p-6 flex flex-col justify-between space-y-6 hover:border-[#8B2616]/40 transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8B2616] border-b border-[#1C1917]/10 pb-2">
                  <span>DISCIPLINE {group.number}</span>
                  <span className="text-[#A8A29E] font-sans text-[11px]">{group.skills.length} Competencies</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#1C1917]">
                  {group.category}
                </h3>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills List without Pill Enclosures */}
              <div className="space-y-2 pt-2 border-t border-[#1C1917]/10">
                <span className="text-[10px] uppercase tracking-widest text-[#78716C] font-mono block">
                  Core Competencies
                </span>
                <ul className="space-y-2 text-xs text-[#1C1917]">
                  {group.filteredSkills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#8B2616] font-bold text-xs mt-0.5">•</span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Step */}
      <section className="pt-8 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-[#78716C]">
          Want to see how these capabilities translate into real business case studies?
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#8B2616] transition-colors rounded-sm"
        >
          <span>Explore Case Studies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
};
