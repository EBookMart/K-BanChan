"use client";

import React, { useState } from "react";
import { Banchan } from "../types/banchan";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import BanchanCard from "./BanchanCard";

interface Category {
  key: string;
  label: string;
}

interface BanchanGridProps {
  initialBanchan: Banchan[];
  locale: string;
  categories: Category[];
  placeholder: string;
  noResultsText: string;
}

export default function BanchanGrid({
  initialBanchan,
  locale,
  categories,
  placeholder,
  noResultsText
}: BanchanGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 검색 및 카테고리 통합 필터링 로직
  const filteredBanchan = initialBanchan.filter((item) => {
    // 1. 카테고리 필터링
    if (selectedCategory !== "all" && item.category !== selectedCategory) {
      return false;
    }

    // 2. 검색어 필터링
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      const matchKo = item.name_ko.toLowerCase().includes(query);
      const matchEn = item.name_en.toLowerCase().includes(query);
      const matchRu = item.name_ru.toLowerCase().includes(query);
      const matchJa = (item.name_ja || "").toLowerCase().includes(query);
      const matchZh = (item.name_zh || "").toLowerCase().includes(query);
      const matchEs = (item.name_es || "").toLowerCase().includes(query);
      const matchMainIng = item.ingredients.main.toLowerCase().includes(query);
      const matchSeasoning = item.ingredients.seasoning.toLowerCase().includes(query);

      return (
        matchKo ||
        matchEn ||
        matchRu ||
        matchJa ||
        matchZh ||
        matchEs ||
        matchMainIng ||
        matchSeasoning
      );
    }

    return true;
  });

  // 카테고리 기호에 매핑되는 레이블을 찾아옵니다.
  const getCategoryLabel = (catKey: string) => {
    const found = categories.find((c) => c.key === catKey);
    return found ? found.label : catKey;
  };

  return (
    <div className="space-y-8">
      {/* 검색 바 & 필터 영역 */}
      <div className="flex flex-col gap-4 items-center">
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder={placeholder} />
        <CategoryFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* 그리드 리스트 영역 */}
      {filteredBanchan.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredBanchan.map((item) => (
            <BanchanCard
              key={item.id}
              banchan={item}
              locale={locale}
              categoryLabel={getCategoryLabel(item.category)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
          <svg
            className="mx-auto h-12 w-12 text-gray-300 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-500 font-medium text-sm">{noResultsText}</p>
        </div>
      )}
    </div>
  );
}
