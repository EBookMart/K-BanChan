"use client";

import React, { useState } from "react";
import { ChevronDown, MapPin, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { Festival, getEventStatus } from "@/data/experience";

interface Props {
  festivals: Festival[];
  locale: string;
  loadMoreText: string;
  statusLabels: Record<string, string>;
  labels: Record<string, string>;
  isRtl?: boolean;
}

export default function FestivalListClient({ festivals, locale, loadMoreText, statusLabels, labels, isRtl = false }: Props) {
  const [expanded, setExpanded] = useState(false);

  const getLocalText = (data: Record<string, string>, defaultLang = "ko") => {
    return data[locale] || data[defaultLang] || data["en"] || "";
  };

  // 진행 상태에 따라 분류
  const ongoingFestivals = festivals.filter(f => getEventStatus(f.startDate, f.endDate, f.status) === "ongoing");
  const upcomingFestivals = festivals.filter(f => getEventStatus(f.startDate, f.endDate, f.status) === "upcoming");
  
  // 나머지 기타 상태(계절별 등)도 필요에 따라 ongoing에 합치거나 별도 처리
  const otherFestivals = festivals.filter(f => {
    const s = getEventStatus(f.startDate, f.endDate, f.status);
    return s !== "ongoing" && s !== "upcoming";
  });

  const allOngoing = [...ongoingFestivals, ...otherFestivals];

  const ongoingTop3 = allOngoing.slice(0, 3);
  const ongoingRemaining = allOngoing.slice(3);
  const upcomingTop3 = upcomingFestivals.slice(0, 3);

  const renderCard = (festival: Festival, currentStatus: string) => {
    return (
      <a 
        href={festival.officialUrl || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        key={festival.slug} 
        className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/50 hover:bg-slate-900/60 transition-all duration-300 shadow-md h-full"
      >
        <div className="flex justify-between items-start mb-4">
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
            currentStatus === "upcoming" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
            currentStatus === "ongoing" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
            currentStatus === "seasonal" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
            "bg-slate-800 text-slate-400 border-slate-700"
          }`}>
            {statusLabels[currentStatus] || currentStatus}
          </span>
          {festival.featured && (
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md font-bold">
              {labels.featured || "Featured"}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors line-clamp-1">
          {getLocalText(festival.title)}
        </h3>
        
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-6 flex-grow">
          {getLocalText(festival.summary)}
        </p>
        
        <div className="space-y-2 mt-auto border-t border-slate-800/80 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin size={14} className="text-slate-500 shrink-0" />
            <span className="line-clamp-1">{getLocalText(festival.region)}</span>
          </div>
          {(festival.startDate || festival.endDate) && (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Calendar size={14} className="text-slate-500 shrink-0" />
              <span>{festival.startDate || ""} ~ {festival.endDate || ""}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex items-center justify-between pt-2">
          {festival.isVerified && festival.sourceLabel ? (
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
              <CheckCircle2 size={12} />
              <span>{getLocalText(festival.sourceLabel)}</span>
            </div>
          ) : (
            <div />
          )}
          <span className="text-xs font-semibold text-slate-500 group-hover:text-rose-400 transition-colors inline-flex items-center gap-1">
            공식 홈페이지 <ChevronRight size={14} className={isRtl ? "rotate-180" : ""} />
          </span>
        </div>
      </a>
    );
  };

  return (
    <div className="space-y-8">
      {!expanded ? (
        // 확장 전: 기본 진행중 행사 3개
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingTop3.map(f => renderCard(f, getEventStatus(f.startDate, f.endDate, f.status)))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-300 font-medium text-sm"
            >
              {loadMoreText}
              <ChevronDown size={16} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
            </button>
          </div>
        </>
      ) : (
        // 확장 후: 2단 레이아웃
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 좌측: 진행 중인 행사 Top 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-rose-500/20 pb-3">
                <div className="w-2 h-6 bg-rose-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">진행 중인 축제</h3>
              </div>
              <div className="flex flex-col gap-6">
                {ongoingTop3.map(f => renderCard(f, getEventStatus(f.startDate, f.endDate, f.status)))}
              </div>
            </div>

            {/* 우측: 진행 예정 행사 Top 3 */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3">
                <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">진행 예정 축제</h3>
              </div>
              <div className="flex flex-col gap-6">
                {upcomingTop3.length > 0 ? (
                  upcomingTop3.map(f => renderCard(f, getEventStatus(f.startDate, f.endDate, f.status)))
                ) : (
                  <p className="text-slate-500 text-sm py-4">예정된 축제가 없습니다.</p>
                )}
              </div>
            </div>

          </div>

          {/* 하단: 나머지 진행 중 행사 */}
          {ongoingRemaining.length > 0 && (
            <div className="pt-8 border-t border-slate-800/50">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-6 bg-slate-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">그 외 진행 중인 행사</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ongoingRemaining.map(f => renderCard(f, getEventStatus(f.startDate, f.endDate, f.status)))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
