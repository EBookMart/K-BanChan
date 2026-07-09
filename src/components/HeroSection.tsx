"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, BookOpen, Utensils } from "lucide-react";
import { aiImages } from "@/data/ai-images";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const altText = aiImages.homeHero.alt[locale as keyof typeof aiImages.homeHero.alt] || aiImages.homeHero.alt.en;

  return (
    <section className="relative w-full py-6 md:py-16 bg-slate-950 flex flex-col items-center justify-center overflow-hidden border-b border-slate-900/80">
      {/* 백그라운드 오방색 그라디언트 및 조명 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/60 via-slate-950 to-slate-950 z-0" />
      
      {/* 은은한 오방색 원형 조명 (황, 적, 청, 백) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 h-80 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 h-80 bg-red-900/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 컨텐츠 영역 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center mb-4 md:mb-6">
        {/* 슬로건 뱃지 */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
          Premium K-Food Standard
        </span>

        {/* 대형 브랜드 로고 배치 */}
        <div className="mb-3 md:mb-4">
          <Image
            src="/logos/logo-kbanchan-final.png"
            alt={t("logo_alt")}
            width={600}
            height={600}
            priority
            className="w-[280px] md:w-[460px] lg:w-[600px] h-auto mx-auto"
            style={{ 
              filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.6))' 
            }}
          />
        </div>

        {/* 로케일별 다국어 서브 카피 */}
        <p className="text-sm md:text-xl text-slate-300 font-light mb-4 md:mb-6 max-w-2xl leading-relaxed">
          {t("subtitle")}
        </p>

        {/* 두 개의 CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {/* 반찬 50선 보기 */}
          <Link
            href="/banchan"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-950/20 hover:shadow-amber-950/30 transform hover:-translate-y-0.5 transition-all text-sm md:text-base"
          >
            <Utensils className="w-4 h-4 md:w-5 md:h-5" />
            <span>{t("cta_banchan")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* 5대 특성 읽기 */}
          <Link
            href="/articles"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-700 text-slate-200 font-semibold transform hover:-translate-y-0.5 transition-all text-sm md:text-base"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
            <span>{t("cta_articles")}</span>
          </Link>
        </div>
      </div>

      {/* 메인 히어로 이미지 블록 */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src={aiImages.homeHero.src}
            alt={altText}
            fill
            priority
            className="object-cover responsive-object-fit"
            style={{
              "--object-position-mobile": aiImages.homeHero.objectPositionMobile || "center",
              "--object-position-desktop": aiImages.homeHero.objectPositionDesktop || "center",
            } as React.CSSProperties}
            sizes="(max-w-1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
