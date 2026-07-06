"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanCard from "@/components/BanchanCard";
import HeroSection from "@/components/HeroSection";
import SecretCodeCards from "@/components/SecretCodeCards";
import { getTopBanchan } from "@/lib/banchan";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  // 다국어 번역을 가져옵니다.
  const tBanchan = useTranslations("banchan");

  // 상위 인기 반찬 8개를 가져옵니다.
  const topBanchans = getTopBanchan(8);

  // 우리가 지원하는 7개 언어의 정보 배열입니다.
  const languages = [
    { code: "ko", name: "한국어" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "中文" },
    { code: "es", name: "Español" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
  ];

  return (
    <>
      {/* 헤더 */}
      <Header />
      
      {/* 웅장한 홈페이지 메인 컨텐츠 영역 */}
      <main className="flex-grow flex flex-col items-center bg-slate-950 text-slate-100 min-h-screen">
        
        {/* 1. Hero 섹션 */}
        <HeroSection />

        {/* 2. 한식의 5대 특성 카드 섹션 */}
        <SecretCodeCards locale={locale} />

        {/* 3. 인기 반찬 8개 섹션 */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900/80 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400 animate-pulse" />
                {locale === "ko" ? "실시간 인기 반찬 Top 8" : "Popular Banchan Top 8"}
              </h2>
              <p className="text-sm text-slate-400 mt-1 font-light">
                {locale === "ko" 
                  ? "가장 많은 사랑을 받는 전통 한식 반찬의 영양 레시피를 소개합니다." 
                  : "Discover recipes and instructions for the most beloved Korean side dishes."}
              </p>
            </div>

            {/* 전체 보기 링크 */}
            <Link
              href="/banchan"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <span>{locale === "ko" ? "전체 50선 보기" : "View All 50 Dishes"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 반찬 카드 그리드 (2열/3열/4열) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {topBanchans.map((item) => (
              <BanchanCard
                key={item.id}
                banchan={item}
                locale={locale}
                categoryLabel={tBanchan(`filter.${item.category}`)}
              />
            ))}
          </div>

          {/* 전체 50선으로 이동하는 중앙 강조형 버튼 */}
          <div className="flex justify-center mt-12">
            <Link
              href="/banchan"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-xl shadow-amber-950/20 hover:shadow-amber-950/30 transform hover:-translate-y-0.5 transition-all text-sm md:text-base"
            >
              <span>{locale === "ko" ? "50선 레시피 전체 보기" : "Explore All 50 Recipes"}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>

        {/* 4. 하단 언어 신속 선택 바 */}
        <div className="w-full max-w-2xl px-4 text-center mt-6 mb-20 border-t border-slate-900/60 pt-10">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-4 font-semibold">
            Language / 언어 선택
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <Link
                  key={lang.code}
                  href="/"
                  locale={lang.code}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-md shadow-emerald-950/30"
                      : "bg-slate-900/30 border-slate-800/60 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  {lang.name}
                </Link>
              );
            })}
          </div>
        </div>

      </main>

      {/* 푸터 */}
      <Footer />
    </>
  );
}
