import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // 지원하는 언어 코드 목록
  locales: ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru'],
  // 기본 설정 언어 (한국어)
  defaultLocale: 'ko'
});

// 페이지 이동 시 사용할 다국어 링크 및 유틸리티 도구들
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
