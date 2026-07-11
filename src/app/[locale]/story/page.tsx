import React from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";
import { getAllStories } from "@/data/story";
import StoryClient from "@/components/StoryClient";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "story" });
  
  return {
    title: `${t("title")} | K-BanChan`,
    description: t("subtitle"),
  };
}

export default async function StoryPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "story" });
  const allStories = getAllStories();

  return (
    <>
      <Header />
      <main className="flex-grow pt-8 pb-16 bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
        
        {/* 상단 시즈널 테마 배너 */}
        <div className="w-full max-w-5xl mx-auto px-4 mb-8 relative z-20">
          <SeasonalThemeBanner locale={locale} />
        </div>

        {/* 데코레이션 라이트 */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10 pt-4">
          <StoryClient 
            initialStories={allStories} 
            locale={locale} 
            title={t("title")} 
            subtitle={t("subtitle")} 
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
