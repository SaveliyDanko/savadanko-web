import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en, type Translations } from "@/i18n/en";
import { ru } from "@/i18n/ru";

type Language = "en" | "ru";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = { en, ru };
const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "language";
const PREFERENCE_KEY = "languagePreferenceSet";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const hasExplicitPreference = localStorage.getItem(PREFERENCE_KEY) === "true";

    if (hasExplicitPreference && (stored === "en" || stored === "ru")) {
      return stored;
    }

    return "ru";
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem(PREFERENCE_KEY, "true");
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useTranslation must be used within LanguageProvider");
  return context.t;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return { language: context.language, setLanguage: context.setLanguage };
}
