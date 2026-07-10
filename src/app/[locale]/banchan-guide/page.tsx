import React from "react";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";
import { BANCHAN_GUIDE_ARTICLES } from "@/data/banchan-guide";
import { BookOpen, Clock, ArrowRight, ShoppingCart } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 md:pt-10 md:pb-24 px-4 max-w-7xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        {/* 상단 시즈널 테마 배너 */}
        <div className="mb-4 w-full max-w-5xl mx-auto">
          <SeasonalThemeBanner locale={locale} />
        </div>

        {/* 히어로 헤더 섹션 */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-serif drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg text-slate-400 font-light">
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
                className="group relative flex flex-col justify-between bg-slate-900/40 border border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* 카드 상단 데코레이션 및 번호 */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-extrabold text-amber-500/80 font-mono">
                    {paddedOrder}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock size={12} />
                    <span>{artReadTime}</span>
                  </div>
                </div>

                {/* 메인 텍스트 영역 */}
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-serif line-clamp-2">
                    {artTitle}
                  </h2>
                  <p className="text-sm font-semibold text-amber-500 mb-3 tracking-wide">
                    {artSubtitle}
                  </p>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6 font-light">
                    {artDesc}
                  </p>
                </div>

                {/* 카드 하단 액션 버튼 */}
                <div className="border-t border-slate-800/80 pt-4 mt-2">
                  <Link 
                    href={`/${lang}/banchan-guide/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 group-hover:text-amber-400 transition-colors"
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
          
          {/* 6번째 빈 공간: 수익화 공간 신설 */}
          <div className="flex h-full w-full">
            <div className="w-full h-full p-1 rounded-3xl bg-gradient-to-br from-emerald-500/40 via-transparent to-transparent shadow-lg shadow-emerald-900/20 group">
              <div className="bg-slate-900/90 h-full w-full rounded-[22px] flex flex-col justify-center items-center p-8 text-center border border-emerald-900/50 hover:bg-slate-900/70 transition-all duration-300">
                <ShoppingCart className="w-10 h-10 text-emerald-400 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  프리미엄 리포트 구매
                </h3>
                <p className="text-sm text-slate-400 font-light mb-6">
                  반찬의 역사와 문화를 깊이 있게 다룬 학술 리포트를 파이 코인(Pi)으로 다운로드하세요.
                </p>
                <Link 
                  href="#"
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                >
                  상점 방문하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
