import { ReactNode } from "react";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// 동적으로 각 언어에 최적화된 메타 태그 정보를 설정합니다.
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const titles: Record<string, string> = {
    ko: "K-BanChan - 한식과 반찬의 세계",
    en: "K-BanChan - The World of Korean Food and Banchan",
    ja: "K-BanChan - 韓国料理とおかずの世界",
    zh: "K-BanChan - 韩食与伴餐的世界",
    es: "K-BanChan - El Mundo de la Comida Coreana y el Banchan",
    fr: "K-BanChan - Le monde de la cuisine et du banchan coréens",
    ar: "K-BanChan - عالم الطعام الكوري والبانشان",
    ru: "K-BanChan - Мир корейской еды и банчана",
  };
  
  const descriptions: Record<string, string> = {
    ko: "한결미디어가 운영하는 글로벌 한식 반찬 분류 표준 플랫폼 K-BanChan입니다. U-KSC 분류 체계를 통해 최고의 한식을 소개합니다.",
    en: "K-BanChan is a global Korean side dish classification standard platform operated by Hangyeol Media. Discover the best of Korean food.",
    ja: "Hangyeol Mediaが運営するグローバル韓国料理おかず分類標準プラットフォームK-BanChanです。最高水準の韓国料理を紹介します。",
    zh: "K-BanChan 是韩结媒体（Hangyeol Media）运营的全球韩食伴餐分类标准平台。发现最好的韩食。",
    es: "K-BanChan es una plataforma estándar global de clasificación de platos de acompañamiento coreanos operada por Hangyeol Media.",
    fr: "K-BanChan est la plateforme mondiale standardisée de classification des plats d'accompagnement coréens (banchans) gérée par Hangyeol Media. Découvrez le meilleur de la cuisine coréenne.",
    ar: "K-BanChan هي منصة عالمية لتصنيف الأطباق الجانبية الكورية تشغلها Hangyeol Media.",
    ru: "K-BanChan — это глобальная платформа стандартизации корейских закусок, управляемая Hangyeol Media.",
  };

  const currentTitle = titles[locale] || titles.ko;
  const currentDesc = descriptions[locale] || descriptions.ko;

  return {
    title: currentTitle,
    description: currentDesc,
    keywords: ["한식", "반찬", "Korean cuisine", "banchan", "K-food", "Hangyeol Media", "U-KSC"],
    authors: [{ name: "Hangyeol Media" }],
    creator: "Hangyeol Media",
    publisher: "Hangyeol Media",
    icons: {
      icon: "/logos/kbanchan-logo.png",
      apple: "/logos/kbanchan-logo.png",
    },
    openGraph: {
      title: currentTitle,
      description: currentDesc,
      url: "https://k-banchan.net",
      siteName: "K-BanChan",
      images: [{ url: "/logos/kbanchan-logo.png", width: 1200, height: 630 }],
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: currentTitle,
      description: currentDesc,
      images: ["/logos/kbanchan-logo.png"],
    },
    other: {
      copyright: "© 2026 Hangyeol Media",
      trademark: "K-BanChan is a trademark of Hangyeol Media"
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // 지원하지 않는 언어로 접속하면 404 에러 화면을 보여줍니다.
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  // 서버로부터 번역 데이터들을 받아옵니다.
  const messages = await getMessages();

  // 아랍어(ar)라면 오른쪽에서 왼쪽(RTL) 방향으로 화면을 정렬하고, 나머지는 왼쪽에서 오른쪽(LTR)으로 설정합니다.
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
