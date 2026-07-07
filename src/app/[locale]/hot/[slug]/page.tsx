import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link, routing } from "@/i18n/routing";
import { getCurationBySlug, getBanchansForCuration, getAllCurations } from "@/data/hot-curations";
import { getTranslations } from "next-intl/server";
import BanchanCard from "@/components/BanchanCard";
import { ArrowLeft, Flame } from "lucide-react";

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

// 1. 빌드 타임 정적 생성을 위한 generateStaticParams 구현 (8개 언어 * 3개 슬러그)
export async function generateStaticParams() {
  const curations = getAllCurations();
  const params: { locale: string; slug: string }[] = [];
  
  routing.locales.forEach((locale) => {
    curations.forEach((curation) => {
      params.push({
        locale,
        slug: curation.slug,
      });
    });
  });
  
  return params;
}

// 2. SEO 메타데이터 자동화
export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const curation = getCurationBySlug(slug);
  if (!curation) return {};

  const title = curation.title[locale] || curation.title["en"];
  const description = curation.description[locale] || curation.description["en"];

  return {
    title: `${title} | K-BanChan`,
    description: description,
    openGraph: {
      title: `${title} | K-BanChan`,
      description: description,
      url: `https://k-banchan.net/${locale}/hot/${slug}`,
      images: [{ url: "/logos/kbanchan-logo.png", width: 1200, height: 630 }],
    },
  };
}

export default async function HotCurationDetailPage({ params: { locale, slug } }: Props) {
  const curation = getCurationBySlug(slug);
  if (!curation) {
    notFound();
  }

  const banchans = getBanchansForCuration(curation);
  const t = await getTranslations("banchan");

  const titleText = curation.title[locale] || curation.title["en"];
  const descText = curation.description[locale] || curation.description["en"];

  // 카테고리 매핑용 도우미
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "volkkeum":
        return t("filter.volkkeum");
      case "jorim":
        return t("filter.jorim");
      case "muchim":
        return t("filter.muchim");
      case "namul":
        return t("filter.namul");
      case "gita":
        return t("filter.gita");
      default:
        return t("filter.all");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 md:py-24 px-4 relative overflow-hidden">
      {/* 장식 배경 */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: curation.colorHex }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/hot"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium text-sm mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("detail.back_to_list")}</span>
        </Link>

        {/* 상단 소개 영역 */}
        <div className="mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            style={{ backgroundColor: `${curation.colorHex}20`, border: `1px solid ${curation.colorHex}40`, color: curation.colorHex }}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>8 Premium Curation</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            {titleText}
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed font-light">
            {descText}
          </p>
        </div>

        {/* 8선 반찬 카드 그리드 (모바일 2열 / 태블릿 3열 / 데스크톱 4열) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {banchans.map((banchan) => {
            const categoryLabel = getCategoryLabel(banchan.category);
            
            return (
              <div key={banchan.slug} className="relative">
                <BanchanCard
                  banchan={banchan}
                  locale={locale}
                  categoryLabel={categoryLabel}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
