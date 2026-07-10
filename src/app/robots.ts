import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // API 등의 시스템 경로는 로봇 수집 방지
    },
    sitemap: 'https://k-banchan.net/sitemap.xml',
  };
}
