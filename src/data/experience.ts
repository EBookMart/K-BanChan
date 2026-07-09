// src/data/experience.ts

// 1. 공통 및 유틸리티
export type SourceType = "official" | "public-data" | "organization" | "tentative";

export interface ExperienceBase {
  sourceLabel?: Record<string, string>;
  sourceType?: SourceType;
  isVerified?: boolean;
  lastCheckedAt?: string;
}

export type FestivalStatus = "upcoming" | "ongoing" | "archived" | "seasonal" | "tbd";

export function getEventStatus(startDate?: string, endDate?: string, defaultStatus: FestivalStatus = "tbd"): FestivalStatus {
  if (!startDate && !endDate) return defaultStatus;
  
  const today = new Date().toISOString().split("T")[0];
  const start = startDate || endDate || "";
  const end = endDate || startDate || "";
  
  if (today < start) return "upcoming";
  if (today > end) return "archived";
  return "ongoing";
}

// 2. 축제 (Festivals)
export interface Festival extends ExperienceBase {
  slug: string;
  title: Record<string, string>;
  subtitle?: Record<string, string>;
  region: Record<string, string>;
  organizer: Record<string, string>;
  officialUrl?: string;
  startDate?: string; // e.g. "YYYY-MM-DD"
  endDate?: string;
  status: FestivalStatus;
  summary: Record<string, string>;
  featured: boolean;
}

