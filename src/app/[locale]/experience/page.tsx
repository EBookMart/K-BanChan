import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeasonalThemeBanner from "@/components/SeasonalThemeBanner";
import { festivalsData, academicEventsData, culinaryToursData } from "@/data/experience";
import { MapPin, ChevronRight, GraduationCap, Map, PartyPopper, Bell } from "lucide-react";
import MonetizationCTA from "@/components/MonetizationCTA";
import ExpandableList from "@/components/ExpandableList";
import FestivalListClient from "@/components/FestivalListClient";

interface Props {
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "experience" });
  return {
    title: `${t("title")} | K-BanChan`,
    description: t("intro"),
  };
}

export default async function ExperiencePage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "experience" });
  const isRtl = locale === "ar";

  const getLocalText = (data: Record<string, string>, defaultLang = "ko") => {
    return data[locale] || data[defaultLang] || data["en"] || "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full" dir={isRtl ? "rtl" : "ltr"}>
        
        {/* 상단 시즈널 테마 배너 */}
        <div className="w-full max-w-5xl mx-auto mb-6 md:mb-8">
          <SeasonalThemeBanner locale={locale} />
        </div>

        {/* Intro Section */}
        <section className="text-center pt-4 md:pt-6 pb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-serif">
            {t("title")}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            {t("intro")}
          </p>
        </section>

        {/* Section A: Festivals */}
        <section id="festivals" className="mt-4 md:mt-6 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
              <PartyPopper size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-tight">
                {t("festivals.title")}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t("festivals.description")}</p>
            </div>
          </div>
          
          <FestivalListClient 
            festivals={festivalsData} 
            locale={locale} 
            isRtl={isRtl}
          />
        </section>

        {/* Section B: Culinary Tours */}
        <section id="tours" className="mt-20 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Map size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-tight">
                {t("tours.title")}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t("tours.description")}</p>
            </div>
          </div>
          
          <ExpandableList loadMoreText={t("labels.load_more_tours") || "더 보기"} gridClassName="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {culinaryToursData.map((tour) => (
              <Link href={`/experience/tours/${tour.slug}`} key={tour.slug} className="group relative flex flex-col justify-between bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-md">
                
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                      {getLocalText(tour.category)}
                    </span>
                    {tour.featured && (
                      <span className="text-[10px] text-emerald-300 font-bold tracking-wider">
                        ★ {t("labels.featured")}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors font-serif line-clamp-1">
                    {getLocalText(tour.title)}
                  </h3>
                  
                  <p className="text-sm font-medium text-slate-300 mb-4 line-clamp-2">
                    {getLocalText(tour.shortDescription)}
                  </p>
                  
                  <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50 mb-6 relative">
                    <span className="absolute -top-2.5 left-4 bg-slate-900 px-2 text-[10px] font-bold text-emerald-500 uppercase">
                      {t("labels.why_visit")}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-400 line-clamp-3">
                      {getLocalText(tour.whyVisit)}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={14} className="text-emerald-500/70 shrink-0" />
                    <span className="font-medium line-clamp-1">{getLocalText(tour.location)}</span>
                  </div>
                  
                  <div className="p-2 bg-slate-800/50 group-hover:bg-emerald-500/10 text-slate-500 group-hover:text-emerald-400 rounded-lg transition-colors flex items-center justify-center">
                    <ChevronRight size={16} className={isRtl ? "rotate-180" : ""} />
                  </div>
                </div>
              </Link>
            ))}
          </ExpandableList>
        </section>

        {/* Section C: Academic & Marketing Events */}
        <section id="academic" className="mt-20 space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-serif tracking-tight">
                {t("academic.title")}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{t("academic.description")}</p>
            </div>
          </div>
          
          <ExpandableList loadMoreText={t("labels.load_more_academic") || "더 보기"} gridClassName="flex flex-col gap-4">
            {academicEventsData.map((event) => (
              <Link href={`/experience/events/${event.slug}`} key={event.slug} className="group flex flex-col md:flex-row gap-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border bg-slate-800 text-blue-300 border-slate-700">
                      {event.eventType.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {getLocalText(event.title)}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-slate-400 leading-relaxed max-w-3xl line-clamp-2">
                    {getLocalText(event.summary)}
                  </p>
                  
                  {event.note && (
                    <p className="text-xs text-slate-500 italic line-clamp-1">
                      * {getLocalText(event.note)}
                    </p>
                  )}
                </div>
                
                <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800/80 pt-4 md:pt-0 md:pl-6">
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="block text-[10px] text-slate-500 font-bold uppercase mb-1">{t("labels.host")}</span>
                      <span className="text-sm text-slate-300 font-semibold line-clamp-1">{getLocalText(event.hostOrganization)}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-blue-400 transition-colors mt-auto">
                    <span>{t("labels.view_details")}</span>
                    <ChevronRight size={14} className={isRtl ? "rotate-180" : ""} />
                  </div>
                </div>
              </Link>
            ))}
          </ExpandableList>
        </section>

        {/* 하단 구독 CTA */}
        <section className="mt-20 border-t border-slate-900 pt-16">
          <MonetizationCTA 
            title={t("newsletter.title")}
            description={t("newsletter.description")}
            buttonLabel={t("newsletter.button")}
            href="/newsletter"
            eventName="cta_click_experience"
            variant="secondary"
            icon={<Bell size={24} />}
          />
        </section>

      </main>

      <Footer />
    </div>
  );
}
