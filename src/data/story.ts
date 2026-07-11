export interface Story {
  id: string;
  slug: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
  author: string;
  dateKey: string;
}

export const stories: Story[] = [
  { id: "story-1", slug: "korean-food-passion", image: "/images/story/placeholder.jpg", titleKey: "essays.story_1.title", subtitleKey: "essays.story_1.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-2", slug: "yakgwa-history", image: "/images/story/placeholder.jpg", titleKey: "essays.story_2.title", subtitleKey: "essays.story_2.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-3", slug: "k-chicken-evolution", image: "/images/story/placeholder.jpg", titleKey: "essays.story_3.title", subtitleKey: "essays.story_3.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-4", slug: "k-ramyeon-globalization", image: "/images/story/placeholder.jpg", titleKey: "essays.story_4.title", subtitleKey: "essays.story_4.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-5", slug: "hotteok-origin", image: "/images/story/placeholder.jpg", titleKey: "essays.story_5.title", subtitleKey: "essays.story_5.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-6", slug: "budaejjigae-birth", image: "/images/story/placeholder.jpg", titleKey: "essays.story_6.title", subtitleKey: "essays.story_6.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-7", slug: "highway-rest-area-food", image: "/images/story/placeholder.jpg", titleKey: "essays.story_7.title", subtitleKey: "essays.story_7.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-8", slug: "anju-culture", image: "/images/story/placeholder.jpg", titleKey: "essays.story_8.title", subtitleKey: "essays.story_8.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-9", slug: "tteokbokki-history", image: "/images/story/placeholder.jpg", titleKey: "essays.story_9.title", subtitleKey: "essays.story_9.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-10", slug: "hangwa-premium-dessert", image: "/images/story/placeholder.jpg", titleKey: "essays.story_10.title", subtitleKey: "essays.story_10.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-11", slug: "korean-pizza-evolution", image: "/images/story/placeholder.jpg", titleKey: "essays.story_11.title", subtitleKey: "essays.story_11.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-12", slug: "kimchi-ingredient-or-dish", image: "/images/story/placeholder.jpg", titleKey: "essays.story_12.title", subtitleKey: "essays.story_12.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-13", slug: "harmony-in-korean-food", image: "/images/story/placeholder.jpg", titleKey: "essays.story_13.title", subtitleKey: "essays.story_13.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-14", slug: "gimbap-infinite-evolution", image: "/images/story/placeholder.jpg", titleKey: "essays.story_14.title", subtitleKey: "essays.story_14.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" },
  { id: "story-15", slug: "coffee-culture-evolution", image: "/images/story/placeholder.jpg", titleKey: "essays.story_15.title", subtitleKey: "essays.story_15.subtitle", author: "K-BanChan Editorial", dateKey: "date_tbd" }
];

export function getAllStories(): Story[] {
  return stories;
}
