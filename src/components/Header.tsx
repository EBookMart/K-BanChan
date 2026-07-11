"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";

export default function Header() {
  const tHeader = useTranslations("header");
  const tNav = useTranslations("nav");
  const currentLocale = useLocale();
  const pathname = usePathname();
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 지원하는 8개 언어 목록
  const languages = [
    { code: "ko", label: "KO", name: "한국어" },
    { code: "en", label: "EN", name: "English" },
    { code: "ja", label: "JA", name: "日本語" },
    { code: "zh", label: "ZH", name: "中文" },
    { code: "es", label: "ES", name: "Español" },
    { code: "fr", label: "FR", name: "Français" },
    { code: "ar", label: "AR", name: "العربية" },
    { code: "ru", label: "RU", name: "Русский" },
  ];

  // 현재 활성화된 언어 정보를 찾습니다.
  const activeLang = languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        
        {/* 1. 좌측 로고 영역 삭제 (웹 접근성 준수를 위해 sr-only로 홈 링크만 보존) */}
        <Link href="/" className="sr-only">
          K-BanChan Home
        </Link>

        {/* 2. 네비게이션 링크 (데스크톱 전용, 좌측 정렬로 이동) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm mr-auto">
          <Link
            href="/articles"
            className={`tracking-wider transition-colors ${
              pathname.startsWith("/articles")
                ? "text-emerald-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {tNav("articles")}
          </Link>
          <Link
            href="/banchan-guide"
            className={`transition-colors ${
              pathname.startsWith("/banchan-guide")
                ? "text-amber-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {tNav("banchan_guide")}
          </Link>
          <Link
            href="/ingredients"
            className={`transition-colors ${
              pathname.startsWith("/ingredients")
                ? "text-emerald-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {tNav("ingredients")}
          </Link>
          <Link
            href="/banchan"
            className={`transition-colors ${
              pathname.startsWith("/banchan") && !pathname.startsWith("/banchan-guide")
                ? "text-amber-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {tNav("banchan")}
          </Link>
          <Link
            href="/hot"
            className={`transition-colors flex items-center gap-1.5 ${
              pathname.startsWith("/hot")
                ? "text-rose-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <span className="animate-pulse">🔥</span>
            <span>{tNav("hot")}</span>
          </Link>
          <Link
            href="/experience"
            className={`transition-colors flex items-center gap-1.5 ${
              pathname.startsWith("/experience")
                ? "text-emerald-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <span>{tNav("experience")}</span>
          </Link>
          <Link
            href="/story"
            className={`transition-colors flex items-center gap-1.5 ${
              pathname.startsWith("/story")
                ? "text-indigo-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <span>{tNav("story")}</span>
          </Link>
        </nav>

        {/* 3. 우측 다국어 선택기 & 모바일 햄버거 버튼 */}
        <div className="flex items-center gap-4">
          
          {/* 다국어 선택 드롭다운 (데스크톱 & 모바일 공통) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-semibold hover:bg-slate-900 hover:border-slate-700 hover:text-slate-100 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>{activeLang.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
            </button>
 
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                <ul className="absolute right-0 mt-2 w-40 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-1.5 shadow-2xl z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    {tHeader("language")}
                  </div>
                  {languages.map((lang) => {
                    const isActive = lang.code === currentLocale;
                    return (
                      <li key={lang.code}>
                        <Link
                          href={pathname}
                          locale={lang.code}
                          onClick={() => setIsLangOpen(false)}
                          className={`flex items-center justify-between w-full px-3 py-2 text-xs rounded-lg transition-colors ${
                            isActive
                              ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                              : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="font-semibold opacity-70">{lang.label}</span>
                            <span className="opacity-60">({lang.name})</span>
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>

          {/* 모바일용 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 4. 모바일 서랍 네비게이션 */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-900/80 bg-slate-950/95 backdrop-blur-lg animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col p-4 gap-4 font-semibold text-sm">
            <Link
              href="/articles"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg tracking-wider transition-colors ${
                pathname.startsWith("/articles")
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {tNav("articles")}
            </Link>
            <Link
              href="/banchan-guide"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                pathname.startsWith("/banchan-guide")
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {tNav("banchan_guide")}
            </Link>
            <Link
              href="/ingredients"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                pathname.startsWith("/ingredients")
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {tNav("ingredients")}
            </Link>
            <Link
              href="/banchan"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                pathname.startsWith("/banchan") && !pathname.startsWith("/banchan-guide")
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {tNav("banchan")}
            </Link>
            <Link
              href="/hot"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname.startsWith("/hot")
                  ? "bg-rose-500/10 text-rose-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              <span className="animate-pulse">🔥</span>
              <span>{tNav("hot")}</span>
            </Link>
            <Link
              href="/experience"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname.startsWith("/experience")
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              <span>{tNav("experience")}</span>
            </Link>
            <Link
              href="/story"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                pathname.startsWith("/story")
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              <span>{tNav("story")}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
