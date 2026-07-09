export interface IngredientCategory {
  id: string;
  name: { [key: string]: string };
  description: { [key: string]: string };
  longDescription: { [key: string]: string };
  relatedBanchanIds: string[];
}

export const ingredientCategories: IngredientCategory[] = [
  {
    id: "vegetables",
    name: {
      ko: "채소류 (나물과 생채)",
      en: "Vegetables (Namul & Fresh Greens)",
      fr: "Légumes (Namul & Salades)",
      ar: "الخضروات (نامول والأوراق الخضراء)",
      ru: "Овощи (Намуль и зелень)",
      es: "Verduras (Namul y ensaladas)",
      ja: "野菜類（ナムルと生菜）",
      zh: "蔬菜类（凉拌与生菜）"
    },
    description: {
      ko: "제철 채소를 데치거나 무쳐 조화로운 풍미를 이끌어내는 한식 나물의 근간",
      en: "The foundation of Korean Namul, bringing out natural flavors by blanching and seasoning.",
      fr: "La base du Namul coréen, sublimant les saveurs naturelles par blanchiment et assaisonnement.",
      ar: "أساس النامول الكوري، الذي يبرز النكهات الطبيعية من خلال السلق والتتبيل.",
      ru: "Основа корейского намуля, раскрывающая естественный вкус благодаря бланшированию и приправам.",
      es: "La base del Namul coreano, que realza los sabores naturales mediante el blanqueado y sazonado.",
      ja: "季節の野菜を茹でたり和えたりして、調和のとれた風味を引き出すナムルの基本",
      zh: "通过焯水和拌制，调和出时令蔬菜自然风味的韩食凉拌菜之根本"
    },
    longDescription: {
      ko: "한국인의 식단에서 가장 중요한 비타민과 식이섬유 공급원입니다. 제철 채소를 활용하여 굽거나 튀기지 않고 살짝 데치거나 날것으로 무치는 조리법은 재료 본연의 맛과 생명력을 지키며, 한국 음식의 '자연 친화적 조화'를 상징합니다.",
      en: "The primary source of vitamins and dietary fiber in the Korean diet. The cooking method of lightly blanching or mixing raw greens, rather than frying or roasting, preserves the natural life and taste of ingredients, symbolizing the nature-friendly harmony of Korean food.",
      fr: "La source essentielle de vitamines et de fibres du régime coréen. Plutôt que de frire ou de rôtir, blanchir légèrement ou mélanger les légumes frais préserve les nutriments et les saveurs d'origine, symbolisant l'harmonie naturelle de la cuisine coréenne.",
      ar: "المصدر الرئيسي للفيتامينات والألياف الغذائية في النظام الغذائي الكوري. طريقة الطهي عن طريق السلق الخفيف أو خلط الخضار الطازجة، بدلاً من القلي أو التحميص، تحافظ على القيمة الغذائية والنكهة الأصلية للمكونات، مما يرمز إلى الانسجام الطبيعي للطعام الكوري.",
      ru: "Основной источник витаминов и клетчатки в корейском рационе. Метод легкого бланширования или смешивания свежей зелени (без жарки) сохраняет естественный вкус и пользу ингредиентов, символизируя гармонию корейской кухни с природой.",
      es: "La principal fuente de vitaminas y fibra dietética en la dieta coreana. El método de cocina de blanquear ligeramente o mezclar verduras crudas, en lugar de freírlas o asarlas, preserva la vitalidad y el sabor natural de los ingredientes, simbolizando la armonía natural de la comida coreana.",
      ja: "韓国人の食生活において最も重要なビタミンと食物繊維の供給源です。旬の野菜を使い、焼いたり揚げたりせず、軽く茹でるか生で和える調理法は、食材本来の味と生命力を保ち、韓国料理の「自然親和的な調和」を象徴しています。",
      zh: "韩国人饮食中最重要的维生素和膳食纤维来源。利用时令蔬菜，不经煎炸，仅通过轻轻焯水或生拌的烹饪方法，保留了食材本原的美味与生命力，象征着韩食“亲近自然的和谐”理念。"
    },
    relatedBanchanIds: ["banchan-07", "banchan-08", "banchan-10", "banchan-12", "banchan-19", "banchan-20"]
  },
  {
    id: "seafood",
    name: {
      ko: "해산물류 (건어물과 해조류)",
      en: "Seafood (Dried Fish & Seaweeds)",
      fr: "Fruits de Mer (Poissons Séchés & Algues)",
      ar: "المأكولات البحرية (الأسماك والأعشاب البحرية)",
      ru: "Морепродукты (Сушеная рыба и водоросли)",
      es: "Mariscos (Pescado seco y algas)",
      ja: "海鮮類（乾物と海藻）",
      zh: "海鲜类（干货与海藻）"
    },
    description: {
      ko: "삼면이 바다인 지형을 활용해 감칠맛과 필수 미네랄을 더해주는 바다의 선물",
      en: "Gifts from the sea surrounding the peninsula, adding rich umami and essential minerals.",
      fr: "Cadeaux de la mer entourant la péninsule, apportant de l'umami et des minéraux essentiels.",
      ar: "هدايا من البحر المحيط بشبه الجزيرة، تضيف غنى الأومامي والمعادن الأساسية.",
      ru: "Дары моря, омывающего полуостров с трех сторон, добавляющие богатый вкус умами и минералы.",
      es: "Regalos del mar que rodea la península, agregando un rico umami y minerales esenciales.",
      ja: "三方が海に囲まれた地形を活かし、深い旨味と必須ミネラルをもたらす海の恵み",
      zh: "得益于三面临海的地理优势，为餐桌增添鲜美风味与必需矿物质的大海馈赠"
    },
    longDescription: {
      ko: "삼면이 바다로 둘러싸인 한반도의 자연환경 덕분에 오랫동안 발달해 왔습니다. 저장성을 높이기 위해 소금에 절이거나 햇볕에 말린 건어물과 해조류(김, 미역, 다시마)는 한식 상차림에 특유의 바다 향과 깊은 감칠맛을 부여합니다.",
      en: "Developed historically thanks to the Korean Peninsula being surrounded by the sea on three sides. Seaweed (Gim, Miyeok, Dashima) and fish dried or salted to improve preservation impart a unique ocean aroma and deep umami to the traditional table setup.",
      fr: "Développés grâce à la péninsule coréenne bordée par la mer de trois côtés. Les algues (Gim, Miyeok) et les poissons séchés ou salés pour améliorer la conservation confèrent un arôme marin unique et un umami profond à la table traditionnelle.",
      ar: "تطورت تاريخياً بفضل إحاطة شبه الجزيرة الكورية بالبحر من ثلاث جهات. الأعشاب البحرية (جيم، مييوك) والأسماك المجففة أو المملحة لتحسين الحفظ تمنح رائحة المحيط الفريدة ونكهة الأومامي العميقة للمائدة التقليدية.",
      ru: "Развивались благодаря географическому положению Корейского полуострова, омываемого морем с трех сторон. Сушеные или соленые морепродукты и водоросли (ким, миёк) придают корейскому столу неповторимый морской аромат и глубокий вкус умами.",
      es: "Desarrollados históricamente gracias a que la península coreana está rodeada por el mar en tres lados. Las algas y los pescados secos o salados para mejorar la conservación imparten un aroma oceánico único y un umami profundo a la mesa tradicional.",
      ja: "三方を海に囲まれた韓半島の自然環境のおかげで、古くから発展してきました。保存性を高めるために塩漬けにしたり、天日干しにした乾物や海藻（海苔、ワカメ、昆布）は、韓国の食卓に特有の磯の香りと深い旨味をもたらします。",
      zh: "得益于三面临海的朝鲜半岛自然环境，海鲜食材自古以来就非常发达。为了提高保存性而腌制或晒干的鱼干和海藻（紫菜、海带）为韩食餐桌注入了独特的海洋气息与浓郁的鲜味。"
    },
    relatedBanchanIds: ["banchan-02", "banchan-04", "banchan-09", "banchan-18"]
  },
  {
    id: "meat",
    name: {
      ko: "육류 및 알류 (단백질 찬류)",
      en: "Meat & Eggs (Protein Side Dishes)",
      fr: "Viandes & Œufs (Plats de Protéines)",
      ar: "اللحوم والبيض (أطباق بروتينية)",
      ru: "Мясо и яйца (Белковые закуски)",
      es: "Carnes y huevos (Proteicos)",
      ja: "肉類と卵類（タンパク質のおかず）",
      zh: "肉类与蛋类（蛋白质小菜）"
    },
    description: {
      ko: "영양 불균형을 해소하고 온 가족의 기력을 보완해주는 든든한 동력",
      en: "Essential protein sources that restore energy and balance out nutritional needs.",
      fr: "Sources essentielles de protéines qui redonnent de l'énergie et équilibrent le repas.",
      ar: "مصادر البروتين الأساسية التي تعيد الطاقة وتوازن الاحتياجات الغذائية.",
      ru: "Важные источники белка, которые восстанавливают силы и балансируют рацион.",
      es: "Fuentes esenciales de proteínas que restauran la energía y equilibran las necesidades nutricionales.",
      ja: "栄養の偏りを解消し、家族みんなの元気を補う頼もしい原動力",
      zh: "消除营养失衡，为全家人补充元气的坚实动力"
    },
    longDescription: {
      ko: "소고기, 돼지고기, 닭고기와 같은 육류뿐만 아니라 계란과 메추리알은 영양분이 부족하기 쉬운 전통 식단에서 훌륭한 단백질 공급원이 되어주었습니다. 주로 찌거나 장에 졸이는 장조림 등의 가공법을 통해 감칠맛을 가미하여 오래 두고 먹을 수 있도록 조리되었습니다.",
      en: "Meat (beef, pork, chicken) and eggs served as premium protein sources in traditional grain-heavy diets. Braising or boiling in soy sauce (Jangjorim) allowed these rich proteins to absorb deep flavors and stay preserved for daily meals.",
      fr: "Les viandes (bœuf, porc, poulet) et les œufs servaient de sources de protéines de qualité supérieure. Mijotés ou braisés dans la sauce soja (Jangjorim), ils absorbaient des saveurs intenses et pouvaient être conservés pour les repas quotidiens.",
      ar: "اللحوم (البقر، الخنزير، الدجاج) والبيض كانت بمثابة مصادر بروتين ممتازة في النظام الغذائي التقليدي المعتمد على الحبوب. طهيها ببطء في صلصة الصويا (جانغجوريم) سمح لهذه البروتينات بامتصاص نكهات عميقة والحفاظ عليها للوجبات اليومية.",
      ru: "Мясо (говядина, свинина, курица) и яйца служили отличными источниками белка в традиционном рационе. Тушение в соевом соусе (чанчжорим) позволяло мясу впитывать глубокий вкус и дольше храниться для ежедневных трапез.",
      es: "La carne (ternera, cerdo, pollo) y los huevos servían como fuentes de proteínas de primera calidad. El guisado en salsa de soja (Jangjorim) permitía que estas proteínas absorbieran sabores profundos y se conservaran para las comidas diarias.",
      ja: "牛肉、豚肉、鶏肉などの肉類だけでなく、卵やうずらの卵は、栄養が不足しがちだった伝統的な食生活において優れたタンパク質源となりました。主に蒸したり、醤油で煮込む「ジャンジョリム」などの調理法を通じて、旨味を加えつつ長く保存して食べられるように工夫されました。",
      zh: "牛肉、猪肉、鸡肉等肉类以及鸡蛋和鹌鹑蛋，在易缺乏营养的传统饮食中提供了优质的蛋白质。主要通过清蒸或用酱油炖煮（酱牛肉/酱鹌鹑蛋）等加工方法增添鲜味，使其能够长期保存并日常食用。"
    },
    relatedBanchanIds: ["banchan-01", "banchan-05", "banchan-14", "banchan-15"]
  },
  {
    id: "legumes",
    name: {
      ko: "두류 및 곡류 (콩과 두부)",
      en: "Legumes & Grains (Soybeans & Tofu)",
      fr: "Légumineuses & Céréales (Soja & Tofu)",
      ar: "البقوليات والحبوب (الصويا والتوفو)",
      ru: "Бобовые и злаки (Соя и тофу)",
      es: "Legumbres y granos (Soja y tofu)",
      ja: "豆類と穀類（大豆と豆腐）",
      zh: "豆类与谷类（大豆与豆腐）"
    },
    description: {
      ko: "한반도와 만주를 원산지로 하는 콩에서 시작되어 온 식물성 단백질의 정수",
      en: "The essence of plant-based protein rooted in native soybeans of East Asia.",
      fr: "L'essence des protéines végétales issues des graines de soja indigènes d'Asie de l'Est.",
      ar: "جوهر البروتين النباتي المتأصل في فول الصويا الأصلي في شرق آسيا.",
      ru: "Эссенция растительного белка, берущая начало от дикой сои Восточной Азии.",
      es: "La esencia de las proteínas vegetales con raíces в la soja nativa de Asia oriental.",
      ja: "韓半島と満州を原産地とする大豆から始まった植物性タンパク質の神髄",
      zh: "以朝鲜半岛和满洲为原产地的大豆所蕴含的植物性蛋白质之精髓"
    },
    longDescription: {
      ko: "한반도는 대두(콩)의 야생종이 널리 자생하던 중요한 원산지 중 하나입니다. 곡물 위주의 한 식단에서 단백질 부족을 보완해주던 고마운 농작물로, 단순한 섭취를 넘어 두부, 콩나물 등으로 가공 및 세분화되어 수많은 대표 반찬들의 기초가 되었습니다.",
      en: "The Korean Peninsula is an ancestral homeland of wild soybeans. Serving as a crucial plant protein to supplement grain diets, soybeans evolved through historical techniques into tofu and bean sprouts, laying the groundwork for many classic side dishes.",
      fr: "La péninsule coréenne est l'une des terres d'origine du soja sauvage. Fournissant des protéines végétales cruciales pour compléter les céréales, le soja a évolué pour devenir du tofu ou des pousses de soja, posant les bases de nombreux plats d'accompagnement.",
      ar: "شبه الجزيرة الكورية هي الموطن الأصلي لفول الصويا البري. وباعتباره بروتيناً نباتياً حيوياً لتكملة النظام الغذائي القائم على الحبوب، تطور فول الصويا عبر التقنيات التاريخية إلى توفو وبراعم الصويا، مما وضع الأساس للعديد من الأطباق الجانبية الكلاسيكية.",
      ru: "Корейский полуостров — одна из родин дикой сои. Восполняя дефицит белка в зерновом рационе, соя стала основой для производства тофу и соевых проростков, которые легли в основу многих традиционных закусок.",
      es: "La península coreana es una de las tierras de origen de la soja silvestre. Sirviendo como una proteína vegetal crucial para complementar las dietas de granos, la soja evolucionó a través de técnicas históricas en tofu y brotes de soja, sentando las bases para muchos platos clásicos.",
      ja: "韓半島は大豆の野生種が広く自生していた重要な原産地の一つです。穀物中心の食生活においてタンパク質不足を補ってくれたありがたい農作物で、単に食べるだけでなく、豆腐や豆もやしなどに加工・細分化され、数多くの代表的なおかずの基礎となりました。",
      zh: "朝鲜半岛是大豆野生种广泛自生的重要原产地之一。作为在以谷物为主的饮食中补充蛋白质的珍贵农作物，它不仅被直接食用，还被加工细分为豆腐、豆芽等，成为众多代表性小菜的基础。"
    },
    relatedBanchanIds: ["banchan-03", "banchan-06"]
  },
  {
    id: "fermented",
    name: {
      ko: "발효 및 조미류 (장과 김치)",
      en: "Fermented Foods (Jang, Kimchi & Pickles)",
      fr: "Aliments Fermentés (Jang, Kimchi & Condiments)",
      ar: "الأطعمة المخمرة (جانغ، كيمتشي ومخللات)",
      ru: "Ферментированные продукты (Чан и кимчи)",
      es: "Alimentos fermentados (Jang, kimchi y encurtidos)",
      ja: "発酵と調味料（醤、キムチ、漬物）",
      zh: "发酵与调味类（酱与泡菜）"
    },
    description: {
      ko: "미생물과의 시간적 협업을 통해 맛의 조화와 영양의 극대화를 이룬 한식의 소울",
      en: "The soul of Korean food, maximizing flavors and nutrition through temporal collaboration with microbes.",
      fr: "L'âme de la cuisine coréenne, maximisant les saveurs et la nutrition grâce au temps et aux ferments.",
      ar: "روح الطعام الكوري، الذي يعزز النكهات والتغذية من خلال التعاون الزمني مع الميكروبات.",
      ru: "Душа корейской кухни, раскрывающая вкус и пользу благодаря естественному процессу ферментации.",
      es: "El alma de la comida coreana, que maximiza los sabores y la nutrición mediante la fermentación.",
      ja: "微生物との時間的な協業を通じて、味の調和と栄養の極大化を成し遂げた韓国料理のソウル",
      zh: "通过与微生物的时间协同，实现风味协调与营养最大化的韩食灵魂"
    },
    longDescription: {
      ko: "간장, 고추장, 된장 등의 '장(Jang)'과 한국의 영원한 동반자인 김치, 그리고 장아찌는 한국 식문화의 정체성 그 자체입니다. 오랜 숙성 과정을 거치며 발생하는 유산균과 깊은 풍미는 음식의 소화를 돕고 다른 식재료의 감칠맛을 배가시켜 줍니다.",
      en: "Fermented sauces (Jang), Kimchi, and pickled vegetables (Jangajji) represent the very identity of Korean cuisine. The long aging process generates beneficial bacteria and deep flavor profiles that aid digestion and elevate other ingredients' tastes.",
      fr: "Les sauces fermentées (Jang), le Kimchi et les légumes saumurés (Jangajji) incarnent l'identité même de la cuisine coréenne. Le long processus d'affinage génère des ferments lactiques et des arômes profonds qui facilitent la digestion.",
      ar: "الصلصات المخمرة (جانغ)، الكيمتشي، والخضروات المخللة (جانجاجي) تمثل الهوية الحقيقية للمطبخ الكوري. عملية التعتيق الطويلة تنتج بكتيريا نافعة ونكهات عميقة تساعد على الهضم وترفع مذاق المكونات الأخرى.",
      ru: "Ферментированные соусы (чан), кимчи и маринованные овощи (чаначжи) олицетворяют саму суть корейской кухни. Длительное созревание рождает полезные лактобактерии и глубокий вкус, помогающий пищеварению.",
      es: "Las salsas fermentadas (Jang), el kimchi y las verduras encurtidas (Jangajji) representan la identidad misma de la cocina coreana. El largo proceso de envejecimiento genera bacterias beneficiosas y perfiles de sabor profundo que facilitan la digestión.",
      ja: "醤油、コチュジャン、味噌などの「醤（ジャン）」と、韓国の永遠の伴侶であるキムチ、そして漬物（ジャンアチ）は、韓国食文化のアイデンティティそのものです。長い熟成過程を経て発生する乳酸菌と深い風味は、消化を助け、他の食材の旨味を倍増させます。",
      zh: "酱油、辣椒酱、大酱等“酱（Jang）”，以及韩国人永远的伴侣泡菜和酱菜，是韩国饮食文化的身份标识。在漫长的发酵过程中产生的乳酸菌与浓郁风味，有助于食物消化，并能成倍提升其他食材的鲜美感。"
    },
    relatedBanchanIds: ["banchan-13", "banchan-17"]
  }
];

