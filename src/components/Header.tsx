"use client";

import { useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function Header() {
  const t = useTranslations("header");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 지원하는 7개 언어 목록 (현재 선택된 언어를 대문자로 강조 표시하기 위해 대문자 코드를 사용합니다)
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
    <header className="sticky top-0 z-50 w-full bg-slate-950/70 backdrop-blur-md border-b border-slate-900/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* 좌측 로고 영역 */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
            {/* 데스크톱용 로고 (height: 60px -> w-auto h-[60px]) */}
            <div className="hidden md:block relative h-[60px] w-[180px]">
              <Image
                src="/logos/kbanchan-logo.png"
                alt="K-BanChan Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            {/* 모바일용 로고 (height: 40px -> w-auto h-[40px]) */}
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
          <span className="hidden md:inline-block text-slate-400 font-extralight text-sm tracking-widest pl-3 border-l border-slate-800 uppercase">
            the Secret Code
          </span>
        </div>

        {/* 우측 언어 선택 영역 */}
        <div className="relative">
          {/* 드롭다운 버튼 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-sm font-medium hover:bg-slate-900 hover:border-slate-700 hover:text-slate-100 transition-all duration-200"
          >
            <Globe className="w-4 h-4 text-emerald-500" />
            <span>{activeLang.label}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* 드롭다운 메뉴 */}
          {isOpen && (
            <>
              {/* 바깥 배경 클릭 시 닫히도록 해주는 투명 레이어 */}
              <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
              
              <ul className="absolute right-0 mt-2 w-40 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-1.5 shadow-2xl z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-2 py-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {t("language")}
                </div>
                {languages.map((lang) => {
                  const isActive = lang.code === currentLocale;
                  return (
                    <li key={lang.code}>
                      <Link
                        href={pathname}
                        locale={lang.code}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-400 font-semibold"
                            : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-semibold opacity-70">{lang.label}</span>
                          <span className="text-xs opacity-60">({lang.name})</span>
                        </span>
                        {isActive && <Check className="w-4 h-4 text-emerald-400" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
