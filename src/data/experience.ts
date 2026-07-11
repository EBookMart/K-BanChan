// src/data/experience.ts

// 1. 공통 및 유틸리티
export type SourceType = "official" | "public-data" | "organization" | "tentative";

export interface ExperienceBase {
  sourceLabel?: Record<string, string>;
  sourceType?: SourceType;
  isVerified?: boolean;
  lastCheckedAt?: string;
  partnerLinks?: { label: string; url: string }[];
  hasNewsletterCTA?: boolean;
  hasDownloadCTA?: boolean;
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

export const festivalsData: Festival[] = [
  {
    slug: "geumsan-samgyetang",
    title: { ko: "금산 삼계탕 축제", en: "Geumsan Samgyetang Festival", ja: "錦山参鶏湯祭り", zh: "锦山参鸡汤节", es: "Festival de Samgyetang de Geumsan", fr: "Festival de Samgyetang de Geumsan", ru: "Фестиваль самгетан в Кымсане" },
    region: { ko: "충남 금산", en: "Geumsan, Chungnam", ja: "忠南錦山", zh: "忠南锦山", es: "Geumsan, Chungnam", fr: "Geumsan, Chungnam", ru: "Кымсан, Чунчхамнам" },
    organizer: { ko: "금산축제관광재단", en: "Geumsan Festival Tourism Foundation", ja: "錦山祭り観光財団", zh: "锦山庆典旅游基金会", es: "Fundación de Turismo del Festival de Geumsan", fr: "Fondation du Festival de Geumsan", ru: "Фонд туризма фестиваля Кымсан" },
    officialUrl: "https://www.insamfestival.co.kr/html/kr/sub4/sub4_0401.html",
    startDate: "2026-07-01",
    endDate: "2026-07-30",
    status: "ongoing",
    summary: { ko: "여름철 최고 보양식인 인삼 품은 삼계탕을 메인으로 한 대표적인 여름 축제.", en: "A representative summer festival featuring Samgyetang infused with ginseng, the best healthy summer dish.", ja: "夏の最高の滋養食、高麗人参入り参鶏湯をメインにした代表的な夏祭り。", zh: "以夏季最佳滋补食品人参参鸡汤为主题的代表性夏季节日。", es: "Un festival de verano representativo que presenta Samgyetang infusionado con ginseng.", fr: "Un festival d'été représentatif mettant en vedette le Samgyetang infusé au ginseng.", ru: "Представительный летний фестиваль самгетан с женьшенем." },
    featured: true,
  },
  {
    slug: "daegu-chimac",
    title: { ko: "대구 치맥페스티벌", en: "Daegu Chimac Festival", ja: "大邱チメクフェスティバル" },
    region: { ko: "대구", en: "Daegu", ja: "大邱" },
    organizer: { ko: "한국치맥산업협회", en: "Korea Chimac Industry Association", ja: "韓国チメク産業協会" },
    officialUrl: "https://www.chimacfestival.com/",
    startDate: "2026-07-01",
    endDate: "2026-07-15",
    status: "ongoing",
    summary: { ko: "치킨과 맥주의 완벽한 조합, K-치맥의 성지 대구에서 열리는 가장 뜨거운 여름 축제.", en: "The hottest summer festival held in Daegu, the mecca of K-Chimac.", ja: "チキンとビールの完璧な組み合わせ、K-チメクの聖地である大邱で開催される最も熱い夏祭り。" },
    featured: true,
  },
  {
    slug: "suragan-sisikgonggam",
    title: { ko: "수라간 시식공감", en: "Suragan Tasting Empathy", ja: "欄内飳食体験　此味共鸣", zh: "水刑間尝食共鸣", es: "Experiencia Gastronómica Suragan", fr: "Dégustation Culinaire Royale Suragan", ru: "Гастрономический Опыт Сураган" },
    region: { ko: "서울 경복궁", en: "Gyeongbokgung, Seoul", ja: "景福宮、ソウル", zh: "首尔 景福宫", es: "Gyeongbokgung, Seúl", fr: "Gyeongbokgung, Séoul", ru: "Гёнбокгун, Сеул" },
    organizer: { ko: "문화재청", en: "Cultural Heritage Administration", ja: "文化財庁庁", zh: "文化财厌厅", es: "Administración del Patrimonio Cultural", fr: "Administration du Patrimoine Culturel", ru: "Администрация культурного наследия" },
    officialUrl: "https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=fe10df59-8076-4827-89b6-d58f0b404dd2&cntntsNm=%EC%88%98%EB%9D%BC%EA%B0%84%EC%8B%9C%EC%8B%9D%EA%B3%B5%EA%B0%90",
    startDate: "2026-07-05",
    endDate: "2026-08-31",
    status: "ongoing",
    summary: { ko: "경복궁 소주방에서 조선시대 궁중 야참과 전통 음식을 맛볼 수 있는 특별한 체험 행사.", en: "A special traditional food culture experience where you can taste Joseon Dynasty royal late-night snacks at Gyeongbokgung Palace.", ja: "景福宮の小酬造り場で朝鮮時代の宮中料理を味わえる特別体験イベント。", zh: "在景福宫小酿造场品尝朝鲜时代宫庭料理的特别体验活动。", es: "Una experiencia especial de cultura alimentaria tradicional en el Palacio Gyeongbokgung.", fr: "Une expérience spéciale de la culture alimentaire traditionnelle au Palais Gyeongbokgung.", ru: "Особый опыт традиционной культуры питания в дворце Гёнбокгун." },
    featured: true,
  },
  {
    slug: "jeonju-makgeolli",
    title: { ko: "전주 막걸리축제", en: "Jeonju Makgeolli Festival", ja: "全州マッコリ祭り", zh: "全州马格利节", es: "Festival Makgeolli de Jeonju", fr: "Festival Makgeolli de Jeonju", ru: "Фестиваль макколли в Чончжу" },
    region: { ko: "전북 전주", en: "Jeonju, Jeonbuk", ja: "全北全州", zh: "全北全州", es: "Jeonju, Jeonbuk", fr: "Jeonju, Jeonbuk", ru: "Чончжу, Чонбук" },
    organizer: { ko: "전주시", en: "Jeonju City", ja: "全州市", zh: "全州市", es: "Ciudad de Jeonju", fr: "Ville de Jeonju", ru: "Город Чончжу" },
    officialUrl: "https://jeonjumakgeolli.com/",
    startDate: "2026-07-10",
    endDate: "2026-07-20",
    status: "ongoing",
    summary: { ko: "전주 특유의 푸짐한 막걸리 한상 차림과 다양한 전통주를 만끽할 수 있는 미식 축제.", en: "A gastronomic festival where you can fully enjoy Jeonju's unique abundant Makgeolli table and various traditional liquors.", ja: "全州特有の豊かなマッコリ相と様々な伝統酒を楽しむ美食祭り。", zh: "全州独有的丰盛马格利套餐和各种传统酒盛典美食节。", es: "Un festival gastronómico donde puedes disfrutar plenamente de la mesa de Makgeolli y diversas bebidas tradicionales únicas de Jeonju.", fr: "Un festival gastronomique où vous pourrez profiter pleinement de la table de Makgeolli unique et des diverses liqueurs traditionnelles de Jeonju.", ru: "Гастрономический фестиваль, где можно в полной мере насладиться уникальным столом макколли и различными традиционными напитками Чончжу." },
    featured: false,
  },
  {
    slug: "tteokbokki-festival",
    title: { ko: "떡복이 페스티벌", en: "Tteokbokki Festival", ja: "トッポッキフェスティバル", zh: "炒年糕庆典", es: "Festival del Tteokbokki", fr: "Festival du Tteokbokki", ru: "Фестиваль Ттокпокки" },
    region: { ko: "전국 (대구 등)", en: "Nationwide (Daegu, etc.)", ja: "全国（大邱など）", zh: "全国（大邱等）", es: "A nivel nacional (Daegu, etc.)", fr: "Dans tout le pays (Daegu, etc.)", ru: "По всей стране (Дэгу и др.)" },
    organizer: { ko: "떡복이 페스티벌 조직위", en: "Tteokbokki Festival Committee", ja: "トッポッキフェスティバル実行委員会", zh: "炒年糕庆典组委会", es: "Comité del Festival Tteokbokki", fr: "Comité du Festival Tteokbokki", ru: "Оргкомитет фестиваля Ттокпокки" },
    officialUrl: "https://tteokbokkifestival.com/",
    startDate: "2026-07-08",
    endDate: "2026-07-30",
    status: "ongoing",
    summary: { ko: "한국인의 소울푸드 떡복이를 주제로, 전국의 유명 떡복이 맛집이 모이는 매콤달콤한 축제.", en: "A sweet and spicy festival themed around Tteokbokki, Koreans' soul food, gathering famous Tteokbokki restaurants nationwide.", ja: "韓国人のソウルフード、トッポッキをテーマに全国の名店が集まる甘辛い祭り。", zh: "以韩国人灵魂食牢炒年糕为主题，全国各地知名店云集的甜辣庆典。", es: "Un festival dulce y picante con el Tteokbokki como tema.", fr: "Un festival sucré-picé autour du Tteokbokki.", ru: "Остро-сладкий фестиваль ттокпокки." },
    featured: false,
  },
  {
    slug: "gyeongbokgung-starlight",
    title: { ko: "경복궁 별빛야행", en: "Gyeongbokgung Starlight Tour", ja: "景福宮星明夸祠", zh: "景福宫星光夸行", es: "Tour Nocturno de Gyeongbokgung", fr: "Promenade Nocturne de Gyeongbokgung", ru: "Ночная Прогулка Гёнбокгун" },
    region: { ko: "서울 경복궁", en: "Gyeongbokgung, Seoul", ja: "景福宮、ソウル", zh: "首尔 景福宫", es: "Gyeongbokgung, Seúl", fr: "Gyeongbokgung, Séoul", ru: "Гёнбокгун, Сеул" },
    organizer: { ko: "한국문화재재단", en: "Korea Cultural Heritage Foundation", ja: "韓国文化財団", zh: "韩国文化财团", es: "Fundación del Patrimonio Cultural de Corea", fr: "Fondation du Patrimoine Culturel de Corée", ru: "Корейский фонд культурного наследия" },
    officialUrl: "https://tteokbokkifestival.com/",
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    status: "ongoing",
    summary: { ko: "별빛 아래 경복궁을 거닐며 궁중 음식을 체험할 수 있는 프리미엄 미식 투어 프로그램.", en: "A premium gastronomic tour program where you can stroll through Gyeongbokgung Palace under the starlight and experience royal cuisine.", ja: "星明かりの下、景福宮を散歩しながら宮中料理を体験できるプレミアム美食ツアープログラム。", zh: "在星光下漫步景福宫，体验宫廷饮食的精品美食旅行项目。", es: "Un programa de tour gastronómico premium en el Palacio Gyeongbokgung bajo las estrellas.", fr: "Un programme de visite gastronomique premium au Palais Gyeongbokgung sous les étoiles.", ru: "Премиум гастрономическая экскурсия по дворцу Гёнбокгун под звездами." },
    featured: false,
  },
  {
    slug: "seoul-kfood-nknk",
    title: { ko: "K-푸드 페스티벌 넉넉", en: "K-Food Festival NKNK", ja: "ソウル K-FOOD フェスティバル 넉넉(ノクノク)" },
    region: { ko: "서울 광화문", en: "Gwanghwamun, Seoul", ja: "ソウル" },
    organizer: { ko: "서울특별시", en: "Seoul Metropolitan Government", ja: "ソウル特別市" },
    officialUrl: "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=154815&menuNo=200010",
    startDate: "2026-05-01",
    endDate: "2026-12-31",
    status: "ongoing",
    summary: { ko: "광화문광장에서 열리는 대규모 K-Food 푸드트럭 페스티벌. 넉넉하고 다양한 한식 메뉴를 즐길 수 있습니다.", en: "A large-scale K-Food food truck festival held at Gwanghwamun Square.", ja: "光化門広場で開催される大規模なK-Foodフードトラックフェスティバル。" },
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
    officialUrl: "https://www.insamfestival.co.kr/html/kr/sub4/sub4_0401.html",
    startDate: "2026-10-01",
    endDate: "2026-10-15",
    status: "upcoming",
    summary: { ko: "대한민국 대표 김치 종주도시 광주에서 열리는 세계적인 김치 문화 축제입니다.", en: "A world-class kimchi culture festival held in Gwangju.", ja: "韓国を代表するキムチの宗主都市、光州で開催される世界的なキムチ文化フェスティバルです。" },
    featured: true,
  },
  {
    slug: "gimcheon-gimbap",
    title: { ko: "김천 김밥축제", en: "Gimcheon Gimbap Festival" },
    region: { ko: "경북 김천", en: "Gimcheon, Gyeongbuk" },
    organizer: { ko: "김천시", en: "Gimcheon City" },
    officialUrl: "https://www.sangju.go.kr/gotgamfestival/",
    startDate: "2026-09-01",
    endDate: "2026-09-10",
    status: "upcoming",
    summary: { ko: "K-Food의 대표주자 김밥을 주제로 펼쳐지는 독특하고 맛있는 축제. 다양한 창작 김밥을 만날 수 있습니다.", en: "A unique and delicious festival themed around Gimbap, a representative K-Food." },
    featured: false,
  },
  {
    slug: "gumi-ramyeon",
    title: { ko: "구미 라면축제", en: "Gumi Ramyeon Festival" },
    region: { ko: "경북 구미", en: "Gumi, Gyeongbuk" },
    organizer: { ko: "구미시", en: "Gumi City" },
    officialUrl: "https://www.sangju.go.kr/gotgamfestival/",
    startDate: "2026-11-01",
    endDate: "2026-11-05",
    status: "upcoming",
    summary: { ko: "전 세계인이 사랑하는 K-라면의 모든 것을 맛보고 즐기는 도심 속 축제.", en: "An urban festival where you can taste and enjoy everything about K-Ramyeon loved by people all over the world." },
    featured: false,
  },
  {
    slug: "sangju-gotgam",
    title: { ko: "상주 곶감축제", en: "Sangju Gotgam Festival" },
    region: { ko: "경북 상주", en: "Sangju, Gyeongbuk" },
    organizer: { ko: "상주시", en: "Sangju City" },
    officialUrl: "https://www.sangju.go.kr/gotgamfestival/",
    startDate: "2026-12-01",
    endDate: "2026-12-25",
    status: "upcoming",
    summary: { ko: "달콤하고 쫀득한 겨울철 최고의 간식, 상주 곶감을 다채롭게 경험할 수 있는 겨울 축제.", en: "A winter festival where you can experience Sangju Gotgam (dried persimmons), the best sweet and chewy winter snack." },
    featured: false,
  },
  {
    slug: "suncheon-jangryu",
    title: { ko: "순천 장류축제", en: "Suncheon Jangryu Festival" },
    region: { ko: "전남 순천", en: "Suncheon, Jeonnam" },
    organizer: { ko: "순천시", en: "Suncheon City" },
    officialUrl: "https://www.insamfestival.co.kr/html/kr/sub4/sub4_0401.html",
    startDate: "2026-10-15",
    endDate: "2026-10-20",
    status: "upcoming",
    summary: { ko: "한국의 깊은 맛을 내는 전통 장류(된장, 고추장, 간장) 문화를 체험하는 축제.", en: "A festival to experience the traditional Jangryu (fermented sauces) culture that creates the deep flavors of Korea." },
    featured: false,
  },
  {
    slug: "yangyang-songi",
    title: { ko: "양양 송이축제", en: "Yangyang Pine Mushroom Festival" },
    region: { ko: "강원 양양", en: "Yangyang, Gangwon" },
    organizer: { ko: "양양군", en: "Yangyang-gun" },
    officialUrl: "https://www.yycf.or.kr/contents/button_mushroom_festival.html?language=",
    startDate: "2026-09-20",
    endDate: "2026-10-05",
    status: "upcoming",
    summary: { ko: "가을의 보석이라 불리는 자연산 송이버섯을 직접 맛보고 체험할 수 있는 명품 생태 축제.", en: "A premium eco-festival where you can taste and experience wild pine mushrooms, the jewel of autumn." },
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
    title: { ko: "수운잡방 전통음식체험관", en: "Soowoonjapbang Traditional Food Experience Center", ja: "需雲雜方 伝統料理体験館", zh: "需云杂方传统饮食体验馆", es: "Centro de Experiencia Gastronómica Soowoonjapbang", fr: "Centre d'Expérience Culinaire Soowoonjapbang", ru: "Центр традиционной кулинарии Суунчапбан" },
    location: { ko: "경북 안동", en: "Andong, Gyeongbuk", ja: "慶北安東", zh: "庆北安东", es: "Andong, Gyeongbuk", fr: "Andong, Gyeongbuk", ru: "Андон, Кёнбук" },
    officialUrl: "http://www.soowoonjapbang.com",
    shortDescription: { ko: "조선시대 가장 오래된 조리서 '수운잡방'의 요리를 체험하다.", en: "Experience dishes from 'Soowoonjapbang', the oldest cookbook from the Joseon Dynasty.", ja: "朝鮮時代最古の料理書「需雲雜方」の料理を体験する。", zh: "体验朝鲜时代最古老食谱《需云杂方》中的菜肴。", es: "Experimenta platos del libro de cocina más antiguo de la Dinastía Joseon.", fr: "Découvrez les plats du plus ancien livre de cuisine de la Dynastie Joseon.", ru: "Попробуйте блюда из старейшей кулинарной книги династии Чосон «Суунчапбан»." },
    whyVisit: { ko: "500년 전 안동 양반가의 식문화를 원형 그대로 재현하고 맛볼 수 있는 귀중한 미식 탐방 코스입니다.", en: "A precious culinary tour course where you can taste and experience the dietary culture of an Andong noble family from 500 years ago in its original form.", ja: "500年前の安東両班家の食文化をそのままに再現・体験できる貴重なグルメ探訪コースです。", zh: "可以原汁原味体验500年前安东贵族饮食文化的珍贵美食探访路线。", es: "Un valioso recorrido culinario donde puedes experimentar la cultura alimentaria de una familia noble de Andong de hace 500 años.", fr: "Un précieux circuit culinaire pour goûter et vivre la culture alimentaire d'une famille noble d'Andong d'il y a 500 ans.", ru: "Ценный кулинарный маршрут, воспроизводящий культуру питания дворянской семьи Андона 500 лет назад." },
    category: { ko: "전통음식체험", en: "Traditional Food Experience", ja: "伝統料理体験", zh: "传统饮食体验", es: "Experiencia Culinaria Tradicional", fr: "Expérience Culinaire Traditionnelle", ru: "Традиционный кулинарный опыт" },
    featured: true,
  },
  {
    slug: "eumsikdimibang",
    title: { ko: "음식디미방 체험관", en: "Eumsikdimibang Experience Center", ja: "飲食知味方体験館", zh: "饮食知味方体验馆", es: "Centro de Experiencia Eumsikdimibang", fr: "Centre d'Expérience Eumsikdimibang", ru: "Центр опыта Ымсикдимибан" },
    location: { ko: "경북 영양", en: "Yeongyang, Gyeongbuk", ja: "慶北英陽", zh: "庆北英阳", es: "Yeongyang, Gyeongbuk", fr: "Yeongyang, Gyeongbuk", ru: "Ёнъян, Кёнбук" },
    officialUrl: "http://fooddimi.kr/",
    shortDescription: { ko: "350년 전 정부인 안동 장씨가 남긴 한글 조리서의 맛.", en: "The taste of a Hangul cookbook left by Lady Jang of Andong 350 years ago.", ja: "350年前に貞夫人安東張氏が残したハングル料理書の味。", zh: "350年前贞夫人安东张氏留下的韩文食谱之味。", es: "El sabor de un libro de cocina en Hangul de la Señora Jang de Andong de hace 350 años.", fr: "Le goût d'un livre de cuisine en Hangul laissé par Dame Jang d'Andong il y a 350 ans.", ru: "Вкус кулинарной книги на хангыле, оставленной Дамой Чан из Андона 350 лет назад." },
    whyVisit: { ko: "동아시아 최초의 여성 저술 조리서인 '음식디미방'에 수록된 146가지 요리 중 대표 메뉴들을 직접 시식하고 체험할 수 있습니다.", en: "You can directly taste and experience representative menus among the 146 dishes recorded in 'Eumsikdimibang', East Asia's first cookbook written by a woman.", ja: "東アジア初の女性著述料理書「飲食知味方」に収録された146種の料理の代表メニューを直接試食・体験できます。", zh: "可以直接品尝和体验东亚第一部女性撰写的食谱《饮食知味方》中收录的146种料理代表菜单。", es: "Puede probar directamente los menús representativos de los 146 platos del 'Eumsikdimibang', el primer libro de cocina escrito por una mujer en Asia Oriental.", fr: "Vous pouvez directement goûter les menus représentatifs parmi les 146 plats de l'Eumsikdimibang, premier livre de cuisine écrit par une femme en Asie de l'Est.", ru: "Можно непосредственно попробовать представительные блюда из 146 рецептов «Ымсикдимибан» — первой кулинарной книги, написанной женщиной в Восточной Азии." },
    category: { ko: "전통음식체험", en: "Traditional Food Experience", ja: "伝統料理体験", zh: "传统饮食体验", es: "Experiencia Culinaria Tradicional", fr: "Expérience Culinaire Traditionnelle", ru: "Традиционный кулинарный опыт" },
    featured: true,
  },
  {
    slug: "korea-house",
    title: { ko: "한국의 집 (Korea House)", en: "Korea House", ja: "韓国の家 (Korea House)", zh: "韩国之家 (Korea House)", es: "Casa de Corea (Korea House)", fr: "Maison de Corée (Korea House)", ru: "Дом Кореи (Korea House)" },
    location: { ko: "서울 중구", en: "Jung-gu, Seoul", ja: "ソウル中区", zh: "首尔中区", es: "Jung-gu, Seúl", fr: "Jung-gu, Séoul", ru: "Чун-гу, Сеул" },
    officialUrl: "https://www.kh.or.kr/kh",
    shortDescription: { ko: "도심 속에서 만나는 고품격 궁중 음식과 전통 문화.", en: "High-class royal cuisine and traditional culture met in the heart of the city.", ja: "都心で出会う高品格な宮中料理と伝統文化。", zh: "在都市中心邂逅高品格宫廷饮食与传统文化。", es: "Gastronomía real de alta categoría y cultura tradicional en el corazón de la ciudad.", fr: "Cuisine royale haut de gamme et culture traditionnelle au cœur de la ville.", ru: "Высококлассная королевская кухня и традиционная культура в центре города." },
    whyVisit: { ko: "아름다운 한옥에서 무형문화재가 전수하는 정통 궁중 한정식을 맛보며 다채로운 전통 예술 공연까지 함께 즐길 수 있는 복합 문화 공간입니다.", en: "A complex cultural space where you can taste authentic royal Korean table d'hote handed down by intangible cultural assets in a beautiful Hanok and enjoy colorful traditional art performances.", ja: "美しい韓屋で無形文化財が伝授する正統宮中韓定食を味わいながら、多彩な伝統芸術公演まで楽しめる複合文化空間です。", zh: "在美丽的韩屋中品尝非物质文化遗产传授的正统宫廷韩定食，同时欣赏多彩传统艺术表演的复合文化空间。", es: "Un espacio cultural complejo donde puede degustar la auténtica mesa real coreana transmitida por el patrimonio cultural intangible en un hermoso Hanok.", fr: "Un espace culturel complexe où vous pouvez goûter l'authentique cuisine royale coréenne transmise par des actifs du patrimoine culturel immatériel dans un beau Hanok.", ru: "Многофункциональное культурное пространство, где можно попробовать подлинную королевскую корейскую кухню в красивом ханоке и насладиться традиционными выступлениями." },
    category: { ko: "궁중음식문화", en: "Royal Food Culture", ja: "宮中料理文化", zh: "宫廷饮食文化", es: "Cultura de Comida Real", fr: "Culture de la Cuisine Royale", ru: "Королевская кулинарная культура" },
    featured: true,
  }
];

