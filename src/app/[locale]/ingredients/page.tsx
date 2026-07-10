import React from "react";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IngredientsClient from "@/components/IngredientsClient";
import SectionNavigation from "@/components/SectionNavigation";
import { Leaf } from "lucide-react";
import SectionAccordion from "@/components/SectionAccordion";
import { ingredientsPageI18n } from "@/data/i18n";
import { SupportedLocale } from "@/data/i18n/types";

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const contentLocale = (locale in ingredientsPageI18n.locales ? locale : "en") as SupportedLocale;
  const content = ingredientsPageI18n.locales[contentLocale];
  const title = `${content.title} | K-BanChan`;
  const description = content.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://k-banchan.net/${locale}/ingredients`,
      locale,
      siteName: "K-BanChan"
    }
  };
}

export default function IngredientsPage({ params: { locale } }: Props) {
  const contentLocale = (locale in ingredientsPageI18n.locales ? locale : "en") as SupportedLocale;
  const isRtl = contentLocale === "ar";

  const content = ingredientsPageI18n.locales[contentLocale];
  const titleText = content.title;
  const excerptText = content.excerpt;
  const { intro, sections, conclusion } = content.body;

  // 다국어 매핑 번역 라벨들
  const RELATED_BANCHAN_LABEL: Record<string, string> = {
    ko: "관련 추천 반찬", en: "Recommended Side Dishes", ja: "関連するおすすめのおかず",
    zh: "相关推荐小菜", es: "Acompañamientos relacionados", fr: "Plats d'Accompagnement Associés",
    ar: "أطباق جانبية ذات صلة", ru: "Связанные закуски"
  };
  const VIEW_DETAIL_LABEL: Record<string, string> = {
    ko: "자세히 보기", en: "View Details", ja: "詳細を見る", zh: "查看详情",
    es: "Ver detalles", fr: "Voir les Détails", ar: "عرض التفاصيل", ru: "Подробнее"
  };
  const INTERACTIVE_MAP_TITLE: Record<string, string> = {
    ko: "🔍 5대 핵심 식재료 & 관련 반찬 매핑",
    en: "🔍 5 Core Categories & Banchan Mapping",
    ja: "🔍 5大核心食材＆関連おかずマッピング",
    zh: "🔍 五大核心食材与相关小菜关联",
    es: "🔍 Mapeo de 5 ingredientes y acompañamientos",
    fr: "🔍 Cartographie des 5 Ingrédients & Banchans",
    ar: "🔍 رسم المكونات الخمسة الأساسية والبان تشان",
    ru: "🔍 5 категорий ингредиентов и связанных закусок"
  };

  const INTRO_NAV_LABEL: Record<string, string> = {
    ko: "소개", en: "Introduction", fr: "Introduction", ar: "مقدمة",
    ja: "はじめに", zh: "引言", es: "Introducción", ru: "Введение"
  };
  const CONCLUSION_NAV_LABEL: Record<string, string> = {
    ko: "결론", en: "Conclusion", fr: "Conclusion", ar: "خاتمة",
    ja: "おわりに", zh: "结语", es: "Conclusión", ru: "Заключение"
  };

  const clientTranslations = {
    relatedBanchan: RELATED_BANCHAN_LABEL[contentLocale] || RELATED_BANCHAN_LABEL.en,
    viewDetail: VIEW_DETAIL_LABEL[contentLocale] || VIEW_DETAIL_LABEL.en
  };

  // SectionNavigation 용 아이템 목록 구성
  const navItems = [
    { id: "section-intro", label: INTRO_NAV_LABEL[contentLocale] || INTRO_NAV_LABEL.en },
    ...sections.map((sec, idx) => ({
      id: `section-${idx}`,
      number: `${idx + 1}.`,
      label: sec.heading
    })),
    { id: "section-conclusion", label: CONCLUSION_NAV_LABEL[contentLocale] || CONCLUSION_NAV_LABEL.en }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      {/* 1. 히어로 배너 섹션 (위아래 패딩 과도한 여백 축소: py-20 md:py-28 -> pt-16 pb-12 md:pt-20 md:pb-16) */}
      <div className="relative w-full overflow-hidden border-b border-slate-900 bg-slate-950 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="absolute inset-0 bg-[url('/images/ai/articles/yaksik-dongwon.webp')] bg-cover bg-center opacity-15 blur-md scale-105 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir={isRtl ? "rtl" : "ltr"}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-semibold mb-5">
            <Leaf size={14} className="animate-pulse" />
            <span>K-BanChan Academic Curation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 font-serif leading-tight">
            {titleText}
          </h1>
          
          <p className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
            {excerptText}
          </p>
        </div>
      </div>

      {/* 2. 본문 서브 네비게이션 레이어 */}
      <SectionNavigation items={navItems} locale={contentLocale} />

      {/* 3. 에디토리얼 칼럼 & 인터랙티브 맵핑 영역 (상단 패딩 축소: py-16 -> pt-8 pb-16) */}
      <main className="flex-grow pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 본문 파트 1 (소개글) */}
        <SectionAccordion
          id="section-intro"
          numberLabel=""
          title={INTRO_NAV_LABEL[contentLocale] || INTRO_NAV_LABEL.en}
          paragraphs={[intro]}
          detail={content.body.introDetail}
          viewDetailLabel={clientTranslations.viewDetail}
        />

        {/* 첫 번째 섹션 */}
        {sections.length > 0 && (
          <SectionAccordion
            id="section-0"
            numberLabel="1."
            title={sections[0].heading}
            paragraphs={sections[0].paragraphs}
            detail={sections[0].detail}
            viewDetailLabel={clientTranslations.viewDetail}
          />
        )}

        {/* 4. 인터랙티브 식재료 및 반찬 매핑 탭 (중간 삽입) */}
        <section className="border-t border-b border-slate-900 py-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight text-center">
            {INTERACTIVE_MAP_TITLE[contentLocale] || INTERACTIVE_MAP_TITLE.en}
          </h2>
          <IngredientsClient locale={contentLocale} translations={clientTranslations} />
        </section>

        {/* 본문 파트 2 (나머지 섹션들) */}
        {sections.length > 1 && (
          <div className="space-y-12">
            {sections.slice(1).map((section, sIdx) => {
              const currentIdx = sIdx + 1; // 1번 인덱스부터 시작하므로 +1
              const numLabel = `${currentIdx + 1}.`;

              return (
                <SectionAccordion
                  key={sIdx}
                  id={`section-${currentIdx}`}
                  numberLabel={numLabel}
                  title={section.heading}
                  paragraphs={section.paragraphs}
                  detail={section.detail}
                  viewDetailLabel={clientTranslations.viewDetail}
                />
              );
            })}
          </div>
        )}

        {/* 결론 섹션 */}
        {conclusion && (
          <SectionAccordion
            id="section-conclusion"
            numberLabel=""
            title={CONCLUSION_NAV_LABEL[contentLocale] || CONCLUSION_NAV_LABEL.en}
            paragraphs={[conclusion]}
            detail={content.body.conclusionDetail}
            viewDetailLabel={clientTranslations.viewDetail}
          />
        )}

        {/* 5. 수익화 (광고/협찬) 배너 영역 플레이스홀더 */}
        <section className="border-t border-slate-900 pt-12">
          <div className="w-full h-32 md:h-40 border border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center bg-slate-900/20 text-slate-600 font-medium text-sm space-y-2">
            <span className="text-emerald-500/50">Advertisement / Sponsorship Space</span>
            <span>[추후 광고 및 협찬 수익화 아이템 노출 영역]</span>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
