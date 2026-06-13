import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site.config";
import { sobreMiParagraphs } from "@/data/siteContent";

export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
          <div className="overflow-hidden">
            <img
              src="/images/stephanie-portrait.webp"
              alt="Retrato ilustrado de Stephanie Hoyle"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          <div id="contacto">
            <SectionHeading
              eyebrow="Sobre mí"
              titleSans="Estratega de crecimiento "
              titleSerif="con raíces en el marketing y el dato."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-main md:text-lg">
              {sobreMiParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-sans text-lg font-bold text-text-dark">Stephanie Hoyle</p>
              <p className="font-serif text-sm italic text-text-muted">Growth strategy</p>
            </div>

            <div className="mt-8">
              <ButtonCTA
                href={siteConfig.externalLinks.linkedin}
                label="Hablemos"
                variant="dark"
                icon="none"
                external
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
