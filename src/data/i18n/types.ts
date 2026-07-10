export type SupportedLocale = 'ko' | 'en' | 'fr' | 'ar' | 'ja' | 'zh' | 'es' | 'ru';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  detail?: string;
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
    introDetail?: string;
    sections: ContentSection[];
    conclusion: string;
    conclusionDetail?: string;
  };
  cta: ContentCTA;
}

export interface LocalizedPageContent {
  slug: string;
  locales: Record<SupportedLocale, PageLocaleContent>;
}
