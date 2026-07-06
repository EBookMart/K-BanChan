"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900/80 pt-16 pb-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 상단 3열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 mb-12">
          
          {/* 열 1: 회사 및 로고 정보 */}
          <div className="flex flex-col space-y-4">
            <div className="relative h-20 w-[240px]">
              <Image
                src="/logos/hangyeol-logo.png"
                alt="Hangyeol Media Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-200">
                {t("operated_by")}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                {t("company_intro")}
              </p>
            </div>
          </div>

          {/* 열 2: Site Map */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {t("sitemap")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/banchan" className="hover:text-emerald-400 transition-colors">
                  {t("banchan")}
                </Link>
              </li>
              <li>
                <Link href="/philosophy" className="hover:text-emerald-400 transition-colors">
                  {t("philosophy")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* 열 3: Legal */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {t("legal")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/copyright" className="hover:text-emerald-400 transition-colors">
                  {t("copyright_policy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {t("copyright_inquiry")}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 구분선 */}
        <div className="border-t border-slate-900/60 my-8" />

        {/* 하단 저작권 표시 */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 text-xs text-slate-500">
          <p className="font-medium text-slate-400">{t("all_rights_reserved")}</p>
          <p>{t("trademark_notice")}</p>
          <p className="text-rose-500/80 font-light mt-1 max-w-lg">
            {t("unauthorized_notice")}
          </p>
        </div>

      </div>
    </footer>
  );
}
