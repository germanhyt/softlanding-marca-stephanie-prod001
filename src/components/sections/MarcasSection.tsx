import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { clientBrands } from "@/data/siteContent";
import { sectionReveal, staggerItem, staggerList } from "@/utils/motion";

export default function MarcasSection() {
  return (
    <motion.section id="clientes" className="overflow-x-clip py-16 md:py-24" {...sectionReveal}>
      <Container>
        <SectionHeading
          eyebrow="Clientes"
          titleSans="Marcas que impulsaron"
          titleSerif="su crecimiento conmigo"
          className="mb-12 md:mb-16 lg:mb-20"
        />

        <motion.ul
          className="grid w-full grid-cols-2 items-stretch gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 md:gap-x-6 lg:grid-cols-6 lg:gap-x-4 xl:gap-x-5 2xl:gap-x-6"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Marcas con las que he trabajado"
        >
          {clientBrands.map((brand) => (
            <motion.li
              key={brand.name}
              variants={staggerItem}
              className="flex h-14 min-w-0 items-center justify-center px-1 sm:h-11 sm:px-1.5 md:h-14 lg:h-14 xl:h-[3.75rem] 2xl:h-16"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto max-w-full object-contain object-center opacity-90"
                loading="lazy"
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </motion.section>
  );
}
