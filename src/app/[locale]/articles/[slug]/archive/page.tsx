import React from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { getArchiveBySlug } from "@/data/archives";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AcademicPapersList from "@/components/AcademicPapersList";
import { Link } from "@/i18n/routing";
import { ArrowLeft, BookOpen, GraduationCap, Calendar, Compass, Sparkles, Heart, RefreshCw, Leaf } from "lucide-react";

type Props = {
  params: { locale: string; slug: string };
};

// 7언어 * 5아티클 = 35개 정적 경로 사전 생성
export function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  const articlesList = getAllArticles();
  
  routing.locales.forEach((locale) => {
    articlesList.forEach((art) => {
      paths.push({ locale, slug: art.slug });
    });
  });

  return paths;
}

// 동적 SEO 메타데이터 생성
export async function generateMetadata({ params: { locale, slug } }: Props) {
  const art = getArticleBySlug(slug);
  const t = await getTranslations({ locale, namespace: "articles" });
  if (!art) return {};

  const titleText = art.title[locale] || art.title["en"];

  return {
    title: `${t("archive_hero_title")} - ${titleText} | THE SECRET CODE`,
    description: `${titleText}에 관한 학술적 분석 에세이 및 참고 논문 아카이브입니다.`,
    openGraph: {
      title: `${t("archive_hero_title")} - ${titleText} | THE SECRET CODE`,
      description: `${titleText}에 관한 학술적 분석 에세이 및 참고 논문 아카이브입니다.`,
      url: `https://k-banchan.net/${locale}/articles/${slug}/archive`,
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

export default async function ArchiveDetailPage({ params: { locale, slug } }: Props) {
  const art = getArticleBySlug(slug);
  const archive = getArchiveBySlug(slug);
  const allArticles = getAllArticles();

  if (!art || !archive) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "articles" });
  
  const titleText = art.title[locale] || art.title["en"];
  const subtitleText = art.subtitle[locale] || art.subtitle["en"];
  const essayText = archive.essay[locale] || archive.essay["en"];

  // 현재 아카이브를 제외한 다른 4대 철학 리스트 필터링
  const otherArticles = allArticles.filter((item) => item.slug !== slug);

  // 아이콘 가져오기 헬퍼
  const getIcon = (itemSlug: string, className: string) => {
    switch (itemSlug) {
      case "yaksik-dongwon":
        return <Leaf className={className} />;
      case "yukmi":
        return <Sparkles className={className} />;
      case "obangsaek":
        return <Compass className={className} />;
      case "nanum":
        return <Heart className={className} />;
      case "ingredients-terroir":
        return <RefreshCw className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
        
        {/* 상단 네비게이션: 아티클 기사로 돌아가기 */}
        <div className="mb-8">
          <Link
            href={`/articles/${slug}`}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>{t("back_to_article")}</span>
          </Link>
        </div>

        {/* 히어로 영역 */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-12 mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700/50">
              <GraduationCap className="w-3.5 h-3.5" />
              {t("archive_hero_badge")}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {titleText}
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl">
              {subtitleText}
            </p>
            
            <div className="flex items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Published: {archive.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Updated: {archive.lastUpdated}
              </span>
            </div>
          </div>
        </div>

        {/* 본문: 에세이 및 참고문헌 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* 좌측: 학술 에세이 (2/3 영역) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm">
              <h2 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-800">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                {t("academic_essay")}
              </h2>
              
              {/* 학술 에세이 본문 - serif 체와 넉넉한 라인 간격으로 가독성 보장 */}
              <div className="text-slate-300 text-sm md:text-base leading-relaxed md:leading-loose font-serif font-light space-y-6 whitespace-pre-line tracking-wide">
                {essayText}
              </div>
            </div>
          </div>

          {/* 우측: 참고 문헌 목록 (1/3 영역) */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-800">
                <GraduationCap className="w-5 h-5 text-slate-400" />
                {t("papers_list")}
              </h2>
              
              <AcademicPapersList
                papers={archive.papers}
                locale={locale}
                abstractLabel={t("abstract_btn")}
                linkLabel={t("link_btn")}
              />
            </div>
          </div>

        </div>

        {/* 하단: 다른 아카이브 둘러보기 네비게이션 */}
        <div className="border-t border-slate-850 pt-12">
          <h3 className="text-lg md:text-xl font-bold text-white mb-8">
            {t("browse_other_archives")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherArticles.map((otherArt) => {
              const otherTitle = otherArt.title[locale] || otherArt.title["en"];
              const otherSubtitle = otherArt.subtitle[locale] || otherArt.subtitle["en"];
              
              return (
                <Link
                  key={otherArt.slug}
                  href={`/articles/${otherArt.slug}/archive`}
                  className={`group p-5 rounded-2xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 hover:border-slate-700/80 transform hover:-translate-y-0.5`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl bg-slate-950/60 ${otherArt.textClass} group-hover:scale-105 transition-transform`}>
                      {getIcon(otherArt.slug, "w-5 h-5")}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-emerald-400 transition-colors">
                    {otherTitle}
                  </h4>
                  <p className="text-xs text-slate-500 font-light line-clamp-2 leading-relaxed">
                    {otherSubtitle}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
