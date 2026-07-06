import hotCurationData from "../../public/data/hot-curations.json";
import { getAllBanchan } from "@/lib/banchan";
import type { HotCuration } from "@/types/hot-curation";
import type { Banchan } from "@/types/banchan";

const curations = hotCurationData as HotCuration[];

// 1. 모든 큐레이션 채널을 가져옵니다.
export function getAllCurations(): HotCuration[] {
  return curations;
}

// 2. 특정 슬러그에 해당하는 큐레이션 채널을 조회합니다.
export function getCurationBySlug(slug: string): HotCuration | undefined {
  return curations.find((c) => c.slug === slug);
}

// 3. 특정 큐레이션에 소속된 8개 반찬 데이터를 순위 순서(banchanRanks의 순서) 그대로 매핑하여 가져옵니다.
export function getBanchansForCuration(curation: HotCuration): Banchan[] {
  const allBanchans = getAllBanchan();
  
  // curation.banchanRanks 배열에 있는 8개 순위 순서에 맞추어 반찬 데이터를 정렬/매핑합니다.
  return curation.banchanRanks
    .map((rank) => allBanchans.find((b) => b.rank === rank))
    .filter((b): b is Banchan => b !== undefined);
}

// 4. 슬러그를 이용해 해당 큐레이션의 8개 반찬 데이터를 가져옵니다.
export function getBanchansForCurationSlug(slug: string): Banchan[] {
  const curation = getCurationBySlug(slug);
  if (!curation) return [];
  return getBanchansForCuration(curation);
}
