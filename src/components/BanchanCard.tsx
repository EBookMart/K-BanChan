"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Banchan } from "../types/banchan";

interface BanchanCardProps {
  banchan: Banchan;
  locale: string;
  categoryLabel: string;
}

export default function BanchanCard({ banchan, locale, categoryLabel }: BanchanCardProps) {
  const [imgError, setImgError] = useState(false);

  // 로케일에 따른 반찬 명칭 결정
  // name_ko, name_en, name_ru 중 매칭되는 것을 꺼내고 없으면 ko를 기본값으로 함
  const getNameByLocale = () => {
    switch (locale) {
      case "ko":
        return banchan.name_ko;
      case "en":
        return banchan.name_en;
      case "ru":
        return banchan.name_ru;
      case "ja":
        return banchan.name_ja || banchan.name_en;
      case "zh":
        return banchan.name_zh || banchan.name_en;
      case "es":
        return banchan.name_es || banchan.name_en;
      case "ar":
        return banchan.name_ar || banchan.name_en;
      default:
        return banchan.name_en;
    }
  };

  const displayName = getNameByLocale();

  // 매운맛 🌶️ 스트링 생성
  const spicyString = banchan.spicy_level > 0 ? "🌶️".repeat(banchan.spicy_level) : "";

  return (
    <Link
      href={`/${locale}/banchan/${banchan.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200/50 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* 이미지 영역 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        {/* 순위 표시 뱃지 */}
        <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-400/30">
          Rank {banchan.rank}
        </div>

        {/* 비건 뱃지 */}
        {banchan.vegan && (
          <div className="absolute top-3 right-3 z-10 bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-md tracking-wider">
            Vegan
          </div>
        )}

        {/* 메인 이미지 혹은 오방색 그라디언트 fallback */}
        {!imgError ? (
          <Image
            src={banchan.image_url}
            alt={displayName}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-amber-500 to-blue-700 flex items-center justify-center p-4">
            <span className="text-white/20 text-7xl font-black select-none pointer-events-none">
              K-FOOD
            </span>
          </div>
        )}
      </div>

      {/* 정보 영역 */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* 카테고리 & 매운맛 */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              {categoryLabel}
            </span>
            {spicyString && (
              <span className="text-xs font-medium text-red-600" title={`Spiciness: Level ${banchan.spicy_level}`}>
                {spicyString}
              </span>
            )}
          </div>

          {/* 반찬명 */}
          <h3 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-1 text-sm md:text-base">
            {displayName}
          </h3>

          {/* 한글 보조명 (로케일이 영어/러시아어 등 다국어인 경우 한글명을 작게 띄워줍니다) */}
          {locale !== "ko" && (
            <p className="text-xs text-gray-400 mt-0.5 font-medium">{banchan.name_ko}</p>
          )}
        </div>

        {/* 한 줄 설명 */}
        <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
          {banchan.summary}
        </p>
      </div>
    </Link>
  );
}
