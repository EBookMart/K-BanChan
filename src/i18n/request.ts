import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {headers} from 'next/headers';

export default getRequestConfig(async ({locale}) => {
  // Next.js 환경에 따라 locale 파라미터가 undefined로 들어올 경우,
  // 미들웨어가 세팅해준 x-next-intl-locale 헤더나 기본 언어 설정(ko)을 바탕으로 로케일을 판별합니다.
  const headersList = headers();
  const currentLocale = locale || headersList.get('x-next-intl-locale') || routing.defaultLocale;

  console.log("Resolved locale in requestConfig:", currentLocale);

  // 판별된 언어가 우리가 지원하는 7개 언어 범위에 없다면 404를 내보냅니다.
  if (!(routing.locales as readonly string[]).includes(currentLocale)) {
    console.log("Locale not supported, throwing 404:", currentLocale);
    notFound();
  }

  return {
    locale: currentLocale,
    // 알맞은 번역 json 데이터를 import하여 제공합니다.
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});
