"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Download, Plug } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavCategory } from "@/lib/docs-loader";
import { cn } from "@/lib/utils";
import { MCPModal } from "@/components/MCPModal";
import { useActiveSection } from "./ActiveSectionContext";

interface DocsNavProps {
  categories: NavCategory[];
  onNavigate?: (path: string) => void;
}

export function DocsNav({ categories, onNavigate }: DocsNavProps) {
  const { activeSectionId, setActiveSectionId } = useActiveSection();
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(categories.map(cat => cat.title))
  );
  const [mcpModalOpen, setMcpModalOpen] = useState(false);

  const toggleCategory = (title: string) => {
    const newOpen = new Set(openCategories);
    if (newOpen.has(title)) {
      newOpen.delete(title);
    } else {
      newOpen.add(title);
    }
    setOpenCategories(newOpen);
  };

  const handleClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      const element = document.querySelector(path);
      if (element) {
        const id = element.id || path.replace('#', '');
        setActiveSectionId(id);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Find which category and item is active based on activeSectionId
  const getActiveItem = () => {
    if (!activeSectionId) return null;
    
    for (const category of categories) {
      for (const item of category.items) {
        const itemId = item.path.replace('#', '');
        if (itemId === activeSectionId) {
          return { category: category.title, item: item.path };
        }
      }
    }
    return null;
  };

  const activeItem = getActiveItem();

  // Auto-expand categories that contain active items
  useEffect(() => {
    if (activeItem?.category) {
      setOpenCategories(prev => {
        const newSet = new Set(prev);
        newSet.add(activeItem.category!);
        return newSet;
      });
    }
  }, [activeItem?.category]);

  const handleDownload = () => {
    window.location.href = '/api/download-docs';
  };

  return (
    <>
    <div className="h-screen w-64 border-r bg-background flex flex-col">
      <div className="p-4 border-b shrink-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
            <span className="text-xs text-muted-foreground">LOGO</span>
          </div>
          <span className="text-lg font-semibold">Docs</span>
        </div>
        <div className="space-y-3">
          <Button
            onClick={() => setMcpModalOpen(true)}
            variant="default"
            size="sm"
            className="w-full"
          >
            <Plug className="h-4 w-4 mr-2" />
            Connect as MCP Server
          </Button>
          <Button
            onClick={handleDownload}
            variant="default"
            size="sm"
            className="w-full"
          >
            <Download className="h-4 w-4 mr-2" />
            Download as Markdown
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 overflow-hidden">
        <nav className="p-4 space-y-1">
          {categories.map((category) => {
            const isOpen = openCategories.has(category.title);
            const isCategoryActive = activeItem?.category === category.title;
            
            return (
              <Collapsible
                key={category.title}
                open={isOpen}
                onOpenChange={() => toggleCategory(category.title)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between font-medium",
                      isCategoryActive && "bg-muted text-foreground"
                    )}
                  >
                    <span>{category.title}</span>
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-4 space-y-1">
                    {category.items.map((item) => {
                      const isItemActive = activeItem?.item === item.path;
                      return (
                        <button
                          key={item.path}
                          onClick={() => handleClick(item.path)}
                          className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md relative",
                            "hover:bg-muted hover:text-foreground",
                            "transition-colors cursor-pointer",
                            isItemActive && "bg-muted text-foreground border-l-2 border-primary"
                          )}
                        >
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
    <MCPModal open={mcpModalOpen} onOpenChange={setMcpModalOpen} />
    </>
  );
}

