"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Globe } from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  // 다국어 번역을 가져오는 함수를 선언합니다.
  const t = useTranslations();

  // 우리가 지원하는 7개 언어의 정보 배열입니다.
  const languages = [
    { code: "ko", name: "한국어" },
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "中文" },
    { code: "es", name: "Español" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-slate-100 px-4 relative overflow-hidden">
      {/* 배경에 아름다운 은은한 불빛(그라데이션 효과)을 줍니다. */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="z-10 text-center max-w-xl w-full">
        {/* 다국어 표시 미니 뱃지 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
          <Globe className="w-4 h-4 animate-[spin_8s_linear_infinite]" />
          <span>Multi-language Platform</span>
        </div>

        {/* 메인 타이틀 (K-Banchan.net) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent mb-4">
          {t("site.name")}
        </h1>

        {/* 부제 (한식과 반찬의 세계) */}
        <p className="text-lg md:text-xl text-slate-400 font-light mb-10">
          {t("site.tagline")}
        </p>

        {/* 준비 중(Coming Soon) 표시 박스 */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 mb-12 shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2 font-semibold">
            Status
          </span>
          <span className="text-2xl font-bold text-slate-200 tracking-wide">
            {t("home.coming_soon")}
          </span>
        </div>

        {/* 언어 선택 영역 */}
        <div className="border-t border-slate-800/50 pt-8">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-5 font-semibold">
            Language / 언어 선택
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => {
              const isActive = locale === lang.code;
              return (
                <Link
                  key={lang.code}
                  href="/"
                  locale={lang.code}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                    isActive
                      ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-950/30"
                      : "bg-slate-900/30 border-slate-800/60 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:border-slate-700"
                  }`}
                >
                  {lang.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
