import React from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { summerFoodsList } from "@/data/summer-foods";
import { Flame, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import { summerKoreanFoods10I18n, summerFoodsUiI18n } from "@/data/i18n";
import { SupportedLocale } from "@/data/i18n/types";
import SummerFoodNavigation from "@/components/SummerFoodNavigation";


type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const contentLocale = (locale in summerKoreanFoods10I18n.locales ? locale : "en") as SupportedLocale;
  const content = summerKoreanFoods10I18n.locales[contentLocale];
  const title = `${content.title} | K-BanChan`;
  const description = content.excerpt;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: "https://k-banchan.net/images/ai/hot/summer-foods-hero.png",
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      url: `https://k-banchan.net/${locale}/hot/summer-korean-foods-10`,
      locale,
      siteName: "K-BanChan"
    }
  };
}

export default function SummerKoreanFoodsPage({ params: { locale } }: Props) {
  const contentLocale = (locale in summerKoreanFoods10I18n.locales ? locale : "en") as SupportedLocale;
  const isRtl = contentLocale === "ar";

  const content = summerKoreanFoods10I18n.locales[contentLocale];
  const titleText = content.title;
  const excerptText = content.excerpt;
  const { intro, sections, conclusion } = content.body;
  const cta = content.cta;

  const navItems = summerFoodsList.map((food) => ({
    id: food.id,
    label: food.name[contentLocale] || food.name.en,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />

      {/* 프리미엄 에디토리얼 히어로 배너 (과도한 세로 여백 축소: py-8 md:py-12) */}
      <div className="relative w-full py-8 md:py-12 flex items-center justify-center overflow-hidden border-b border-slate-900">
        <Image
          src="/images/ai/hot/summer-foods-hero.png"
          alt={titleText}
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs md:text-sm font-bold uppercase tracking-wider">
            <Sparkles size={14} className="animate-pulse" />
            <span>Special Seasonal Edition</span>
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-tight font-serif drop-shadow-lg">
            {titleText}
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg text-slate-300 font-normal drop-shadow">
            {excerptText}
          </p>
        </div>
      </div>

      {/* 메인 에디토리얼 본문 (상단 여백 축소 및 조밀도 고도화) */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-16 space-y-6" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 10대 여름철 음식 퀵점프 내비게이션 바 */}
        <SummerFoodNavigation items={navItems} locale={contentLocale} />

        {/* 서론 섹션 및 상부 에디토리얼 */}
        <section className="prose prose-invert max-w-none">
          <p className="text-slate-355 text-base md:text-lg leading-relaxed font-light font-sans mb-8">
            {intro}
          </p>
          <div className="space-y-12">
            {sections.slice(0, 2).map((section, sIdx) => (
              <div key={sIdx} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-300 text-base md:text-lg leading-relaxed font-light font-sans">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* 2. 미래 수익화 광고 Clean Zone - 상부 배너 */}
        <section className="w-full py-6 px-8 rounded-2xl bg-slate-900/20 border border-dashed border-slate-800 text-center text-xs font-semibold text-slate-500 hover:border-slate-700 transition-colors">
          {summerFoodsUiI18n.adPlacementText[contentLocale] || summerFoodsUiI18n.adPlacementText.en}
        </section>

        {/* 3. 10대 여름철 음식 리스트 카드 영역 */}
        <section className="space-y-3">
          {summerFoodsList.map((food, idx) => {
            const numLabel = String(idx + 1).padStart(2, "0");
            const isHot = food.categoryType === "hot";
            const foodName = food.name[contentLocale] || food.name.en;
            const categoryName = food.category[contentLocale] || food.category.en;
            const summary = food.summary[contentLocale] || food.summary.en;
            const culture = food.culture[contentLocale] || food.culture.en;
            const caution = food.caution[contentLocale] || food.caution.en;

            const foodTags = summerFoodsUiI18n.foodTags[contentLocale] || summerFoodsUiI18n.foodTags.en;
            const labelStr = foodTags[food.id as keyof typeof foodTags] || "";

            return (
              <article 
                key={food.id}
                id={food.id}
                className="group relative bg-slate-900/30 border border-slate-800/60 rounded-3xl p-4 md:p-6 hover:border-slate-700 transition-all duration-300 scroll-mt-20 md:scroll-mt-24"
              >
                {/* 상단 헤더 데코레이션 */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-700 font-mono">
                      {numLabel}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white font-serif flex items-center gap-2">
                        <span>{foodName}</span>
                        <span className="text-xs text-slate-500 font-sans font-normal italic">({food.englishName})</span>
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          isHot 
                            ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" 
                            : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        }`}>
                          {isHot ? <Flame size={12} className="animate-pulse" /> : <Sparkles size={12} />}
                          <span>{categoryName}</span>
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-400 border border-slate-750">
                          {labelStr}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 에디토리얼 내용 */}
                <div className="space-y-6">
                  <div className="space-y-2 border-l-2 border-emerald-500/30 pl-4">
                    <p className="text-base md:text-lg font-semibold text-slate-200">
                      {summary}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
                    {culture}
                  </p>

                  {/* HTML5 Native Zero-JS Accordion Caution Box */}
                  <details className="group border border-rose-500/15 bg-rose-950/10 rounded-2xl overflow-hidden transition-all duration-300">
                    <summary className="flex items-center justify-between cursor-pointer p-4 text-xs md:text-sm font-bold text-rose-400 hover:bg-rose-950/20 select-none">
                      <div className="flex items-center gap-2">
                        <ShieldAlert size={16} />
                        <span>{summerFoodsUiI18n.cautionBoxTitle[contentLocale] || summerFoodsUiI18n.cautionBoxTitle.en}</span>
                      </div>
                      <span className="transition-transform duration-300 group-open:rotate-180">👇</span>
                    </summary>
                    <div className="p-4 pt-0 border-t border-rose-500/10 text-xs md:text-sm text-slate-300 font-normal leading-relaxed">
                      {caution}
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </section>

        {/* 하부 에디토리얼 섹션 */}
        {sections.length > 2 && (
          <section className="prose prose-invert max-w-none">
            <div className="space-y-12">
              {sections.slice(2).map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-serif text-white border-b border-slate-800 pb-2 mt-12 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-355 text-base md:text-lg leading-relaxed font-light font-sans">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 결론 섹션 */}
        {conclusion && (
          <section className="prose prose-invert max-w-none border-t border-slate-900 pt-12">
            <p className="text-slate-355 text-base md:text-lg leading-relaxed font-light font-sans">
              {conclusion}
            </p>
          </section>
        )}

        {/* 4. 미래 수익화 광고 Clean Zone - 하부 배너 */}
        <section className="w-full py-6 px-8 rounded-2xl bg-slate-900/20 border border-dashed border-slate-800 text-center text-xs font-semibold text-slate-500 hover:border-slate-700 transition-colors">
          {summerFoodsUiI18n.adPlacementText[contentLocale] || summerFoodsUiI18n.adPlacementText.en}
        </section>

        {/* 5. 하단 CTA 링크 버튼 섹션 */}
        <section className="border-t border-slate-900 pt-12 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>{summerFoodsUiI18n.ctaHeaderTitle[contentLocale] || summerFoodsUiI18n.ctaHeaderTitle.en}</span>
          </h3>
          
          <div>
            {(() => {
              const labelText = cta.label;
              const pureHref = cta.href.replace(/^\/(ko|en|ja|zh|es|fr|ar|ru)(?=\/|$)/, "") || "/";

              return (
                <Link
                  href={pureHref}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-rose-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-md max-w-md mx-auto"
                >
                  <span className="text-sm font-bold text-slate-200 group-hover:text-rose-400 transition-colors">
                    {labelText}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`text-slate-500 group-hover:text-rose-400 transition-transform duration-300 group-hover:translate-x-1 ${
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
