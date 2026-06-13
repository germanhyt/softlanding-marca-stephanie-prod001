import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ButtonCTA from "@/components/common/ButtonCTA";
import { services } from "@/data/siteContent";
import { fadeInView, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

function ServiceCell({
  number,
  tag,
  title,
  description,
  className = ""
}: {
  number: string;
  tag: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article className={`flex h-full flex-col p-8 md:p-10 lg:p-12 ${className}`.trim()}>
      <div className="mb-10 flex items-start justify-between gap-4 md:mb-12">
        <span className="text-sm font-normal text-text-muted/70">{number}</span>
        <span className="rounded-full border border-text-dark px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-text-dark">
          {tag}
        </span>
      </div>

      <h3 className="text-base font-bold uppercase leading-snug tracking-wide text-text-dark md:text-lg lg:text-xl">
        {title}
      </h3>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-text-main md:mt-6 md:text-base md:leading-7">
        {description}
      </p>

      <div className="mt-8 md:mt-10">
        <ButtonCTA
          href="#contacto"
          label="Agenda una reunión"
          variant="dark"
          icon="none"
          className="px-5 py-2.5 text-xs md:text-sm"
        />
      </div>
    </article>
  );
}

export default function ServiciosSection() {
  return (
    <motion.section id="servicios" className="py-16 md:py-24" {...sectionReveal}>
      <Container>
        <motion.div {...fadeInView}>
          <SectionHeading
            eyebrow="Servicios"
            titleSans="Formas de "
            titleSerif="trabajar juntos."
            className="mb-8 md:mb-12"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-3xl bg-[#F2EBE3]"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="grid md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                variants={staggerItem}
                className={[
                  index % 2 === 0 ? "md:border-r md:border-text-dark/[0.12]" : "",
                  index < 2 ? "border-b border-text-dark/[0.12]" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <ServiceCell {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
