const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

// 50선 반찬의 8개 국어 번역 명칭 및 로마자(slug용) 사전을 정의합니다.
const banchanDictionary = {
  "계란말이": {
    slug: "gyeran-mari",
    names: {
      ko: "계란말이",
      en: "Rolled Omelette",
      ja: "卵焼き",
      zh: "鸡蛋卷",
      es: "Tortilla de huevo enrollada",
      fr: "Omelette roulée coréenne (Gyeran-mari)",
      ar: "أومليت ملفوف",
      ru: "Рулет из яиц"
    }
  },
  "멸치볶음": {
    slug: "myeolchi-bokkeum",
    names: {
      ko: "멸치볶음",
      en: "Stir-fried Anchovies",
      ja: "カタクチイワシ의炒め物",
      zh: "炒鳀鱼",
      es: "Boquerones salteados",
      fr: "Anchois sautés (Myeolchi-bokkeum)",
      ar: "أنشوجة مقلية",
      ru: "Жареные анчоусы"
    }
  },
  "두부조림": {
    slug: "dubu-jorim",
    names: {
      ko: "두부조림",
      en: "Braised Tofu",
      ja: "豆腐の煮물",
      zh: "炖豆腐",
      es: "Tofu guisado",
      fr: "Tofu braisé (Dubu-jorim)",
      ar: "توفو مطهي",
      ru: "Тушеный тофу"
    }
  },
  "진미채무침": {
    slug: "jinmichae-muchim",
    names: {
      ko: "진미채무침",
      en: "Spicy Shredded Squid",
      ja: "さきイカの和え物",
      zh: "辣拌鱿鱼丝",
      es: "Calamar rallado picante",
      fr: "Calamar séché effiloché piquant (Jinmichae-muchim)",
      ar: "حبار مبشور حار",
      ru: "Острый сушеный кальмар"
    }
  },
  "소고기장조림": {
    slug: "sogogi-jangjorim",
    names: {
      ko: "소고기장조림",
      en: "Beef Braised in Soy Sauce",
      ja: "牛肉의醤油煮",
      zh: "酱牛肉",
      es: "Ternera guisada en salsa de soja",
      fr: "Bœuf braisé à la sauce soja (Sogogi-jangjorim)",
      ar: "لحم بقري مطهو في صلصة الصويا",
      ru: "Говядина в соевом соусе"
    }
  },
  "콩나물무침": {
    slug: "kongnamul-muchim",
    names: {
      ko: "콩나물무침",
      en: "Seasoned Soybean Sprouts",
      ja: "豆もやしの和え物",
      zh: "凉拌豆芽",
      es: "Brotes de soja sazonados",
      fr: "Pousses de soja assaisonnées (Kongnamul-muchim)",
      ar: "براعم الصويا المتبلة",
      ru: "Салат из пророщенной сои"
    }
  },
  "시금치나물": {
    slug: "sigeumchi-namul",
    names: {
      ko: "시금치나물",
      en: "Seasoned Spinach",
      ja: "ほうれん草のナムル",
      zh: "凉拌菠菜",
      es: "Espinacas sazonadas",
      fr: "Épinards assaisonnés (Sigeumchi-namul)",
      ar: "سبانخ متبلة",
      ru: "Намуль из шпината"
    }
  },
  "감자채볶음": {
    slug: "gamjachae-bokkeum",
    names: {
      ko: "감자채볶음",
      en: "Stir-fried Shredded Potatoes",
      ja: "じゃがいも千切り炒め",
      zh: "炒土豆丝",
      es: "Patatas ralladas salteadas",
      fr: "Pommes de terre râpées sautées (Gamjachae-bokkeum)",
      ar: "بطاطس مقطعة مقلية",
      ru: "Жареный тертый картофель"
    }
  },
  "어묵볶음": {
    slug: "eomuk-bokkeum",
    names: {
      ko: "어묵볶음",
      en: "Stir-fried Fish Cake",
      ja: "練り物炒め",
      zh: "炒鱼饼",
      es: "Pastel de pescado salteado",
      fr: "Gâteaux de poisson sautés (Eomuk-bokkeum)",
      ar: "كعك السمك المقلي",
      ru: "Жареные рыбные кексы"
    }
  },
  "오이무침": {
    slug: "oi-muchim",
    names: {
      ko: "오이무침",
      en: "Spicy Cucumber Salad",
      ja: "きゅうりの和え物",
      zh: "凉拌黄瓜",
      es: "Ensalada de pepino picante",
      fr: "Salade de concombre piquante (Oi-muchim)",
      ar: "سلطة الخيار الحارة",
      ru: "Острый салат из огурцов"
    }
  },
  "애호박볶음": {
    slug: "aehobak-bokkeum",
    names: {
      ko: "애호박볶음",
      en: "Stir-fried Zucchini",
      ja: "韓国ズッキーニ의炒め물",
      zh: "炒西葫芦",
      es: "Calabacín salteado",
      fr: "Courgette coréenne sautée (Aehobak-bokkeum)",
      ar: "كوسة مقلية",
      ru: "Жареный кабачок"
    }
  },
  "가지나물": {
    slug: "gaji-namul",
    names: {
      ko: "가지나물",
      en: "Steamed Eggplant Side Dish",
      ja: "蒸しナスのナムル",
      zh: "蒸茄子",
      es: "Berenjena al vapor",
      fr: "Aubergines à la vapeur assaisonnées (Gaji-namul)",
      ar: "باذنجان على البخار",
      ru: "Намуль из баклажанов"
    }
  },
  "김치볶음": {
    slug: "kimchi-bokkeum",
    names: {
      ko: "김치볶음",
      en: "Stir-fried Kimchi",
      ja: "キムチ炒め",
      zh: "炒泡菜",
      es: "Kimchi salteado",
      fr: "Kimchi sauté (Kimchi-bokkeum)",
      ar: "كيمتشي مقلي",
      ru: "Жареное кимчи"
    }
  },
  "메추리알조림": {
    slug: "mechurial-jorim",
    names: {
      ko: "메추리알조림",
      en: "Braised Quail Eggs",
      ja: "うずらの卵의醤油煮",
      zh: "酱鹌鹑蛋",
      es: "Huevos de codorniz guisados",
      fr: "Œufs de caille braisés à la sauce soja (Mechurial-jorim)",
      ar: "بيض السمان المطهي",
      ru: "Тушеные перепелиные яйца"
    }
  },
  "소시지야채볶음": {
    slug: "sosiji-yachae-bokkeum",
    names: {
      ko: "소시지야채볶음",
      en: "Stir-fried Sausage and Vegetables",
      ja: "ソーセージ와野菜의炒め물",
      zh: "炒肠衣和蔬菜",
      es: "Salchichas salteadas con verduras",
      fr: "Saucisses sautées aux légumes (Sosiji-yachae-bokkeum)",
      ar: "سجق مقلي مع خضار",
      ru: "Жареные сосиски с овощами"
    }
  },
  "무생채": {
    slug: "musaengchae",
    names: {
      ko: "무생채",
      en: "Spicy Shredded Radish Salad",
      ja: "大根의細切り甘酢和え",
      zh: "凉拌萝卜丝",
      es: "Ensalada de rábano rallado picante",
      fr: "Salade de radis blanc râpé piquant (Musaengchae)",
      ar: "سلطة الفجل المبشور الحارة",
      ru: "Острый салат из тертой редьки"
    }
  },
  "깻잎장아찌": {
    slug: "kkaennip-jangajji",
    names: {
      ko: "깻잎장아찌",
      en: "Pickled Perilla Leaves",
      ja: "エゴマ의葉의醤油漬け",
      zh: "酱腌苏子叶",
      es: "Hojas de perilla encurtidas",
      fr: "Feuilles de pérille marinées (Kkaennip-jangajji)",
      ar: "أوراق بيريلا مخللة",
      ru: "Маринованные листья периллы"
    }
  },
  "미역줄기볶음": {
    slug: "miyeokjulgi-bokkeum",
    names: {
      ko: "미역줄기볶음",
      en: "Stir-fried Seaweed Stems",
      ja: "茎わかめ의炒め물",
      zh: "炒海带丝",
      es: "Tallos de algas salteados",
      fr: "Tiges de wakamé sautées (Miyeokjulgi-bokkeum)",
      ar: "ساق الأعشاب البحرية المقلية",
      ru: "Жареные стебли морской капусты"
    }
  },
  "고사리나물": {
    slug: "gosari-namul",
    names: {
      ko: "고사리나물",
      en: "Seasoned Bracken Fern",
      ja: "わらび의ナムル",
      zh: "炒蕨菜",
      es: "Helecho sazonado",
      fr: "Pousses de fougère assaisonnées (Gosari-namul)",
      ar: "سرخس متبل",
      ru: "Намуль из папоротника"
    }
  },
  "도라지무침": {
    slug: "doraji-muchim",
    names: {
      ko: "도라지무침",
      en: "Seasoned Bellflower Root",
      ja: "桔梗의根의和え물",
      zh: "凉拌桔梗",
      es: "Raíz de campanilla sazonada",
      fr: "Racines de campanule assaisonnées piquantes (Doraji-muchim)",
      ar: "جذر زهرة الجرس المتبل",
      ru: "Салат из корней колокольчика"
    }
  },
  "감자조림": {
    slug: "gamja-jorim",
    names: {
      ko: "감자조림",
      en: "Braised Potatoes",
      ja: "じゃがいも의煮물",
      zh: "酱土豆",
      es: "Patatas guisadas",
      fr: "Pommes de terre braisées (Gamja-jorim)",
      ar: "بطاطس مطهية",
      ru: "Тушенный картофель"
    }
  },
  "꽈리고추멸치볶음": {
    slug: "kwarigochu-myeolchi-bokkeum",
    names: {
      ko: "꽈리고추멸치볶음",
      en: "Stir-fried Anchovies with Shishito Peppers",
      ja: "しし唐와カタクチイワシ의炒め물",
      zh: "尖椒炒鳀鱼",
      es: "Boquerones salteados con pimientos shishito",
      fr: "Anchois sautés aux piments shishito (Kwarigochu-myeolchi-bokkeum)",
      ar: "أنشوجة مقلية مع فلفل شيشيتو",
      ru: "Жареные анчоусы с перцем с꽈리"
    }
  },
  "마늘종볶음": {
    slug: "maneuljong-bokkeum",
    names: {
      ko: "마늘종볶음",
      en: "Stir-fried Garlic Scapes",
      ja: "ニンニク의芽의炒め물",
      zh: "炒蒜苔",
      es: "Tallos de ajo salteados",
      fr: "Tiges d'ail sautées (Maneuljong-bokkeum)",
      ar: "سيقان الثوم المقلية",
      ru: "Жареные стрелки чеснока"
    }
  },
  "무말랭이무침": {
    slug: "mumallangi-muchim",
    names: {
      ko: "무말랭이무침",
      en: "Spicy Dried Radish Salad",
      ja: "切り干し大根의和え물",
      zh: "凉拌萝卜干",
      es: "Ensalada de rábano deshidratado picante",
      fr: "Salade de radis séché piquant (Mumallangi-muchim)",
      ar: "سلطة الفجل المجفف الحارة",
      ru: "Острая сушеная редька"
    }
  },
  "파김치": {
    slug: "pa-kimchi",
    names: {
      ko: "파김치",
      en: "Green Onion Kimchi",
      ja: "ネギキムチ",
      zh: "小葱泡菜",
      es: "Kimchi de cebolleta",
      fr: "Kimchi d'oignons verts (Pa-kimchi)",
      ar: "كيمتشي البصل الأخضر",
      ru: "Кимчи из зеленого лука"
    }
  },
  "배추겉절이": {
    slug: "baechu-geotjeori",
    names: {
      ko: "배추겉절이",
      en: "Fresh Cabbage Kimchi",
      ja: "白菜의浅漬けキムチ",
      zh: "白菜生拌菜",
      es: "Kimchi de col fresca",
      fr: "Kimchi frais de chou chinois (Baechu-geotjeori)",
      ar: "كيمتشي الكرنب الطازج",
      ru: "Свежее кимчи из пекинской капусты"
    }
  },
  "양파장아찌": {
    slug: "yangpa-jangajji",
    names: {
      ko: "양파장아찌",
      en: "Pickled Onions",
      ja: "玉ねぎ의醤油漬け",
      zh: "酱腌洋葱",
      es: "Cebollas encurtidas",
      fr: "Oignons marinés à la sauce soja (Yangpa-jangajji)",
      ar: "بصل مخلل",
      ru: "Маринованный лук"
    }
  },
  "꼬막무침": {
    slug: "kkomak-muchim",
    names: {
      ko: "꼬막무침",
      en: "Seasoned Cockles",
      ja: "ハイガイ의和え물",
      zh: "凉拌泥蚶",
      es: "Berberechos sazonados",
      fr: "Coques assaisonnées (Kkomak-muchim)",
      ar: "محار متبل",
      ru: "Острые маринованные ракушки"
    }
  },
  "버섯볶음": {
    slug: "beoseot-bokkeum",
    names: {
      ko: "버섯볶음",
      en: "Stir-fried Mushrooms",
      ja: "キノコ炒め",
      zh: "炒蘑菇",
      es: "Setas salteadas",
      fr: "Champignons sautés (Beoseot-bokkeum)",
      ar: "فطر مقلي",
      ru: "Жареные грибы"
    }
  },
  "제육볶음": {
    slug: "jeyuk-bokkeum",
    names: {
      ko: "제육볶음",
      en: "Spicy Stir-fried Pork",
      ja: "豚肉의辛口炒め",
      zh: "辣炒猪肉",
      es: "Cerdo picante salteado",
      fr: "Porc sauté épicé (Jeyuk-bokkeum)",
      ar: "لحم خنزير حار مقلي",
      ru: "Острая жареная свинина"
    }
  },
  "오징어볶음": {
    slug: "ojingeo-bokkeum",
    names: {
      ko: "오징어볶음",
      en: "Spicy Stir-fried Squid",
      ja: "イка의辛口炒め",
      zh: "辣炒鱿鱼",
      es: "Calamar picante salteado",
      fr: "Calamar sauté épicé (Ojingeo-bokkeum)",
      ar: "حبار حار مقلي",
      ru: "Острый жареный кальмар"
    }
  },
  "잡채": {
    slug: "japchae",
    names: {
      ko: "잡채",
      en: "Glass Noodles with Vegetables",
      ja: "チャプチェ",
      zh: "杂菜",
      es: "Fideos de celofán con verduras",
      fr: "Vermicelles de patate douce sautés aux légumes (Japchae)",
      ar: "جاب تشي",
      ru: "Чапче (корейская лапша)"
    }
  },
  "김치전": {
    slug: "kimchijeon",
    names: {
      ko: "김치전",
      en: "Kimchi Pancake",
      ja: "キムチチヂミ",
      zh: "泡菜饼",
      es: "Panqueque de kimchi",
      fr: "Crêpe au kimchi (Kimchijeon)",
      ar: "فطيرة الكيمتشي",
      ru: "Блины с кимчи"
    }
  },
  "계란찜": {
    slug: "gyeranjjim",
    names: {
      ko: "계란찜",
      en: "Steamed Egg Custard",
      ja: "韓国風蒸し卵",
      zh: "蒸鸡蛋糕",
      es: "Huevo al vapor al estilo coreano",
      fr: "Œufs au cuiseur-vapeur (Gyeranjjim)",
      ar: "بيض مخفوق مطهو على البخار",
      ru: "Паровой омлет"
    }
  },
  "단무지무침": {
    slug: "danmuji-muchim",
    names: {
      ko: "단무지무침",
      en: "Seasoned Pickled Radish",
      ja: "たくあん의和え물",
      zh: "凉拌腌黄萝卜",
      es: "Rábano encurtido sazonado",
      fr: "Radis jaune saumuré assaisonné (Danmuji-muchim)",
      ar: "فجل أصفر مخلل متبل",
      ru: "Салат из маринованной редьки"
    }
  },
  "우엉조림": {
    slug: "uong-jorim",
    names: {
      ko: "우엉조림",
      en: "Braised Burdock Root",
      ja: "ゴボウ의醤油煮",
      zh: "酱牛蒡",
      es: "Raíz de barda guisada",
      fr: "Racines de bardane braisées (Uong-jorim)",
      ar: "جذر أرقطيون مطهي",
      ru: "Тушеные корень лопуха"
    }
  },
  "연근조림": {
    slug: "yeongeun-jorim",
    names: {
      ko: "연근조림",
      en: "Braised Lotus Root",
      ja: "蓮根의醤油煮",
      zh: "酱莲藕",
      es: "Raíz de loto guisada",
      fr: "Racines de lotus braisées (Yeongeun-jorim)",
      ar: "جذر اللوتس المطهي",
      ru: "Тушеные корень лотоса"
    }
  },
  "북어포무침": {
    slug: "bugeopo-muchim",
    names: {
      ko: "북어포무침",
      en: "Spicy Shredded Dried Pollack",
      ja: "干しタラ細切り의和え물",
      zh: "拌干明太鱼丝",
      es: "Abadejo seco desmenuzado picante",
      fr: "Colin séché effiloché piquant (Bugeopo-muchim)",
      ar: "سمك قد مجفف مبشور حار",
      ru: "Острый сушеный минтай"
    }
  },
  "톳나물무침": {
    slug: "totnamul-muchim",
    names: {
      ko: "톳나물무침",
      en: "Seasoned Hijiki Seaweed",
      ja: "ヒジキ의ナムル",
      zh: "凉拌羊栖菜",
      es: "Algas hijiki sazonadas",
      fr: "Algue hijiki assaisonnée (Totnamul-muchim)",
      ar: "أعشاب هجيكي البحرية المتبلة",
      ru: "Салат из водорослей хидзики"
    }
  },
  "콩자반": {
    slug: "kongjaban",
    names: {
      ko: "콩자반",
      en: "Sweet and Savory Braised Black Beans",
      ja: "黒豆의甘醤油煮",
      zh: "酱黑豆",
      es: "Habas negras guisadas dulces",
      fr: "Haricots noirs braisés sucrés-salés (Kongjaban)",
      ar: "فاصوليا سوداء مطهية حلوة",
      ru: "Тушеная черная соя"
    }
  },
  "명란젓무침": {
    slug: "myeongranjeot-muchim",
    names: {
      ko: "명란젓무침",
      en: "Seasoned Pollock Roe",
      ja: "明太子의和え물",
      zh: "凉拌明太鱼子",
      es: "Huevas de abadejo sazonadas",
      fr: "Œufs de colin marinés et assaisonnés (Myeongranjeot-muchim)",
      ar: "بطارخ سمك القد المتبلة",
      ru: "Острая соленая икра минтая"
    }
  },
  "청경채볶음": {
    slug: "cheonggyeongchae-bokkeum",
    names: {
      ko: "청경채볶음",
      en: "Stir-fried Bok Choy",
      ja: "チンゲンサイ의炒め물",
      zh: "炒青梗菜",
      es: "Bok choy salteado",
      fr: "Bok choy sauté (Cheonggyeongchae-bokkeum)",
      ar: "بوك تشوي مقلي",
      ru: "Жареный бок-чой"
    }
  },
  "탕평채": {
    slug: "tangpyeongchae",
    names: {
      ko: "탕평채",
      en: "Mung Bean Jelly Salad",
      ja: "緑豆의ムク의和え물",
      zh: "荡平菜",
      es: "Ensalada de gelatina de judía mungo",
      fr: "Salade de gelée de haricot mungo (Tangpyeongchae)",
      ar: "سلطة هلام الفاصوليا",
      ru: "Салат с желе из мунга"
    }
  },
  "더덕구이": {
    slug: "deodeok-gui",
    names: {
      ko: "더덕구이",
      en: "Grilled Deodeok",
      ja: "ツルニンジン의焼き물",
      zh: "烤沙参",
      es: "Deodeok a la parrilla",
      fr: "Racines de deodeok grillées (Deodeok-gui)",
      ar: "شواء ديدوك",
      ru: "Жареный корень кодонопсиса"
    }
  },
  "고추장아찌": {
    slug: "gochu-jangajji",
    names: {
      ko: "고추장아찌",
      en: "Pickled Chili Peppers",
      ja: "唐辛子의醤油漬け",
      zh: "酱腌辣椒",
      es: "Chiles encurtidos",
      fr: "Piments marinés (Gochu-jangajji)",
      ar: "فلفل حار مخلل",
      ru: "Маринованный острый перец"
    }
  },
  "취나물무침": {
    slug: "chwinamul-muchim",
    names: {
      ko: "취나물무침",
      en: "Seasoned Aster Scaber",
      ja: "シラヤマギク의ナムル",
      zh: "凉拌山野菜",
      es: "Aster scaber sazonado",
      fr: "Chwinamul assaisonné (Chwinamul-muchim)",
      ar: "أوراق أستر متبلة",
      ru: "Намуль из калистерии"
    }
  },
  "마늘장아찌": {
    slug: "maneul-jangajji",
    names: {
      ko: "마늘장아찌",
      en: "Pickled Garlic",
      ja: "ニンニク의醤油漬け",
      zh: "酱腌大蒜",
      es: "Ajos encurtidos",
      fr: "Gousses d'ail marinées (Maneul-jangajji)",
      ar: "ثوم مخلل",
      ru: "Маринованный чеснок"
    }
  },
  "상추겉절이": {
    slug: "sangchu-geotjeori",
    names: {
      ko: "상추겉절이",
      en: "Fresh Lettuce Salad",
      ja: "サニーレタス의和え물",
      zh: "生菜拌菜",
      es: "Ensalada de lechuga fresca",
      fr: "Salade de laitue fraîche assaisonnée (Sangchu-geotjeori)",
      ar: "سلطة الخس الطازجة",
      ru: "Свежий салат из листьев салата"
    }
  },
  "도토리묵무침": {
    slug: "dotorimuk-muchim",
    names: {
      ko: "도토리묵무침",
      en: "Seasoned Acorn Jelly",
      ja: "どんぐり寒天의和え물",
      zh: "凉拌橡子凉粉",
      es: "Gelatina de bellota sazonada",
      fr: "Gelée de glands assaisonnée (Dotorimuk-muchim)",
      ar: "هلام البلوط المتبل",
      ru: "Салат из желудевого желе"
    }
  },
  "미나리나물": {
    slug: "minari-namul",
    names: {
      ko: "미나리나물",
      en: "Seasoned Water Dropwort",
      ja: "セリ의ナムル",
      zh: "凉拌水芹",
      es: "Berro de agua sazonado",
      fr: "Oenanthe piquante assaisonnée (Minari-namul)",
      ar: "بقدونس الماء المتبل",
      ru: "Намуль из омежника"
    }
  }
};

