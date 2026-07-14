import React from "react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllStories } from "@/data/story";
import { BookOpen, Clock, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";

type Props = {
  params: { locale: string; id: string };
};

export async function generateStaticParams() {
  const stories = getAllStories();
  const locales = ["ko", "en", "ja", "zh", "es", "fr", "ar", "ru"];
  return locales.flatMap((locale) =>
    stories.map((s) => ({ locale, id: s.id }))
  );
}

export async function generateMetadata({ params: { locale, id } }: Props) {
  const t = await getTranslations({ locale, namespace: "story" });
  const stories = getAllStories();
  const story = stories.find((s) => s.id === id);
  if (!story) return {};
  return {
    title: `${t(story.titleKey)} | K-BanChan`,
    description: t(story.subtitleKey),
  };
}

export default async function StoryDetailPage({ params: { locale, id } }: Props) {
  const t = await getTranslations({ locale, namespace: "story" });
  const stories = getAllStories();
  const story = stories.find((s) => s.id === id);

  if (!story) notFound();

  const isRtl = locale === "ar";

  let content: string[] | null = null;
  const contentKey = story.titleKey.replace('.title', '.content');
  try {
    const rawContent = t.raw(contentKey);
    if (Array.isArray(rawContent) && rawContent.length > 0) {
      content = rawContent as string[];
    }
  } catch (error) {
    // Content not found
  }

  return (
    <>
      <Header />
      <main
        className="flex-grow pt-8 pb-20 bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* 배경 장식 */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          {/* 뒤로가기 */}
          <div className="mb-8">
            <Link
              href="/story"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t("back_to_list")}
            </Link>
          </div>

          {/* 헤더 영역 */}
          <div className="mb-12 border-b border-slate-800 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              K-BanChan Editorial
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white leading-snug mb-4 tracking-tight">
              {t(story.titleKey)}
            </h1>
            <p className="text-base md:text-lg text-slate-400 font-medium mb-6">
              {t(story.subtitleKey)}
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <span className="font-semibold text-slate-400">{story.author}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {t(story.dateKey)}
              </span>
            </div>
          </div>

          {/* 본문 또는 준비중 영역 */}
          {content ? (
            <article className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-p:text-slate-300">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800/60 border border-slate-700 flex items-center justify-center mb-6">
                <BookOpen className="w-9 h-9 text-slate-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-300 mb-3">
                {t("coming_soon_title")}
              </h2>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                {t("coming_soon_desc")}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
