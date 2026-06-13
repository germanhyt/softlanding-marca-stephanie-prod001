export const easeOut = [0.22, 1, 0.36, 1] as const;

export const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, ease: easeOut }
};

export const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: easeOut }
};

export const slideFromRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: easeOut }
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: easeOut }
};

export const staggerList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } }
};
