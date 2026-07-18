import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ButtonCTA from "@/components/common/ButtonCTA";
import type { SiteContent } from "@/i18n";
import { buildWhatsAppUrl } from "@/utils/helpers";
import { fadeInView, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

function ServiceCell({
  number,
  tag,
  title,
  description,
  ctaLabel,
  whatsappMessage,
  className = ""
}: {
  number: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  className?: string;
}) {
  return (
    <article className={`flex h-full flex-col p-8 md:p-10 lg:p-12 ${className}`.trim()}>
      <div className="mb-10 flex items-start justify-between gap-4 md:mb-12">
        <span className="text-sm font-normal text-white/45">{number}</span>
        <span className="rounded-full border border-primary-light px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-primary-light">
          {tag}
        </span>
      </div>

      <h3 className="text-base font-bold uppercase leading-snug tracking-wide text-white md:text-lg lg:text-xl">
        {title}
      </h3>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-white/75 md:mt-6 md:text-base md:leading-7">
        {description}
      </p>

      <div className="mt-8 md:mt-10">
        <ButtonCTA
          href={buildWhatsAppUrl(whatsappMessage)}
          label={ctaLabel}
          variant="white"
          icon="none"
          external
          className="px-5 py-2.5 text-xs md:text-sm"
        />
      </div>
    </article>
  );
}

type ServiciosSectionProps = {
  content: SiteContent;
};

export default function ServiciosSection({ content }: ServiciosSectionProps) {
  const { servicios, ui, whatsappMessage } = content;

  return (
    <motion.section id="servicios" className="pb-16 pt-4 md:pb-24 md:pt-2" {...sectionReveal}>
      <Container>
        <motion.div {...fadeInView}>
          <SectionHeading
            eyebrow={servicios.eyebrow}
            titleSans={servicios.titleSans}
            titleSerif={servicios.titleSerif}
            className="mb-8 md:mb-12"
          />
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-3xl bg-[#3B4941]"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          <div className="grid md:grid-cols-2">
            {servicios.items.map((service, index) => (
              <motion.div
                key={service.number}
                variants={staggerItem}
                className={[
                  index % 2 === 0 ? "md:border-r md:border-white/10" : "",
                  index < 2 ? "border-b border-white/10" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <ServiceCell
                  {...service}
                  ctaLabel={ui.bookMeeting}
                  whatsappMessage={whatsappMessage}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
