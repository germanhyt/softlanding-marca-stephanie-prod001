import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import type { SiteContent } from "@/i18n";
import { fadeInView, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

type ConsultoriaSectionProps = {
  content: SiteContent;
};

export default function ConsultoriaSection({ content }: ConsultoriaSectionProps) {
  const { consultoria } = content;

  return (
    <motion.section id="consultoria" className="pb-20 pt-16 md:pb-28 md:pt-24" {...sectionReveal}>
      <Container>
        <motion.div {...fadeInView}>
          <SectionHeading
            eyebrow={consultoria.eyebrow}
            titleSans={consultoria.titleSans}
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
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{consultoria.idealTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white md:text-base">
              {consultoria.idealItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <img
              src="/images/consultoria-lighthouse.webp"
              alt={consultoria.lighthouseAlt}
              className="mt-6 ml-auto h-36 w-auto object-contain md:h-44"
              loading="lazy"
            />
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="relative overflow-hidden rounded-2xl bg-primary-main p-6 pb-0 md:p-8 md:pb-0"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{consultoria.workTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white md:text-base">
              {consultoria.workItems.map((item) => (
                <li key={item.label}>
                  <span className="font-bold text-white">{item.label}</span>
                  <span> — {item.description}</span>
                </li>
              ))}
            </ul>
            <img
              src="/images/consultoria-chess.webp"
              alt={consultoria.chessAlt}
              className="mt-6 ml-auto h-36 w-auto object-contain md:h-44"
              loading="lazy"
            />
          </motion.article>
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center px-6 md:mt-28 md:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 h-px w-28 bg-text-dark/25 md:mb-10 md:w-36" aria-hidden />

          <blockquote className="max-w-2xl text-center font-serif text-xl italic leading-relaxed text-text-dark md:max-w-3xl md:text-2xl lg:text-[1.75rem] lg:leading-snug">
            {consultoria.quoteBefore}
            <span className="underline decoration-primary-light decoration-[3px] underline-offset-[5px]">
              {consultoria.quoteHighlight}
            </span>
          </blockquote>
        </motion.div>
      </Container>
    </motion.section>
  );
}
