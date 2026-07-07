export interface AIImageMapping {
  src: string;
  alt: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    es: string;
    fr: string;
    ar: string;
    ru: string;
  };
  objectPositionMobile?: string;
  objectPositionDesktop?: string;
}

export const aiImages = {
  homeHero: {
    src: "/images/ai/home-hero.webp",
    objectPositionMobile: "center",
    objectPositionDesktop: "center 45%",
    alt: {
      ko: "한국의 전통 반찬 문화와 오행의 시각적 조화",
      en: "Korean traditional banchan culture and visual harmony of five elements",
      ja: "韓国의 전통おかず文化と五行の視覚的調和",
      zh: "韩国传统伴餐文化与五行的视觉和谐",
      es: "Cultura tradicional coreana de banchan y armonía visual de cinco elementos",
      fr: "Culture traditionnelle du banchan coréen et harmonie visuelle des cinq éléments",
      ar: "ثقافة البان تشان الكورية التقليدية والانسجام البصري للعناصر الخمسة",
      ru: "Корейская традиционная культура панчхана и визуальная гармония пяти элементов"
    }
  },
  yaksikDongwon: {
    src: "/images/ai/articles/yaksik-dongwon.webp",
    alt: {
      ko: "계절성 치유 반찬과 약식동원 철학의 시각화",
      en: "Seasonal healing banchan and visualization of food-as-medicine philosophy",
      ja: "季節の治癒おかずと薬食同源の哲学の視覚化",
      zh: "季节性食疗小菜与药食同源哲学视觉化",
      es: "Banchan curativo estacional y la filosofía de la comida como medicina",
      fr: "Banchan de guérison saisonnier et philosophie de la nourriture comme médicament",
      ar: "أطباق بان تشان علاجية موسمية وفلسفة الطعام كدواء",
      ru: "Сезонные целебные панчханы и визуализация философии еды как лекарства"
    }
  },
  yukmi: {
    src: "/images/ai/articles/yukmi.webp",
    alt: {
      ko: "다양한 맛의 깊은 층위와 전통 손맛",
      en: "Deep layers of diverse tastes and traditional hand-touch flavor",
      ja: "様々な味の深い層と伝統的な手の味",
      zh: "丰富味道的深层叠合与传统手艺风味",
      es: "Capas profundas de diversos sabores y el sabor tradicional de las manos",
      fr: "Couches profondes de saveurs diverses et le goût de la main traditionnel",
      ar: "طبقات عميقة من الأذواق المتنوعة ونكهة لمسة اليد التقليدية",
      ru: "Глубокие слои разнообразных вкусов и традиционный вкус рук"
    }
  },
  obangsaek: {
    src: "/images/ai/articles/obangsaek.webp",
    alt: {
      ko: "다섯 가지 전통 색채와 원소의 오행 조화",
      en: "Traditional five colors and the harmony of five elements",
      ja: "五つの伝統色彩と五行の調和",
      zh: "五种传统色彩与五行的和谐",
      es: "Cinco colores tradicionales y la armonía de los cinco elementos",
      fr: "Cinq couleurs traditionnelles et l'harmonie des cinq éléments",
      ar: "الألوان التقليدية الخمسة والانسجام بين العناصر الخمسة",
      ru: "Пять традиционных цветов и гармония пяти элементов"
    }
  },
  nanum: {
    src: "/images/ai/articles/nanum.webp",
    alt: {
      ko: "반찬을 함께 나누어 먹는 한국의 따뜻한 공동체 밥상",
      en: "Warm Korean communal table sharing diverse side dishes",
      ja: "おかずを分かち合う韓国の温かい共同の食卓",
      zh: "共享小菜的韩国温馨共同餐桌",
      es: "Mesa comunal coreana para compartir guarniciones",
      fr: "Table de partage coréenne chaleureuse de banchans",
      ar: "مائدة كورية جماعية دافئة لمشاركة الأطباق الجانبية المتنوعة",
      ru: "Теплый корейский общий стол для совместного поедания панчханов"
    }
  },
  ingredientsTerroir: {
    src: "/images/ai/articles/ingredients-terroir.webp",
    alt: {
      ko: "삼면의 바다와 한반도 풍토가 기른 로컬 식재료",
      en: "Local ingredients shaped by Korean climate, ocean, and terroir",
      ja: "三面の海と韓半島の風土が育てた地域の食材",
      zh: "三面环海与朝鲜半岛风土孕育的本地食材",
      es: "Ingredientes locales formados por el clima, mar y terroir coreano",
      fr: "Ingrédients locaux façonnés par le climat, la mer et le terroir coréens",
      ar: "المكونات المحلية التي شكلها المناخ والمحيط والتربة المحلية الكورية",
      ru: "Местные ингредиенты, сформированные корейским климатом, морем и терруаром"
    }
  },
  hot8Hero: {
    src: "/images/ai/hot/hot8-hero.webp",
    objectPositionMobile: "center",
    objectPositionDesktop: "center 40%",
    alt: {
      ko: "엄선된 대표 인기 시즌 반찬 콜렉션",
      en: "Curated collection of trending seasonal banchan classics",
      ja: "厳選された代表적인 인기 시즌 반찬 콜렉션",
      zh: "精选代表性热门时令小菜合集",
      es: "Colección curada de clásicos populares de banchan de temporada",
      fr: "Sélection curée de grands classiques de banchan de saison",
      ar: "مجموعة منسقة من كلاسيكيات البان تشان الموسمية الشائعة",
      ru: "Специально подобранная коллекция популярных сезонных классических панчханов"
    }
  },
  seasonalCuration: {
    src: "/images/ai/hot/seasonal-curation.webp",
    alt: {
      ko: "자연의 절기 순환에 맞춘 전통 제철 반찬 큐레이션",
      en: "Traditional seasonal side dish curation matching nature's cycle",
      ja: "自然の節気の循環に合わせた伝統的な季節のおかずキュレーション",
      zh: "结合自然节气循环的传统时令小菜推荐",
      es: "Curaduría de platos de acompañamiento de temporada",
      fr: "Curation de plats d'accompagnement traditionnels selon les saisons",
      ar: "تقييم الأطباق الجانبية الموسمية التقليدية التي تتوافق مع دورة الطبيعة",
      ru: "Сезонный подбор традиционных закусок, соответствующих природным циклам"
    }
  },
  mediaLinkedCuration: {
    src: "/images/ai/hot/media-linked-curation.webp",
    alt: {
      ko: "영화와 방송 등 대중 미디어를 수놓은 한식 이야기",
      en: "Korean food storytelling and warmth represented in popular media",
      ja: "映画や放送などのメディアを彩った韓国料理ストーリー",
      zh: "电影和广播等大众媒体中的韩食故事",
      es: "Historias de comida coreana representadas en los medios populares",
      fr: "Storytelling et convivialité de la cuisine coréenne dans les médias",
      ar: "قصص الطعام الكوري والدفء الممثل في وسائل الإعلام الشعبية",
      ru: "Истории о корейской кухне и теплоте, представленные в популярных медиа"
    }
  },
  kimchi: {
    src: "/images/ai/banchan/kimchi.webp",
    objectPositionMobile: "center",
    objectPositionDesktop: "center 45%",
    alt: {
      ko: "장인의 손길이 닿은 고품격 프리미엄 전통 한국 김치",
      en: "High-quality premium traditional Korean kimchi crafted with care",
      ja: "職人の手が加わった高級プレミアム伝統韓国キムチ",
      zh: "匠心打造的高品质优质传统韩国泡菜",
      es: "Kimchi tradicional coreano premium de alta calidad",
      fr: "Kimchi traditionnel coréen haut de gamme de qualité supérieure",
      ar: "كيمتشي كوري تقليدي فاخر عالي الجودة مصنوع بعناية",
      ru: "Высококачественное традиционное корейское кимчхи премиум-класса"
    }
  },
  japchae: {
    src: "/images/ai/banchan/japchae.webp",
    objectPositionMobile: "center",
    objectPositionDesktop: "center 45%",
    alt: {
      ko: "오색 오행의 시각적 아름다움을 담은 명품 잡채",
      en: "Premium masterwork Korean japchae showing five-color visual beauty",
      ja: "五色五行의 시각적 아름다움을 담은名品チャプチェ",
      zh: "展现五彩五行视觉美感的高档杂菜",
      es: "Japchae coreano premium que muestra belleza visual de cinco colores",
      fr: "Japchae coréen haut de gamme illustrant la beauté visuelle des cinq couleurs",
      ar: "جابشي كوري فاخر يظهر الجمال البصري للخمسة ألوان",
      ru: "Корейский чапчхэ премиум-класса, демонстрирующий визуальную красоту пяти цветов"
    }
  }
} as const;

export type AIImageKey = keyof typeof aiImages;

export function getAIImage(key: AIImageKey): AIImageMapping {
  return aiImages[key];
}
