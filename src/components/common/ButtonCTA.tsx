import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import type { MouseEventHandler } from "react";

type ButtonCTAProps = {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
  variant?: "light" | "dark";
  icon?: "arrow-right" | "arrow-down" | "none";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses = {
  light:
    "bg-primary-light text-primary-dark shadow-card hover:-translate-y-0.5 hover:bg-[#d7f96a]",
  dark: "bg-primary-dark text-white hover:bg-[#2a4f38]"
};

export default function ButtonCTA({
  href,
  label,
  className = "",
  external = false,
  variant = "light",
  icon = "arrow-right",
  onClick
}: ButtonCTAProps) {
  const iconNode =
    icon === "arrow-down" ? (
      <FaArrowDown aria-hidden className="text-xs" />
    ) : icon === "arrow-right" ? (
      <FaArrowRight aria-hidden className="text-xs" />
    ) : null;

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark ${variantClasses[variant]} ${className}`.trim()}
    >
      {label}
      {iconNode}
    </a>
  );
}
