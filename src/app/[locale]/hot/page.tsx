import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getAllCurations } from "@/data/hot-curations";
import { ArrowRight, Flame, Download } from "lucide-react";
import MonetizationCTA from "@/components/MonetizationCTA";
import { aiImages } from "@/data/ai-images";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const titles: Record<string, string> = {
    ko: "🔥 인기 반찬 8선 - 한식 특별 큐레이션 | K-BanChan",
    en: "🔥 Top 8 Dishes - Special Korean Food Curations | K-BanChan",
    ja: "🔥 人気おかず8選 - 韓国料理特別キュレーション | K-BanChan",
    zh: "🔥 人气伴餐8选 - 韩食特别推荐 | K-BanChan",
    es: "🔥 Los 8 mejores platos - Curadurías Especiales de Comida Coreana | K-BanChan",
    fr: "🔥 8 Meilleurs Plats - Sélections Spéciales de Cuisine Coréenne | K-BanChan",
    ar: "🔥 أفضل ٨ أطباق - تنظيمات الطعام الكوري الخاصة | K-BanChan",
    ru: "🔥 8 лучших блюд - Специальные Корейские Подборки | K-BanChan",
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
    ko: "인기 반찬 8선",
    en: "Top 8 Dishes",
    ja: "人気おかず8選",
    zh: "人气伴餐8选",
    es: "Los 8 mejores platos",
    fr: "8 Meilleurs Plats",
    ar: "أفضل ٨ أطباق",
    ru: "8 лучших блюд",
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
    ko: "계절별 반찬 (Seasonal Banchan)",
    en: "Seasonal Banchan",
    ja: "季節のおかず",
    zh: "季节性伴餐",
    es: "Guarniciones de Temporada",
    fr: "Banchans de Saison",
    ar: "أطباق جانبية موسمية",
    ru: "Сезонные закуски"
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

  const feastTitles: Record<string, string> = {
    ko: "잔치와 명절음식 (Feast & Holidays)",
    en: "Feast & Holidays",
    ja: "宴会と名節料理",
    zh: "节日与宴会美食",
    es: "Banquete y Comidas Navideñas",
    fr: "Fêtes et Plats de Célébration",
    ar: "أطعمة الأعياد والولائم",
    ru: "Праздничные блюда"
  };

  const feastDescs: Record<string, string> = {
    ko: "돌잔치, 생일상, 회갑연부터 추석과 설날까지, 특별한 날을 기념하는 다채로운 명절음식을 소개합니다.",
    en: "From birthdays to major holidays like Chuseok and Seollal, discover colorful festive foods that celebrate special occasions.",
    ja: "お誕生日や還暦のお祝いから秋夕やお正月まで、特別な日を記念する多彩な名節料理を紹介します。",
    zh: "从周岁宴、生日宴到中秋节和春节，为您介绍庆祝特别日子的丰富节日美食。",
    es: "Desde cumpleaños hasta días festivos importantes, descubra comidas festivas que celebran ocasiones especiales.",
    fr: "Des anniversaires aux grandes fêtes, découvrez les plats de fête colorés qui célèbrent les occasions spéciales.",
    ar: "من أعياد الميلاد إلى العطلات الكبرى، اكتشف الأطعمة الاحتفالية الملونة التي تحتفل بالمناسبات الخاصة.",
    ru: "От дней рождения до главных праздников, откройте для себя красочные праздничные блюда."
  };

  const seasonLabels: Record<string, Record<string, string>> = {
    spring: { ko: "봄", en: "Spring", ja: "春", zh: "春", es: "Primavera", fr: "Printemps", ar: "ربيع", ru: "Весна" },
    summer: { ko: "여름", en: "Summer", ja: "夏", zh: "夏", es: "Verano", fr: "Été", ar: "صيف", ru: "Лето" },
    autumn: { ko: "가을", en: "Autumn", ja: "秋", zh: "秋", es: "Otoño", fr: "Automne", ar: "خريف", ru: "Осень" },
    winter: { ko: "겨울", en: "Winter", ja: "冬", zh: "冬", es: "Invierno", fr: "Hiver", ar: "شتاء", ru: "Зима" },
  };

  const feastTags: Record<string, Record<string, string>> = {
    dol: { ko: "돌잔치", en: "Doljanchi", ja: "トルジャンチ", zh: "周岁宴", es: "Doljanchi", fr: "Doljanchi", ar: "دولجانشي", ru: "Дольджанчи" },
    birthday: { ko: "생일상", en: "Birthday", ja: "誕生日の膳", zh: "生日宴", es: "Cumpleaños", fr: "Anniversaire", ar: "عيد ميلاد", ru: "День рождения" },
    hoegap: { ko: "회갑연", en: "Hoegap", ja: "還暦祝い", zh: "花甲宴", es: "Hoegap", fr: "Hoegap", ar: "هويجاب", ru: "Хвегап" },
    chuseok: { ko: "추석", en: "Chuseok", ja: "秋夕(チュソク)", zh: "中秋节", es: "Chuseok", fr: "Chuseok", ar: "تشوسوك", ru: "Чусок" },
    daeboreum: { ko: "정월대보름", en: "Daeboreum", ja: "正月大満月", zh: "正月十五", es: "Daeboreum", fr: "Daeboreum", ar: "دايبوريوم", ru: "Тэборым" },
    seollal: { ko: "설날", en: "Seollal", ja: "旧正月(ソルラル)", zh: "春节", es: "Seollal", fr: "Seollal", ar: "سيولال", ru: "Соллаль" },
  };

  interface SeasonalCurationItem {
    slug: string;
    season: 'spring' | 'summer' | 'autumn' | 'winter';
    title: Record<string, string>;
    summary: Record<string, string>;
    status: 'ready' | 'planned' | 'placeholder';
    linkedPath?: string;
  }

  const seasonalCurationsData: SeasonalCurationItem[] = [
    {
      slug: 'spring-curation',
      season: 'spring',
      title: { ko: "봄내음 가득한 제철 반찬", en: "Spring Seasonal Banchan", ja: "春の旬のおかず", zh: "春季时令伴餐", es: "Banchan de Primavera", fr: "Banchan de Printemps", ar: "أطباق الربيع", ru: "Весенние закуски" },
      summary: { ko: "봄철 입맛을 돋우는 신선한 큐레이션 준비중입니다.", en: "Spring curation coming soon.", ja: "春のキュレーション準備中", zh: "春季推荐准备中", es: "Curaduría de primavera pronto", fr: "Curation de printemps bientôt", ar: "تنسيق الربيع قريباً", ru: "Весенняя подборка скоро" },
      status: 'planned'
    },
    {
      slug: 'summer-korean-foods-10',
      season: 'summer',
      title: summerFoodsTitles,
      summary: summerFoodsDescs,
      status: 'ready',
      linkedPath: '/hot/summer-korean-foods-10'
    },
    {
      slug: 'autumn-curation',
      season: 'autumn',
      title: { ko: "가을 추수 제철 반찬", en: "Autumn Seasonal Banchan", ja: "秋の旬のおかず", zh: "秋季时令伴餐", es: "Banchan de Otoño", fr: "Banchan d'Automne", ar: "أطباق الخريف", ru: "Осенние закуски" },
      summary: { ko: "가을철 풍성한 영양을 담은 큐레이션 준비중입니다.", en: "Autumn curation coming soon.", ja: "秋のキュレーション準備中", zh: "秋季推荐准备中", es: "Curaduría de otoño pronto", fr: "Curation d'automne bientôt", ar: "تنسيق الخريف قريباً", ru: "Осенняя подборка скоро" },
      status: 'planned'
    },
    {
      slug: 'winter-curation',
      season: 'winter',
      title: { ko: "겨울 보양 제철 반찬", en: "Winter Seasonal Banchan", ja: "冬の旬のおかず", zh: "冬季时令伴餐", es: "Banchan de Invierno", fr: "Banchan d'Hiver", ar: "أطباق الشتاء", ru: "Зимние закуски" },
      summary: { ko: "겨울철 깊은 맛을 내는 큐레이션 준비중입니다.", en: "Winter curation coming soon.", ja: "冬のキュレーション準備中", zh: "冬季推荐准备中", es: "Curaduría de invierno pronto", fr: "Curation d'hiver bientôt", ar: "تنسيق الشتاء قريباً", ru: "Зимняя подборка скоро" },
      status: 'planned'
    }
  ];

  const title = pageTitles[locale] || pageTitles["en"];
  const subtitle = pageSubtitles[locale] || pageSubtitles["en"];
  const viewText = viewCollectionText[locale] || viewCollectionText["en"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-6 pb-16 md:pt-10 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SeasonalThemeBanner locale={locale} />
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
          
          <div className="flex flex-col gap-8">
            {/* 1. 계절별 반찬 (Full Width) */}
            <div className="col-span-full group flex flex-col p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8 border-b border-slate-800 pb-6">
                <div className="relative aspect-[16/9] w-full md:w-1/3 max-w-[300px] rounded-2xl overflow-hidden border border-slate-800/80 shrink-0">
                  <Image
                    src={aiImages.seasonalCuration.src}
                    alt={aiImages.seasonalCuration.alt[locale as keyof typeof aiImages.seasonalCuration.alt] || aiImages.seasonalCuration.alt.en}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 600px) 100vw, 300px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {seasonalTitles[locale] || seasonalTitles["en"]}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {seasonalDescs[locale] || seasonalDescs["en"]}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {seasonalCurationsData.map((season) => {
                  const title = season.title[locale] || season.title["en"];
                  const summary = season.summary[locale] || season.summary["en"];
                  const isReady = season.status === 'ready';

                  if (isReady && season.linkedPath) {
                    return (
                      <Link
                        key={season.slug}
                        href={season.linkedPath}
                        className="flex flex-col p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 relative overflow-hidden group/card"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50" />
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-3 w-fit">
                          {seasonLabels[season.season][locale] || seasonLabels[season.season]["en"]}
                        </span>
                        <h4 className="text-base font-bold text-white mb-2 group-hover/card:text-blue-400 transition-colors">
                          {title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-3 mb-4 flex-grow">
                          {summary}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 mt-auto">
                          <span>{viewText}</span>
                          <ArrowRight className="w-3 h-3 transform group-hover/card:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={season.slug}
                      className="flex flex-col p-5 rounded-2xl bg-slate-950/50 border border-slate-800/80 transition-all duration-300 relative"
                    >
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700 mb-3 w-fit">
                        {seasonLabels[season.season][locale] || seasonLabels[season.season]["en"]}
                      </span>
                      <h4 className="text-base font-bold text-slate-300 mb-2">
                        {title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-3 mb-4 flex-grow italic">
                        {summary}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-800/50">
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                           Curated Soon
                         </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {mediaDescs[locale] || mediaDescs["en"]}
                  </p>
                  <div className="p-4 bg-slate-950/50 border border-slate-800/50 rounded-xl flex items-center justify-center gap-2 text-slate-400 mt-auto">
                    <span className="text-sm font-semibold tracking-wide">AI Curation Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* 3. 잔치와 명절음식 */}
              <div className="group flex flex-col justify-between p-6 rounded-3xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 shadow-2xl">
                <div>
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-slate-800/80 bg-slate-800 flex items-center justify-center">
                     <span className="text-slate-600 font-bold tracking-widest uppercase">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                    {feastTitles[locale] || feastTitles["en"]}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {feastDescs[locale] || feastDescs["en"]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {Object.values(feastTags).map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[10px] font-bold text-slate-400 bg-slate-950/80 border border-slate-800/50 rounded-md">
                        {tag[locale] || tag["en"]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 구독/다운로드 CTA */}
        <div className="mt-20 border-t border-slate-900 pt-16">
          <MonetizationCTA 
            title="계절별 반찬 큐레이션 북"
            description="사계절 제철 식재료를 활용한 K-BanChan의 베스트 큐레이션을 PDF로 무료 다운로드하세요."
            buttonLabel="다운로드 받기"
            href="/archive"
            eventName="cta_click_guide_download"
            variant="primary"
            icon={<Download size={24} />}
          />
        </div>

      </div>
      </main>
      <Footer />
    </div>
  );
}
