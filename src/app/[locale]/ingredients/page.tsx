import React from "react";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IngredientsClient from "@/components/IngredientsClient";
import { Link } from "@/i18n/routing";
import { Leaf, ArrowRight } from "lucide-react";
import { ingredientsPageContent } from "@/data/ingredients";

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 간단하고 견고한 커스텀 마크다운 렌더러 함수
function renderMarkdownSection(content: string) {
  if (!content) return null;
  const lines = content.split("\n");
  
  return (
    <div className="space-y-6">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // ## H2
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-2xl md:text-3xl font-bold font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-4"
            >
              {trimmed.substring(3)}
            </h2>
          );
        }

        // ### H3
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="text-xl font-bold font-serif text-white mt-8 mb-3"
            >
              {trimmed.substring(4)}
            </h3>
          );
        }

        // List item "- " or "* "
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-2 text-slate-300 ml-4 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
              <span className="text-base md:text-lg leading-relaxed font-light">{trimmed.substring(2)}</span>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p
            key={idx}
            className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: Props) {
  const lang = routing.locales.includes(locale as typeof routing.locales[number]) ? locale : "en";
  const title = `${ingredientsPageContent.title[lang] || ingredientsPageContent.title.en} | K-BanChan`;
  const description = ingredientsPageContent.excerpt[lang] || ingredientsPageContent.excerpt.en;

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
  const lang = routing.locales.includes(locale as typeof routing.locales[number]) ? locale : "en";
  const isRtl = lang === "ar";

  const titleText = ingredientsPageContent.title[lang] || ingredientsPageContent.title.en;
  const excerptText = ingredientsPageContent.excerpt[lang] || ingredientsPageContent.excerpt.en;
  const bodyText = ingredientsPageContent.body[lang] || ingredientsPageContent.body.en || "";

  // 5대 식재료 분류 탭을 본문 중간(## 2. 채소와 산나물 직전)에 자연스럽게 삽입하기 위해 split
  const splitIndicator = "## 2.";
  const parts = bodyText.split(splitIndicator);
  const firstPart = parts[0] || "";
  const secondPart = parts[1] ? splitIndicator + parts[1] : "";

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

  const clientTranslations = {
    relatedBanchan: RELATED_BANCHAN_LABEL[lang] || RELATED_BANCHAN_LABEL.en,
    viewDetail: VIEW_DETAIL_LABEL[lang] || VIEW_DETAIL_LABEL.en
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      {/* 1. 히어로 배너 섹션 (yaksikDongwon 이미지 블러 투사) */}
      <div className="relative w-full overflow-hidden border-b border-slate-900 bg-slate-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/ai/articles/yaksik-dongwon.webp')] bg-cover bg-center opacity-15 blur-md scale-105 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" dir={isRtl ? "rtl" : "ltr"}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-semibold mb-6">
            <Leaf size={14} className="animate-pulse" />
            <span>K-BanChan Academic Curation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-serif leading-tight">
            {titleText}
          </h1>
          
          <p className="max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-slate-350 font-normal leading-relaxed">
            {excerptText}
          </p>
        </div>
      </div>

      {/* 2. 에디토리얼 칼럼 & 인터랙티브 맵핑 영역 */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 본문 파트 1 (소개글 및 1번 항목) */}
        {firstPart && (
          <section className="prose prose-invert max-w-none">
            {renderMarkdownSection(firstPart)}
          </section>
        )}

        {/* 3. 인터랙티브 식재료 및 반찬 매핑 탭 (중간 삽입) */}
        <section className="border-t border-b border-slate-900 py-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight text-center">
            {INTERACTIVE_MAP_TITLE[lang] || INTERACTIVE_MAP_TITLE.en}
          </h2>
          <IngredientsClient locale={lang} translations={clientTranslations} />
        </section>

        {/* 본문 파트 2 (2번 나물류 항목 ~ 끝까지) */}
        {secondPart && (
          <section className="prose prose-invert max-w-none">
            {renderMarkdownSection(secondPart)}
          </section>
        )}

        {/* 4. 하단 CTA 링크 버튼 섹션 */}
        <section className="border-t border-slate-900 pt-12 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>{CTA_HEADER_TITLE[lang] || CTA_HEADER_TITLE.en}</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ingredientsPageContent.cta.map((link, idx) => {
              const labelText = link.label[lang] || link.label.en;
              // 로케일 접두사를 안전하게 제거하여 next-intl Link가 현재 로케일을 알아서 붙이도록 합니다.
              const pureHref = link.href.replace(/^\/(ko|en|ja|zh|es|fr|ar|ru)(?=\/|$)/, "") || "/";

              return (
                <Link
                  key={idx}
                  href={pureHref}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-md"
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
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
