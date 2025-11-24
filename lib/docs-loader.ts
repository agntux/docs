import fs from 'fs';
import path from 'path';

export interface NavItem {
  title: string;
  path: string;
  filePath: string;
}

export interface NavCategory {
  title: string;
  items: NavItem[];
}

export interface DocsStructure {
  categories: NavCategory[];
  allFiles: Array<{ path: string; content: string; order: number }>;
}

/**
 * Strips number prefixes from a string (e.g., "01-introduction" -> "introduction")
 */
function stripNumberPrefix(str: string): string {
  return str.replace(/^\d+-/, '');
}

/**
 * Extracts order number from a string (e.g., "01-introduction" -> 1)
 */
function extractOrder(str: string): number {
  const match = str.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : 999;
}

/**
 * Formats a string for display (removes number prefix and converts to title case)
 * Preserves common acronyms like MCP, API, SDK, etc.
 * Handles special cases like AgntUX.
 */
function formatTitle(str: string): string {
  const withoutPrefix = stripNumberPrefix(str);
  const acronyms = ['mcp', 'api', 'sdk', 'ui', 'html', 'css', 'js', 'ts', 'json', 'rpc', 'http', 'https', 'url', 'uri'];
  
  // Special case: AgntUX should always be capitalized correctly
  if (withoutPrefix.toLowerCase().includes('agntux')) {
    return withoutPrefix
      .split('-')
      .map(word => {
        const lowerWord = word.toLowerCase();
        if (lowerWord === 'agntux') {
          return 'AgntUX';
        }
        if (acronyms.includes(lowerWord)) {
          return lowerWord.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  
  return withoutPrefix
    .split('-')
    .map(word => {
      const lowerWord = word.toLowerCase();
      if (acronyms.includes(lowerWord)) {
        return lowerWord.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Converts a string to a URL-friendly slug
 */
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Recursively scans the content directory and builds navigation structure
 */
export function loadDocsStructure(contentDir: string = 'content'): DocsStructure {
  const contentPath = path.join(process.cwd(), contentDir);
  
  if (!fs.existsSync(contentPath)) {
    return { categories: [], allFiles: [] };
  }

  const categories: NavCategory[] = [];
  const allFiles: Array<{ path: string; content: string; order: number }> = [];

  // Get all directories in content folder
  const entries = fs.readdirSync(contentPath, { withFileTypes: true });
  const directories = entries
    .filter(entry => entry.isDirectory())
    .map(entry => ({
      name: entry.name,
      order: extractOrder(entry.name),
      path: path.join(contentPath, entry.name),
    }))
    .sort((a, b) => a.order - b.order);

  // Process each directory as a category
  for (const dir of directories) {
    const categoryTitle = formatTitle(dir.name);
    const categorySlug = slugify(categoryTitle);
    const items: NavItem[] = [];

    // Read all markdown files in the directory
    const files = fs.readdirSync(dir.path)
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        name: file,
        order: extractOrder(file),
        path: path.join(dir.path, file),
      }))
      .sort((a, b) => a.order - b.order);

    // Process each file
    for (const file of files) {
      const fileContent = fs.readFileSync(file.path, 'utf-8');
      const itemTitle = formatTitle(path.basename(file.name, '.md'));
      const itemSlug = slugify(itemTitle);
      const relativePath = path.relative(process.cwd(), file.path);
      
      items.push({
        title: itemTitle,
        path: `#${categorySlug}-${itemSlug}`,
        filePath: relativePath,
      });

      allFiles.push({
        path: relativePath,
        content: fileContent,
        order: file.order,
      });
    }

    if (items.length > 0) {
      categories.push({
        title: categoryTitle,
        items,
      });
    }
  }

  // Sort allFiles by their order (using category order + file order)
  allFiles.sort((a, b) => {
    const aDir = path.dirname(a.path);
    const aDirName = path.basename(aDir);
    const aFileName = path.basename(a.path);
    const aOrder = extractOrder(aDirName) * 1000 + extractOrder(aFileName);
    
    const bDir = path.dirname(b.path);
    const bDirName = path.basename(bDir);
    const bFileName = path.basename(b.path);
    const bOrder = extractOrder(bDirName) * 1000 + extractOrder(bFileName);
    
    return aOrder - bOrder;
  });

  return { categories, allFiles };
}

/**
 * Gets the content of a specific file
 */
export function getFileContent(filePath: string): string {
  const fullPath = path.join(process.cwd(), filePath);
  return fs.readFileSync(fullPath, 'utf-8');
}

