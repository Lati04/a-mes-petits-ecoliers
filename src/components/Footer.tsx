import React from "react";
import { ChevronUp } from "lucide-react";
import type { FooterProps } from "../data";

const Footer: React.FC<FooterProps> = ({
  siteName = "À mes petits écoliers",
  year = new Date().getFullYear(),
  showBackToTop = true,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#ebce8c] backdrop-blur-md shadow-[0_-4px_12px_rgba(203,169,92,0.25)] dark:bg-[#3d2e00]/90 dark:shadow-[0_-6px_15px_rgba(203,169,92,0.4)] transition-all duration-300 py-4 text-center text-gray-700 dark:text-[#fff8e1]">
      {showBackToTop && (
        <div
          onClick={scrollToTop}
          className="inline-flex flex-col items-center justify-center text-gray-700 dark:text-[#fff8e1] hover:text-[#cba95c] transition-transform hover:scale-110 cursor-pointer select-none"
          aria-label="Remonter en haut de la page"
        >
          <ChevronUp size={24} className="-mb-4" />
          <ChevronUp size={24} />
        </div>
      )}
      <p>
        © {year} <span className="font-semibold">{siteName}</span>. Tous droits réservés.
      </p>
      <p className="text-sm">Créé avec 🤎 et un soupçon de magie dorée ✨</p>
    </footer>
  );
};

export default Footer;
