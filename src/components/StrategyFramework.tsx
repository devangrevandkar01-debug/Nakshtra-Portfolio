import React, { useState } from 'react';
import { marketingFrameworkSteps } from '../data/skills';
import { ArrowRight, CheckCircle2, Compass } from 'lucide-react';

export const StrategyFramework: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = marketingFrameworkSteps[activeStepIndex];

  return (
    <div className="bg-[#F4EFEB] border border-[#1C1917]/10 p-6 md:p-10 my-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#1C1917]/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8B2616] font-semibold mb-2">
            <Compass className="w-4 h-4" />
            <span>Signature Marketing Methodology</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#1C1917]">
            From Human Insight to Brand Traction
          </h3>
        </div>
        <p className="text-xs uppercase tracking-wider text-[#78716C] max-w-xs md:text-right">
          An 8-stage operational framework connecting consumer psychology with measurable market growth.
        </p>
      </div>

      {/* Horizontal / Wrapped Step Flow */}
      <div className="pt-8 pb-6 overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 min-w-[680px] lg:min-w-0">
          {marketingFrameworkSteps.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 border transition-all cursor-pointer relative group ${
                  isSelected
                    ? 'bg-[#1C1917] text-[#FAF8F5] border-[#1C1917] shadow-md'
                    : 'bg-[#FAF8F5] text-[#1C1917] border-[#1C1917]/10 hover:border-[#8B2616]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className={isSelected ? 'text-[#A8A29E]' : 'text-[#8B2616]'}>
                    {step.step}
                  </span>
                  {idx < marketingFrameworkSteps.length - 1 && (
                    <ArrowRight className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider">
                  {step.name}
                </div>
                {isSelected && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1C1917] rotate-45" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Deep Dive */}
      <div className="mt-4 p-6 bg-[#FAF8F5] border border-[#1C1917]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#8B2616] font-semibold">
              STAGE {activeStep.step} OF 08
            </span>
            <span className="text-[#A8A29E]">·</span>
            <span className="text-xs uppercase tracking-wider font-bold text-[#1C1917]">
              {activeStep.name}
            </span>
          </div>
          <p className="text-sm text-[#44403C] leading-relaxed">
            {activeStep.description}
          </p>
        </div>

        <div className="md:border-l md:border-[#1C1917]/10 md:pl-8 shrink-0 space-y-1 bg-[#F4EFEB] md:bg-transparent p-4 md:p-0 rounded-sm">
          <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-medium">
            Core Strategic Output
          </span>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917]">
            <CheckCircle2 className="w-4 h-4 text-[#8B2616]" />
            <span>{activeStep.deliverable}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
