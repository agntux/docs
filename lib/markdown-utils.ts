import matter from 'gray-matter';

export interface MarkdownContent {
  content: string;
  frontmatter: Record<string, any>;
}

/**
 * Parses markdown content and extracts frontmatter
 * This is a server-side utility function
 */
export function parseMarkdown(markdown: string): MarkdownContent {
  const { data, content } = matter(markdown);
  return {
    content,
    frontmatter: data,
  };
}

