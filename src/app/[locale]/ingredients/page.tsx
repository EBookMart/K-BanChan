import React from "react";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IngredientsClient from "@/components/IngredientsClient";
import SectionNavigation from "@/components/SectionNavigation";
import { Link } from "@/i18n/routing";
import { Leaf, ArrowRight, ChevronDown } from "lucide-react";
import SimpleMarkdown from "@/components/SimpleMarkdown";
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
  const cta = content.cta;

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
  const CTA_HEADER_TITLE: Record<string, string> = {
    ko: "💡 더 알아보기", en: "💡 Learn More", ja: "💡 もっと知る", zh: "💡 了解更多",
    es: "💡 Saber más", fr: "💡 En savoir plus", ar: "💡 اقرأ المزيد", ru: "💡 Узнать больше"
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
      number: `0${idx + 1}.`,
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
        <section id="section-intro" className="scroll-mt-32 md:scroll-mt-40 prose prose-invert max-w-none">
          <p className="text-slate-350 text-base md:text-lg leading-relaxed font-light font-sans mb-8">
            {intro}
          </p>
        </section>

        {/* 첫 번째 섹션 (01. 채소와 나물) */}
        {sections.length > 0 && (
          <section id="section-0" className="scroll-mt-32 md:scroll-mt-40 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-4 flex items-center gap-2">
              <span className="text-emerald-500 font-mono">01.</span>
              <span>{sections[0].heading}</span>
            </h2>
            {sections[0].paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans">
                {p}
              </p>
            ))}
            {sections[0].detail && (
              <details className="mt-8 group border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none hover:bg-slate-800/50 transition-colors outline-none">
                  <span className="text-base md:text-lg font-bold text-emerald-400 group-open:text-emerald-300 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
                    {clientTranslations.viewDetail}
                  </span>
                  <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6" />
                </summary>
                <div className="p-5 md:p-6 border-t border-slate-800 bg-slate-900/50">
                  <SimpleMarkdown text={sections[0].detail} />
                </div>
              </details>
            )}
          </section>
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
              const numLabel = `0${currentIdx + 1}.`;

              return (
                <section
                  key={sIdx}
                  id={`section-${currentIdx}`}
                  className="scroll-mt-32 md:scroll-mt-40 space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-4 flex items-center gap-2">
                    <span className="text-emerald-500 font-mono">{numLabel}</span>
                    <span>{section.heading}</span>
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans">
                      {p}
                    </p>
                  ))}
                  {section.detail && (
                    <details className="mt-8 group border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30">
                      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none hover:bg-slate-800/50 transition-colors outline-none">
                        <span className="text-base md:text-lg font-bold text-emerald-400 group-open:text-emerald-300 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
                          {clientTranslations.viewDetail}
                        </span>
                        <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6" />
                      </summary>
                      <div className="p-5 md:p-6 border-t border-slate-800 bg-slate-900/50">
                        <SimpleMarkdown text={section.detail} />
                      </div>
                    </details>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* 결론 섹션 */}
        {conclusion && (
          <section id="section-conclusion" className="scroll-mt-32 md:scroll-mt-40 prose prose-invert max-w-none border-t border-slate-900 pt-12">
            <p className="text-slate-355 text-base md:text-lg leading-relaxed font-light font-sans">
              {conclusion}
            </p>
          </section>
        )}

        {/* 5. 하단 CTA 링크 버튼 섹션 */}
        <section className="border-t border-slate-900 pt-12 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>{CTA_HEADER_TITLE[contentLocale] || CTA_HEADER_TITLE.en}</span>
          </h3>
          
          <div>
            {(() => {
              const labelText = cta.label;
              const pureHref = cta.href.replace(/^\/(ko|en|ja|zh|es|fr|ar|ru)(?=\/|$)/, "") || "/";

              return (
                <Link
                  href={pureHref}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-md max-w-md mx-auto"
                >
                  <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                    {labelText}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`text-slate-500 group-hover:text-emerald-400 transition-transform duration-300 group-hover:translate-x-1 ${
                      isRtl ? "rotate-180 group-hover:-translate-x-1" : ""
                    }`}
                  />
                </Link>
              );
            })()}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
