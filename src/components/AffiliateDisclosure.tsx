import React from "react";
import { Info } from "lucide-react";

interface AffiliateDisclosureProps {
  className?: string;
  locale?: string;
}

export default function AffiliateDisclosure({ className = "", locale = "ko" }: AffiliateDisclosureProps) {
  
  // 향후 next-intl 번역으로 분리 가능. 현재는 fallback 지원.
  const messages: Record<string, string> = {
    ko: "이 페이지의 일부 링크는 파트너십 또는 제휴 링크일 수 있으며, 이를 통해 K-BanChan 프로젝트가 소정의 수수료를 지원받아 운영될 수 있습니다. 모든 콘텐츠는 독립적이고 객관적으로 작성됩니다.",
    en: "Some links on this page may be affiliate or partnership links. K-BanChan may earn a small commission if you make a purchase, which helps support our project. All content is written independently and objectively.",
    ja: "このページのリンクの一部はアフィリエイトまたはパートナーシップリンクである場合があり、購入されるとK-BanChanプロジェクトが少額の手数料を受け取ることがあります。すべてのコンテンツは独立して客観的に作成されています。",
    zh: "本页面上的部分链接可能是联盟或合作链接，通过这些链接产生的购买可能会为 K-BanChan 项目提供少量佣金支持。所有内容均独立客观编写。",
  };

  const message = messages[locale] || messages["en"];

  return (
    <div className={`flex items-start gap-3 p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl text-slate-500 text-xs leading-relaxed ${className}`}>
      <Info size={16} className="shrink-0 text-slate-600 mt-0.5" />
      <p>{message}</p>
    </div>
  );
}
