import React from 'react';

interface Props {
  text: string;
}

export default function SimpleMarkdown({ text }: Props) {
  if (!text) return null;

  // 단락 분리 (엔터 두 번)
  const paragraphs = text.split(/\n\n+/);

  const renderInline = (line: string) => {
    // **굵은 글씨** 처리
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
    <div className="space-y-4 text-slate-300">
      {paragraphs.map((p, i) => {
        const trimmed = p.trim();
        
        // ## 소제목 처리
        if (trimmed.startsWith('## ')) {
          const content = trimmed.replace(/^##\s+/, '');
          return (
            <h3 key={i} className="text-lg md:text-xl font-bold text-rose-400 mt-6 mb-2 border-b border-slate-700/50 pb-2">
              {renderInline(content)}
            </h3>
          );
        }
        
        // # 대제목 처리
        if (trimmed.startsWith('# ')) {
          const content = trimmed.replace(/^#\s+/, '');
          return (
            <h2 key={i} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">
              {renderInline(content)}
            </h2>
          );
        }
        
        // 일반 단락 처리 (단일 엔터는 <br>로 변환)
        const lines = trimmed.split('\n');
        return (
          <p key={i} className="leading-relaxed">
            {lines.map((line, j) => (
              <React.Fragment key={j}>
                {j > 0 && <br />}
                {renderInline(line)}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
