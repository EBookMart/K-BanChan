const fs = require('fs');
const path = require('path');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru'];
const storyNav = {
  ko: "스토리 한식",
  en: "Korean Food Chronicles",
  ja: "韓国料理の裏話と歴史",
  zh: "故事韩食",
  es: "Historia de K-Food",
  fr: "Histoire de K-Food",
  ar: "قصة الطعام الكوري",
  ru: "История K-Food"
};
const storyTitle = {
  ko: "스토리 한식",
  en: "Korean Food Chronicles",
  ja: "韓国料理の裏話と歴史",
  zh: "韩食 故事与起源",
  es: "Historias y Orígenes de la Comida Coreana",
  fr: "L'Histoire Cachée de la Cuisine Coréenne",
  ar: "قصص وأسرار المطبخ الكوري",
  ru: "Истории и Тайны Корейской Кухни"
};
const storySubtitle = {
  ko: "한식, 그 맛있는 이야기",
  en: "Korean Food, Its Delicious Story",
  ja: "韓国料理の美味しい物語",
  zh: "韩食，美味的故事",
  es: "Comida Coreana, Su Deliciosa Historia",
  fr: "La Cuisine Coréenne, Sa Délicieuse Histoire",
  ar: "الطعام الكوري، قصته اللذيذة",
  ru: "Корейская Еда, Ее Вкусная История"
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'src', 'messages', `${loc}.json`);
  if(fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Add nav
    if(data.nav) {
      data.nav.story = storyNav[loc];
    }
    
    // Add story section
    data.story = {
      title: storyTitle[loc],
      subtitle: storySubtitle[loc]
    };
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${loc}.json`);
  } else {
    console.log(`Not found ${loc}.json`);
  }
});
