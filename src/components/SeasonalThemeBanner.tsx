"use client";

import React, { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { ArrowRight, ArrowLeft, Sparkles, Flame, Leaf, Search } from "lucide-react";

interface SeasonalThemeBannerProps {
  locale: string;
}

/**
 * [관리자 설정 영역]
 * 시기에 맞춰 테마를 변경하려면 아래 config 값을 수정하세요.
 */
export const seasonalConfig = {
  // 현재 활성화된 테마 ('summer', 'autumn', 'winter', 'spring', 'hot8' 중 선택)
  activeTheme: "summer" as const,

  themes: {
    summer: {
      href: "/hot/summer-korean-foods-10",
      icon: Sparkles,
      colorClass: "cyan", // cyan-500, cyan-400 등에 사용됨
      gradientFrom: "from-cyan-950/30",
      gradientTo: "to-slate-900/40",
      borderColor: "border-cyan-500/20",
      hoverBorderColor: "hover:border-cyan-500/40",
      shadowColor: "hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      texts: {
        ko: { sub: "Summer Curation", title: "시원한 여름철 한국음식 10선 보기" },
        en: { sub: "Summer Curation", title: "Explore 10 Summer Korean Foods" },
        ja: { sub: "Summer Curation", title: "夏の韓国料理10選を見る" },
        zh: { sub: "Summer Curation", title: "探索夏日韩食10选" },
        es: { sub: "Summer Curation", title: "Explorar 10 comidas de verano" },
        fr: { sub: "Summer Curation", title: "Découvrir 10 plats d'été" },
        ar: { sub: "Summer Curation", title: "استكشف 10 أطباق صيفية" },
        ru: { sub: "Summer Curation", title: "Посмотреть 10 летних блюд" }
      }
    },
    hot8: {
      href: "/hot",
      icon: Flame,
      colorClass: "rose",
      gradientFrom: "from-rose-950/30",
      gradientTo: "to-slate-900/40",
      borderColor: "border-rose-500/20",
      hoverBorderColor: "hover:border-rose-500/40",
      shadowColor: "hover:shadow-rose-500/10",
      iconBg: "bg-rose-500/20",
      iconColor: "text-rose-400",
      texts: {
        ko: { sub: "TOP 8 DISHES", title: "실시간 인기 반찬 8선 보기" },
        en: { sub: "TOP 8 DISHES", title: "Explore Top 8 Dishes" },
        ja: { sub: "TOP 8 DISHES", title: "人気おかず8選を見る" },
        zh: { sub: "TOP 8 DISHES", title: "探索人气伴餐8选" },
        es: { sub: "TOP 8 DISHES", title: "Explorar los 8 mejores platos" },
        fr: { sub: "TOP 8 DISHES", title: "Découvrir les 8 Meilleurs Plats" },
        ar: { sub: "TOP 8 DISHES", title: "استكشف أفضل ٨ أطباق" },
        ru: { sub: "TOP 8 DISHES", title: "Посмотреть 8 лучших блюд" }
      }
    },
    // 향후 가을, 겨울 테마를 위해 미리 준비된 설정
    autumn: {
      href: "/hot/autumn-curation",
      icon: Leaf,
      colorClass: "amber",
      gradientFrom: "from-amber-950/30",
      gradientTo: "to-slate-900/40",
      borderColor: "border-amber-500/20",
      hoverBorderColor: "hover:border-amber-500/40",
      shadowColor: "hover:shadow-amber-500/10",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
      texts: {
        ko: { sub: "Autumn Curation", title: "가을철 제철 반찬 보기" },
        en: { sub: "Autumn Curation", title: "Explore Autumn Seasonal Banchan" },
        ja: { sub: "Autumn Curation", title: "秋の旬のおかずを見る" },
        zh: { sub: "Autumn Curation", title: "探索秋季时令伴餐" },
        es: { sub: "Autumn Curation", title: "Explorar Banchan de Otoño" },
        fr: { sub: "Autumn Curation", title: "Découvrir Banchan d'Automne" },
        ar: { sub: "Autumn Curation", title: "استكشف أطباق الخريف" },
        ru: { sub: "Autumn Curation", title: "Посмотреть осенние закуски" }
      }
    }
  }
};

export default function SeasonalThemeBanner({ locale }: SeasonalThemeBannerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/banchan?q=${encodeURIComponent(query)}`);
    }
  };
  const isRtl = locale === "ar";
  
  // 현재 페이지가 summer-korean-foods-10 인 경우, 뒤로가기(Hot 8) 배너로 자동 전환
  const isSummerPage = pathname?.includes("summer-korean-foods-10") ?? false;
  
  // 관리자가 설정한 테마 가져오기 (여름 페이지 안에서는 자동으로 hot8로 강제 변경)
  const activeThemeKey = isSummerPage ? "hot8" : seasonalConfig.activeTheme;
  const theme = seasonalConfig.themes[activeThemeKey];
  
  // 다국어 텍스트 매핑
  const t = theme.texts[locale as keyof typeof theme.texts] || theme.texts["en"];

  // 방향 아이콘 논리
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;
  const BackwardIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowIcon = isSummerPage ? BackwardIcon : ForwardIcon;

  const Icon = theme.icon;

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full items-stretch mb-6">
      <Link
        href={theme.href}
        className={`group shrink-0 flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} border ${theme.borderColor} ${theme.hoverBorderColor} transition-all duration-300 shadow-lg ${theme.shadowColor}`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-full shrink-0 ${theme.iconBg} ${theme.iconColor} group-hover:scale-110 transition-transform`}>
            <Icon className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div>
              <div className={`text-[10px] ${theme.iconColor} opacity-80 font-bold uppercase tracking-widest mb-0.5`}>
                {t.sub}
              </div>
              <div className={`text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors`}>
                {t.title}
              </div>
            </div>
            
            <div className={`flex items-center gap-1.5 text-xs font-bold ${theme.iconColor} group-hover:text-white transition-colors mt-2 sm:mt-0 bg-slate-900/40 px-3 py-1.5 rounded-full border ${theme.borderColor} group-hover:bg-slate-800/60`}>
              <span>Go</span>
              <ArrowIcon className={`w-4 h-4 transform transition-transform ${
                isRtl 
                  ? (isSummerPage ? "group-hover:translate-x-1" : "group-hover:-translate-x-1")
                  : (isSummerPage ? "group-hover:-translate-x-1" : "group-hover:translate-x-1")
              }`} />
            </div>
          </div>
        </div>
      </Link>
      
      <form onSubmit={handleSearch} className="w-full flex-1 relative flex" dir={isRtl ? "rtl" : "ltr"}>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="반찬이름이나 재료를 검색해보세요" 
          className={`w-full bg-slate-900/60 border border-slate-700/80 rounded-2xl py-4 px-5 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-slate-900/90 shadow-lg transition-all ${isRtl ? 'pl-12' : 'pr-12'}`}
        />
        <button type="submit" className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-emerald-400 transition-colors`}>
          <Search size={20} />
        </button>
      </form>
    </div>
  );
}