// TODO: 추후 한국관광공사 / 공공데이터 API 연동 시 이 배열을 초기 State로 사용하거나, SSR 데이터 fetching으로 교체하세요.
export const festivalsData: Festival[] = [
  {
    slug: "seoul-kfood-nknk",
    title: { ko: "서울 K-FOOD 페스티벌 넉넉", en: "Seoul K-FOOD Festival NKNK", ja: "ソウル K-FOOD フェスティバル 넉넉(ノクノク)" },
    region: { ko: "서울", en: "Seoul", ja: "ソウル" },
    organizer: { ko: "서울특별시", en: "Seoul Metropolitan Government", ja: "ソウル特別市" },
    officialUrl: "https://www.seoul.go.kr",
    status: "seasonal",
    summary: { ko: "광화문광장에서 열리는 대규모 K-Food 푸드트럭 페스티벌. 다양한 한식 메뉴를 도심 속에서 즐길 수 있습니다.", en: "A large-scale K-Food food truck festival held at Gwanghwamun Square.", ja: "光化門広場で開催される大規模なK-Foodフードトラックフェスティバル。" },
    featured: true,
    sourceLabel: { ko: "서울시 공식 안내", en: "Seoul Official" },
    sourceType: "official",
    isVerified: true,
  },
  {
    slug: "gwangju-kimchi",
    title: { ko: "광주 김치축제", en: "Gwangju Kimchi Festival", ja: "光州キムチ祭り" },
    region: { ko: "광주", en: "Gwangju", ja: "光州" },
    organizer: { ko: "광주광역시", en: "Gwangju Metropolitan City", ja: "光州広域市" },
    officialUrl: "https://kimchi.gwangju.go.kr/",
    status: "seasonal",
    summary: { ko: "대한민국 대표 김치 종주도시 광주에서 열리는 세계적인 김치 문화 축제입니다.", en: "A world-class kimchi culture festival held in Gwangju.", ja: "韓国を代表するキムチの宗主都市、光州で開催される世界的なキムチ文化フェスティバルです。" },
    featured: true,
  },
  {
    slug: "daegu-chimac",
    title: { ko: "대구 치맥페스티벌", en: "Daegu Chimac Festival", ja: "大邱チメクフェスティバル" },
    region: { ko: "대구", en: "Daegu", ja: "大邱" },
    organizer: { ko: "한국치맥산업협회", en: "Korea Chimac Industry Association", ja: "韓国チメク産業協会" },
    officialUrl: "http://www.chimacfestival.com/",
    status: "seasonal",
    summary: { ko: "치킨과 맥주의 완벽한 조합, K-치맥의 성지 대구에서 열리는 가장 뜨거운 여름 축제.", en: "The hottest summer festival held in Daegu, the mecca of K-Chimac.", ja: "チキンとビールの完璧な組み合わせ、K-チメクの聖地である大邱で開催される最も熱い夏祭り。" },
    featured: true,
  },
  {
    slug: "samgyetang-festival",
    title: { ko: "삼계탕 축제", en: "Samgyetang Festival" },
    region: { ko: "전국", en: "Nationwide" },
    organizer: { ko: "TBD", en: "TBD" },
    status: "tbd",
    summary: { ko: "여름철 보양식 삼계탕을 테마로 한 축제입니다.", en: "A festival themed around Samgyetang, a healthy summer dish." },
    featured: false,
  },
  {
    slug: "hoengseong-hanu",
    title: { ko: "횡성 한우 축제", en: "Hoengseong Hanu Festival" },
    region: { ko: "강원 횡성", en: "Hoengseong, Gangwon" },
    organizer: { ko: "횡성문화관광재단", en: "Hoengseong Foundation for Arts and Culture" },
    status: "seasonal",
    summary: { ko: "대한민국 최고의 명품 한우, 횡성한우를 마음껏 즐길 수 있는 미식 축제.", en: "A gastronomic festival where you can fully enjoy Hoengseong Hanu, Korea's top premium beef." },
    featured: false,
  },
  {
    slug: "suncheon-jangryu",
    title: { ko: "순천 장류 축제", en: "Suncheon Jangryu Festival" },
    region: { ko: "전남 순천", en: "Suncheon, Jeonnam" },
    organizer: { ko: "순천시", en: "Suncheon City" },
    status: "tbd",
    summary: { ko: "한국의 깊은 맛을 내는 전통 장류 문화를 체험하는 축제.", en: "A festival to experience the traditional Jangryu (fermented sauces) culture that creates the deep flavors of Korea." },
    featured: false,
  },
  {
    slug: "gimcheon-gimbap",
    title: { ko: "김천 김밥 축제", en: "Gimcheon Gimbap Festival" },
    region: { ko: "경북 김천", en: "Gimcheon, Gyeongbuk" },
    organizer: { ko: "김천시", en: "Gimcheon City" },
    status: "upcoming",
    summary: { ko: "K-Food의 대표주자 김밥을 주제로 펼쳐지는 독특하고 맛있는 축제.", en: "A unique and delicious festival themed around Gimbap, a representative K-Food." },
    featured: false,
  },
  {
    slug: "goyang-haengju-hanu",
    title: { ko: "고양행주 한우숯불구이 축제", en: "Goyang Haengju Hanu Charcoal BBQ Festival" },
    region: { ko: "경기 고양", en: "Goyang, Gyeonggi" },
    organizer: { ko: "고양시", en: "Goyang City" },
    status: "seasonal",
    summary: { ko: "최상급 한우를 참숯에 구워 먹는 풍성한 미식 행사.", en: "A rich gastronomic event where you grill top-grade Hanu beef over premium charcoal." },
    featured: false,
  },
  {
    slug: "gumi-ramyeon",
    title: { ko: "구미 라면축제", en: "Gumi Ramyeon Festival" },
    region: { ko: "경북 구미", en: "Gumi, Gyeongbuk" },
    organizer: { ko: "구미시", en: "Gumi City" },
    status: "seasonal",
    summary: { ko: "전 세계인이 사랑하는 K-라면의 모든 것을 맛보고 즐기는 도심 속 축제.", en: "An urban festival where you can taste and enjoy everything about K-Ramyeon loved by people all over the world." },
    featured: false,
  },
  {
    slug: "seoul-suragan",
    title: { ko: "서울 수라간시식공감", en: "Seoul Suragan Tasting Empathy" },
    region: { ko: "서울 (경복궁)", en: "Seoul (Gyeongbokgung Palace)" },
    organizer: { ko: "문화재청", en: "Cultural Heritage Administration" },
    status: "seasonal",
    summary: { ko: "경복궁 소주방에서 조선시대 궁중 야참을 맛볼 수 있는 특별한 전통 식문화 체험.", en: "A special traditional food culture experience where you can taste Joseon Dynasty royal late-night snacks at Gyeongbokgung Palace's Sojubang." },
    featured: false,
  },
  {
    slug: "hongcheon-sannamul",
    title: { ko: "홍천 산나물축제", en: "Hongcheon Sannamul Festival" },
    region: { ko: "강원 홍천", en: "Hongcheon, Gangwon" },
    organizer: { ko: "홍천군", en: "Hongcheon-gun" },
    status: "seasonal",
    summary: { ko: "청정 자연 홍천에서 자란 신선하고 건강한 산나물을 만나는 봄 축제.", en: "A spring festival to meet fresh and healthy wild vegetables grown in the pristine nature of Hongcheon." },
    featured: false,
  },
  {
    slug: "yeongdong-gotgam",
    title: { ko: "영동 곶감축제", en: "Yeongdong Gotgam Festival" },
    region: { ko: "충북 영동", en: "Yeongdong, Chungbuk" },
    organizer: { ko: "영동군", en: "Yeongdong-gun" },
    status: "seasonal",
    summary: { ko: "달콤하고 쫀득한 겨울철 최고의 간식, 영동 곶감을 맛볼 수 있는 축제.", en: "A festival where you can taste Yeongdong Gotgam (dried persimmons), the best sweet and chewy winter snack." },
    featured: false,
  },
  {
    slug: "seoul-food-festival",
    title: { ko: "서울 푸드 페스티벌", en: "Seoul Food Festival" },
    region: { ko: "서울", en: "Seoul" },
    organizer: { ko: "TBD", en: "TBD" },
    status: "tbd",
    summary: { ko: "서울의 다채로운 미식 문화를 경험할 수 있는 종합 푸드 페스티벌.", en: "A comprehensive food festival where you can experience Seoul's diverse gastronomic culture." },
    featured: false,
  }
];


