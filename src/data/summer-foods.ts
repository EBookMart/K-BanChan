export interface SummerFoodItem {
  id: string;
  name: { [key: string]: string };
  englishName: string;
  category: { [key: string]: string };
  categoryType: 'hot' | 'cold' | 'dessert';
  summary: { [key: string]: string };
  culture: { [key: string]: string };
  caution: { [key: string]: string };
}

export const summerFoodsList: SummerFoodItem[] = [
  {
    id: "summer-01",
    name: {
      ko: "삼계탕", en: "Samgyetang", fr: "Samgyetang", ar: "سامغيتانغ",
      ru: "Самгетхан", es: "Samgyetang", ja: "サムゲタン", zh: "参鸡汤"
    },
    englishName: "Ginseng Chicken Soup",
    category: {
      ko: "이열치열 (뜨거운 보양)", en: "Fighting Fire with Fire (Hot Nourishment)",
      fr: "Combattre le chaud par le chaud (Soupe Chaude)", ar: "مكافحة الحرارة بالحرارة (غذاء ساخن)",
      ru: "Борьба с жаром с помощью жара (Горячий суп)", es: "Combatir el calor con calor (Sopa caliente)",
      ja: "以熱治熱（温かい補養）", zh: "以热治热（温热滋补）"
    },
    categoryType: "hot",
    summary: {
      ko: "영계에 인삼, 대추, 마늘, 찹쌀을 넣고 고아낸 한국의 여름 대표 보양식",
      en: "A whole young chicken stuffed with ginseng, jujube, garlic, and glutinous rice, simmered to perfection.",
      fr: "Un jeune poulet entier farci de ginseng, jujube, ail et riz gluant, mijoté pour un réconfort estival.",
      ar: "دجاجة كاملة صغيرة محشوة بالجينسنغ، العناب، الثوم، والأرز الدبق، مطهية ببطء.",
      ru: "Молодой цыпленок, фаршированный женьшенем, унаби, чесноком и клейким рисом.",
      es: "Pollo joven entero relleno de ginseng, azufaifa, ajo y arroz glutinoso, cocido a fuego lento.",
      ja: "若鶏に高麗人参、ナツメ、ニンニク、もち米を詰めて煮込んだ韓国の代表的な夏の補養食",
      zh: "在童子鸡腹内 court 入人参、大枣、大蒜和糯米后炖烂的韩国夏日代表滋补美食"
    },
    culture: {
      ko: "계삼탕에서 시작해 인삼의 가치가 대중화되면서 삼계탕으로 이름이 바뀌었으며, 여름철 삼복더위에 땀을 많이 흘려 허해진 속을 온기로 채우는 음식입니다.",
      en: "Originating as Gyesamtang, it evolved into Samgyetang as ginseng became widely cultivated, restoring warmth to the body during the hottest days of summer.",
      fr: "Appelé à l'origine Gyesamtang, il est devenu le Samgyetang avec la démocratisation du ginseng, conçu pour réchauffer l'organisme pendant la canicule.",
      ar: "بدأ كـ 'جيسمتانغ' وتطور إلى 'سامغيتانغ' مع انتشار زراعة الجينسنغ، وهو يعيد الدفء إلى الجسم خلال أيام الصيف الحارة.",
      ru: "Изначально назывался Кэсамтхан. Название сменилось на Самгетхан по мере популяризации женьшеня. Восполняет внутреннее тепло в самые жаркие дни лета.",
      es: "Originario como Gyesamtang, evolucionó a Samgyetang a medida que el ginseng se cultivó ampliamente, restaurando la calidez del cuerpo en los días más calurosos del verano.",
      ja: "「鶏参湯（ケサムタン）」から始まり、高麗人参の価値が一般化するにつれて「参鶏湯（サムゲタン）」に改名されました。三伏の猛暑に汗をかいて冷えた体内を温めます。",
      zh: "起源于“鸡参汤”，随着人参的普及而更名为“参鸡汤”。在夏日三伏天里，用于温暖因大量出汗 & 虚弱的脾胃。"
    },
    caution: {
      ko: "인삼의 사포닌 성분은 일부 항응고제 약물과 상호작용할 수 있으며, 고열량 음식이므로 칼로리 조절이 필요하신 분은 유의해야 합니다.",
      en: "Ginseng saponins may interact with anticoagulant drugs. Also, as a high-calorie dish, portion control is recommended for those managing energy intake.",
      fr: "Les saponines du ginseng peuvent interférer avec les anticoagulants. Étant un plat riche, les personnes surveillant leur poids doivent le consommer avec modération.",
      ar: "قد تتفاعل ساپونينات الجينسنغ مع الأدوية المضادة للتخثر. وبما أنه طبق عالي السعرات الحرارية، يوصى بالتحكم في الكمية لمن يراقبون وزنهم.",
      ru: "Сапонины женьшеня могут взаимодействовать с антикоагулянтами. Из-за высокой калорийности супа людям на диете следует контролировать размер порций.",
      es: "Las saponinas del ginseng pueden interactuar con medicamentos anticoagulantes. Al ser un plato hipercalórico, se recomienda moderar la porción a quienes controlan su peso.",
      ja: "高麗人参のサポニン成分は一部の抗凝固薬と相互作用する可能性があり、高カロリー料理であるため、カロリー調節が必要な方は注意が必要です。",
      zh: "人参中的皂苷成分可能会与某些抗凝血药物产生相互作用；且本品热量较高，需控制热量摄入的人群应注意适量食用。"
    }
  },
  {
    id: "summer-02",
    name: {
      ko: "육개장", en: "Yukgaejang", fr: "Yukgaejang", ar: "يوكيغيجانغ",
      ru: "Юккеджан", es: "Yukgaejang", ja: "ユッケジャン", zh: "辣牛肉汤"
    },
    englishName: "Spicy Beef Soup",
    category: {
      ko: "이열치열 (매콤한 활력)", en: "Fighting Fire with Fire (Spicy Vitality)",
      fr: "Combattre le chaud par le chaud (Soupe Épicée)", ar: "مكافحة الحرارة بالحرارة (نشاط حار)",
      ru: "Борьба с жаром с помощью жара (Острый суп)", es: "Combatir el calor con calor (Caldo picante)",
      ja: "以熱治熱（ピリ辛の活力）", zh: "以热治热（辛辣活力）"
    },
    categoryType: "hot",
    summary: {
      ko: "소고기를 푹 고아 결대로 찢고 고사리, 대파, 고춧가루 양념을 넣어 끓인 얼큰한 보양 국물 요리",
      en: "A spicy beef soup simmered with shredded beef, bracken fern, green onions, and red pepper flakes.",
      fr: "Une soupe de bœuf épicée mijotée avec du bœuf effiloché, des fougères, des oignons verts et du piment.",
      ar: "حساء لحم بقري حار مطهو مع لحم بقري مبشور، سرخس، بصل أخضر، ورقائق الفلفل الأحمر.",
      ru: "Острый суп из говядины с добавлением папоротника, зеленого лука и приправой из красного перца.",
      es: "Un caldo picante de ternera cocido con carne deshebrada, helecho, cebolletas y chile en polvo.",
      ja: "牛肉をじっくり煮込んで裂き、ワラビ、大ネギ、粉唐辛子の調味料を入れて煮込んだ辛口の補養スープ料理",
      zh: "将牛肉炖烂后撕成细絲，加入蕨菜、大葱和辣椒面等调料熬制的辛辣滋补汤"
    },
    culture: {
      ko: "개장국(개고기)을 먹지 못하는 이들을 위해 소고기(肉)를 사용하여 궁중과 양반가에서 즐기던 보양식으로, 대파의 해독 작용과 소고기의 영양이 어우러진 여름 별미입니다.",
      en: "Developed as a beef alternative to dog meat soup (Gaejangguk) for royal and noble families, combining the detoxifying benefits of green onions with nutritious beef.",
      fr: "Conçu à l'origine comme alternative au chien (Gaejangguk) pour la cour, il allie les bienfaits détoxifiants du poireau aux nutriments du bœuf.",
      ar: "طُوّر كبديل لحساء لحم الكلاب (غايجانغغوك) للعائلات الملكية والنبيلة، حيث يجمع بين فوائد البصل الأخضر المضادة للسموم واللحم البقري المغذي.",
      ru: "Возник как альтернатива супу из собачьего мяса (Гэджангук) для знати. Сочетает в себе полезные свойства зеленого лука и питательность говядины.",
      es: "Desarrollado como alternativa al caldo de perro (Gaejangguk) para la nobleza, combina los beneficios desintoxicantes de las cebolletas con la ternera nutritiva.",
      ja: "犬肉の「犬醤湯（ケジャングク）」を食べられない人々のために牛肉（肉）を使って宮廷や両班家で好まれた補養食で、大ネギの解毒作用と牛肉の栄養が調和した夏の別味です。",
      zh: "专为不食用狗肉汤的人群而使用牛肉（肉）制作，曾是宫廷与两班贵族享用的滋补食品。大葱的解毒作用与牛肉的营养相结合，是夏日的一大美味。"
    },
    caution: {
      ko: "나트륨 함량이 높고 매운 양념이 위장을 자극할 수 있으므로, 고혈압 환자나 위염이 있으신 분은 국물 섭취를 적절히 조절해야 합니다.",
      en: "High in sodium and spicy seasoning that may irritate the stomach. Hypertension patients or those with gastritis should consume the broth in moderation.",
      fr: "Riche en sodium et piquant, il peut irriter l'estomac. Les personnes souffrant d'hypertension ou de gastrite doivent limiter la consommation de bouillon.",
      ar: "يحتوي على نسبة عالية من الصوديوم والتوابل الحارة التي قد تهيج المعدة. يجب على مرضى ضغط الدم المرتفع أو التهاب المعدة تقليل شرب الحساء.",
      ru: "Высокое содержание натрия и острота могут раздражать желудок. Гипертоникам и людям с гастритом рекомендуется ограничивать употребление бульона.",
      es: "Alto en sodio y condimentos picantes que pueden irritar el estómago. Pacientes con hipertensión o gastritis deben moderar el consumo del caldo.",
      ja: "塩分が多く、辛い調味料が胃腸を刺激することがあるため、高血圧患者や胃炎のある方はスープの摂取量を適切に調節する必要があります。",
      zh: "钠含量较高且辛辣调料可能刺激胃肠道，高血压患者或胃炎患者应适度控制汤汁的摄入量。"
    }
  },
  {
    id: "summer-03",
    name: {
      ko: "초계탕", en: "Chogyetang", fr: "Chogyetang", ar: "تشوغيتانغ",
      ru: "Чогетхан", es: "Chogyetang", ja: "チョゲタン", zh: "醋鸡汤"
    },
    englishName: "Chilled Vinegar Chicken Soup",
    category: {
      ko: "이냉치냉 (시원한 보양)", en: "Fighting Cold with Cold (Chilled Nourishment)",
      fr: "Combattre le froid par le froid (Soupe Froide)", ar: "مكافحة البرد بالبرد (غذاء بارد)",
      ru: "Борьба с холодом с помощью холода (Холодный суп)", es: "Combatir el frío con frío (Sopa fría de pollo)",
      ja: "以冷治冷（冷たい補養）", zh: "以冷治冷（清凉滋补）"
    },
    categoryType: "cold",
    summary: {
      ko: "식힌 닭 육수에 식초와 겨자로 간을 한 뒤, 찢어놓은 닭고기와 채소를 곁들여 먹는 차가운 여름 보양식",
      en: "A chilled chicken soup flavored with vinegar and mustard, topped with shredded chicken and crisp vegetables.",
      fr: "Une soupe de poulet froide parfumée au vinaigre et à la moutarde, garnie de poulet effiloché et de légumes croquants.",
      ar: "حساء دجاج بارد منكه بالخل والخردل، مغطى بقطع الدجاج والخضار الطازجة المقرمشة.",
      ru: "Охлажденный куриный бульон с добавлением уксуса и горчицы, подаваемый с кусочками курицы и овощами.",
      es: "Sopa fría de pollo sazonada con vinagre y mostaza, servida con pollo deshebrado y verduras crujientes.",
      ja: "冷ました鶏出汁に酢とからしで味付けし、裂いた鶏肉と野菜を添えて食べる冷たい夏の補養食",
      zh: "在放凉的鸡汤中加入醋和芥末调味，配以鸡肉丝和蔬菜食用的夏日冰镇滋补膳食"
    },
    culture: {
      ko: "조선시대 궁중 연회에서 가을과 겨울 절식으로 올리던 고급 요리였으나, 현대에 이르러 여름철 더위를 식혀주는 고급 냉보양식으로 재해석되었습니다.",
      en: "Originally an aristocratic winter delicacy in the Joseon dynasty, it has been modernized into a premium summer refreshment to cool down the body.",
      fr: "À l'origine un délice hivernal de la cour de Joseon, il est aujourd'hui réinterprété comme un plat de fête estival et rafraîchissant.",
      ar: "كان حساءً شتوياً فاخراً في البلاط الملكي لعهد مملكة جوسون، ثم أعيد تفسيره في العصر الحديث كغذاء بارد ممتاز يلطف حرارة الصيف.",
      ru: "В эпоху Чосон это было роскошное зимнее блюдо для королевских банкетов, но в наше время оно превратилось в премиальный холодный летний суп.",
      es: "Originalmente un manjar de invierno en el palacio real de la dinastía Joseon, se ha reinterpretado como una sopa fría premium para refrescarse en verano.",
      ja: "朝鮮時代の宮廷宴会で秋冬の料理として供された高級料理でしたが、現代では夏の暑さを和らげる高級な冷補養食として再解釈されました。",
      zh: "在朝鲜王朝时期曾是用于宫廷宴会的秋冬高级膳食，现代被重新诠释为在夏日防暑降温的高档冷食滋补品。"
    },
    caution: {
      ko: "식초의 강한 산도가 공복 위장을 자극할 수 있으며, 찬 성질의 음식이므로 평소 배탈이 잦으신 분은 소량씩 천천히 드셔야 합니다.",
      en: "The high acidity of vinegar may stimulate an empty stomach. Since it is served cold, those with sensitive digestion should consume it slowly.",
      fr: "L'acidité du vinaigre peut irriter l'estomac vide. Étant un plat très froid, les personnes sensibles doivent le consommer lentement.",
      ar: "قد تهيج حموضة الخل القوية المعدة الفارغة. وبما أنه طعام بارد، يجب على من يعانون من اضطراب المعدة تناوله ببطء وبكميات صغيرة.",
      ru: "Высокая кислотность уксуса может раздражать пустой желудок. Поскольку это холодное блюдо, людям с чувствительным пищеварением следует есть его медленно.",
      es: "La fuerte acidez del vinagre puede irritar el estómago vacío. Al ser un plato frío, las personas con digestión sensible deben comerlo despacio.",
      ja: "酢の強い酸味が空腹の胃腸を刺激することがあり、冷たい性質の料理であるため、普段から胃腸の弱い方は少しずつゆっくり食べる必要があります。",
      zh: "醋的强酸性可能会刺激空腹状态下的胃部；且本品性质寒凉，平时易拉肚子的人群应小口慢食。"
    }
  },
  {
    id: "summer-04",
    name: {
      ko: "임자수탕", en: "Imjasutang", fr: "Imjasutang", ar: "إيمجاسوتانغ",
      ru: "Имджасутхан", es: "Imjasutang", ja: "イムジャスタン", zh: "芝麻 鸡 汤"
    },
    englishName: "Cold Sesame Chicken Soup",
    category: {
      ko: "이냉치냉 (고소한 전통)", en: "Fighting Cold with Cold (Savory Tradition)",
      fr: "Combattre le froid par le froid (Soupe au Sésame)", ar: "مكافحة البرد بالبرد (نكهة السمسم التقليدية)",
      ru: "Борьба с холодом с помощью холода (Кунжутный суп)", es: "Combatir el frío con frío (Sopa fría de sésamo)",
      ja: "以冷治冷（香ばしい伝統）", zh: "以冷治冷（醇香传统）"
    },
    categoryType: "cold",
    summary: {
      ko: "삶은 닭고기를 찢어 올리고, 고소하게 간 깻국(참깨 육수)을 시원하게 부어 먹는 조선 왕실의 여름 궁중 보양식",
      en: "A royal summer soup featuring shredded chicken in a chilled, creamy, and savory toasted sesame seed broth.",
      fr: "Une soupe royale d'été composée de poulet effiloché dans un bouillon de sésame grillé frais et crémeux.",
      ar: "حساء صيفي ملكي يحتوي على دجاج مبشور في حساء سمسم محمص بارد ودسم ولذيذ.",
      ru: "Королевский суп с курицей, заливаемый холодным, густым и ароматным бульоном из протертого белого кунжута.",
      es: "Sopa real de verano con pollo deshebrado en un caldo frío, cremoso y sabroso de semillas de sésamo tostadas.",
      ja: "茹でた鶏肉を裂いてのせ、香ばしく挽いた胡麻スープ（荏子水）を冷たく注いで食べる朝鮮王室の夏の宮廷補養食",
      zh: "将煮熟的鸡肉撕成丝，浇上醇香的冰镇芝麻汤（荏子水汤）食用的朝鲜王室夏日宫廷滋补食品"
    },
    culture: {
      ko: "조선시대 궁중 요리의 꽃으로 불리며, 백마스킹되지 않은 잣과 참깨(임자)의 영양에 닭고기의 단백질이 만나 양반가와 왕실의 품격을 보여주던 시식(時食)입니다.",
      en: "Praised as a masterpiece of Joseon court cuisine, it showcases the elegance of royal dining by combining rich sesame (Imja) and pine nut nutrition with chicken protein.",
      fr: "Considéré comme un chef-d'œuvre de la cour de Joseon, ce plat montre l'élégance royale en mariant le sésame (Imja), les pignons de pin et le poulet.",
      ar: "يُعتبر تحفة فنية في مطبخ بلاط جوسون، وهو يظهر أناقة المائدة الملكية من خلال الجمع بين السمسم (إيمجا) والصنوبر المغذي مع بروتين الدجاج.",
      ru: "Шедевр королевской кухни Чосон. Сочетает в себе высокую питательность белого кунжута (имджа) и кедровых орехов с белком куриного мяса.",
      es: "Considerado una obra maestra de la corte de Joseon, muestra la elegancia de la realeza combinando el sésamo (Imja) y los piñones con la proteína del pollo.",
      ja: "朝鮮時代の宮廷料理の華と呼ばれ、松の実と胡麻（荏子）の栄養に鶏肉のタンパク質が合わさり、両班家や王室の品格を示す季節料理（時食）でした。",
      zh: "被称为朝鲜王朝宫廷料理的精华。松子与芝麻（荏子）的营养与鸡肉的蛋白质完美结合，展现了贵族与王室高雅的节令饮食风貌。"
    },
    caution: {
      ko: "참깨와 잣에 알레르기가 있으신 분은 섭취를 피해야 하며, 지방 성분이 많아 평소 위장이 약하면 과식 시 소화 불량을 겪을 수 있습니다.",
      en: "Avoid if you have sesame or pine nut allergies. High in plant fats, overconsumption may cause mild indigestion for those with weaker stomachs.",
      fr: "À éviter en cas d'allergie au sésame ou aux pignons de pin. Riche en graisses végétales, il peut être lourd pour les estomacs fragiles.",
      ar: "تجنب تناوله إذا كان لديك حساسية من السمسم أو الصنوبر. وبما أنه غني بالدهون النباتية، فإن الإفراط فيه قد يسبب عسر الهضم لمن لديهم معدة ضعيفة.",
      ru: "Противопоказано людям с аллергией на кунжут и кедровые орехи. Из-за высокого содержания растительных жиров может вызвать тяжесть в желудке.",
      es: "Evitar en caso de alergia al sésamo o los piñones. Al ser rico en grasas vegetales, su consumo excesivo puede causar indigestión a estómagos débiles.",
      ja: "胡麻や松の実にアレルギーがある方は摂取を避けるべきであり、脂肪分が多いため、胃腸の弱い方は過食すると消化不良を起こすことがあります。",
      zh: "对芝麻和松子过敏的人群应禁止食用；由于脂肪含量较高，脾胃虚弱者过量食用可能会导致消化不良。"
    }
  },
  {
    id: "summer-05",
    name: {
      ko: "냉면", en: "Naengmyeon", fr: "Naengmyeon", ar: "ناينغميون",
      ru: "Нэнмён", es: "Naengmyeon", ja: "冷麺", zh: "冷面"
    },
    englishName: "Chilled Buckwheat Noodles",
    category: {
      ko: "이냉치냉 (계절의 향수)", en: "Fighting Cold with Cold (Chilled Nostalgia)",
      fr: "Combattre le froid par le froid (Nouilles de Sarrasin)", ar: "مكافحة البرد بالبرد (حنين الموسم)",
      ru: "Борьба с холодом с помощью холода (Гречневая лапша)", es: "Combatir el frío con frío (Fideos fríos de sarraceno)",
      ja: "以冷治冷（季節の郷愁）", zh: "以冷治冷（时令情怀）"
    },
    categoryType: "cold",
    summary: {
      ko: "동치미와 고기 육수를 섞은 차가운 국물에 메밀면을 말아 먹는 평양 물냉면과 매운 회비빔국수인 함흥냉면",
      en: "Chilled buckwheat noodles served in cold beef and radish water kimchi broth (Pyongyang) or mixed with a spicy red chili sauce (Hamhung).",
      fr: "Nouilles de sarrasin servies dans un bouillon glacé (Pyeongyang) ou nappées d'une sauce pimentée (Hamhung).",
      ar: "نودلز الحنطة السوداء تقدم في حساء بارد من لحم البقر وكيمتشي الفجل (بيونغ يانغ) أو تخلط مع صلصة الفلفل الأحمر الحار (هامهونغ).",
      ru: "Гречневая лапша в ледяном бульоне из кимчи и говядины (Пхеньян) или перемешанная с острым соусом чили (Хамынь).",
      es: "Fideos de sarraceno en caldo frío de ternera y kimchi de rábano (Pyongyang) o mezclados con salsa picante de chile (Hamhung).",
      ja: "トンチミと肉の出汁を混ぜた冷たいスープに蕎麦麺を入れて食べる平壌冷麺と、辛い刺身ビビン麺の咸興冷麺",
      zh: "在冷汤（东地米水泡菜汤与肉汤混合）中泡入荞麦面的平壤水冷面，以及拌入辛辣生鱼片的咸兴拌冷面"
    },
    culture: {
      ko: "원래 북한 지역에서 겨울철 '이냉치냉'으로 즐기던 계절 음식이었으나, 한국전쟁 이후 피란민들에 의해 남쪽 전역에 전파되어 여름철을 대표하는 국민 음식이 되었습니다.",
      en: "Originally a winter dish in northern Korea, it spread across the south by refugees during the Korean War, establishing itself as the quintessential summer comfort food.",
      fr: "Originaire du nord et consommé en hiver, il a été popularisé dans le sud par les réfugiés de la guerre de Corée, devenant le symbole de l'été.",
      ar: "كان في الأصل طبقاً شتوياً في شمال كوريا، ثم انتشر في الجنوب بواسطة اللاجئين خلال الحرب الكورية، ليصبح طعام الصيف المفضل للجميع.",
      ru: "Изначально зимнее блюдо в северных регионах. После Корейской войны распространилось на юге благодаря беженцам, став культовой летней едой.",
      es: "Originalmente un plato de invierno en el norte de Corea, se extendió por el sur a través de los refugiados de la guerra, convirtiéndose en el rey del verano.",
      ja: "本来は北韓地域で冬に「以冷治冷」として好まれた季節料理でしたが、朝鮮戦争以降、避難民によって南側全域に広まり、夏の代表的な国民食となりました。",
      zh: "原本是朝鲜北部地区在冬季作为“以冷治冷”享用的时令食物，朝鲜战争后由避难民传播至南部全境，成为代表夏季的国民美食。"
    },
    caution: {
      ko: "평양냉면의 메밀은 중증 알레르기를 유발할 수 있으므로 메밀 알레르기가 있는 분은 금기시해야 하며, 육수의 나트륨 과잉 섭취를 방지하기 위해 국물은 적당히 드시는 것이 좋습니다.",
      en: "Buckwheat in Pyongyang-style noodles can cause severe allergic reactions. Also, cold broths tend to contain hidden sodium; consume in moderation.",
      fr: "Le sarrasin peut provoquer des allergies graves. De plus, les bouillons froids contiennent souvent du sodium caché ; buvez avec modération.",
      ar: "يمكن أن يسبب الحنطة السوداء في نودلز بيونغ يانغ حساسية شديدة. كما يحتوي الحساء البارد على صوديوم مخفي؛ ينصح بتناول المرق باعتدال.",
      ru: "Гречиха может вызывать сильную аллергию. Из-за высокого содержания соли в холодном бульоне гипертоникам не рекомендуется выпивать его полностью.",
      es: "El sarraceno puede causar reacciones alérgicas graves. Además, los caldos fríos contienen sodio oculto; consuma el líquido con moderación.",
      ja: "平壌冷麺の蕎麦は重度のアレルギーを引き起こす可能性があるため、蕎麦アレルギーのある方は避けるべきで、塩分の摂りすぎを防ぐためスープは適量に留めるのが良いです。",
      zh: "平壤冷面中的荞麦可能会诱发严重过敏，有荞麦过敏史的人群应禁止食用；为防止摄入过量钠，建议适量饮汤。"
    }
  },
  {
    id: "summer-06",
    name: {
      ko: "밀면", en: "Milmyeon", fr: "Milmyeon", ar: "ميلميون",
      ru: "Мильмён", es: "Milmyeon", ja: "ミルミョン", zh: "小麦面"
    },
    englishName: "Wheat Noodles in Cold Broth",
    category: {
      ko: "이냉치냉 (피란의 창의성)", en: "Fighting Cold with Cold (Refugee Creativity)",
      fr: "Combattre le froid par le froid (Créativité des Réfugiés)", ar: "مكافحة البرد بالبرد (إبداع النازحين)",
      ru: "Борьба с холодом с помощью холода (Пшеничная лапша)", es: "Combatir el frío con frío (Fideos de trigo en caldo frío)",
      ja: "以冷治冷（避難の創意工夫）", zh: "以冷治冷（避难中的创意）"
    },
    categoryType: "cold",
    summary: {
      ko: "메밀 대신 밀가루로 면을 뽑아 시원하고 한약재 향이 도는 육수에 말아 먹는 부산의 대표 향토 음식",
      en: "Busan's specialty noodles made of wheat flour instead of buckwheat, served in a cold, herb-infused aromatic broth.",
      fr: "Spécialité de Busan composée de nouilles de blé dans un bouillon glacé parfumé aux herbes médicinales.",
      ar: "نودلز دقيق القمح بدلاً من الحنطة السوداء، تقدم في حساء بارد ومنكه بالأعشاب الطبية، وهي أكلة محلية شهيرة في بوسان.",
      ru: "Пшеничная лапша в холодном бульоне с легким ароматом лечебных трав, фирменное блюдо города Пусан.",
      es: "Especialidad de Busan hecha de fideos de trigo en un caldo frío infundido con hierbas medicinales aromáticas.",
      ja: "蕎麦の代わりに小麦粉で麺を作り、冷たく漢方薬の香りがするスープに入れて食べる釜山の代表的な郷土料理",
      zh: "用小麦粉代替荞麦制作面条，泡入带有中草药香气的冰镇高汤中食用的釜山代表性本土美食"
    },
    culture: {
      ko: "한국전쟁 시기 부산으로 피란 온 실향민들이 메밀을 구하기 어렵게 되자 구호물자인 밀가루로 냉면의 면을 대체해 만들기 시작한 애환과 지혜의 산물입니다.",
      en: "Born out of scarcity during the Korean War, refugees in Busan used aid-provided wheat flour to recreate their beloved northern cold noodles.",
      fr: "Né de la pénurie durant la guerre de Corée, ce plat a été créé par les réfugiés à Busan en remplaçant le sarrasin par de la farine de blé d'aide humanitaire.",
      ar: "وُلدت من رحم الحرمان أثناء الحرب الكورية، حيث استخدم النازحون في بوسان دقيق القمح الموزع كمساعدات لإعادة ابتكار نودلز الشمال الباردة المفضلة لديهم.",
      ru: "Появилась в годы Корейской войны. Беженцы в Пусане, не найдя гречневой муки, заменили ее пшеничной мукой из гуманитарной помощи.",
      es: "Nacido de la escasez durante la guerra, los refugiados en Busan usaron harina de trigo de ayuda humanitaria para recrear sus amados fideos fríos del norte.",
      ja: "朝鮮戦争期に釜山へ避難してきた避難民たちが蕎麦を入手困難になり、配給物資の小麦粉で冷麺の麺を代用して作り始めた、哀愁と知恵の産物です。",
      zh: "在朝鲜战争时期，避难至釜山的难民因难以获得荞麦，便使用作为救济物资的小麦粉来代替荞麦制成冷面，是充满哀伤与智慧的产物。"
    },
    caution: {
      ko: "밀가루 면은 정제 탄수화물 비중이 높으므로 혈당 관리가 필요하신 분은 섭취량 조절이 필요하며, 찬 육수에 체하지 않도록 꼭꼭 씹어 마셔야 합니다.",
      en: "Wheat noodles contain refined carbohydrates which can spike blood sugar. Eat slowly to prevent digestive discomfort from the ice-cold broth.",
      fr: "Les nouilles de blé contiennent des glucides raffinés qui augmentent la glycémie. Mangez lentement pour éviter l'indigestion due au bouillon glacé.",
      ar: "تحتوي نودلز القمح على كربوهيدرات مكررة قد ترفع السكر في الدم. تناولها ببطء لتجنب عسر الهضم الناجم عن المرق البارد.",
      ru: "Пшеничная лапша быстро повышает уровень сахара в крови. Из-за ледяной температуры бульона следует есть не спеша во избежание спазмов.",
      es: "Los fideos de trigo contienen carbohidratos refinados que pueden elevar el azúcar en sangre. Coma despacio para evitar molestias debido al caldo helado.",
      ja: "小麦粉の麺は精製炭水化物の割合が高いため、血糖値の管理が必要な方は摂取量の調節が必要で、冷たいスープで胃もたれしないようによく噛んで食べる必要があります。",
      zh: "小麦面条含有较高比例的精制碳水化合物，需管理血糖的人群应控制食用量；同时应细嚼慢咽，以防因冰冷高汤而导致消化不良。"
    }
  },
  {
    id: "summer-07",
    name: {
      ko: "콩국수", en: "Kongguksu", fr: "Kongguksu", ar: "كونغ-غوكو",
      ru: "Конгуксу", es: "Kongguksu", ja: "コングクス", zh: "豆浆面"
    },
    englishName: "Noodles in Cold Soybean Soup",
    category: {
      ko: "이냉치냉 (식물성 보양)", en: "Fighting Cold with Cold (Plant Protein)",
      fr: "Combattre le chaud par le froid (Protéines Végétales)", ar: "مكافحة البرد بالبرد (بروتين نباتي)",
      ru: "Борьба с холодом с помощью холода (Растительный белок)", es: "Combatir el frío con frío (Proteína vegetal)",
      ja: "以冷治冷（植物性補養）", zh: "以冷治冷（植物性滋补）"
    },
    categoryType: "cold",
    summary: {
      ko: "불려 삶은 콩을 곱게 갈아 차게 식힌 국물에 소면을 말아 오이, 토마토 고명과 먹는 식물성 고단백 여름 국수",
      en: "Wheat noodles served in a creamy, chilled broth of freshly ground boiled soybeans, topped with cucumber and tomato.",
      fr: "Nouilles de blé servies dans un bouillon crémeux et frais de soja bouilli fraîchement moulu, garnies de concombre.",
      ar: "نودلز تقدم في مرق دسم وبارد من فول الصويا المسلوق والمطحون طازجاً، مغطى بالخيار والطماطم.",
      ru: "Лапша в густом холодном соусе из перетертой отварной сои, украшенная огурцом и помидором.",
      es: "Fideos de trigo servidos en un caldo cremoso y frío de soja cocida y molida, cubiertos con pepino y tomate.",
      ja: "水に浸して茹でた大豆を細かく挽いて冷ましたスープに素麺を入れ、きゅうりやトマトのトッピングと食べる植物性高タンパク質の夏の麺料理",
      zh: "将浸泡并煮熟的大豆磨细后做成冰镇浓汤，放进挂面，配以黄瓜、西红柿丝食用的植物性高蛋白夏日面食"
    },
    culture: {
      ko: "19세기 말 조리서 『시의전서』에 '콩국'으로 처음 기록되었으며, 서민들이 고기 대신 밭에서 나는 소고기인 콩을 사용해 단백질과 수분을 동시에 보충하던 대중적 보양 철학이 깃들어 있습니다.",
      en: "First recorded in the 19th-century cookbook Siuijeonseo. It reflects the wisdom of commoners who relied on soybeans as 'meat from the field' to replenish protein and hydration.",
      fr: "Mentionné au XIXe siècle dans le Siuijeonseo. Il reflète la sagesse populaire qui utilisait le soja comme alternative économique à la viande.",
      ar: "سُجل لأول مرة في كتاب الطهي 'سيويجونسي' في القرن التاسع عشر. يعكس حكمة عامة الشعب الذين اعتمدوا على الصويا كبديل للحوم لتعويض البروتين وسوائل الجسم.",
      ru: "Впервые упоминается в поваренной книге XIX века «Сиуидженсо». Отражает народную мудрость использования сои («мяса с грядки») для восполнения сил.",
      es: "Registrado por primera vez en el libro de cocina del siglo XIX Siuijeonseo. Refleja la sabiduría del pueblo que dependía de la soja como proteína económica.",
      ja: "19世紀末の料理書『是議全書』に「大豆スープ」として初めて記録され、庶民が肉の代わりに「畑の牛肉」と呼ばれる大豆を使ってタンパク質と水分を同時に補給した大衆的な補養哲学が息づいています。",
      zh: "在19世纪末的烹饪书《是议全书》中首次被记录为“豆汤”，蕴含着平民用被誉为“田间牛肉”的大豆来代替肉类，同时补充蛋白质与水分的民间滋补智慧。"
    },
    caution: {
      ko: "대두(콩) 알레르기가 있는 분은 피해야 하며, 일부 지역처럼 설탕을 과도하게 추가할 경우 급격한 혈당 상승을 부를 수 있으니 소금 간 위주를 권장합니다.",
      en: "Avoid if you have a soy allergy. Adding too much sugar (common in some regions) can cause blood sugar spikes; seasoning with salt is recommended.",
      fr: "À éviter en cas d'allergie au soja. Ajouter trop de sucre (courant dans certaines régions) peut faire grimper la glycémie ; préférez le sel.",
      ar: "تجنب تناوله إذا كان لديك حساسية من الصويا. إضافة الكثير من السكر (شائع في بعض المناطق) قد يرفع نسبة السكر؛ ينصح باستخدام الملح.",
      ru: "Противопоказано людям с аллергией на сою. Добавление большого количества сахара (популярное в ряде регионов) может повысить сахар; лучше солить.",
      es: "Evitar en caso de alergia a la soja. Agregar azúcar en exceso (común en algunas regiones) puede elevar la glucemia; se recomienda sazonar con sal.",
      ja: "大豆アレルギーのある方は避けるべきで、一部の地域のように砂糖を過剰に追加すると急激な血糖値の上昇を招く恐れがあるため、塩での味付けをお勧めします。",
      zh: "对大豆过敏的人群应禁止食用；若像部分地区那样过量加糖，可能会导致血糖急剧上升，因此建议以食盐调味为主。"
    }
  },
  {
    id: "summer-08",
    name: {
      ko: "오이냉국", en: "Oi-naengguk", fr: "Oi-naengguk", ar: "أوي-ناينغغوك",
      ru: "Ои-нэнгук", es: "Oi-naengguk", ja: "オイネングク", zh: "凉拌黄瓜汤"
    },
    englishName: "Chilled Cucumber Soup",
    category: {
      ko: "이냉치냉 (수분과 개운함)", en: "Fighting Cold with Cold (Hydrating & Crisp)",
      fr: "Combattre le froid par le froid (Hydratant & Frais)", ar: "مكافحة البرد بالبرد (ترطيب وانتعاش)",
      ru: "Борьба с холодом с помощью холода (Освежающий суп)", es: "Combatir el frío con frío (Hidratante y fresco)",
      ja: "以冷治冷（水分と清涼感）", zh: "以冷治冷（补水解腻）"
    },
    categoryType: "cold",
    summary: {
      ko: "채 썬 오이에 차가운 물을 붓고 소금, 간장, 식초로 새콤달콤하게 밑간을 해 얼음을 띄워 밥과 먹는 냉반찬",
      en: "A refreshing side dish of thinly sliced cucumbers in a chilled vinegar-based broth with ice cubes.",
      fr: "Un plat d'accompagnement rafraîchissant de concombres émincés dans un bouillon vinaigré glacé.",
      ar: "طبق جانبي منعش من الخيار المقطع رقيقاً في مرق خل بارد مع مكعبات الثلج.",
      ru: "Освежающая закуска из тонко нарезанных огурцов в ледяном бульоне на основе уксуса с кусочками льда.",
      es: "Un plato de acompañamiento refrescante de pepinos en rodajas finas en un caldo de vinagre frío con hielo.",
      ja: "千切りにしたきゅうりに冷たい水を注ぎ、塩、醤油、酢で甘酸っぱく味付けして氷を浮かべ、ご飯と食べる冷たいおかず",
      zh: "在切好的黄瓜丝中浇入冷水，用盐、酱油、醋调出酸甜风味，放入冰块，配饭食用的冷凉小菜"
    },
    culture: {
      ko: "열을 가하지 않아 부엌 노동자의 고초를 줄여주는 배려가 담겨있으며, 땀으로 손실된 수분과 전해질(나트륨, 칼륨)을 빠르게 보충해 여름철 농번기 일꾼들의 필수 반찬이었습니다.",
      en: "Saves kitchen workers from heat by requiring no stove cooking, and restores water and electrolytes lost through sweat during farm labor.",
      fr: "Épargne la chaleur aux cuisiniers en ne nécessitant pas de cuisson, et restaure l'eau et les électrolytes perdus pendant le travail agricole.",
      ar: "يقي الطهاة من الحرارة لعدم حاجته إلى الطهي على الموقد، ويعوض الماء والمعادن المفقودة بالتعرق أثناء العمل الزراعي.",
      ru: "Готовится без термической обработки, что облегчало труд на кухне. Быстро восполняет потерю влаги и электролитов при тяжелой работе в поле.",
      es: "Evita el uso de la estufa, protegiendo del calor a quien cocina. Restaura el agua y los electrolitos perdidos por el sudor en las faenas agrícolas.",
      ja: "火を使わないため台所で調理する人への配慮が込められており、汗で失われた水分と電解質（塩分、カリウム）を素早く補給し、夏の農繁期の働き手にとって必須のおかずでした。",
      zh: "无需加热调理，体现了减轻厨房劳作辛苦的体贴之情。能快速补充因流汗而流失的水分和电解质，曾是夏日农忙期工人们必不可少的配菜。"
    },
    caution: {
      ko: "만성 신장 질환 등으로 칼륨 섭취 제한이 필요한 환자는 오이의 높은 칼륨 성분을 유의해야 하며, 짜게 먹지 않도록 나트륨 염도를 낮추는 것이 좋습니다.",
      en: "Patients with chronic kidney disease who restrict potassium intake should be cautious. Keep sodium levels in check to avoid hypertension risk.",
      fr: "Les patients atteints d'insuffisance rénale chronique devant limiter le potassium doivent être prudents. Modérez le sodium.",
      ar: "يجب على مرضى الكلى الذين يتبعون نظاماً يحد من البوتاسيوم توخي الحذر. ينصح بتقليل الصوديوم لتجنب مخاطر ضغط الدم.",
      ru: "Пациентам с почечной недостаточностью следует помнить о высоком содержании калия в огурцах. Не делайте бульон слишком соленым.",
      es: "Pacientes con enfermedad renal crónica que restringen el potasio deben tener precaución. Modere el sodio para evitar riesgos de hipertensión.",
      ja: "慢性腎臓病などでカリウム摂取制限が必要な方は、きゅうりの高いカリウム成分に注意が必要で、塩分を摂りすぎないように調整するのが良いです。",
      zh: "因慢性肾脏疾病等需要限制钾摄入量的患者，应注意黄瓜的高钾属性；且不宜过咸，最好调低钠盐浓度。"
    }
  },
  {
    id: "summer-09",
    name: {
      ko: "화채", en: "Hwachae", fr: "Hwachae", ar: "هواشي",
      ru: "Хваче", es: "Hwachae", ja: "ファチェ", zh: "花菜"
    },
    englishName: "Traditional Fruit Punch",
    category: {
      ko: "전통 음청류 (오색의 풍류)", en: "Traditional Refreshment (Colorful Elegance)",
      fr: "Boisson Traditionnelle (Élégance des Couleurs)", ar: "مشروب تقليدي (أناقة الألوان)",
      ru: "Традиционный напиток (Красочные традиции)", es: "Bebida tradicional (Elegancia de colores)",
      ja: "伝統の飲清類（五色の風流）", zh: "传统饮品（五色风雅）"
    },
    categoryType: "dessert",
    summary: {
      ko: "오미자를 찬물에 우려내 단맛을 더한 후 배, 수박, 잣 등의 제철 고명을 아름답게 띄워 마시는 전통 음료",
      en: "A colorful fruit punch made with a base of steeped omija (five-flavor berry) water or honey water, topped with seasonal fruits and pine nuts.",
      fr: "Un punch aux fruits coloré à base d'infusion froide d'omija (baie aux cinq saveurs) ou d'eau miellée, garni de fruits et pignons.",
      ar: "شروب فواكه ملون يعتمد على ماء الأوميجا المنقوع أو ماء العسل، مغطى بالفواكه الموسمية وحبات الصنوبر.",
      ru: "Освежающий пунш на основе настоя лимонника (омиджа) или медовой воды с добавлением сезонных фруктов и кедровых орешков.",
      es: "Ponche de frutas colorido hecho con infusión fría de omija o agua con miel, coronado con frutas de temporada y piñones.",
      ja: "五味子を冷水で抽出し、甘みを加えてナシ、スイカ、松の実などの旬のトッピングを美しく浮かべて飲む伝統飲料",
      zh: "用凉水将五味子浸泡出味后调入甜味，再精美地浮放梨、西瓜、松子等时令配料饮用的传统饮品"
    },
    culture: {
      ko: "조선시대 단오와 유두 등의 세시 절식으로 애용되었으며, 임금이 신하에게 하사하던 '제호탕' 및 풍류 문화에서 비롯되어 오색(五色)과 오미(五味)의 한식 철학을 대표합니다.",
      en: "Enjoyed as a seasonal treat during festivals like Dano and Yudu in Joseon. It reflects the philosophy of Five Colors and Five Flavors (Obangsaek & Omi).",
      fr: "Savouré lors de fêtes traditionnelles comme Dano sous Joseon. Il reflète la philosophie des Cinq Couleurs et des Cinq Saveurs.",
      ar: "تم الاستمتاع به كحلوى موسمية خلال أعياد مثل 'دانو' في عهد جوسون. يعكس فلسفة الألوان الخمسة والنكهات الخمسة.",
      ru: "Праздничный напиток эпохи Чосон (на праздники Тано и Юду). Отражает философию пяти цветов (обангсэк) и пяти вкусов (оми).",
      es: "Disfrutado como manjar de temporada en festivales como Dano bajo Joseon. Refleja la filosofía de los Cinco Colores y Cinco Sabores.",
      ja: "朝鮮時代の端午や流頭などの歳時料理として愛用され、王が臣下に下賜した「醍醐湯（チェホタン）」や風流文化に由来し、五色と五味の韓国料理の哲学を代表しています。",
      zh: "曾是朝鲜王朝时期端午和流头等节日的重要节令食品。源自国王赏赐给臣子的“醍醐汤”及文人雅士的风流文化，代表了韩食“五色”与“五味”的哲学。"
    },
    caution: {
      ko: "과일의 과당과 추가된 단맛(설탕, 꿀)이 많아 당뇨 환자는 섭취 시 주의해야 하며, 오미자는 신맛이 강해 위산 과다 환자는 연하게 우려 드셔야 합니다.",
      en: "High in fructose from fruits and added sugars (honey, sugar). Diabetics should be cautious. The acidic nature of omija may irritate sensitive stomachs.",
      fr: "Riche en fructose et en sucres ajoutés (miel, sucre). Les diabétiques doivent faire attention. L'acidité de l'omija peut irriter l'estomac.",
      ar: "غني بالفركتوز من الفواكه والسكريات المضافة (العسل، السكر). يجب على مرضى السكري الحذر. قد تهيج حموضة الأوميجا المعدة الحساسة.",
      ru: "Содержит много фруктозы и добавленного сахара. Диабетикам следует быть осторожными. Кислота лимонника может раздражать чувствительный желудок.",
      es: "Alto en fructosa de las frutas y azúcares añadidos. Los diabéticos deben tener precaución. La naturaleza ácida de la omija puede irritar estómagos sensibles.",
      ja: "果物の果糖と追加された糖分（砂糖、蜂蜜）が多いため、糖尿病患者は摂取時に注意が必要で、五味子は酸味が強いため胃酸過多の方は薄めて飲む必要があります。",
      zh: "因含有较多的水果果糖及额外添加的糖分（糖、蜂蜜），糖尿病患者在食用时应注意；五味子酸性较强，胃酸过多者应稀释后饮用。"
    }
  },
  {
    id: "summer-10",
    name: {
      ko: "미숫가루", en: "Misutgaru", fr: "Misutgaru", ar: "ميسوتغارو",
      ru: "Мисутгару", es: "Misutgaru", ja: "ミスッカル", zh: "炒面茶"
    },
    englishName: "Roasted Grain Shake",
    category: {
      ko: "전통 음청류 (구황과 간편)", en: "Traditional Refreshment (Emergency & Easy)",
      fr: "Boisson Traditionnelle (Nutritif & Rapide)", ar: "مشروب تقليدي (تغذية سريعة)",
      ru: "Традиционный напиток (Питательный и сытный)", es: "Bebida tradicional (Nutritiva y rápida)",
      ja: "伝統の飲清類（救荒と簡便）", zh: "传统饮品（备荒与便捷）"
    },
    categoryType: "dessert",
    summary: {
      ko: "보리, 콩, 찹쌀 등 다양한 통곡물을 찌고 볶아 말린 후 가루 내어 시원한 물에 타 먹는 구수한 슬로우 푸드",
      en: "A nutritious, comforting shake made of roasted mixed grains (barley, soybeans, rice) mixed into cold water or milk.",
      fr: "Une boisson nutritive à base de céréales mélangées et grillées (orge, soja, riz) mélangées à de l'eau froide ou du lait.",
      ar: "مشروب مغذٍ ومريح مصنوع من حبوب محمصة مشكلة (شعير، صويا، أرز) مخلوطة بالماء البارد أو الحليب.",
      ru: "Питательный коктейль из смеси обжаренных злаков (ячмень, соя, рис), разведенных в холодной воде или молоке.",
      es: "Bebida nutritiva a base de granos tostados (cebada, soja, arroz) mezclados con agua fría o leche.",
      ja: "大麦、大豆、もち米など様々な全粒穀物を蒸して炒めて乾燥させ、粉末にして冷たい水に混ぜて飲む香ばしいスローフード",
      zh: "将大麦、大豆、糯米等多种全谷物蒸熟炒干并磨成粉后，冲入凉水饮用的香浓慢食"
    },
    culture: {
      ko: "옛날 보릿고개를 넘기던 서민들의 든든한 요기이자, 승려나 전장 장수들의 훌륭한 휴대용 비상식량으로 한국인의 검약한 지혜를 대변하는 구수한 곡물 유산입니다.",
      en: "Historically used as an emergency food during spring barley shortages and by travelers or soldiers for its long preservation and high satiety.",
      fr: "Historiquement utilisé comme aliment d'urgence lors des pénuries et par les voyageurs ou soldats pour sa longue conservation.",
      ar: "استخدم تاريخياً كطعام طوارئ خلال فترات نقص الشعير ومن قبل المسافرين أو الجنود نظراً لإمكانية حفظه الطويل وإشباعه العالي.",
      ru: "Исторически служил сухим пайком для путников, монахов и воинов благодаря длительному хранению и быстрому насыщению.",
      es: "Usado históricamente como alimento de emergencia durante la escasez y por viajeros o soldados debido a su larga conservación y alta saciedad.",
      ja: "昔、麦の収穫前の食糧不足の時期を乗り越えた庶民の心強い食事代わりであり、僧侶や戦場の将帥たちの優れた携帯用の非常食として、韓国人の倹約の知혜を代表する香ばしい穀物の遺産です。",
      zh: "曾是昔日度过“春荒（青黄不接时期）”的平民们坚实的充饥之物，也是僧侣或战场将领极佳的携带型应急口粮，是代表韩国人勤俭智慧的香浓谷物遗产。"
    },
    caution: {
      ko: "통곡물 가루는 영양 농축도가 높아 체중 조절 시 과도한 당류(꿀, 설탕) 첨가를 주의해야 하며, 소화력이 떨어지면 갑작스러운 복부 팽만감을 느낄 수 있습니다.",
      en: "Highly concentrated in nutrients. Watch out for added sugars (honey, sugar) when managing weight. Overconsumption may cause bloating for sensitive stomachs.",
      fr: "Très concentré en nutriments. Attention aux sucres ajoutés (miel) si vous surveillez votre poids. Peut causer des ballonnements.",
      ar: "مركز جداً بالمواد الغذائية. احذر من السكريات المضافة (العسل) عند مراقبة الوزن. قد يسبب الإفراط في تناوله انتفاخاً للمعدة الحساسة.",
      ru: "Высокая концентрация питательных веществ. При похудении избегайте добавления сахара или меда. Может вызвать вздутие живота.",
      es: "Muy concentrado en nutrientes. Cuidado con los azúcares añadidos si controla su peso. Puede causar hinchazón en estómagos sensibles.",
      ja: "全粒穀物の粉末は栄養濃度が高いため、体重調節の際には過度な糖分（蜂蜜、砂糖）の追加に注意が必要で、消化力が低下していると突然の膨満感を感じることがあります。",
      zh: "全谷物粉的营养浓度较高，控制体重时应注意避免过量添加糖分（蜂蜜、砂糖）；消化能力较差者可能会突然感到腹胀。"
    }
  }
];

