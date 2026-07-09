"use client";

import React, { useEffect, useState, useRef } from "react";

interface NavItem {
  id: string;
  number?: string;
  label: string;
}

type Props = {
  items: NavItem[];
  locale: string;
};

export default function SectionNavigation({ items, locale }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const isRtl = locale === "ar";
  const navRef = useRef<HTMLDivElement>(null);

  // Smooth scroll click handler
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 64;
      const navHeight = 48; // sticky nav height
      const offset = headerHeight + navHeight + 10;
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
    const navHeight = 48;
    const rootMarginOffset = -(headerHeight + navHeight + 20);

    const observerOptions = {
      root: null,
      rootMargin: `${rootMarginOffset}px 0px -60% 0px`,
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
            const offsetPosition = elementRect - bodyRect - (headerHeight + navHeight + 10);
            window.scrollTo({ top: offsetPosition, behavior: "auto" });
          }
        }, 100);
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
    if (activeId && navRef.current) {
      const activeTabEl = navRef.current.querySelector(`[data-id="${activeId}"]`);
      if (activeTabEl) {
        const navContainer = navRef.current;
        const activeRect = activeTabEl.getBoundingClientRect();
        const containerRect = navContainer.getBoundingClientRect();
        const scrollLeftOffset =
          activeRect.left -
          containerRect.left -
          containerRect.width / 2 +
          activeRect.width / 2;

        navContainer.scrollBy({
          left: scrollLeftOffset,
          behavior: "smooth"
        });
      }
    }
  }, [activeId]);

  return (
    <div className="sticky top-16 md:top-20 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-900/60 shadow-sm transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-none whitespace-nowrap text-xs md:text-sm font-semibold"
          dir={isRtl ? "rtl" : "ltr"}
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-id={item.id}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative py-1 transition-all duration-200 flex items-center border-b-2 ${
                  isActive
                    ? "text-emerald-400 border-emerald-500 font-bold scale-105"
                    : "text-slate-400 border-transparent hover:text-slate-200"
                }`}
              >
                {item.number && (
                  <span className="text-emerald-500/85 font-mono mr-1 rtl:ml-1 text-[10px] md:text-xs">
                    {item.number}
                  </span>
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
