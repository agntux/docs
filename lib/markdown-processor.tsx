"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Link as LinkIcon } from 'lucide-react';

/**
 * Generates an ID from a heading text for anchor links
 */
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Component for headings with anchor links
 */
function HeadingWithAnchor({ 
  level, 
  id, 
  children, 
  className 
}: { 
  level: 1 | 2 | 3 | 4; 
  id: string; 
  children: React.ReactNode; 
  className: string;
}) {
  const handleAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.hash = id;
    window.history.pushState({}, '', url);
    // Scroll to the element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <div className="group relative">
      <a
        href={`#${id}`}
        onClick={handleAnchorClick}
        className="absolute -left-8 top-0 flex items-center h-full opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground cursor-pointer"
        aria-label={`Link to ${id}`}
      >
        <LinkIcon className="h-4 w-4" />
      </a>
      <HeadingTag
        id={id}
        className={className}
      >
        {children}
      </HeadingTag>
    </div>
  );
}

/**
 * Component for rendering markdown content
 */
export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ node, children, ...props }) => {
          const id = generateHeadingId(String(children));
          return (
            <HeadingWithAnchor level={1} id={id} className="text-4xl font-bold mt-8 mb-4 scroll-mt-20">
              {children}
            </HeadingWithAnchor>
          );
        },
        h2: ({ node, children, ...props }) => {
          const id = generateHeadingId(String(children));
          return (
            <HeadingWithAnchor level={2} id={id} className="text-3xl font-bold mt-6 mb-3 scroll-mt-20">
              {children}
            </HeadingWithAnchor>
          );
        },
        h3: ({ node, children, ...props }) => {
          const id = generateHeadingId(String(children));
          return (
            <HeadingWithAnchor level={3} id={id} className="text-2xl font-semibold mt-4 mb-2 scroll-mt-20">
              {children}
            </HeadingWithAnchor>
          );
        },
        h4: ({ node, children, ...props }) => {
          const id = generateHeadingId(String(children));
          return (
            <HeadingWithAnchor level={4} id={id} className="text-xl font-semibold mt-3 mb-2 scroll-mt-20">
              {children}
            </HeadingWithAnchor>
          );
        },
        p: ({ node, ...props }) => (
          <p className="mb-4 leading-7" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="ml-4" {...props} />
        ),
        code: ({ node, className, children, ...props }: any) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        pre: ({ node, ...props }) => (
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
        ),
        a: ({ node, href, ...props }: any) => (
          <a 
            href={href}
            className="text-primary hover:text-accent underline-offset-4 hover:underline" 
            target="_blank"
            rel="noopener noreferrer"
            {...props} 
          />
        ),
        table: ({ node, ...props }) => (
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-border" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-muted" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="border-b border-border hover:bg-muted/50 transition-colors" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="border border-border px-4 py-3 text-left font-semibold text-foreground" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-border px-4 py-3 text-foreground" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

