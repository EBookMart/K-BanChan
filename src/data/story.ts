export interface Story {
  id: string;
  slug: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
  author: string;
  date: string;
}

export const stories: Story[] = [
  {
    id: "story-1",
    slug: "korean-food-passion",
    image: "/images/story/placeholder.jpg",
    titleKey: "한국 사람들은 언제부터 먹는 일에 진심이었을까?",
    subtitleKey: "백성들이 먹는 일에 너무 진심이라고 걱정했던 왕",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-2",
    slug: "yakgwa-history",
    image: "/images/story/placeholder.jpg",
    titleKey: "약과의 숨바꼭질",
    subtitleKey: "고려시대부터 즐기던 약과가 때때로 어명으로 금지된 이유",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-3",
    slug: "k-chicken-evolution",
    image: "/images/story/placeholder.jpg",
    titleKey: "K-치킨의 탄생",
    subtitleKey: "한국인들은 어떻게 미국의 치킨을 세계적인 K-치킨으로 발전시켰는가?",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-4",
    slug: "k-ramyeon-globalization",
    image: "/images/story/placeholder.jpg",
    titleKey: "K-라면의 세계화",
    subtitleKey: "일본에서 발명된 라면은 어떻게 전 세계의 입맛을 사로잡았나?",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-5",
    slug: "hotteok-origin",
    image: "/images/story/placeholder.jpg",
    titleKey: "호떡의 변신",
    subtitleKey: "청나라 상인들이 팔던 빵이 한국의 대표 길거리 간식이 되기까지",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-6",
    slug: "budaejjigae-birth",
    image: "/images/story/placeholder.jpg",
    titleKey: "부대찌개의 탄생 비화",
    subtitleKey: "6.25 전쟁의 아픔이 낳은 현대 한국인의 소울푸드",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-7",
    slug: "highway-rest-area-food",
    image: "/images/story/placeholder.jpg",
    titleKey: "고속도로 휴게소의 비밀",
    subtitleKey: "왜 한국의 휴게소는 다양한 미식의 천국이 되었을까?",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-8",
    slug: "anju-culture",
    image: "/images/story/placeholder.jpg",
    titleKey: "도대체 안주란 무엇인가?",
    subtitleKey: "술과 음식의 완벽한 마리아주, 한국만의 독특한 안주 문화",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-9",
    slug: "tteokbokki-history",
    image: "/images/story/placeholder.jpg",
    titleKey: "떡볶이의 신분 상승",
    subtitleKey: "궁중에서 즐기던 고급 요리가 어떻게 국민 길거리 음식이 되었나?",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-10",
    slug: "hangwa-premium-dessert",
    image: "/images/story/placeholder.jpg",
    titleKey: "프리미엄 디저트, 한과",
    subtitleKey: "튀김 요리가 드문 한식에서 한과는 어떻게 최고의 자리에 올랐나?",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-11",
    slug: "korean-pizza-evolution",
    image: "/images/story/placeholder.jpg",
    titleKey: "한국식 피자의 진화",
    subtitleKey: "전통과 퓨전의 경계를 넘나드는 다채로운 진화 과정",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-12",
    slug: "kimchi-ingredient-or-dish",
    image: "/images/story/placeholder.jpg",
    titleKey: "김치는 요리인가, 식재료인가?",
    subtitleKey: "발효의 미학에서 수만 가지 요리의 바탕이 되기까지",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-13",
    slug: "harmony-in-korean-food",
    image: "/images/story/placeholder.jpg",
    titleKey: "비빔의 미학",
    subtitleKey: "구절판, 비빔밥, 부대찌개에 숨겨진 한국 식문화의 공통점",
    author: "K-BanChan Editorial",
    date: "준비중"
  },
  {
    id: "story-14",
    slug: "gimbap-infinite-evolution",
    image: "/images/story/placeholder.jpg",
    titleKey: "무한 진화하는 김밥",
    subtitleKey: "김밥은 어디까지 다양해지고 진화할 수 있을까?",
    author: "K-BanChan Editorial",
    date: "준비중"
  }
];

export function getAllStories(): Story[] {
  return stories;
}
