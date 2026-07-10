import { MetadataRoute } from 'next';

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru'];
const baseUrl = 'https://k-banchan.net';

export default function sitemap(): MetadataRoute.Sitemap {
  // 사이트맵에 등록될 주요 경로들입니다. (locale 뒤에 붙는 경로)
  const routes = [
    '',
    '/about',
    '/contact',
    '/ingredients',
    '/banchan',
    '/hot/summer-korean-foods-10',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // 해당 경로에 대한 8개 국어 + 기본(x-default) 대체 언어 링크 모음 생성 (hreflang)
    const alternates: { languages: Record<string, string> } = {
      languages: {},
    };

    locales.forEach((locale) => {
      alternates.languages[locale] = `${baseUrl}/${locale}${route}`;
    });
    
    // x-default는 기본 언어(한국어)로 설정
    alternates.languages['x-default'] = `${baseUrl}/ko${route}`;

    // 각 언어별 실제 URL 엔트리 생성
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates, // GEO(글로벌 SEO) 핵심: 동일 콘텐츠의 다국어 버전을 구글에 알려줌
      });
    });
  });

  return sitemapEntries;
}
