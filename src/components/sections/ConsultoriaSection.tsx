import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { consultoriaIdealPara, consultoriaTrabajamosEn } from "@/data/siteContent";

export default function ConsultoriaSection() {
  return (
    <section id="consultoria" className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Consultoría"
          titleSans="Acompañamiento estratégico para organizaciones en "
          titleSerif="crecimiento."
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="relative overflow-hidden rounded-2xl bg-primary-light p-6 pb-0 md:p-8 md:pb-0">
            <h3 className="text-sm font-bold uppercase tracking-wide text-text-dark">Ideal para equipos que</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-main md:text-base">
              {consultoriaIdealPara.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-dark" aria-hidden />
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
          </article>

          <article className="relative overflow-hidden rounded-2xl bg-primary-light p-6 pb-0 md:p-8 md:pb-0">
            <h3 className="text-sm font-bold uppercase tracking-wide text-text-dark">Trabajamos juntas/os en</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-main md:text-base">
              {consultoriaTrabajamosEn.map((item) => (
                <li key={item.label}>
                  <span className="font-bold text-text-dark">{item.label}</span>
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
          </article>
        </div>

        <div className="mt-12 md:mt-16">
          <hr className="border-t border-text-dark/20" />
          <blockquote className="mx-auto mt-10 max-w-4xl text-center font-serif text-xl italic leading-relaxed text-text-dark md:text-2xl lg:text-[1.75rem]">
            No soy una freelancer que ejecuta tareas. Soy una socia estratégica que trabaja de cerca con tu equipo y
            se involucra en el proceso para generar avances{" "}
            <span className="underline decoration-text-dark/40 underline-offset-4">reales</span>.
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
