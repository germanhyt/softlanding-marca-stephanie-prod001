import { heroHighlights } from "@/data/siteContent";

export default function HeroHighlightsStrip() {
  return (
    <div className="mt-10 rounded-2xl bg-primary-light px-4 py-5 md:mt-14 md:px-8 md:py-6">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {heroHighlights.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <img
              src={item.icon}
              alt={item.alt}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
              loading="lazy"
            />
            <p className="text-sm font-semibold leading-snug text-text-dark md:text-base">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
