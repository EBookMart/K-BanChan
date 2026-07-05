import { redirect } from "next/navigation";

// 미들웨어가 작동하지 않는 환경이나 빌드 시점에도
// 사용자를 안전하게 기본 언어인 한국어(/ko) 페이지로 안내합니다.
export default function RootPage() {
  redirect("/ko");
}
