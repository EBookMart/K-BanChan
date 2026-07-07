import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllBanchan, getBanchanBySlug } from "@/lib/banchan";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanCard from "@/components/BanchanCard";
import { ArrowLeft, BookOpen } from "lucide-react";
import { getAIImage } from "@/data/ai-images";
import BanchanDetailHero from "@/components/banchan/BanchanDetailHero";

function getPremiumBanchanImage(slug: string, locale: string) {
  if (slug === "kimchi" || slug === "baechu-geotjeori-26") {
    const aiImageObj = getAIImage("kimchi");
    return {
      src: aiImageObj.src,
      alt: aiImageObj.alt[locale as keyof typeof aiImageObj.alt] || aiImageObj.alt.en,
      objectPositionMobile: aiImageObj.objectPositionMobile,
      objectPositionDesktop: aiImageObj.objectPositionDesktop
    };
  }
  if (slug === "japchae" || slug === "japchae-32") {
    const aiImageObj = getAIImage("japchae");
    return {
      src: aiImageObj.src,
      alt: aiImageObj.alt[locale as keyof typeof aiImageObj.alt] || aiImageObj.alt.en,
      objectPositionMobile: aiImageObj.objectPositionMobile,
      objectPositionDesktop: aiImageObj.objectPositionDesktop
    };
  }
  return null;
}

type Props = {
  params: { locale: string; slug: string };
};

// 1. 빌드 타임에 7개 국어 x 50개 반찬 = 총 350개 상세 페이지 정적 경로 생성
export function generateStaticParams() {
  const banchans = getAllBanchan();
  const paths: { locale: string; slug: string }[] = [];

  routing.locales.forEach((locale) => {
    banchans.forEach((banchan) => {
      paths.push({
        locale,
        slug: banchan.slug,
      });
    });
  });

  return paths;
}

