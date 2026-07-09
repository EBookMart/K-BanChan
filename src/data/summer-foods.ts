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
      ja: "Keep Warm (Hot Nourishment)", zh: "以热治热（温热滋补）"
    },
    categoryType: "hot",
    summary: {
      ko: "영계에 인삼, 대추, 마늘, 찹쌀을 넣고 고아낸 한국의 여름 대표 보양식",
      en: "A whole young chicken stuffed with ginseng, jujube, garlic, and glutinous rice, simmered to perfection.",
      fr: "Un jeune poulet entier farci de ginseng, jujube, ail et riz gluant, mijoté pour un réconfort estival.",
      ar: "دجاجة كاملة صغيرة محشوة بالجينسنغ، العناب، الثوم، والأرز الدبق، مطهية ببطء.",
      ru: "Молодой цыпленок, фаршированный женьшенем, унаби, чесноком и клейким рисом.",
      es: "Pollo joven entero relleno de ginseng, azufaifa, ajo y arroz glutinoso, cocido a fuego lento.",
      ja: "若鶏に高麗人参、ナツメ、ニンニク、もち米を詰めて煮込んだ韓国의 대표적인 여름 보양식",
      zh: "在童子鸡腹内 court 入人参、大枣、大蒜 and 糯米后炖烂的韩国夏日대표적인 滋补美食"
    },
    culture: {
      ko: "계삼탕에서 시작해 인삼의 가치가 대중화되면서 삼계탕으로 이름이 바뀌었으며, 여름철 삼복더위에 땀을 많이 흘려 허해진 속을 온기로 채우는 음식입니다.",
      en: "Originating as Gyesamtang, it evolved into Samgyetang as ginseng became widely cultivated, restoring warmth to the body during the hottest days of summer.",
      fr: "Appelé à l'origine Gyesamtang, il est devenu le Samgyetang avec la démocratisation du ginseng, conçu pour réchauffer l'organisme pendant la canicule.",
      ar: "بدأ كـ 'جيسمتانغ' وتطور إلى 'سامغيتانغ' مع انتشار زراعة الجينسنغ، وهو يعيد الدفء إلى الجسم خلال أيام الصيف الحارة.",
      ru: "Изначально назывался Кэсамтхан. Название сменилось на Самгетхан по мере популяризации женьшеня. Восполняет внутреннее тепло в самые жаркие дни лета.",
      es: "Originario como Gyesamtang, evolucionó a Samgyetang a medida que el ginseng se cultivó ampliamente, restaurando la calidez del cuerpo en los días más calurosos del verano.",
      ja: "「鶏参湯（ケサムタン）」から始まり、高麗人参의 가치가 일반화되면서 「参鶏湯（サムゲタン）」に改名されました。三伏의 猛暑에 땀을 많이 흘려 허해진 속을 온기로 채우는 음식입니다.",
      zh: "起源于“鸡参汤”，随着人参的普及而更名为“参鸡汤”。在夏日三伏天里，用于温暖因大量出汗 & 虚弱的脾胃。"
    },
    caution: {
      ko: "인삼의 사포닌 성분은 일부 항응고제 약물과 상호작용할 수 있으며, 고열량 음식이므로 칼로리 조절이 필요하신 분은 유의해야 합니다.",
      en: "Ginseng saponins may interact with anticoagulant drugs. Also, as a high-calorie dish, portion control is recommended for those managing energy intake.",
      fr: "Les saponines du ginseng peuvent interférer avec les anticoagulants. Étant un plat riche, les personnes surveillant leur poids doivent le consommer avec modération.",
      ar: "قد تتفاعل ساپونينات الجينسنغ مع الأدوية المضادة للتخثر. وبما أنه طبق عالي السعرات الحرارية، يوصى بالتحكم في الكمية لمن يراقبون وزنهم.",
      ru: "Сапонины женьшеня могут взаимодействовать с антикоагулятнами. Из-за высокой калорийности супа людям на диете следует контролировать размер порций.",
      es: "Las saponinas del ginseng pueden interactuar con medicamentos anticoagulantes. Al ser un plato hipercalórico, se recomienda moderar la porción a quienes controlan su peso.",
      ja: "고려인삼의 사포닌 성분은 일부 항응고약물과 상호작용할 수 있으며, 고칼로리 요리이므로 칼로리 조절이 필요하신 분은 주의해야 합니다.",
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
      fr: "Combattre le chaud par le froid (Soupe Épicée)", ar: "مكافحة الحرارة بالحرارة (نشاط حار)",
      ru: "Борьба с жаром с помощью жара (Острый суп)", es: "Combatir el calor con calor (Caldo picante)",
      ja: "Keep Warm (Spicy Vitality)", zh: "以热治热（辛辣活力）"
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
      ja: "개장국(개고기)을 먹지 못하는 사람들을 위해 소고기(肉)를 사용하여 궁중과 양반가에서 즐기던 보양식으로, 대파의 해독작용과 소고기의 영양이 어우러진 여름 별미입니다.",
      zh: "专为不食用狗肉汤的人群而使用牛肉（肉）制作，曾是宫廷与两班贵族享用的滋补食品。大葱的解毒作用与牛肉의 营养相结合，是夏日的一大美味。"
    },
    caution: {
      ko: "나트륨 함량이 높고 매운 양념이 위장을 자극할 수 있으므로, 고혈압 환자나 위염이 있으신 분은 국물 섭취를 적절히 조절해야 합니다.",
      en: "High in sodium and spicy seasoning that may irritate the stomach. Hypertension patients or those with gastritis should consume the broth in moderation.",
      fr: "Riche en sodium et piquant, il peut irriter l'estomac. Les personnes souffrant d'hypertension ou de gastrite doivent limiter la consommation de bouillon.",
      ar: "يحتوي على نسبة عالية من الصوديوم والتوابل الحارة التي قد تهيج المعدة. يجب على مرضى ضغط الدم المرتفع أو التهاب المعدة تقليل شرب الحساء.",
      ru: "Высокое содержание натрия и острота могут раздражать желудок. Гипертоникам и людям с гастритом рекомендуется ограничивать употребление бульона.",
      es: "Alto en sodio y condimentos picantes que pueden iritar el estómago. Pacientes con hipertensión o gastritis deben moderar el consumo del caldo.",
      ja: "염분이 많고 매운 양념이 위장을 자극할 수 있으므로, 고혈압 환자나 위염이 있으신 분은 국물 섭취를 적절히 조절해야 합니다.",
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
      ja: "Fighting Cold (Chilled Nourishment)", zh: "以冷治冷（清凉滋补）"
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
      ja: "조선시대 궁중 연회에서 가을과 겨울 절식으로 올리던 고급 요리였으나, 현대에 이르러 여름철 더위를 식혀주는 고급 냉보양식으로 재해석되었습니다.",
      zh: "在朝鲜王朝时期曾是用于宫廷宴会的秋冬高级膳食，现代被重新诠释为在夏日防暑降温的高档冷食滋补品。"
    },
    caution: {
      ko: "식초의 강한 산도가 공복 위장을 자극할 수 있으며, 찬 성질의 음식이므로 평소 배탈이 잦으신 분은 소량씩 천천히 드셔야 합니다.",
      en: "The high acidity of vinegar may stimulate an empty stomach. Since it is served cold, those with sensitive digestion should consume it slowly.",
      fr: "L'acidité du vinaigre peut irriter l'estomac vide. Étant un plat très froid, les personnes sensibles doivent le consommer lentement.",
      ar: "قد تهيج حموضة الخل القوية المعدة الفارغة. وبما أنه طعام بارد، يجب على من يعانون من اضطراب المعدة تناوله ببطء وبكميات صغيرة.",
      ru: "Высокая кислотность уксуса может раздражать пустой желудок. Поскольку это холодное блюдо, людям с чувствительным пищеварением следует есть его медленно.",
      es: "La fuerte acidez del vinagre puede irritar el estómago vacío. Al ser un plato frío, las personas con digestión sensible deben comerlo despacio.",
      ja: "식초의 강한 산도가 공복 위장을 자극할 수 있으며, 찬 성질의 음식이므로 평소 배탈이 잦으신 분은 소량씩 천천히 드셔야 합니다.",
      zh: "醋的强酸性可能会刺激空腹状态下的胃部；且本品性质寒凉，平时易拉肚子的人群应小口慢食。"
    }
  },
  {
    id: "summer-04",
    name: {
      ko: "임자수탕", en: "Imjasutang", fr: "Imjasutang", ar: "إيمجاسوتانغ",
      ru: "Имджасутхан", es: "Imjasutang", ja: "イムジャスタン", zh: "芝麻鸡汤"
    },
    englishName: "Cold Sesame Chicken Soup",
    category: {
      ko: "이냉치냉 (고소한 전통)", en: "Fighting Cold with Cold (Savory Tradition)",
      fr: "Combattre le froid par le froid (Soupe au Sésame)", ar: "مكافحة البرد بالبرد (نكهة السمسم التقليدية)",
      ru: "Борьба с холодом с помощью холода (Кунжутный суп)", es: "Combatir el frío con frío (Sopa fría de sésamo)",
      ja: "Fighting Cold (Savory Tradition)", zh: "以冷治冷（醇香传统）"
    },
    categoryType: "cold",
    summary: {
      ko: "삶은 닭고기를 찢어 올리고, 고소하게 간 깻국(참깨 육수)을 시원하게 부어 먹는 조선 왕실의 여름 궁중 보양식",
      en: "A royal summer soup featuring shredded chicken in a chilled, creamy, and savory toasted sesame seed broth.",
      fr: "Une soupe royale d'été composée de poulet effiloché dans un bouillon de sésame grillé frais et crémeux.",
      ar: "حساء صيفي ملكي يحتوي على دجاج مبشور في حساء سمسم محمص بارد ودسم ولذيذ.",
      ru: "Королевский суп с курицей, заливаемый холодным, густым и ароматным бульоном из протертого белого кунжута.",
      es: "Sopa real de verano con pollo deshebrado en un caldo frío, cremoso y sabroso de semillas de sésamo tostadas.",
      ja: "삶은 닭고기를 찢어 올리고, 고소하게 간 깻국(참깨 육수)을 시원하게 부어 먹는 조선 왕실의 여름 궁중 보양식",
      zh: "将煮熟的鸡肉撕成丝，浇上醇香的冰镇芝麻汤（荏子水汤）食用的朝鲜王室夏日宫廷滋补食品"
    },
    culture: {
      ko: "조선시대 궁중 요리의 꽃으로 불리며, 잣과 참깨(임자)의 영양에 닭고기의 단백질이 만나 양반가와 왕실의 품격을 보여주던 시식(時食)입니다.",
      en: "Praised as a masterpiece of Joseon court cuisine, it showcases the elegance of royal dining by combining rich sesame (Imja) and pine nut nutrition with chicken protein.",
      fr: "Considéré comme un chef-d'œuvre de la cour de Joseon, ce plat montre l'élégance royale en mariant le sésame (Imja), les pignons de pin et le poulet.",
      ar: "يُعتبر تحفة فنية في مطبخ بلاط جوسون، وهو يظهر أناقة المائدة الملكية من خلال الجمع بين السمسم (إيمجا) والصنوبر المغذي مع بروتين الدجاج.",
      ru: "Шедевр королевской кухни Чосон. Сочетает в себе высокую питательность белого кунжута (имджа) и кедровых орехов с белком куриного мяса.",
      es: "Considerado una obra maestra de la corte de Joseon, muestra la elegancia de la realeza combinando el sésamo (Imja) y los piñones con la proteína del pollo.",
      ja: "조선시대 궁중 요리의 꽃으로 불리며, 잣과 참깨(임자)의 영양에 닭고기의 단백질이 만나 양반가와 왕실의 품격을 보여주던 시식(時食)입니다.",
      zh: "被称为朝鲜王朝宫廷料理的精华。松子与芝麻（荏子）的营养与鸡肉的蛋白质完美结合，展现了贵族与王室高雅의 节令饮食风貌。"
    },
    caution: {
      ko: "참깨와 잣에 알레르기가 있으신 분은 섭취를 피해야 하며, 지방 성분이 많아 평소 위장이 약하면 과식 시 소화 불량을 겪을 수 있습니다.",
      en: "Avoid if you have sesame or pine nut allergies. High in plant fats, overconsumption may cause mild indigestion for those with weaker stomachs.",
      fr: "À éviter en cas d'allergie au sésame ou aux pignons de pin. Riche en graisses végétales, il peut être lourd pour les estomacs fragiles.",
      ar: "تجنب تناوله إذا كان لديك حساسية من السمسم أو الصنوبر. وبما أنه غني بالدهون النباتية, فإن الإفراط فيه قد يسبب عسر الهضم لمن لديهم معدة ضعيفة.",
      ru: "Противопоказано людям с аллергией на кунжут и кедровые орехи. Из-за высокого содержания растительных жиров может вызвать тяжесть в желудке.",
      es: "Evitar en caso de alergia al sésamo o los piñones. Al ser rico en grasas vegetales, su consumo excesivo puede causar indigestión a estómagos débiles.",
      ja: "참깨와 잣에 알레르기가 있으신 분은 섭취를 피해야 하며, 지방 성분이 많아 평소 위장이 약하면 과식 시 소화 불량을 겪을 수 있습니다.",
      zh: "对芝麻和松子过敏的人群应禁止食用；由于脂肪含量较高, 脾胃虚弱者过量食用可能会导致消化不良。"
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
      ko: "여름철 대표 면요리",
      en: "Representative Summer Noodles",
      fr: "Nouilles d'Été Emblématiques",
      ar: "نودلز الصيف المميزة",
      ru: "Главное летнее блюдо из лапши",
      es: "Fideos Representativos de Verano",
      ja: "夏を代表する麺料理",
      zh: "夏日代表面食"
    },
    categoryType: "cold",
    summary: {
      ko: "냉면은 본래 한반도 북부에서 메밀을 주재료로 겨울에 즐기던 음식이었으나, 오늘날에는 여름을 대표하는 한국의 냉면 문화로 자리 잡았습니다. 평양의 담백한 물냉면, 함흥의 매콤한 비빔냉면, 진주냉면, 그리고 피란의 역사 속에서 파생된 부산 밀면까지 다양한 계보를 품고 있으며, 한국인의 계절 감각과 지역성이 응축된 음식입니다.",
      en: "Naengmyeon was originally a winter dish made of buckwheat in northern Korea, but today it is the ultimate summer noodle culture. It includes diverse lineages like Pyongyan's mild water noodles, Hamhung's spicy mixed noodles, Jinju noodles, and Busan's Milmyeon born from refugee history, embodying Korean seasonality and locality.",
      fr: "Le naengmyeon était à l'origine un plat d'hiver à base de sarrasin dans le nord de la Corée. Aujourd'hui, il symbolise la culture des nouilles d'été. Il comprend diverses lignées telles que les nouilles à l'eau douces de Pyongyang, les nouilles épicées de Hamhung, les nouilles de Jinju et le Milmyeon de Busan issu de l'histoire des réfugiés.",
      ar: "كانت نودلز ناينغميون في الأصل طبقًا شتويًا مصنوعًا من الحنطة السوداء في شمال شبه الجزيرة الكورية، ولكنها أصبحت اليوم ثقافة نودلز الصيف الكورية بامتياز. تشمل سلالات متنوعة مثل نودلز بيونغ يانغ المائية الخفيفة، ونودلز هامهنغ الحارة، ونودلز جينجو، وميلميون بوسان الناشئة من تاريخ اللاجئين.",
      ru: "Изначально нэнмён был зимним блюдом из гречихи на севере Кореи, но сегодня он стал культовым летним блюдом. Оно объединяет различные направления: мягкий пхеньянский муль-нэнмён, острый хамхынский пибим-нэнмён, чинджу-нэнмён, а также пусанский мильмён, появившийся во время войны, воплощая корейские традиции и региональный колорит.",
      es: "El naengmyeon era originalmente un plato de invierno hecho de sarraceno en el norte de Corea, pero hoy en día es la cultura de fideos de verano definitiva. Incluye diversos estilos como los fideos de agua suaves de Pionyang, los fideos picantes de Hamhung, los de Jinju y el Milmyeon de Busan derivado de la historia de los refugiados.",
      ja: "冷麺は本来、韓半島北部でそば粉を主原料として冬に楽しんでいた料理でしたが、今日では夏を代表하는 韓国の冷麺文化として定着しました。平壌の淡白な水冷麺、咸興のピリ辛ビビン冷麺、晋州冷麺、そして避難の歴史から派生した釜山ミルミョンまで多様な系譜を持ち、韓国人の季節感と地域性が凝縮された料理です。",
      zh: "冷面原本是朝鲜半岛北部在冬季以荞麦为主料享用的食物，如今已成为代表夏日的韩国冷面文化。它包含平壤的清淡水冷面、咸兴的辛辣拌冷面、晋州冷面，以及在战争避难历史中衍生出的釜山小麦面等多种流派，是凝聚了韩国人季节感与地域特色的美食。"
    },
    culture: {
      ko: "냉면은 청량감과 함께 실향민의 기억, 지역 음식 문화, 그리고 ‘이냉치냉’의 전통을 함께 담은 한국 여름 음식의 상징입니다.",
      en: "Naengmyeon is a symbol of Korean summer food, containing refreshing taste, memories of displaced people, local food cultures, and the tradition of 'fighting cold with cold'.",
      fr: "Le naengmyeon est un symbole de la cuisine d'été coréenne, mêlant fraîcheur, mémoire des réfugiés, cultures locales et tradition de 'combattre le froid par le froid'.",
      ar: "ناينغميون هي رمز لأطعمة الصيف الكورية، حيث تحمل الانتعاش، وذكريات النازحين، وثقافات الطعام المحلية، وتقليد 'مكافحة البرد بالبرد'.",
      ru: "Нэнмён — символ летней кухни Кореи, сочетающий освежающий вкус, память беженцев, региональные особенности и философию «борьбы с холодом с помощью холода».",
      es: "El naengmyeon es un símbolo de la comida de verano coreana, que combina frescura, memorias de los desplazados, culturas gastronómicas locales y la tradición de 'combatir el frío con frío'.",
      ja: "冷麺は清涼感とともに失郷民の記憶、地域の食文化、そして「以冷治冷」の伝統を共に収めた韓国の夏の食の象徴です。",
      zh: "冷面在带来清凉感的同时，也承载着失乡民的记忆、地域饮食文化以及“以冷治冷”的传统，是韩国夏日饮食的象征。"
    },
    caution: {
      ko: "메밀 알레르기, 고나트륨 육수, 자극적인 양념 섭취에 주의하세요.",
      en: "Be cautious of buckwheat allergy, high-sodium broth, and spicy seasonings.",
      fr: "Attention aux allergies au sarrasin, au bouillon riche en sodium et aux sauces épicées.",
      ar: "احذر من حساسية الحنطة السوداء، والمرق عالي الصوديوم، والتوابل الحارة.",
      ru: "Остерегайтесь аллергии на гречиху, высокого содержания натрия в бульоне и острой приправы.",
      es: "Tenga cuidado con la alergia al sarraceno, el caldo alto en sodio y los condimentos picantes.",
      ja: "そばアレルギー、高ナトリウムスープ、刺激的な調味料の摂取にご注意ください。",
      zh: "请注意荞麦过敏、高钠汤汁以及刺激性调料的摄入。"
    }
  },
  {
    id: "summer-06",
    name: {
      ko: "팥빙수", en: "Patbingsu", fr: "Patbingsu", ar: "باتبينغسو",
      ru: "Патбинсу", es: "Patbingsu", ja: "パッピンス", zh: "红豆刨冰"
    },
    englishName: "Sweet Red Bean Shaved Ice",
    category: {
      ko: "국가대표 여름 디저트",
      en: "National Summer Dessert",
      fr: "Dessert National d'Été",
      ar: "حلوى الصيف الوطنية",
      ru: "Национальный летний десерт",
      es: "Postre Nacional de Verano",
      ja: "国家代表の夏デザート",
      zh: "国家代表夏日甜品"
    },
    categoryType: "dessert",
    summary: {
      ko: "팥빙수는 조선시대의 빙고와 얼음 저장 문화, 그리고 근대의 제빙 기술이 결합해 형성된 한국의 대표 여름 디저트입니다. 곱게 간 얼음 위에 팥, 떡, 연유 등을 더해 먹으며, 왕실과 특권층의 자원이던 얼음이 대중적인 계절 간식으로 확장된 흐름을 상징합니다.",
      en: "Patbingsu is a representative Korean summer dessert formed by the combination of Joseon Dynasty ice storage culture and modern ice-making technology. Served with red beans, rice cakes, and condensed milk over shaved ice, it symbolizes the democratization of ice from a royal privilege into a popular seasonal treat.",
      fr: "Le patbingsu est un dessert d'été coréen emblématique né de la fusion de la culture de stockage de glace de Joseon et de la technologie moderne de fabrication de glace. Composé de haricots rouges, de gâteaux de riz et de lait concentré sur de la glace pilée, il symbolise la démocratisation de la glace d'un privilège royal en un régal populaire.",
      ar: "باتبينغسو هي حلوى صيفية كورية شهيرة تشكلت من خلال الجمع بين ثقافة تخزين الجليد في عهد جوسون وتقنيات صنع الثلج الحديثة. تقدم مع الفاصوليا الحمراء وكعك الأرز والحليب المكثف فوق الثلج المبشور، وهي ترمز إلى تحول الجليد من امتياز ملكي إلى وجبة صيفية شعبية.",
      ru: "Патбинсу — знаменитый корейский летний десерт, созданный на стыке культуры хранения льда эпохи Чосон и современных технологий охлаждения. Он состоит из тертого льда со сладкой фасолью, рисовыми пирожками и сгущенным молоком, символизируя переход льда от королевской привилегии к общедоступному народному лакомству.",
      es: "El patbingsu es un postre de verano coreano clásico que combina la cultura de almacenamiento de hielo de la dinastía Joseon con la tecnología moderna de fabricación de hielo. Servido con frijoles rojos, pastel de arroz y leche condensada sobre hielo granizado, simboliza la democratización del hielo de un privilegio real a un dulce popular.",
      ja: "パッピンスは朝鮮時代の氷庫と氷の保存文化、そして近代の製氷技術が結合して形成された韓国の代表的な夏のデザートです。細かく削った氷の上に小豆、餅、練乳などをのせて食べ、王室や特権階級の資源であった氷が、大衆的な季節のスイーツへと広がった歴史を象徴しています。",
      zh: "红豆刨冰是将朝鲜王朝时期的冰库与储冰文化，与现代制冰技术相结合而形成的韩国代表性夏日甜点。在细密的刨冰上加入红豆、切糕和炼乳等食用，象征着曾作为王室和特权阶层专享资源的冰块，演变为大众化季节性点心的过程。"
    },
    culture: {
      ko: "팥빙수는 전통 식재료와 현대 기술이 결합된 하이브리드 디저트로, 여름철 한국 대중문화의 상징적 후식입니다.",
      en: "Patbingsu is a hybrid dessert blending traditional ingredients with modern technology, serving as an iconic sweet treat of Korean summer pop culture.",
      fr: "Le patbingsu est un dessert hybride combinant des ingrédients traditionnels et une technologie moderne, s'imposant comme le dessert emblématique de la culture estivale coréenne.",
      ar: "باتبينغسو هي حلوى هجينة تجمع بين المكونات التقليدية والتكنولوجيا الحديثة، وهي الحلوى الرمزية للثقافة الشعبية الصيفية الكورية.",
      ru: "Патбинсу — гибридный десерт, объединяющий традиционные ингредиенты и современные технологии, ставший ярким символом корейской летней поп-культуры.",
      es: "El patbingsu es un postre híbrido que fusiona ingredientes tradicionales con tecnología moderna, sirviendo como el postre insignia de la cultura popular veraniega coreana.",
      ja: "パッピンスは伝統的な食材と現代の技術が融合したハイブリッドデザートであり、夏の韓国大衆文化を象徴するスイーツです。",
      zh: "红豆刨冰是传统食材与现代技术相结合的混合型甜点，是韩国夏季大众文化的象征性甜品。"
    },
    caution: {
      ko: "당분과 열량, 연유·유제품 섭취량에 주의하세요.",
      en: "Be mindful of sugar, calories, and dairy/condensed milk intake.",
      fr: "Attention à la teneur en sucre, aux calories et à la consommation de lait concentré et de produits laitiers.",
      ar: "يرجى الانتباه إلى السعرات الحرارية والسكريات واستهلاك الحليب ومنتجات الألبان.",
      ru: "Следите за содержанием сахара, калорийностью и употреблением сгущенного молока и лактозы.",
      es: "Tenga cuidado con el azúcar, las calorías y el consumo de lácteos y leche condensada.",
      ja: "糖分やカロリー、練乳・乳製品の摂取量にご注意ください。",
      zh: "请注意控制糖分、热量以及炼乳和乳制品摄入量。"
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
      fr: "Combattre le froid par le froid (Protéines Végétales)", ar: "مكافحة البرد بالبرد (بروتين نباتي)",
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
      ja: "물에 불려 삶은 대두를 곱게 갈아 차게 식힌 국물에 소면을 말아 오이, 토마토 고명과 함께 먹는 식물성 고단백 여름 국수",
      zh: "将大豆浸泡并煮熟的大豆磨细后做成冰镇浓汤，放进挂面，配以黄瓜、西红柿丝食用的植物性高蛋白夏日面食"
    },
    culture: {
      ko: "19세기 말 조리서 『시의전서』에 '콩국'으로 처음 기록되었으며, 서민들이 고기 대신 밭에서 나는 소고기인 콩을 사용해 단백질과 수분을 동시에 보충하던 대중적 보양 철학이 깃들어 있습니다.",
      en: "First recorded in the 19th-century cookbook Siuijeonseo. It reflects the wisdom of commoners who relied on soybeans as 'meat from the field' to replenish protein and hydration.",
      fr: "Mentionné au XIXe siècle dans le Siuijeonseo. Il reflète la sagesse populaire qui utilisait le soja comme alternative économique à la viande.",
      ar: "سُجل لأول مرة في كتاب الطهي 'سيويجونسي' في القرن التاسع عشر. يعكس حكمة عامة الشعب الذين اعتمدوا على الصويا كبديل للحوم لتعويض البروتين وسوائل الجسم.",
      ru: "Впервые упоминается в поваренной книге XIX века «Сиуидженсо». Отражает народную мудрость использования сои («мяса с грядки») для восполнения сил.",
      es: "Registrado por primera vez en el libro de cocina del siglo XIX Siuijeonseo. Refleja la sabiduría del pueblo que dependía de la soja como proteína económica.",
      ja: "19세기 말의 요리서인 『시의전서』에 '콩국'으로 처음 기록되었으며, 서민들이 고기 대신 '밭에서 나는 소고기'인 콩을 사용해 단백질과 수분을 동시에 보충하던 서민적 보양 철학이 깃든 요리입니다.",
      zh: "在19世纪末的烹饪书《是议全书》中首次被记录为“豆汤”，蕴含着平民用被誉为“田间牛肉”的大豆来代替肉类，同时补充蛋白质与水分的民间滋补智慧。"
    },
    caution: {
      ko: "대두(콩) 알레르기가 있는 분은 피해야 하며, 일부 지역처럼 설탕을 과도하게 추가할 경우 급격한 혈당 상승을 부를 수 있으니 소금 간 위주를 권장합니다.",
      en: "Avoid if you have a soy allergy. Adding too much sugar (common in some regions) can cause blood sugar spikes; seasoning with salt is recommended.",
      fr: "À éviter en cas d'allergie au soja. Ajouter trop de sucre (courant dans certaines régions) peut faire grimper la glycémie ; préférez le sel.",
      ar: "تجنب تناوله إذا كان لديك حساسية من الصويا. إضافة الكثير من السكر (شائع في بعض المناطق) قد يرفع نسبة السكر؛ ينصح باستخدام الملح.",
      ru: "Противопоказано людям с аллергией на сою. Добавление большого количества сахара (популярное в ряде регионов) может повысить сахар; лучше солить.",
      es: "Evitar en caso de alergia a la soja. Agregar azúcar en exceso (común en algunas regiones) puede elevar la glucemia; se recomienda sazonar con sal.",
      ja: "콩 알레르기가 있는 분은 섭취를 피해야 하며, 일부 지역처럼 설탕을 과도하게 추가할 경우 급격한 혈당 상승을 초래할 수 있으니 소금 위주로 간을 맞추는 것을 권장합니다.",
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
      ja: "以冷治冷（水分と清涼感）", zh: "顺水与清凉"
    },
    categoryType: "cold",
    summary: {
      ko: "채 썬 오이에 차가운 물을 붓고 소금, 간장, 식초로 새콤달콤하게 밑간을 해 얼음을 띄워 밥과 먹는 냉반찬",
      en: "A refreshing side dish of thinly sliced cucumbers in a chilled vinegar-based broth with ice cubes.",
      fr: "Un plat d'accompagnement rafraîchissant de concombres émincés dans un bouillon vinaigré glacé.",
      ar: "طبق جانبي منعش من الخيار المقطع رقيقاً في مرق خل بارد مع مكعبات الثلج.",
      ru: "Освежающая закуска из тонко нарезанных огурцов в ледяном бульоне на основе уксуса с кусочками льда.",
      es: "Un plato de acompañamiento refrescante de pepinos en rodajas finas en un caldo de vinagre frío con hielo.",
      ja: "千切りにしたきゅうりに冷たい水を注ぎ、塩, 醤油, 酢で甘酸っぱく味付けして氷を浮かべ、ご飯と食べる冷たいおかず",
      zh: "在切好的黄瓜丝中浇入冷水，用盐、酱油、醋调出酸甜风味，放入冰块，配饭食用的冷凉小菜"
    },
    culture: {
      ko: "열을 가하지 않아 부엌 노동자의 고초를 줄여주는 배려가 담겨있으며, 땀으로 손실된 수분과 전해질(나트륨, 칼륨)을 빠르게 보충해 여름철 농번기 일꾼들의 필수 반찬이었습니다.",
      en: "Saves kitchen workers from heat by requiring no stove cooking, and restores water and electrolytes lost through sweat during farm labor.",
      fr: "Épargne la chaleur aux cuisiniers en ne nécessitant pas de cuisson, et restaure l'eau et les électrolytes perdus pendant le travail agricole.",
      ar: "يقي الطهاة من الحرارة لعدم حاجته إلى الطهي على الموقد، ويعوض الماء والمعادن المفقودة بالتعرق أثناء العمل الزراعي.",
      ru: "Готовится без термической обработки, что облегчало труд на кухне. Быстро восполняет потерю влаги и электролитов при тяжелой работе в поле.",
      es: "Evita el uso de la estufa, protegiendo del calor a quien cocina. Restaura el agua y los electrolitos perdidos por el sudor en las faenas agrícolas.",
      ja: "불을 쓰지 않고 요리하여 조리하는 사람에 대한 배려가 담겨 있으며, 땀으로 손실된 수분과 전해질을 빠르게 보충해 여름철 농번기 일꾼들에게 없어서는 안 될 소중한 반찬이었습니다.",
      zh: "无需加热调理，体现了减轻厨房劳作辛苦的体贴之情。能快速补充因流汗而流失的水分和电解质，曾是夏日农忙期工人们必不可少的配菜。"
    },
    caution: {
      ko: "만성 신장 질환 등으로 칼륨 섭취 제한이 필요한 환자는 오이의 높은 칼륨 성분을 유의해야 하며, 짜게 먹지 않도록 나트륨 염도를 낮추는 것이 좋습니다.",
      en: "Patients with chronic kidney disease who restrict potassium intake should be cautious. Keep sodium levels in check to avoid hypertension risk.",
      fr: "Les patients atteints d'insuffisance rénale chronique devant limiter le potassium doivent être prudents. Modérez le sodium.",
      ar: "يجب على مرضى الكلى الذين يتبعون نظاماً يحد من البوتاسيوم توخي الحذر. ينصح بتقليل الصوديوم لتجنب مخاطر ضغط الدم.",
      ru: "Пациентам с почечной недостаточностью следует помнить о высоком содержании калия в огурцах. Не делайте бульон слишком соленым.",
      es: "Pacientes con enfermedad renal crónica que restringen el potasio deben tener precaución. Modere el sodio para evitar riesgos de hipertensión.",
      ja: "만성 신장 질환 등으로 인해 칼륨 섭취를 제한해야 하는 환자는 오이의 높은 칼륨 성분에 유의해야 하며, 싱겁게 먹기 위해 나트륨 농도를 낮추어 섭취하는 것이 바람직합니다.",
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
      ja: "伝統の飲清類（五色の風流）", zh: "五色与五风"
    },
    categoryType: "dessert",
    summary: {
      ko: "오미자를 찬물에 우려내 단맛을 더한 후 배, 수박, 잣 등의 제철 고명을 아름답게 띄워 마시는 전통 음료",
      en: "A colorful fruit punch made with a base of steeped omija (five-flavor berry) water or honey water, topped with seasonal fruits and pine nuts.",
      fr: "Un punch aux fruits coloré à base d'infusion froide d'omija (baie aux cinq saveurs) ou d'eau miellée, garni de fruits et pignons.",
      ar: "شروب فواكه ملون يعتمد على ماء الأوميجا المنقوع أو ماء العسل، مغطى بالفواكه الموسمية وحبات الصنوبر.",
      ru: "Освежающий пунш на основе настоя лимонника (омиджа) или медовой воды с добавлением сезонных фруктов и кедровых орешков.",
      es: "Ponche de frutas colorido hecho con infusión fría de omija o agua con miel, coronado con frutas de temporada y piñones.",
      ja: "오미자를 찬물에 우려내 단맛을 더한 후 배, 수박, 잣 등의 제철 고명을 아름답게 띄워 마시는 전통 음료",
      zh: "用凉水将五味子浸泡出味后调入甜味，再精美地浮放梨、西瓜、松子等时令配料饮用的传统饮品"
    },
    culture: {
      ko: "조선시대 단오와 유두 등의 세시 절식으로 애용되었으며, 임금이 신하에게 하사하던 '제호탕' 및 풍류 문화에서 비롯되어 오색(五色)과 오미(五味)의 한식 철학을 대표합니다.",
      en: "Enjoyed as a seasonal treat during festivals like Dano and Yudu in Joseon. It reflects the philosophy of Five Colors and Five Flavors (Obangsaek & Omi).",
      fr: "Savouré lors de fêtes traditionnelles comme Dano sous Joseon. Il reflète la philosophie des Cinq Couleurs et des Cinq Saveurs.",
      ar: "تم الاستمتاع به كحلوى موسمية خلال أعياد مثل 'دانو' في عهد جوسون. يعكس فلسفة الألوان الخمسة والنكهات الخمسة.",
      ru: "Праздничный напиток эпохи Чосон (на праздники Тано и Юду). Отражает философию пяти цветов (обангсэк) и пяти вкусов (оми).",
      es: "Disfrutado como manjar de temporada en festivales como Dano bajo Joseon. Refleja la filosofía de los Cinco Colores y Cinco Sabores.",
      ja: "조선시대 단오와 유두 등의 세시 절식으로 애용되었으며, 임금이 신하에게 하사하던 '제호탕' 및 풍류 문화에서 비롯되어 오색(五色)과 오미(五味)의 한식 철학을 대표합니다.",
      zh: "曾是昔日端午和流头等节日的重要节令食品。源自国王赏赐给臣子的“醍醐汤”及文人雅士的风流文化，代表了韩食“五色”与“五味”的哲学。"
    },
    caution: {
      ko: "과일의 과당과 추가된 단맛(설탕, 꿀)이 많아 당뇨 환자는 섭취 시 주의해야 하며, 오미자는 신맛이 강해 위산 과다 환자는 연하게 우려 드셔야 합니다.",
      en: "High in fructose from fruits and added sugars (honey, sugar). Diabetics should be cautious. The acidic nature of omija may irritate sensitive stomachs.",
      fr: "Riche en fructose et en sucres ajoutés (miel, sucre). Les diabétiques doivent faire attention. L'acidité de l'omija peut irriter l'estomac.",
      ar: "غني بالفركتوز من الفواكه والسكريات المضافة (العسل، السكر). يجب على مرضى السكري الحذر. قد تهيج حموضة الأوميجا المعدة الحساسة.",
      ru: "Содержит много фруктозы и добавленного сахара. Диабетикам следует быть осторожными. Кислота лимонника может раздражать чувствительный желудок.",
      es: "Alto en fructosa de las frutas y azúcares añadidos. Los diabéticos deben tener precaución. La naturaleza ácida de la omija puede irritar estómagos sensibles.",
      ja: "과일의 과당과 추가된 단맛(설탕, 꿀)이 많아 당뇨 환자는 섭취 시 주의해야 하며, 오미자는 신맛이 강해 위산 과다 환자는 연하게 우려 드셔야 합니다.",
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
      ru: "Питательный и сытный", es: "Bebida tradicional (Nutritiva y rápida)",
      ja: "伝統の飲清類（救荒と簡便）", zh: "传统备荒与便捷"
    },
    categoryType: "dessert",
    summary: {
      ko: "보리, 콩, 찹쌀 등 다양한 통곡물을 찌고 볶아 말린 후 가루 내어 시원한 물에 타 먹는 구수한 슬로우 푸드",
      en: "A nutritious, comforting shake made of roasted mixed grains (barley, soybeans, rice) mixed into cold water or milk.",
      fr: "Une boisson nutritive à base de céréales mélangées et grillées (orge, soja, riz) mélangées à de l'eau froide ou du lait.",
      ar: "مشروب مغذٍ ومريح مصنوع من حبوب محمصة مشكلة (شعير، صويا، أرز) مخلوطة بالماء البارد أو الحليب.",
      ru: "Питательный коктейль из смеси обжаренных злаков (ячмень, соя, рис), разведенных в холодной воде или молоке.",
      es: "Bebida nutritiva a base de granos tostados (cebada, soja, arroz) mezclados con agua fría o leche.",
      ja: "보리, 콩, 찹쌀 등 다양한 곡물을 찌고 볶아 말린 후 가루 내어 찬물에 타 먹는 구수한 슬로우 푸드",
      zh: "将大麦、大豆、糯米等多种全谷物蒸熟炒干并磨成粉后，冲入凉水饮用的香浓慢食"
    },
    culture: {
      ko: "옛날 보릿고개를 넘기던 서민들의 든든한 요기이자, 승려나 전장 장수들의 훌륭한 휴대용 비상식량으로 한국인의 검약한 지혜를 대변하는 구수한 곡물 유산입니다.",
      en: "Historically used as an emergency food during spring barley shortages and by travelers or soldiers for its long preservation and high satiety.",
      fr: "Historiquement utilisé comme aliment d'urgence lors des pénuries et par les voyageurs ou soldats pour sa longue conservation.",
      ar: "استخدم تاريخياً كطعام طوارئ خلال فترات نقص الشعير ومن قبل المسافرين أو الجنود نظراً لإمكانية حفظه الطويل وإشباعه العالي.",
      ru: "Исторически служил сухим пайком для путников, монахов и воинов благодаря длительному хранению и быстрому насыщению.",
      es: "Usado históricamente como alimento de emergencia durante la escasez y por viajeros o soldados debido a su larga conservación y alta saciedad.",
      ja: "옛날 보릿고개를 넘기던 서민들의 든든한 요기이자, 승려나 전장 장수들의 훌륭한 휴대용 비상식량으로 한국인의 검약한 지혜를 대변하는 구수한 곡물 유산입니다.",
      zh: "曾是昔日度过“春荒（青黄不接时期）”的平民们坚实的充饥之物，也是僧侣或战场将领极佳的携带型应急口粮，是代表韩国人勤俭智慧的香浓谷物遗产。"
    },
    caution: {
      ko: "통곡물 가루는 영양 농축도가 높아 체중 조절 시 과도한 당류(꿀, 설탕) 첨가를 주의해야 하며, 소화력이 떨어지면 갑작스러운 복부 팽만감을 느낄 수 있습니다.",
      en: "Highly concentrated in nutrients. Watch out for added sugars (honey, sugar) when managing weight. Overconsumption may cause bloating for sensitive stomachs.",
      fr: "Très concentré en nutriments. Attention aux sucres ajoutés (miel) si vous surveillez votre poids. Peut causer des ballonnements.",
      ar: "مركز جداً بالمواد الغذائية. احذر من السكريات المضافة (العسل) عند مراقبة الوزن. قد يسبب الإفراط في تناوله انتفاخاً للمعدة الحساسة.",
      ru: "Высокая концентрация питательных веществ. При похудении избегайте добавления сахара или меда. Может вызвать вздутие живота.",
      es: "Muy concentrado en nutrientes. Cuidado con los azúcares añadidos si controla su peso. Puede causar hinchazón en estómagos sensibles.",
      ja: "통곡물 가루는 영양 농축도가 높아 체중 조절 시 과도한 당류(꿀, 설탕) 첨가를 주의해야 하며, 소화력이 떨어지면 갑작스러운 복부 팽만감을 느낄 수 있습니다.",
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
    ko: "이열치열과 이냉치냉, 보양과 청량, 풍속과 영양이 한 그릇 안에서 만나는 한국 여름 식문화의 정수를 소개합니다. 삼계탕, 육개장, 초계탕, 임자수탕, 냉면, 팥빙수, 콩국수, 오이냉국, 화채, 미숫가루를 통해 계절에 응답하는 한국의 지혜를 살펴봅니다.",
    en: "Exploring the essence of Korean summer dining culture where hot nourishment, cool refreshment, customs, and nutrition meet in a single bowl. Discover the wisdom of responding to the seasons.",
    fr: "Découvrez l'essence de la culture culinaire estivale coréenne, où le réconfort chaud, le rafraîchissement frais, les coutumes et la nutrition se rencontrent dans un seul bol.",
    ar: "استكشاف جوهر ثقافة الطعام الصيفية الكورية حيث يلتقي الغذاء الساخن، والانتعاش البارد، والعادات، والتغذية في وعاء واحد.",
    ru: "Погрузитесь в суть летней корейской кухни, где в одной пиале соединяются горячее насыщение, прохлада, традиции и питательность.",
    es: "Explorando la esencia de la cultura culinaria coreana de verano, donde la nutrición caliente, el refresco frío, las costumbres y la nutrición se encuentran en un solo plato.",
    ja: "熱い補養、冷たい清涼、風習、栄養が一杯の中に融合する韓国の夏の食文化の真髄を探求します。",
    zh: "探索韩国夏日饮食文化的精髓，在碗中领略温热滋补、防暑降温、传统习俗与均衡营养的融合。"
  },
  body: {
    ko: `## 여름, 한 그릇에 담긴 한국의 지혜

무더운 계절을 버티는 법은 단순히 시원한 것을 먹는 데 있지 않았습니다. 한국의 여름 음식은 뜨거운 국물로 기운을 보하는 이열치열, 차가운 국물로 열을 식히는 이냉치냉, 그리고 제철 재료로 몸의 균형을 되찾는 생활의 지혜를 함께 담아왔습니다.

삼계탕과 육개장 같은 보양식, 초계탕과 임자수탕 같은 냉보양식, 오이냉국과 화채, 미숫가루 같은 여름 음청류에 이르기까지 한국의 여름 음식은 계절에 순응하며 몸을 돌보는 방식의 총합이라 할 수 있습니다. 이 페이지는 여름철 한국인이 즐겨온 열 가지 음식을 통해 그 기원, 문화, 조리의 의미, 그리고 오늘날의 시선에서 살펴야 할 주의점까지 함께 소개합니다.

## 한국 여름 음식의 두 가지 지혜

### 이열치열
더운 계절에 뜨거운 음식을 먹고 땀을 내며 몸의 순환을 돕는 방식입니다. 삼계탕과 육개장은 여름철 대표적인 이열치열 음식으로, 기력을 보충하고 무더위 속에서 지친 몸을 추스르는 보양의 상징으로 자리해 왔습니다.

### 이냉치냉
차가운 국물과 시원한 재료로 몸의 열감을 가라앉히고 입맛을 되살리는 방식입니다. 초계탕, 임자수탕, 냉면, 팥빙수, 콩국수, 오이냉국 등은 여름철 냉보양과 청량함의 지혜를 잘 보여주는 음식들입니다.

## 여름철 한국음식 10선

### 1. 삼계탕
영계와 인삼, 찹쌀, 대추를 함께 고아낸 삼계탕은 가장 뜨거운 날 가장 뜨거운 보양으로 몸을 다스리는 한국 여름 음식의 상징입니다. 복날의 절식으로 자리 잡은 이 음식은 기력을 보충하는 의미와 계절의 고비를 넘는 의례적 성격을 함께 지닙니다.  
라벨: 이열치열 · 보양식  
주의 포인트: 국물 섭취량, 나트륨, 약재 성분에 대한 개인 민감도 확인

### 2. 육개장
소고기와 대파, 붉은 국물이 어우러진 육개장은 얼큰한 열감으로 몸을 깨우는 여름철 보양탕입니다. 강한 맛 and 향을 통해 입맛을 되살리고 땀의 순환을 돕는다는 점에서 한국식 여름 국물 문화의 또 다른 축을 이룹니다.  
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
이냉치냉의 미학이 담긴 한국의 대표 여름 면요리. 냉면은 본래 한반도 북부에서 메밀을 주재료로 겨울에 즐기던 음식이었으나, 오늘날에는 여름을 대표하는 한국의 냉면 문화로 자리 잡았습니다. 평양의 담백한 물냉면, 함흥의 매콤한 비빔냉면, 진주냉면, 그리고 피란의 역사 속에서 파생된 부산 밀면까지 다양한 계보를 품고 있으며, 한국인의 계절 감각과 지역성이 응축된 음식입니다.  
라벨: 여름철 대표 면요리  
주의 포인트: 메밀 알레르기, 고나트륨 육수, 자극적인 양념 섭취에 주의하세요.

### 6. 팥빙수
조선의 얼음 문화에서 국민 디저트로 이어진 여름의 달콤함. 팥빙수는 조선시대의 빙고와 얼음 저장 문화, 그리고 근대의 제빙 기술이 결합해 형성된 한국의 대표 여름 디저트입니다. 곱게 간 얼음 위에 팥, 떡, 연유 등을 더해 먹으며, 왕실과 특권층의 자원이던 얼음이 대중적인 계절 간식으로 확장된 흐름을 상징합니다.  
라벨: 국가대표 여름 디저트  
주의 포인트: 당분과 열량, 연유·유제품 섭취량에 주의하세요.

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
The approach of soothing heat and stimulating appetite with cold broths and cooling ingredients. Chogyetang, Imjasutang, Naengmyeon, Patbingsu, Kongguksu, and Oi-naengguk showcase this refreshing logic.

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
Chilled buckwheat noodles served in cold broth or spicy seasoning, uniquely developed across different regions.  
Label: Fighting Cold with Cold · Buckwheat Noodles  
Caution points: Buckwheat allergy and portion control for high-sodium broth.

### 6. Patbingsu
Finely shaved ice topped with sweet red beans, chewy rice cakes, and condensed milk. Reflecting a rich history from royal ice storehouses to modern milk snow flakes, it is the ultimate sweet summer dessert.  
Label: Traditional Dessert · Shaved Ice  
Caution points: High sugar and calorie content; check lactose tolerance for dairy toppings.

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

While modern diners must weigh nutritional details and personal health, the seasonal sentiments and cultural values of these meals remain timeless. A single summer bowl holds more than taste; it holds age-old wisdom on adapting to climate and caring for the community.`,
    fr: `## L'été, la Sagesse Capturée dans un Bol

Survivre à la canicule ne consiste pas seulement à consommer des boissons fraîches. La cuisine d'été coréenne incarne la sagesse de « combattre le chaud par le chaud » (utiliser des soupes chaudes pour restaurer l'énergie) et de « combattre le froid par le froid » (utiliser des plats froids pour abaisser la température corporelle), aux côtés d'ingrédients saisonniers qui rééquilibrent l'organisme.

Des soupes chaudes nourrissantes comme le Samgyetang et le Yukgaejang aux repas froids restaurateurs comme le Chogyetang et l'Imjasutang, et aux boissons d'été comme l'Oi-naengguk, le Hwachae et le Misutgaru, la cuisine d'été coréenne représente une méthode holistique de soins personnels en harmonie avec la nature. Cette page présente dix plats appréciés des Coréens, explorant leurs origines, leur culture, leur importance et leurs précautions d'un point de vue moderne.

## Deux Concepts Clés de la Cuisine d'Été Coréenne

### Combattre le chaud par le chaud
La méthode consistant à consommer des aliments chauds par temps chaud pour induire la transpiration et faciliter la circulation du corps. Le Samgyetang et le Yukgaejang en sont des exemples classiques, servant de symboles de restauration de l'énergie vitale et de guérison des corps épuisés.

### Combattre le froid par le froid
L'approche consistant à apaiser la chaleur et à stimuler l'appétit avec des bouillons froids et des ingrédients rafraîchissants. Le Chogyetang, l'Imjasutang, le Naengmyeon, le Patbingsu, le Kongguksu et l'Oi-naengguk illustrent cette logique rafraîchissante.

## 10 Plats Coréens d'Été

### 1. Samgyetang
Un poulet entier mijoté avec du ginseng, du riz gluant et des jujubes. Le Samgyetang est le symbole de la nutrition estivale coréenne, soignant les jours les plus chauds avec les aliments les plus chauds. Établi comme une coutume pour les jours de canicule, il restaure la vitalité et revêt une importance cérémonielle.  
Label : Combattre le chaud par le chaud · Soupe Nourrissante  
Points de vigilance : Contrôle des portions, teneur en sodium et vérification de la sensibilité personnelle aux herbes médicinales.

### 2. Yukgaejang
Soupe de bœuf épicée cuite avec du bœuf effiloché et des oignons verts. Son bouillon rouge ardent réveille le corps, stimule l'appétit grâce à des saveurs audacieuses et favorise une circulation saine par la transpiration.  
Label : Combattre le chaud par le chaud · Ragoût Épicé  
Points de vigilance : Ajustement de la salinité et du niveau de piquant.

### 3. Chogyetang
Soupe de poulet froide au vinaigre et à la moutarde. Elle montre l'essence de la nutrition estivale froide, où le bouillon acidulé et frais réveille l'appétit perdu tandis que la viande de poulet sert de source de protéines maigres.  
Label : Combattre le froid par le froid · Restauration Froide  
Points de vigilance : Limiter la consommation en cas de sensibilité à l'acidité ou à la moutarde.

### 4. Imjasutang
Poulet effiloché dans un bouillon froid de sésame grillé. C'était un mets estival raffiné pour la cour royale et les familles nobles, alliant saveur de noisette, texture riche et élégance visuelle avec des garnitures colorées.  
Label : Combattre le froid par le froid · Nutrition Froide Royale  
Points de vigilance : Vérifier l'allergie au sésame et la digestibilité du bouillon riche.

### 5. Naengmyeon
Nouilles de sarrasin froides servies dans un bouillon glacé ou avec une sauce épicée, développées de manière unique selon les régions.  
Label : Combattre le froid par le froid · Nouilles de Sarrasin  
Points de vigilance : Allergie au sarrasin et contrôle des portions pour le bouillon riche en sodium.

### 6. Patbingsu
Glace finement pilée garnie de haricots rouges sucrés, de gâteaux de riz et de lait concentré. Reflétant une riche histoire des glacières royales aux flocons de neige modernes, c'est le dessert estival sucré ultime.  
Label : Dessert Traditionnel · Glace Pilée  
Points de vigilance : Haute teneur en sucre et en calories ; vérifier la tolérance au lactose pour les garnitures laitières.

### 7. Kongguksu
Nouilles dans une soupe crémeuse et froide de soja. Ce repas végétal riche en protéines repose sur la saveur pure du soja fraîchement moulu, montrant la sagesse de nourrir le corps sans l'alourdir.  
Label : Combattre le froid par le froid · Protéines Végétales  
Points de vigilance : Allergie au soja et confort digestif.

### 8. Oi-naengguk
Soupe froide de concombre ne nécessitant pas de cuisson, facilitant le travail en cuisine. Les concombres émincés dans un bouillon de vinaigre glacé offrent un plat d'accompagnement propre, croquant et rafraîchissant.  
Label : Soupe Froide Hydratante · Plat Quotidien  
Points de vigilance : Contrôler les quantités de sel et de sauce soja.

### 9. Hwachae
Un punch aux fruits coloré à base d'infusion d'omija ou d'eau miellée, garni de fruits de saison. Représentant l'harmonie des cinq couleurs et des cinq saveurs (Obangsaek & Omi), c'est une façon sensorielle d'apprécier la saison.  
Label : Boisson Traditionnelle · Dessert Saisonnier  
Points de vigilance : Surveiller la teneur en sucre et en édulcorants.

### 10. Misutgaru
Boisson de céréales grillées mélangées représentant la préparation et l'économie. Ce slow food rassasiant étanche la soif et calme la faim, servant d'héritage céréalier de frugalité.  
Label : Shake Traditionnel · Substitut de Repas  
Points de vigilance : Surveiller les sucres ajoutés et les calories des céréales.

## Une Culture Culinaire en Harmonie avec les Saisons

Les plats d'été coréens ne sont pas de simples éléments pour se rafraîchir. Ce sont des techniques quotidiennes pour restaurer les corps fatigués, s'adapter aux flux saisonniers et reconstruire la vitalité. La coexistence du chaud et du froid, de la nutrition et du rafraîchissement, est la caractéristique ultime de cette culture culinaire.

Alors que les convives modernes doivent évaluer les détails nutritionnels et la santé personnelle, les sentiments saisonniers et les valeurs culturelles de ces repas restent intemporels. Un simple bol d'été contient plus que du goût ; il contient une sagesse séculaire sur l'adaptation au climat et le soin de la communauté.`,
    es: `## El Verano, la Sabiduría Capturada en un Solo Plato

Sobrevivir al calor sofocante no consiste solo en consumir cosas frías. La comida coreana de verano encarna la sabiduría de "combatir el calor con calor" (usar sopas calientes para restaurar la energía) y "combatir el frío con frío" (usar platos fríos para reducir el calor corporal), junto con ingredientes de temporada que reequilibran el cuerpo.

Desde sopas calientes nutritivas como Samgyetang y Yukgaejang hasta comidas frías restauradoras como Chogyetang e Imjasutang, y bebidas de verano como Oi-naengguk, Hwachae y Misutgaru, la comida coreana de verano representa un método integral de autocuidado en sintonía con la naturaleza. Esta página presenta diez platos disfrutados por los coreanos, explorando sus orígenes, cultura, importancia y precauciones desde un punto de vista moderno.

## Dos Conceptos Claves de la Comida Coreana de Verano

### Combatir el calor con calor
El método de consumir alimentos calientes en clima cálido para inducir la sudoración y ayudar a la circulación del cuerpo. El Samgyetang y el Yukgaejang son ejemplos clásicos, sirviendo como símbolos de restauración de la energía vital y curación de cuerpos agotados.

### Combatir el frío con frío
El enfoque de calmar el calor y estimular el apetito con caldos fríos e ingredientes refrescantes. El Chogyetang, el Imjasutang, el Naengmyeon, el Patbingsu, el Kongguksu y el Oi-naengguk muestran esta lógica refrescante.

## 10 comidas coreanas de verano

### 1. Samgyetang
Un pollo joven entero cocido a fuego lento con ginseng, arroz glutinoso y azufaifas. El Samgyetang es el símbolo de la nutrición veraniega coreana, tratando los días más calurosos con la comida más caliente. Establecido como una costumbre para los días de canícula, restaura la vitalidad y tiene un significado ceremonial.  
Etiqueta: Combatir el calor con calor · Sopa Nutritiva  
Puntos de precaución: Control de porciones, niveles de sodio y verificación de la sensibilidad personal a las hierbas medicinales.

### 2. Yukgaejang
Sopa picante de ternera cocida con carne deshebrada y cebolletas. Su caldo rojo ardiente despierta el cuerpo, estimula el apetito a través de sabores audaces y promueve una circulación saludable a través del sudor.  
Etiqueta: Combatir el calor con calor · Caldo Picante  
Puntos de precaución: Ajustes en los niveles de sal y picante.

### 3. Chogyetang
Sopa fría de pollo con vinagre y mostaza. Muestra la esencia de la nutrición fría de verano, donde el caldo picante y fresco despierta el apetito perdido mientras que la carne de pollo sirve como fuente de proteína magra.  
Etiqueta: Combatir el frío con frío · Restauración Fría  
Puntos de precaución: Controlar el consumo si es sensible a la acidez o al picante de la mostaza.

### 4. Imjasutang
Pollo deshebrado en un caldo frío de sésamo tostado. Era un manjar de verano refinado para la corte real y las familias nobles, combinando sabor a nuez, textura rica y elegancia visual con guarniciones coloridas.  
Etiqueta: Combatir el frío con frío · Nutrición Fría Real  
Puntos de precaución: Verificar la alergia al sésamo y la idoneidad digestiva del caldo rico.

### 5. Naengmyeon
Fideos fríos de sarraceno servidos en caldo frío o con salsa picante, desarrollados de forma única por región.  
Etiqueta: Combatir el frío con frío · Fideos de Sarraceno  
Puntos de precaución: Alergia al sarraceno y control de porciones para el caldo alto en sodio.

### 6. Patbingsu
Hielo finamente granizado cubierto con frijoles rojos dulces, pasteles de arroz y leche condensada. Reflejando una rica historia desde los almacenes reales de hielo hasta los granizados de nieve modernos, es el postre dulce definitivo de verano.  
Etiqueta: Postre Tradicional · Hielo Granizado  
Puntos de precaución: Alto contenido de azúcar y calorías; verificar la tolerancia a la lactosa para los ingredientes lácteos.

### 7. Kongguksu
Fideos en una sopa de soja fría y cremosa. Esta comida vegetal rica en proteínas se basa en el sabor puro de la soja recién molida, mostrando la sabiduría de llenar el cuerpo sin causar pesadez.  
Etiqueta: Combatir el frío con frío · Proteína Vegetal  
Puntos de precaución: Alergia a la soja y verificar el confort digestivo.

### 8. Oi-naengguk
Sopa fría de pepino que no requiere fuego para cocinar, facilitando el trabajo de los cocineros. Pepinos en rodajas finas en un caldo de vinagre helado ofrecen un acompañamiento limpio, crujiente y refrescante.  
Etiqueta: Sopa Fría Hidratante · Plato Diario  
Puntos de precaución: Controlar las cantidades de sal y salsa de soja.

### 9. Hwachae
Un ponche de frutas colorido hecho con omija o agua con miel coronado con frutas de temporada. Representando la armonía de los cinco colores y los cinco sabores (Obangsaek y Omi), es una forma sensorial de disfrutar de la estación.  
Etiqueta: Bebida Tradicional · Postre de Temporada  
Puntos de precaución: Cuidar el contenido de azúcar y edulcorantes.

### 10. Misutgaru
Batido de granos tostados que representa preparación y economía. Esta bebida saciante apaga la sed y el hambre, sirviendo como un legado de frugalidad basado en granos.  
Etiqueta: Batido Tradicional · Sustituto de Comida  
Puntos de precaución: Cuidar los azúcares añadidos y las calorías de los granos.

## Una Cultura Culinaria que Responde a las Estaciones

Los platos coreanos de verano no son meros elementos para refrescarse. Son técnicas cotidianas para restaurar los cuerpos fatigados, adaptarse a los flujos estacionales y reconstruir la vitalidad. La coexistencia de frío y calor, nutrición y refrigerio, es la característica definitiva de esta cultura gastronómica.

Aunque los comensales modernos deben sopesar los detalles nutricionales y la salud personal, los sentimientos estacionales y los valores culturales de estas comidas siguen siendo atemporales. Un solo plato de verano contiene más que sabor; contiene una sabiduría ancestral sobre cómo adaptarse al clima y cuidar de la comunidad.`,
    ja: `## 夏、一器に込められた韓国の知恵

猛暑を乗り切る方法は、単に冷たいものを食べるだけではありません。韓国の夏の料理には、熱いスープで気力を補う「以熱治熱」、冷たいスープで熱を冷ます「以冷治冷」、そして旬の食材で体のバランスを整える生活の知恵が込められています。

参鶏湯やユッケジャンのような補養食から、チョゲタンやイムジャスタンなどの冷たい補養食、그리고 オイネングク、ファチェ、ミスッカルなどの夏の飲料に至るまで、韓国の夏の料理は季節に順応しながら体を労わる方法の集大成です。このページでは、韓国人が愛してきた10の料理を通じて、その起源、文化、調理の意義、そして現代の視点から注意すべき点まで紹介します。

## 韓国の夏の食文化における二つの知恵

### 以熱治熱（熱を以て熱を治す）
暑い季節に熱い料理を食べて汗を流し、体の循環を助ける方法です。参鶏湯とユッケジャンはその代表例であり、気力を補給し、暑さで疲れた体を回復させる補養の象徴として親しまれてきました。

### 以冷治冷（冷を以て冷を治す）
冷たいスープや清涼感のある食材で体の熱を下げ、食欲を取り戻す方法です。チョゲタン、イムジャスタン、冷麺、パッピンス、コングクス、オイネングクなどは、夏の冷たい補養と清涼感の知恵を示す代表的な料理です。

## 夏のごちそう10選

### 1. 参鶏湯
若鶏に高麗人参、もち米、ナツメを詰めて煮込んだ参鶏湯は、最も暑い日に最も熱い料理で体を整える韓国の夏の補養食の象徴です。三伏の節食として定着したこの料理は、気力を補う意味と季節を乗り越える儀礼的な性格を持ち合わせています。  
ラベル：以熱治熱 · 補養食  
注意ポイント：スープの摂取量、塩分、漢方成分に対する個人の敏感度の確認。

### 2. ユッケジャン
牛肉と大ネギ、赤いスープが調和したユッケジャンは、ピリ辛の熱気で体を呼び覚ます夏の補養スープです。強い味と香りで食欲をそそり、汗の循環を助けるという点で、韓国の夏のスープ文化のもう一つの柱となっています。  
ラベル：以熱治熱 · 辛口スープ  
注意ポイント：塩分と辛さの調節。

### 3. チョゲタン
冷たく冷ました鶏出汁に酢とからしの味を加えたチョゲタンは、夏の冷たい補養の真髄を示す料理です。甘酸っぱく涼しいスープは暑さで鈍った食欲を刺激し、鶏肉はさっぱりとしたタンパク質補給の役割を果たします。  
ラベル：以冷治冷 · 冷補養食  
注意ポイント：酸味やからしの辛さに敏感な場合は摂取量を調節してください。

### 4. イムジャスタン
細かく挽いた胡麻と鶏出汁を混ぜて冷たく楽しむイムジャスタンは、宮廷や両班（貴族）の洗練された夏の補養食です。香ばしい風味と落ち着いた質感、五色のトッピングが与える視覚的な美しさまで兼ね備え、夏の料理にも気品と真心を込めた伝統を示しています。  
ラベル：以冷治冷 · 宮廷冷補養食  
注意ポイント：胡麻アレルギーと濃厚なスープの消化適性をご確認ください。

### 5. 冷麺
そば麺を主原料に、冷たいスープや辛いタレを合わせ、地域や気候に応じて独創的な形で発展した韓国の代表的な夏の麺料理。  
ラベル：以冷治冷 · 麺料理  
注意ポイント：そばアレルギー、高塩分スープの摂取量調節。

### 6. パッピンス
朝鮮時代の氷庫と氷の保存文化、そして近代の製氷技術が結合して形成された韓国の代表的な夏のデザートです。細かく削った氷の上に小豆、餅、練乳などをのせて食べ、王室や特権階級の資源であった氷が、大衆的な季節のスイーツへと広がった歴史を象徴しています。  
ラベル：伝統飲料 · かき氷デザート  
注意ポイント：糖分やカロリーの過剰摂取注意、乳糖不耐症の確認。

### 7. コングクス
挽いた大豆の香ばしさと冷たいスープが特徴のコングクスは、植物性タンパク質を中心としたさっぱりとした夏の食事です。刺激的な味の代わりに、素材の密度と香ばしさで勝負し、夏でも体を重くせずに満たす韓国料理の知혜を示しています。  
ラベル：以冷治冷 · 植物性補養食  
注意ポイント：大豆アレルギーおよび消化の敏感性をご確認ください。

### 8. オイネングク
オイネングクは火をあまり使わずに作ることができる、最も実用的な夏の料理の一つです。シャキシャキしたきゅうりと冷たいスープ、シンプルな味付けがもたらす清涼感は、暑い季節の家庭料理が持つ簡潔な美しさを示しています。  
ラベル：旬の冷スープ · 家庭料理  
注意ポイント：塩・醤油の使用量の調節。

### 9. ファチェ
五味子（オミザ）茶や果物のシロップに旬の果物を浮かべるファチェは、韓国の夏の風流を最も視覚的に表現した料理です。五色と五味の調和を表現し、単なるデザートを超えて季節を楽しむ感性的な方法として受け継がれてきました。  
ラベル：伝統飲料 · 季節のデザート  
注意ポイント：糖分と添加甘味料の使用量の確認。

### 10. ミスッカル
様々な穀물을 찌고 말리고 볶아 가루로 만든 미숫가루는 준비의 시간과 검약의 미학이 담긴 전통 음료입니다. 간편하면서도 든든한 한 끼가 될 수 있어、夏の渇きと空腹を同時に解消する食文化の知恵を伝えています。  
ラベル：伝統飲料 · 代替食  
注意ポイント：砂糖の追加量と穀物由来のカロリー考慮。

## 季節に応える食文化

韓国の夏の料理は、単に体を冷やすためのメニューではありません。それは暑さに疲れた体を回復させ、季節の流れに順応し、食欲と気力を再び取り戻すための生活の技術です。熱いものと冷たいもの、補養と清涼、季節と風習が一つの食文化の中で共存していることが、韓国の夏の料理の最大の特徴です。

今日では栄養情報や個人の健康状態を考慮する必要がありますが、これらの料理が持つ季節の感性と文化的意味は依然として有効です。夏の料理一杯には、味だけでなく、気候に適応し、体を労わり、コミュニティの時間を分かち合ってきた韓国人の古い知恵が込められています。`,
    zh: `## 夏日，凝聚在碗中的韩国智慧

度过酷暑的方法并不仅仅在于吃冰凉的食物。韩国的夏日饮食蕴含着“以热治热”（用热汤补充元气）和“以冷治冷”（用冷食消暑降温）的智慧，以及通过时令食材恢复身体平衡的生活哲理。

从参鸡汤和辣牛肉汤等滋补热汤，到醋鸡汤和芝麻鸡汤等消暑冷食，再到凉拌黄瓜汤、花菜和炒面茶等夏季传统饮品，韩国的夏日饮食可谓是顺应季节、调理身体的综合智慧结晶。本页面为您介绍韩国人喜爱的十款夏日美食，从现代视角带您了解它们的起源、文化、烹饪意义以及食用注意事项。

## 韩国夏日饮食的两大智慧

### 以热治热
在炎热的季节食用热食，通过排汗促进身体循环。参鸡汤和辣牛肉汤是代表性的“以热治热”食物，它们已成为补充体力、调理疲惫身体的滋补象征。

### 以冷治冷
用冰镇的汤汁和清凉的食材消退体内的燥热，唤醒食欲。醋鸡汤、芝麻鸡汤、冷面、红豆刨冰、豆浆面和凉拌黄瓜汤等，都充分展现了夏季防暑降温与清凉调理的智慧。

## 夏日韩食10选

### 1. 参鸡汤
将童子鸡与人参、糯米、大枣一同炖烂而成的参鸡汤，是韩国夏日饮食的象征，在最热的日子里用最温热的滋补调理身体。作为伏天的节令食品，它不仅能补充体力，还具有度过夏日难关的仪式性特征。  
标签：以热治热 · 滋补膳食  
注意点：控制汤汁摄入量、关注钠含量以及个人对药材成分的敏感度。

### 2. 辣牛肉汤
牛肉、大葱与红汤完美结合的辣牛肉汤，是可以通过辛辣的热感唤醒身体的夏季滋补汤。它通过浓郁的味道和香气唤醒食欲并促进排汗循环，是韩国夏季汤类文化的又一重要支柱。  
标签：以热治热 · 辛辣浓汤  
注意点：调节咸度与辣度。

### 3. 醋鸡汤
在放凉的鸡汤中加入醋和芥末调味的醋鸡汤，展现了夏季冷食滋补的精华。酸爽冰凉的汤汁能唤醒因炎热而迟钝的食欲，而熟鸡肉则能提供清淡的蛋白质补充。  
标签：以冷治冷 · 冷食滋补  
注意点：对酸味或芥末味敏感者请适当控制食用量。

### 4. 芝麻鸡汤
将磨细的芝麻与鸡汤混合后冰镇享用的芝麻鸡汤，是宫廷与贵族阶层高雅的夏季滋补膳食。它融合了浓郁的香气、沉稳的质感以及五色配料带来的视觉美感，展现了在夏季饮食中融入尊贵与诚意的传统。  
标签：以冷治冷 · 宫廷冷食滋补  
注意点：确认是否对芝麻过敏，以及浓郁汤汁的消化适应性。

### 5. 冷面
以荞麦面为主料，搭配冰镇高汤或辛辣调料，根据地域与气候发展出独特风味的韩国代表性夏日面食。  
标签：以冷治冷 · 精美面食  
注意点：荞麦过敏者禁食，控制高钠汤汁摄入量。

### 6. 红豆刨冰
红豆刨冰是将朝鲜王朝时期的冰库与储冰文化，与现代制冰技术相结合而形成的韩国代表性夏日甜点。在细密的刨冰上加入红豆、切糕和炼乳等食用，象征着曾作为王室和特权阶层专享资源的冰块，演变为大众化季节性点心的过程。  
标签：传统甜品 · 刨冰甜点  
注意点：注意糖分与热量的过量摄入，乳糖不耐受者需留意。

### 7. 豆浆面
以磨细的豆浆的香浓和冰凉汤汁为特色的豆浆面，是富含植物性蛋白质的清淡夏季一餐。它不靠刺激性的味道，而是以食材的密度和香浓取胜，展现了韩国饮食中在夏季也让身体轻盈充盈的智慧。  
标签：以冷治冷 · 植物性滋补  
注意点：确认大豆过敏及消化系统敏感度。

### 8. 凉拌黄瓜汤
凉拌黄瓜汤是不需要过多动用火源即可制作的最实用的夏季食物之一。脆爽的黄瓜、冰凉的汤汁和简单的调味所带来的清凉感，展现了夏季日常饮食简朴的美感。  
标签：时令冷汤 · 日常膳食  
注意点：调节盐和酱油的使用量。

### 9. 花菜
在五味子水或水果汁中加入时令水果的花菜，是韩国夏日风雅最具视觉效果的体现。它蕴含着五色与五味的和谐，超越了单纯的甜点，成为一种享受季节的感性方式。  
标签：传统饮品 · 季节甜点  
注意点：确认含糖量及添加甜味剂的使用量。

### 10. 炒面茶
将多种谷物蒸熟、晒干并炒制磨粉而成的炒面茶，是蕴含着准备的时间与节俭美学的传统饮品。它既方便又管饱，展现了夏季解渴与充饥并存的饮食文化智慧。  
标签：传统饮品 · 代餐食品  
注意点：注意糖的添加量以及谷物带来的热量。

## 顺应季节的饮食文化

韩国的夏日饮食不仅仅是降温的菜单。它是恢复因炎热而疲惫的身体、顺应季节流转、重新建立食欲与元气的生活技术。热与冷、滋补与清凉、节令与风俗在同一种饮食文化中共存，这是韩国夏日饮食的最大特色。

尽管现代人在食用时需要综合考虑营养成分和个人健康状况，但这些食物所蕴含的季节感和文化意义依然历久弥新。一碗夏日膳食中，不仅包含着美味，更凝聚着韩国人顺应气候、调理身体、分享社群时光的古老智慧。`,
    ru: `## Лето: Мудрость, Вкушаемая из Одной Пиалы

Для того чтобы пережить изнуряющую жару, недостаточно просто есть холодное. Летняя корейская кухня воплощает мудрость «борьбы с жаром с помощью жара» (горячие супы для восстановления энергии) и «борьбы с холодом с помощью холода» (холодные блюда для снижения температуры тела) в сочетании с сезонными ингредиентами, восстанавливающими баланс организма.

От питательных горячих супов, таких как Самгетхан и Юккеджан, до освежающих холодных блюд, таких как Чогетхан и Имджасутхан, и традиционных летних напитков — Ои-нэнгук, Хваче и Мисутгару. Летняя корейская кухня представляет собой целостный метод заботы о себе в гармонии с природой. На этой странице представлены десять популярных летних корейских блюд с описанием их происхождения, культурного значения и мер предосторожности с современной точки зрения.

## Две Ключевые Концепции Летней Корейской Кухни

### Борьба с жаром с помощью жара
Метод употребления горячей пищи в жару для стимулирования потоотделения и улучшения кровообращения. Самгетхан и Юккеджан — классические примеры, служащие символами восстановления жизненных сил и исцеления утомленного тела.

### Борьба с холодом с помощью холода
Метод борьбы с жарой и стимуляции аппетита с помощью холодных бульонов и охлаждающих ингредиентов. Чогетхан, Имджасутхан, Нэнмён, Патбинсу, Конгуксу и Ои-нэнгук наглядно демонстрируют эту освежающую логику.

## 10 летних корейских блюд

### 1. Самгетхан
Молодой цыпленок, сваренный с женьшенем, клейким рисом и наби. Самгетхан — символ корейского летнего оздоровления: лечение самых жарких дней самой горячей пищей. Этот суп восстанавливает силы и несет в себе церемониальное значение.  
Ярлык: Борьба с жаром с помощью жара · Питательный суп  
Меры предосторожности: Контроль порций, уровень натрия и проверка индивидуальной чувствительности к лекарственным травам.

### 2. Юккеджан
Острый суп из говядины с добавлением папоротника и зеленого лука. Его огненно-красный бульон пробуждает тело, стимулирует аппетит яркими вкусами и улучшает кровообращение через потоотделение.  
Ярлык: Борьба с жаром с помощью жара · Острый суп  
Меры предосторожности: Регулировка уровня соли и остроты.

### 3. Чогетхан
Холодный куриный бульон с уксусом и горчицей. Это квинтэссенция холодного летнего питания, где кислый прохладный бульон пробуждает аппетит, а куриное мясо служит источником нежирного белка.  
Ярлык: Борьба с холодом с помощью холода · Холодное блюдо  
Меры предосторожности: Ограничьте употребление при чувствительности к кислоте или горчичной остроте.

### 4. Имджасутхан
Кусочки курицы в холодном бульоне из протертого белого кунжута. Изысканное летнее лакомство королевского двора и дворянских семей, сочетающее ореховый вкус, богатую текстуру и визуальную элегантность с разноцветными топпингами.  
Ярлык: Борьба с холодом с помощью холода · Королевское блюдо  
Меры предосторожности: Проверьте наличие аллергии на кунжут и переносимость жирного бульона желудком.

### 5. Нэнмён
Холодная гречневая лапша в ледяном бульоне или с острой приправой, развившаяся в уникальные региональные формы.  
Ярлык: Борьба с холодом с помощью холода · Гречневая лапша  
Меры предосторожности: Аллергия на гречиху и контроль потребления соленого бульона.

### 6. Патбинсу
Патбинсу — знаменитый корейский летний десерт, созданный на стыке культуры хранения льда эпохи Чосон и современных технологий охлаждения. Он состоит из тертого льда со сладкой фасолью, рисовыми пирожками и сгущенным молоком, символизируя переход льда от королевской привилегии к общедоступному народному лакомству.  
Ярлык: Традиционный десерт · Ледяная крошка  
Меры предосторожности: Высокое содержание сахара и калорий; проверьте переносимость лактозы.

### 7. Конгуксу
Лапша в густом холодном соусе из перетертой сои. Это богатое растительным белком блюдо раскрывает чистый, нежный вкус свежемолотых соевых бобов, насыщая организм без ощущения тяжести.  
Ярлык: Борьба с холодом с помощью холода · Растительный белок  
Меры предосторожности: Аллергия на сою и индивидуальная чувствительность желудка.

### 8. Ои-нэнгук
Холодный огуречный суп, не требующий варки, облегчающий труд на кухне. Тонко нарезанные огурцы в ледяном уксусном бульоне представляют собой чистое, хрустящее и освежающее блюдо.  
Ярлык: Освежающий суп · Повседневное блюдо  
Меры предосторожности: Контролируйте количество соли и соевого соуса.

### 9. Хваче
Яркий фруктовый пунш на основе лимонника или медовой воды с добавлением сезонных фруктов. Олицетворение гармонии пяти цветов и пяти вкусов (обангсэк и оми) — это изысканный способ насладиться летом.  
Ярлык: Традиционный напиток · Сезонный десерт  
Меры предосторожности: Следите за содержанием сахара и подсластителей.

### 10. Мисутгару
Сытный напиток из обжаренных злаков, символизирующий практичность и бережливость. Этот полезный коктейль отлично утоляет жажду и голод, напоминая о традициях экономии.  
Ярлык: Традиционный коктейль · Замена еды  
Меры предосторожности: Следите за количеством сахара и калорийностью злаков.

## Кулинарная Культура, Следующая за Сезонами

Летние корейские блюда — это не просто способ охладиться. Это повседневные практики восстановления утомленного организма, адаптации к смене сезонов и возвращения жизненных сил. Сосуществование горячего и холодного, сытного и легкого — главная особенность корейской летней кухни.

Хотя современному человеку необходимо учитывать пищевую ценность и состояние здоровья, сезонная философия и культурная ценность этих блюд остаются неизменными. В одной пиале летнего супа скрыт не просто вкус, а вековая мудрость адаптации к климату и заботы о близких.`,
    ar: `## الصيف، الحكمة الكامنة في وعاء واحد

إن التغلب على الحرارة الشديدة لا يقتصر على تناول المشروبات الباردة فحسب. يجسد الطعام الصيفي الكوري حكمة "مكافحة الحرارة بالحرارة" (استخدام الحساء الساخن لاستعادة الطاقة) و"مكافحة البرد بالبرد" (استخدام الأطباق الباردة لخفض حرارة الجسم)، إلى جانب المكونات الموسمية التي تعيد التوازن للجسم.

من الحساء الساخن المغذي مثل سامغيتانغ ويوكيغيجانغ إلى الأطباق الباردة المنعشة مثل تشوغيتانغ وإيمجاسوتانغ، والمشروبات الصيفية مثل أوي-ناينغغوك، وهواشي، وميسوتغارو، يمثل الطعام الصيفي الكوري أسلوبًا شاملاً للعناية بالنفس بالتناغم مع الطبيعة. تقدم هذه الصفحة عشرة أطباق يستمتع بها الكوريون، مع استكشاف أصولها وثقافتها وأهميتها والتحذيرات المتعلقة بها من منظور حديث.

## مفهومان أساسيان للمطبخ الصيفي الكوري

### مكافحة الحرارة بالحرارة
طريقة تناول الأطعمة الساخنة في الطقس الحار لتحفيز التعرق والمساعدة في تنشيط الدورة الدموية في الجسم. يعد سامغيتانغ ويوكيغيجانغ مثالين كلاسيكيين، حيث يعملان كرمز لاستعادة الطاقة الحيوية وشفاء الأجساد المتعبة.

### مكافحة البرد بالبرد
أسلوب تلطيف الحرارة وتحفيز الشهية باستخدام المرق البارد والمكونات المنعشة. تشوغيتانغ، وإيمجاسوتانغ، وناينغميون، وباتبينغسو، وكونغ-غوكو، وأوي-ناينغغوك تجسد هذا المنطق المنعش.

## أطعمة كورية صيفية ١٠

### ١. سامغيتانغ
دجاجة كاملة صغيرة مطهية ببطء مع الجينسنغ والأرز الدبق والعناب. سامغيتانغ هو رمز التغذية الصيفية الكورية، حيث يعالج أشد الأيام حرارة بأكثر الأطعمة سخونة. تأسس كعادة لأيام الصيف الحارة، وهو يعيد الحيوية ويحمل أهمية احتفالية.  
الملصق: مكافحة الحرارة بالحرارة · حساء مغذٍ  
نقاط الحذر: التحكم في الكمية، ومستويات الصوديوم، والتحقق من الحساسية الشخصية للأعشاب الطبية.

### ٢. يوكيغيجانغ
حساء لحم بقري حار مطهو مع لحم بقري مبشور وبصل أخضر. يوقظ مرقه الأحمر الناري الجسم، ويحفز الشهية من خلال نكهاته الجريئة، ويعزز الدورة الدموية الصحية من خلال التعرق.  
الملصق: مكافحة الحرارة بالحرارة · حساء حار  
نقاط الحذر: ضبط مستويات الملوحة والحرارة.

### ٣. تشوغيتانغ
حساء دجاج بارد مع الخل والخردل. يُظهر جوهر التغذية الصيفية الباردة، حيث يوقظ المرق الحامض والبارد الشهية المفقودة بينما يعمل لحم الدجاج كمصدر للبروتين الخالي من الدهون.  
الملصق: مكافحة البرد بالبرد · وجبة باردة منعشة  
نقاط الحذر: قلل من تناوله إذا كنت تعاني من حساسية تجاه الحموضة أو لدغة الخردل.

### ٤. إيمجاسوتانغ
دجاج مبشور في حساء سمسم محمص بارد. كان طبقًا صيفيًا فاخرًا للبلاط الملكي والعائلات النبيلة، حيث يجمع بين نكهة السمسم والقوام الغني والأناقة البصرية مع التزيين الملون.  
الملصق: مكافحة البرد بالبرد · وجبة ملكية باردة  
نقاط الحذر: تحقق من حساسية السمسم ومدى ملاءمة المرق الغني للهضم.

### ٥. ناينغميون
نودلز الحنطة السوداء الباردة تقدم في مرق بارد أو تتبيلة حارة، وتطورت بأشكال فريدة في مختلف المناطق.  
الملصق: مكافحة البرد بالبرد · نودلز الحنطة السوداء  
نقاط الحذر: حساسية الحنطة السوداء والتحكم في كمية المرق الغني بالصوديوم.

### ٦. باتبينغسو
باتبينغسو هي حلوى صيفية كورية شهيرة تشكلت من خلال الجمع بين ثقافة تخزين الجليد في عهد جوسون وتقنيات صنع الثلج الحديثة. تقدم مع الفاصوليا الحمراء وكعك الأرز والحليب المكثف فوق الثلج المبشور، وهي ترمز إلى تحول الجليد من امتياز ملكي إلى وجبة صيفية شعبية.  
الملصق: حلوى تقليدية · ثلج مبشور  
نقاط الحذر: نسبة عالية من السكر والسعرات الحرارية؛ تحقق من تحمل اللاكتوز لمكونات الألبان.

### ٧. كونغ-غوكو
نودلز في حساء فول صويا بارد ودسم. تعتمد هذه الوجبة النباتية الغنية بالبروتين على النكهة النقية لفول الصويا المطحون طازجًا، مما يوضح حكمة تغذية الجسم دون التسبب في ثقل.  
الملصق: مكافحة البرد بالبرد · بروتين نباتي  
نقاط الحذر: حساسية الصويا والتحقق من الراحة الهضمية.

### ٨. أوي-ناينغغوك
حساء خيار بارد لا يتطلب طهيًا على الموقد، مما يسهل العمل في المطبخ. يقدم الخيار المقطع رقيقاً في مرق الخل المثلج طبقاً جانبياً نظيفاً ومنعشاً.  
الملصق: حساء بارد مرطب · طبق يومي  
نقاط الحذر: التحكم في كميات الملح وصلصة الصويا.

### ٩. هواشي
شراب فواكه ملون يعتمد على ماء الأوميجا أو ماء العسل مغطى بالفواكه الموسمية. يمثل تناغم الألوان الخمسة والنكهات الخمسة (أوبانغسيك وأومي)، وهو طريقة حسية للاستمتاع بالموسم.  
الملصق: مشروب تقليدي · حلوى موسمية  
نقاط الحذر: انتبه لمحتوى السكر والمحليات المضافة.

### ١٠. ميسوتغارو
مخفوق الحبوب المحمصة المشكلة الذي يمثل الاستعداد والاقتصاد. هذا المشروب المشبع يروي العطش ويسد الجوع، ويعمل كإرث حبوب للتدبير المنزلي.  
الملصق: مخفوق تقليدي · بديل للوجبات  
نقاط الحذر: انتبه للسكريات المضافة وسعرات الحبوب.

## ثقافة طهي تستجيب للفصول

الأطباق الصيفية الكورية ليست مجرد عناصر لتبريدك. إنها تقنيات يومية لاستعادة الأجسام المتعبة، والتكيف مع التدفقات الموسمية، وإعادة بناء الحيوية. إن التعايش بين الساخن والبارد، والتغذية والانتعاش، هو السمة المميزة لثقافة الطعام هذه.

بينما يجب على رواد المطعم المعاصرين مراعاة التفاصيل الغذائية والصحة الشخصية، فإن المشاعر الموسمية والقيم الثقافية لهذه الوجبات تظل خالدة. وعاء صيفي واحد يحتوي على أكثر من مجرد طعم؛ فهو يحتوي على حكمة قديمة حول التكيف مع المناخ ورعاية المجتمع.`
  },
  cta: [
    { label: { ko: "HOT 8 DISHES 보기", en: "View HOT 8 DISHES", ja: "HOT 8 DISHESを見る", zh: "查看热门8款推荐", es: "Ver HOT 8 DISHES", fr: "Voir les HOT 8 PLATS", ar: "عرض HOT 8 DISHES", ru: "Посмотреть HOT 8 DISHES" }, href: "/hot" },
    { label: { ko: "한식의 식재료 읽기", en: "Read Korean Ingredients Hub", ja: "韓国の食材ハブを読む", zh: "阅读韩食食材中心", es: "Leer centro de ingredientes", fr: "Lire les Ingrédients Coréens", ar: "قراءة مركز المكونات الكورية", ru: "Читать о корейских ингредиентах" }, href: "/ingredients" },
    { label: { ko: "식재료와 풍토 읽기", en: "Read Ingredients & Terroir", ja: "食材と風土を読む", zh: "阅读食材与风土", es: "Leer ingredientes y terruño", fr: "Lire Ingrédients & Terroir", ar: "قراءة المكونات والأرض", ru: "Читать об ingrediente-ah i terroir-e" }, href: "/articles/ingredients-terroir" },
    { label: { ko: "반찬의 이해 읽기", en: "Read Guide to Banchan", ja: "おかずの理解を読む", zh: "阅读小菜指南", es: "Leer guía del banchan", fr: "Lire le Guide du Banchan", ar: "قراءة دليل البان تشان", ru: "Читать руководство по банчанам" }, href: "/banchan-guide" }
  ]
};
