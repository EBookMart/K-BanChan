"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const t = useTranslations("privacy_page");

  // 6개 섹션 정보를 새롭게 업데이트된 다국어 번역 키를 바탕으로 구성합니다.
  const sections = [
    { title: t("minimal_collection"), content: t("minimal_collection_desc") },
    { title: t("cookies"), content: t("cookies_desc") },
    { title: t("analytics"), content: t("analytics_desc") },
    { title: t("third_party"), content: t("third_party_desc") },
    { title: t("user_rights"), content: t("user_rights_desc") },
    { title: t("officer"), content: t("officer_desc") },
  ];

  return (
    <>
      {/* 최상단 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 (헤더 두께를 감안한 여백 추가) */}
      <main className="flex-grow bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 은은하고 고급스러운 배경 그라데이션 */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto z-10 relative">
          
          {/* Hero 섹션 (제목 표시 영역) */}
          <div className="text-center mb-16 border-b border-slate-900 pb-10">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
              Hangyeol Media Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-3 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {t("title")}
            </h1>
          </div>

          {/* 6개 주요 조항 섹션 */}
          <div className="space-y-8">
            {sections.map((sec, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-900/80 rounded-2xl p-6 md:p-8 hover:border-slate-800/80 transition-colors duration-200"
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-200 mb-4 border-b border-slate-800 pb-3">
                  {sec.title}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed whitespace-pre-line font-light">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* 최하단 푸터 */}
      <Footer />
    </>
  );
}
