import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllBanchan, getBanchanBySlug } from "@/lib/banchan";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BanchanDetailImage from "@/components/BanchanDetailImage";
import BanchanCard from "@/components/BanchanCard";
import { ArrowLeft, BookOpen, Flame, Leaf, Eye, Award } from "lucide-react";

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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://k-banchan.net/${locale}/banchan/${slug}`,
      siteName: "K-BanChan",
      images: [{ url: banchan.image_url, width: 800, height: 600 }],
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [banchan.image_url],
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

          {/* Hero 영역: 레이아웃 (Grid 1열 -> md:2열) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            {/* 좌측: 반찬 이미지 */}
            <div className="md:col-span-5 w-full">
              <BanchanDetailImage src={banchan.image_url} alt={displayName} />
            </div>

            {/* 우측: 요약 타이틀 및 주요 메타 */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {/* 랭킹 표시 */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  Rank {banchan.rank}
                </span>

                {/* 카테고리 뱃지 */}
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  {getCategoryLabel(banchan.category)}
                </span>

                {/* 비건 뱃지 */}
                {banchan.vegan && (
                  <span className="px-3 py-1 rounded-full bg-teal-600/20 border border-teal-500/40 text-teal-300 text-xs font-bold flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Vegan
                  </span>
                )}
              </div>

              <div>
                {/* 메인 명칭 */}
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
                  {displayName}
                </h1>
                
                {/* 한국어 서브 명칭 (다국어일 때 보조 출력) */}
                {locale !== "ko" && (
                  <p className="text-lg text-slate-400 font-medium tracking-wide mb-1">{banchan.name_ko}</p>
                )}
                
                {/* 영문 서브 명칭 (한국어일 때 보조 출력) */}
                {locale === "ko" && (
                  <p className="text-lg text-slate-400 font-medium tracking-wide mb-1">{banchan.name_en}</p>
                )}
              </div>

              {/* 매운맛 & 비건 메모 & 조회수 정보 요약 패널 */}
              <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-bold">
                    {t("detail.spicy")}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {spicyString ? (
                      <span className="text-red-500 flex items-center gap-1">
                        <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                        {spicyString}
                      </span>
                    ) : (
                      <span className="text-slate-500 text-xs">Mild (안 매움)</span>
                    )}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-bold">
                    Popularity
                  </span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-slate-400" />
                    {banchan.views_weekly} views/wk
                  </span>
                </div>

                {banchan.vegan_note && (
                  <div className="col-span-2 border-t border-slate-800/80 pt-3 mt-1">
                    <span className="text-[10px] text-teal-400 uppercase tracking-wider block mb-1 font-bold">
                      {t("detail.vegan_note")}
                    </span>
                    <span className="text-xs text-teal-300/90 font-medium bg-teal-950/30 px-2 py-0.5 rounded border border-teal-900/40">
                      {banchan.vegan_note}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

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
