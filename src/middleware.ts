import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  console.log("Middleware running for:", req.nextUrl.pathname);
  return intlMiddleware(req);
}

export const config = {
  // 다국어가 적용되어 작동할 주소의 규칙을 정의합니다.
  matcher: ['/', '/(ko|en|ja|zh|es|ar|ru)/:path*']
};
