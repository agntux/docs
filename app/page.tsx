import { loadDocsStructure } from "@/lib/docs-loader";
import { DocsNav } from "@/components/DocsNav";
import { DocsContent } from "@/components/DocsContent";
import { ActiveSectionProvider } from "@/components/ActiveSectionContext";

export default function HomePage() {
  const structure = loadDocsStructure();

  return (
    <ActiveSectionProvider>
      <div className="flex h-screen">
        <aside className="fixed left-0 top-0 h-full z-10">
          <DocsNav categories={structure.categories} />
        </aside>
        <main className="flex-1 ml-64">
          <DocsContent structure={structure} categories={structure.categories} />
      </main>
    </div>
    </ActiveSectionProvider>
  );
}
