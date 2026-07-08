export type SupportedLocale = 'ko' | 'en' | 'fr' | 'ar';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export interface ContentCTA {
  label: string;
  href: string;
}

export interface PageLocaleContent {
  title: string;
  excerpt: string;
  body: {
    intro: string;
    sections: ContentSection[];
    conclusion: string;
  };
  cta: ContentCTA;
}

export interface LocalizedPageContent {
  slug: string;
  locales: Record<SupportedLocale, PageLocaleContent>;
}

// ─────────────────────────────────────────────
// 1. 한식의 식재료 (Ingredients Hub)
// ─────────────────────────────────────────────
export const ingredientsPageI18n: LocalizedPageContent = {
  slug: 'ingredients',
  locales: {
    ko: {
      title: '한식의 식재료',
      excerpt: '한식의 맛은 양념만이 아니라 제철의 채소, 바다의 해조류와 생선, 곡물과 두류, 그리고 발효 식재료의 층위에서 완성됩니다.',
      body: {
        intro: '한식의 식재료는 자연의 순환과 지역의 기후, 저장과 발효의 지혜를 함께 담고 있습니다. 한 상의 반찬은 단순한 곁들임이 아니라 계절과 땅, 바다와 사람의 감각이 모인 결과입니다.',
        sections: [
          {
            heading: '채소와 나물',
            paragraphs: ['채소는 한식 식탁의 중심을 이룹니다. 나물, 뿌리채소, 잎채소는 무침·볶음·절임 등 다양한 조리법을 통해 재료의 질감과 향을 섬세하게 드러냅니다.']
          },
          {
            heading: '해산물과 해조류',
            paragraphs: ['해산물과 해조류는 한국의 바다 문화를 보여 줍니다. 멸치, 새우, 김, 미역, 다시마는 국물의 바탕이자 감칠맛의 핵심이며, 지역마다 다른 풍미를 형성합니다.']
          },
          {
            heading: '곡물과 두류',
            paragraphs: ['곡물과 두류는 일상의 포만감과 균형을 책임집니다. 쌀, 보리, 콩, 팥은 밥과 죽, 떡과 장류로 이어지며 한식의 영양 구조를 지탱합니다.']
          },
          {
            heading: '발효 식재료',
            paragraphs: ['발효 식재료는 한식의 깊이를 완성합니다. 간장, 된장, 고추장, 식초, 젓갈, 김치는 시간을 통해 맛을 키우며, 같은 재료도 전혀 다른 인상을 만들게 합니다.']
          }
        ],
        conclusion: '한식의 식재료를 이해하는 일은 한 끼를 읽는 일과 같습니다. 무엇이 자라고, 어떻게 저장되며, 어떤 방식으로 상에 오르는지를 알면 반찬 문화의 구조가 더 선명하게 보입니다.'
      },
      cta: { label: '대표 반찬 더 보기', href: '/ko/banchan' }
    },
    en: {
      title: 'Korean Ingredients',
      excerpt: 'The flavor of Korean food is shaped not only by seasoning, but also by seasonal vegetables, seafood and seaweed, grains and legumes, and the depth of fermented ingredients.',
      body: {
        intro: 'Korean ingredients reflect the cycle of nature, regional climate, and the wisdom of preservation and fermentation. A table of banchan is not a collection of side dishes alone, but a composition of season, land, sea, and human touch.',
        sections: [
          {
            heading: 'Vegetables and Wild Greens',
            paragraphs: ['Vegetables are central to the Korean table. Wild greens, root vegetables, and leafy greens reveal distinct textures and aromas through blanching, seasoning, stir-frying, and pickling.']
          },
          {
            heading: 'Seafood and Seaweed',
            paragraphs: ['Seafood and seaweed express Korea\u2019s maritime food culture. Anchovies, shrimp, laver, sea mustard, and kelp build broth, umami, and regional character across many dishes.']
          },
          {
            heading: 'Grains and Legumes',
            paragraphs: ['Grains and legumes provide nourishment and balance. Rice, barley, soybeans, and red beans appear in rice dishes, porridges, rice cakes, and fermented pastes, forming the nutritional base of everyday meals.']
          },
          {
            heading: 'Fermented Ingredients',
            paragraphs: ['Fermented ingredients bring depth and identity to Korean cuisine. Soy sauce, doenjang, gochujang, vinegar, salted seafood, and kimchi transform over time and create layered flavors from simple materials.']
          }
        ],
        conclusion: 'To understand Korean ingredients is to read the structure of a meal. When you know what grows, how it is stored, and how it reaches the table, the culture of banchan becomes clearer.'
      },
      cta: { label: 'Explore Signature Banchan', href: '/en/banchan' }
    },
    fr: {
      title: 'Les ingrédients de la cuisine coréenne',
      excerpt: 'La saveur de la cuisine coréenne ne repose pas seulement sur l\u2019assaisonnement, mais aussi sur les légumes de saison, les produits de la mer, les céréales, les légumineuses et la profondeur des ingrédients fermentés.',
      body: {
        intro: 'Les ingrédients coréens reflètent le cycle de la nature, les climats régionaux et le savoir-faire de la conservation et de la fermentation. Une table de banchan n\u2019est pas un simple assemblage d\u2019accompagnements, mais une composition de saison, de terroir, de mer et de gestes humains.',
        sections: [
          {
            heading: 'Légumes et herbes sauvages',
            paragraphs: ['Les légumes occupent une place centrale dans le repas coréen. Herbes sauvages, racines et légumes-feuilles révèlent leurs textures et leurs arômes à travers le blanchiment, l\u2019assaisonnement, le sauté ou le marinage.']
          },
          {
            heading: 'Fruits de mer et algues',
            paragraphs: ['Les produits de la mer et les algues expriment la culture maritime coréenne. Anchois, crevettes, algues nori, wakamé et kombu construisent les bouillons, l\u2019umami et l\u2019identité régionale de nombreux plats.']
          },
          {
            heading: 'Céréales et légumineuses',
            paragraphs: ['Les céréales et les légumineuses apportent équilibre et satiété. Riz, orge, soja et haricot rouge se retrouvent dans les repas quotidiens, les bouillies, les gâteaux de riz et les pâtes fermentées.']
          },
          {
            heading: 'Ingrédients fermentés',
            paragraphs: ['Les ingrédients fermentés donnent profondeur et caractère à la cuisine coréenne. Sauce soja, doenjang, gochujang, vinaigre, produits salés fermentés et kimchi évoluent avec le temps et enrichissent les saveurs.']
          }
        ],
        conclusion: 'Comprendre les ingrédients coréens, c\u2019est comprendre la structure d\u2019un repas. Savoir ce qui pousse, comment cela se conserve et comment cela arrive à table éclaire la culture du banchan.'
      },
      cta: { label: 'Voir les banchan emblématiques', href: '/fr/banchan' }
    },
    ar: {
      title: 'مكوّنات المطبخ الكوري',
      excerpt: 'لا تتكوّن نكهة الطعام الكوري من التتبيل فقط، بل من الخضروات الموسمية، والمأكولات البحرية والأعشاب البحرية، والحبوب والبقول، وعمق المكوّنات المخمّرة.',
      body: {
        intro: 'تعكس مكوّنات المطبخ الكوري دورة الطبيعة والمناخ المحلي وحكمة الحفظ والتخمير. ومائدة البانتشان ليست مجرد أطباق جانبية، بل بناء يجمع الموسم والأرض والبحر ولمسة الإنسان.',
        sections: [
          {
            heading: 'الخضروات والأعشاب البرية',
            paragraphs: ['تحتل الخضروات موقعاً أساسياً على المائدة الكورية. فالأعشاب البرية والخضروات الجذرية والورقية تكشف عن قوامها وروائحها عبر السلق والتتبيل والقلي الخفيف والتخليل.']
          },
          {
            heading: 'المأكولات البحرية والأعشاب البحرية',
            paragraphs: ['وتعبّر المأكولات البحرية والأعشاب البحرية عن ثقافة البحر في كوريا. فالأنشوجة والروبيان واللافر والواكامي والكلب تضيف المرق والعمق والنكهة الإقليمية إلى كثير من الأطباق.']
          },
          {
            heading: 'الحبوب والبقول',
            paragraphs: ['أما الحبوب والبقول فتمنح التوازن والشبع. ويظهر الأرز والشعير وفول الصويا والفاصولياء الحمراء في الأرز والعصائد وكعك الأرز والمعاجين المخمّرة.']
          },
          {
            heading: 'المكوّنات المخمّرة',
            paragraphs: ['وتمنح المكوّنات المخمّرة المطبخ الكوري عمقه وهويته. فصوص الصويا وصلصة الصويا والغوتشوجانغ والخل والمأكولات المالحة المخمّرة والكيمتشي تتغيّر مع الزمن وتكوّن طبقات من النكهة.']
          }
        ],
        conclusion: 'إن فهم مكوّنات الطعام الكوري هو فهم لبنية الوجبة نفسها. فعندما نعرف ما الذي ينمو، وكيف يُحفَظ، وكيف يصل إلى المائدة، تصبح ثقافة البانتشان أكثر وضوحاً.'
      },
      cta: { label: 'استكشف أشهر أطباق البانتشان', href: '/ar/banchan' }
    }
  }
};

