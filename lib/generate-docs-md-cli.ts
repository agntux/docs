#!/usr/bin/env node

import { generateDocsMarkdown } from './generate-docs-md';

// Generate the markdown file
generateDocsMarkdown('public/agntux_docs.md');
console.log('Generated agntux_docs.md in public/ directory');

