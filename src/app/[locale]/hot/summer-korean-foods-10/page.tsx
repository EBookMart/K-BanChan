import React from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { summerFoodsList } from "@/data/summer-foods";
import { Flame, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import { summerKoreanFoods10Content } from "@/data/summer-foods";

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
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
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
  const title = `${summerKoreanFoods10Content.title[lang] || summerKoreanFoods10Content.title.en} | K-BanChan`;
  const description = summerKoreanFoods10Content.excerpt[lang] || summerKoreanFoods10Content.excerpt.en;
  
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
  const lang = routing.locales.includes(locale as typeof routing.locales[number]) ? locale : "en";
  const isRtl = lang === "ar";

  const titleText = summerKoreanFoods10Content.title[lang] || summerKoreanFoods10Content.title.en;
  const excerptText = summerKoreanFoods10Content.excerpt[lang] || summerKoreanFoods10Content.excerpt.en;
  const bodyText = summerKoreanFoods10Content.body[lang] || summerKoreanFoods10Content.body.en || "";

  // 본문을 서론 부분과 결론 부분으로 나누어 카드리스트 앞뒤에 배치
  const splitIndicator1 = "## 여름철 한국음식 10선";
  const splitIndicator2 = "## 계절에 응답하는 음식 문화";

  const parts = bodyText.split(splitIndicator1);
  const introPart = parts[0] || "";
  const rest = parts[1] || "";

  const restParts = rest.split(splitIndicator2);
  const conclusionPart = restParts[1] ? splitIndicator2 + restParts[1] : "";

  // 다국어 라벨 매핑들
  const CAUTION_BOX_TITLE: Record<string, string> = {
    ko: "⚠️ 이런 분들은 특히 유의하세요 (건강상 주의점)",
    en: "⚠️ Dietary Cautions & Health Warnings",
    ja: "⚠️ 健康上の注意点 (要確認)",
    zh: "⚠️ 食用注意事项 (健康提醒)",
    es: "⚠️ Precauciones de salud",
    fr: "⚠️ Précautions et Avertissements de Santé",
    ar: "⚠️ تحذيرات صحية واحتياطات غذائية",
    ru: "⚠️ Меры предосторожности (О здоровье)"
  };

  const AD_PLACEMENT_TEXT: Record<string, string> = {
    ko: "💡 추천 파트너 마케팅 영역 (한국 정통 식재료 밀키트 구매처)",
    en: "💡 Recommended Affiliate Partner (Premium K-Food Meal-kits & Ingredients)",
    ja: "💡 おすすめ提携パートナー領域（プレミアム韓国食材ミールキット購入先）",
    zh: "💡 推荐推广合作区域（优质韩国食材及半成品包购买渠道）",
    es: "💡 Espacio patrocinado (Ingredientes coreanos premium)",
    fr: "💡 Partenaire Recommandé (Kits Recettes & Ingrédients K-Food Premium)",
    ar: "💡 مساحة تسويقية مقترحة (مكونات كورية ووجبات جاهزة)",
    ru: "💡 Партнерская зона (Премиальные наборы ингредиентов K-Food)"
  };

  const CTA_HEADER_TITLE: Record<string, string> = {
    ko: "💡 더 알아보기", en: "💡 Learn More", ja: "💡 もっと知る", zh: "💡 了解更多",
    es: "💡 Saber más", fr: "💡 En savoir plus", ar: "💡 اقرأ المزيد", ru: "💡 Узнать больше"
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />

      {/* 프리미엄 에디토리얼 히어로 배너 */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden border-b border-slate-900">
        <Image
          src="/images/ai/hot/summer-foods-hero.png"
          alt={titleText}
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 text-center z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs md:text-sm font-bold uppercase tracking-wider">
            <Sparkles size={14} className="animate-pulse" />
            <span>Special Seasonal Edition</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight font-serif drop-shadow-lg">
            {titleText}
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-slate-350 font-normal drop-shadow">
            {excerptText}
          </p>
        </div>
      </div>

      {/* 메인 에디토리얼 본문 */}
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 space-y-16" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 서론 섹션 */}
        {introPart && (
          <section className="prose prose-invert max-w-none">
            {renderMarkdownSection(introPart)}
          </section>
        )}

        {/* 2. 미래 수익화 광고 Clean Zone - 상부 배너 */}
        <section className="w-full py-6 px-8 rounded-2xl bg-slate-900/20 border border-dashed border-slate-800 text-center text-xs font-semibold text-slate-500 hover:border-slate-700 transition-colors">
          {AD_PLACEMENT_TEXT[lang] || AD_PLACEMENT_TEXT.en}
        </section>

        {/* 3. 10대 여름철 음식 리스트 카드 영역 */}
        <section className="space-y-12">
          {summerFoodsList.map((food, idx) => {
            const numLabel = String(idx + 1).padStart(2, "0");
            const isHot = food.categoryType === "hot";
            const foodName = food.name[lang] || food.name.en;
            const categoryName = food.category[lang] || food.category.en;
            const summary = food.summary[lang] || food.summary.en;
            const culture = food.culture[lang] || food.culture.en;
            const caution = food.caution[lang] || food.caution.en;

            // 라벨 매핑 (이열치열, 보양식, 면요리 등)
            let labelsKo = "보양식";
            let labelsEn = "Nourishment";
            if (food.id === "summer-01") { labelsKo = "이열치열 · 보양식"; labelsEn = "Iyeol-chiyeol · Nourishment"; }
            else if (food.id === "summer-02") { labelsKo = "이열치열 · 매운 국물"; labelsEn = "Iyeol-chiyeol · Spicy Stew"; }
            else if (food.id === "summer-03") { labelsKo = "이냉치냉 · 냉보양식"; labelsEn = "Inaeng-chineg · Chilled Restoration"; }
            else if (food.id === "summer-04") { labelsKo = "이냉치냉 · 궁중 냉보양식"; labelsEn = "Inaeng-chineg · Royal Chilled Nourishment"; }
            else if (food.id === "summer-05") { labelsKo = "이냉치냉 · 면 요리"; labelsEn = "Inaeng-chineg · Buckwheat Noodles"; }
            else if (food.id === "summer-06") { labelsKo = "이냉치냉 · 향토 면 요리"; labelsEn = "Inaeng-chineg · Local Wheat Noodles"; }
            else if (food.id === "summer-07") { labelsKo = "이냉치냉 · 식물성 보양식"; labelsEn = "Inaeng-chineg · Plant Protein"; }
            else if (food.id === "summer-08") { labelsKo = "제철 냉국 · 생활 음식"; labelsEn = "Seasonal Cold Soup · Daily Dish"; }
            else if (food.id === "summer-09") { labelsKo = "전통 음청류 · 계절 디저트"; labelsEn = "Traditional Beverage · Seasonal Dessert"; }
            else if (food.id === "summer-10") { labelsKo = "전통 음청류 · 대용식"; labelsEn = "Traditional Shake · Meal Replacement"; }

            const labelStr = lang === "ko" ? labelsKo : labelsEn;

            return (
              <article 
                key={food.id}
                className="group relative bg-slate-900/30 border border-slate-800/60 rounded-3xl p-8 md:p-10 hover:border-slate-700 transition-all duration-300"
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
                        <span>{CAUTION_BOX_TITLE[lang] || CAUTION_BOX_TITLE.en}</span>
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

        {/* 결론 섹션 */}
        {conclusionPart && (
          <section className="prose prose-invert max-w-none">
            {renderMarkdownSection(conclusionPart)}
          </section>
        )}

        {/* 4. 미래 수익화 광고 Clean Zone - 하부 배너 */}
        <section className="w-full py-6 px-8 rounded-2xl bg-slate-900/20 border border-dashed border-slate-800 text-center text-xs font-semibold text-slate-500 hover:border-slate-700 transition-colors">
          {AD_PLACEMENT_TEXT[lang] || AD_PLACEMENT_TEXT.en}
        </section>

        {/* 5. 하단 CTA 링크 버튼 섹션 */}
        <section className="border-t border-slate-900 pt-12 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>{CTA_HEADER_TITLE[lang] || CTA_HEADER_TITLE.en}</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {summerKoreanFoods10Content.cta.map((link, idx) => {
              const labelText = link.label[lang] || link.label.en;
              // 언어 프리픽스 지원 링크 생성
              const hrefWithLocale = `/${lang}${link.href.replace(/^\/[a-z]{2}/, "")}`;

              return (
                <Link
                  key={idx}
                  href={hrefWithLocale}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-rose-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-md"
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
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