export interface EditorialContent {
  slug: string;
  title: { [locale: string]: string };
  excerpt: { [locale: string]: string };
  body: { [locale: string]: string };
  cta: { label: { [locale: string]: string }; href: string }[];
}

export const summerKoreanFoods10Content: EditorialContent = {
  slug: "summer-korean-foods-10",
  title: {
    ko: "여름철 한국음식 10선",
    en: "Summer Korean Foods 10",
    ja: "夏のごちそう10選",
    zh: "夏日韩食10选",
    es: "10 comidas coreanas de verano",
    fr: "10 Plats Coréens d'Été",
    ar: "أطعمة كورية صيفية ١٠",
    ru: "10 летних корейских блюд"
  },
  excerpt: {
    ko: "이열치열과 이냉치냉, 보양과 청량, 풍속과 영양이 한 그릇 안에서 만나는 한국 여름 식문화의 정수를 소개합니다. 삼계탕, 육개장, 초계탕, 임자수탕, 냉면, 밀면, 콩국수, 오이냉국, 화채, 미숫가루를 통해 계절에 응답하는 한국의 지혜를 살펴봅니다.",
    en: "Exploring the essence of Korean summer dining culture where hot nourishment, cool refreshment, customs, and nutrition meet in a single bowl. Discover the wisdom of responding to the seasons."
  },
  body: {
    ko: `## 여름, 한 그릇에 담긴 한국의 지혜

무더운 계절을 버티는 법은 단순히 시원한 것을 먹는 데 있지 않았습니다. 한국의 여름 음식은 뜨거운 국물로 기운을 보하는 이열치열, 차가운 국물로 열을 식히는 이냉치냉, 그리고 제철 재료로 몸의 균형을 되찾는 생활의 지혜를 함께 담아왔습니다.

삼계탕과 육개장 같은 보양식, 초계탕과 임자수탕 같은 냉보양식, 오이냉국과 화채, 미숫가루 같은 여름 음청류에 이르기까지 한국의 여름 음식은 계절에 순응하며 몸을 돌보는 방식의 총합이라 할 수 있습니다. 이 페이지는 여름철 한국인이 즐겨온 열 가지 음식을 통해 그 기원, 문화, 조리의 의미, 그리고 오늘날의 시선에서 살펴야 할 주의점까지 함께 소개합니다.

## 한국 여름 음식의 두 가지 지혜

### 이열치열
더운 계절에 뜨거운 음식을 먹고 땀을 내며 몸의 순환을 돕는 방식입니다. 삼계탕과 육개장은 여름철 대표적인 이열치열 음식으로, 기력을 보충하고 무더위 속에서 지친 몸을 추스르는 보양의 상징으로 자리해 왔습니다.

### 이냉치냉
차가운 국물과 시원한 재료로 몸의 열감을 가라앉히고 입맛을 되살리는 방식입니다. 초계탕, 임자수탕, 냉면, 밀면, 콩국수, 오이냉국 등은 여름철 냉보양과 청량함의 지혜를 잘 보여주는 음식들입니다.

## 여름철 한국음식 10선

### 1. 삼계탕
영계와 인삼, 찹쌀, 대추를 함께 고아낸 삼계탕은 가장 뜨거운 날 가장 뜨거운 보양으로 몸을 다스리는 한국 여름 음식의 상징입니다. 복날의 절식으로 자리 잡은 이 음식은 기력을 보충하는 의미와 계절의 고비를 넘는 의례적 성격을 함께 지닙니다.  
라벨: 이열치열 · 보양식  
주의 포인트: 국물 섭취량, 나트륨, 약재 성분에 대한 개인 민감도 확인

### 2. 육개장
소고기와 대파, 붉은 국물이 어우러진 육개장은 얼큰한 열감으로 몸을 깨우는 여름철 보양탕입니다. 강한 맛과 향을 통해 입맛을 되살리고 땀의 순환을 돕는다는 점에서 한국식 여름 국물 문화의 또 다른 축을 이룹니다.  
라벨: 이열치열 · 매운 국물  
주의 포인트: 염도와 매운맛 강도 조절

### 3. 초계탕
차갑게 식힌 닭 육수에 식초와 겨자의 맛을 더한 초계탕은 여름철 냉보양의 정수를 보여주는 음식입니다. 새콤하고 서늘한 국물은 더위로 둔해진 입맛을 깨우고, 익힌 닭고기는 담백한 단백질 보충의 역할을 합니다.  
라벨: 이냉치냉 · 냉보양식  
주의 포인트: 산미와 겨자 향에 민감한 경우 섭취량 조절

### 4. 임자수탕
곱게 간 참깨와 닭 육수를 섞어 차게 즐기는 임자수탕은 궁중과 반가의 세련된 여름 보양식입니다. 고소한 풍미와 차분한 질감, 오색 고명이 주는 시각적 아름다움까지 함께 담아내며, 여름 음식에도 품격과 정성을 부여했던 전통을 보여줍니다.  
라벨: 이냉치냉 · 궁중 냉보양식  
주의 포인트: 참깨 알레르기와 농후한 국물의 소화 적합성 확인

### 5. 냉면
냉면은 지역과 역사, 기억이 함께 담긴 한국 여름 음식의 대표 장면입니다. 평양식의 담백한 물냉면, 함흥식의 강한 비빔냉면, 지역별 해석이 더해진 여러 형태를 통해 냉면은 단순한 차가운 면 요리를 넘어 한국인의 여름 감각을 상징하는 음식이 되었습니다.  
라벨: 이냉치냉 · 면 요리  
주의 포인트: 육수 염도와 면 재료 특성 확인

### 6. 밀면
밀면은 피란과 결핍의 시간 속에서 탄생한 부산의 여름 음식입니다. 메밀 대신 밀가루를 활용한 이 음식은 한국전쟁 이후의 생활사와 적응의 지혜를 담고 있으며, 지금은 지역적 정체성을 대표하는 여름 별미로 자리 잡았습니다.  
라벨: 이냉치냉 · 향토 면 요리  
주의 포인트: 양념장 염도와 매운맛 조절

### 7. 콩국수
곱게 간 콩의 고소함과 차가운 국물이 특징인 콩국수는 식물성 단백질 중심의 담백한 여름 한 끼입니다. 자극적인 맛 대신 재료의 밀도와 고소함으로 승부하며, 여름철에도 몸을 무겁지 않게 채우는 한국 음식의 지혜를 보여줍니다.  
라벨: 이냉치냉 · 식물성 보양식  
주의 포인트: 콩 알레르기 및 소화 민감성 확인

### 8. 오이냉국
오이냉국은 불을 많이 쓰지 않고도 만들 수 있는 가장 실용적인 여름 음식 중 하나입니다. 아삭한 오이와 차가운 국물, 단순한 간이 만드는 청량감은 무더운 계절의 생활 음식이 지닌 간결한 아름다움을 보여줍니다.  
라벨: 제철 냉국 · 생활 음식  
주의 포인트: 소금·간장 사용량 조절

### 9. 화채
오미자 물이나 과일 국물에 제철 과일을 띄우는 화채는 한국 여름 풍류를 가장 시각적으로 보여주는 음식입니다. 오색과 오미의 조화를 담아내며, 단순한 디저트를 넘어 계절을 즐기는 감각적 방식으로 이어져 왔습니다.  
라벨: 전통 음청류 · 계절 디저트  
주의 포인트: 당 함량과 첨가 감미료 사용량 확인

### 10. 미숫가루
여러 곡물을 찌고 말리고 볶아 가루로 만든 미숫가루는 준비의 시간과 검약의 미학이 담긴 전통 음료입니다. 간편하면서도 든든한 한 끼가 될 수 있어, 여름철 갈증 해소와 허기 달래기를 동시에 해결하는 음식 문화의 흔적을 보여줍니다.  
라벨: 전통 음청류 · 대용식  
주의 포인트: 당 첨가량과 곡물 기반 열량 고려

## 계절에 응답하는 음식 문화

한국의 여름 음식은 단지 더위를 식히는 메뉴가 아닙니다. 그것은 더위에 지친 몸을 회복시키고, 계절의 흐름에 순응하며, 입맛과 기운을 다시 세우기 위한 생활의 기술입니다. 뜨거운 것과 차가운 것, 보양과 청량, 절기와 풍속이 하나의 식문화 안에서 공존한다는 점이 한국 여름 음식의 가장 큰 특징입니다.

오늘날에는 영양 정보와 개인의 건강 상태를 함께 고려해야 하겠지만, 그럼에도 이 음식들이 지닌 계절의 감각과 문화적 의미는 여전히 유효합니다. 여름 한 그릇에는 맛뿐 아니라, 기후에 적응하고 몸을 돌보며 공동체의 시간을 나누어 온 한국인의 오래된 지혜가 담겨 있습니다.`,
    en: `## Summer, the Wisdom Captured in a Single Bowl

Surviving the sweltering heat is not just about consuming cold things. Korean summer food embodies the wisdom of 'fighting fire with fire' (using hot soups to restore energy) and 'fighting cold with cold' (using cold dishes to lower body heat), alongside seasonal ingredients that rebalance the body.

From nourishing hot soups like Samgyetang and Yukgaejang to chilled restorative meals like Chogyetang and Imjasutang, and summer beverages like Oi-naengguk, Hwachae, and Misutgaru, Korean summer food represents a holistic method of self-care in sync with nature. This page introduces ten dishes enjoyed by Koreans, exploring their origins, culture, significance, and cautions from a modern standpoint.

## Two Core Concepts of Korean Summer Dining

### Fighting Fire with Fire
The method of consuming hot foods in hot weather to induce sweating and aid the body's circulation. Samgyetang and Yukgaejang are classic examples, serving as symbols of restoring vital energy and healing exhausted bodies.

### Fighting Cold with Cold
The approach of soothing heat and stimulating appetite with cold broths and cooling ingredients. Chogyetang, Imjasutang, Naengmyeon, Milmyeon, Kongguksu, and Oi-naengguk showcase this refreshing logic.

## Summer Korean Foods 10

### 1. Samgyetang
A whole young chicken simmered with ginseng, glutinous rice, and jujubes. Samgyetang is the symbol of Korean summer nourishment, treating the hottest days with the hottest food. Established as a custom for the Dog Days of summer, it restores vitality and carries ceremonial significance.  
Label: Fighting Fire with Fire · Nourishing Soup  
Caution points: Portion control, sodium levels, and checking personal sensitivity to medicinal herbs.

### 2. Yukgaejang
Spicy beef soup cooked with shredded beef and green onions. Its fiery red broth wakes up the body, stimulates appetite through bold flavors, and promotes healthy circulation through sweating.  
Label: Fighting Fire with Fire · Spicy Stew  
Caution points: Saltiness and spiciness level adjustments.

### 3. Chogyetang
Chilled chicken soup with vinegar and mustard. It showcases the essence of chilled summer nourishment, where the tangy, cool broth wakes up lost appetite while the chicken meat serves as a lean protein source.  
Label: Fighting Cold with Cold · Chilled Restoration  
Caution points: Control consumption if sensitive to acidity or mustard spice.

### 4. Imjasutang
Shredded chicken in a chilled toasted sesame broth. It was a refined summer delicacy for the royal court and noble families, combining nutty flavor, rich texture, and visual elegance with colorful garnishes.  
Label: Fighting Cold with Cold · Royal Chilled Nourishment  
Caution points: Verify sesame allergy and digestive suitability of the rich broth.

### 5. Naengmyeon
Chilled buckwheat noodles reflecting history, geography, and memory. Featuring the clean Pyongyang-style water cold noodles, the spicy Hamhung-style mixed noodles, and various regional interpretations, Naengmyeon has become the ultimate icon of summer dining.  
Label: Fighting Cold with Cold · Buckwheat Noodles  
Caution points: Broth sodium level and checking sensitivity to buckwheat allergens.

### 6. Milmyeon
Wheat noodles in cold broth born out of refugees' scarcity in Busan during the Korean War. Replacing buckwheat with wheat flour, this dish contains historical adaptation and is now a local culinary signature.  
Label: Fighting Cold with Cold · Local Wheat Noodles  
Caution points: Seasoning paste saltiness and spiciness adjustments.

### 7. Kongguksu
Noodles in a creamy, chilled soybean soup. This high-protein plant-based meal relies on the pure, nutty flavor of freshly ground soybeans, showing the wisdom of filling the body without causing heaviness.  
Label: Fighting Cold with Cold · Plant Protein  
Caution points: Soy allergy and checking digestive comfort.

### 8. Oi-naengguk
Chilled cucumber soup requiring no cooking fire, easing the labor of kitchen workers. Thinly sliced cucumbers in an ice-cold vinegar broth deliver a clean, crisp, and refreshing side dish.  
Label: Hydrating Cold Soup · Daily Dish  
Caution points: Control salt and soy sauce amounts.

### 9. Hwachae
A colorful fruit punch made with omija berry or honey water topped with seasonal fruits. Representing the harmony of five colors and five flavors (Obangsaek & Omi), it is a sensory way to enjoy the season.  
Label: Traditional Beverage · Seasonal Dessert  
Caution points: Watch sugar and sweetener content.

### 10. Misutgaru
Roasted mixed grains shake representing preparation and economy. This satisfying slow food beverage easily resolves thirst and hunger, serving as a grain-based legacy of thriftiness.  
Label: Traditional Shake · Meal Replacement  
Caution points: Watch added sugars and grain calories.

## A Culinary Culture Responding to the Seasons

Korean summer dishes are not merely items to cool you down. They are everyday techniques to restore fatigued bodies, adapt to seasonal flows, and rebuild vitality. The co-existence of hot and cold, nourishment and refreshment, is the ultimate characteristic of this dining culture.

While modern diners must weigh nutritional details and personal health, the seasonal sentiments and cultural values of these meals remain timeless. A single summer bowl holds more than taste; it holds age-old wisdom on adapting to climate and caring for the community.`
  },
  cta: [
    { label: { ko: "HOT 8 DISHES 보기", en: "View HOT 8 DISHES", ja: "HOT 8 DISHESを見る", zh: "查看热门8款推荐", es: "Ver HOT 8 DISHES", fr: "Voir les HOT 8 PLATS", ar: "عرض HOT 8 DISHES", ru: "Посмотреть HOT 8 DISHES" }, href: "/hot" },
    { label: { ko: "한식의 식재료 읽기", en: "Read Korean Ingredients Hub", ja: "韓国の食材ハブを読む", zh: "阅读韩食食材中心", es: "Leer centro de ingredientes", fr: "Lire les Ingrédients Coréens", ar: "قراءة مركز المكونات الكورية", ru: "Читать о корейских ингредиентах" }, href: "/ingredients" },
    { label: { ko: "식재료와 풍토 읽기", en: "Read Ingredients & Terroir", ja: "食材と風土を読む", zh: "阅读食材与风土", es: "Leer ingredientes y terruño", fr: "Lire Ingrédients & Terroir", ar: "قراءة المكونات والأرض", ru: "Читать об ингредиентах и терруаре" }, href: "/articles/ingredients-terroir" },
    { label: { ko: "반찬의 이해 읽기", en: "Read Guide to Banchan", ja: "おかず의理解を読む", zh: "阅读小菜指南", es: "Leer guía del banchan", fr: "Lire le Guide du Banchan", ar: "قراءة دليل البان تشان", ru: "Читать руководство по банчанам" }, href: "/banchan-guide" }
  ]
};
