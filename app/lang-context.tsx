"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "nl" | "en";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (nl: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "nl",
  toggle: () => {},
  t: (nl) => nl,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("nl");
  const toggle = useCallback(() => setLang((l) => (l === "nl" ? "en" : "nl")), []);
  const t = useCallback((nl: string, en: string) => (lang === "nl" ? nl : en), [lang]);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
