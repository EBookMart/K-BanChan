"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableListProps {
  children: React.ReactNode;
  initialCount?: number;
  loadMoreText: string;
  gridClassName?: string;
}

export default function ExpandableList({
  children,
  initialCount = 3,
  loadMoreText,
  gridClassName = "",
}: ExpandableListProps) {
  const [expanded, setExpanded] = useState(false);
  const arrayChildren = React.Children.toArray(children);
  const visibleChildren = expanded ? arrayChildren : arrayChildren.slice(0, initialCount);

  return (
    <div className="space-y-8">
      <div className={gridClassName}>{visibleChildren}</div>
      {!expanded && arrayChildren.length > initialCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded(true)}
            className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-300 font-medium text-sm"
          >
            {loadMoreText}
            <ChevronDown size={16} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
          </button>
        </div>
      )}
    </div>
  );
}
