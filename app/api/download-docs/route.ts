import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { generateDocsMarkdown } from '@/lib/generate-docs-md';

export async function GET() {
  try {
    const outputPath = path.join(process.cwd(), 'public', 'agntux_docs.md');
    
    // Generate the markdown file if it doesn't exist or is outdated
    generateDocsMarkdown(outputPath);
    
    // Read the file
    const fileContent = fs.readFileSync(outputPath, 'utf-8');
    
    // Return as download
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': 'attachment; filename="agntux_docs.md"',
      },
    });
  } catch (error) {
    console.error('Error generating docs:', error);
    return NextResponse.json(
      { error: 'Failed to generate documentation' },
      { status: 500 }
    );
  }
}

