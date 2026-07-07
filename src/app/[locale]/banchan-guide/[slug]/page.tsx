import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BANCHAN_GUIDE_ARTICLES, getArticleBySlug } from "@/data/banchan-guide";
import contentData from "../../../../../public/data/banchan-guide-content.json";
import { ArrowLeft, ArrowRight, BookOpen, FileText } from "lucide-react";

type Props = {
  params: { locale: string; slug: string };
};

// 8개 국어 x 5개 아티클 = 40개 상세 페이지 정적 경로 생성
export function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    BANCHAN_GUIDE_ARTICLES.forEach((article) => {
      paths.push({
        locale,
        slug: article.slug
      });
    });
  });
  return paths;
}

// 다국어 라벨 사전
const TRANSLATIONS: Record<string, Record<string, string>> = {
  references: {
    ko: "참고문헌",
    en: "References",
    ja: "参考文献",
    zh: "参考文献",
    es: "Referencias",
    fr: "Références",
    ar: "المراجع",
    ru: "Список литературы"
  },
  prevArticle: {
    ko: "이전 아티클",
    en: "Previous Article",
    ja: "前回の記事",
    zh: "上一篇文章",
    es: "Artículo Anterior",
    fr: "Article Précédent",
    ar: "المقال السابق",
    ru: "Предыдущая статья"
  },
  nextArticle: {
    ko: "다음 아티클",
    en: "Next Article",
    ja: "次回の記事",
    zh: "下一篇文章",
    es: "Artículo Siguiente",
    fr: "Article Suivant",
    ar: "المقال التالي",
    ru: "Следующая статья"
  },
  backToList: {
    ko: "목록으로 돌아가기",
    en: "Back to List",
    ja: "リストに戻る",
    zh: "返回列表",
    es: "Volver a la Lista",
    fr: "Retour à la Liste",
    ar: "العودة إلى القائمة",
    ru: "Назад к списку"
  }
};

// SEO 메타데이터 생성
export async function generateMetadata({ params: { locale, slug } }: Props) {
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const title = `${article.title[locale] || article.title.en} | K-BanChan Academic`;
  const description = article.metaDescription[locale] || article.metaDescription.en;

  const languages: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    languages[loc] = `https://k-banchan.net/${loc}/banchan-guide/${slug}`;
  });
  languages["x-default"] = `https://k-banchan.net/en/banchan-guide/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://k-banchan.net/${locale}/banchan-guide/${slug}`,
      languages
    },
    openGraph: {
      title,
      description,
      url: `https://k-banchan.net/${locale}/banchan-guide/${slug}`,
      locale,
      siteName: "K-BanChan",
      type: "article"
    }
  };
}

interface ContentBlock {
  type: string;
  text: string;
}

