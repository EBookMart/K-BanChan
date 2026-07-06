export interface Paper {
  id: string;
  title: Record<string, string>;
  authors: Record<string, string>;
  publication: Record<string, string>;
  year: number;
  type: "journal" | "book" | "thesis" | "article";
  url: string | null;
  abstract: Record<string, string>;
}

export interface Archive {
  slug: string;
  publishedAt: string;
  lastUpdated: string;
  papers: Paper[];
  essay: Record<string, string>;
}
