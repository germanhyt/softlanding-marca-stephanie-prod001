import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import ButtonCTA from "@/components/common/ButtonCTA";
import { siteConfig } from "@/config/site.config";
import { newsletterPosts } from "@/data/siteContent";
import { fadeInView, sectionReveal, staggerItem, staggerList } from "@/utils/motion";

export default function NewsletterSection() {
  return (
    <motion.section id="newsletter" className="py-16 md:py-24" {...sectionReveal}>
      <Container>
        <motion.div {...fadeInView}>
          <h2 className="mb-10 text-3xl leading-[1.12] text-text-dark md:mb-14 md:text-5xl lg:text-[3.25rem]">
            <span className="font-sans font-bold">Contenido para </span>
            <span className="font-serif italic font-medium text-text-main">crecer y trascender</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
          variants={staggerList}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
        >
          {newsletterPosts.map((post) => (
            <motion.article key={post.href} variants={staggerItem}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex  w-full items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-5 font-sans text-base font-bold leading-snug text-text-dark transition group-hover:text-primary-dark md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-main md:text-base">{post.excerpt}</p>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ButtonCTA
            href={siteConfig.externalLinks.newsletter}
            label="Ver newsletter"
            variant="dark"
            icon="none"
            external
          />
        </motion.div>
      </Container>
    </motion.section>
  );
}
