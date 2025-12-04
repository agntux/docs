import { loadDocsStructure } from "@/lib/docs-loader";
import { DocsLayout } from "@/components/DocsLayout";
import { ActiveSectionProvider } from "@/components/ActiveSectionContext";

export default function HomePage() {
  const structure = loadDocsStructure();

  return (
    <ActiveSectionProvider>
      <DocsLayout structure={structure} />
    </ActiveSectionProvider>
  );
}
