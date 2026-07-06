import fs from 'fs';
import path from 'path';
import { Archive } from '@/types/archive';

export function getAllArchives(): Archive[] {
  const filePath = path.join(process.cwd(), 'public/data/archives.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);
  return data.archives || [];
}

export function getArchiveBySlug(slug: string): Archive | undefined {
  const archives = getAllArchives();
  return archives.find((archive) => archive.slug === slug);
}
