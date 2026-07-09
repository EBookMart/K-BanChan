"use client";

import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { ArrowRight, ArrowLeft, Flame, Sparkles } from "lucide-react";

interface HotBannerNavProps {
  locale: string;
}

export default function HotBannerNav({ locale }: HotBannerNavProps) {
  const pathname = usePathname();
  const isSummerPage = pathname?.includes("summer-korean-foods-10") ?? false;
  const isRtl = locale === "ar";

  const texts = {
    ko: {
      toSummer: "시원한 여름철 한국음식 10선 보기",
      toHot8: "실시간 인기 반찬 8선 보기",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    en: {
      toSummer: "Explore 10 Summer Korean Foods",
      toHot8: "Explore Top 8 Dishes",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    ja: {
      toSummer: "夏の韓国料理10選を見る",
      toHot8: "人気おかず8選を見る",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    zh: {
      toSummer: "探索夏日韩食10选",
      toHot8: "探索人气伴餐8选",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    es: {
      toSummer: "Explorar 10 comidas de verano",
      toHot8: "Explorar los 8 mejores platos",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    fr: {
      toSummer: "Découvrir 10 plats d'été",
      toHot8: "Découvrir les 8 Meilleurs Plats",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    ar: {
      toSummer: "استكشف 10 أطباق صيفية",
      toHot8: "استكشف أفضل ٨ أطباق",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    },
    ru: {
      toSummer: "Посмотреть 10 летних блюд",
      toHot8: "Посмотреть 8 лучших блюд",
      subHot8: "TOP 8 DISHES",
      subSummer: "Summer Curation",
    }
  };

  const t = texts[locale as keyof typeof texts] || texts["en"];

  // 방향 아이콘 논리
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackwardIcon = isRtl ? ArrowRight : ArrowLeft;

  if (isSummerPage) {
    return (
      <Link
        href="/hot"
        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-950/30 to-slate-900/40 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300 w-full shadow-lg hover:shadow-rose-500/10 my-6"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <div className="p-2.5 rounded-full bg-rose-500/20 text-rose-400 group-hover:scale-110 transition-transform">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] text-rose-400/80 font-bold uppercase tracking-widest mb-0.5">
              {t.subHot8}
            </div>
            <div className="text-sm md:text-base font-bold text-rose-100 group-hover:text-white transition-colors">
              {t.toHot8}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-rose-400/80 group-hover:text-rose-300 transition-colors self-end sm:self-auto">
          <span>Go</span>
          <BackwardIcon className={`w-4 h-4 transform transition-transform ${isRtl ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`} />
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/hot/summer-korean-foods-10"
      className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/30 to-slate-900/40 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 w-full shadow-lg hover:shadow-cyan-500/10 mb-8"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="flex items-center gap-3 mb-2 sm:mb-0">
        <div className="p-2.5 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <div className="text-[10px] text-cyan-400/80 font-bold uppercase tracking-widest mb-0.5">
            {t.subSummer}
          </div>
          <div className="text-sm md:text-base font-bold text-cyan-100 group-hover:text-white transition-colors">
            {t.toSummer}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-300 transition-colors self-end sm:self-auto">
        <span>Go</span>
        <ForwardIcon className={`w-4 h-4 transform transition-transform ${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
      </div>
    </Link>
  );
}
