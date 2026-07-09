import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { culinaryToursData } from "@/data/experience";
import { MapPin, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    culinaryToursData.map((t) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  const tour = culinaryToursData.find((t) => t.slug === slug);
  if (!tour) return { title: "Not Found" };
  
  const title = tour.title[locale] || tour.title["ko"] || tour.title["en"];
  const summary = tour.shortDescription[locale] || tour.shortDescription["ko"] || tour.shortDescription["en"];
  return {
    title: `${title} | K-BanChan Experience`,
    description: summary,
  };
}

export default async function CulinaryTourDetailPage({ params: { locale, slug } }: Props) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const isRtl = locale === "ar";
  
  const tour = culinaryToursData.find((tr) => tr.slug === slug);
  if (!tour) {
    notFound();
  }

  const getLocalText = (data?: Record<string, string>, defaultLang = "ko") => {
    if (!data) return "";
    return data[locale] || data[defaultLang] || data["en"] || "";
  };

  const title = getLocalText(tour.title);
  const shortDescription = getLocalText(tour.shortDescription);
  const whyVisit = getLocalText(tour.whyVisit);
  const category = getLocalText(tour.category);
  const location = getLocalText(tour.location);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow pt-8 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        
        <Link href="/experience#tours" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
          <span>{t("title")} 목록으로 돌아가기</span>
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-slate-900 pb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              {category}
            </span>
            {tour.isVerified && tour.sourceLabel && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                <CheckCircle2 size={14} />
                {getLocalText(tour.sourceLabel)}
              </span>
            )}
            {tour.featured && (
              <span className="text-[10px] text-emerald-300 font-bold tracking-wider">
                ★ {t("labels.featured")}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 font-serif leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-emerald-400 font-medium mb-6">
            {shortDescription}
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Summary & Details */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2 inline-block">{t("labels.why_visit")}</h2>
              <p className="text-slate-300 leading-relaxed text-lg font-light">
                {whyVisit}
              </p>
              
              {/* Placeholder for future rich content */}
              <div className="mt-12 p-8 bg-slate-900/30 border border-slate-800 border-dashed rounded-2xl text-center">
                <p className="text-slate-500 text-sm">상세 투어 코스 및 예약 안내는 향후 추가될 예정입니다.</p>
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
                  <p className="text-slate-200 font-medium ml-6">{location}</p>
                </div>
              </div>

              {tour.officialUrl && (
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a 
                    href={tour.officialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
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
