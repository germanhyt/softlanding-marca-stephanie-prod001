import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import { navLinks } from "@/data/siteContent";
import { smoothScrollTo } from "@/utils/helpers";

const scrollTarget = "servicios";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background-base pb-16 pt-6 md:pb-24 md:pt-8">
      <Container>
        <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-primary-dark/10 bg-white/70 px-4 py-3 backdrop-blur md:px-6">
          <div>
            <p className="text-lg font-semibold text-text-dark">Stephanie Hoyle</p>
            <p className="text-sm text-text-muted">Growth strategy</p>
          </div>

          <nav aria-label="Navegación principal" className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-text-main hover:text-primary-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-md p-2 text-text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </header>

        {isMenuOpen ? (
          <nav aria-label="Navegación móvil" className="mb-8 rounded-2xl border border-primary-dark/10 bg-white p-4 md:hidden">
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text-main hover:bg-background-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-primary-light/80 px-4 py-1 text-sm font-semibold text-primary-dark">
              Consultoría estratégica
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-text-dark sm:text-5xl md:text-6xl">
              Estrategias que impulsan <em className="not-italic text-primary-dark">negocios reales</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-main md:text-lg">
              Ayudo a startups y negocios a crecer con estrategias de marketing basadas en datos, investigación y
              creatividad.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonCTA
                href={`#${scrollTarget}`}
                label="Elegí tu estrategia"
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(scrollTarget);
                }}
              />
              <a
                href="#contacto"
                className="text-sm font-semibold text-text-dark underline decoration-primary-dark/40 underline-offset-4 hover:decoration-primary-dark"
              >
                Conversemos sobre tus objetivos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-primary opacity-40 blur-2xl" />
            <img
              src="/images/hero-banner.webp"
              alt="Banner de Stephanie Hoyle presentando servicios de growth strategy."
              className="h-full w-full rounded-[2rem] border border-primary-dark/10 object-cover shadow-card"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
