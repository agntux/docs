import fs from 'fs';
import path from 'path';
import { loadDocsStructure } from './docs-loader';
import { parseMarkdown } from './markdown-utils';

/**
 * Generates a single markdown file from all documentation files
 */
export function generateDocsMarkdown(outputPath: string = 'public/agntux_docs.md'): void {
  const structure = loadDocsStructure();
  
  let markdown = '# Agntux Documentation\n\n';
  markdown += 'This document contains all documentation for Agntux.\n\n';
  markdown += '---\n\n';

  // Generate table of contents
  markdown += '## Table of Contents\n\n';
  for (const category of structure.categories) {
    markdown += `### ${category.title}\n\n`;
    for (const item of category.items) {
      const slug = item.path.replace('#', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      markdown += `- [${item.title}](#${item.path.replace('#', '')})\n`;
    }
    markdown += '\n';
  }
  markdown += '---\n\n';

  // Add all content
  for (const file of structure.allFiles) {
    const parsed = parseMarkdown(file.content);
    
    // Add section header
    const fileName = path.basename(file.path, '.md');
    const sectionTitle = fileName
      .replace(/^\d+-/, '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    markdown += `## ${sectionTitle}\n\n`;
    
    // Add content (strip frontmatter if present)
    markdown += parsed.content;
    markdown += '\n\n---\n\n';
  }

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(outputPath, markdown, 'utf-8');
}

