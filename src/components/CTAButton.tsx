import React from "react";
import type { CTAButtonProps } from "../data";

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  variant = "line-hover",
  className = "",
  style = {},
  type = "button",
}) => {
  const baseClasses = "relative inline-flex items-center space-x-2 sm:space-x-3 font-bold transition-all";
  let variantClasses = "";

  switch (variant) {
    case "line-hover":
      variantClasses =
        "text-[var(--gold)] hover:text-[var(--gold-light)] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full";
      break;

    case "button-gold":
      variantClasses =
        "px-4 py-2 text-base text-[#2b2100] bg-gradient-to-br from-[#e0af47] to-[#ebce8c] shadow-[0_6px_15px_rgba(224,175,71,0.4)] hover:bg-gradient-to-br hover:from-[#ebce8c] hover:to-[#e0af47] hover:shadow-[0_10px_25px_rgba(224,175,71,0.5)] hover:-translate-y-1 " +
        "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[var(--gold)] after:transition-all hover:after:w-full";
      break;

    case "icon":
      variantClasses = "bg-gradient-to-br from-[#e0af47] to-[#ebce8c] text-[#2b2100] shadow-md";
      break;

    default:
      variantClasses = "";
  }
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  const content = <>{children}</>;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClasses} style={style}>
      {content}
    </button>
  );
};

export default CTAButton;
