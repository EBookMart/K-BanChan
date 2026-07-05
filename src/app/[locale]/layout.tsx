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

export const metadata = {
  title: "K-Banchan.net",
  description: "Korean Banchan and Culture Catalog",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // 지원하지 않는 언어로 접속하면 404 에러 화면을 보여줍니다.
  console.log("Current locale in layout:", locale);
  if (!(routing.locales as readonly string[]).includes(locale)) {
    console.log("Locale not supported, calling notFound():", locale);
    notFound();
  }

  // 서버로부터 번역 데이터들을 받아옵니다.
  const messages = await getMessages();

  // 아랍어(ar)라면 오른쪽에서 왼쪽(RTL) 방향으로 화면을 정렬하고, 나머지는 왼쪽에서 오른쪽(LTR)으로 설정합니다.
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
