import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-primary-dark/10 bg-background-soft p-3">
            <img
              src="/images/stephanie-portrait.webp"
              alt="Retrato de Stephanie Hoyle"
              className="h-full w-full rounded-[1.6rem] object-cover"
              loading="lazy"
            />
          </div>

          <div id="contacto">
            <SectionHeading eyebrow="Sobre mí" title="Stephanie Hoyle" subtitle="Growth strategy" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-main md:text-lg">
              <p>
                Con más de 10 años trabajando en la intersección de marketing, datos y estrategia, he acompañado a
                startups en sus primeras etapas, a scaleups en momentos críticos de crecimiento y a organizaciones de
                impacto en la construcción de sistemas sostenibles.
              </p>
              <p>
                Mi trabajo no empieza con tácticas. Empieza entendiendo el negocio, el equipo y los objetivos reales
                y, desde ahí, construimos juntos la estrategia que tiene más posibilidades de funcionar.
              </p>
              <p>
                Me interesa el crecimiento que dura: el que está alineado con la identidad de la organización,
                soportado por datos y ejecutado con criterio.
              </p>
            </div>

            <div className="mt-8">
              <ButtonCTA href="https://www.linkedin.com/in/stephaniehoyleca/" label="Conversemos en LinkedIn" external />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
