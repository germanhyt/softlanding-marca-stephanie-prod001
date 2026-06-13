type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
  centered = false
}: SectionHeadingProps) {
  return (
    <header className={`${centered ? "text-center" : ""} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-primary-light/70 px-4 py-1 text-sm font-semibold text-primary-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-text-dark md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-base text-text-muted md:text-lg">{subtitle}</p> : null}
    </header>
  );
}
