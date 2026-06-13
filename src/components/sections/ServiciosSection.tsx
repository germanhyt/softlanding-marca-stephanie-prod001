import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ButtonCTA from "@/components/common/ButtonCTA";
import { services } from "@/data/siteContent";

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
    <article className={`p-6 md:p-8 lg:p-10 ${className}`.trim()}>
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="text-sm font-medium text-text-muted">{number}</span>
        <span className="rounded-full border border-text-dark/25 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-text-muted">
          {tag}
        </span>
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-text-dark md:text-xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-text-main md:text-base">{description}</p>
      <div className="mt-6">
        <ButtonCTA href="#contacto" label="Agenda una reunión" variant="dark" icon="none" className="px-5 py-2.5 text-xs" />
      </div>
    </article>
  );
}

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          titleSans="Formas de "
          titleSerif="trabajar juntos."
          className="mb-8 md:mb-10"
        />

        <div className="overflow-hidden rounded-2xl bg-background-contrast">
          <div className="grid md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCell
                key={service.number}
                {...service}
                className={[
                  index % 2 === 0 ? "md:border-r md:border-text-dark/10" : "",
                  index < 2 ? "border-b border-text-dark/10" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