// 2. 학술 및 마케팅 행사 (Academic & Marketing Events)
export type EventType = "seminar" | "conference" | "symposium" | "expo" | "marketing";

export interface AcademicEvent extends ExperienceBase {
  slug: string;
  title: Record<string, string>;
  hostOrganization: Record<string, string>;
  officialUrl?: string;
  eventType: EventType;
  summary: Record<string, string>;
  note?: Record<string, string>;
}

export const academicEventsData: AcademicEvent[] = [
  {
    slug: "kfpi-seminar",
    title: { ko: "한식연구 학술세미나", en: "Korean Food Research Academic Seminar" },
    hostOrganization: { ko: "한식진흥원 (KFPI)", en: "Korean Food Promotion Institution (KFPI)" },
    officialUrl: "https://www.hansik.or.kr",
    eventType: "seminar",
    summary: { ko: "한식의 문화적 가치와 역사적 배경, 그리고 글로벌화 전략을 논의하는 심도 있는 학술 세미나입니다.", en: "An in-depth academic seminar discussing the cultural value, historical background, and globalization strategy of Korean food." },
  },
  {
    slug: "hansik-conference",
    title: { ko: "글로벌 한식 컨퍼런스", en: "Global Korean Food Conference" },
    hostOrganization: { ko: "농림축산식품부 등", en: "MAFRA, etc." },
    eventType: "conference",
    summary: { ko: "국내외 외식산업 전문가들이 모여 K-Food의 최신 트렌드와 산업 동향을 공유하는 대규모 컨퍼런스.", en: "A large-scale conference where domestic and international food industry experts gather to share the latest trends and industry insights of K-Food." },
  },
  {
    slug: "korean-food-culture-society",
    title: { ko: "한국식생활문화학회 학술대회", en: "Korean Society of Food Culture Academic Conference" },
    hostOrganization: { ko: "한국식생활문화학회", en: "Korean Society of Food Culture" },
    officialUrl: "http://www.food-culture.or.kr/",
    eventType: "symposium",
    summary: { ko: "한국 식생활 문화의 과학적, 인문학적 연구 결과를 발표하고 학제 간 교류를 도모하는 학술의 장입니다.", en: "An academic venue to present scientific and humanistic research results on Korean dietary culture and promote interdisciplinary exchange." },
  }
];


