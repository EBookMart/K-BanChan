import React from 'react';

interface Props {
  text: string;
}

export default function SimpleMarkdown({ text }: Props) {
  if (!text) return null;

  // 줄바꿈 기준으로 분리하여 한 줄씩 처리
  const lines = text.split('\n');

  const renderInline = (line: string) => {
    // 만약 줄이 **로 시작하지만 끝에 **가 없다면, 전체 줄을 굵게 처리 (사용자 실수 방지)
    if (line.startsWith('**') && !line.match(/\*\*.*?\*\*/)) {
      return (
        <strong className="font-bold text-white bg-slate-800/50 px-1 rounded block mt-2 mb-4 text-lg">
          {line.slice(2)}
        </strong>
      );
    }

    // 중간에 있는 **굵은 글씨** 처리
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-white bg-slate-800/50 px-1 rounded">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-3 text-slate-300">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        
        // ## 소제목 처리 (띄어쓰기가 없어도 인식하도록 수정)
        if (trimmed.startsWith('##')) {
          const content = trimmed.replace(/^##\s*/, '');
          return (
            <h3 key={i} className="text-lg md:text-xl font-bold text-rose-400 mt-6 mb-2 border-b border-slate-700/50 pb-2">
              {renderInline(content)}
            </h3>
          );
        }
        
        // # 대제목 처리 (띄어쓰기가 없어도 인식하도록 수정)
        if (trimmed.startsWith('#')) {
          const content = trimmed.replace(/^#\s*/, '');
          return (
            <h2 key={i} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">
              {renderInline(content)}
            </h2>
          );
        }
        
        // • 리스트 기호 처리
        if (trimmed.startsWith('•')) {
          return (
            <div key={i} className="flex pl-4 mt-1">
              <span className="mr-2 text-slate-500">•</span>
              <p className="leading-relaxed text-slate-400 text-sm">
                {renderInline(trimmed.slice(1).trim())}
              </p>
            </div>
          );
        }
        
        // 일반 단락 처리
        return (
          <p key={i} className="leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