// ─────────────────────────────────────────────
// 2. 여름철 한국음식 10선 (Summer Korean Foods 10)
// ─────────────────────────────────────────────
export const summerKoreanFoods10I18n: LocalizedPageContent = {
  slug: 'summer-korean-foods-10',
  locales: {
    ko: {
      title: '여름철 한국음식 10선',
      excerpt: '무더운 계절의 한식은 뜨겁게 기운을 보충하거나 차갑게 열을 식히는 방식으로 몸의 균형을 돌봅니다.',
      body: {
        intro: '여름 한식은 단순히 시원한 음식만을 뜻하지 않습니다. 삼계탕처럼 뜨거운 음식으로 기운을 보하는 이열치열의 지혜와, 냉면이나 콩국수처럼 열을 식히는 이냉치냉의 방식이 함께 존재합니다.',
        sections: [
          {
            heading: '큐레이션 소개',
            paragraphs: ['이 큐레이션은 삼계탕, 육개장, 초계탕, 임자수탕, 냉면, 밀면, 콩국수, 오이냉국, 화채, 팥빙수로 이어지는 여름철 한국음식 10가지를 소개합니다.']
          },
          {
            heading: '다양한 계절감과 맥락',
            paragraphs: ['각 음식은 계절감, 재료 구성, 조리 온도, 식문화적 맥락이 다릅니다. 어떤 음식은 보양식으로, 어떤 음식은 갈증을 달래는 청량한 한 그릇으로 자리 잡아 왔습니다.']
          },
          {
            heading: '뜨거움과 차가움의 공존',
            paragraphs: ['이 목록은 여름 한식의 다양성을 한눈에 보여 주는 입문 지도이기도 합니다. 뜨거움과 차가움, 국물과 면, 과일과 곡물이 한 계절 안에서 어떻게 공존하는지 살펴볼 수 있습니다.']
          },
          {
            heading: '건강한 선택',
            paragraphs: ['전통적인 지혜는 오늘날에도 유효합니다. 다만 개인의 체질과 건강 상태, 알레르기와 나트륨 섭취량 등을 고려해 자신에게 맞는 방식으로 즐기는 것이 중요합니다.']
          }
        ],
        conclusion: '계절을 먹는다는 것은 단지 제철 재료를 소비하는 것이 아니라, 몸의 리듬에 맞게 한 끼를 고르는 일입니다. 여름 한식 10선은 그 감각을 가장 잘 보여 주는 출발점입니다.'
      },
      cta: { label: 'HOT 8 DISHES로 이동', href: '/ko/hot' }
    },
    en: {
      title: '10 Korean Foods for Summer',
      excerpt: 'Summer foods in Korea care for the body in two ways: by restoring energy with heat or cooling the body with refreshing flavors.',
      body: {
        intro: 'Summer Korean food is not limited to cold dishes. It includes the wisdom of iyeolchiyeol\u2014restoring strength with hot dishes like samgyetang\u2014as well as the cooling logic of dishes such as naengmyeon and kongguksu.',
        sections: [
          {
            heading: 'About This Curation',
            paragraphs: ['This curation introduces ten representative summer foods: samgyetang, yukgaejang, chogyetang, imjasutang, naengmyeon, milmyeon, kongguksu, oi-naengguk, hwachae, and patbingsu.']
          },
          {
            heading: 'Diverse Moods and Contexts',
            paragraphs: ['Each dish carries a different seasonal mood, ingredient structure, serving temperature, and cultural role. Some are nourishing meals, while others are light and refreshing ways to recover from heat.']
          },
          {
            heading: 'Coexistence of Hot and Cold',
            paragraphs: ['Together, these dishes form a map of Korean summer eating. They show how heat and cold, broth and noodles, fruit and grains coexist within one seasonal food culture.']
          },
          {
            heading: 'Mindful Choices',
            paragraphs: ['Traditional food wisdom still matters today. At the same time, personal health conditions, allergies, and sodium intake should be considered when choosing what suits you best.']
          }
        ],
        conclusion: 'To eat with the season is not only to choose seasonal ingredients, but also to choose meals that fit the body\u2019s rhythm. These ten dishes offer one of the clearest introductions to Korean summer cuisine.'
      },
      cta: { label: 'Go to HOT 8 DISHES', href: '/en/hot' }
    },
    fr: {
      title: '10 plats coréens pour l\u2019été',
      excerpt: 'En été, la cuisine coréenne prend soin du corps de deux façons: restaurer l\u2019énergie avec des plats chauds ou rafraîchir l\u2019organisme avec des saveurs froides.',
      body: {
        intro: 'La cuisine coréenne d\u2019été ne se limite pas aux plats froids. Elle comprend aussi la sagesse du iyeolchiyeol, qui consiste à reprendre des forces avec des plats chauds comme le samgyetang, tout en proposant des mets rafraîchissants comme le naengmyeon ou le kongguksu.',
        sections: [
          {
            heading: 'Présentation de la sélection',
            paragraphs: ['Cette sélection présente dix plats emblématiques de l\u2019été: samgyetang, yukgaejang, chogyetang, imjasutang, naengmyeon, milmyeon, kongguksu, oi-naengguk, hwachae et patbingsu.']
          },
          {
            heading: 'Ambiances et contextes variés',
            paragraphs: ['Chaque plat possède sa propre ambiance saisonnière, sa structure d\u2019ingrédients, sa température de service et sa fonction culturelle. Certains sont fortifiants, d\u2019autres légers et désaltérants.']
          },
          {
            heading: 'Coexistence du chaud et du froid',
            paragraphs: ['Ensemble, ils dessinent une carte de l\u2019été coréen à table. On y voit coexister le chaud et le froid, les bouillons et les nouilles, les fruits et les céréales dans une même culture alimentaire saisonnière.']
          },
          {
            heading: 'Choix éclairés',
            paragraphs: ['La sagesse alimentaire traditionnelle reste pertinente aujourd\u2019hui. Mais il convient aussi de tenir compte de la condition physique, des allergies et de l\u2019apport en sodium.']
          }
        ],
        conclusion: 'Manger selon la saison, ce n\u2019est pas seulement choisir des produits de saison, c\u2019est aussi choisir des repas adaptés au rythme du corps. Ces dix plats constituent une excellente porte d\u2019entrée vers la cuisine coréenne d\u2019été.'
      },
      cta: { label: 'Voir HOT 8 DISHES', href: '/fr/hot' }
    },
    ar: {
      title: '10 أطعمة كورية لفصل الصيف',
      excerpt: 'يهتم الطعام الكوري الصيفي بتوازن الجسد بطريقتين: استعادة الطاقة بالأطباق الساخنة أو تبريد الجسم بنكهات منعشة.',
      body: {
        intro: 'لا يقتصر الطعام الكوري في الصيف على الأطباق الباردة. فهو يشمل أيضاً حكمة "إي يول تشي يول"، أي تقوية الجسد بالأطعمة الساخنة مثل سامغيتانغ، إلى جانب أطباق باردة ومنعشة مثل نينغمْيون وكونغوكْسو.',
        sections: [
          {
            heading: 'مقدمة الاختيار',
            paragraphs: ['تقدّم هذه الصفحة عشرة أطعمة كورية صيفية بارزة: سامغيتانغ، يوكغيجانغ، تشوغييتانغ، إمجاسوتانغ، نينغمْيون، ميلميون، كونغوكْسو، أوي نينغوك، هواشاي، وباتبينغسو.']
          },
          {
            heading: 'أمزجة وسياقات متنوعة',
            paragraphs: ['لكل طبق مزاج موسمي خاص، وبنية مختلفة من المكوّنات، ودرجة تقديم، ودور ثقافي مميز. فبعضها يُؤكل للتقوية، وبعضها الآخر يمنح البرودة والانتعاش.']
          },
          {
            heading: 'تعايش الحار والبارد',
            paragraphs: ['وعند جمعها معاً نحصل على خريطة واضحة للمائدة الكورية في الصيف، حيث تتعايش الحرارة والبرودة، والمرق والمعكرونة، والفواكه والحبوب داخل ثقافة موسمية واحدة.']
          },
          {
            heading: 'اختيارات واعية',
            paragraphs: ['ولا تزال الحكمة الغذائية التقليدية ذات قيمة اليوم، لكن من المهم أيضاً مراعاة الحالة الصحية الفردية والحساسية الغذائية وكميات الصوديوم.']
          }
        ],
        conclusion: 'إن الأكل وفق الموسم لا يعني اختيار المكوّنات الموسمية فقط، بل اختيار الوجبة التي تناسب إيقاع الجسد. وهذه الأطباق العشرة تمثل مدخلاً ممتازاً إلى المطبخ الكوري الصيفي.'
      },
      cta: { label: 'الانتقال إلى HOT 8 DISHES', href: '/ar/hot' }
    }
  }
};
