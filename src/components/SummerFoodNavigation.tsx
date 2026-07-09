"use client";

import React, { useEffect, useState, useRef } from "react";

type NavItem = {
  id: string;
  label: string;
};

type Props = {
  items: NavItem[];
  locale: string;
};

export default function SummerFoodNavigation({ items, locale }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const isRtl = locale === "ar";
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll click handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 64;
      const offset = headerHeight + 20;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  // IntersectionObserver to detect active section on scroll
  useEffect(() => {
    const headerHeight = window.innerWidth >= 768 ? 80 : 64;
    const rootMarginOffset = -(headerHeight + 30);

    const observerOptions = {
      root: null,
      rootMargin: `${rootMarginOffset}px 0px -50% 0px`,
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      if (items.some((item) => item.id === hashId)) {
        setActiveId(hashId);
        setTimeout(() => {
          const element = document.getElementById(hashId);
          if (element) {
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const offsetPosition = elementRect - bodyRect - (headerHeight + 20);
            window.scrollTo({ top: offsetPosition, behavior: "auto" });
          }
        }, 150);
      }
    }

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  // Center the active tab in horizontal scroll
  useEffect(() => {
    if (activeId && containerRef.current) {
      const activeEl = containerRef.current.querySelector(`[data-id="${activeId}"]`);
      if (activeEl) {
        const container = containerRef.current;
        const activeRect = activeEl.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const scrollLeftOffset =
          activeRect.left -
          containerRect.left -
          containerRect.width / 2 +
          activeRect.width / 2;

        container.scrollBy({
          left: scrollLeftOffset,
          behavior: "smooth"
        });
      }
    }
  }, [activeId]);

  return (
    <div className="w-full py-4 border-b border-slate-900/60 mb-8">
      <div 
        ref={containerRef}
        className="
          flex overflow-x-auto md:grid md:grid-cols-5 md:overflow-visible
          gap-2 md:gap-3 scrollbar-none pb-2 md:pb-0 -mx-4 px-4 md:-mx-0 md:px-0
          snap-x snap-mandatory whitespace-nowrap md:whitespace-normal
        "
        dir={isRtl ? "rtl" : "ltr"}
      >
        {items.map((item, idx) => {
          const isActive = item.id === activeId;
          const numPrefix = String(idx + 1).padStart(2, "0");
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-id={item.id}
              onClick={(e) => handleClick(e, item.id)}
              className={`
                snap-start flex-shrink-0 inline-flex items-center justify-center gap-1.5 
                px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300
                border shadow-sm
                ${isActive 
                  ? "bg-rose-500/10 border-rose-500/50 text-rose-400 font-bold scale-[1.02] shadow-rose-500/5" 
                  : "bg-slate-900/30 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-900/50"
                }
              `}
            >
              <span className={`font-mono text-[10px] md:text-xs ${isActive ? "text-rose-400" : "text-slate-600"}`}>
                {numPrefix}
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
