import { motion } from "framer-motion";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site.config";
import { easeOut, sectionReveal } from "@/utils/motion";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="bg-[#1A1A1A] text-white" {...sectionReveal}>
      <Container>
        <motion.div
          className="py-16 text-center md:py-24"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <SectionHeading
            eyebrow={undefined}
            titleSans="¿Tu equipo necesita más "
            titleSerif="claridad y dirección"
            titleSansAfter="?"
            subtitle="Conversemos sobre tus objetivos y veamos cómo puedo ayudarte a construir una estrategia de crecimiento que realmente funcione."
            centered
            inverted
            className="mb-8"
          />
          <ButtonCTA href="#contacto" label="Agenda una reunión" variant="white" icon="none" />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-6 border-t border-white/10 py-8 md:flex-row md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
        >
          <a href="#" className="shrink-0" aria-label="Stephanie Hoyle — inicio">
            <img
              src="/logo-secundario.png"
              alt="Stephanie — Growth strategy"
              width={160}
              height={40}
              className="h-10 w-auto"
              loading="lazy"
            />
          </a>

          <p className="text-center text-xs text-white/60 md:text-sm">
            © {year} · Growth Strategy & Marketing Consulting
          </p>

          <nav aria-label="Enlaces del pie de página">
            <ul className="flex items-center gap-6 text-sm font-medium text-white/80">
              <li>
                <a
                  href={siteConfig.externalLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.externalLinks.newsletter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </Container>
    </motion.footer>
  );
}