// 파일 경로 설정
const EXCEL_PATH = path.join(__dirname, "../data-source/banchan-50.xlsx");
const OUTPUT_DIR = path.join(__dirname, "../src/data");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "banchan.json");

console.log("=== Start Excel to JSON Conversion with Multi-language ===");
console.log("Reading Excel from:", EXCEL_PATH);

try {
  // 1. 엑셀 파일 로드
  if (!fs.existsSync(EXCEL_PATH)) {
    throw new Error(`Excel file not found at ${EXCEL_PATH}. Please copy and rename South_Korea_Top_50_Side_Dishes.xlsx.`);
  }
  const workbook = XLSX.readFile(EXCEL_PATH);

  // 2. 카테고리 시트들을 파싱하여 카테고리별 반찬 이름 Set 구성
  const categories = [
    { key: "volkkeum", sheetName: "볶음", ko: "볶음" },
    { key: "jorim", sheetName: "조림", ko: "조림" },
    { key: "muchim", sheetName: "무침", ko: "무침" },
    { key: "namul", sheetName: "나물", ko: "나물" },
    { key: "gita", sheetName: "기타(장아찌_전_찜)", ko: "기타 (장아찌/전/찜)" }
  ];

  const categoryMap = {}; // 반찬명 -> { key, ko }
  categories.forEach(cat => {
    if (workbook.SheetNames.includes(cat.sheetName)) {
      const sheet = workbook.Sheets[cat.sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      data.forEach(row => {
        const name = row["반찬명"];
        if (name) {
          categoryMap[name.trim()] = { key: cat.key, ko: cat.ko };
        }
      });
      console.log(`Loaded ${data.length} items from category sheet: [${cat.sheetName}]`);
    } else {
      console.warn(`Category sheet [${cat.sheetName}] not found in workbook.`);
    }
  });

  // 3. 전체_종합요약 시트 읽기
  const summarySheetName = "전체_종합요약";
  if (!workbook.SheetNames.includes(summarySheetName)) {
    throw new Error(`Required sheet "${summarySheetName}" not found in Excel.`);
  }

  const summarySheet = workbook.Sheets[summarySheetName];
  const rawRows = XLSX.utils.sheet_to_json(summarySheet);
  console.log(`Processing ${rawRows.length} items in "${summarySheetName}"...`);

  // 현재 날짜 설정 (YYYY-MM-DD 포맷)
  const currentDate = new Date().toISOString().split("T")[0];

  // 4. 데이터 가공 및 변환
  const weeklyViewsOverrides = {
    "gyeran-mari": 35,
    "myeolchi-bokkeum": 52,
    "dubu-jorim": 41
  };
  const processedData = rawRows.map(row => {
    const rank = Number(row["순위"]);
    const nameKo = (row["반찬명"] || "").trim();

    // 사전에서 다국어명 및 기본 로마자 슬러그 가져오기
    const mapping = banchanDictionary[nameKo] || {
      slug: nameKo.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      names: {
        ko: nameKo,
        en: nameKo,
        ja: nameKo,
        zh: nameKo,
        es: nameKo,
        fr: nameKo,
        ar: nameKo,
        ru: nameKo
      }
    };

    // 고유 slug 생성 (뒤에 순위 넘버를 붙입니다)
    const rankStr = String(rank).padStart(2, "0");
    const uniqueSlug = `${mapping.slug}-${rankStr}`;

    // 카테고리 매핑: 엑셀의 '조리법 분류' (K열) 번호를 통해 분류합니다.
    const categoryRaw = String(row["조리법 분류"] || row["K: 조리법 분류"] || "").replace(/[^0-9]/g, "");
    const categoryNum = parseInt(categoryRaw, 10);
    
    let matchedCategory = { key: "gita", ko: "기타" }; // 기본값 8: 기타
    switch (categoryNum) {
      case 1: matchedCategory = { key: "volkkeum", ko: "볶음" }; break;
      case 2: matchedCategory = { key: "jorim", ko: "조림" }; break;
      case 3: matchedCategory = { key: "muchim", ko: "무침" }; break;
      case 4: matchedCategory = { key: "namul", ko: "나물" }; break;
      case 5: matchedCategory = { key: "soup_stew", ko: "국∙찌개∙전골" }; break;
      case 6: matchedCategory = { key: "steamed_grilled", ko: "찜∙구이∙전" }; break;
      case 7: matchedCategory = { key: "kimchi_pickled", ko: "김치∙장아찌∙젓갈" }; break;
      case 8: matchedCategory = { key: "gita", ko: "기타" }; break;
      default: 
        // 숫자가 없거나 일치하지 않으면 기존 시트 기반 매핑 사용 (하위 호환성)
        if (categoryMap[nameKo]) {
          matchedCategory = categoryMap[nameKo];
        }
        break;
    }

    // 비건 분석
    const veganRaw = String(row["비건여부"] || row["비건 여부(H)"] || "X").trim();
    const vegan = veganRaw === "O";

    let veganNote = "";
    if (!vegan && veganRaw.startsWith("X")) {
      const match = veganRaw.match(/X\s*\(([^)]+)\)/);
      if (match) {
        veganNote = match[1].trim();
      } else {
        veganNote = veganRaw.substring(1).replace(/[\(\)]/g, "").trim();
      }
    }

    // 엑셀의 '매운맛' 컬럼에서 직접 읽어옵니다. (입력 예: 0, 1, 2, 3)
    const spicyRaw = String(row["매운맛"] || row["J: 매운맛"] || "0").replace(/[^0-9]/g, "");
    let spicyLevel = parseInt(spicyRaw, 10);
    if (isNaN(spicyLevel)) spicyLevel = 0;

    const method = String(row["조리법"] || "").trim();

    return {
      id: `banchan-${rankStr}`,
      rank: rank,
      slug: uniqueSlug,
      name_ko: mapping.names.ko,
      name_en: mapping.names.en,
      name_ja: mapping.names.ja,
      name_zh: mapping.names.zh,
      name_es: mapping.names.es,
      name_fr: mapping.names.fr,
      name_ar: mapping.names.ar,
      name_ru: mapping.names.ru,
      spicy_level: spicyLevel,
      category: matchedCategory.key,
      category_ko: matchedCategory.ko,
      ingredients: {
        main: String(row["재료(양)"] || "").trim(),
        seasoning: String(row["양념(양)"] || "").trim()
      },
      cooking: {
        method: method,
        tip: String(row["조리법 응용"] || row["팁"] || "").trim()
      },
      summary: String(row["반찬 스토리"] || row["문화적 배경 및 특징"] || row["블로그/기사 주요 요약(G)"] || "").trim(),
      purchase_guide: String(row["재료 구입∙준비 가이드"] || row["반찬 식재료 구입.준비 가이드"] || row["구매가이드"] || "").trim(),
      vegan: vegan,
      vegan_note: veganNote,
      u_ksc_code: "",
      u_ksc_notes: "",
      // L열에 지정된 사진 파일명이 있으면 사용하고, 없으면 기본 영어 이름(slug)을 사용합니다.
      image_url: row["사진 파일명"] || row["L: 사진 파일명"] 
        ? `/images/banchan/${String(row["사진 파일명"] || row["L: 사진 파일명"]).trim()}`
        : `/images/banchan/${mapping.slug}.jpg`,
      featured: rank <= 8, // 상위 8개 반찬은 홈페이지에 Featured 반찬으로 매핑하기 쉽도록 featured 기본값을 true로 설정해 줍니다.
      views_weekly: weeklyViewsOverrides[uniqueSlug] ?? Math.floor(Math.random() * 50) + 10,
      affiliate: {

        coupang: "",
        amazon_us: "",
        rakuten_jp: ""
      },
      created_at: currentDate,
      updated_at: currentDate
    };
  });

  // 5. JSON 파일 저장
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log("Created directory:", OUTPUT_DIR);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(processedData, null, 2), "utf8");
  console.log(`Successfully converted ${processedData.length} side dishes with multi-language and spicy_level.`);
  console.log(`Saved output file to: ${OUTPUT_PATH}`);
  console.log("=== Conversion Completed successfully! ===");

} catch (error) {
  console.error("!!! Error during conversion process !!!");
  console.error(error.message);
  process.exit(1);
}
