import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'agntux_docs.md');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }

    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Return as raw text/markdown
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': 'inline; filename="agntux_docs.md"',
      },
    });
  } catch (error) {
    console.error('Error reading docs file:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

