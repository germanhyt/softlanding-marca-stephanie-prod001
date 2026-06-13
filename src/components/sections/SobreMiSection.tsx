import { motion } from "framer-motion";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import { siteConfig } from "@/config/site.config";
import { sobreMiParagraphs } from "@/data/siteContent";
import { easeOut, sectionReveal, slideFromLeft, slideFromRight } from "@/utils/motion";

export default function SobreMiSection() {
  return (
    <motion.section id="sobre-mi" className="py-16 md:py-24 lg:py-28" {...sectionReveal}>
      <Container>
        <motion.p
          className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-text-muted md:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          Sobre mí
        </motion.p>

        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:gap-10 lg:gap-16 xl:gap-20">
          <motion.div className="mx-auto w-full max-w-sm md:max-w-none" {...slideFromLeft}>
            <img
              src="/images/stephanie-portrait.webp"
              alt="Retrato ilustrado de Stephanie Hoyle"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </motion.div>

          <motion.div id="contacto" className="md:pt-1" {...slideFromRight}>
            <h2 className="text-3xl leading-[1.15] text-text-dark md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              <span className="font-sans font-bold">Estratega de crecimiento </span>
              <span className="font-serif italic font-medium">con raíces en el marketing y el dato.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-main md:mt-10 md:text-lg md:leading-8">
              {sobreMiParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: easeOut }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-10 md:mt-12"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.2, ease: easeOut }}
            >
              <p className="font-sans text-base font-semibold text-text-dark">Stephanie Hoyle</p>
              <p className="mt-1 font-serif text-sm italic text-text-dark">Growth strategy</p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.28, ease: easeOut }}
            >
              <ButtonCTA
                href={siteConfig.externalLinks.linkedin}
                label="Hablemos"
                variant="dark"
                icon="none"
                external
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
