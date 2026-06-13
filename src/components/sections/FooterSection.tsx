import Container from "@/components/common/Container";
import { siteConfig } from "@/config/site.config";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-dark/10 bg-background-base py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-text-dark">Stephanie Hoyle</p>
            <p className="text-sm text-text-muted">Growth strategy</p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-text-main">
              <li>
                <a href="#consultoria" className="hover:text-primary-dark">
                  Consultoría
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-primary-dark">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-primary-dark">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-primary-dark">
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.externalLinks.newsletter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-dark"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.externalLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-dark"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-sm text-text-muted">© {year} Stephanie Hoyle. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}
