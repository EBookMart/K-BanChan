import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// 루트 레이아웃은 Next.js가 구동될 때 가장 먼저 찾는 최상위 포장지입니다.
// 이 파일은 아무런 디자인 없이 전달되는 내용을 그대로 다국어 레이아웃([locale]/layout.tsx)으로 보내줍니다.
export default function RootLayout({ children }: Props) {
  return children;
}
