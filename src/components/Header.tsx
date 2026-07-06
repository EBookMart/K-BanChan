"use client";

import { useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";

export default function Header() {
  const tHeader = useTranslations("header");
  const tFooter = useTranslations("footer");
  const currentLocale = useLocale();
  const pathname = usePathname();
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 지원하는 7개 언어 목록
  const languages = [
    { code: "ko", label: "KO", name: "한국어" },
    { code: "en", label: "EN", name: "English" },
    { code: "ja", label: "JA", name: "日本語" },
    { code: "zh", label: "ZH", name: "中文" },
    { code: "es", label: "ES", name: "Español" },
    { code: "ar", label: "AR", name: "العربية" },
    { code: "ru", label: "RU", name: "Русский" },
  ];

  // 현재 활성화된 언어 정보를 찾습니다.
  const activeLang = languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* 1. 좌측 로고 영역 */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            {/* 데스크톱용 로고 */}
            <div className="hidden md:block relative h-[60px] w-[180px]">
              <Image
                src="/logos/kbanchan-logo.png"
                alt="K-BanChan Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            {/* 모바일용 로고 */}
            <div className="block md:hidden relative h-[40px] w-[120px]">
              <Image
                src="/logos/kbanchan-logo.png"
                alt="K-BanChan Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* 슬로건 (데스크톱 전용, 얇은 서체로 표기) */}
          <span className="hidden lg:inline-block text-slate-400 font-extralight text-xs tracking-widest pl-3 border-l border-slate-800 uppercase">
            the Secret Code
          </span>
        </div>

        {/* 2. 중앙 네비게이션 링크 (데스크톱 전용) */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <Link
            href="/banchan"
            className={`transition-colors ${
              pathname.startsWith("/banchan")
                ? "text-amber-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {tFooter("banchan")}
          </Link>
          <Link
            href="/articles"
            className={`tracking-wider transition-colors ${
              pathname.startsWith("/articles")
                ? "text-emerald-400"
                : "text-slate-300 hover:text-white"
            }`}
          >
            THE SECRET CODE
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
              href="/banchan"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors ${
                pathname.startsWith("/banchan")
                  ? "bg-amber-500/10 text-amber-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              {tFooter("banchan")}
            </Link>
            <Link
              href="/articles"
              onClick={() => setIsMenuOpen(false)}
              className={`p-2 rounded-lg tracking-wider transition-colors ${
                pathname.startsWith("/articles")
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-slate-300 hover:bg-slate-900/50"
              }`}
            >
              THE SECRET CODE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
