"use client";

import { useEffect } from "react";

export default function AntiCopyGuard() {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 텍스트 복사 방지
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 텍스트 드래그(블록 지정) 방지
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    // 이미지 등 끌어당기기 방지
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
