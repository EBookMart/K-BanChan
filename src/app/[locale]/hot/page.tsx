import React from "react";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getAllCurations } from "@/data/hot-curations";
import { ArrowRight, Flame } from "lucide-react";

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
    ar: "🔥 HOT 8 DISHES - تنظيمات الطعام الكوري الخاصة | K-BanChan",
    ru: "🔥 HOT 8 DISHES - Специальные Корейские Подборки | K-BanChan",
  };

  const descriptions: Record<string, string> = {
    ko: "오방색 철학과 테마로 엄선된 K-반찬 8선 특별 큐레이션 채널을 확인하세요.",
    en: "Check out the special Hot 8 K-BanChan curation channels selected with the philosophy and theme of Obangsaek.",
    ja: "五方色の哲学とテーマで厳選されたK-おかず8選特別キュレーションチャンネルをご覧ください。",
    zh: "查看基于五方色哲学和主题精心挑选的8款韩国伴餐特别推荐频道。",
    es: "Descubra los canales especiales de curaduría de K-BanChan seleccionados bajo la filosofía de Obangsaek.",
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
      images: [{ url: "/logos/kbanchan-logo.png", width: 1200, height: 630 }],
    },
  };
}

export default function HotIndexPage({ params: { locale } }: Props) {
  const curations = getAllCurations();

  // 각 언어에 맞는 라벨 설정
  const pageTitles: Record<string, string> = {
    ko: "HOT 8 DISHES",
    en: "HOT 8 DISHES",
    ja: "HOT 8 DISHES",
    zh: "HOT 8 DISHES",
    es: "HOT 8 DISHES",
    ar: "HOT 8 DISHES",
    ru: "HOT 8 DISHES",
  };

  const pageSubtitles: Record<string, string> = {
    ko: "한식 고유의 철학과 테마별로 엄선한 가장 핫한 반찬 8선 특별 컬렉션",
    en: "A special collection of the hottest 8 side dishes hand-picked by Korean culinary philosophy and themes",
    ja: "韓国料理ならではの哲学とテーマ別に厳選した、最もホットなおかず8選の特別コレクション",
    zh: "根据韩食特有哲学与主题精心挑选的最热门伴餐8选特别系列",
    es: "Una colección especial de los 8 platos de acompañamiento más populares seleccionados por filosofía y temas de la cocina coreana",
    ar: "مجموعة خاصة من أكثر 8 أطباق جانية تم اختيارها بعناية بناءً على فلسفة المطبخ الكوري والمواضيع المتنوعة",
    ru: "Специальная коллекция из 8 самых популярных закусок, отобранных по темам и философии корейской кухни",
  };

  const viewCollectionText: Record<string, string> = {
    ko: "컬렉션 보기",
    en: "View Collection",
    ja: "コレクションを見る",
    zh: "查看系列",
    es: "Ver Colección",
    ar: "عرض المجموعة",
    ru: "Посмотреть подборку",
  };

  const title = pageTitles[locale] || pageTitles["en"];
  const subtitle = pageSubtitles[locale] || pageSubtitles["en"];
  const viewText = viewCollectionText[locale] || viewCollectionText["en"];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 md:py-24 px-4 relative overflow-hidden">
      {/* 배경 장식 원형 조명 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* 상단 타이틀 영역 */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
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

        {/* 큐레이션 채널 카드 그리드 (3단 구성) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curations.map((cur) => {
            const curTitle = cur.title[locale] || cur.title["en"];
            const curDesc = cur.description[locale] || cur.description["en"];
            
            // 테마별 호버 섀도우 효과 매핑
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
                  {/* 컬러 뱃지 및 아이콘 데코 */}
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

                  {/* 큐레이션 타이틀 */}
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                    {curTitle}
                  </h2>

                  {/* 큐레이션 설명 */}
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                    {curDesc}
                  </p>
                </div>

                {/* 이동 링크 액션 */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-rose-400 transition-colors">
                  <span>{viewText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
