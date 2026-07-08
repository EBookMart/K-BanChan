"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ingredientCategories } from "@/data/ingredients";
import banchanData from "@/data/banchan.json";
import { ArrowRight, Leaf, Fish, Beef, Bean, Activity, LucideProps } from "lucide-react";

// Lucide 아이콘 매핑
const categoryIcons: Record<string, React.ComponentType<LucideProps>> = {
  vegetables: Leaf,
  seafood: Fish,
  meat: Beef,
  legumes: Bean,
  fermented: Activity,
};

type Props = {
  locale: string;
  translations: Record<string, string>;
};

export default function IngredientsClient({ locale, translations }: Props) {
  const [activeTab, setActiveTab] = useState<string>(ingredientCategories[0].id);

  // 현재 활성화된 카테고리 데이터
  const activeCategory =
    ingredientCategories.find((cat) => cat.id === activeTab) || ingredientCategories[0];

  // 관련 반찬 목록 필터링
  const relatedBanchans = banchanData.filter((b) =>
    activeCategory.relatedBanchanIds.includes(b.id)
  );

  const isRtl = locale === "ar";

  return (
    <div className="w-full space-y-12">
      {/* 5대 카테고리 탭 리스트 */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-slate-800 pb-6">
        {ingredientCategories.map((cat) => {
          const IconComponent = categoryIcons[cat.id] || Leaf;
          const isActive = cat.id === activeTab;
          const catName = cat.name[locale] || cat.name.en;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900 hover:border-slate-700"
              }`}
            >
              <IconComponent size={18} />
              <span>{catName}</span>
            </button>
          );
        })}
      </div>

      {/* 선택된 카테고리 상세 설명 영역 (글래스모피즘 박스) */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 md:p-10 backdrop-blur-xl">
        {/* 장식용 은은한 그라데이션 */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            {activeCategory.name[locale] || activeCategory.name.en}
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight">
            {activeCategory.description[locale] || activeCategory.description.en}
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            {activeCategory.longDescription[locale] || activeCategory.longDescription.en}
          </p>
        </div>
      </div>

      {/* 관련 반찬 리스트 섹션 */}
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{translations.relatedBanchan}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedBanchans.map((banchan) => {
            const name = banchan[`name_${locale}` as keyof typeof banchan] || banchan.name_en;
            const summary = banchan.summary;
            const spicy = banchan.spicy_level;
            
            return (
              <div
                key={banchan.id}
                className="group relative flex flex-col justify-between bg-slate-900/35 border border-slate-800/70 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-emerald-950/20"
              >
                <div>
                  {/* 카드 상단 이미지 혹은 장식 */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-800/50">
                    {banchan.image_url ? (
                      <Image
                        src={banchan.image_url}
                        alt={String(name)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 600px) 100vw, 400px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-700 bg-slate-950">
                        No Image Available
                      </div>
                    )}
                    {/* 맵기 표시 */}
                    {spicy > 0 && (
                      <span className="absolute top-2 right-2 bg-rose-500/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {"🔥".repeat(spicy)}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-serif mb-2">
                    {String(name)}
                  </h4>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                    {String(summary)}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-4">
                  <Link
                    href={`/banchan`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  >
                    <span>{translations.viewDetail}</span>
                    <ArrowRight
                      size={14}
                      className={`transition-transform duration-300 group-hover/link:translate-x-1 ${
                        isRtl ? "rotate-180 group-hover/link:-translate-x-1" : ""
                      }`}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
