"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SimpleMarkdown from "./SimpleMarkdown";

interface SectionAccordionProps {
  id: string;
  numberLabel: string;
  title: string;
  paragraphs: string[];
  detail?: string;
  viewDetailLabel: string;
}

export default function SectionAccordion({
  id,
  numberLabel,
  title,
  paragraphs,
  detail,
  viewDetailLabel,
}: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={id} className="scroll-mt-32 md:scroll-mt-40 space-y-6">
      {/* Title & Accordion Toggle */}
      <div 
        className="cursor-pointer group border-b border-slate-800 pb-2 mt-12 mb-4 transition-colors hover:border-emerald-500/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-white flex flex-col md:flex-row md:items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-2">
            {numberLabel && <span className="text-emerald-500 font-mono">{numberLabel}</span>}
            <span>{title}</span>
          </div>
          
          <div className="flex items-center gap-2 text-base font-sans text-emerald-400 group-hover:text-emerald-300">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
            <span>{viewDetailLabel}</span>
            <ChevronDown className={`transition-transform duration-300 w-5 h-5 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </h2>
      </div>
      
      {/* Paragraphs (Always visible) */}
      <div className="space-y-4">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans">
            {p}
          </p>
        ))}
      </div>

      {/* Expanded Detail Content */}
      <div 
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {detail ? (
            <div className="mt-8 p-5 md:p-8 border border-slate-800 bg-slate-900/40 rounded-3xl shadow-inner shadow-slate-950">
              <SimpleMarkdown text={detail} />
            </div>
          ) : (
            <div className="mt-8 p-5 md:p-8 border border-slate-800 bg-slate-900/40 rounded-3xl flex items-center justify-center text-slate-500 italic">
              상세 내용이 아직 준비되지 않았습니다.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
