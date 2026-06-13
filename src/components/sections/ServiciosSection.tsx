import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ButtonCTA from "@/components/common/ButtonCTA";
import { services } from "@/data/siteContent";

function ServiceCard({
  title,
  description,
  result,
  image,
  alt
}: {
  title: string;
  description: string;
  result: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="h-full rounded-3xl border border-primary-dark/10 bg-white p-5 shadow-card">
      <img src={image} alt={alt} className="h-32 w-full rounded-2xl object-cover" loading="lazy" />
      <h3 className="mt-5 text-2xl font-semibold text-text-dark">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-main">{description}</p>
      <p className="mt-4 rounded-xl bg-background-soft p-3 text-sm font-medium text-text-dark">{result}</p>
    </article>
  );
}

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-background-soft py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones adaptadas al momento de tu negocio"
          subtitle="Combinamos estrategia, marca y soporte on-demand para sostener crecimiento con dirección clara."
          className="mb-10"
        />

        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.08}
            className="services-swiper !pb-10"
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-10">
          <ButtonCTA href="#contacto" label="Elegí tu estrategia" />
        </div>
      </Container>
    </section>
  );
}
