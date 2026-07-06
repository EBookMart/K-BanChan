import React from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { getAllBanchan } from "@/lib/banchan";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanCard from "@/components/BanchanCard";
import { Link } from "@/i18n/routing";
import { Compass, Sparkles, Heart, RefreshCw, Leaf, ArrowLeft, ArrowRight } from "lucide-react";

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
  if (!art) return {};

  const titleText = art.title[locale] || art.title["en"];
  const summaryText = art.summary[locale] || art.summary["en"];

  return {
    title: `${titleText} | THE SECRET CODE`,
    description: summaryText,
    openGraph: {
      title: `${titleText} | THE SECRET CODE`,
      description: summaryText,
      url: `https://k-banchan.net/${locale}/articles/${slug}`,
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

export default async function ArticleDetailPage({ params: { locale, slug } }: Props) {
  const art = getArticleBySlug(slug);
  if (!art) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "articles" });
  const tBanchan = await getTranslations({ locale, namespace: "banchan" });

  const titleText = art.title[locale] || art.title["en"];
  const summaryText = art.summary[locale] || art.summary["en"];
  const contentText = art.content[locale] || art.content["en"];

  // RTL 언어(아랍어) 여부 검사
  const isRtl = locale === "ar";

  // 아티클별 스마트 관련 반찬 3선 추천 로직
  const allBanchans = getAllBanchan();
  let relatedBanchans = [];

  switch (slug) {
    case "yaksik-dongwon":
      // 약식동원: 몸에 좋은 나물, 무침 계열 반찬 위주로 3개
      relatedBanchans = allBanchans
        .filter((b) => b.category === "namul" || b.category === "muchim")
        .slice(0, 3);
      break;
    case "yukmi":
      // 육미: 강렬한 맛의 균형을 보여주는 볶음, 조림 반찬 3개
      relatedBanchans = allBanchans
        .filter((b) => b.category === "volkkeum" || b.category === "jorim")
        .slice(0, 3);
      break;
    case "obangsaek":
      // 오방색: 색상이 다채로운 계란말이(Rank 1), 잡채, 무침 계열 위주 3개
      relatedBanchans = allBanchans
        .filter((b) => b.id === "1" || b.category === "muchim" || b.category === "gita")
        .slice(0, 3);
      break;
    case "nanum":
      // 나눔: 이웃과 나눠먹기 대표적인 반찬(멸치볶음-Rank 2, 감자조림 등) 3개
      relatedBanchans = allBanchans
        .filter((b) => b.id === "2" || b.category === "jorim" || b.category === "volkkeum")
        .slice(2, 5);
      break;
    case "ingredients-terroir":
      // 식재료·풍토: 지역 색이 짙거나 발효, 해산물 기질의 기타 카테고리 3개
      relatedBanchans = allBanchans
        .filter((b) => b.category === "gita" || b.category === "jorim")
        .slice(1, 4);
      break;
    default:
      relatedBanchans = allBanchans.slice(0, 3);
  }

  // 순환 추천을 위한 다음 아티클 계산 (yaksik -> yukmi -> obangsaek -> nanum -> terroir -> yaksik)
  const articlesList = getAllArticles();
  const currentIndex = articlesList.findIndex((a) => a.slug === slug);
  const nextIndex = (currentIndex + 1) % articlesList.length;
  const nextArt = articlesList[nextIndex];
  const nextTitleText = nextArt.title[locale] || nextArt.title["en"];

  // 아이콘 매핑 함수
  const getIcon = (artSlug: string, className: string) => {
    switch (artSlug) {
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
        return <Compass className={className} />;
    }
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-950 text-slate-100 min-h-screen pb-20 relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 1. 화려한 오방색 그라디언트 Hero 영역 */}
        <section className={`relative w-full py-20 md:py-28 bg-gradient-to-br ${art.gradientClass} text-slate-950 overflow-hidden`}>
          {/* 빛 바램 효과 */}
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] z-0" />
          <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent z-10" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            {/* 뒤로가기 버튼 */}
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-950/80 hover:text-slate-950 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 transition-all mb-8 hover:bg-white/30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("back_to_list")}</span>
            </Link>

            {/* 대형 아이콘 */}
            <div className="p-4 rounded-2xl bg-white/20 border border-white/30 mb-6 backdrop-blur-sm">
              {getIcon(slug, "w-10 h-10 text-slate-950")}
            </div>

            {/* 타이틀 */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-950">
              {titleText}
            </h1>

            {/* 한 줄 요약 */}
            <p className="text-sm md:text-lg font-medium text-slate-900 max-w-2xl bg-white/35 backdrop-blur-sm px-5 py-2.5 rounded-2xl border border-white/20 shadow-md">
              &ldquo;{summaryText}&rdquo;
            </p>

          </div>
        </section>

        {/* 2. 본문 및 오방색 매칭 정보 카드 */}
        <section className="max-w-4xl mx-auto px-4 mt-8 md:mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            
            {/* 좌측: 방위/오행/색상 오방색 철학 요약 카드 */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl md:sticky md:top-24 space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2.5">
                Obangsaek Metas
              </h3>
              <div>
                <span className="text-xs text-slate-500 font-medium block mb-0.5">{t("direction")}</span>
                <span className="text-sm font-bold text-slate-200">{art.direction[locale] || art.direction["en"]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block mb-0.5">{t("element")}</span>
                <span className="text-sm font-bold text-slate-200">{art.element[locale] || art.element["en"]}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block mb-0.5">{t("color")}</span>
                <span className={`text-sm font-black ${art.textClass}`}>{art.color[locale] || art.color["en"]}</span>
              </div>
            </div>

            {/* 우측: 학술 상세 에세이 본문 */}
            <div className="md:col-span-2 bg-slate-900/20 border border-slate-900/60 p-6 md:p-8 rounded-2xl">
              <p className="text-slate-300 font-light leading-loose text-sm md:text-base whitespace-pre-line">
                {contentText}
              </p>
            </div>

          </div>
        </section>

        {/* 3. 스마트 관련 추천 반찬 3선 */}
        <section className="max-w-4xl mx-auto px-4 mt-16 md:mt-24 border-t border-slate-900/80 pt-16">
          <h2 className="text-xl md:text-2xl font-black text-white mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
            <span>{t("related_banchan")}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {relatedBanchans.map((banchan) => (
              <BanchanCard
                key={banchan.id}
                banchan={banchan}
                locale={locale}
                categoryLabel={tBanchan(`filter.${banchan.category}`)}
              />
            ))}
          </div>
        </section>

        {/* 4. 다음 특성 순환 카드 (다음 특성으로 매끄럽게 연결) */}
        <section className="max-w-4xl mx-auto px-4 mt-16 md:mt-24">
          <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-800 transition-all">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">
                {t("next_article")}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white">
                {nextTitleText}
              </h3>
            </div>
            <Link
              href={`/articles/${nextArt.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
            >
              <span>{locale === "ko" ? "다음 장 읽기" : "Read Next"}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
