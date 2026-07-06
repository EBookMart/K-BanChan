"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BanchanDetailImageProps {
  src: string;
  alt: string;
}

export default function BanchanDetailImage({ src, alt }: BanchanDetailImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50 border border-slate-800">
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-amber-500 to-blue-800 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-white/10 text-9xl font-black select-none tracking-widest leading-none mb-4">
            K-FOOD
          </span>
          <span className="text-amber-300/80 font-bold text-lg tracking-wider uppercase bg-black/30 px-4 py-1.5 rounded-full border border-amber-300/20 backdrop-blur-sm">
            K-BanChan Premium
          </span>
        </div>
      )}
    </div>
  );
}
