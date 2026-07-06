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
  
  // 다국어 제목, 요약, 상세 본문
  title: Record<string, string>;
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
      ko: "동쪽 (East)", en: "East", ja: "東", zh: "东", es: "Este", ar: "الشرق", ru: "Восток"
    },
    element: {
      ko: "목 (木)", en: "Wood", ja: "木", zh: "木", es: "Madera", ar: "الخشب", ru: "Дерево"
    },
    color: {
      ko: "청색 (Green)", en: "Green (靑)", ja: "青/緑", zh: "青 (绿)", es: "Verde (Azul)", ar: "الأخضر (الأزرق)", ru: "Зеленый (Синий)"
    },
    title: {
      ko: "약식동원 (藥食同源)",
      en: "Yak-sik Dong-won: Food as Medicine",
      ja: "薬食同源: 食は薬なり",
      zh: "药食同源: 食即是药",
      es: "Yak-sik Dong-won: La Comida como Medicina",
      ar: "ياك-سيك دونغ-وون: الطعام كدواء",
      ru: "Як-сик Дон-вон: Еда как лекарство"
    },
    summary: {
      ko: "음식과 약은 그 근원이 같다는 철학으로, 건강에 좋은 식재료의 조화로운 조리를 강조합니다.",
      en: "The wellness philosophy that medicine and food share the same origin, emphasizing harmonious cooking of healthy ingredients.",
      ja: "食と薬は源が同じであるという哲学で、健康に良い食材の調和のとれた調理を強調します。",
      zh: "药与食同源的养生哲学，强调健康食材的和谐烹饪。",
      es: "La filosofía del bienestar de que la medicina y la comida comparten el mismo origen, enfatizando la cocción armoniosa.",
      ar: "فلسفة العافية التي تنص على أن الدواء والغذاء يتشاركان نفس الأصل، مع التركيز على الطهي المتناغم.",
      ru: "Философия о том, что лекарства и еда имеют общее происхождение, подчеркивающая гармоничное приготовление пищи."
    },
    content: {
      ko: "약식동원(藥食同源)은 '음식과 약은 그 근원이 같다'는 한국의 전통 사상입니다. 이는 평소에 먹는 음식을 통해 건강을 유지하고 질병을 예방할 수 있다는 웰빙의 철학을 담고 있습니다. 한국 요리에서는 단순히 배를 채우는 것을 넘어, 식재료가 가진 성질과 약효를 극대화할 수 있는 조화로운 조리를 강조합니다. 제철 식재료의 사용, 다양한 산나물과 채소류의 균형 잡힌 섭취는 우리 몸의 기운을 다스려 면역력을 증진시킵니다. 대표적인 반찬인 도라지무침이나 연근조림 등은 한의학에서도 약재로 쓰이는 식재료들로, 일상적인 식탁 자체가 곧 건강을 지키는 약방 역할을 함을 보여줍니다.",
      en: "Yaksik-dongwon is a traditional Korean philosophy stating that 'medicine and food share the same origin.' It embodies the wellness concept that daily dietary intake can maintain health and prevent disease. Beyond merely satisfying hunger, Korean cuisine emphasizes harmonious cooking to maximize the natural therapeutic properties of ingredients. The use of seasonal ingredients, combined with a balanced consumption of mountain herbs and vegetables, regulates bodily energy and boosts immunity. Representative banchan like seasoned bellflower root (doraji-muchim) or braised lotus root (yeongeun-jorim) showcase how daily meals double as natural medicine.",
      ja: "薬食同源（やくしょくどうげん）は、「食と薬は源が同じである」という韓国의 전통사상입니다. 이는 평소 먹는 음식을 통해 건강을 유지하고 질병을 예방할 수 있다는 웰빙의 철학을 반영합니다. 한국 요리에서는 단순히 배를 채우는 것을 넘어, 식재료가 가진 성질과 약효를 극대화할 수 있는 조화로운 조리를 강조합니다. 제철 식재료의 사용, 다양한 산나물과 채소류의 균형 잡힌 섭취는 우리 몸의 기운을 다스려 면역력을 증진시킵니다. 대표적인 반찬인 도라지무침이나 연근조림 등은 한의학에서도 약재로 쓰이는 식재료들로, 일상적인 식탁 자체가 곧 건강을 지키는 약방 역할을 함을 보여줍니다.",
      zh: "药食同源是韩国的传统思想，意为“药与食同宗同源”。它蕴含着通过日常饮食来维持健康和预防疾病的养生哲学。在韩食中，不仅仅是为了填饱肚子，更强调通过和谐的烹饪来最大化食材本身的性质和药效。使用时令食材、均衡摄入各种山野菜 and 蔬菜，可以调节人体的气血，从而增强免疫力。代表性的小菜如凉拌桔梗（doraji-muchim）和炖莲藕（yeongeun-jorim）等，都是韩医学中常用的药材成分，这表明日常的餐桌本身就起到了守护健康的药房作用。",
      es: "Yaksik-dongwon es una filosofía tradicional coreana que establece que 'la medicina y la comida comparten el mismo origen'. Encarna el concepto de bienestar de que la ingesta diaria de alimentos puede mantener la salud y prevenir enfermedades. Más allá de simplemente satisfacer el hambre, la cocina coreana enfatiza la cocción armoniosa para maximizar las propiedades terapéuticas naturales de los ingredientes. El uso de ingredientes de temporada, combinado con un consumo equilibrado de hierbas silvestres y verduras, regula la energía corporal y aumenta la inmunidad. Platos de acompañamiento representativos como la raíz de campanilla sazonada (doraji-muchim) muestran cómo la comida diaria actúa como medicina natural.",
      ar: "ياكسيك دونغوون هي فلسفة كورية تقليدية تنص على أن 'الدواء والغذاء يتشاركان نفس الأصل'. وهي تجسد مفهوم العافية بأن النظام الغذائي اليومي يمكنه الحفاظ على الصحة والوقاية من الأمراض. بالإضافة إلى مجرد إشباع الجوع، يؤكد المطبخ الكوري على الطهي المتناغم لتعظيم الخصائص العلاجية الطبيعية للمكونات. إن استخدام المكونات الموسمية، بالإضافة إلى الاستهلاك المتوازن للأعشاب الجبلية والخضروات، ينظم طاقة الجسم ويعزز المناعة. تُظهر أطباق البان تشان التمثيلية مثل جذور جرس الزهور المتبل (دوراجي موشيم) كيف تعمل الوجبات اليومية كطب طبيعي.",
      ru: "Якшик-донвон — это традиционная корейская философия, утверждающая, что 'лекарства и еда имеют один и тот же источник'. Она воплощает в себе концепцию здоровья, согласно которой ежедневный рацион может поддерживать здоровье и предотвращать болезни. Помимо простого удовлетворения голода, корейская кухня делает упор на гармоничное приготовление пищи для максимального раскрытия естественных целебных свойств ингредиентов. Использование сезонных продуктов в сочетании со сбалансированным потреблением горных трав и овощей регулирует энергию тела и повышает иммунитет. Такие закуски, как приправленный корень колокольчика (дораджи-мучим), показывают, как ежедневная еда заменяет природное лекарство."
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
      ko: "남쪽 (South)", en: "South", ja: "南", zh: "南", es: "Sur", ar: "الجنوب", ru: "Юг"
    },
    element: {
      ko: "화 (火)", en: "Fire", ja: "火", zh: "火", es: "Fuego", ar: "النار", ru: "Огонь"
    },
    color: {
      ko: "적색 (Red)", en: "Red", ja: "赤", zh: "红", es: "Rojo", ar: "الأحمر", ru: "Красный"
    },
    title: {
      ko: "육미 (六味): 육미와 손맛",
      en: "Yukmi (六味): Six Tastes & the Hand-Touch Flavor (Sonmat)",
      ja: "六味 (六味): 六味と手の味 (Sonmat)",
      zh: "六味 (六味): 六味与手味 (Sonmat)",
      es: "Yukmi (六味): Seis Sabores y el Sabor de las Manos (Sonmat)",
      ar: "يوكمي (六味): الأذواق الستة ونكهة اللمسة (Sonmat)",
      ru: "Юкми (六味): Шесть вкусов и вкус рук (Sonmat)"
    },
    summary: {
      ko: "단맛, 짠맛, 신맛, 쓴맛, 매운맛에 감칠맛을 더한 여섯 가지 맛의 깊은 조화를 다룹니다.",
      en: "Deals with the deep harmony of six tastes—sweet, salty, sour, bitter, spicy, and the deep savory umami flavor.",
      ja: "甘味、塩味、酸味、苦味、辛味に旨味を加えた六つの味の深い調和を扱います。",
      zh: "涵盖甜、咸、酸、苦、辣，加上鲜味在内的六种味道的深层融合。",
      es: "Trata sobre la profunda armonía de seis sabores: dulce, salado, ácido, amargo, picante y el profundo sabor umami.",
      ar: "يتعامل مع الانسجام العميق للنكهات الست: الحلو، المالح، الحامض، المر، الحار، بالإضافة إلى نكهة الأومامي اللذيذة.",
      ru: "Рассматривает гармонию шести вкусов: сладкого, соленого, кислого, горького, острого и пикантного умами."
    },
    content: {
      ko: "육미(六味)는 한국 음식의 맛을 구성하는 여섯 가지 맛의 조화를 의미합니다. 전통적인 다섯 가지 맛인 단맛(甘), 짠맛(鹹), 신맛(酸), 쓴맛(苦), 매운맛(辛)에 한식 특유의 깊은 감칠맛(淡 또는 鮮)을 더한 개념입니다. 한식은 한 가지 강렬한 맛에 치우치기보다, 이 여섯 가지 맛이 입안에서 복합적으로 어우러지는 완벽한 균형을 지향합니다. 고추장 and 고춧가루의 매콤함, 간장과 된장의 짭조름한 깊은 맛, 식초와 매실청의 새콤함이 상호보완적으로 작용하여 소화를 돕고 입맛을 돋웁니다. 이러한 맛의 시너지는 갈치조림이나 제육볶음 같은 대표적인 반찬에서 훌륭하게 발현됩니다.",
      en: "Yukmi represents the six harmonious tastes that constitute Korean cuisine. It expands on the five traditional tastes—sweet, salty, sour, bitter, and spicy—by adding the deep savory note (umami) characteristic of fermented K-food. Korean culinary art aims for a complete sensory balance rather than letting a single flavor dominate. The spiciness of gochujang, the deep salinity of soy sauce and doenjang, and the tanginess of vinegar act synthetically to aid digestion and stimulate appetite. This synergy is beautifully showcased in banchan like braised hairtail (galchi-jorim) or stir-fried pork (jeyuk-bokkeum).",
      ja: "六味（ろくみ）は、韓国料理の味を構成する六つの味の조화를 의미합니다. 전통적인 五가지 맛인 단맛, 짠맛, 신맛, 쓴맛, 매운맛에 한국 요리 특유의 깊은 맛(旨味)을 더한 개념입니다. 한국 요리는 한 가지 강렬한 맛에 치우치기보다, 이 여섯 가지 맛이 입안에서 복합적으로 어우러지는 완벽한 균형을 지향합니다. 고추장과 고춧가루의 매콤함, 간장과 된장의 짭조름한 깊은 맛, 식초와 매실청의 새콤함이 상호보완적으로 작용하여 소화를 돕고 입맛을 돋웁니다. 이러한 맛의 시너지는 갈치조림이나 제육볶음 같은 대표적인 반찬에서 훌륭하게 발현됩니다.",
      zh: "六味是指构成韩国料理风味的六种味道的和谐。它是在传统的五味——甜、咸、酸、苦、辣的基础上，加上韩食特有的深层“鲜味”（即旨味）的概念。韩食追求的不是某一种味道独占鳌头，而是这六种风味在口中复合交融的完美平衡。辣椒酱和辣椒粉的辛辣、酱油和大酱的咸香深沉、食醋和梅子青的酸甜，相互补充，促进消化并增进食欲。这种风味的协同效应在带鱼炖煮（galchi-jorim）或辣炒猪肉（jeyuk-bokkeum）等代表性小菜中得到了完美的体现。",
      es: "Yukmi represents los seis sabores armoniosos que constituyen la cocina coreana. Se expande sobre los cinco sabores tradicionales (dulce, salado, ácido, amargo y picante) agregando la nota sabrosa y profunda (umami) característica de la comida fermentada coreana. El arte culinario coreano apunta a un equilibrio sensorial completo en lugar de dejar que domine un solo sabor. El picante del gochujang, la salinidad de la salsa de soja y el doenjang, y la acidez del vinagre estimulan el apetito. Esta sinergia se muestra maravillosamente en platos de acompañamiento como la carne de cerdo salteada (jeyuk-bokkeum).",
      ar: "يوكمي يمثل النكهات الست المتناغمة التي تشكل المطبخ الكوري. وهو يتوسع في النكهات الخمس التقليدية - الحلو، المالح، الحامض، المر، والحار - عن طريق إضافة نكهة أومامي اللذيذة والعميقة المميزة للأطعمة الكورية المخمرة. يهدف الفن الطهي الكوري إلى تحقيق توازن حسي كامل بدلاً من السماح لنكهة واحدة بالسيطرة. تعمل حرارة الغوتشوجانغ والملوحة العميقة لصلصة الصويا والدوينجانغ وحموضة الخل بشكل تركيبي للمساعدة في الهضم وتحفيز الشهية. تظهر هذه التآزر بشكل جميل في أطباق البان تشان مثل لحم الخنزير المقلي (جيوك بوكيوم).",
      ru: "Юкми представляет собой шесть гармоничных вкусов, составляющих корейскую кухню. Она расширяет пять традиционных вкусов — сладкий, соленый, кислый, горький и острый — за счет добавления глубокой пикантной ноты (умами), характерной для ферментированных продуктов. Корейское кулинарное искусство стремится к полному сенсорному балансу, а не к доминированию одного вкуса. Острота кочхуджана, глубина соевого соуса и твэнджана, а также кислинка уксуса действуют синтетически, стимулируя аппетит. Эта синергия прекрасно проявляется в таких закусках, как жареная свинина (чеюк-поккым)."
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
      ko: "중앙 (Center)", en: "Center", ja: "中央", zh: "中央", es: "Centro", ar: "الوسط", ru: "Центр"
    },
    element: {
      ko: "토 (土)", en: "Earth", ja: "土", zh: "土", es: "Tierra", ar: "الأرض", ru: "Земля"
    },
    color: {
      ko: "황색 (Yellow)", en: "Yellow", ja: "黄", zh: "黄", es: "Amarillo", ar: "الأصفر", ru: "Желтый"
    },
    title: {
      ko: "오방색 (五方色): 시각적 조화 - 오행",
      en: "Obangsaek (五方色): Visual Harmony - The Five Elements",
      ja: "五方色 (五方色): 視覚的調和 - 五行",
      zh: "五方色 (五方色): 视觉和谐 - 五行",
      es: "Obangsaek (五方色): Armonía Visual - Los Cinco Elementos",
      ar: "أوبانغساك (五方色): الانسجام البصري - العناصر الخمسة",
      ru: "Обансэк (五方色): Визуальная гармония - Пять элементов"
    },
    summary: {
      ko: "청, 적, 황, 백, 흑 다섯 가지 색상으로 조화롭고 건강한 영양 균형을 추구합니다.",
      en: "Pursues harmonious visual beauty and complete nutritional balance through blue, red, yellow, white, and black colors.",
      ja: "青、赤、黄、白、黒の五つの色で調和のとれた健康的な栄養バランスを追求します。",
      zh: "通过青、赤、黄、白、黑五种颜色追求和谐健康的营养均衡。",
      es: "Busca una belleza visual armoniosa y un equilibrio nutricional completo a través de los colores azul, rojo, amarillo, blanco y negro.",
      ar: "يسعى إلى تحقيق جمال بصري متناغم وتوازن غذائي كامل من خلال الألوان الأزرق والأحمر والأصفر والأبيض والأسود.",
      ru: "Стремится к гармонии и сбалансированному питанию с помощью синего, красного, yellow, белого и черного цветов."
    },
    content: {
      ko: "오방색(五方色)은 음양오행설에 기반한 청(靑), 적(赤), 황(黃), 백(白), 흑(黑)의 다섯 가지 방위색을 말합니다. 한식은 이 다섯 가지 색상의 식재료를 식탁 위에 조화롭게 올림으로써 시각적인 아름다움뿐만 아니라 영양학적인 완전성을 동시에 추구합니다. 푸른 채소의 엽록소, 붉은 고추의 캡사이신, 계란노른자나 단호박의 카로티노이드, 하얀 쌀밥과 무의 알리신, 검은 버섯과 김의 안토시아닌 등은 현대 영양학에서 말하는 피토케미컬(Phytochemical)의 균형과 정확히 일치합니다. 구절판이나 비빔밥, 잡채와 같은 요리는 오방색 철학이 시각과 미각, 영양이 완벽한 일체를 이룬 정수입니다.",
      en: "Obangsaek refers to the five cardinal colors—blue, red, yellow, white, and black—derived from the Yin and Yang and the Five Elements theory. Korean food harmonizes ingredients of these five colors to achieve both visual beauty and nutritional completeness. The chlorophyll of green vegetables, capsaicin of red peppers, carotenoids of yellow squash, allicin of white radish, and anthocyanin of black mushrooms match the modern nutritional science of phytochemical balance. Dishes like bibimbap and japchae are prime examples where the Obangsaek philosophy unites sight, taste, and nutrition.",
      ja: "五方色（ごほうしょく）は、陰陽五行説に基づく青・赤・黄・白・黒の五つの方位の色を指します。韓国料理はこの五つの色の食材を食卓の上に調和させることで、視覚的な美しさだけでなく、栄養学的な完全性を同時に追求します。緑色野菜のクロロフィル, 赤唐辛子のカプサイシン, 卵黄やカボチャのカロテノイド, 白いご飯や大根のアリシン, 黒いキノコや海苔のアントシアニンなどは、現代栄養学におけるフィトケミカルのバランスと正確に一致します。ビビンバやチャプチェのような料理は、五方色の哲学が視覚、味覚、栄養を完璧に一体化させた真髄です。",
      zh: "五方色是指基于阴阳五行学说的青、赤、黄、白、黑五种方位的颜色。韩食将这五种颜色的食材和谐地呈现在餐桌上，既追求视觉上的美感，又同时追求营养学上的完整性。绿色蔬菜的叶绿素、红辣椒的辣椒素、蛋黄和南瓜的类胡萝卜素、白米饭和白萝卜的大蒜素、黑木耳和海苔的花青素等，与现代 nutritional 学所说的植物化学素（Phytochemical）平衡完全一致。九折坂、石锅拌饭和杂菜等料理，是五方色哲学将视觉、味觉和营养融为完美一体的精髓。",
      es: "Obangsaek se refiere a los cinco colores cardinales (azul, rojo, amarillo, blanco y negro) derivados de la teoría del Yin y el Yang y los Cinco Elementos. La comida coreana armoniza ingredientes de estos cinco colores para lograr tanto la belleza visual como la integridad nutricional. La clorofila de las verduras verdes, la capsaicina de los pimientos rojos, los carotenoides de la yema de huevo, la alicina del rábano blanco y la antocianina de los hongos negros coinciden con la ciencia moderna del equilibrio de fitoquímicos. Platos como el bibimbap son excelentes ejemplos de esta filosofía.",
      ar: "أوبانغ سيك يشير إلى الألوان الخمسة الرئيسية - الأزرق، الأحمر، الأصفر، الأبيض، والأسود - المستمدة من نظرية الين واليانغ والعناصر الخمسة. يوازن الطعام الكوري بين مكونات هذه الألوان الخمسة لتحقيق الجمال البصري والاكتمال الغذائي. يتطابق الكلوروفيل في الخضروات الخضراء، الكابسيسين في الفلفل الأحمر، الكاروتينويدات في صفار البيض، الأليسين في الفجل الأبيض، والأنثوسيانين في الفطر الأسود مع علم التغذية الحديث لتوازن المواد الكيميائية النباتية. أطباق مثل البيبيمباب والجابشي هي أمثلة رئيسية على فلسفة أوبانغ سيك.",
      ru: "Обансэк относится к пяти основным цветам — синему, красному, желтому, белому и черному, основанным на теории Инь и Ян и Пяти элементов. Корейская еда гармонизирует продукты этих цветов для достижения визуальной красоты и питательной ценности. Хлорофилл зеленых овощей, капсаицин красного перца, каротиноиды желтой тыквы, аллицин белой редьки и антоцианы черных грибов соответствуют научному балансу фитонутриентов. Такие блюда, как пибимпап и чапчхэ, являются прекрасными примерами этой философии."
    }
  },
  {
    slug: "nanum",
    colorClass: "bg-slate-200",
    gradientClass: "from-slate-300 to-slate-100",
    borderClass: "border-slate-350/30",
    textClass: "text-slate-300",
    iconName: "nanum",
    colorHex: "#F5F5F5",
    direction: {
      ko: "서쪽 (West)", en: "West", ja: "西", zh: "西", es: "Oeste", ar: "الغرب", ru: "Запад"
    },
    element: {
      ko: "금 (金)", en: "Metal", ja: "金", zh: "金", es: "Metal", ar: "المعدن", ru: "Металл"
    },
    color: {
      ko: "백색 (White)", en: "White", ja: "白", zh: "白", es: "Blanco", ar: "الأبيض", ru: "Белый"
    },
    title: {
      ko: "나눔(Sharing)과 공동체",
      en: "Nanum (Sharing) & Community",
      ja: "ナヌム (Sharing) と共同体",
      zh: "分享 (Sharing) 与共同体",
      es: "Nanum (Sharing) y Comunidad",
      ar: "نانوم (Sharing) والمجتمع",
      ru: "Нанум (Sharing) и Общность"
    },
    summary: {
      ko: "정(情)과 반찬을 이웃과 넉넉히 나누어 먹는 상생과 환대의 식문화를 다룹니다.",
      en: "Explores the food culture of sharing side dishes and affection (Jeong) with neighbors in hospitality.",
      ja: "情（チョン）とおかず를 이웃과 넉넉히 나누어 먹는 상생과 환대의 식문화를 다룹니다.",
      zh: "探讨与邻里大方分享温情和温热小菜的共生与款待的食文化。",
      es: "Explora la cultura gastronómica de compartir platos de acompañamiento y afecto (Jeong) con los vecinos.",
      ar: "يستكشف ثقافة الطعام القائمة على مشاركة الأطباق الجانبية والمودة (جيونغ) مع الجيران في كرم ضيافة.",
      ru: "Рассказывает о культуре совместного приема пищи и щедрого обмена заботой (Чжон) с соседями."
    },
    content: {
      ko: "나눔(Nanum)은 한국의 밥상 공동체가 지닌 환대와 배려의 문화입니다. 한식에서 반찬(Banchan)은 독상을 넘어 모두가 함께 공유하여 먹는 공유식(Shared dining)의 성격을 지닙니다. 이웃과 밥을 나누고, 김장을 하여 온 마을이 김치를 나누어 가지며, 정(情)을 표현하는 풍습은 나눔의 가치관에서 기인합니다. 식탁 중앙에 다양한 반찬을 두고 다 함께 숟가락과 젓가락을 나누며 식사하는 구조는 공동체의 결속을 강화하고 서로를 존중하는 마음을 기르게 합니다. 이러한 환대와 배려의 스피릿은 한국의 밥상을 찾는 모든 이에게 따뜻한 정을 느끼게 해주는 독특한 식문화적 자산입니다.",
      en: "Nanum represents the spirit of sharing and hospitality inherent in the Korean dining community. In Korean culinary culture, banchan is inherently a shared dining experience rather than a single-serving meal. The customs of sharing rice with neighbors, gathering for Kimjang to distribute kimchi, and expressing affection (Jeong) originate from the value of Nanum. Placing diverse banchan in the center of the table strengthens community bonds and fosters mutual respect. This hospitality is a unique cultural asset that makes anyone visiting a Korean table feel warmly welcomed.",
      ja: "分かち合い（Nanum）は、韓国의 식사 공동체가 지닌 환대와 배려의 문화입니다. 한국 요리에서 반찬은 1인용 밥상을 넘어 모두가 함께 공유하여 먹는 형태를 띱니다. 이웃과 밥을 나누고, 김장을 하여 온 마을이 김치를 나누어 가지며, 정(情)을 표현하는 풍습은 이 가치관에서 우러나옵니다. 식탁 중앙에 다양한 반찬을 두고 다 함께 수저를 나누며 식사하는 구조는 공동체의 결속을 강화합니다.",
      zh: "“分享”（Nanum）是韩国餐桌共同体所蕴含的款待与关怀文化。在韩食中，小菜（Banchan）超越了独占的形式，具有大家共同分享食用的“共享餐饮”（Shared dining）特征。与邻里分享饭菜、在腌冬菜（Kimjang）季节整个村子分享泡菜、以及表达“情”（Jeong）的习俗，都源于分享的价值观。将各种小菜放在餐桌中央，大家一起分享汤匙和筷子进餐的结构，增强了共同体的凝聚力，培养了相互尊重的态度。这种款待与关怀的精神是独特的食文化资产，让每一个来到韩国餐桌前的人都能感受到温暖的情谊。",
      es: "Nanum representa el espíritu de compartir y la hospitalidad inherentes a la comunidad gastronómica coreana. En la cultura culinaria coreana, el banchan es inherentemente una experiencia gastronómica compartida en lugar de una comida individual. Las costumbres de compartir arroz con los vecinos, reunirse para hacer Kimjang para distribuir kimchi y expresar afecto (Jeong) se originan en el valor de Nanum. Colocar diversos banchan en el centro de la mesa fortalece los lazos comunitarios y fomenta el respeto mutuo. Esta hospitalidad es un activo cultural único que hace que cualquiera se sienta bienvenido.",
      ar: "نانوم يمثل روح المشاركة والضيافة المتأصلة في مجتمع الطعام الكوري. في ثقافة الطهي الكورية، يعتبر البان تشان بطبيعته تجربة طعام مشتركة بدلاً من وجبة تقدم لشخص واحد. تنشأ عادات مشاركة الأرز مع الجيران، والتجمع لإعداد الكيمجانغ لتوزيع الكيمتشي، والتعبير عن المودة (جيونغ) من قيمة نانوم. إن وضع أطباق البان تشان المتنوعة في وسط الطاولة يقوي الروابط المجتمعية ويعزز الاحترام المتبادل. هذه الضيافة هي أصل ثقافي فريد يجعل أي شخص يزور المائدة الكورية يشعر بالترحيب الحار.",
      ru: "Нанум представляет собой дух щедрости и гостеприимства, присущий корейскому застолью. В корейской кулинарной культуре закуски (банчан) — это совместная трапеза, а не порционное блюдо. Обычай делиться рисом с соседями, собираться для приготовления кимчхи (Кимджан) и выражать заботу (Чжон) берут свое начало в ценностях Нанума. Размещение разнообразных банчанов в центре стола укрепляет общинные связи и способствует взаимному уважению. Это гостеприимство является уникальным достоянием, позволяющим каждому почувствовать себя желанным гостем."
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
      ko: "북쪽 (North)", en: "North", ja: "北", zh: "北", es: "Norte", ar: "الشمال", ru: "Север"
    },
    element: {
      ko: "수 (水)", en: "Water", ja: "水", zh: "水", es: "Agua", ar: "الماء", ru: "Вода"
    },
    color: {
      ko: "흑색 (Black)", en: "Black", ja: "黒", zh: "黑", es: "Negro", ar: "الأسود", ru: "Черный"
    },
    title: {
      ko: "식재료와 풍토: 사계절과 발효",
      en: "Ingredients & Terroir: Fermentation",
      ja: "食材と風土: 发酵의 조화",
      zh: "食材与风土: 发酵",
      es: "Ingredientes y Terroir: Fermentación",
      ar: "المكونات والتربة المحلية: التخمير",
      ru: "Ингредиенты и Терруар: Ферментация"
    },
    summary: {
      ko: "계절과 삼면의 바다가 빚어낸 신선함과 발효 기법의 깊은 과학을 소개합니다.",
      en: "Introduces the freshness crafted by seasons and oceans, and the science of deep fermentation.",
      ja: "四季と三面の海が生み出した新鮮さと発酵技術の深い科学を紹介します。",
      zh: "介绍四季与三面环海孕育出的鲜活美味以及发酵技术的深刻科学。",
      es: "Introduce la frescura creada por las estaciones y los océanos, y la ciencia de la fermentación profunda.",
      ar: "يقدم النضارة التي خلقتها الفصول والمحيطات، وعلم التخمير العميق.",
      ru: "Представляет свежесть сезонных продуктов и глубокую науку ферментации."
    },
    content: {
      ko: "식재료와 풍토(Ingredients & Terroir)는 한국의 지리적 환경과 기후가 빚어낸 독창적인 식재료의 힘입니다. 삼면이 바다로 둘러싸인 반도 지형과 산지가 많은 지리적 특성, 사계절이 뚜렷한 기후는 철마다 다양한 제철 수산물과 야생 나물, 채소를 선사합니다. 춥고 긴 겨울을 대비하기 위해 발달한 김치, 간장, 된장, 고추장 등의 발효(Fermentation) 기술은 한식의 깊은 맛을 내는 주춧돌입니다. 이러한 풍토적 특성은 각 지역의 기후와 결합하여 고유한 로컬 식재료와 조리 기법을 탄생시켰으며, 시간과 자연이 서서히 빚어낸 천연 양념과 식재료의 신선함이 합쳐져 한식만의 깊고 건강한 오리지널리티를 완성합니다.",
      en: "Ingredients and Terroir emphasize the unique strength of ingredients shaped by Korea's geography and climate. Surrounded by sea on three sides, characterized by mountainous terrains and four distinct seasons, Korea harvests diverse seasonal seafood, wild mountain herbs, and crops. To survive the cold winters, Koreans perfected fermentation (kimchi, soy sauce, doenjang), forming the cornerstone of K-food flavors. This terroir combines local climates with ingredients, allowing nature and time to age natural seasonings and finalize K-food's deep originality.",
      ja: "食材と風土（Ingredients & Terroir）는 한국의 지리적 환경과 기후가 빚어낸 독창적인 식재료의 힘입니다. 삼면이 바다로 둘러싸인 반도 지형과 산지가 많은 지리적 특성, 사계절이 뚜렷한 기후는 철마다 다양한 제철 수산물과 야생 나물, 채소를 선사합니다. 춥고 긴 겨울을 대비하기 위해 발달한 김치, 된장, 고추장 등의 발효(Fermentation) 기술은 한식의 깊은 맛을 내는 주춧돌입니다.",
      zh: "“食材与风土”（Ingredients & Terroir）是韩国地理环境和气候所造就的独创食材力量。三面环海的的半岛地形、多山地的地理特征以及四季分明的气候，在每个季节都赐予人们丰富多样的时令海鲜、野生山野菜和蔬菜。为了应对寒冷漫长的冬季而发达的泡菜、酱油、大酱、辣椒酱等“发酵”技术，是韩食呈现深沉风味的基石。这种风土特征与各地区的气候相结合，诞生了固有的本地食材和烹饪方法。随着时间和自然慢慢酝酿而成的天然调料与食材的新鲜度相结合，完成了韩食独特而健康的原创性。",
      es: "Los ingredientes y el terroir enfatizan la fuerza única de los ingredientes formados por la geografía y el clima de Corea. Rodeada por mar en tres lados, caracterizada por terrenos montañosos y cuatro estaciones distintas, Corea cosecha diversos pescados y mariscos de temporada, hierbas silvestres y cultivos. Para sobrevivir a los inviernos fríos, los coreanos perfected la fermentación (kimchi, doenjang), formando la piedra angular de los sabores coreanos. Este terroir combina climas locales con ingredientes, finalizando la profunda originalidad coreana.",
      ar: "المكونات والتربة المحلية تؤكد على القوة الفريدة للمكونات التي شكلتها جغرافيا ومناخ كوريا. محاطة بالبحر من ثلاث جهات، وتتميز بتضاريس جبلية وأربعة فصول متميزة، تحصد كوريا المأكولات البحرية الموسمية المتنوعة والأعشاب الجبلية البرية والمحاصيل. للبقاء على قيد الحياة في فصول الشتاء الباردة، أتقن الكوريون التخمير (الكيمتشي، الدوينجانغ)، مما شكل حجر الزاوية لنكهات الطعام الكوري. يمزج هذا المناخ المحلي بين المناخات المحلية والمكونات, مما يسمح للطبيعة والوقت بتعتيق التوابل الطبيعية وإكمال أصالة الطعام الكوري العميقة.",
      ru: "Ингредиенты и Терруар подчеркивают силу ингредиентов, сформированных географией и климатом Кореи. Окруженная морем с трех сторон, отличающаяся гористой местностью и четырьмя сезонами, Корея собирает разнообразные сезонные морепродукты, дикие горные травы и сельскохозяйственные культуры. Чтобы пережить холодную зиму, корейцы усовершенствовали ферментацию (кимчхи, твэнджан), сформировав основу вкуса корейской кухни. Этот терруар сочетает местный климат с ингредиентами, завершая глубокую оригинальность корейской еды."
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
