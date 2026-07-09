import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { academicEventsData } from "@/data/experience";
import { Building, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    academicEventsData.map((e) => ({ locale, slug: e.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const event = academicEventsData.find((e) => e.slug === slug);
  if (!event) return { title: "Not Found" };
  
  const title = event.title[locale] || event.title["ko"] || event.title["en"];
  const summary = event.summary[locale] || event.summary["ko"] || event.summary["en"];
  return {
    title: `${title} | K-BanChan Experience`,
    description: summary,
  };
}

export default async function AcademicEventDetailPage({ params: { locale, slug } }: Props) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const isRtl = locale === "ar";
  
  const event = academicEventsData.find((e) => e.slug === slug);
  if (!event) {
    notFound();
  }

  const getLocalText = (data?: Record<string, string>, defaultLang = "ko") => {
    if (!data) return "";
    return data[locale] || data[defaultLang] || data["en"] || "";
  };

  const title = getLocalText(event.title);
  const summary = getLocalText(event.summary);
  const hostOrganization = getLocalText(event.hostOrganization);
  const note = getLocalText(event.note);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        
        <Link href="/experience#academic" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
          <span>{t("title")} 목록으로 돌아가기</span>
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-slate-900 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border bg-slate-800 text-blue-300 border-slate-700">
              {event.eventType.toUpperCase()}
            </span>
            {event.isVerified && event.sourceLabel && (
              <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                <CheckCircle2 size={14} />
                {getLocalText(event.sourceLabel)}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif leading-tight">
            {title}
          </h1>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Summary & Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2 inline-block">행사 소개</h2>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                {summary}
              </p>
              
              {note && (
                <div className="mt-6 p-4 bg-slate-900/50 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-slate-400 italic">{note}</p>
                </div>
              )}
              
              {/* Placeholder for future rich content */}
              <div className="mt-12 p-8 bg-slate-900/30 border border-slate-800 border-dashed rounded-2xl text-center">
                <p className="text-slate-500 text-sm">상세 프로그램 및 일정표는 향후 업데이트될 예정입니다.</p>
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
                    <Building size={16} />
                    <span className="text-xs font-semibold">{t("labels.host")}</span>
                  </div>
                  <p className="text-slate-200 font-medium ml-6">{hostOrganization}</p>
                </div>
              </div>

              {event.officialUrl && (
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a 
                    href={event.officialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20"
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
