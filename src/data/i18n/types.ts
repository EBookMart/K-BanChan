export type SupportedLocale = 'ko' | 'en' | 'fr' | 'ar' | 'ja' | 'zh' | 'es' | 'ru';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface ContentCTA {
  label: string;
  href: string;
}

export interface PageLocaleContent {
  title: string;
  excerpt: string;
  body: {
    intro: string;
    sections: ContentSection[];
    conclusion: string;
  };
  cta: ContentCTA;
}

export interface LocalizedPageContent {
  slug: string;
  locales: Record<SupportedLocale, PageLocaleContent>;
}
