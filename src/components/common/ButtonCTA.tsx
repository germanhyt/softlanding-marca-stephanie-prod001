import { FaArrowRight } from "react-icons/fa6";
import type { MouseEventHandler } from "react";

type ButtonCTAProps = {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function ButtonCTA({ href, label, className = "", external = false, onClick }: ButtonCTAProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-sm font-semibold text-primary-dark shadow-card transition hover:-translate-y-0.5 hover:bg-[#d7f96a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark ${className}`.trim()}
    >
      {label}
      <FaArrowRight aria-hidden />
    </a>
  );
}
