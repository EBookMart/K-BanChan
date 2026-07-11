"use client";

import React, { useState } from "react";
import { Story } from "@/data/story";
import SearchBar from "@/components/SearchBar";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";

interface Props {
  initialStories: Story[];
  title: string;
  subtitle: string;
}

export default function StoryClient({ initialStories, title, subtitle }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const tStory = useTranslations("story");
  const router = useRouter();

  const filteredStories = initialStories.filter((s) => {
    const sTitle = tStory(s.titleKey);
    const sSubtitle = tStory(s.subtitleKey);
    return sTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
           sSubtitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-full">
      {/* 검색창 (배너와 타이틀 사이) */}
      <div className="mb-12 w-full max-w-md mx-auto relative z-20">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder={tStory("search_placeholder")}
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

      {/* 스토리 리스트 (표 형식) */}
      <div className="relative z-10 bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/80 border-b border-slate-800 text-slate-300">
                <th className="py-4 px-6 font-bold text-sm md:text-base w-3/4">{tStory("table_title")}</th>
                <th className="py-4 px-6 font-bold text-sm md:text-base w-1/4 text-center">{tStory("table_date")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredStories.length > 0 ? (
                filteredStories.map((story) => (
                  <tr 
                    key={story.id} 
                    className="hover:bg-slate-800/30 transition-colors cursor-pointer group"
                    onClick={() => router.push(`/story/${story.id}` as `/story/${string}`)}
                  >
                    <td className="py-4 px-6">
                      <div className="font-bold text-white text-base md:text-lg mb-1 group-hover:text-indigo-300 transition-colors">
                        {tStory(story.titleKey)}
                      </div>
                      <div className="text-sm text-slate-400">
                        {tStory(story.subtitleKey)}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
                        {tStory(story.dateKey)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="py-12 text-center text-slate-500">
                    {tStory("no_results")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
