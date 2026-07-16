import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { consultoriaIdealPara, consultoriaTrabajamosEn } from "@/data/siteContent";
import { fadeInView, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

export default function ConsultoriaSection() {
  return (
    <motion.section id="consultoria" className="py-16 md:py-24" {...sectionReveal}>
      <Container>
        <motion.div {...fadeInView}>
          <SectionHeading
            eyebrow="Consultoría"
            titleSans="Acompañamiento estratégico"
            className="mb-10 md:mb-14"
          />
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 md:gap-6"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article
            variants={staggerItem}
            className="relative overflow-hidden rounded-2xl bg-primary-main p-6 pb-0 md:p-8 md:pb-0"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Ideal para equipos que</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white md:text-base">
              {consultoriaIdealPara.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <img
              src="/images/consultoria-lighthouse.webp"
              alt="Ilustración de un faro sobre rocas."
              className="mt-6 ml-auto h-36 w-auto object-contain md:h-44"
              loading="lazy"
            />
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="relative overflow-hidden rounded-2xl bg-primary-main p-6 pb-0 md:p-8 md:pb-0"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Trabajamos juntas/os en</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white md:text-base">
              {consultoriaTrabajamosEn.map((item) => (
                <li key={item.label}>
                  <span className="font-bold text-white">{item.label}</span>
                  <span> — {item.description}</span>
                </li>
              ))}
            </ul>
            <img
              src="/images/consultoria-chess.webp"
              alt="Ilustración de una pieza de ajedrez sobre libros."
              className="mt-6 ml-auto h-36 w-auto object-contain md:h-44"
              loading="lazy"
            />
          </motion.article>
        </motion.div>

        <motion.div
          className="mt-16 px-4 md:mt-24 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto mb-4 h-px w-36 bg-text-dark/25 md:mb-2" aria-hidden />

          <blockquote className="mx-auto max-w-3xl text-center font-serif text-xl italic leading-relaxed text-text-dark md:text-2xl lg:text-[1.75rem] lg:leading-snug">
            No soy una freelancer que ejecuta tareas. Soy una socia estratégica que trabaja de cerca con tu equipo y se
            involucra en el proceso para{" "}
            <span className="underline decoration-primary-light decoration-[3px] underline-offset-[5px]">
              generar avances reales.
            </span>
          </blockquote>
        </motion.div>
      </Container>
    </motion.section>
  );
}
