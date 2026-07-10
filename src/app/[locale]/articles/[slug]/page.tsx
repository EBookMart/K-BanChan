import React from "react";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getArticleBySlug, getAllArticles } from "@/data/articles";
import { getAllBanchan } from "@/lib/banchan";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanCard from "@/components/BanchanCard";
import MonetizationCTA from "@/components/MonetizationCTA";
import { Link } from "@/i18n/routing";
import { ShoppingCart } from "lucide-react";
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

  const t = await getTranslations({ locale, namespace: "articles" });

  return {
    title: `${titleText} | ${t("title")}`,
    description: summaryText,
    openGraph: {
      title: `${titleText} | ${t("title")}`,
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



  return (
    <>
      <Header />

      <main className="flex-grow bg-slate-950 text-slate-100 min-h-screen pb-16 md:pb-24 relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 상단 5개 섹션 내비게이션 바 */}
        <div className="w-full bg-slate-950 border-b border-slate-900/80 mb-2 md:mb-4">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap gap-2.5 justify-center">
            {getAllArticles().map((article) => {
              const isActive = article.slug === slug;
              const articleTitle = article.title[locale] || article.title["en"];
              return (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      : "bg-slate-900/30 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-600"
                  }`}
                >
                  {articleTitle}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* 1. 세련되고 가독성이 확보된 상단 헤더 영역 (텍스트와 이미지를 분리) */}
        <section className="relative w-full pt-8 pb-4 md:pt-10 md:pb-6 bg-slate-950 overflow-hidden">
          {/* 오방색/오행 철학을 반영하는 배경 조명 효과 */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b ${art.gradientClass} opacity-[0.08] rounded-full blur-[80px] pointer-events-none`} />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-900/60" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            {/* 타이틀 */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight max-w-3xl">
              {titleText}
            </h1>

          </div>
        </section>

        {/* 2. 본문 (새 텍스트 중심 세부 설명 배치 예정) */}
        <section className="max-w-4xl mx-auto px-4 mt-8 md:mt-12 relative z-10 flex justify-center items-center min-h-[400px] border-2 border-dashed border-emerald-500/50 rounded-3xl bg-emerald-950/10 mb-12">
          <p className="text-emerald-400 font-bold text-lg md:text-2xl text-center px-4">
            (이 부분에 새로 텍스트 중심 세부 설명 배치 예정)
          </p>
        </section>

        {/* 2.5. 수익화 연동 구역 (광고 또는 상품 판매 링크) */}
        <section className="max-w-4xl mx-auto px-4 relative z-10">
          <MonetizationCTA 
            title="프리미엄 한식 식재료 세트"
            description="약식동원의 철학이 담긴 신선하고 건강한 한국 전통 식재료를 파이(Pi) 코인으로 편리하게 구매해보세요."
            buttonLabel="상점 방문하기"
            href="#"
            eventName="cta_click_article_store"
            variant="primary"
            icon={<ShoppingCart size={24} />}
          />
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