// 2. 다국어 기반 고품질 SEO 메타데이터 동적 생성
export async function generateMetadata({ params: { locale, slug } }: Props) {
  const banchan = getBanchanBySlug(slug);
  if (!banchan) return {};

  let name = banchan.name_en;
  if (locale === "ko") {
    name = banchan.name_ko;
  } else if (locale === "fr") {
    name = banchan.name_fr;
  }
  const rankText = locale === "ko" ? `${banchan.rank}위` : `Rank #${banchan.rank}`;
  
  const title = `${name} (${rankText}) | K-BanChan Recipe`;
  const description = `${name} recipe & detailed information. Ingredients: ${banchan.ingredients.main}. Cultural context: ${banchan.summary}`;

  const premiumImg = getPremiumBanchanImage(slug, locale);
  const imageUrl = premiumImg ? premiumImg.src : banchan.image_url;
  const imageAlt = premiumImg ? premiumImg.alt : name;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://k-banchan.net/${locale}/banchan/${slug}`,
      siteName: "K-BanChan",
      images: [{ url: imageUrl, width: 800, height: 600, alt: imageAlt }],
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BanchanDetailPage({ params: { locale, slug } }: Props) {
  const banchan = getBanchanBySlug(slug);
  
  // 존재하지 않는 반찬인 경우 404 페이지로 안내
  if (!banchan) {
    notFound();
  }

  const t = await getTranslations("banchan");

  // 로케일에 따른 다국어 이름 결정
  const getNameByLocale = () => {
    switch (locale) {
      case "ko": return banchan.name_ko;
      case "en": return banchan.name_en;
      case "fr": return banchan.name_fr || banchan.name_en;
      case "ru": return banchan.name_ru;
      case "ja": return banchan.name_ja || banchan.name_en;
      case "zh": return banchan.name_zh || banchan.name_en;
      case "es": return banchan.name_es || banchan.name_en;
      case "ar": return banchan.name_ar || banchan.name_en;
      default: return banchan.name_en;
    }
  };
  const displayName = getNameByLocale();

  const premiumImg = getPremiumBanchanImage(slug, locale);
  const imageUrl = premiumImg ? premiumImg.src : banchan.image_url;
  const imageAlt = premiumImg ? premiumImg.alt : displayName;
  const objectPositionMobile = premiumImg ? premiumImg.objectPositionMobile : undefined;
  const objectPositionDesktop = premiumImg ? premiumImg.objectPositionDesktop : undefined;

  // 매운맛 표현 🌶️
  const spicyString = banchan.spicy_level > 0 ? "🌶️".repeat(banchan.spicy_level) : "";

  // 카테고리 다국어 번역 레이블 획득
  const getCategoryLabel = (catKey: string) => {
    // filter 객체 내부의 번역 키 매칭
    return t(`filter.${catKey}`);
  };

  // 관련 반찬 3개 필터링 (같은 카테고리 우선, 자기 자신 제외, 부족할 시 타 카테고리 보충)
  let relatedBanchans = getAllBanchan().filter(
    (b) => b.slug !== banchan.slug && b.category === banchan.category
  );
  if (relatedBanchans.length < 3) {
    const fallbackBanchans = getAllBanchan()
      .filter((b) => b.slug !== banchan.slug && b.category !== banchan.category)
      .sort(() => Math.random() - 0.5);
    relatedBanchans = [...relatedBanchans, ...fallbackBanchans].slice(0, 3);
  } else {
    relatedBanchans = relatedBanchans.sort(() => Math.random() - 0.5).slice(0, 3);
  }

  return (
    <>
      <Header />

      <main className="flex-grow pt-24 pb-20 bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
        {/* 장식용 은은한 오방색 배경 조명 효과 */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-blue-950/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-amber-950/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* 상단 뒤로가기 버튼 */}
          <Link
            href={`/${locale}/banchan`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>{t("detail.back_to_list")}</span>
          </Link>

          {/* Hero 영역: 공통 반찬 상세 히어로 컴포넌트 연동 */}
          <BanchanDetailHero
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            displayName={displayName}
            subName={locale !== "ko" ? banchan.name_ko : banchan.name_en}
            rank={banchan.rank}
            categoryLabel={getCategoryLabel(banchan.category)}
            vegan={banchan.vegan}
            spicyLevel={banchan.spicy_level}
            spicyLabel={t("detail.spicy")}
            spicyString={spicyString}
            locale={locale}
            viewsWeekly={banchan.views_weekly}
            veganNote={banchan.vegan_note}
            veganNoteLabel={t("detail.vegan_note")}
            objectPositionMobile={objectPositionMobile}
            objectPositionDesktop={objectPositionDesktop}
          />

          {/* 콘텐츠 상세 영역 (Grid 1열 -> md:12열) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* 좌측: 재료 및 양념 (md:5열) */}
            <div className="md:col-span-5 space-y-6">
              {/* 주재료 박스 */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {t("detail.ingredients")}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line font-medium">
                  {banchan.ingredients.main}
                </p>
              </div>

              {/* 양념 박스 */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  {t("detail.seasoning")}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line font-medium">
                  {banchan.ingredients.seasoning || "N/A"}
                </p>
              </div>
            </div>

            {/* 우측: 조리법 및 문화 배경 (md:7열) */}
            <div className="md:col-span-7 space-y-6">
              {/* 조리법 요약 */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  {t("detail.cooking_summary")}
                </h3>
                <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line pl-1">
                  {banchan.cooking.method}
                </div>
                
                {/* 요리 팁 */}
                {banchan.cooking.tip && (
                  <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-amber-950/40 text-amber-300/90 text-xs leading-relaxed">
                    <span className="font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      💡 Culinary Chef Tip
                    </span>
                    {banchan.cooking.tip}
                  </div>
                )}
              </div>

              {/* 문화적 배경 / 블로그 요약 */}
              <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-850/50 shadow-inner">
                <h3 className="text-lg font-bold text-slate-300 mb-3">
                  {t("detail.cultural_note")}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {banchan.summary}
                </p>
              </div>
            </div>
          </div>

          {/* 하단: 관련 반찬 추천 3선 */}
          <div className="border-t border-slate-900 pt-12">
            <h3 className="text-2xl font-black text-white mb-8 text-center md:text-left">
              {t("detail.related_banchan")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedBanchans.map((item) => (
                <BanchanCard
                  key={item.id}
                  banchan={item}
                  locale={locale}
                  categoryLabel={getCategoryLabel(item.category)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
