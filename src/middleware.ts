import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru'],
  defaultLocale: 'ko',
  localeDetection: true,  // ⭐ 핵심: Accept-Language 자동 감지 활성화
  localePrefix: 'always',   // 모든 URL에 로케일 prefix 유지
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
