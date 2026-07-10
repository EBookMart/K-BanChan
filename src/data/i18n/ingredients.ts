import { LocalizedPageContent } from './types';

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
            heading: '채소와 과실',
            paragraphs: ['채소는 한식 식탁의 중심을 이룹니다. 나물, 뿌리채소, 잎채소는 무침·볶음·절임 등 다양한 조리법을 통해 재료의 질감과 향을 섬세하게 드러냅니다.'],
            detail: ``
          },
          {
            heading: '어류와 해조류',
            paragraphs: ['해산물과 해조류는 한국의 바다 문화를 보여 줍니다. 멸치, 새우, 김, 미역, 다시마는 국물의 바탕이자 감칠맛의 핵심이며, 지역마다 다른 풍미를 형성합니다.'],
            detail: ``
          },
          {
            heading: '곡물과 두류',
            paragraphs: ['곡물과 두류는 일상의 포만감과 균형을 책임집니다. 쌀, 보리, 콩, 팥은 밥과 죽, 떡과 장류로 이어지며 한식의 영양 구조를 지탱합니다.'],
            detail: ``
          },
          {
            heading: '발효 식재료',
            paragraphs: ['발효 식재료는 한식의 깊이를 완성합니다. 간장, 된장, 고추장, 식초, 젓갈, 김치는 시간을 통해 맛을 키우며, 같은 재료도 전혀 다른 인상을 만들게 합니다.'],
            detail: ``
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
            paragraphs: ['Vegetables are central to the Korean table. Wild greens, root vegetables, and leafy greens reveal distinct textures and aromas through blanching, seasoning, stir-frying, and pickling.'],
            detail: ``
          },
          {
            heading: 'Seafood and Seaweed',
            paragraphs: ['Seafood and seaweed express Korea’s maritime food culture. Anchovies, shrimp, laver, sea mustard, and kelp build broth, umami, and regional character across many dishes.'],
            detail: ``
          },
          {
            heading: 'Grains and Legumes',
            paragraphs: ['Grains and legumes provide nourishment and balance. Rice, barley, soybeans, and red beans appear in rice dishes, porridges, rice cakes, and fermented pastes, forming the nutritional base of everyday meals.'],
            detail: ``
          },
          {
            heading: 'Fermented Ingredients',
            paragraphs: ['Fermented ingredients bring depth and identity to Korean cuisine. Soy sauce, doenjang, gochujang, vinegar, salted seafood, and kimchi transform over time and create layered flavors from simple materials.'],
            detail: ``
          }
        ],
        conclusion: 'To understand Korean ingredients is to read the structure of a meal. When you know what grows, how it is stored, and how it reaches the table, the culture of banchan becomes clearer.'
      },
      cta: { label: 'Explore Signature Banchan', href: '/en/banchan' }
    },
    fr: {
      title: 'Les ingrédients de la cuisine coréenne',
      excerpt: 'La saveur de la cuisine coréenne ne repose pas seulement sur l’assaisonnement, mais aussi sur les légumes de saison, les produits de la mer, les céréales, les légumineuses et la profondeur des ingrédients fermentés.',
      body: {
        intro: 'Les ingrédients coréens reflètent le cycle de la nature, les climats régionaux et le savoir-faire de la conservation et de la fermentation. Une table de banchan n’est pas un simple assemblage d’accompagnements, mais une composition de saison, de terroir, de mer et de gestes humains.',
        sections: [
          {
            heading: 'Légumes et herbes sauvages',
            paragraphs: ['Les légumes occupent une place centrale dans le repas coréen. Herbes sauvages, racines et légumes-feuilles révèlent leurs textures et leurs arômes à travers le blanchiment, l’assaisonnement, le sauté ou le marinage.'],
            detail: ``
          },
          {
            heading: 'Fruits de mer et algues',
            paragraphs: ['Les produits de la mer et les algues expriment la culture maritime coréenne. Anchois, crevettes, algues nori, wakamé et kombu construisent les bouillons, l’umami et l’identité régionale de nombreux plats.'],
            detail: ``
          },
          {
            heading: 'Céréales et légumineuses',
            paragraphs: ['Les céréales et les légumineuses apportent équilibre et satiété. Riz, orge, soja et haricot rouge se retrouvent dans les repas quotidiens, les bouillies, les gâteaux de riz et les pâtes fermentées.'],
            detail: ``
          },
          {
            heading: 'Ingrédients fermentés',
            paragraphs: ['Les ingrédients fermentés donnent profondeur et caractère à la cuisine coréenne. Sauce soja, doenjang, gochujang, vinaigre, produits salés fermentés et kimchi évoluent avec le temps et enrichissent les saveurs.'],
            detail: ``
          }
        ],
        conclusion: 'Comprendre les ingrédients coréens, c’est comprendre la structure d’un repas. Savoir ce qui pousse, comment cela se conserve et comment cela arrive à table éclaire la culture du banchan.'
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
            paragraphs: ['تحتل الخضروات موقعاً أساسياً على المائدة الكورية. فالأعشاب البرية والخضروات الجذرية والورقية تكشف عن قوامها وروائحها عبر السلق والتتبيل والقلي الخفيف والتخليل.'],
            detail: ``
          },
          {
            heading: 'المأكولات البحرية والأعشاب البحرية',
            paragraphs: ['وتعبّر المأكولات البحرية والأعشاب البحرية عن ثقافة البحر في كوريا. فالأنشوجة والروبيان واللافر والواكامي والكلب تضيف المرق والعمق والنكهة الإقليمية إلى كثير من الأطباق.'],
            detail: ``
          },
          {
            heading: 'الحبوب والبقول',
            paragraphs: ['أما الحبوب والبقول فتمنح التوازن والشبع. ويظهر الأرز والشعير وفول الصويا والفاصولياء الحمراء في الأرز والعصائد وكعك الأرز والمعاجين المخمّرة.'],
            detail: ``
          },
          {
            heading: 'المكوّنات المخمّرة',
            paragraphs: ['وتمنح المكوّنات المخمّرة المطبخ الكوري عمقه وهويته. فصوص الصويا وصلصة الصويا والغوتشوجانغ والخل والمأكولات المالحة المخمّرة والكيمتشي تتغيّر مع الزمن وتكوّن طبقات من النكهة.'],
            detail: ``
          }
        ],
        conclusion: 'إن فهم مكوّنات الطعام الكوري هو فهم لبنية الوجبة نفسها. فعندما نعرف ما الذي ينمو، وكيف يُحفَظ، وكيف يصل إلى المائدة، تصبح ثقافة البانتشان أكثر وضوحاً.'
      },
      cta: { label: 'استكشف أشهر أطباق البانتشان', href: '/ar/banchan' }
    },
    ja: {
      title: '韓国料理의 食材',
      excerpt: '韓国料理の味は、調味料だけでなく、旬の野菜、海の海藻や魚、穀物や豆類、그리고 発酵食材の深みによって完成されます。',
      body: {
        intro: '韓国の食材には、自然の循環、地域の気候、그리고 保存と発酵の知恵が息づいています。食卓を彩る「パンチャン（おかず）」は単なる添え物ではなく、季節、大地、海、그리고 人々の技と愛情が織りなす芸術です。',
        sections: [
          {
            heading: '野菜とナムル',
            paragraphs: ['野菜は韓国の食卓の中心です。ナムル、根菜、葉野菜などは、和える・炒める・漬けるといった多様な調理法を通じて、素材の食感と香りを繊細に引き出します。'],
            detail: ``
          },
          {
            heading: '海鮮と海藻類',
            paragraphs: ['海鮮と海藻類は、三方を海に囲まれた韓国の豊かな海洋文化を物語っています。煮干し、エビ、海苔、ワカメ、昆布などは、出汁の基本であり旨味の核となっており、地域ごとに個性豊かな風味を育みます。'],
            detail: ``
          },
          {
            heading: '穀物と豆類',
            paragraphs: ['穀物と豆類は、日々の食卓の栄養バランスと満足感を支えています。米、麦、大豆、小豆などは、ご飯や粥、餅、그리고 調味料である「ジャン（醤）」へと姿を変え、韓国料理の健康的な基盤を支えています。'],
            detail: ``
          },
          {
            heading: '発酵食材',
            paragraphs: ['発酵食材は、韓国料理に深いコクと立体感を与えます。醤油、テンジャン（味噌）、コチュジャン、酢、アミの塩辛などの魚醤、그리고 キムチは、時の経過とともに深い旨味を育み、シンプルな素材を驚くほど豊かな味わいへと変化させます。'],
            detail: ``
          }
        ],
        conclusion: '韓国料理の食材を理解することは、一食の背後にある伝統を読み解くことと同じです。どのような環境で育ち、どのように保存され、どのような工夫で食卓にのぼるのかを知ることで、パンチャン文化の奥深さがより鮮明に見えてきます。'
      },
      cta: { label: '代表的なパンチャンを見る', href: '/ja/banchan' }
    },
    zh: {
      title: '韩食的食材',
      excerpt: '韩食的风味不仅源于调味，更在于时令蔬菜、海洋鱼介与海藻、谷物与豆类，以及发酵食材所构成的丰富层次。',
      body: {
        intro: '韩食的食材凝聚着自然循环、地域气候以及保存与发酵的智慧。餐桌上的一盘伴餐（Banchan）不仅是配菜，更是季节、土地、海洋与人文情感交织的结晶。',
        sections: [
          {
            heading: '蔬菜与野菜（Namul）',
            paragraphs: ['蔬菜是韩食餐桌的核心。各种野菜、根茎类和叶菜通过凉拌、煸炒、盐渍等多样化烹饪手法，将食材本身的独特质感与香气展现得淋漓尽致。'],
            detail: ``
          },
          {
            heading: '海鲜与海藻',
            paragraphs: ['海鲜与海藻展现了韩国的海洋饮食文化。鳀鱼、虾、紫菜、裙带菜、昆布不仅是汤底的灵魂与鲜味（Umami）的来源，更塑造了不同地域的独特风味。'],
            detail: ``
          },
          {
            heading: '谷物与豆类',
            paragraphs: ['谷物与豆类维系着日常膳食的营养与饱腹感。大米、大麦、大豆、红豆被广泛运用于米饭、粥品、年糕以及酱类的制作中，构成了韩食的营养基石。'],
            detail: ``
          },
          {
            heading: '发酵食材',
            paragraphs: ['发酵食材赋予了韩食深邃的灵魂。酱油、大酱、辣椒酱、食醋、鱼露以及泡菜（Kimchi），通过时间的沉淀孕育出多层次的风味，使相同的食材展现出截然不同的风貌。'],
            detail: ``
          }
        ],
        conclusion: '理解韩食的食材，犹如阅读一顿饭的内在结构。当您了解食材的生长环境、保存方式以及呈上餐桌的工序时，便能更清晰地领略伴餐文化的独特魅力。'
      },
      cta: { label: '探索代表性伴餐', href: '/zh/banchan' }
    },
    es: {
      title: 'Ingredientes Coreanos',
      excerpt: 'El sabor de la cocina coreana se define no solo por sus condimentos, sino también por las verduras de temporada, los pescados y algas, los granos y legumbres, y la profundidad de los ingredientes fermentados.',
      body: {
        intro: 'Los ingredientes coreanos reflejan el ciclo de la naturaleza, el clima regional y la sabiduría de la conservación y la fermentación. Una mesa de banchan no es solo un conjunto de acompañamientos, sino una composición de la estación, la tierra, el mar y el toque humano.',
        sections: [
          {
            heading: 'Verduras y Hierbas Silvestres',
            paragraphs: ['Las verduras son el elemento central de la mesa coreana. Las hierbas silvestres (namul), las raíces y las verduras de hoja revelan texturas y aromas sutiles a través de métodos como el blanqueado, el sazonado, el salteado y el encurtido.'],
            detail: ``
          },
          {
            heading: 'Pescados, Mariscos y Algas',
            paragraphs: ['Los mariscos y las algas expresan la rica cultura marítima de Corea. Las anchoas, los camarones, el alga laver (gim), el alga miyeok y el alga kelp (dasima) constituyen la base de los caldos y aportan el sabor umami y el carácter regional a muchos platos.'],
            detail: ``
          },
          {
            heading: 'Granos y Legumbres',
            paragraphs: ['Los granos y las legumbres aportan saciedad y equilibrio a la dieta diaria. El arroz, la cebada, la soya y los frijoles rojos se transforman en arroces, papillas (juk), pasteles de arroz (tteok) y pastas fermentadas, sosteniendo la estructura nutricional de la comida coreana.'],
            detail: ``
          },
          {
            heading: 'Ingredientes Fermentados',
            paragraphs: ['Los ingredientes fermentados completan la profundidad de la cocina coreana. La salsa de soya (ganjang), la pasta de soya (doenjang), la pasta de chile (gochujang), el vinagre, los mariscos salados fermentados (jeotgal) y el kimchi desarrollan su sabor a lo largo del tiempo, otorgando una dimensión única a ingredientes sencillos.'],
            detail: ``
          }
        ],
        conclusion: 'Comprender los ingredientes coreanos es como descifrar una comida. Saber qué se cultiva, cómo se almacena y de qué manera llega a la mesa nos permite ver con mayor claridad la estructura y la riqueza de la cultura del banchan.'
      },
      cta: { label: 'Explorar Banchan Emblemáticos', href: '/es/banchan' }
    },
    ru: {
      title: 'Ингредиенты корейской кухни',
      excerpt: 'Вкус корейской кухни формируется не только приправами, но и сезонными овощами, рыбой и морскими водорослями, злаками и бобовыми, а также глубиной ферментированных продуктов.',
      body: {
        intro: 'Корейские ингредиенты отражают природные циклы, особенности регионального климата и мудрость сохранения продуктов с помощью ферментации. Традиционный стол панчхан — это не просто набор закусок, а гармония времен года, земли, моря и заботливых рук человека.',
        sections: [
          {
            heading: 'Овощи и дикорастущие травы',
            paragraphs: ['Овощи занимают центральное место на корейском столе. Дикорастущие травы (намуль), корнеплоды и листовая зелень раскрывают свою уникальную текстуру и аромат благодаря бланшированию, заправке специями, обжариванию или маринованию.'],
            detail: ``
          },
          {
            heading: 'Морепродукты и водоросли',
            paragraphs: ['Рыба, морепродукты и водоросли отражают богатую морскую культуру Кореи. Анчоусы, креветки, водоросли гим (нори), миёк (вакаме) и дасима (комбу) создают основу для бульонов, насыщают блюда вкусом умами и определяют региональные кулинарные особенности.'],
            detail: ``
          },
          {
            heading: 'Злаки и бобовые',
            paragraphs: ['Зерновые и бобовые культуры обеспечивают сытость и сбалансированность питания. Рис, ячмень, соевые бобы и красная фасоль адзуки используются для приготовления каш, рисовых пирогов тток и традиционных ферментированных паст, составляя питательную основу корейского рациона.'],
            detail: ``
          },
          {
            heading: 'Ферментированные ингредиенты',
            paragraphs: ['Ферментированные продукты определяют истинную глубину корейской кухни. Соевый соус, паста твенджан, острая паста кочхуджан, уксус, соленые морепродукты чоткаль и кимчи раскрывают свой вкус с течением времени, превращая простые ингредиенты в гастрономические шедевры.'],
            detail: ``
          }
        ],
        conclusion: 'Понимание корейских ингредиентов помогает раскрыть саму структуру трапезы. Зная, где растут продукты, как они хранятся и каким способом подаются к столу, вы сможете глубже оценить богатство культуры панчхана.'
      },
      cta: { label: 'Посмотреть популярные панчханы', href: '/ru/banchan' }
    }
  }
};
