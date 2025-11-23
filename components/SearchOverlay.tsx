"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Search, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocsStructure, NavCategory } from "@/lib/docs-loader";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./ActiveSectionContext";

interface SearchResult {
  category: string;
  itemTitle: string;
  itemPath: string;
  sectionId: string;
  snippet: string;
  filePath: string;
}

interface SearchOverlayProps {
  structure: DocsStructure;
  categories: NavCategory[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchOverlay({ structure, categories, open, onOpenChange }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setActiveSectionId } = useActiveSection();

  // Create a map of file paths to category and item info
  const fileToCategoryMap = useMemo(() => {
    const map = new Map<string, { category: string; itemTitle: string; itemPath: string }>();
    
    for (const category of categories) {
      for (const item of category.items) {
        map.set(item.filePath, {
          category: category.title,
          itemTitle: item.title,
          itemPath: item.path,
        });
      }
    }
    
    return map;
  }, [categories]);

  // Create a map of section IDs to file paths
  const sectionIdToFilePath = useMemo(() => {
    const map = new Map<string, string>();
    
    for (const category of categories) {
      for (const item of category.items) {
        const sectionId = item.path.replace('#', '');
        map.set(sectionId, item.filePath);
      }
    }
    
    return map;
  }, [categories]);

  // Search through content
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    for (const file of structure.allFiles) {
      const fileInfo = fileToCategoryMap.get(file.path);
      if (!fileInfo) continue;

      const content = file.content.toLowerCase();
      const lines = file.content.split('\n');
      
      // Find matching lines
      const matchingLines: { line: string; index: number }[] = [];
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query)) {
          matchingLines.push({ line, index });
        }
      });

      if (matchingLines.length > 0) {
        // Get section ID
        const sectionId = fileInfo.itemPath.replace('#', '');
        
        // Create a single result per file with the best snippet
        const bestMatch = matchingLines[0];
        const snippet = createSnippet(bestMatch.line, query, file.content, bestMatch.index);
        
        results.push({
          category: fileInfo.category,
          itemTitle: fileInfo.itemTitle,
          itemPath: fileInfo.itemPath,
          sectionId,
          snippet,
          filePath: file.path,
        });
      }
    }

    return results.slice(0, 10); // Limit to 10 results
  }, [searchQuery, structure, fileToCategoryMap]);

  function createSnippet(matchingLine: string, query: string, fullContent: string, lineIndex: number): string {
    const lines = fullContent.split('\n');
    const start = Math.max(0, lineIndex - 1);
    const end = Math.min(lines.length, lineIndex + 2);
    const snippetLines = lines.slice(start, end);
    
    let snippet = snippetLines.join(' ').trim();
    
    // Clean up markdown syntax for better readability
    snippet = snippet
      .replace(/#{1,6}\s+/g, '') // Remove heading markers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markers
      .replace(/`(.*?)`/g, '$1') // Remove inline code markers
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove link markers
      .trim();
    
    // Truncate if too long
    if (snippet.length > 150) {
      const queryIndex = snippet.toLowerCase().indexOf(query.toLowerCase());
      if (queryIndex > 0) {
        const start = Math.max(0, queryIndex - 50);
        const end = Math.min(snippet.length, queryIndex + query.length + 50);
        snippet = '...' + snippet.substring(start, end) + '...';
      } else {
        snippet = snippet.substring(0, 150) + '...';
      }
    }
    
    return snippet;
  }

  const handleResultClick = (result: SearchResult) => {
    setActiveSectionId(result.sectionId);
    const element = document.getElementById(result.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onOpenChange(false);
    setSearchQuery("");
  };

  // Focus input when overlay opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
        setSearchQuery("");
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && searchResults.length > 0) {
        e.preventDefault();
        handleResultClick(searchResults[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, searchResults, selectedIndex, onOpenChange]);

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults.length]);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onOpenChange(false);
          setSearchQuery("");
        }
      }}
    >
      <div 
        className="bg-background border rounded-lg shadow-lg w-full max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b flex items-center gap-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onOpenChange(false);
              setSearchQuery("");
            }}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() && searchResults.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No results found for "{searchQuery}"
            </div>
          ) : searchQuery.trim() && searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.filePath}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className={cn(
                    "w-full text-left p-3 rounded-md hover:bg-muted transition-colors",
                    index === selectedIndex && "bg-muted border-l-2 border-primary"
                  )}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">
                        {result.category} / {result.itemTitle}
                      </div>
                      <div className="text-sm text-foreground line-clamp-2">
                        {result.snippet.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => 
                          part.toLowerCase() === searchQuery.toLowerCase() ? (
                            <mark key={i} className="bg-primary/20 text-primary font-medium">
                              {part}
                            </mark>
                          ) : (
                            <span key={i}>{part}</span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

