"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { articles, Article } from "@/data/articles";
import { ArrowRight } from "lucide-react";

interface SecretCodeCardsProps {
  locale: string;
}

export default function SecretCodeCards({ locale }: SecretCodeCardsProps) {
  const t = useTranslations("articles");

  // 각 slug에 어울리는 오방색 컬러칩 데코를 만듭니다.
  const getObangsaekBadge = (art: Article) => {
    const dir = art.direction[locale] || art.direction["en"];
    const col = art.color[locale] || art.color["en"];
    const elem = art.element[locale] || art.element["en"];

    let badgeBg = "";
    let badgeText = "";

    switch (art.slug) {
      case "yaksik-dongwon": // 청/녹
        badgeBg = "bg-emerald-950/50 border-emerald-500/30";
        badgeText = "text-emerald-400";
        break;
      case "yukmi": // 적
        badgeBg = "bg-red-950/50 border-red-500/30";
        badgeText = "text-red-400";
        break;
      case "obangsaek": // 황
        badgeBg = "bg-amber-950/50 border-amber-500/30";
        badgeText = "text-amber-400";
        break;
      case "nanum": // 백
        badgeBg = "bg-slate-800/40 border-slate-400/30";
        badgeText = "text-slate-200";
        break;
      case "ingredients-terroir": // 흑
        badgeBg = "bg-neutral-900 border-neutral-700/50";
        badgeText = "text-neutral-400";
        break;
      default:
        badgeBg = "bg-slate-900 border-slate-800";
        badgeText = "text-slate-400";
    }

    return (
      <div className={`inline-flex flex-wrap items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold ${badgeBg} ${badgeText}`}>
        <span>{dir}</span>
        <span className="opacity-50">•</span>
        <span>{elem}</span>
        <span className="opacity-50">•</span>
        <span>{col}</span>
      </div>
    );
  };

  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-b from-slate-950 to-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* 섹션 헤더 - 서브카피는 요구사항에 따라 완전히 삭제 */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            {t("index_title")}
          </h2>
        </div>

        {/* 5개 카드 그리드 (모바일 1열, 태블릿 2열, 데스크톱 5열) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {articles.map((art) => {
            const titleText = art.title[locale] || art.title["en"];
            const subtitleText = art.subtitle[locale] || art.subtitle["en"];
            const summaryText = art.summary[locale] || art.summary["en"];
            
            // 호버 테두리 및 그림자 효과 지정
            let hoverRing = "";
            let cardBg = "bg-slate-900/40 border-slate-800/80";

            switch (art.slug) {
              case "yaksik-dongwon":
                hoverRing = "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]";
                break;
              case "yukmi":
                hoverRing = "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]";
                break;
              case "obangsaek":
                hoverRing = "hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]";
                break;
              case "nanum":
                hoverRing = "hover:border-slate-400/50 hover:shadow-[0_0_20px_rgba(148,163,184,0.15)]";
                break;
              case "ingredients-terroir":
                hoverRing = "hover:border-neutral-500/50 hover:shadow-[0_0_20px_rgba(115,115,115,0.15)]";
                cardBg = "bg-neutral-950/60 border-neutral-900";
                break;
            }

            return (
              <div
                key={art.slug}
                className={`flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 ${cardBg} ${hoverRing}`}
              >
                <div>


                  {/* 제목 */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-snug">
                    {titleText}
                  </h3>

                  {/* 부제 (회색 톤 부제) */}
                  <p className="text-xs text-slate-500 font-medium mb-3 leading-normal">
                    {subtitleText}
                  </p>

                  {/* 요약 설명문 (3~4줄로 통일된 레이아웃) */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                    {summaryText}
                  </p>
                </div>

                {/* 구분선 및 전문 읽기 CTA 버튼 */}
                <div>
                  <hr className="border-t border-white/10 my-4" />
                  <Link
                    href={`/articles/${art.slug}`}
                    className={`inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 w-full rounded-full border border-white/20 hover:bg-white/5 transition-all ${art.textClass}`}
                  >
                    <span>{t("read_full_article")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
