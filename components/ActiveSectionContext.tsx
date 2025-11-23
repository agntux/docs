"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ActiveSectionContextType {
  activeSectionId: string | null;
  setActiveSectionId: (id: string | null) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  return (
    <ActiveSectionContext.Provider value={{ activeSectionId, setActiveSectionId }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
}

