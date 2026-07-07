import { BanchanGuideArticle } from "@/types/banchan-guide";

export const BANCHAN_GUIDE_ARTICLES: BanchanGuideArticle[] = [
  {
    slug: "definition",
    order: 1,
    title: {
      ko: "반찬(Banchan): 한식의 영혼을 깨우는 자연의 선물",
      en: "Banchan: A Natural Gift Awakening the Soul of Korean Cuisine",
      ja: "バンチャン: 韓国料理の魂を呼び覚ます自然の贈り物",
      zh: "Banchan：唤醒韩国料理灵魂的自然馈赠",
      es: "Banchan: Un Don Natural que Despierta el Alma de la Cocina Coreana",
      fr: "Banchan : Un Don Naturel qui Éveille l'Âme de la Cuisine Coréenne",
      ar: "البانتشان: هدية طبيعية توقظ روح المطبخ الكوري",
      ru: "Банчан: Природный дар, пробуждающий душу корейской кухни"
    },
    subtitle: {
      ko: "정의와 발달 배경",
      en: "Definition & Natural Development Background",
      ja: "定義と発展の背景",
      zh: "定义与发展背景",
      es: "Definición y Contexto de Desarrollo Natural",
      fr: "Définition et Contexte de Développement Naturel",
      ar: "التعريف والخلفية التطورية",
      ru: "Определение и природный контекст развития"
    },
    metaDescription: {
      ko: "반찬(Banchan)이란 무엇인가? 한국의 자연환경과 농업 역사가 빚어낸 한식 반찬의 정의, 자연적 발달 배경, K-diet의 핵심 가치를 탐구한다.",
      en: "What is Banchan? Explore the definition, natural development background, and core values of K-diet shaped by Korea's geography and agricultural history.",
      ja: "バンチャンとは何か？韓国の自然環境と農業の歴史がもたらした韓国料理のおかずの定義、自然的な発展背景、K-dietの核心的な価値を探求する。",
      zh: "什么是韩国小菜（Banchan）？基于学术资料与历史记录，深入探究由韩国自然环境和农业历史孕育的小菜定义、自然发展背景以及韩食膳食（K-diet）的核心价值。",
      es: "¿Qué es el Banchan? Explore la definición, el trasfondo de desarrollo natural y los valores esenciales de la dieta coreana (K-diet) forjados por la geografía y la historia agrícola de Corea.",
      fr: "Qu'est-ce que le Banchan ? Explorez la définition, le contexte de développement naturel et les valeurs fondamentales de la K-diet façonnés par la géographie et l'histoire agricole de la Corée.",
      ar: "ما هو البانتشان؟ استكشف تعريف البانتشان، وخلفيته التطورية الطبيعية، والقيم الجوهرية للأنظمة الغذائية الكورية (K-diet) التي شكلتها الجغرافيا والتاريخ الزراعي الكوري.",
      ru: "Что такое банчан? Изучите определение, исторический контекст естественного развития и ключевые ценности корейской диеты (K-diet), сформированные географией и сельскохозяйственной историей Кореи."
    },
    keywords: {
      ko: ["반찬", "한식", "정의", "발달배경", "K-diet", "밥상", "나물", "김치"],
      en: ["banchan", "Korean cuisine", "definition", "development", "K-diet", "bapsang", "namul", "kimchi"],
      ja: ["バンチャン", "韓国料理", "定義", "発展背景", "K-diet", "パプサン", "ナムル", "キムチ"],
      zh: ["小菜", "韩食", "定义", "发展背景", "K-diet", "饭桌", "凉拌菜", "泡菜"],
      es: ["banchan", "cocina coreana", "definición", "desarrollo", "K-diet", "bapsang", "namul", "kimchi"],
      fr: ["banchan", "cuisine coreenne", "definition", "developpement", "K-diet", "bapsang", "namul", "kimchi"],
      ar: ["البانتشان", "المطبخ الكوري", "التعريف", "التطور", "حمية كورية", "بابسانغ", "نامول", "كيمتشي"],
      ru: ["банчан", "корейская кухня", "определение", "развитие", "корейская диета", "бапсан", "намуль", "кимчхи"]
    },
    readTime: {
      ko: "10분 읽기",
      en: "10 min read",
      ja: "10分で読める",
      zh: "阅读时间 10 分钟",
      es: "10 min de lectura",
      fr: "10 min de lecture",
      ar: "١٠ دقيقة قراءة",
      ru: "10 мин чтения"
    },
    references: [
      "Kim, S.H. et al. (2016). Korean diet: Characteristics and historical background. Journal of Ethnic Foods, 3(1), 26-31.",
      "정혜경 (2015). 한국 음식문화의 의미와 표상. 아시아리뷰, 5(1), 97-121.",
      "한국학중앙연구원. 음식. 한국민족문화대백과사전.",
      "김현수. 한국의 식문화 (강의 자료).",
      "정미선·최경란 (2010). 조선후기 식환경 및 식도구의 상호관계에 관한 연구."
    ]
  },
  {
    slug: "history",
    order: 2,
    title: {
      ko: "천년을 이어온 밥상의 진화",
      en: "Evolution of the Table Spanning a Millennium",
      ja: "千年の時を経た食卓の進化",
      zh: "延续千年的饭桌演变",
      es: "La Evolución de la Mesa a lo Largo de un Milenio",
      fr: "L'Évolution de la Table sur un Millénaire",
      ar: "تطور المائدة عبر ألف عام",
      ru: "Эволюция обеденного стола сквозь тысячелетие"
    },
    subtitle: {
      ko: "반찬의 역사적 변천",
      en: "Historical Evolution of Banchan",
      ja: "おかずの歴史적변천",
      zh: "伴餐的历史变迁",
      es: "Evolución Histórica del Banchan",
      fr: "Évolution Historique du Banchan",
      ar: "التطور التاريخي للبانتشان",
      ru: "Историческая эволюция банчана"
    },
    metaDescription: {
      ko: "선사시대 채집과 수렵에서 삼국, 고려, 조선을 거쳐 현대에 이르기까지, 반찬이 어떻게 변천해 왔는지를 역사 문헌을 바탕으로 추적한다.",
      en: "Trace the history of banchan from prehistoric gathering to Three Kingdoms, Goryeo, Joseon, and modern eras using historical texts.",
      ja: "先史時代の採集と狩猟から三国、高麗、朝鮮を経て現代に至るまで、おかずがどのように変遷してきたかを歴史文献に基づいてたどる。",
      zh: "基于历史文献，追溯伴餐从小鱼野果采摘的史前时代，历经三国、高丽、朝鲜时代，直至现代的演变历程。",
      es: "Rastree la historia del banchan desde la recolección prehistórica hasta las eras de los Tres Reinos, Goryeo, Joseon y la moderna a través de textos históricos.",
      fr: "Tracez l'histoire du banchan depuis la cueillette préhistorique jusqu'aux époques des Trois Royaumes, de Goryeo, de Joseon et de l'ère moderne grâce aux textes historiques.",
      ar: "تتبع تاريخ البانتشان من الجمع والصيد في ما قبل التاريخ عبر عهود الممالك الثلاث، وغوريو، وجوسون، والعصر الحديث استنادًا للوثائق التاريخية.",
      ru: "Проследите историю банчана от доисторического собирательства до эпохи Трех королевств, Корё, Чосон и современности на основе исторических источников."
    },
    keywords: {
      ko: ["반찬 역사", "삼국시대", "고려시대", "조선시대", "김치 역사", "반찬 변천", "식문화 진화"],
      en: ["banchan history", "Three Kingdoms", "Goryeo dynasty", "Joseon dynasty", "kimchi history", "banchan evolution", "food culture"],
      ja: ["おかず歴史", "三国時代", "高麗時代", "朝鮮時代", "キムチ歴史", "おかず変遷", "食文化進化"],
      zh: ["小菜历史", "三国时代", "高丽时代", "朝鲜时代", "泡菜历史", "小菜演变", "饮食文化"],
      es: ["historia del banchan", "Tres Reinos", "dinastía Goryeo", "dinastía Joseon", "historia del kimchi", "evolución del banchan", "cultura alimentaria"],
      fr: ["histoire du banchan", "Trois Royaumes", "dynastie Goryeo", "dynastie Joseon", "histoire du kimchi", "evolution du banchan", "culture alimentaire"],
      ar: ["تاريخ البانتشان", "الممالك الثلاث", "عهد غوريو", "عهد جوسون", "تاريخ الكيمتشي", "تطور البانتشان", "الثقافة الغذائية"],
      ru: ["история банчана", "Три королевства", "династия Корё", "династия Чосон", "история кимчхи", "эволюция банчана", "пищевая культура"]
    },
    readTime: {
      ko: "12분 읽기",
      en: "12 min read",
      ja: "12분で読める",
      zh: "阅读时间 12 分钟",
      es: "12 min de lectura",
      fr: "12 min de lecture",
      ar: "١٢ دقيقة قراءة",
      ru: "12 мин чтения"
    },
    references: [
      "한국학중앙연구원. 음식. 한국민족문화대백과사전.",
      "윤덕인 (2012). 우리나라 전통음식의 조리법과 조리기기의 변천에 관한 연구 2. 한맛한얼, 6(1).",
      "정미선·최경란 (2010). 조선후기 식환경 및 식도구의 상호관계에 관한 연구.",
      "김현수. 한국의 식문화 (강의 자료).",
      "국사편찬위원회 (2011). 한 해, 사계절에 담긴 우리 풍속. 한국문화사 36."
    ]
  },
  {
    slug: "culture",
    order: 3,
    title: {
      ko: "나눔과 정(情)의 미학",
      en: "The Aesthetics of Sharing and Jeong (Affection)",
      ja: "分かち合いと情（ジョン）の美学",
      zh: "分享与“情”的美学",
      es: "La Estética de Compartir y el Jeong (Afecto)",
      fr: "L'Esthétique du Partage et du Jeong (Affection)",
      ar: "جماليات المشاركة والجونغ (المحبة)",
      ru: "Эстетика совместной трапезы и Чжон (привязанность)"
    },
    subtitle: {
      ko: "반찬이 그리는 사회문화적 지도",
      en: "The Sociocultural Map Drawn by Banchan",
      ja: "おかずが描く社会文化的地図",
      zh: "伴餐描绘的社会文化图景",
      es: "El Mapa Sociocultural Trazado por el Banchan",
      fr: "La Carte Socioculturelle Dessinée par le Banchan",
      ar: "الخريطة الاجتماعية والثقافية التي يرسمها البانتشان",
      ru: "Социокультурная карта, нарисованная банчаном"
    },
    metaDescription: {
      ko: "반찬은 단순한 음식을 넘어 공동체적 나눔, 정(情), 배려의 사회문화적 표상이다. 한국 사회에서 반찬이 갖는 문화인류학적 의미를 탐구한다.",
      en: "Banchan is more than food; it is a sociocultural symbol of sharing, Jeong (affection), and consideration in Korean society.",
      ja: "おかずは単なる食べ物を超え、共同体の分か치合い、情（ジョン）、配慮の社会文化的表象である。韓国社会におけるおかずの文化人類学的意味を探求する。",
      zh: "伴餐不仅是食物，更是韩国社会中共同体分享、“情”（Jeong）与关怀的社会文化象征。以文化人类学视角探讨伴餐的社会意义。",
      es: "El Banchan es más que comida; es un símbolo sociocultural de compartir, Jeong (afecto) y consideración en la sociedad coreana.",
      fr: "Le Banchan est plus qu'un aliment ; c'est un symbole socioculturel de partage, de Jeong (affection) et de considération dans la société coréenne.",
      ar: "البانتشان ليس مجرد طعام، بل هو رمز اجتماعي وثقافي للمشاركة، والجونغ (المحبة)، والاهتمام في المجتمع الكوري.",
      ru: "Банчан — это больше чем еда; это социокультурный символ общности, Чжон (привязанности) и заботы в корейском обществе."
    },
    keywords: {
      ko: ["반찬 문화", "정", "공동체 식사", "음식 나눔", "밥상 상징", "식사 예절", "한국의 정"],
      en: ["banchan culture", "Jeong affection", "communal dining", "sharing food", "bapsang symbolism", "dining etiquette", "Korean hospitality"],
      ja: ["おかず文化", "ジョン情", "共同体食事", "分かち合い", "パプサン象徴", "食事マナー", "韓国の情"],
      zh: ["小菜文化", "情", "共同用餐", "食物分享", "饭桌象征", "饮食礼仪", "韩国之情"],
      es: ["cultura del banchan", "Jeong afecto", "comida comunitaria", "compartir comida", "simbolismo de bapsang", "etiqueta al comer", "hospitalidad coreana"],
      fr: ["culture du banchan", "Jeong affection", "repas communautaire", "partage alimentaire", "symbolisme de bapsang", "etiquette de table", "hospitalite coreenne"],
      ar: ["ثقافة البانتشان", "الجونغ المحبة", "وجبات جماعية", "مشاركة الطعام", "رموز البابسانغ", "آداب المائدة", "الضيافة الكورية"],
      ru: ["культура банчана", "Чжон привязанность", "совместная трапеза", "деление пищей", "символизм бапсана", "этикет трапезы", "корейское гостеприимство"]
    },
    readTime: {
      ko: "10분 읽기",
      en: "10 min read",
      ja: "10分で読める",
      zh: "阅读时间 10 分钟",
      es: "10 min de lectura",
      fr: "10 min de lecture",
      ar: "١٠ دقيقة قراءة",
      ru: "10 мин чтения"
    },
    references: [
      "정혜경 (2015). 한국 음식문화의 의미와 표상. 아시아리뷰, 5(1), 97-121.",
      "한국학중앙연구원. 음식. 한국민족문화대백과사전.",
      "Kim, S.H. et al. (2016). Korean diet: Characteristics and historical background. Journal of Ethnic Foods, 3(1), 26-31.",
      "국사편찬위원회 (2011). 한 해, 사계절에 담긴 우리 풍속. 한국문화사 36."
    ]
  },
  {
    slug: "ingredients",
    order: 4,
    title: {
      ko: "자연을 담고 시간을 빚다",
      en: "Containing Nature and Shaping Time",
      ja: "自然を盛り込み、時間を醸す",
      zh: "装载自然 雕刻时光",
      es: "Contener la Naturaleza y Moldear el Tiempo",
      fr: "Contenir la Nature et Façonner le Temps",
      ar: "احتواء الطبيعة وتشكيل الوقت",
      ru: "Вмещая природу, формируя время"
    },
    subtitle: {
      ko: "반찬의 조리법과 식재료",
      en: "Culinary Methods and Ingredients of Banchan",
      ja: "おかずの調理法と食材",
      zh: "伴餐的烹饪方法与食材",
      es: "Métodos Culinarios e Ingrédientes del Banchan",
      fr: "Méthodes Culinaires et Ingrédients du Banchan",
      ar: "طرق الطهي ومكونات البانتشان",
      ru: "Кулинарные методы и ингредиенты банчана"
    },
    metaDescription: {
      ko: "나물, 김치, 조림, 장아찌 등 반찬의 다양한 조리법과 식재료, 양념 구조를 고조리서와 학술 자료를 바탕으로 정리한다.",
      en: "Analyze various cooking methods (namul, kimchi, jorim) and raw ingredients of banchan based on historical cookbooks and research.",
      ja: "ナムル、キムチ、ジョリム、ジャンアチなど、おかずの多様な調理法と食材、味付けの構造を古い料理本や学術資料に基づいて整理する。",
      zh: "基于古代食谱与学术资料，系统整理凉拌菜、泡菜、炖菜、酱菜等小菜的多样烹饪法、食材和调味结构。",
      es: "Analice diversos métodos de cocina (namul, kimchi, jorim) e ingredientes del banchan basándose en recetarios históricos y estudios.",
      fr: "Analysez les diverses méthodes de cuisson (namul, kimchi, jorim) et les ingrédients du banchan en vous basant sur des livres de cuisine historiques.",
      ar: "تحليل طرق الطهي المتنوعة (النامول، الكيمتشي، الجوريم) والمكونات الأساسية للبانتشان بالاعتماد على كتب الطهي التاريخية والدراسات.",
      ru: "Изучите разнообразие способов приготовления (намуль, кимчхи, чорим) и ингредиентов банчана на основе старинных поваренных книг и исследований."
    },
    keywords: {
      ko: ["반찬 조리법", "나물", "김치 발효", "조림과 볶음", "장아찌", "양념 구조", "규합총서"],
      en: ["banchan recipes", "namul seasoning", "kimchi fermentation", "jorim and bokkeum", "jangajji", "seasoning structure", "Gyuhap chongseo"],
      ja: ["おかず調理法", "ナムル", "キムチ発酵", "ジョリムとポックム", "ジャンアチ", "味付け構造", "閨閤叢書"],
      zh: ["小菜烹饪法", "凉拌菜", "泡菜发酵", "炖与炒", "酱菜", "调味结构", "闺阁丛书"],
      es: ["recetas de banchan", "sazonado de namul", "fermentación de kimchi", "jorim y bokkeum", "jangajji", "estructura de sazonado", "Gyuhap chongseo"],
      fr: ["recettes de banchan", "assaisonnement de namul", "fermentation de kimchi", "jorim et bokkeum", "jangajji", "structure des condiments", "Gyuhap chongseo"],
      ar: ["وصفات البانتشان", "تتبيل النامول", "تخمير الكيمتشي", "الجوريم والبوكيوم", "الجانغاجي", "هيكل التتبيل", "غيوهاب تشونغسيو"],
      ru: ["рецепты банчана", "приправа намуль", "ферментация кимчхи", "чорим и поккым", "чаначхи", "структура приправ", "Кюхап чхонсо"]
    },
    readTime: {
      ko: "11분 읽기",
      en: "11 min read",
      ja: "11分で読める",
      zh: "阅读时间 11 分钟",
      es: "11 min de lectura",
      fr: "11 min de lecture",
      ar: "١١ دقيقة قراءة",
      ru: "11 мин чтения"
    },
    references: [
      "윤덕인 (2012). 우리나라 전통음식의 조리법과 조리기기의 변천에 관한 연구 2. 한맛한얼, 6(1).",
      "빙허각 이씨 (1815). 규합총서.",
      "Kim, S.H. et al. (2016). Korean diet: Characteristics and historical background. Journal of Ethnic Foods, 3(1), 26-31.",
      "정혜경 (2015). 한국 음식문화의 의미와 표상. 아시아리뷰, 5(1), 97-121.",
      "방신영 (1934). 조선요리제법."
    ]
  },
  {
    slug: "tableware",
    order: 5,
    title: {
      ko: "손끝에서 피어난 식문화",
      en: "Culinary Culture Blossoming from Fingertips",
      ja: "指先から咲く食文化",
      zh: "指尖绽放的饮食文化",
      es: "La Cultura Culinaria que Florece de las Manos",
      fr: "La Culture Culinaire Florissant du Bout des Doigts",
      ar: "ثقافة الطهي المزدهرة من أطراف الأصابع",
      ru: "Кулинарная культура, расцветающая на кончиках пальцев"
    },
    subtitle: {
      ko: "소반 위에 펼쳐진 반찬과 식기의 진화",
      en: "Evolution of Banchan and Tableware on the Soban",
      ja: "小盤（ソバン）の上に広がるおかずと器の進化",
      zh: "小盘（Soban）之上呈现的伴餐与食具的进化",
      es: "Evolución del Banchan y la Vajilla sobre el Soban",
      fr: "Évolution du Banchan et de la Vaisselle sur le Soban",
      ar: "تطور البانتشان وأدوات المائدة على السوبان",
      ru: "Эволюция банчана и посуды на столике Собан"
    },
    metaDescription: {
      ko: "소반, 수저, 식기 등 반찬과 함께 진화해 온 한국의 식도구를 고찰하며, 온돌과 유교적 독상 문화가 이에 미친 영향을 다룬다.",
      en: "Examine Korean dining utensils (soban, sujeo, tableware) that evolved with banchan, and the influence of ondol and Confucian individual dining.",
      ja: "小盤（ソバン）、スジョ（箸とスプーン）、器など、おかずとともに進化してきた韓国の食道具を考察し、オンドルと儒教的独膳文化が与えた影響を扱う。",
      zh: "考证小盘、水箸、半床器等伴餐用具的演变，并探讨地热（Ondol）和儒家独桌饮食文化对食具发展的影响。",
      es: "Examine los utensilios coreanos (soban, sujeo, vajilla) evolved con el banchan y la influencia del ondol y la cena individual confuciana.",
      fr: "Examinez les ustensiles coréens (soban, sujeo, vaisselle) qui ont évolué avec le banchan, et l'influence de l'ondol et du repas individuel confucéen.",
      ar: "دراسة أدوات المائدة الكورية (سوبان، سوجو، الأواني) التي تطورت مع البانتشان، وتأثير نظام الأوندول والوجبات الفردية الكونفوشيوسية.",
      ru: "Рассмотрите корейские столовые приборы (собан, суджо, посуду), которые эволюционировали вместе с банчаном, а также влияние ондоля и конфуцианства."
    },
    keywords: {
      ko: ["한국 식기", "소반 문화", "수저 역사", "반상기", "온돌 좌식", "유교 독상", "식사 도구"],
      en: ["Korean tableware", "soban table", "sujeo history", "bansanggi", "ondol seating", "Confucian dining", "dining utensils"],
      ja: ["韓国器", "ソバン文化", "スジョ歴史", "パンサンギ", "オンドル座敷", "儒教独膳", "食事道具"],
      zh: ["韩国食具", "小盘文化", "水箸历史", "半床器", "地热坐姿", "儒家独桌", "餐具"],
      es: ["vajilla coreana", "mesa soban", "historia del sujeo", "bansanggi", "asientos ondol", "cena confuciana", "utensilios para comer"],
      fr: ["vaisselle coreenne", "table soban", "histoire du sujeo", "bansanggi", "ondol assis", "repas confuceen", "ustensiles de cuisine"],
      ar: ["الأواني الكورية", "طاولة السوبان", "تاريخ السوجو", "البانسانغي", "جلسة الأوندول", "الوجبات الكونفوشيوسية", "أدوات الطعام"],
      ru: ["корейская посуда", "столик собан", "история суджо", "бансанги", "ондоль посадка", "конфуцианская трапеза", "столовые приборы"]
    },
    readTime: {
      ko: "10분 읽기",
      en: "10 min read",
      ja: "10分で読める",
      zh: "阅读时间 10 分钟",
      es: "10 min de lectura",
      fr: "10 min de lecture",
      ar: "١٠ دقيقة قراءة",
      ru: "10 мин чтения"
    },
    references: [
      "정미선·최경란 (2010). 조선후기 식환경 및 식도구의 상호관계에 관한 연구.",
      "윤덕인 (2012). 우리나라 전통음식의 조리법과 조리기기의 변천에 관한 연구 2. 한맛한얼, 6(1).",
      "빙허각 이씨 (1815). 규합총서.",
      "김상보 (2006). 조선시대의 음식문화. 가람기획.",
      "나선화 (2002). 소반. 대원사."
    ]
  }
];

export function getAllArticles(): BanchanGuideArticle[] {
  return BANCHAN_GUIDE_ARTICLES;
}

export function getArticleBySlug(slug: string): BanchanGuideArticle | undefined {
  return BANCHAN_GUIDE_ARTICLES.find(article => article.slug === slug);
}
