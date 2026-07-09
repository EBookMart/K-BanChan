import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { festivalsData, getEventStatus } from "@/data/experience";
import { Calendar, MapPin, Building, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    festivalsData.map((f) => ({ locale, slug: f.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const festival = festivalsData.find((f) => f.slug === slug);
  if (!festival) return { title: "Not Found" };
  
  const title = festival.title[locale] || festival.title["ko"] || festival.title["en"];
  const summary = festival.summary[locale] || festival.summary["ko"] || festival.summary["en"];
  return {
    title: `${title} | K-BanChan Experience`,
    description: summary,
  };
}

export default async function FestivalDetailPage({ params: { locale, slug } }: Props) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const isRtl = locale === "ar";
  
  const festival = festivalsData.find((f) => f.slug === slug);
  if (!festival) {
    notFound();
  }

  const getLocalText = (data?: Record<string, string>, defaultLang = "ko") => {
    if (!data) return "";
    return data[locale] || data[defaultLang] || data["en"] || "";
  };

  const title = getLocalText(festival.title);
  const subtitle = getLocalText(festival.subtitle);
  const summary = getLocalText(festival.summary);
  const region = getLocalText(festival.region);
  const organizer = getLocalText(festival.organizer);
  const currentStatus = getEventStatus(festival.startDate, festival.endDate, festival.status);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        
        <Link href="/experience#festivals" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
          <span>{t("title")} 목록으로 돌아가기</span>
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-slate-900 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${
              currentStatus === "upcoming" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
              currentStatus === "ongoing" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
              currentStatus === "seasonal" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
              "bg-slate-800 text-slate-400 border-slate-700"
            }`}>
              {t(`status.${currentStatus}`)}
            </span>
            {festival.isVerified && festival.sourceLabel && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                <CheckCircle2 size={14} />
                {getLocalText(festival.sourceLabel)}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 font-serif leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-rose-400 font-medium mb-6">
              {subtitle}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Summary & Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2 inline-block">축제 소개</h2>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                {summary}
              </p>
              
              {/* Placeholder for future rich content */}
              <div className="mt-12 p-8 bg-slate-900/30 border border-slate-800 border-dashed rounded-2xl text-center">
                <p className="text-slate-500 text-sm">상세 콘텐츠 준비중입니다. 향후 이미지 및 리뷰 등 다채로운 정보가 추가될 예정입니다.</p>
              </div>
            </section>
          </div>

          {/* Right: Info Box */}
          <aside className="md:col-span-1">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sticky top-24">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">핵심 정보</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <MapPin size={16} />
                    <span className="text-xs font-semibold">{t("labels.location")}</span>
                  </div>
                  <p className="text-slate-200 font-medium ml-6">{region}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Building size={16} />
                    <span className="text-xs font-semibold">{t("labels.organizer")}</span>
                  </div>
                  <p className="text-slate-200 font-medium ml-6">{organizer}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-1">
                    <Calendar size={16} />
                    <span className="text-xs font-semibold">일정</span>
                  </div>
                  <p className="text-slate-200 font-medium ml-6">
                    {festival.startDate || festival.endDate 
                      ? `${festival.startDate || ""} ~ ${festival.endDate || ""}`
                      : "일정 추후 공지"
                    }
                  </p>
                </div>
              </div>

              {festival.officialUrl && (
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a 
                    href={festival.officialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-rose-500/20"
                  >
                    <span>{t("labels.visit_website")}</span>
                    <ChevronRight size={16} className={isRtl ? "rotate-180" : ""} />
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>

      </main>
      <Footer />
    </div>
  );
}
