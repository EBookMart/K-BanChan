const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const banchanFile = path.join(__dirname, '../src/data/banchan.json');
const outputFile = path.join(__dirname, '../data-source/banchan-contents.xlsx');

const locales = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'ar', 'ru'];

// Read existing banchan
const banchans = JSON.parse(fs.readFileSync(banchanFile, 'utf8'));

// Create Workbook
const wb = XLSX.utils.book_new();

locales.forEach(loc => {
  const data = banchans.map(b => ({
    "반찬명(수정금지)": b.name_ko,
    "Slug(수정금지)": b.slug,
    "상세설명": "",
    "구매가이드": ""
  }));

  // Add some sample data to ko sheet
  if (loc === 'ko') {
    if (data.length > 0) {
      data[0]['상세설명'] = "여기에 상세 설명을 작성하세요. 마크다운 사용 가능합니다.\n## 소제목\n• 리스트1\n• 리스트2";
      data[0]['구매가이드'] = "여기에 구매 가이드를 작성하세요.\n좋은 식재료를 고르는 방법입니다.";
    }
  }

  const ws = XLSX.utils.json_to_sheet(data);
  // Set column widths
  ws['!cols'] = [
    { wch: 20 },
    { wch: 25 },
    { wch: 80 },
    { wch: 80 }
  ];

  XLSX.utils.book_append_sheet(wb, ws, loc);
});

XLSX.writeFile(wb, outputFile);
console.log(`Generated template at ${outputFile}`);
