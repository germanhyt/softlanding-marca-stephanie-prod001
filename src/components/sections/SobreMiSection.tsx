import { motion } from "framer-motion";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import { sobreMiParagraphs } from "@/data/siteContent";
import { buildWhatsAppUrl } from "@/utils/helpers";
import { easeOut, sectionReveal, slideFromLeft, slideFromRight } from "@/utils/motion";

export default function SobreMiSection() {
  return (
    <motion.section id="sobre-mi" className="bg-[#3B4941] pb-0 pt-16 md:pt-24 lg:pt-28" {...sectionReveal}>
      <Container>
        <motion.p
          className="mb-8 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 md:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          Sobre mí
        </motion.p>

        <div className="grid gap-12 md:grid-cols-[minmax(0,1.02fr)_minmax(0,1.02fr)] md:items-start md:gap-10 lg:gap-16 xl:gap-20">
          <motion.div className="order-2 leading-none md:order-1 md:self-end" {...slideFromLeft}>
            <img
              src="/images/stephanie-portrait.png"
              alt="Retrato ilustrado de Stephanie Hoyle"
              className="mx-auto block h-auto w-full max-w-sm object-contain object-bottom md:mx-0 md:max-w-none"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="order-1 pb-16 md:order-2 "
            {...slideFromRight}
          >
            <h2 className="text-3xl leading-[1.15] text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              <span className="font-sans font-bold">Estrategia para construir </span>
              <span className="font-serif italic font-medium">crecimiento sostenible.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.6] text-white/75 md:mt-10 md:text-base 2xl:text-lg 2xl:leading-[1.6]">
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
              <p className="font-sans text-base font-semibold text-white">Stephanie Hoyle</p>
              <p className="mt-1 font-serif text-sm italic text-white/80">Growth strategy</p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.28, ease: easeOut }}
            >
              <ButtonCTA
                href={buildWhatsAppUrl()}
                label="Hablemos"
                variant="white"
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
