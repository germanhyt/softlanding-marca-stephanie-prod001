import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { processSteps } from "@/data/siteContent";

export default function ProcesoSection() {
  return (
    <section id="proceso" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajo"
          subtitle="Un proceso circular, no lineal."
          className="mb-10"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-card"
            >
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={step.icon}
                  alt={`Icono del paso ${step.title}`}
                  className="h-12 w-12 rounded-xl bg-background-soft p-2"
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Paso {index + 1}</p>
                  <h3 className="text-2xl font-semibold text-text-dark">{step.title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-main md:text-base">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
