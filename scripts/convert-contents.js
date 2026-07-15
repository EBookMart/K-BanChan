const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const EXCEL_PATH = path.join(__dirname, "../data-source/banchan-contents.xlsx");
const OUTPUT_DIR = path.join(__dirname, "../public/data");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "banchan-contents.json");

console.log("=== Start Excel to JSON Conversion for Banchan Contents ===");

try {
  if (!fs.existsSync(EXCEL_PATH)) {
    console.warn(`Excel file not found at ${EXCEL_PATH}. Assuming no custom contents to convert.`);
    // 빈 JSON 파일이라도 생성해두어 페이지 렌더링 시 오류를 방지합니다.
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify({}, null, 2), "utf8");
    }
    process.exit(0);
  }

  const workbook = XLSX.readFile(EXCEL_PATH);
  const contentsMap = {};

  workbook.SheetNames.forEach(locale => {
    const sheet = workbook.Sheets[locale];
    const rows = XLSX.utils.sheet_to_json(sheet);

    rows.forEach(row => {
      const slug = row["Slug(수정금지)"];
      if (!slug) return;

      const description = row["상세설명"] || "";
      const purchaseGuide = row["구매가이드"] || "";

      if (!contentsMap[slug]) {
        contentsMap[slug] = {};
      }

      contentsMap[slug][locale] = {
        description: description,
        purchase_guide: purchaseGuide
      };
    });
    
    console.log(`Processed ${rows.length} items for locale [${locale}]`);
  });

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(contentsMap, null, 2), "utf8");
  console.log(`Successfully written contents to ${OUTPUT_PATH}`);

} catch (error) {
  console.error("Error during contents conversion:", error);
  process.exit(1);
}
