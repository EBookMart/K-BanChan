"use client";

import React from "react";

interface Category {
  key: string;
  label: string;
}

interface CategoryFilterProps {
  selected: string;
  onChange: (key: string) => void;
  categories: Category[];
}

export default function CategoryFilter({ selected, onChange, categories }: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none flex justify-start md:justify-center">
      <div className="flex space-x-2 px-4 py-1 flex-nowrap">
        {categories.map((cat) => {
          const isActive = selected === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onChange(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20 transform scale-105"
                  : "bg-white/90 text-gray-700 hover:bg-gray-100 border border-gray-200/50"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
