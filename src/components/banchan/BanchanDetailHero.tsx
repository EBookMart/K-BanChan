import React from "react";
import BanchanDetailImage from "@/components/BanchanDetailImage";
import { Award, Flame, Leaf } from "lucide-react";

interface Props {
  imageUrl: string;
  imageAlt: string;
  displayName: string;
  subName?: string;
  rank: number;
  categoryLabel: string;
  vegan: boolean;
  spicyLevel: number;
  spicyLabel: string;
  spicyString: string;
  locale: string;
  viewsWeekly?: number;
  veganNote?: string;
  veganNoteLabel?: string;
  objectPositionMobile?: string;
  objectPositionDesktop?: string;
}

export default function BanchanDetailHero({
  imageUrl,
  imageAlt,
  displayName,
  subName,
  rank,
  categoryLabel,
  vegan,
  spicyLabel,
  spicyString,
  viewsWeekly,
  veganNote,
  veganNoteLabel,
  objectPositionMobile,
  objectPositionDesktop
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
      {/* 좌측: 반찬 이미지 */}
      <div className="md:col-span-5 w-full">
        <BanchanDetailImage
          src={imageUrl}
          alt={imageAlt}
          objectPositionMobile={objectPositionMobile}
          objectPositionDesktop={objectPositionDesktop}
        />
      </div>

      {/* 우측: 요약 타이틀 및 주요 메타 */}
      <div className="md:col-span-7 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          {/* 랭킹 표시 */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            Rank {rank}
          </span>

          {/* 카테고리 뱃지 */}
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            {categoryLabel}
          </span>

          {/* 비건 뱃지 */}
          {vegan && (
            <span className="px-3 py-1 rounded-full bg-teal-600/20 border border-teal-500/40 text-teal-300 text-xs font-bold flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Vegan
            </span>
          )}
        </div>

        <div>
          {/* 메인 명칭 */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
            {displayName}
          </h1>
          
          {/* 서브 명칭 */}
          {subName && (
            <p className="text-lg text-slate-400 font-medium tracking-wide mb-1">{subName}</p>
          )}
        </div>

        {/* 매운맛 & 비건 메모 & 조회수 정보 요약 패널 */}
        <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-bold">
              {spicyLabel}
            </span>
            <span className="text-sm font-semibold text-slate-200">
              {spicyString ? (
                <span className="text-red-500 flex items-center gap-1">
                  <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                  {spicyString}
                </span>
              ) : (
                <span className="text-slate-500 text-xs">Mild</span>
              )}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-bold">
              Popularity
            </span>
            {viewsWeekly !== undefined ? (
              <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <span className="text-slate-200 text-sm">{viewsWeekly} views/wk</span>
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-300">
                {vegan ? "100% Plant-Based" : "Traditional Recipe"}
              </span>
            )}
          </div>

          {veganNote && (
            <div className="col-span-2 border-t border-slate-800/80 pt-3 mt-1">
              <span className="text-[10px] text-teal-400 uppercase tracking-wider block mb-1 font-bold">
                {veganNoteLabel || "Vegan Note"}
              </span>
              <span className="text-xs text-teal-300/90 font-medium bg-teal-950/30 px-2 py-0.5 rounded border border-teal-900/40">
                {veganNote}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
