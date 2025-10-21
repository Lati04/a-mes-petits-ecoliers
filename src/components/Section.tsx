import React from "react";
import type { SectionProps } from "../data";

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  bgColor = "",
  noMarginTop = false,
}) => (
  <section
    id={id}
    aria-labelledby={id ? `${id}-title` : undefined}
    className={`relative w-full max-w-[1450px] mx-auto py-4 px-3 md:px-6 lg:px-12 glow-frame ${bgColor} ${
      noMarginTop ? "mt-0" : "mt-12"
    }`}
  >
    {title && (
      <h2
        id={id ? `${id}-title` : undefined}
        className="flex flex-wrap items-center justify-center gap-2 mb-1 text-3xl font-bold text-center text-gold-gradient"
      >
        {title}
        <img
          src="/images/logo.png"
          alt=""
          aria-hidden="true"
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-2xl"
        />
      </h2>
    )}
    {children}
  </section>
);

export default Section;
