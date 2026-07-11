export interface Story {
  id: string;
  slug: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
  author: string;
  date: string;
}

// 앞으로 작성될 에세이를 이 배열에 추가합니다.
export const stories: Story[] = [
  // 예시 데이터 (필요 시 주석 해제하여 사용)
  /*
  {
    id: "story-1",
    slug: "ramen-origin",
    image: "/images/story/ramen.jpg",
    titleKey: "ramen_title",
    subtitleKey: "ramen_subtitle",
    author: "K-BanChan Editorial",
    date: "2026-07-15"
  }
  */
];

export function getAllStories(): Story[] {
  return stories;
}
