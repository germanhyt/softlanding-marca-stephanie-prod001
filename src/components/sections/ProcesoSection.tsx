import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { processSteps } from "@/data/siteContent";

export default function ProcesoSection() {
  return (
    <section id="proceso" className="bg-primary-light py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="Proceso" titleSans="Cómo " titleSerif="trabajo." className="mb-10 md:mb-14" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`px-4 sm:px-6 lg:px-8 ${index > 0 ? "lg:border-l lg:border-text-dark/15" : ""}`}
            >
              <p className="font-serif text-5xl font-light text-text-dark/70 md:text-6xl">{index + 1}</p>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-text-dark">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-main md:text-base">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-12 md:mt-16">
          <hr className="border-t border-text-dark/20" />
          <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-primary-light px-4 font-serif text-base italic text-text-dark md:text-lg">
            Un proceso circular, no lineal.
          </p>
        </div>
      </Container>
    </section>
  );
}
