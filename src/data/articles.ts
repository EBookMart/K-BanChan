export interface Article {
  slug: string;
  colorClass: string;
  gradientClass: string;
  borderClass: string;
  textClass: string;
  iconName: string;
  colorHex: string; // 오방색 고유 헥사코드 추가

  // 다국어 메타 데이터
  direction: Record<string, string>;
  element: Record<string, string>;
  color: Record<string, string>;

  // 다국어 제목, 부제, 요약, 상세 본문
  title: Record<string, string>;
  subtitle: Record<string, string>;
  summary: Record<string, string>;
  content: Record<string, string>;
}

export const articles: Article[] = [
  {
    slug: "yaksik-dongwon",
    colorClass: "bg-emerald-600", // 학술 고증에 따라 청(靑)색은 녹색 계열로 변경
    gradientClass: "from-emerald-600 to-teal-500",
    borderClass: "border-emerald-500/30",
    textClass: "text-emerald-400",
    iconName: "yaksik",
    colorHex: "#007A33", // 정확한 동쪽 목(木)의 헥사코드
    direction: {
      ko: "동쪽 (East)", en: "East", ja: "東", zh: "东", es: "Este", fr: "Est", ar: "الشرق", ru: "Восток"
    },
    element: {
      ko: "목 (木)", en: "Wood", ja: "木", zh: "木", es: "Madera", fr: "Bois", ar: "الخشب", ru: "Дерево"
    },
    color: {
      ko: "청색 (Green)", en: "Green (靑)", ja: "青/緑", zh: "青 (绿)", es: "Verde (Azul)", fr: "Vert (Bleu)", ar: "الأخضر (الأزرق)", ru: "Зеленый (Синий)"
    },
    title: {
      ko: "약식동원 (藥食同源)",
      en: "Yak-sik Dong-won: Food as Medicine",
      ja: "薬食同源: 食は薬なり",
      zh: "药食同源: 食即是药",
      es: "Yak-sik Dong-won: La Comida como Medicina",
      fr: "Yaksik-Dongwon (藥食同源) : La Nourriture comme Médicament",
      ar: "ياك-سيك دونغ-وون: الطعام كدواء",
      ru: "Як-сик Дон-вон: Еда как лекарство"
    },
    subtitle: {
      ko: "음식과 약은 그 근원이 같다",
      en: "Food and Medicine Share the Same Origin",
      ja: "食と薬は源が同じである",
      zh: "药食同源，食药同源",
      es: "La comida y la medicina comparten el mismo origen",
      fr: "La médecine et la nourriture partagent la même origine",
      ar: "الطعام والدواء يتشاركان نفس الأصل",
      ru: "Еда и лекарства имеют одно происхождение"
    },
    summary: {
      ko: "음식과 약은 그 근원이 같다는 철학으로, 건강에 좋은 식재료의 조화로운 조리를 강조합니다.",
      en: "The wellness philosophy that medicine and food share the same origin, emphasizing harmonious cooking of healthy ingredients.",
      ja: "食と薬は源が同じであるという哲学のもと、健康に良い食材の調和のとれた調理を強調します。",
      zh: "药与食同源的养生哲学，强调健康食材的和谐烹饪。"
    },
    content: {
      ko: "약식동원(藥食同源)은 '음식과 약은 그 근원이 같다'는 한국의 전통 사상입니다. 이는 평소에 먹는 음식을 통해 건강을 유지하고 질병을 예방할 수 있다는 웰빙의 철학을 담고 있습니다. 한국 요리에서는 단순히 배를 채우는 것을 넘어, 식재료가 가진 성질과 약효를 극대화할 수 있는 조화로운 조리를 강조합니다. 제철 식재료의 사용, 다양한 산나물과 채소류의 균형 잡힌 섭취는 우리 몸의 기운을 다스려 면역력을 증진시킵니다. 대표적인 반찬인 도라지무침이나 연근조림 등은 한의학에서도 약재로 쓰이는 식재료들로, 일상적인 식탁 자체가 곧 건강을 지키는 약방 역할을 함을 보여줍니다.",
      en: "Yaksik-dongwon is a traditional Korean philosophy stating that 'medicine and food share the same origin.' It embodies the wellness concept that daily dietary intake can maintain health and prevent disease. Beyond merely satisfying hunger, Korean cuisine emphasizes harmonious cooking to maximize the natural therapeutic properties of ingredients. The use of seasonal ingredients, combined with a balanced consumption of mountain herbs and vegetables, regulates bodily energy and boosts immunity. Representative banchan like seasoned bellflower root (doraji-muchim) or braised lotus root (yeongeun-jorim) showcase how daily meals double as natural medicine.",
      ja: "薬食同源（やくしょくどうげん）は、「食と薬は源が同じである」という韓国の伝統思想です。これは普段食べる食事を通じて健康を維持し、病気を予防できるというウェルネスの哲学を反映しています。韓国料理では単にお腹を満たすだけでなく、食材が持つ性質と薬効を極大化できる調和のとれた調理を強調します。旬의 食材の使用、多様な山菜や野菜類のバランスの取れた摂取は、私たちの体の気を整えて免疫力を高めます。代表的なおかずであるキキョウの和え物（トラジムチム）やレンコンの煮物などは、韓医学でも薬材として使われる食材であり、日常の食卓自体が健康を守る薬局の役割を果たしていることを示しています。",
      zh: "药食同源是韩国的传统思想，意为“药与食同宗同源”。它蕴含着通过日常饮食来维持健康和预防疾病的养生哲学。在韩食中，不仅仅是为了填饱肚子，更强调通过和谐的烹饪来最大化食材本身的性质与药效。使用时令食材、均衡摄入各种山野菜与蔬菜，可以调节人体的气血，从而增强免疫力。代表性的小菜如凉拌桔梗（doraji-muchim）和炖莲藕（yeongeun-jorim）等，都是韩医学中常用的药材成分，这表明日常的餐桌本身就是守护健康的药房。"
    }
  },
  {
    slug: "yukmi",
    colorClass: "bg-red-600",
    gradientClass: "from-red-600 to-rose-500",
    borderClass: "border-red-500/30",
    textClass: "text-red-400",
    iconName: "yukmi",
    colorHex: "#CE1126",
    direction: {
      ko: "남쪽 (South)", en: "South", ja: "南", zh: "南", es: "Sur", fr: "Sud", ar: "الجنوب", ru: "Юг"
    },
    element: {
      ko: "화 (火)", en: "Fire", ja: "火", zh: "火", es: "Fuego", fr: "Feu", ar: "الجنوب", ru: "Юг"
    },
    color: {
      ko: "적색 (Red)", en: "Red", ja: "赤", zh: "红", es: "Rojo", fr: "Rouge", ar: "الأحمر", ru: "Красный"
    },
    title: {
      ko: "육미 (六味): 육미와 손맛",
      en: "Yukmi (六味): Six Tastes & the Hand-Touch Flavor (Sonmat)",
      ja: "六味 (六味): 六味と手の味 (Sonmat)",
      zh: "六味 (六味): 六味与手味 (Sonmat)",
      es: "Yukmi (六味): Seis Sabores y el Sabor de las Manos (Sonmat)",
      fr: "Yukmi (六味) : Six Saveurs & le Goût de la Main (Sonmat)",
      ar: "يوكمي (六味): الأذواق الستة ونكهة اللمسة (Sonmat)",
      ru: "Юкми (六味): Шесть вкусов и вкус рук (Sonmat)"
    },
    subtitle: {
      ko: "여섯 가지 맛의 조화와 손맛의 예술",
      en: "Harmony of Six Tastes and Art of Hand-Touch Flavor",
      ja: "六つの味の調和と手の味の芸術",
      zh: "六味和谐与手味艺术"
    },
    summary: {
      ko: "단맛, 짠맛, 신맛, 쓴맛, 매운맛에 감칠맛을 더한 여섯 가지 맛의 깊은 조화를 다룹니다.",
      en: "Deals with the deep harmony of six tastes—sweet, salty, sour, bitter, spicy, and the deep savory umami flavor.",
      ja: "甘味、塩味、酸味、苦味、辛味に旨味を加えた六つの味の深い調和を扱います。",
      zh: "涵盖甜、咸、酸、苦、辣，加上鲜味在内的六种味道的深层融合。"
    },
    content: {
      ko: "육미(六味)는 한국 음식의 맛을 구성하는 여섯 가지 맛의 조화를 의미합니다. 전통적인 다섯 가지 맛인 단맛(감), 짠맛(함), 신맛(산), 쓴맛(고), 매운맛(신)에 한식 특유의 깊은 감칠맛(담 또는 선)을 더한 개념입니다. 한식은 한 가지 강렬한 맛에 치우치기보다, 이 여섯 가지 맛이 입안에서 복합적으로 어우러지는 완벽한 균형을 지향합니다. 고추장과 고춧가루의 매콤함, 간장과 된장의 짭조름한 깊은 맛, 식초와 매실청의 새콤함이 상호보완적으로 작용하여 소화를 돕고 입맛을 돋웁니다. 이러한 맛의 시너지는 갈치조림이나 제육볶음 같은 대표적인 반찬에서 훌륭하게 발현됩니다.",
      en: "Yukmi represents the six harmonious tastes that constitute Korean cuisine. It expands on the five traditional tastes—sweet, salty, sour, bitter, and spicy—by adding the deep savory note (umami) characteristic of fermented K-food. Korean culinary art aims for a complete sensory balance rather than letting a single flavor dominate. The spiciness of gochujang, the deep salinity of soy sauce and doenjang, and the tanginess of vinegar act synthetically to aid digestion and stimulate appetite. This synergy is beautifully showcased in banchan like braised hairtail (galchi-jorim) or stir-fried pork (jeyuk-bokkeum).",
      ja: "六味（ろくみ）は、韓国料理の味を構成する六つの味の調和を意味します。伝統的な五つの味である甘味（甘）、塩味（鹹）、酸味（酸）、苦味（苦）、辛味（辛）に、韓国料理特有の深い旨味（淡または鮮）を加えた概念です。韓国料理は単一の強烈な味に偏るのではなく、これら六つの味が口の中で複合的に調和する完璧なバランスを目指します。コチュジャンや粉唐辛子のピリッとした辛さ、醤油や味噌の塩気のある深い味わい、酢や梅エキスの酸味が相互補完的に働き、消化を助け食欲をそそります。このような味のシナジーは、太刀魚の煮付け（カルチジョリム）や豚肉炒め（ジェユкポックム）などの代表的なおかずで素晴らしく発揮されます...가 아니라",
      zh: "六味是指构成韩国料理风味的六种味道的和谐。它是在传统的五味——甜、咸、酸、苦、辣的基础上，加上韩食特有的深层“鲜味”（即旨味）的概念。韩食追求的不是某一种味道独占鳌头，而是这六种风味在口中复合交融的完美平衡。辣椒酱和辣椒粉的辛辣、酱油和大酱的咸香深沉、食醋和梅子青的酸甜，相互补充，促进消化并增进食欲。这种风味的协同效应在带鱼炖煮（galchi-jorim）或辣炒猪肉（jeyuk-bokkeum）等代表性小菜中得到了完美的体现。"
    }
  },
  {
    slug: "obangsaek",
    colorClass: "bg-amber-500",
    gradientClass: "from-amber-500 to-yellow-400",
    borderClass: "border-amber-500/30",
    textClass: "text-amber-400",
    iconName: "obangsaek",
    colorHex: "#FFD700",
    direction: {
      ko: "중앙 (Center)", en: "Center", ja: "中央", zh: "中央", es: "Centro", fr: "Centre", ar: "الوسط", ru: "Центр"
    },
    element: {
      ko: "토 (土)", en: "Earth", ja: "土", zh: "土", es: "Tierra", fr: "Terre", ar: "الأرض", ru: "Земля"
    },
    color: {
      ko: "황색 (Yellow)", en: "Yellow", ja: "黄", zh: "黄", es: "Amarillo", fr: "Jaune", ar: "الأصفر", ru: "Желтый"
    },
    title: {
      ko: "오방색 (五方色): 시각적 조화 - 오행",
      en: "Obangsaek (五方色): Visual Harmony - The Five Elements",
      ja: "五方色 (五方色): 視覚的調和 - 五行",
      zh: "五方色 (五方色): 视觉和谐 - 五行",
      es: "Obangsaek (五方色): Armonía Visual - Los Cinco Elementos",
      fr: "Obangsaek (五方色) : L'Harmonie Visuelle - Les Cinq Éléments",
      ar: "أوبانغساك (五方色): الانسجام البصري - العناصر الخمسة",
      ru: "Обансэк (五方色): Визуальная гармония - Пять элементов"
    },
    subtitle: {
      ko: "다섯 가지 전통 색채로 이루는 건강과 시각적 조화",
      en: "Health and Visual Harmony through Five Traditional Colors",
      ja: "五つの伝統色彩で成す健康と視覚的調和",
      zh: "五种传统色彩构成的健康与视觉和谐"
    },
    summary: {
      ko: "청, 적, 황, 백, 흑 다섯 가지 색상으로 조화롭고 건강한 영양 균형을 추구합니다.",
      en: "Pursues harmonious visual beauty and complete nutritional balance through blue, red, yellow, white, and black colors.",
      ja: "青、赤、黄、白、黒の五つの色で調和のとれた健康的な栄養バランスを追求します。",
      zh: "通过青、赤、黄、白、黑五种颜色追求和谐健康的营养均衡。"
    },
    content: {
      ko: "오방색(五方色)은 음양오행설에 기반한 청(청), 적(적), 황(황), 백(백), 흑(흑)의 다섯 가지 방위색을 말합니다. 한식은 이 다섯 가지 색상의 식재료를 식탁 위에 조화롭게 올림으로써 시각적인 아름다움뿐만 아니라 영양학적인 완전성을 동시에 추구합니다. 푸른 채소의 엽록소, 붉은 고추의 캡사이신, 계란노른자나 단호박의 카로티노이드, 하얀 쌀밥과 무의 알리신, 검은 버섯과 김의 안토시아닌 등은 현대 영양학에서 말하는 피토케미컬(Phytochemical)의 균형과 정확히 일치합니다. 구절판이나 비빔밥, 잡채와 같은 요리는 오방색 철학이 시각과 미각, 영양이 완벽한 일체를 이룬 정수입니다.",
      en: "Obangsaek refers to the five cardinal colors—blue, red, yellow, white, and black—derived from the Yin and Yang and the Five Elements theory. Korean food harmonizes ingredients of these five colors to achieve both visual beauty and nutritional completeness. The chlorophyll of green vegetables, capsaicin of red peppers, carotenoids of yellow squash, allicin of white radish, and anthocyanin of black mushrooms match the modern nutritional science of phytochemical balance. Dishes like bibimbap and japchae are prime examples where the Obangsaek philosophy unites sight, taste, and nutrition.",
      ja: "五方色（ごほうしょく）は、陰陽五行説に基づく青・赤・黄・白・黒の五つの方位の色を指します。韓国料理はこれら五つの色の食材を食卓の上に調和させることで、視覚的な美しさだけでなく、栄養学的な完全性を同時に追求します。緑の野菜の葉緑素、赤唐辛子のカプサイシン、卵黄やカボチャのカロテノイド、白いご飯や大根のアリシン、黒いキノコや海苔のアントシアニンなどは、現代栄養学で言われるフィトケミカル（Phytochemical）のバランスと正確に一致します。ビビンバやチャプチェのような料理は、五方色哲学が視覚、味覚、栄養を完璧に一体化させた真髄です。",
      zh: "五方色是指基于阴阳五行学说的青、赤、黄、白、黑五种方位的颜色。韩食将这五种颜色的食材和谐地呈现在餐桌上，既追求视觉上的美感，又同时追求营养学上的完整性。绿色蔬菜的叶绿素、红辣椒的辣椒素、蛋黄和南瓜的类胡萝卜素、白米饭和白萝卜的大蒜素、黑木耳和海苔的花青素等，与现代营养学所说的植物化学素（Phytochemical）平衡完全一致。九折坂、石锅拌饭和杂菜等料理，是五方色哲学将视觉、味觉与营养融为完美一体的精髓。"
    }
  },
  {
    slug: "nanum",
    colorClass: "bg-slate-200",
    gradientClass: "from-slate-300 to-slate-100",
    borderClass: "border-slate-300/30",
    textClass: "text-slate-300",
    iconName: "nanum",
    colorHex: "#F5F5F5",
    direction: {
      ko: "서쪽 (West)", en: "West", ja: "西", zh: "西", es: "Oeste", fr: "Ouest", ar: "الغرب", ru: "Запад"
    },
    element: {
      ko: "금 (金)", en: "Metal", ja: "金", zh: "金", es: "Metal", fr: "Métal", ar: "المعدن", ru: "Металл"
    },
    color: {
      ko: "백색 (White)", en: "White", ja: "白", zh: "白", es: "Blanco", fr: "Blanc", ar: "الأبيض", ru: "Белый"
    },
    title: {
      ko: "나눔(Sharing)과 공동체",
      en: "Nanum (Sharing) & Community",
      ja: "ナヌム (Sharing) と共同体",
      zh: "分享 (Sharing) 与共同体",
      es: "Nanum (Sharing) y Comunidad",
      fr: "Nanum (Partage) & Communauté",
      ar: "نانوم (Sharing) والمجتمع",
      ru: "Нанум (Sharing) и Общность"
    },
    subtitle: {
      ko: "반찬을 함께 나누는 상생과 따뜻한 정",
      en: "Warm Affection and Coexistence in Sharing Side Dishes",
      ja: "おかずを分かち合う相生と温かい情",
      zh: "分享小菜的共生与温情"
    },
    summary: {
      ko: "정(情)과 반찬을 이웃과 넉넉히 나누어 먹는 상생과 환대의 식문화를 다룹니다.",
      en: "Explores the food culture of sharing side dishes and affection (Jeong) with neighbors in hospitality.",
      ja: "情（ジョン）とおかずを隣人と豊かに分け合って食べる、共生と歓待の食文化を扱います。",
      zh: "探讨与邻里大方分享温情和温热小菜的共生与款待的食文化。"
    },
    content: {
      ko: "나눔(Nanum)은 한국의 밥상 공동체가 지닌 환대와 배려의 문화입니다. 한식에서 반찬(Banchan)은 독상을 넘어 모두가 함께 공유하여 먹는 공유식(Shared dining)의 성격을 지닙니다. 이웃과 밥을 나누고, 김장을 하여 온 마을이 김치를 나누어 가지며, 정(정)을 표현하는 풍습은 나눔의 가치관에서 기인합니다. 식탁 중앙에 다양한 반찬을 두고 다 함께 숟가락과 젓가락을 나누며 식사하는 구조는 공동체의 결속을 강화하고 서로를 존중하는 마음을 기르게 합니다. 이러한 환대와 배려의 스피릿은 한국의 밥상을 찾는 모든 이에게 따뜻한 정을 느끼게 해주는 독특한 식문화적 자산입니다.",
      en: "Nanum represents the spirit of sharing and hospitality inherent in the Korean dining community. In Korean culinary culture, banchan is inherently a shared dining experience rather than a single-serving meal. The customs of sharing rice with neighbors, gathering for Kimjang to distribute kimchi, and expressing affection (Jeong) originate from the value of Nanum. Placing diverse banchan in the center of the table strengthens community bonds and fosters mutual respect. This hospitality is a unique cultural asset that makes anyone visiting a Korean table feel warmly welcomed.",
      ja: "分かち合い（ナヌム）は、韓国の食事共同体が持つ歓待と配慮の文化です。韓国料理においておかず（バンチャン）は、個人の食事を超えて、みんなで共有して食べるシェアダイニング（Shared dining）の性格を持ちます。隣人とご飯を分かち合い、キムジャン（キムチ漬け）をして村全体でキムチを分け合い、情（ジョン）を表現する風습은...",
      zh: "“分享”（Nanum）是韩国餐桌共同体所蕴含的款待与关怀文化。在韩食中，小菜（Banchan）超越了独占的形式，具有大家共同分享食用的“共享餐饮”（Shared dining）特征。与邻里分享饭菜、在腌冬菜（Kimjang）季节整个村子分享泡菜、以及表达“情”（Jeong）的习俗，都源于分享的价值观。将各种小菜放在餐桌中央，大家一起分享汤匙和筷子进餐的结构，增强了共同体的凝聚力，培养了相互尊重的态度。这种款待与关怀的精神是独特的食文化资产，让每一个来到韩国餐桌前的人都能感受到温暖的情谊。"
    }
  },
  {
    slug: "ingredients-terroir",
    colorClass: "bg-neutral-900",
    gradientClass: "from-neutral-800 to-neutral-950",
    borderClass: "border-neutral-800/40",
    textClass: "text-neutral-400",
    iconName: "terroir",
    colorHex: "#1C1C1C",
    direction: {
      ko: "북쪽 (West)", en: "West", ja: "北", zh: "北", es: "Norte", fr: "Nord", ar: "الشمال", ru: "Север"
    },
    element: {
      ko: "수 (水)", en: "Water", ja: "水", zh: "水", es: "Agua", fr: "Eau", ar: "الماء", ru: "Вода"
    },
    color: {
      ko: "흑색 (Black)", en: "Black", ja: "黒", zh: "黑", es: "Negro", fr: "Noir", ar: "الأسود", ru: "Черный"
    },
    title: {
      ko: "식재료와 풍토: 사계절과 발효",
      en: "Ingredients & Terroir: Fermentation",
      ja: "食材と風土: 発酵の調和",
      zh: "食材与风土: 发酵"
    },
    subtitle: {
      ko: "자연의 순환과 한반도 기후가 빚어낸 발효의 시간",
      en: "Time of Fermentation Crafted by Nature's Cycle and Korean Climate",
      ja: "自然の循環と韓半島の気候が醸し出した発酵の時間",
      zh: "自然循环与朝鲜半岛气候酿造的发酵时间"
    },
    summary: {
      ko: "계절과 삼면의 바다가 빚어낸 신선함과 발효 기법의 깊은 과학을 소개합니다.",
      en: "Introduces the freshness crafted by seasons and oceans, and the science of deep fermentation.",
      ja: "四季と三面の海が生み出した新鮮さと発酵技術の深い科学を紹介します。",
      zh: "介绍四季与三面环海孕育出的鲜活美味以及发酵技术的深刻科学。"
    },
    content: {
      ko: "식재료와 풍토(Ingredients & Terroir)는 한국의 지리적 환경과 기후가 빚어낸 독창적인 식재료의 힘입니다. 삼면이 바다로 둘러싸인 반도 지형과 산지가 많은 지리적 특성, 사계절이 뚜렷한 기후는 철마다 다양한 제철 수산물과 야생 나물, 채소를 선사합니다. 춥고 긴 겨울을 대비하기 위해 발달한 김치, 간장, 된장, 고추장 등의 발효(Fermentation) 기술은 한식의 깊은 맛을 내는 주춧돌입니다. 이러한 풍토적 특성은 각 지역의 기후와 결합하여 고유한 로컬 식재료와 조리 기법을 탄생시켰으며, 시간과 자연이 서서히 빚어낸 천연 양념과 식재료의 신선함이 합쳐져 한식만의 깊고 건강한 오리지널리티를 완성합니다.",
      en: "Ingredients and Terroir emphasize the unique strength of ingredients shaped by Korea's geography and climate. Surrounded by sea on three sides, characterized by mountainous terrains and four distinct seasons, Korea harvests diverse seasonal seafood, wild mountain herbs, and crops. To survive the cold winters, Koreans perfected fermentation (kimchi, soy sauce, doenjang), forming the cornerstone of K-food flavors. This terroir combines local climates with ingredients, allowing nature and time to age natural seasonings and finalize K-food's deep originality.",
      ja: "食材と風土（Ingredients & Terroir）は、韓国の地理的環境と気候が生み出した独創的な食材の力です。三方を海に囲まれた半島地形と山がちな地理的特徴、四季がはっきりした気候は、季節ごとに多様な旬の水産物や野生의 山菜, 野菜をもたらします。寒く長い冬に備えるために発達したキムチ、醤油、味噌、コチュジャンなどの発酵（Fermentation）技術は、韓国料理の深い味わいを生み出す礎です。このような風土的特性は各地域の気候と結びつき、独自のローカル食材と調理技術を誕生させました。時間と自然がじっくりと醸し出した天然の調味料と食材の新鮮さが融合し、韓国料理ならではの深く健康的なオリジナリティを完成させています。",
      zh: "“食材与风土”（Ingredients & Terroir）是韩国地理环境和气候所造就的独创食材力量。三面环海的的半岛地形、多山地的地理特征以及四季分明的气候，在每个季节都赐予人们丰富多样的时令海鲜、野生山野菜和蔬菜。为了应对寒冷漫长的冬季而发达的泡菜、酱油、大酱、辣椒酱等“发酵”技术，是韩食呈现深沉风味的基石。这种风土特征与各地区的气候相结合，诞生了固有的本地食材和烹饪方法。随着时间和自然慢慢酝酿而成的天然调料与食材的新鲜度相结合，完成了韩食独特而健康的原创性。"
    }
  }
];

export const ARTICLE_CYCLE_ORDER = [
  'yaksik-dongwon',
  'yukmi',
  'obangsaek',
  'nanum',
  'ingredients-terroir',
] as const;

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((art) => art.slug === slug);
}

export function getPreviousArticle(currentSlug: string): Article {
  const index = (ARTICLE_CYCLE_ORDER as readonly string[]).indexOf(currentSlug);
  if (index === -1) return articles[0];
  const prevIndex = (index - 1 + ARTICLE_CYCLE_ORDER.length) % ARTICLE_CYCLE_ORDER.length;
  return articles[prevIndex];
}

export function getNextArticle(currentSlug: string): Article {
  const index = (ARTICLE_CYCLE_ORDER as readonly string[]).indexOf(currentSlug);
  if (index === -1) return articles[0];
  const nextIndex = (index + 1) % ARTICLE_CYCLE_ORDER.length;
  return articles[nextIndex];
}
