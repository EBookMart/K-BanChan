// src/lib/tracking.ts

/**
 * GA4 / GTM Custom Event Tracking Helper
 * 수익화 및 사용자 전환과 관련된 커스텀 이벤트를 중앙 집중식으로 관리하고 발송합니다.
 */

type EventName =
  | "cta_click_newsletter"
  | "cta_click_guide_download"
  | "cta_click_related_ingredient"
  | "cta_click_related_tool"
  | "cta_click_experience"
  | "cta_click_partner_link"
  | "cta_click_view_more";

export interface TrackingPayload {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export function trackEvent(eventName: EventName, payload?: TrackingPayload) {
  // 1. 브라우저 환경인지 확인 (Next.js SSR 방어)
  if (typeof window === "undefined") return;

  // 2. dataLayer가 존재하면 GTM 방식으로 푸시
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...payload,
    });
  } 
  // 3. gtag가 존재하면 GA4 직접 호출 방식 사용
  else if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: payload?.category,
      event_label: payload?.label,
      value: payload?.value,
      ...payload,
    });
  } 
  // 4. 개발 환경 로깅 (배포 시에는 콘솔을 막거나 무시)
  else if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event] ${eventName}`, payload);
  }
}
