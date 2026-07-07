import banchanData from "@/data/banchan.json";
import type { Banchan } from "@/types/banchan";

// 변환된 JSON 데이터를 타입에 맞추어 상수로 가져옵니다.
const banchans = banchanData as Banchan[];

// 1. 전체 반찬 목록을 가져옵니다.
export function getAllBanchan(): Banchan[] {
  return banchans;
}
// 2. 특정 반찬을 영문 식별 주소(slug)로 조회합니다. (kimchi, japchae 별칭 대응)
export function getBanchanBySlug(slug: string): Banchan | undefined {
  if (slug === "kimchi") {
    const item = banchans.find((b) => b.slug === "baechu-geotjeori-26");
    if (item) {
      return { ...item, slug: "kimchi" };
    }
  }
  if (slug === "japchae") {
    const item = banchans.find((b) => b.slug === "japchae-32");
    if (item) {
      return { ...item, slug: "japchae" };
    }
  }
  return banchans.find((b) => b.slug === slug);
}// 3. 카테고리별로 반찬 목록을 분류하여 필터링합니다. (예: 'volkkeum', 'jorim' 등)
export function getBanchanByCategory(category: string): Banchan[] {
  return banchans.filter((b) => b.category === category);
}

// 4. 인기도(rank) 기준으로 상위 N개의 반찬을 가져옵니다. (기본값은 5개)
export function getTopBanchan(count: number = 5): Banchan[] {
  // 원래 데이터를 해치지 않기 위해 복사한 후 정렬합니다.
  return [...banchans].sort((a, b) => a.rank - b.rank).slice(0, count);
}

// 5. 추천(Featured) 표시가 설정된 특별 반찬 목록을 가져옵니다.
export function getFeaturedBanchan(): Banchan[] {
  return banchans.filter((b) => b.featured);
}

// 6. 검색어(query)를 이용해 반찬 이름(한글/영어)이나 주요 재료/양념에 포함되는 반찬을 검색합니다.
export function searchBanchan(query: string): Banchan[] {
  if (!query) return [];
  const lowerQuery = query.toLowerCase().trim();
  return banchans.filter(
    (b) =>
      b.name_ko.toLowerCase().includes(lowerQuery) ||
      b.name_en.toLowerCase().includes(lowerQuery) ||
      b.ingredients.main.toLowerCase().includes(lowerQuery) ||
      b.ingredients.seasoning.toLowerCase().includes(lowerQuery)
  );
}

// 7. 채식주의자용(비건) 반찬들만 필터링하여 가져옵니다.
export function getVeganBanchan(): Banchan[] {
  return banchans.filter((b) => b.vegan);
}
