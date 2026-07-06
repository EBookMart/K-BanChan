"use client";

import { useTranslations } from "next-intl";
import { ShieldAlert, Handshake, HelpCircle, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const t = useTranslations("contact_page");

  // 문의 유형 카드 데이터 (새롭게 업데이트된 다국어 키를 매핑합니다)
  const contactTypes = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-amber-400" />,
      title: t("copyright_inquiry"),
      email: "copyright@k-banchan.net",
      desc: t("copyright_inquiry_desc"),
    },
    {
      icon: <Handshake className="w-8 h-8 text-emerald-400" />,
      title: t("partnership"),
      email: "partnership@k-banchan.net",
      desc: t("partnership_desc"),
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-400" />,
      title: t("general"),
      email: "contact@k-banchan.net",
      desc: t("general_desc"),
    },
  ];

  return (
    <>
      {/* 최상단 헤더 */}
      <Header />

      {/* 메인 콘텐츠 영역 (헤더 두께를 감안한 여백 추가) */}
      <main className="flex-grow bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* 은은하고 고급스러운 배경 그라데이션 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 relative">
          
          {/* Hero 섹션 (제목 표시 영역) */}
          <div className="text-center mb-16 border-b border-slate-900 pb-10">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
              Hangyeol Media Support
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-3 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              {t("title")}
            </h1>
          </div>

          {/* 3열 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactTypes.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-slate-800 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="mb-5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/50 w-fit group-hover:border-slate-700/60 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                </div>
                
                {/* 이메일 링크 버튼 */}
                <a 
                  href={`mailto:${item.email}`}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-950 border border-slate-800/80 text-emerald-400 font-medium text-sm group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>{item.email}</span>
                </a>
              </div>
            ))}
          </div>

          {/* 하단 안내사항 박스 */}
          <div className="bg-slate-900/20 backdrop-blur-md border border-slate-900/80 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-slate-200 mb-2">
                {t("response_time")}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light whitespace-pre-line">
                {t("notice_desc")}
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 최하단 푸터 */}
      <Footer />
    </>
  );
}
