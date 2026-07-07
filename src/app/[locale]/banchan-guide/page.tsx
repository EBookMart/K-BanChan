import React from "react";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BANCHAN_GUIDE_ARTICLES } from "@/data/banchan-guide";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

type Props = {
  params: { locale: string };
};

// 8개 국어 정적 목록 페이지 프리렌더링
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 다국어 인덱스 텍스트 리소스
const TRANSLATIONS: Record<string, Record<string, string>> = {
  pageTitle: {
    ko: "반찬의 이해",
    en: "Understanding Banchan",
    ja: "バンチャンの理解",
    zh: "理解伴餐",
    es: "Comprender el Banchan",
    fr: "Comprendre le Banchan",
    ar: "فهم البانتشان",
    ru: "Понимание банчана"
  },
  pageSubtitle: {
    ko: "한식 식문화의 학술적 연구와 역사적 가치를 조명합니다",
    en: "Highlighting the academic research and historical value of Korean food culture",
    ja: "韓国の食文化における学術的研究と歴史的価値を照らします",
    zh: "探寻韩食饮食文化的学术研究与历史价值",
    es: "Destacando la investigación académica y el valor histórico de la cultura culinaria coreana",
    fr: "Mettre en lumière la recherche académique et la valeur historique de la culture culinaire coréenne",
    ar: "تسليط الضوء على الأبحاث الأكاديمية والقيمة التاريخية لثقافة الطعام الكورية",
    ru: "Освещение научных исследований и исторической ценности корейской пищевой культуры"
  },
  readMore: {
    ko: "아티클 읽기",
    en: "Read Article",
    ja: "記事を読む",
    zh: "阅读文章",
    es: "Leer Artículo",
    fr: "Lire l'Article",
    ar: "اقرأ المقال",
    ru: "Читать статью"
  }
};

export async function generateMetadata({ params: { locale } }: Props) {
  const title = `${TRANSLATIONS.pageTitle[locale] || TRANSLATIONS.pageTitle.en} | K-BanChan`;
  const description = TRANSLATIONS.pageSubtitle[locale] || TRANSLATIONS.pageSubtitle.en;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://k-banchan.net/${locale}/banchan-guide`,
      locale,
      siteName: "K-BanChan"
    }
  };
}

export default function BanchanGuideIndexPage({ params: { locale } }: Props) {
  const lang = routing.locales.includes(locale as typeof routing.locales[number]) ? locale : "en";
  const title = TRANSLATIONS.pageTitle[lang];
  const subtitle = TRANSLATIONS.pageSubtitle[lang];
  const readMoreText = TRANSLATIONS.readMore[lang];
  const isRtl = lang === "ar";

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 dark:bg-stone-950 text-stone-800 dark:text-stone-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow py-16 px-4 max-w-7xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        {/* 히어로 헤더 섹션 */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 text-sm font-semibold mb-4 border border-amber-200 dark:border-amber-900/50">
            <BookOpen size={16} />
            <span>K-BanChan Academic Archive</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-4 font-serif">
            {title}
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            {subtitle}
          </p>
        </div>

        {/* 아티클 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BANCHAN_GUIDE_ARTICLES.map((article) => {
            const artTitle = article.title[lang] || article.title.en;
            const artSubtitle = article.subtitle[lang] || article.subtitle.en;
            const artDesc = article.metaDescription[lang] || article.metaDescription.en;
            const artReadTime = article.readTime[lang] || article.readTime.en;
            const paddedOrder = String(article.order).padStart(2, "0");

            return (
              <div 
                key={article.slug}
                className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 카드 상단 데코레이션 및 번호 */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-extrabold text-amber-500/80 dark:text-amber-500 font-mono">
                    {paddedOrder}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 font-medium">
                    <Clock size={12} />
                    <span>{artReadTime}</span>
                  </div>
                </div>

                {/* 메인 텍스트 영역 */}
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-stone-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-serif line-clamp-2">
                    {artTitle}
                  </h2>
                  <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3 tracking-wide">
                    {artSubtitle}
                  </p>
                  <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-3 leading-relaxed mb-6">
                    {artDesc}
                  </p>
                </div>

                {/* 카드 하단 액션 버튼 */}
                <div className="border-t border-stone-100 dark:border-stone-800 pt-4 mt-2">
                  <Link 
                    href={`/${lang}/banchan-guide/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                  >
                    <span>{readMoreText}</span>
                    <ArrowRight 
                      size={16} 
                      className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} 
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
