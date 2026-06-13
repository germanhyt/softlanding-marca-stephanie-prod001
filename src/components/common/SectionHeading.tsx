type SectionHeadingProps = {
  eyebrow?: string;
  titleSans?: string;
  titleSerif?: string;
  titleSansAfter?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  inverted?: boolean;
};

export default function SectionHeading({
  eyebrow,
  titleSans,
  titleSerif,
  titleSansAfter = "",
  subtitle,
  className = "",
  centered = false,
  inverted = false
}: SectionHeadingProps) {
  const eyebrowClass = inverted ? "text-white/70" : "text-text-muted";
  const titleClass = inverted ? "text-white" : "text-text-dark";
  const subtitleClass = inverted ? "text-white/80" : "text-text-muted";

  return (
    <header className={`${centered ? "text-center" : ""} ${className}`.trim()}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${eyebrowClass}`}>{eyebrow}</p>
      ) : null}
      {titleSans || titleSerif ? (
        <h2
          className={`text-3xl leading-[1.12] md:text-5xl lg:text-[3.25rem] ${titleClass} ${centered ? "mx-auto" : ""}`}
        >
          {titleSans ? <span className="font-sans font-bold">{titleSans}</span> : null}
          {titleSerif ? <span className="font-serif italic font-medium">{titleSerif}</span> : null}
          {titleSansAfter ? <span className="font-sans font-bold">{titleSansAfter}</span> : null}
        </h2>
      ) : null}
      {subtitle ? (
        <p className={`mt-4 max-w-2xl text-base md:text-lg ${subtitleClass} ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      ) : null}
    </header>
  );
}
