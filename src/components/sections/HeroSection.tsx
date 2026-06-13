import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import HeroHighlightsStrip from "@/components/sections/HeroHighlightsStrip";
import { navLinks } from "@/data/siteContent";
import { smoothScrollTo } from "@/utils/helpers";

const scrollTarget = "servicios";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background-base pb-10 pt-6 md:pb-16 md:pt-8">
      <Container>
        <header className="mb-10 flex items-center justify-between gap-4 md:mb-14">
          <a href="#" className="shrink-0" aria-label="Stephanie Hoyle — inicio">
            <img
              src="/logo.png"
              alt="Stephanie Hoyle — Growth strategy"
              width={220}
              height={56}
              className="h-12 w-auto md:h-14"
              loading="eager"
            />
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <ButtonCTA href="#contacto" label="Hablemos" variant="dark" icon="none" className="px-5 py-2.5 text-xs md:text-sm" />
            <button
              type="button"
              className="rounded-md p-2 text-text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </header>

        {isMenuOpen ? (
          <nav
            aria-label="Navegación principal"
            className="mb-8 rounded-2xl border border-primary-dark/10 bg-background-soft p-4 md:mb-10"
          >
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-main hover:bg-background-contrast"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div>
            <h1 className="text-4xl leading-[1.1] text-text-dark sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]">
              <span className="block font-sans font-bold">Estrategias que impulsan</span>
              <span className="mt-1 block font-serif text-[1.05em] italic font-medium">negocios reales</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-main md:text-lg">
              Ayudo a startups y negocios a crecer con estrategias de marketing basadas en datos, investigación y
              creatividad.
            </p>
            <div className="mt-8">
              <ButtonCTA
                href={`#${scrollTarget}`}
                label="Elegí tu estrategia"
                variant="dark"
                icon="arrow-down"
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(scrollTarget);
                }}
              />
            </div>
          </div>

          <div className="relative md:pl-4">
            <img
              src="/images/hero-banner.webp"
              alt="Ilustración de estrategia: tablero de ajedrez con camino hacia la meta."
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        <HeroHighlightsStrip />
      </Container>
    </section>
  );
}
