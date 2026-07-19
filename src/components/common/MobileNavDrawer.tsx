import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import ButtonCTA from "@/components/common/ButtonCTA";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import type { Locale } from "@/i18n";
import type { NavLink } from "@/i18n/types";
import { handleHashNavigation } from "@/utils/helpers";
import { easeOut } from "@/utils/motion";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  locale: Locale;
  whatsappUrl: string;
  labels: {
    menu: string;
    closeMenu: string;
    navAria: string;
    letsTalk: string;
    languageSwitchAria: string;
    languageEs: string;
    languageEn: string;
  };
};

export default function MobileNavDrawer({
  isOpen,
  onClose,
  navLinks,
  locale,
  whatsappUrl,
  labels
}: MobileNavDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label={labels.closeMenu}
            className="fixed inset-0 z-40 bg-text-dark/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.nav
            aria-label={labels.navAria}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col bg-background-soft shadow-2xl sm:max-w-sm"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: easeOut }}
          >
            <div className="flex items-center justify-between border-b border-primary-dark/10 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">{labels.menu}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label={labels.closeMenu}
                className="rounded-md p-2 text-text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              >
                <FiX size={24} />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto px-4 py-6">
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.35, ease: easeOut }}
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={(event) => {
                      if (!item.external && handleHashNavigation(event, item.href)) {
                        onClose();
                      } else if (!item.external) {
                        onClose();
                      }
                    }}
                    className="block rounded-lg px-3 py-3.5 text-base font-medium text-text-main transition-colors hover:bg-background-contrast"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-primary-dark/10 px-5 py-5 sm:hidden">
              <ButtonCTA
                href={whatsappUrl}
                label={labels.letsTalk}
                variant="dark"
                icon="none"
                external
                className="w-full justify-center"
              />
              <LanguageSwitcher
                locale={locale}
                labels={{
                  aria: labels.languageSwitchAria,
                  es: labels.languageEs,
                  en: labels.languageEn
                }}
              />
            </div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
