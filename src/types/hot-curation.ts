export interface HotCuration {
  slug: string;
  title: {
    [locale: string]: string;
  };
  description: {
    [locale: string]: string;
  };
  colorHex: string;
  banchanRanks: number[]; // 정확히 8개의 반찬 순위를 매핑합니다.
}
