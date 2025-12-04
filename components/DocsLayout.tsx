"use client";

import { useState } from "react";
import { DocsNav } from "@/components/DocsNav";
import { DocsContent } from "@/components/DocsContent";
import { DocsStructure, NavCategory } from "@/lib/docs-loader";

interface DocsLayoutProps {
  structure: DocsStructure;
}

export function DocsLayout({ structure }: DocsLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <aside className="lg:fixed lg:left-0 lg:top-0 lg:h-full lg:z-10">
        <DocsNav 
          categories={structure.categories} 
          mobileOpen={mobileMenuOpen}
          onMobileToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </aside>
      <main className="flex-1 lg:ml-64 w-full">
        <DocsContent 
          structure={structure} 
          categories={structure.categories}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </main>
    </div>
  );
}

