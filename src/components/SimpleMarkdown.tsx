import React from 'react';

interface Props {
  text: string;
}

export default function SimpleMarkdown({ text }: Props) {
  if (!text) return null;

  // 줄바꿈 기준으로 분리
  const lines = text.split('\n');

  // 그룹화: 일반 줄과 표(Table) 줄을 분리
  type Block = { type: 'empty' } | { type: 'table', rows: string[] } | { type: 'text', content: string };
  const blocks: Block[] = [];
  let currentTable: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      if (currentTable.length > 0) {
        blocks.push({ type: 'table', rows: currentTable });
        currentTable = [];
      }
      blocks.push({ type: 'empty' });
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      currentTable.push(trimmed);
    } else {
      if (currentTable.length > 0) {
        blocks.push({ type: 'table', rows: currentTable });
        currentTable = [];
      }
      blocks.push({ type: 'text', content: trimmed });
    }
  }
  if (currentTable.length > 0) {
    blocks.push({ type: 'table', rows: currentTable });
  }

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
    <div className="space-y-3 text-slate-300 overflow-hidden">
      {blocks.map((block, i) => {
        if (block.type === 'empty') return null;

        if (block.type === 'table') {
          const [headerLine, separatorLine, ...bodyLines] = block.rows;
          // 테이블 헤더 추출
          const headers = headerLine.split('|').slice(1, -1).map(s => s.trim());
          
          // 두 번째 줄이 구분선(|---|---|)인지 확인
          const isSeparator = separatorLine && separatorLine.replace(/[\s|-]/g, '') === '';
          const actualBodyLines = isSeparator ? bodyLines : (separatorLine ? [separatorLine, ...bodyLines] : bodyLines);

          return (
            <div key={i} className="overflow-x-auto my-6 bg-slate-900/50 rounded-lg border border-slate-700/50">
              <table className="w-full text-sm text-left text-slate-300 border-collapse">
                <thead className="text-xs text-slate-200 uppercase bg-slate-800/80 border-b border-emerald-500/30">
                  <tr>
                    {headers.map((h, j) => (
                      <th key={j} className="px-4 py-3 font-semibold tracking-wider whitespace-nowrap">{renderInline(h)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {actualBodyLines.map((row, j) => {
                    const cells = row.split('|').slice(1, -1).map(s => s.trim());
                    return (
                      <tr key={j} className="hover:bg-slate-800/40 transition-colors">
                        {cells.map((cell, k) => (
                          <td key={k} className="px-4 py-3 leading-relaxed">{renderInline(cell)}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }

        const trimmed = block.content;
        
        // ## 소제목 처리
        if (trimmed.startsWith('##')) {
          const content = trimmed.replace(/^##\s*/, '');
          return (
            <h3 key={i} className="text-lg md:text-xl font-bold text-rose-400 mt-6 mb-2 border-b border-slate-700/50 pb-2">
              {renderInline(content)}
            </h3>
          );
        }
        
        // # 대제목 처리
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
