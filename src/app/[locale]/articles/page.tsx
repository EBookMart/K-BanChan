import React from "react";
import { getTranslations } from "next-intl/server";
import { getAllArticles } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";

type Props = {
  params: { locale: string };
};

// SEO 메타데이터 생성
export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "articles" });
  
  return {
    title: `${t("index_title")} | K-BanChan`,
    description: t("index_title"),
    openGraph: {
      title: `${t("index_title")} | K-BanChan`,
      description: t("index_title"),
      url: `https://k-banchan.net/${locale}/articles`,
      images: [
        {
          url: "/logos/kbanchan-logo.png",
          width: 1200,
          height: 630,
          alt: "K-BanChan Logo",
        },
      ],
    },
  };
}

export default async function ArticlesIndexPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "articles" });
  const articlesList = getAllArticles();

  return (
    <>
      {/* 헤더 */}
      <Header />

      {/* 메인 영역 */}
      <main className="flex-grow bg-slate-950 text-slate-100 min-h-screen pt-8 pb-16 md:pt-12 md:pb-24 px-4 relative overflow-hidden">
        
        {/* 상단 시즈널 테마 배너 */}
        <div className="w-full max-w-5xl mx-auto mb-8 md:mb-12 relative z-20">
          <SeasonalThemeBanner locale={locale} />
        </div>

        {/* 데코레이션 라이트 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 relative">
          
          {/* 아티클 인덱스 헤더 */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              {t("index_title")}
            </h1>
          </div>

          {/* 아티클 가로 카드 리스트 (오방색 방위 순서대로 나열) */}
          <div className="space-y-6 md:space-y-8">
            {articlesList.map((art) => (
              <ArticleCard
                key={art.slug}
                art={art}
                locale={locale}
                readMoreLabel={t("read_more")}
              />
            ))}
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <Footer />
    </>
  );
}
