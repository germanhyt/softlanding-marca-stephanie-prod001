import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { processSteps } from "@/data/siteContent";
import { easeOut, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

export default function ProcesoSection() {
  return (
    <motion.section id="proceso" className="bg-[#DFFF4F] py-16 md:py-24" {...sectionReveal}>
      <Container>
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-dark/70">Proceso</p>
          <h2 className="text-3xl leading-[1.12] text-text-dark md:text-5xl lg:text-[3.25rem]">
            <span className="font-serif font-bold">Cómo </span>
            <span className="font-serif italic font-medium">trabajo.</span>
          </h2>
        </motion.header>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={staggerItem}
              className="relative px-0 sm:px-4 lg:px-8 xl:px-10"
            >
              {index > 0 ? (
                <span
                  className="absolute left-0 top-1/2 hidden h-[72%] w-px -translate-y-1/2 bg-text-dark/20 lg:block"
                  aria-hidden
                />
              ) : null}

              <h3 className="flex items-start gap-2 md:gap-3">
                <span className="shrink-0 font-sans text-5xl font-extralight leading-[0.85] text-text-dark md:text-6xl lg:text-7xl">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-xs font-bold uppercase tracking-[0.12em] text-text-dark md:pt-2 md:text-sm lg:text-base">
                  {step.title}
                </span>
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-text-main md:mt-6 md:text-base md:leading-7">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="relative mt-14 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.15, ease: easeOut }}
        >
          <hr className="border-t border-text-dark/20" />
          <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#DFFF4F] px-4 font-serif text-base italic text-text-dark md:text-lg">
            Un proceso circular, no lineal.
          </p>
        </motion.div>
      </Container>
    </motion.section>
  );
}
