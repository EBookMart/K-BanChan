import type { LocalizedPageContent } from './types';

export const ingredientsPageI18n: LocalizedPageContent = {
  slug: 'ingredients',
  locales: {
    ko: {
      title: '한식의 식재료',
      excerpt: '한식의 맛은 양념만이 아니라 제철의 채소, 바다의 해조류와 생선, 곡물과 두류, 그리고 발효 식재료의 층위에서 완성됩니다.',
      body: {
        intro: '한식의 식재료는 자연의 순환과 지역의 기후, 저장과 발효의 지혜를 함께 담고 있습니다. 한 상의 반찬은 단순한 곁들임이 아니라 계절과 땅, 바다와 사람의 감각이 모인 결과입니다.',
        sections: [
          { heading: '채소와 나물', paragraphs: ['채소는 한식 식탁의 중심을 이룹니다. 나물, 뿌리채소, 잎채소는 무침·볶음·절임 등 다양한 조리법을 통해 재료의 질감과 향을 섬세하게 드러냅니다.'] },
          { heading: '해산물과 해조류', paragraphs: ['해산물과 해조류는 한국의 바다 문화를 보여 줍니다. 멸치, 새우, 김, 미역, 다시마는 국물의 바탕이자 감칠맛의 핵심이며, 지역마다 다른 풍미를 형성합니다.'] },
          { heading: '곡물과 두류', paragraphs: ['곡물과 두류는 일상의 포만감과 균형을 책임집니다. 쌀, 보리, 콩, 팥은 밥과 죽, 떡과 장류로 이어지며 한식의 영양 구조를 지탱합니다.'] },
          { heading: '발효 식재료', paragraphs: ['발효 식재료는 한식의 깊이를 완성합니다. 간장, 된장, 고추장, 식초, 젓갈, 김치는 시간을 통해 맛을 키우며, 같은 재료도 전혀 다른 인상을 만들게 합니다.'] }
        ],
        conclusion: '한식의 식재료를 이해하는 일은 한 끼를 읽는 일과 같습니다. 무엇이 자라고, 어떻게 저장되며, 어떤 방식으로 상에 오르는지를 알면 반찬 문화의 구조가 더 선명하게 보입니다.'
      },
      cta: { label: '대표 반찬 더 보기', href: '/banchan' }
    },
    en: {
      title: 'Korean Ingredients',
      excerpt: 'The flavor of Korean food is shaped not only by seasoning, but also by seasonal vegetables, seafood and seaweed, grains and legumes, and the depth of fermented ingredients.',
      body: {
        intro: 'Korean ingredients reflect the cycle of nature, regional climate, and the wisdom of preservation and fermentation. A table of banchan is not a collection of side dishes alone, but a composition of season, land, sea, and human touch.',
        sections: [
          { heading: 'Vegetables and Wild Greens', paragraphs: ['Vegetables are central to the Korean table. Wild greens, root vegetables, and leafy greens reveal distinct textures and aromas through blanching, seasoning, stir-frying, and pickling.'] },
          { heading: 'Seafood and Seaweed', paragraphs: ['Seafood and seaweed express Korea\u2019s maritime food culture. Anchovies, shrimp, laver, sea mustard, and kelp build broth, umami, and regional character across many dishes.'] },
          { heading: 'Grains and Legumes', paragraphs: ['Grains and legumes provide nourishment and balance. Rice, barley, soybeans, and red beans appear in rice dishes, porridges, rice cakes, and fermented pastes, forming the nutritional base of everyday meals.'] },
          { heading: 'Fermented Ingredients', paragraphs: ['Fermented ingredients bring depth and identity to Korean cuisine. Soy sauce, doenjang, gochujang, vinegar, salted seafood, and kimchi transform over time and create layered flavors from simple materials.'] }
        ],
        conclusion: 'To understand Korean ingredients is to read the structure of a meal. When you know what grows, how it is stored, and how it reaches the table, the culture of banchan becomes clearer.'
      },
      cta: { label: 'Explore Signature Banchan', href: '/banchan' }
    },
    fr: {
      title: 'Les ingr\u00e9dients de la cuisine cor\u00e9enne',
      excerpt: 'La saveur de la cuisine cor\u00e9enne ne repose pas seulement sur l\u2019assaisonnement, mais aussi sur les l\u00e9gumes de saison, les produits de la mer, les c\u00e9r\u00e9ales, les l\u00e9gumineuses et la profondeur des ingr\u00e9dients ferment\u00e9s.',
      body: {
        intro: 'Les ingr\u00e9dients cor\u00e9ens refl\u00e8tent le cycle de la nature, les climats r\u00e9gionaux et le savoir-faire de la conservation et de la fermentation. Une table de banchan n\u2019est pas un simple assemblage d\u2019accompagnements, mais une composition de saison, de terroir, de mer et de gestes humains.',
        sections: [
          { heading: 'L\u00e9gumes et herbes sauvages', paragraphs: ['Les l\u00e9gumes occupent une place centrale dans le repas cor\u00e9en. Herbes sauvages, racines et l\u00e9gumes-feuilles r\u00e9v\u00e8lent leurs textures et leurs ar\u00f4mes \u00e0 travers le blanchiment, l\u2019assaisonnement, le saut\u00e9 ou le marinage.'] },
          { heading: 'Fruits de mer et algues', paragraphs: ['Les produits de la mer et les algues expriment la culture maritime cor\u00e9enne. Anchois, crevettes, algues nori, wakam\u00e9 et kombu construisent les bouillons, l\u2019umami et l\u2019identit\u00e9 r\u00e9gionale de nombreux plats.'] },
          { heading: 'C\u00e9r\u00e9ales et l\u00e9gumineuses', paragraphs: ['Les c\u00e9r\u00e9ales et les l\u00e9gumineuses apportent \u00e9quilibre et sati\u00e9t\u00e9. Riz, orge, soja et haricot rouge se retrouvent dans les repas quotidiens, les bouillies, les g\u00e2teaux de riz et les p\u00e2tes ferment\u00e9es.'] },
          { heading: 'Ingr\u00e9dients ferment\u00e9s', paragraphs: ['Les ingr\u00e9dients ferment\u00e9s donnent profondeur et caract\u00e8re \u00e0 la cuisine cor\u00e9enne. Sauce soja, doenjang, gochujang, vinaigre, produits sal\u00e9s ferment\u00e9s et kimchi \u00e9voluent avec le temps et enrichissent les saveurs.'] }
        ],
        conclusion: 'Comprendre les ingr\u00e9dients cor\u00e9ens, c\u2019est comprendre la structure d\u2019un repas. Savoir ce qui pousse, comment cela se conserve et comment cela arrive \u00e0 table \u00e9claire la culture du banchan.'
      },
      cta: { label: 'Voir les banchan embl\u00e9matiques', href: '/banchan' }
    },
    ar: {
      title: '\u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0645\u0637\u0628\u062e \u0627\u0644\u0643\u0648\u0631\u064a',
      excerpt: '\u0644\u0627 \u062a\u062a\u0643\u0648\u0651\u0646 \u0646\u0643\u0647\u0629 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0643\u0648\u0631\u064a \u0645\u0646 \u0627\u0644\u062a\u062a\u0628\u064a\u0644 \u0641\u0642\u0637\u060c \u0628\u0644 \u0645\u0646 \u0627\u0644\u062e\u0636\u0631\u0648\u0627\u062a \u0627\u0644\u0645\u0648\u0633\u0645\u064a\u0629\u060c \u0648\u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062a \u0627\u0644\u0628\u062d\u0631\u064a\u0629 \u0648\u0627\u0644\u0623\u0639\u0634\u0627\u0628 \u0627\u0644\u0628\u062d\u0631\u064a\u0629\u060c \u0648\u0627\u0644\u062d\u0628\u0648\u0628 \u0648\u0627\u0644\u0628\u0642\u0648\u0644\u060c \u0648\u0639\u0645\u0642 \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0645\u062e\u0645\u0651\u0631\u0629.',
      body: {
        intro: '\u062a\u0639\u0643\u0633 \u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0645\u0637\u0628\u062e \u0627\u0644\u0643\u0648\u0631\u064a \u062f\u0648\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0639\u0629 \u0648\u0627\u0644\u0645\u0646\u0627\u062e \u0627\u0644\u0645\u062d\u0644\u064a \u0648\u062d\u0643\u0645\u0629 \u0627\u0644\u062d\u0641\u0638 \u0648\u0627\u0644\u062a\u062e\u0645\u064a\u0631. \u0648\u0645\u0627\u0626\u062f\u0629 \u0627\u0644\u0628\u0627\u0646\u062a\u0634\u0627\u0646 \u0644\u064a\u0633\u062a \u0645\u062c\u0631\u062f \u0623\u0637\u0628\u0627\u0642 \u062c\u0627\u0646\u0628\u064a\u0629\u060c \u0628\u0644 \u0628\u0646\u0627\u0621 \u064a\u062c\u0645\u0639 \u0627\u0644\u0645\u0648\u0633\u0645 \u0648\u0627\u0644\u0623\u0631\u0636 \u0648\u0627\u0644\u0628\u062d\u0631 \u0648\u0644\u0645\u0633\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646.',
        sections: [
          { heading: '\u0627\u0644\u062e\u0636\u0631\u0648\u0627\u062a \u0648\u0627\u0644\u0623\u0639\u0634\u0627\u0628 \u0627\u0644\u0628\u0631\u064a\u0629', paragraphs: ['\u062a\u062d\u062a\u0644 \u0627\u0644\u062e\u0636\u0631\u0648\u0627\u062a \u0645\u0648\u0642\u0639\u0627\u064b \u0623\u0633\u0627\u0633\u064a\u0627\u064b \u0639\u0644\u0649 \u0627\u0644\u0645\u0627\u0626\u062f\u0629 \u0627\u0644\u0643\u0648\u0631\u064a\u0629. \u0641\u0627\u0644\u0623\u0639\u0634\u0627\u0628 \u0627\u0644\u0628\u0631\u064a\u0629 \u0648\u0627\u0644\u062e\u0636\u0631\u0648\u0627\u062a \u0627\u0644\u062c\u0630\u0631\u064a\u0629 \u0648\u0627\u0644\u0648\u0631\u0642\u064a\u0629 \u062a\u0643\u0634\u0641 \u0639\u0646 \u0642\u0648\u0627\u0645\u0647\u0627 \u0648\u0631\u0648\u0627\u0626\u062d\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0633\u0644\u0642 \u0648\u0627\u0644\u062a\u062a\u0628\u064a\u0644 \u0648\u0627\u0644\u0642\u0644\u064a \u0627\u0644\u062e\u0641\u064a\u0641 \u0648\u0627\u0644\u062a\u062e\u0644\u064a\u0644.'] },
          { heading: '\u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062a \u0627\u0644\u0628\u062d\u0631\u064a\u0629 \u0648\u0627\u0644\u0623\u0639\u0634\u0627\u0628 \u0627\u0644\u0628\u062d\u0631\u064a\u0629', paragraphs: ['\u0648\u062a\u0639\u0628\u0651\u0631 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062a \u0627\u0644\u0628\u062d\u0631\u064a\u0629 \u0648\u0627\u0644\u0623\u0639\u0634\u0627\u0628 \u0627\u0644\u0628\u062d\u0631\u064a\u0629 \u0639\u0646 \u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0628\u062d\u0631 \u0641\u064a \u0643\u0648\u0631\u064a\u0627. \u0641\u0627\u0644\u0623\u0646\u0634\u0648\u062c\u0629 \u0648\u0627\u0644\u0631\u0648\u0628\u064a\u0627\u0646 \u0648\u0627\u0644\u0644\u0627\u0641\u0631 \u0648\u0627\u0644\u0648\u0627\u0643\u0627\u0645\u064a \u0648\u0627\u0644\u0643\u0644\u0628 \u062a\u0636\u064a\u0641 \u0627\u0644\u0645\u0631\u0642 \u0648\u0627\u0644\u0639\u0645\u0642 \u0648\u0627\u0644\u0646\u0643\u0647\u0629 \u0627\u0644\u0625\u0642\u0644\u064a\u0645\u064a\u0629 \u0625\u0644\u0649 \u0643\u062b\u064a\u0631 \u0645\u0646 \u0627\u0644\u0623\u0637\u0628\u0627\u0642.'] },
          { heading: '\u0627\u0644\u062d\u0628\u0648\u0628 \u0648\u0627\u0644\u0628\u0642\u0648\u0644', paragraphs: ['\u0623\u0645\u0627 \u0627\u0644\u062d\u0628\u0648\u0628 \u0648\u0627\u0644\u0628\u0642\u0648\u0644 \u0641\u062a\u0645\u0646\u062d \u0627\u0644\u062a\u0648\u0627\u0632\u0646 \u0648\u0627\u0644\u0634\u0628\u0639. \u0648\u064a\u0638\u0647\u0631 \u0627\u0644\u0623\u0631\u0632 \u0648\u0627\u0644\u0634\u0639\u064a\u0631 \u0648\u0641\u0648\u0644 \u0627\u0644\u0635\u0648\u064a\u0627 \u0648\u0627\u0644\u0641\u0627\u0635\u0648\u0644\u064a\u0627\u0621 \u0627\u0644\u062d\u0645\u0631\u0627\u0621 \u0641\u064a \u0627\u0644\u0623\u0631\u0632 \u0648\u0627\u0644\u0639\u0635\u0627\u0626\u062f \u0648\u0643\u0639\u0643 \u0627\u0644\u0623\u0631\u0632 \u0648\u0627\u0644\u0645\u0639\u0627\u062c\u064a\u0646 \u0627\u0644\u0645\u062e\u0645\u0651\u0631\u0629.'] },
          { heading: '\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0645\u062e\u0645\u0651\u0631\u0629', paragraphs: ['\u0648\u062a\u0645\u0646\u062d \u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0645\u062e\u0645\u0651\u0631\u0629 \u0627\u0644\u0645\u0637\u0628\u062e \u0627\u0644\u0643\u0648\u0631\u064a \u0639\u0645\u0642\u0647 \u0648\u0647\u0648\u064a\u062a\u0647. \u0641\u0635\u0648\u0635 \u0627\u0644\u0635\u0648\u064a\u0627 \u0648\u0635\u0644\u0635\u0629 \u0627\u0644\u0635\u0648\u064a\u0627 \u0648\u0627\u0644\u063a\u0648\u062a\u0634\u0648\u062c\u0627\u0646\u063a \u0648\u0627\u0644\u062e\u0644 \u0648\u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062a \u0627\u0644\u0645\u0627\u0644\u062d\u0629 \u0627\u0644\u0645\u062e\u0645\u0651\u0631\u0629 \u0648\u0627\u0644\u0643\u064a\u0645\u062a\u0634\u064a \u062a\u062a\u063a\u064a\u0651\u0631 \u0645\u0639 \u0627\u0644\u0632\u0645\u0646 \u0648\u062a\u0643\u0648\u0651\u0646 \u0637\u0628\u0642\u0627\u062a \u0645\u0646 \u0627\u0644\u0646\u0643\u0647\u0629.'] }
        ],
        conclusion: '\u0625\u0646 \u0641\u0647\u0645 \u0645\u0643\u0648\u0651\u0646\u0627\u062a \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0643\u0648\u0631\u064a \u0647\u0648 \u0641\u0647\u0645 \u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u0648\u062c\u0628\u0629 \u0646\u0641\u0633\u0647\u0627. \u0641\u0639\u0646\u062f\u0645\u0627 \u0646\u0639\u0631\u0641 \u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0646\u0645\u0648\u060c \u0648\u0643\u064a\u0641 \u064a\u064f\u062d\u0641\u064e\u0638\u060c \u0648\u0643\u064a\u0641 \u064a\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0627\u0626\u062f\u0629\u060c \u062a\u0635\u0628\u062d \u062b\u0642\u0627\u0641\u0629 \u0627\u0644\u0628\u0627\u0646\u062a\u0634\u0627\u0646 \u0623\u0643\u062b\u0631 \u0648\u0636\u0648\u062d\u0627\u064b.'
      },
      cta: { label: '\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0634\u0647\u0631 \u0623\u0637\u0628\u0627\u0642 \u0627\u0644\u0628\u0627\u0646\u062a\u0634\u0627\u0646', href: '/banchan' }
    }
  }
};
