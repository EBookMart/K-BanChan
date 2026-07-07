import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { getAllBanchan } from "@/lib/banchan";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanCard from "@/components/BanchanCard";
import ObangsaekCircleNav from "@/components/ObangsaekCircleNav";
import { Link } from "@/i18n/routing";
import { Compass, Sparkles, Heart, RefreshCw, Leaf, ArrowLeft } from "lucide-react";
import { getAIImage, AIImageKey } from "@/data/ai-images";

const getArticleImageKey = (slug: string): AIImageKey | null => {
  if (slug === "yaksik-dongwon") return "yaksikDongwon";
  if (slug === "yukmi") return "yukmi";
  if (slug === "obangsaek") return "obangsaek";
  if (slug === "nanum") return "nanum";
  if (slug === "ingredients-terroir") return "ingredientsTerroir";
  return null;
};

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

  const imageKey = getArticleImageKey(slug);
  const aiImageObj = imageKey ? getAIImage(imageKey) : null;
  const imageUrl = aiImageObj ? aiImageObj.src : "/logos/kbanchan-logo.png";
  const imageAlt = aiImageObj ? (aiImageObj.alt[locale as keyof typeof aiImageObj.alt] || aiImageObj.alt.en) : "K-BanChan Logo";

  return {
    title: `${titleText} | THE SECRET CODE`,
    description: summaryText,
    openGraph: {
      title: `${titleText} | THE SECRET CODE`,
      description: summaryText,
      url: `https://k-banchan.net/${locale}/articles/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: imageAlt,
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

      <main className="flex-grow bg-slate-950 text-slate-100 min-h-screen pb-16 md:pb-24 relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 1. 세련되고 가독성이 확보된 상단 헤더 영역 (텍스트와 이미지를 분리) */}
        <section className="relative w-full pt-16 pb-6 md:pt-24 md:pb-12 bg-slate-950 overflow-hidden">
          {/* 오방색/오행 철학을 반영하는 배경 조명 효과 */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b ${art.gradientClass} opacity-[0.08] rounded-full blur-[80px] pointer-events-none`} />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-900/60" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            {/* 뒤로가기 버튼 */}
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full transition-all mb-4 md:mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("back_to_list")}</span>
            </Link>

            {/* 대형 아이콘과 뱃지 */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2.5 md:p-3 rounded-xl bg-slate-900 border border-slate-800/80 shadow-md">
                {getIcon(slug, "w-5 h-5 md:w-6 md:h-6 text-amber-400")}
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold bg-slate-900 border border-slate-850 text-slate-300 uppercase tracking-widest">
                {slug === "obangsaek" ? "시각적 조화: 오행" : "K-BanChan Philosophy"}
              </span>
            </div>

            {/* 타이틀 */}
            <h1 className="text-2xl md:text-5xl font-black tracking-tight text-white mb-4 md:mb-6 leading-tight max-w-3xl">
              {titleText}
            </h1>

            {/* 한 줄 요약 */}
            <p className="text-sm md:text-lg font-light text-slate-300 max-w-2xl leading-relaxed">
              &ldquo;{summaryText}&rdquo;
            </p>

          </div>
        </section>

        {/* 2. 본문 및 원형 오행 내비게이션 배치 */}
        <section className="max-w-4xl mx-auto px-4 mt-4 md:mt-12 relative z-10">
          
          {/* 아티클 고유 AI 히어로 이미지 배치 */}
          {(() => {
            const imageKey = getArticleImageKey(slug);
            const aiImageObj = imageKey ? getAIImage(imageKey) : null;
            if (!aiImageObj) return null;
            const altVal = aiImageObj.alt[locale as keyof typeof aiImageObj.alt] || aiImageObj.alt.en;
            return (
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-6 md:mb-12">
                <Image
                  src={aiImageObj.src}
                  alt={altVal}
                  fill
                  priority
                  className="object-cover responsive-object-fit"
                  style={{
                    "--object-position-mobile": aiImageObj.objectPositionMobile || "center",
                    "--object-position-desktop": aiImageObj.objectPositionDesktop || "center",
                  } as React.CSSProperties}
                  sizes="(max-w-768px) 100vw, 768px"
                />
              </div>
            );
          })()}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
            
            {/* 좌측: 원형 오행 내비게이션 */}
            <div className="bg-slate-900/50 border border-slate-800 p-4 md:p-6 rounded-2xl md:sticky md:top-24 flex flex-col items-center">
              <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2 md:pb-2.5 w-full text-center mb-2">
                Obangsaek Cycle
              </h3>
              <ObangsaekCircleNav currentSlug={slug} />
            </div>

            {/* 우측: 학술 상세 에세이 본문 */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <div className="bg-slate-900/20 border border-slate-900/60 p-5 md:p-8 rounded-2xl">
                <p className="text-slate-300 font-light leading-relaxed md:leading-loose text-sm md:text-base whitespace-pre-line">
                  {contentText}
                </p>
              </div>

              {/* 학술 아카이브 연결 CTA */}
              <div className="p-5 md:p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
                <div className="space-y-1 relative z-10 text-center sm:text-left">
                  <h4 className="text-sm md:text-base font-bold text-white">
                    {t("view_archive_title")}
                  </h4>
                  <p className="text-xs text-slate-400 font-light">
                    {t("view_archive_description")}
                  </p>
                </div>
                <Link
                  href={`/articles/${slug}/archive`}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-slate-850 hover:bg-slate-800 text-emerald-400 border border-emerald-900/40 hover:border-emerald-500/40 transition-all shadow-md shrink-0"
                >
                  {t("view_archive_cta")}
                </Link>
              </div>
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

      </main>

      <Footer />
    </>
  );
}
