import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function ConsultoriaSection() {
  return (
    <section id="consultoria" className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 rounded-[2rem] bg-white p-6 shadow-card md:grid-cols-2 md:p-10">
          <div>
            <SectionHeading
              eyebrow="Consultoría"
              title="Decisiones estratégicas con foco en impacto real"
              subtitle="Acompañamiento para traducir objetivos de negocio en planes accionables, medibles y sostenibles."
            />
            <p className="mt-6 text-base leading-relaxed text-text-main md:text-lg">
              Mi enfoque combina lectura de contexto, claridad de prioridades y ejecución práctica. No trabajo con
              tácticas aisladas: construimos una estrategia integral alineada con el momento real de tu negocio.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-primary-dark/10 bg-background-soft p-3">
            <img
              src="/images/consultoria-reference.png"
              alt="Vista de referencia de la sección de consultoría."
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