// 3. 한식 기행 (Culinary Tours)
export type TourCategory = "전통음식체험" | "궁중음식문화" | "지역식문화" | "기타";

export interface CulinaryTour extends ExperienceBase {
  slug: string;
  title: Record<string, string>;
  location: Record<string, string>;
  officialUrl?: string;
  shortDescription: Record<string, string>;
  whyVisit: Record<string, string>;
  category: Record<string, string>;
  featured: boolean;
}

export const culinaryToursData: CulinaryTour[] = [
  {
    slug: "soowoonjapbang",
    title: { ko: "수운잡방 전통음식체험관", en: "Soowoonjapbang Traditional Food Experience Center" },
    location: { ko: "경북 안동", en: "Andong, Gyeongbuk" },
    officialUrl: "http://www.soowoonjapbang.com",
    shortDescription: { ko: "조선시대 가장 오래된 조리서 '수운잡방'의 요리를 체험하다.", en: "Experience dishes from 'Soowoonjapbang', the oldest cookbook from the Joseon Dynasty." },
    whyVisit: { ko: "500년 전 안동 양반가의 식문화를 원형 그대로 재현하고 맛볼 수 있는 귀중한 미식 탐방 코스입니다.", en: "A precious culinary tour course where you can taste and experience the dietary culture of an Andong noble family from 500 years ago in its original form." },
    category: { ko: "전통음식체험", en: "Traditional Food Experience" },
    featured: true,
  },
  {
    slug: "eumsikdimibang",
    title: { ko: "음식디미방 체험관", en: "Eumsikdimibang Experience Center" },
    location: { ko: "경북 영양", en: "Yeongyang, Gyeongbuk" },
    officialUrl: "http://fooddimi.kr/",
    shortDescription: { ko: "350년 전 정부인 안동 장씨가 남긴 한글 조리서의 맛.", en: "The taste of a Hangul cookbook left by Lady Jang of Andong 350 years ago." },
    whyVisit: { ko: "동아시아 최초의 여성 저술 조리서인 '음식디미방'에 수록된 146가지 요리 중 대표 메뉴들을 직접 시식하고 체험할 수 있습니다.", en: "You can directly taste and experience representative menus among the 146 dishes recorded in 'Eumsikdimibang', East Asia's first cookbook written by a woman." },
    category: { ko: "전통음식체험", en: "Traditional Food Experience" },
    featured: true,
  },
  {
    slug: "korea-house",
    title: { ko: "한국의 집 (Korea House)", en: "Korea House" },
    location: { ko: "서울 중구", en: "Jung-gu, Seoul" },
    officialUrl: "https://www.kh.or.kr/kh",
    shortDescription: { ko: "도심 속에서 만나는 고품격 궁중 음식과 전통 문화.", en: "High-class royal cuisine and traditional culture met in the heart of the city." },
    whyVisit: { ko: "아름다운 한옥에서 무형문화재가 전수하는 정통 궁중 한정식을 맛보며 다채로운 전통 예술 공연까지 함께 즐길 수 있는 복합 문화 공간입니다.", en: "A complex cultural space where you can taste authentic royal Korean table d'hote handed down by intangible cultural assets in a beautiful Hanok and enjoy colorful traditional art performances." },
    category: { ko: "궁중음식문화", en: "Royal Food Culture" },
    featured: true,
  }
];
