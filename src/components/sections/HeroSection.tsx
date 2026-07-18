import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ButtonCTA from "@/components/common/ButtonCTA";
import Container from "@/components/common/Container";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import MobileNavDrawer from "@/components/common/MobileNavDrawer";
import HeroHighlightsStrip from "@/components/sections/HeroHighlightsStrip";
import type { SiteContent } from "@/i18n";
import { easeOut, staggerItem, staggerList } from "@/utils/motion";
import { buildWhatsAppUrl, smoothScrollTo } from "@/utils/helpers";

const scrollTarget = "servicios";

type HeroSectionProps = {
  content: SiteContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ui, hero } = content;

  return (
    <section className="relative overflow-hidden bg-background-base pb-10 pt-6 md:pb-16 md:pt-8">
      <MobileNavDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={content.nav}
        locale={content.locale}
        labels={{
          menu: ui.menu,
          closeMenu: ui.closeMenu,
          navAria: ui.menu,
          languageSwitchAria: ui.languageSwitchAria,
          languageEs: ui.languageEs,
          languageEn: ui.languageEn
        }}
      />

      <Container>
        <motion.header
          className="mb-10 flex items-center justify-between gap-4 md:mb-14"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <a href="#" className="shrink-0" aria-label={ui.homeAria}>
            <img
              src="/logo.webp"
              alt={ui.logoAlt}
              width={220}
              height={56}
              className="h-12 w-auto md:h-14"
              loading="eager"
            />
          </a>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher
              locale={content.locale}
              labels={{
                aria: ui.languageSwitchAria,
                es: ui.languageEs,
                en: ui.languageEn
              }}
              className="hidden sm:flex"
            />
            <ButtonCTA
              href={buildWhatsAppUrl(content.whatsappMessage)}
              label={ui.letsTalk}
              variant="dark"
              icon="none"
              external
              className="px-5 py-2.5 text-xs md:text-sm"
            />
            <button
              type="button"
              className="rounded-md p-2 text-text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              aria-label={isMenuOpen ? ui.closeMenu : ui.openMenu}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </motion.header>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <motion.div variants={staggerList} initial="hidden" animate="show">
            <motion.h1
              variants={staggerItem}
              className="text-4xl leading-[1.1] text-text-dark sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem]"
            >
              <span className="block font-sans font-bold">{hero.titleSans}</span>
              <span className="mt-1 block font-serif text-[1.05em] italic font-medium">{hero.titleSerif}</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-text-main md:text-lg"
            >
              {hero.subtitle}
            </motion.p>
            <motion.div variants={staggerItem} className="mt-8">
              <ButtonCTA
                href={`#${scrollTarget}`}
                label={ui.chooseStrategy}
                variant="dark"
                icon="arrow-down"
                onClick={(event) => {
                  event.preventDefault();
                  smoothScrollTo(scrollTarget);
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative md:pl-4"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
          >
            <img
              src="/images/hero-banner.webp"
              alt={hero.imageAlt}
              className="h-full w-full object-contain"
              loading="eager"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease: easeOut }}
        >
          <HeroHighlightsStrip highlights={hero.highlights} />
        </motion.div>
      </Container>
    </section>
  );
}
