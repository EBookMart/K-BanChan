import createNextIntlPlugin from 'next-intl/plugin';

// 인자값 없이 호출하여 기본 경로인 ./src/i18n.ts를 바라보게 합니다.
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
