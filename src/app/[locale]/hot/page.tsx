import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getAllCurations } from "@/data/hot-curations";
import { ArrowRight, Flame } from "lucide-react";
import { aiImages } from "@/data/ai-images";

interface Props {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    ko: "🔥 HOT 8 DISHES - 한식 특별 큐레이션 | K-BanChan",
    en: "🔥 HOT 8 DISHES - Special Korean Food Curations | K-BanChan",
    ja: "🔥 HOT 8 DISHES - 韓国料理特別キュレーション | K-BanChan",
    zh: "🔥 HOT 8 DISHES - 韩食特别推荐 | K-BanChan",
    es: "🔥 HOT 8 DISHES - Curadurías Especiales de Comida Coreana | K-BanChan",
    fr: "🔥 HOT 8 PLATS - Sélections Spéciales de Cuisine Coréenne | K-BanChan",
    ar: "🔥 HOT 8 DISHES - تنظيمات الطعام الكوري الخاصة | K-BanChan",
    ru: "🔥 HOT 8 DISHES - Специальные Корейские Подборки | K-BanChan",
  };

  const descriptions: Record<string, string> = {
    ko: "오방색 철학과 테마로 엄선된 K-반찬 8선 특별 큐레이션 채널을 확인하세요.",
    en: "Check out the special Hot 8 K-BanChan curation channels selected with the philosophy and theme of Obangsaek.",
    ja: "五方色の哲学とテーマで厳選されたK-おかず8選特別キュレーションチャンネルをご覧ください。",
    zh: "查看基于五方色哲学和主题精心挑选的8款韩国伴餐特别推荐频道。",
    es: "Descubra los canales especiales de curaduría de K-BanChan seleccionados bajo la filosofía de Obangsaek.",
    fr: "Découvrez les canaux de curation spéciaux Hot 8 K-BanChan sélectionnés selon la philosophie Obangsaek.",
    ar: "اكتشف قنوات التقييم الخاصة بـ K-BanChan المختارة بعناية وفقًا لفلسفة أوبانغ سيك.",
    ru: "Откройте для себя особые подборки из 8 лучших корейских банчанов, вдохновленные традиционной философией.",
  };

  return {
    title: titles[locale] || titles["en"],
    description: descriptions[locale] || descriptions["en"],
    openGraph: {
      title: titles[locale] || titles["en"],
      description: descriptions[locale] || descriptions["en"],
      url: `https://k-banchan.net/${locale}/hot`,
      images: [{ url: "/images/ai/hot/hot8-hero.webp", width: 800, height: 600, alt: "HOT 8 DISHES" }],
    },
  };
}

