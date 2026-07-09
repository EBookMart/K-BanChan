"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { Article } from "@/data/articles";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  art: Article;
  locale: string;
  readMoreLabel: string;
}

export default function ArticleCard({
  art,
  locale,
  readMoreLabel,
}: ArticleCardProps) {
  const titleText = art.title[locale] || art.title["en"];
  const summaryText = art.summary[locale] || art.summary["en"];
  const contentText = art.content[locale] || art.content["en"];

  // 본문 앞부분 약 120자 추출
  const snippet = contentText.length > 120 ? contentText.substring(0, 120) + "..." : contentText;

  // 슬러그별 테마 정의
  let themeBg = "bg-slate-900/40 border-slate-800/80";
  let themeHover = "";
  let glowColor = "";

  switch (art.slug) {
    case "yaksik-dongwon":
      themeHover = "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]";
      glowColor = "bg-blue-500/10";
      break;
    case "yukmi":
      themeHover = "hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]";
      glowColor = "bg-red-500/10";
      break;
    case "obangsaek":
      themeHover = "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]";
      glowColor = "bg-amber-500/10";
      break;
    case "nanum":
      themeHover = "hover:border-slate-400/40 hover:shadow-[0_0_30px_rgba(148,163,184,0.15)]";
      glowColor = "bg-slate-400/10";
      break;
    case "ingredients-terroir":
      themeBg = "bg-neutral-950/60 border-neutral-900";
      themeHover = "hover:border-neutral-500/40 hover:shadow-[0_0_30px_rgba(115,115,115,0.15)]";
      glowColor = "bg-neutral-500/5";
      break;
  }

  return (
    <div
      className={`relative rounded-3xl border p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${themeBg} ${themeHover}`}
    >
      {/* 카드 배경 백라이트 효과 */}
      <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none ${glowColor}`} />

      {/* 본문 영역 (제목, 요약, 본문, 링크) */}
      <div className="w-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 tracking-tight">
            {titleText}
          </h3>
          <p className="text-sm text-slate-300 font-medium mb-4 italic">
            &ldquo;{summaryText}&rdquo;
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed mb-6">
            {snippet}
          </p>
        </div>

        <div>
          <Link
            href={`/articles/${art.slug}`}
            className={`inline-flex items-center gap-2 text-sm font-bold ${art.textClass} hover:opacity-80 transition-all group`}
          >
            <span>{readMoreLabel}</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
