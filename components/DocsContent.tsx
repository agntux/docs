"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Search } from "lucide-react";
import { MarkdownRenderer } from "@/lib/markdown-processor";
import { DocsStructure, NavCategory } from "@/lib/docs-loader";
import { useActiveSection } from "./ActiveSectionContext";
import { SearchOverlay } from "./SearchOverlay";
import { Button } from "@/components/ui/button";

interface DocsContentProps {
  structure: DocsStructure;
  categories: NavCategory[];
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}


export function DocsContent({ structure, categories }: DocsContentProps) {
  const { setActiveSectionId } = useActiveSection();
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [searchOpen, setSearchOpen] = useState(false);

  // Create a map of file paths to their section IDs
  const fileToIdMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const category of categories) {
      for (const item of category.items) {
        map.set(item.filePath, item.path.replace('#', ''));
      }
    }
    return map;
  }, [categories]);

  // Keyboard shortcut to open search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const id = hash.substring(1);
      // Wait for content to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Set up Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry that's most visible
      let mostVisible: IntersectionObserverEntry | null = null;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisible = entry;
        }
      });

      // If we have a visible entry, set it as active
      if (mostVisible) {
        const id = mostVisible.target.id;
        if (id) {
          setActiveSectionId(id);
        }
      }
    }, observerOptions);

    // Observe all sections
    const sections = sectionRefs.current;
    sections.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [setActiveSectionId, structure]);

  return (
    <>
      <div className="flex-1 overflow-y-auto relative">
        <div className="fixed top-0 left-64 right-0 z-20 bg-background/95 backdrop-blur-sm border-b p-4 flex items-center justify-start shadow-sm">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchOpen(true)}
            className="gap-2 border-border hover:border-primary/50"
          >
            <Search className="h-4 w-4" />
            Search
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-8 py-12 pl-16">
        {structure.allFiles.map((file) => {
          const sectionId = fileToIdMap.get(file.path) || `section-${file.path}`;
          return (
            <section
              key={file.path}
              id={sectionId}
              ref={(el) => {
                if (el) {
                  sectionRefs.current.set(sectionId, el);
                } else {
                  sectionRefs.current.delete(sectionId);
                }
              }}
              className="mb-16 scroll-mt-20"
            >
              <MarkdownRenderer content={file.content} />
            </section>
          );
        })}
          </div>
        </div>
      </div>
      <SearchOverlay
        structure={structure}
        categories={categories}
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
    </>
  );
}