export default function BanchanGuideDetailPage({ params: { locale, slug } }: Props) {
  const lang = routing.locales.includes(locale as typeof routing.locales[number]) ? locale : "en";
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // 본문 콘텐츠 로드
  const content = contentData as Record<string, Record<string, ContentBlock[]>>;
  const articleContent = content[slug]?.[lang] || content[slug]?.en || [];

  // 이전/다음 순환 Loop 네비게이션 계산
  const totalArticles = BANCHAN_GUIDE_ARTICLES.length;
  const currentIndex = BANCHAN_GUIDE_ARTICLES.findIndex((a) => a.slug === slug);
  
  const prevArticle = BANCHAN_GUIDE_ARTICLES[(currentIndex - 1 + totalArticles) % totalArticles];
  const nextArticle = BANCHAN_GUIDE_ARTICLES[(currentIndex + 1) % totalArticles];

  const artTitle = article.title[lang] || article.title.en;
  const artSubtitle = article.subtitle[lang] || article.subtitle.en;
  const isRtl = lang === "ar";

  // SEO JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": artTitle,
    "alternativeHeadline": artSubtitle,
    "description": article.metaDescription[lang] || article.metaDescription.en,
    "inLanguage": lang,
    "author": {
      "@type": "Organization",
      "name": "K-BanChan Academic Board"
    },
    "publisher": {
      "@type": "Organization",
      "name": "K-BanChan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://k-banchan.net/favicon.ico"
      }
    },
    "datePublished": "2026-07-08T00:00:00+09:00",
    "mainEntityOfPage": `https://k-banchan.net/${lang}/banchan-guide/${slug}`
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-100 transition-colors duration-300">
      {/* SEO 스키마 주입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <main className="flex-grow py-12 px-4 max-w-4xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        {/* 상단 네비게이션 */}
        <div className="mb-8">
          <Link
            href={`/${lang}/banchan-guide`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
            <span>{TRANSLATIONS.backToList[lang] || TRANSLATIONS.backToList.en}</span>
          </Link>
        </div>

        {/* 아티클 헤더 */}
        <header className="mb-12 border-b border-stone-200 dark:border-stone-800 pb-8">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-semibold text-sm mb-3">
            <BookOpen size={16} />
            <span>{artSubtitle}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white font-serif leading-tight mb-4">
            {artTitle}
          </h1>
          <div className="flex items-center gap-4 text-xs text-stone-400 dark:text-stone-500">
            <span>Section {article.order} of {totalArticles}</span>
            <span>•</span>
            <span>{article.readTime[lang] || article.readTime.en}</span>
          </div>
        </header>

        {/* 아티클 본문 영역 */}
        <article className="prose prose-stone dark:prose-invert max-w-none mb-16">
          {articleContent.map((block: ContentBlock, idx: number) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={idx}
                  className="text-2xl md:text-3xl font-serif font-bold text-stone-950 dark:text-stone-100 mt-10 mb-4 border-b border-stone-200 dark:border-stone-800 pb-2 leading-snug"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "h3") {
              return (
                <h3
                  key={idx}
                  className="text-xl font-serif font-bold text-stone-900 dark:text-stone-200 mt-6 mb-3"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "p") {
              return (
                <p
                  key={idx}
                  className="text-base md:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6 font-light font-sans"
                >
                  {block.text}
                </p>
              );
            }
            return null;
          })}
        </article>

        {/* 참고문헌 섹션 */}
        {article.references && article.references.length > 0 && (
          <section className="bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl p-6 md:p-8 mb-16">
            <h2 className="text-lg font-bold text-stone-900 dark:text-white mb-4 flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
              <FileText size={18} className="text-amber-700 dark:text-amber-400" />
              <span>{TRANSLATIONS.references[lang] || TRANSLATIONS.references.en}</span>
            </h2>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400 list-disc pl-5">
              {article.references.map((ref, idx) => (
                <li key={idx} className="leading-relaxed">
                  {ref}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 순환 Loop 이전/다음 네비게이션 */}
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-200 dark:border-stone-800 pt-8 mb-12">
          {/* 이전 아티클 */}
          <Link
            href={`/${lang}/banchan-guide/${prevArticle.slug}`}
            className="group flex flex-col justify-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 hover:border-amber-400 dark:hover:border-amber-700 p-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
          >
            <div className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 font-semibold mb-1">
              <ArrowLeft size={12} className={`transition-transform duration-300 group-hover:-translate-x-1 ${isRtl ? "rotate-180 group-hover:translate-x-1" : ""}`} />
              <span>{TRANSLATIONS.prevArticle[lang] || TRANSLATIONS.prevArticle.en}</span>
            </div>
            <span className="text-sm font-bold text-stone-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-serif line-clamp-1">
              {prevArticle.title[lang] || prevArticle.title.en}
            </span>
          </Link>

          {/* 다음 아티클 */}
          <Link
            href={`/${lang}/banchan-guide/${nextArticle.slug}`}
            className="group flex flex-col justify-center items-end bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-850 hover:border-amber-400 dark:hover:border-amber-700 p-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow text-right"
          >
            <div className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500 font-semibold mb-1">
              <span>{TRANSLATIONS.nextArticle[lang] || TRANSLATIONS.nextArticle.en}</span>
              <ArrowRight size={12} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </div>
            <span className="text-sm font-bold text-stone-800 dark:text-stone-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-serif line-clamp-1">
              {nextArticle.title[lang] || nextArticle.title.en}
            </span>
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
