import { getLocalePath, type Locale } from "@/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    aria: string;
    es: string;
    en: string;
  };
  className?: string;
};

export default function LanguageSwitcher({ locale, labels, className = "" }: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={labels.aria}
      className={`flex items-center gap-1 text-xs font-semibold tracking-wide ${className}`.trim()}
    >
      <a
        href={getLocalePath("es")}
        aria-current={locale === "es" ? "page" : undefined}
        className={
          locale === "es"
            ? "text-text-dark"
            : "text-text-dark/45 transition-colors hover:text-text-dark"
        }
      >
        {labels.es}
      </a>
      <span className="text-text-dark/30" aria-hidden>
        /
      </span>
      <a
        href={getLocalePath("en")}
        aria-current={locale === "en" ? "page" : undefined}
        className={
          locale === "en"
            ? "text-text-dark"
            : "text-text-dark/45 transition-colors hover:text-text-dark"
        }
      >
        {labels.en}
      </a>
    </nav>
  );
}
