export interface BanchanGuideArticle {
  slug: string;
  order: number;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  metaDescription: Record<string, string>;
  keywords: Record<string, string[]>;
  readTime: Record<string, string>;
  references: string[];
}