export default function HotIndexPage({ params: { locale } }: Props) {
  const curations = getAllCurations();

  const pageTitles: Record<string, string> = {
    ko: "HOT 8 DISHES",
    en: "HOT 8 DISHES",
    ja: "HOT 8 DISHES",
    zh: "HOT 8 DISHES",
    es: "HOT 8 DISHES",
    fr: "HOT 8 PLATS",
    ar: "HOT 8 DISHES",
    ru: "HOT 8 DISHES",
  };

  const pageSubtitles: Record<string, string> = {
    ko: "한식 고유의 철학과 테마별로 엄선한 가장 핫한 반찬 8선 특별 컬렉션",
    en: "A special collection of the hottest 8 side dishes hand-picked by Korean culinary philosophy and themes",
    ja: "韓国料理ならではの哲学とテーマ別に厳選した、最もホットなおかず8選の特別コレクション",
    zh: "根据韩食特有哲学与主题精心挑选的最热门伴餐8选特别系列",
    es: "Una colección especial de los 8 platos de acompañamiento más populares seleccionados por filosofía y temas de la cocina coreana",
    fr: "Une collection spéciale des 8 plats d'accompagnement les plus populaires, sélectionnés selon la philosophie et les thèmes de la cuisine coréenne",
    ar: "مجموعة خاصة من أكثر 8 أطباق جانية تم اختيارها بعناية بناءً على فلسفة المطبخ الكوري والمواضيع المتنوعة",
    ru: "Специальная коллекция из 8 самых популярных закусок, отобранных по темам и философии корейской кухни",
  };

  const viewCollectionText: Record<string, string> = {
    ko: "컬렉션 보기",
    en: "View Collection",
    ja: "コレクションを見る",
    zh: "查看系列",
    es: "Ver Colección",
    fr: "Voir la Collection",
    ar: "عرض المجموعة",
    ru: "Посмотреть подборку",
  };

  const specialCurationSectionTitles: Record<string, string> = {
    ko: "✨ 특별 테마 큐레이션",
    en: "✨ Special Theme Curations",
    ja: "✨ 特別テーマキュレーション",
    zh: "✨ 特色主题推荐",
    es: "✨ Curadurías Especiales Temáticas",
    fr: "✨ Curations Spéciales Thématiques",
    ar: "✨ تنسيقات خاصة للموضوعات",
    ru: "✨ Специальные Тематические Подборки",
  };

  const summerFoodsTitles: Record<string, string> = {
    ko: "여름철 한국음식 10선 (Summer Curation)",
    en: "Summer Korean Foods 10",
    ja: "夏の韓国料理 10選",
    zh: "夏日韩食10选",
    es: "10 comidas de verano",
    fr: "10 Plats Coréens d'Été",
    ar: "10 أطباق صيفية كورية",
    ru: "10 летних корейских блюд"
  };

  const summerFoodsDescs: Record<string, string> = {
    ko: "삼복더위를 이겨내기 위해 뜨거운 보양과 시원한 냉식의 지혜를 유기적으로 결합한 한국 여름 음식 10선을 소개합니다.",
    en: "Discover the 10 traditional Korean summer dishes blending the wisdom of hot nourishment and cold refreshment.",
    ja: "猛暑を乗り切るための温かい補養と冷たい食事の知恵を有機的に結びつけた、韓国の夏の料理10選を紹介します。",
    zh: "为您介绍将温热滋补与清凉冷食智慧有机结合、旨在度过三伏暑天的10款夏季美食。",
    es: "Descubra las 10 comidas tradicionales de verano que combinan la sabiduría del calor nutritivo y el frío refrescante.",
    fr: "Découvrez 10 plats d'été traditionnels alliant la sagesse du réconfort chaud et du rafraîchissement glacé.",
    ar: "اكتشف 10 أطباق كورية صيفية تجمع بين حكمة الغذاء الساخن المغذي والانتعاش البارد للتغلب على الحر.",
    ru: "Откройте для себя 10 летних блюд, сочетающих пользу горячего бульона и прохладу холодных закусок."
  };

  const seasonalTitles: Record<string, string> = {
    ko: "절기별 제철 반찬 (Seasonal Curation)",
    en: "Seasonal Curation",
    ja: "二十四節気の季節のおかず",
    zh: "节气时令伴餐",
    es: "Curaduría Estacional",
    fr: "Curation Saisonnière de Banchans",
    ar: "تنظيم الأطباق الجانبية الموسمية",
    ru: "Сезонный Подбор Закусок"
  };

  const seasonalDescs: Record<string, string> = {
    ko: "자연의 순환에 순응하며, 절기마다 몸의 치유를 돕는 신선한 제철 한식 식재료 본연의 맛을 소개합니다.",
    en: "Embrace nature's cycles with seasonal ingredients that restore balance, offering fresh flavors tailored to each time of the year.",
    ja: "自然の循環に順応し、二十四節気ごとに体の治癒を助ける新鮮な旬の韓国食材本来の味を紹介します。",
    zh: "顺应自然循环，为您介绍每个节气有助于身体康健的新鲜时令韩食食材原本的风味。",
    es: "Adopte los ciclos de la naturaleza con ingredientes de temporada que restauran el equilibrio y ofrecen sabores frescos.",
    fr: "Suivez le cycle de la nature avec des ingrédients de saison qui rétablissent l'équilibre de l'organisme.",
    ar: "احتضن دورات الطبيعة مع المكونات الموسمية التي تعيد التوازن، وتقدم نكهات طازجة مخصصة لكل وقت من السنة.",
    ru: "Следуйте природным циклам с сезонными ингредиентами, которые восстанавливают баланс организма."
  };

  const mediaTitles: Record<string, string> = {
    ko: "미디어 속 한식과 스토리 (Media-Linked Curation)",
    en: "Media-Linked Curation",
    ja: "メディアの中の韓国料理とストーリー",
    zh: "媒体中的韩食与故事",
    es: "Curaduría de Comida en los Medios",
    fr: "Storytelling du K-Food dans les Médias",
    ar: "الأطباق الكورية المنسقة عبر وسائل الإعلام",
    ru: "Корейская Кухня в Медиа и Истории"
  };

  const mediaDescs: Record<string, string> = {
    ko: "영화, 드라마, 다큐멘터리 등 미디어를 장식한 따뜻한 한식 반찬들과 그 속에 담긴 특별한 이야기와 문화적 정서를 조명합니다.",
    en: "Explore the cultural warmth and narratives behind iconic Korean side dishes featured across popular media, films, and television.",
    ja: "映画、ドラマ、ドキュメンタリーなどのメディアを飾った温かい韓国のおかずと、そこに込められた特別な物語や特別な情緒に焦点を当てます。",
    zh: "为您呈现电影、电视剧、纪录片等媒体中出现过的温馨韩食小菜，以及其中蕴含的特别故事与文化情感。",
    es: "Explore la calidez cultural y las narrativas detrás de las guarniciones coreanas icónicas que aparecen en los medios y la televisión.",
    fr: "Explorez la chaleur culturelle et les récits derrière les banchans coréens emblématiques présentés dans les médias.",
    ar: "استكشف الدفء الثقافي والروايات الكامنة وراء الأطباق الجانبية الكورية الشهيرة المعروضة في وسائل الإعلام الشعبية والتلفزيون.",
    ru: "Исследуйте культурное тепло и истории, стоящие за культовыми корейскими закусками в популярных медиа."
  };

  const title = pageTitles[locale] || pageTitles["en"];
  const subtitle = pageSubtitles[locale] || pageSubtitles["en"];
  const viewText = viewCollectionText[locale] || viewCollectionText["en"];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 md:py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <Flame className="w-3.5 h-3.5" />
            <span>K-Banchan Curations</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-base md:text-xl text-slate-400 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[24/10] rounded-3xl overflow-hidden border border-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-16">
          <Image
            src={aiImages.hot8Hero.src}
            alt={aiImages.hot8Hero.alt[locale as keyof typeof aiImages.hot8Hero.alt] || aiImages.hot8Hero.alt.en}
            fill
            priority
            className="object-cover responsive-object-fit"
            style={{
              "--object-position-mobile": aiImages.hot8Hero.objectPositionMobile || "center",
              "--object-position-desktop": aiImages.hot8Hero.objectPositionDesktop || "center",
            } as React.CSSProperties}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curations.map((cur) => {
            const curTitle = cur.title[locale] || cur.title["en"];
            const curDesc = cur.description[locale] || cur.description["en"];
            
            let hoverShadow = "hover:shadow-rose-500/10 hover:border-rose-500/30";
            if (cur.slug === "vegan-wellness") {
              hoverShadow = "hover:shadow-emerald-500/10 hover:border-emerald-500/30";
            } else if (cur.slug === "home-essentials") {
              hoverShadow = "hover:shadow-amber-500/10 hover:border-amber-500/30";
            }

            return (
              <Link
                key={cur.slug}
                href={`/hot/${cur.slug}`}
                className={`group flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/60 transition-all duration-300 transform hover:-translate-y-1.5 shadow-2xl ${hoverShadow}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: cur.colorHex }}
                    />
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase text-slate-500"
                    >
                      8 Items Mapping
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                    {curTitle}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                    {curDesc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-rose-400 transition-colors">
                  <span>{viewText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-20 md:mt-28 border-t border-slate-900 pt-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10 tracking-tight text-center md:text-left">
            {specialCurationSectionTitles[locale] || specialCurationSectionTitles["en"]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. 절기별 제철 반찬 */}
            <div className="group flex flex-col justify-between p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 shadow-2xl">
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-slate-800/80">
                  <Image
                    src={aiImages.seasonalCuration.src}
                    alt={aiImages.seasonalCuration.alt[locale as keyof typeof aiImages.seasonalCuration.alt] || aiImages.seasonalCuration.alt.en}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  {seasonalTitles[locale] || seasonalTitles["en"]}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {seasonalDescs[locale] || seasonalDescs["en"]}
                </p>
              </div>
            </div>

            {/* 2. 미디어 속 한식 */}
            <div className="group flex flex-col justify-between p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 shadow-2xl">
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-slate-800/80">
                  <Image
                    src={aiImages.mediaLinkedCuration.src}
                    alt={aiImages.mediaLinkedCuration.alt[locale as keyof typeof aiImages.mediaLinkedCuration.alt] || aiImages.mediaLinkedCuration.alt.en}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  {mediaTitles[locale] || mediaTitles["en"]}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {mediaDescs[locale] || mediaDescs["en"]}
                </p>
              </div>
            </div>

            {/* 3. 신규 추가: 여름철 한국음식 10선 */}
            <Link
              href={`/hot/summer-korean-foods-10`}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/50 hover:border-rose-500/30 transition-all duration-300 shadow-2xl"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-slate-800/80">
                  <Image
                    src={aiImages.summerFoodsHero.src}
                    alt={aiImages.summerFoodsHero.alt[locale as keyof typeof aiImages.summerFoodsHero.alt] || aiImages.summerFoodsHero.alt.en}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 600px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  {summerFoodsTitles[locale] || summerFoodsTitles["en"]}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {summerFoodsDescs[locale] || summerFoodsDescs["en"]}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-rose-400 transition-colors mt-6">
                <span>{viewText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