export interface EditorialContent {
  slug: string;
  title: { [locale: string]: string };
  excerpt: { [locale: string]: string };
  body: { [locale: string]: string };
  cta: { label: { [locale: string]: string }; href: string }[];
}

export const ingredientsPageContent: EditorialContent = {
  slug: "ingredients",
  title: {
    ko: "한식의 식재료",
    en: "Korean Ingredients",
    ja: "韓国の食材",
    zh: "韩食食材",
    es: "Ingredientes Coreanos",
    fr: "Ingrédients Coréens",
    ar: "المكونات الكورية",
    ru: "Корейские ингредиенты"
  },
  excerpt: {
    ko: "산과 바다, 들과 발효의 시간이 한 상의 균형을 완성합니다. 한식의 식재료를 채소와 산나물, 해산물과 해조류, 육류와 가금류, 두류와 곡물, 발효와 보존 식재료로 나누어 한국 음식의 구조와 철학을 살펴봅니다.",
    en: "Mountain, sea, fields, and the passage of fermentation complete the balance of a single table. We explore the structure and philosophy of Korean food through core ingredient categories."
  },
  body: {
    ko: `## 산과 바다, 들과 발효의 시간이 한 상의 균형을 완성합니다

한국 음식의 식재료는 단순한 원재료의 목록이 아닙니다. 한반도의 지리와 계절, 저장과 발효의 기술, 그리고 서로 겹치지 않게 조화를 이루는 반상의 질서가 함께 만든 하나의 체계입니다. 밥과 국, 그리고 다양한 반찬으로 구성되는 한국의 식사는 재료의 풍부함과 더불어 그것을 배열하고 조화시키는 원리를 함께 보여줍니다.

반찬의 세계를 이해하려면 먼저 재료의 구조를 이해해야 합니다. 채소와 산나물, 해산물과 해조류, 육류와 가금류, 두류와 곡물, 그리고 발효와 보존 식재료는 각각 독립적인 영역이면서도 한식 안에서 서로 긴밀하게 연결됩니다. 이러한 재료 체계는 조리법, 저장법, 지역성, 계절감과 맞물려 한국 식문화의 깊이를 형성합니다.

## 1. 재료를 넘어서, 질서와 균형의 구조

한국 식재료의 특징은 다양성 자체보다 그 다양성을 다루는 방식에 있습니다. 같은 상 위에 여러 반찬이 놓이더라도 재료와 조리법이 과도하게 겹치지 않도록 구성하고, 색과 질감, 맛의 방향이 서로 보완되도록 조정하는 원리가 작동합니다. 그래서 한식의 식재료는 개별 품목이 아니라 ‘어떻게 함께 놓이는가’까지 포함하는 구조적 개념으로 이해할 필요가 있습니다.

또한 한식은 재료를 자연 상태 그대로 소비하기보다, 데치고 무치고 절이고 말리고 발효시키는 과정을 통해 새로운 맛의 층위를 만들어냅니다. 이때 ‘시간’은 단순한 경과가 아니라 실제로 풍미를 형성하는 식재료의 일부가 됩니다. 장, 김치, 젓갈, 장아찌가 중요한 이유도 여기에 있습니다.

## 2. 채소와 산나물: 한식의 가장 넓은 바탕

채소와 산나물은 한식 식재료 체계의 가장 넓은 바탕을 이룹니다. 시금치, 무, 배추, 오이처럼 밭에서 기르는 재료부터 고사리, 도라지, 취나물처럼 산에서 채취하는 재료까지, 한국의 반찬은 오랫동안 식물성 재료를 중심으로 전개되어 왔습니다. 이러한 재료는 계절의 변화에 민감하게 반응하며, 제철의 감각을 식탁 위에 가장 직접적으로 드러냅니다.

채소는 조리 방식에 따라 전혀 다른 반찬이 됩니다. 데쳐서 무치면 숙채가 되고, 생으로 양념하면 생채가 되며, 말려 두었다가 다시 불리면 저장의 시간까지 품은 반찬이 됩니다. 나물 문화는 단순한 채소 섭취를 넘어, 자연의 계절성과 절제된 조리 철학을 담고 있다는 점에서 한식의 핵심이라 할 수 있습니다.

## 3. 해산물과 해조류: 삼면의 바다가 올린 감칠맛

삼면이 바다로 둘러싸인 한반도는 풍부한 해산물과 해조류 문화를 발전시켜 왔습니다. 생선과 조개, 새우와 멸치, 그리고 김·미역·다시마 같은 해조류는 한국 음식의 중요한 미네랄 공급원이자 감칠맛의 원천입니다. 해산물은 구이, 조림, 무침, 젓갈 등 다양한 형태로 반찬화되며 지역적 개성을 강하게 드러내는 재료이기도 합니다.

특히 해조류와 젓갈은 한국 음식의 맛 구조를 이해하는 데 중요합니다. 해조류는 담백하면서도 깊은 바다의 풍미를 더하고, 젓갈은 발효를 통해 짠맛 너머의 복합적인 감칠맛을 만들어냅니다. 이는 해산물이 단순한 단백질 공급원이 아니라 발효와 저장, 지역성과 결합된 식문화의 축이라는 것을 보여줍니다.

## 4. 육류와 가금류: 절제된 단백질의 축

한식에서 육류는 서구식 식단처럼 언제나 중심에 서기보다, 채소 중심 식단을 보완하는 단백질의 축으로 기능해 왔습니다. 쇠고기는 장조림과 불고기처럼 정제된 방식으로 쓰였고, 돼지고기는 볶음이나 수육, 닭고기는 찜이나 보양식으로 발전해 왔습니다. 이는 육류가 귀한 자원이었던 역사와도 연결됩니다.

한식의 육류는 대개 장류, 채소, 향채와 함께 조화를 이루며 쓰입니다. 즉, 육류만의 강한 존재감보다는 다른 재료와 어울리며 균형을 이루는 방향으로 발달해 왔습니다. 이런 점에서 육류 역시 한식의 질서 안에서는 ‘강한 주인공’이기보다 ‘전체 구성을 완성하는 재료’로 보는 편이 정확합니다.

## 5. 두류와 곡물: 담백한 힘과 섞임의 미학

콩과 곡물은 한국 식탁의 담백한 힘을 상징합니다. 콩은 식물성 단백질의 대표 재료로서 콩자반, 두부, 콩나물, 장류 등 매우 다양한 형태로 식탁에 오르며, 곡물은 밥뿐 아니라 떡, 묵, 면, 당면 같은 가공 식재료로도 확장됩니다. 이러한 재료들은 과하지 않으면서도 지속적인 영양을 제공하는 한식의 기본층을 형성합니다.

특히 두류와 곡물은 ‘섞임의 미학’을 잘 보여줍니다. 탕평채, 잡채, 묵무침처럼 여러 재료가 함께 어우러질 때, 각각의 재료는 자신을 과시하기보다 전체의 균형에 기여합니다. 이는 한식이 재료를 병렬적으로 나열하기보다 조화 속에서 완성한다는 사실을 잘 드러냅니다.

## 6. 발효와 보존: 시간이 만드는 깊은 맛

한식 식재료를 이야기할 때 발효와 보존을 별도의 축으로 다루지 않으면 전체 구조를 온전히 이해할 수 없습니다. 간장, 된장, 고추장, 김치, 젓갈, 장아찌는 모두 시간이 개입할 때 비로소 완성되는 재료입니다. 이들 식재료는 단지 오래 두기 위한 저장법이 아니라, 기다림을 통해 맛의 차원을 확장하는 한국 음식의 핵심 기술입니다.

발효와 보존 식재료는 한식의 풍미를 깊게 만들 뿐 아니라, 계절과 지역의 제약을 넘어서는 생존의 지혜이기도 했습니다. 채소가 풍성한 계절에는 김치와 장아찌를 담가 두고, 바다의 풍요는 젓갈과 건어물로 축적했으며, 곡물과 콩은 장으로 숙성시켜 긴 시간 활용했습니다. 즉, 한식의 발효는 맛과 영양, 저장과 문화가 동시에 만나는 지점입니다.

## 7. 반상 체계: 재료는 어떻게 한 상이 되는가

한국 음식에서 식재료는 개별적으로만 존재하지 않습니다. 그것은 반상이라는 구조 안에서 비로소 완전한 의미를 갖습니다. 3첩, 5첩, 7첩, 9첩, 12첩으로 이어지는 상차림의 질서는 반찬의 수를 세는 방식이 아니라, 재료와 조리법, 색과 질감이 어떻게 겹치지 않고 하나의 상을 이루는지를 보여주는 체계입니다.

이 원리는 오늘날에도 유효합니다. 현대의 식탁에서도 한식이 균형 있게 느껴지는 이유는 단순히 ‘반찬이 많아서’가 아니라, 각기 다른 식재료가 서로 보완하며 배치되기 때문입니다. 따라서 한식의 식재료를 이해한다는 것은 각각의 재료를 외우는 일이 아니라, 그것들이 어떤 질서 속에서 함께 놓이는지를 보는 일입니다.

## 8. 지역이 바꾸는 맛의 결

같은 식재료라도 지역에 따라 쓰임과 맛의 결은 달라집니다. 서울과 경기는 비교적 담백하고 정교한 균형을 보여주고, 전라도는 풍부한 식재료와 젓갈 문화, 경상도는 해산물과 강한 양념의 특징을 드러냅니다. 강원도와 북방 계통 음식은 산나물과 잡곡, 비교적 절제된 맛을 중심으로 전개됩니다.

이러한 지역성은 한식의 식재료가 결코 획일적이지 않다는 사실을 보여줍니다. 한식은 하나의 정답이 아니라, 같은 구조를 지역과 계절, 생활환경에 맞게 다르게 구현하는 문화입니다. 그래서 식재료를 따라가면 곧 한국의 지리와 기후, 그리고 삶의 방식까지 함께 읽을 수 있습니다.

## 맺음말

한식의 식재료는 산과 바다, 들과 발효, 계절과 시간, 그리고 반상의 질서가 함께 만드는 문화적 구조입니다. 채소와 해산물, 육류와 곡물, 장과 젓갈은 각자 독립적인 재료이면서도 서로 겹치지 않게 연결되며 한식만의 균형과 미학을 만들어냅니다. 한식의 식재료를 이해하는 일은 결국 한국 음식의 구조를 이해하는 일이며, 더 나아가 한국인의 계절 감각과 생활의 지혜를 읽는 일입니다.`,
    en: `## Mountains, Seas, Fields, and Fermentation Time Complete the Balance

Korean ingredients are not just a list of raw materials. They represent a harmonious system formed by the geography and seasons of the Korean Peninsula, preservation and fermentation technologies, and the order of a traditional table setting. A Korean meal shows both the abundance of ingredients and the principles of arranging and harmonizing them.

To understand the world of banchan, one must first comprehend the structure of ingredients. Vegetables, seafood, meats, legumes, and fermented items are independent yet tightly connected. This system shapes the depth of Korean food culture in conjunction with cooking methods, storage, and seasonality.

## 1. Beyond Ingredients: Structure of Order and Balance

The hallmark of Korean ingredients lies not in their sheer variety, but in how that variety is managed. Even when multiple side dishes are served together, the ingredients and preparation methods are structured so they do not overlap excessively. Colors, textures, and tastes are adjusted to complement each other. Thus, Korean ingredients must be understood as a structural concept encompassing 'how they are laid out together.'

Furthermore, rather than consuming ingredients fresh, Korean cuisine creates layers of flavors by blanching, seasoning, pickling, drying, and fermenting. Here, 'time' is not just a passage but a physical ingredient forming the flavor profile. This is why fermented sauces (Jang), Kimchi, and pickles (Jangajji) are essential.

## 2. Vegetables and Wild Greens: The Widest Foundation of Korean Cuisine

Vegetables and wild greens form the broadest foundation of the Korean ingredient system. From cultivated crops like spinach, radish, cabbage, and cucumber to wild greens gathered from mountains such as bracken, bellflower root, and aster, Korean side dishes have long centered on plant-based ingredients. These ingredients respond sensitively to seasonal changes, directly revealing the sense of the season on the table.

Vegetables become entirely different side dishes depending on how they are cooked. Blanching and seasoning creates Sukchae; raw preparation yields Saengchae; and drying followed by rehydration preserves the element of time. The Namul culture is the core of Korean food as it encapsulates natural seasonality and a restrained cooking philosophy beyond simple vegetable consumption.

## 3. Seafood and Seaweed: Deep Umami from Three Seas

Surrounded by the sea on three sides, the Korean Peninsula has developed a rich seafood and seaweed culture. Fish, shellfish, shrimp, anchovies, and seaweeds like Gim, Miyeok, and Dashima are essential sources of minerals and umami in Korean food. Seafood is made into side dishes through grilling, braising, seasoning, and fermenting (Jeotgal), strongly reflecting regional characteristics.

Seaweed and fermented fish are particularly crucial to understanding the taste structure. Seaweed adds clean yet deep ocean flavors, while Jeotgal produces complex umami beyond simple saltiness through fermentation. This shows that seafood is a cultural pillar combined with fermentation, storage, and regionality rather than just a protein source.

## 4. Meats and Poultry: The Axis of Restrained Protein

Rather than dominating the table as in Western diets, meat in Korean cuisine serves as a protein axis complementing plant-centered meals. Beef was used in refined ways like Jangjorim (soy-braised beef) and Bulgogi, while pork developed into stir-fries or Suyuk (boiled pork slices), and chicken into stews or health foods. This relates historically to meat being a scarce resource.

Korean meats are typically used in harmony with fermented sauces, vegetables, and aromatic greens. Rather than acting as a dominant protagonist, meat complements the overall setup. In this sense, meat is accurately viewed not as a 'hero' but as a ingredient completing the overall composition of a Korean table.

## 5. Legumes and Grains: Clean Strength and the Aesthetics of Harmony

Soybeans and grains symbolize the clean strength of the Korean table. As a representative plant protein, soybeans appear in various forms like Kongjaban (soy-glazed beans), tofu, bean sprouts, and sauces, while grains expand into processed ingredients like rice cakes, starch jelly (Muk), and noodles. These materials form the basic layer of Korean food, providing continuous nourishment without being excessive.

Particularly, legumes and grains show the 'aesthetics of harmony.' In dishes like Tangpyeongchae, Japchae, and Mukmuchim, multiple ingredients blend together, contributing to the overall balance rather than competing. This illustrates that Korean food values harmony over a simple list of ingredients.

## 6. Fermentation and Preservation: Deep Flavors Crafted by Time

To fully understand Korean ingredients, fermentation and preservation must be treated as a distinct pillar. Soy sauce, hot pepper paste, soybean paste, Kimchi, Jeotgal, and Jangajji are all ingredients completed only through the intervention of time. These foods are not just storage methods to ensure longevity but core culinary techniques that expand flavor dimensions through waiting.

Fermented and preserved items add depth and serve as survival wisdom overcoming seasonal and regional limitations. During abundant seasons, Kimchi and pickles were made, sea abundance was stored as fermented fish and dried fish, and grains and beans were aged as sauces. Korean fermentation is where taste, nutrition, preservation, and culture meet.

## 7. The Bansang System: How Ingredients Become a Table

In Korean cuisine, ingredients do not exist in isolation; they find complete meaning within the structure of Bansang (table setting). The classification of settings into 3, 5, 7, 9, or 12 side dishes is not merely about counting plates, but a systematic approach to arranging colors, textures, and methods harmoniously.

This principle remains active today. Korean meals feel balanced not because there are many plates, but because distinct ingredients complement each other. Therefore, understanding Korean ingredients is about observing the order in which they are arranged.

## 8. Regional Nuances of Taste

Even with identical ingredients, usage and flavors shift by region. Seoul and Gyeonggi present subtle and delicate balances. Jeolla is famous for rich ingredients and fermented fish (Jeotgal), while Gyeongsang highlights seafood and strong seasonings. Gangwon and northern regions emphasize wild greens and grains with simple, rustic flavors.

This regional diversity shows that Korean cuisine is never uniform. It is a living culture that adapts a single structural foundation to local geography, climate, and lifestyles.

## Epilogue

Korean ingredients represent a cultural system forged by land, sea, fermentation, seasons, and table arrangements. Vegetables, seafood, meats, grains, and sauces connect seamlessly to manifest balance. Understanding these elements is key to understanding the structure of Korean food and the wisdom of its people.`
  },
  cta: [
    { label: { ko: "반찬 50선 보기", en: "View 50 Side Dishes", ja: "おかず50選を見る", zh: "查看50款小菜", es: "Ver 50 platos de acompañamiento", fr: "Voir les 50 Banchans", ar: "عرض ٥٠ طبقًا جانبيًا", ru: "Посмотреть 50 закусок" }, href: "/banchan" },
    { label: { ko: "반찬의 이해 읽기", en: "Read Guide to Banchan", ja: "おかず의理解を読む", zh: "阅读小菜指南", es: "Leer guía del banchan", fr: "Lire le Guide du Banchan", ar: "قراءة دليل البان تشان", ru: "Читать руководство по банчанам" }, href: "/banchan-guide" },
    { label: { ko: "식재료와 풍토 읽기", en: "Read Ingredients & Terroir", ja: "食材と風土を読む", zh: "阅读食材与风土", es: "Leer ingredientes y terruño", fr: "Lire Ingrédients & Terroir", ar: "قراءة المكونات والأرض", ru: "Читать об ингредиентах и терруаре" }, href: "/articles/ingredients-terroir" },
    { label: { ko: "인기 반찬 8선 보기", en: "View Top 8 Dishes", ja: "人気おかず8選を見る", zh: "查看人气伴餐8选", es: "Ver los 8 mejores platos", fr: "Voir les 8 Meilleurs Plats", ar: "عرض أفضل ٨ أطباق", ru: "Посмотреть 8 лучших блюд" }, href: "/hot" }
  ]
};
