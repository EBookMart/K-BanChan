export interface Banchan {
  id: string;
  rank: number;
  slug: string;
  name_ko: string;
  name_en: string;
  name_ja: string;
  name_zh: string;
  name_es: string;
  name_fr: string;
  name_ar: string;
  name_ru: string;
  spicy_level: number;
  category: "volkkeum" | "jorim" | "muchim" | "namul" | "gita";
  category_ko: string;
  ingredients: {
    main: string;
    seasoning: string;
  };
  cooking: {
    method: string;
    tip: string;
  };
  summary: string;
  vegan: boolean;
  vegan_note: string;
  u_ksc_code: string;
  u_ksc_notes: string;
  image_url: string;
  featured: boolean;
  views_weekly: number;
  affiliate: {
    coupang: string;
    amazon_us: string;
    rakuten_jp: string;
  };
  monetization?: {
    hasAffiliateLinks?: boolean;
    hasNewsletterCTA?: boolean;
    recommendedProducts?: string[];
    recommendedTools?: string[];
    partnerLinks?: { label: string; url: string }[];
  };
  created_at: string;
  updated_at: string;
}
