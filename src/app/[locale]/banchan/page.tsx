import React, { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { getAllBanchan } from "@/lib/banchan";
import BanchanGrid from "@/components/BanchanGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";

type Props = {
  params: { locale: string };
};

export default async function BanchanListPage({ params: { locale } }: Props) {
  // next-intl을 통한 번역 인스턴스 가져오기 (서버 컴포넌트 방식)
  const t = await getTranslations("banchan");
  const allBanchan = getAllBanchan();

  const categories = [
    { key: "all", label: t("filter.all") },
    { key: "volkkeum", label: t("filter.volkkeum") },
    { key: "jorim", label: t("filter.jorim") },
    { key: "muchim", label: t("filter.muchim") },
    { key: "namul", label: t("filter.namul") },
    { key: "gita", label: t("filter.gita") }
  ];

  return (
    <>
      {/* 글로벌 공통 헤더 */}
      <Header />

      <main className="flex-grow pt-8 pb-16 bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
        {/* 상단 시즈널 테마 배너 */}
        <div className="w-full max-w-5xl mx-auto px-4 relative z-20">
          <SeasonalThemeBanner locale={locale} />
        </div>

        {/* 아름다운 백그라운드 빛 효과 */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-4">
          {/* 페이지 메인 타이틀 */}
          <h1 className="text-4xl md:text-6xl font-black text-center mb-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent tracking-tight">
            {t("title")}
          </h1>
          <p className="text-center text-slate-400 text-sm md:text-base font-medium mb-6 max-w-xl mx-auto">
            한국인이 선호하는 50가지 전통 반찬의 비밀코드를 찾아 보세요
          </p>

          {/* 목록 검색 및 그리드 */}
          <Suspense fallback={<div className="h-20" />}>
            <BanchanGrid
              initialBanchan={allBanchan}
              locale={locale}
              categories={categories}
              placeholder={t("search_placeholder")}
              noResultsText={t("no_results")}
            />
          </Suspense>
        </div>
      </main>

      {/* 글로벌 공통 푸터 */}
      <Footer />
    </>
  );
}
