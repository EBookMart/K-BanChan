"use client";

import React, { useState } from "react";
import { Story } from "@/data/story";
import SearchBar from "@/components/SearchBar";

interface Props {
  initialStories: Story[];
  locale: string;
  title: string;
  subtitle: string;
}

export default function StoryClient({ initialStories, locale, title, subtitle }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = initialStories.filter((s) =>
    s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* 검색창 (배너와 타이틀 사이) */}
      <div className="mb-12 w-full max-w-md mx-auto relative z-20">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="에세이 검색..."
        />
      </div>

      {/* 섹션 타이틀 */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-slate-300 font-medium">
          {subtitle}
        </p>
      </div>

      {/* 스토리 리스트 */}
      <div className="space-y-6 md:space-y-8 relative z-10">
        {filteredStories.length > 0 ? (
          filteredStories.map((story) => (
            <div key={story.id} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all hover:border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">{story.titleKey}</h3>
              <p className="text-slate-400 text-sm">{story.date} | {story.author}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-slate-500 py-12">
            연재 준비 중입니다. (Coming Soon)
          </div>
        )}
      </div>
    </div>
  );
}
