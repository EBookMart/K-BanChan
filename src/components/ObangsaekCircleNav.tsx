'use client';

import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

interface Props {
  currentSlug: string;
}

const NODES = [
  { slug: 'yaksik-dongwon',      element: 'yaksik-dongwon',  color: '#007A33', 
    position: { x: 50, y: 10 },  hanja: '木' },
  { slug: 'yukmi',                element: 'yukmi',           color: '#CE1126', 
    position: { x: 85, y: 40 },  hanja: '火' },
  { slug: 'obangsaek',            element: 'obangsaek',       color: '#FFD700', 
    position: { x: 72, y: 85 },  hanja: '土' },
  { slug: 'nanum',                element: 'nanum',           color: '#F5F5F5', 
    position: { x: 28, y: 85 },  hanja: '金' },
  { slug: 'ingredients-terroir',  element: 'ingredients-terroir',  color: '#1C1C1C', 
    position: { x: 15, y: 40 },  hanja: '水' },
];

export default function ObangsaekCircleNav({ currentSlug }: Props) {
  const t = useTranslations("elements");
  const tCycle = useTranslations("cycle");
  
  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md mx-auto my-12">
      {/* SVG 연결선 (오각형) */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100"
        style={{ overflow: 'visible' }}
      >
        <polygon
          points={NODES.map(n => `${n.position.x},${n.position.y}`).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.5"
        />
      </svg>
      
      {/* 5개 노드 */}
      {NODES.map(node => {
        const isActive = node.slug === currentSlug;
        const size = isActive ? "w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl" : "w-11 h-11 sm:w-12 sm:h-12 text-sm sm:text-base";
        
        return (
          <Link
            key={node.slug}
            href={`/articles/${node.slug}`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={t(node.element)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 
                       rounded-full flex items-center justify-center
                       transition-all duration-500 hover:scale-110
                       font-bold cursor-pointer ${size}`}
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
              backgroundColor: node.color,
              color: node.color === '#F5F5F5' || node.color === '#FFD700' 
                     ? '#000' : '#fff',
              border: isActive 
                ? `4px solid ${node.color}` 
                : '2px solid rgba(255,255,255,0.3)',
              boxShadow: isActive 
                ? `0 0 24px ${node.color}, 0 0 48px ${node.color}80` 
                : 'none',
              zIndex: isActive ? 10 : 5,
            }}
            title={t(node.element)}
          >
            {node.hanja}
          </Link>
        );
      })}
      
      {/* 중앙 원소 라벨 표시 */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                      text-center text-xs sm:text-sm text-slate-400 whitespace-nowrap">
        <div className="opacity-60 text-[10px] sm:text-xs uppercase tracking-wider">
          {tCycle('current_element')}
        </div>
        <div className="font-bold text-white mt-1">
          {(() => {
            const active = NODES.find(n => n.slug === currentSlug);
            return active 
              ? `${t(active.element)} · ${active.hanja}` 
              : '';
          })()}
        </div>
      </div>
    </div>
  );
}
