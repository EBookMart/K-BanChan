"use client";

import React, { useState } from "react";
import { Paper } from "@/types/archive";
import { ChevronDown, ChevronUp, ExternalLink, FileText } from "lucide-react";

interface AcademicPapersListProps {
  papers: Paper[];
  locale: string;
  abstractLabel: string;
  linkLabel: string;
}

export default function AcademicPapersList({
  papers,
  locale,
  abstractLabel,
  linkLabel,
}: AcademicPapersListProps) {
  // 열려 있는 논문 초록의 ID 목록을 관리하는 상태
  const [openAbstracts, setOpenAbstracts] = useState<Record<string, boolean>>({});

  const toggleAbstract = (id: string) => {
    setOpenAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!papers || papers.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm font-light">
        No academic references available for this section.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {papers.map((paper) => {
        const isOpen = !!openAbstracts[paper.id];
        const paperTitle = paper.title[locale] || paper.title["en"];
        const paperAuthors = paper.authors[locale] || paper.authors["en"];
        const paperPublication = paper.publication[locale] || paper.publication["en"];
        const paperAbstract = paper.abstract[locale] || paper.abstract["en"];

        return (
          <div
            key={paper.id}
            className="p-5 md:p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300"
          >
            {/* 논문 기본 정보 */}
            <div className="flex flex-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400 shrink-0 h-10 w-10 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                    {paper.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {paper.year}
                  </span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white leading-snug">
                  {paperTitle}
                </h4>
                <p className="text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">{paperAuthors}</span>
                  <span className="mx-1.5 text-slate-600">•</span>
                  <span className="italic text-slate-400">{paperPublication}</span>
                </p>
              </div>
            </div>

            {/* 초록 및 링크 액션 버튼 */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={() => toggleAbstract(paper.id)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-800"
              >
                <span>{abstractLabel}</span>
                {isOpen ? (
                  <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>

              {paper.url && (
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-emerald-950/20 border border-emerald-900/30 hover:border-emerald-500/30"
                >
                  <span>{linkLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* 초록 텍스트 영역 (부드러운 열고 닫힘) */}
            {isOpen && (
              <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900 text-xs md:text-sm text-slate-400 leading-relaxed font-light animate-fadeIn">
                <strong className="block text-slate-300 mb-2 font-semibold uppercase tracking-wider text-[10px]">
                  Abstract / Summary
                </strong>
                {paperAbstract}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
