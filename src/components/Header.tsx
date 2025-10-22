import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import type { HeaderProps } from "../data";
import { navItems as defaultNavItems } from "../data";
import { scrollToSection as scrollToSectionHelper } from "../helpers/scrollToSection";
import CTAButton from "./CTAButton";

const Header: React.FC<HeaderProps> = ({ navItems = defaultNavItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSectionHelper(id);
    setMenuOpen(false);
  };

  return (
    <header className="w-full px-4 py-2 sticky top-0 z-50 header-rainbow backdrop-blur-md shadow-[0_6px_15px_rgba(224,175,71,0.25)] dark:bg-[#3d2e00]/90 dark:shadow-[0_6px_15px_rgba(224,175,71,0.4)] transition-all duration-300 font-baloo">
      <nav className="flex items-center justify-between mx-auto">
        {/* ---------- LOGO + TITRE ---------- */}
        <CTAButton
          href="https://www.amazon.fr/s?k=à+mes+petits+écoliers"
          variant="line-hover"
          style={{ height: "70px" }}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <>
            <img
              src="/images/a-mes-petits-ecoliers-collection-coloriage-educatif.jpg"
              alt="Logo À mes petits écoliers"
              className="object-contain w-auto h-full rounded-lg"
            />
            {/* Titre affiché sauf sur les très petits écrans */}
            <span className="hidden sm:inline text-lg md:text-xl font-semibold text-[#cba95c] tracking-wide drop-shadow-sm">
              À mes petits écoliers
            </span>
          </>
        </CTAButton>

        {/* ---------- MENU DESKTOP ---------- */}
        <ul className="hidden md:flex space-x-6 text-[1.1rem] list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <CTAButton
                variant="line-hover"
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 dark:text-[#fff8e1]"
              >
                {item.label}
              </CTAButton>
            </li>
          ))}
        </ul>

        {/* ---------- BOUTON HAMBURGER (mobile) ---------- */}
        <CTAButton
          onClick={() => setMenuOpen(!menuOpen)}
          variant="icon"
          className="p-2 rounded-md md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? (
            <X size={28} color="#cba95c" />
          ) : (
            <Menu size={28} color="#cba95c" />
          )}
        </CTAButton>
      </nav>

      {/* ---------- MENU MOBILE ---------- */}
      {menuOpen && (
        <ul className="m-2 list-none transition-all duration-300 origin-top transform shadow-lg rounded-b-xl md:hidden header-rainbow backdrop-blur-md">
          {navItems.map((item) => (
            <li key={item.id} className="flex justify-center py-3">
              <CTAButton
                variant="line-hover"
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 dark:text-[#fff8e1]"
              >
                {item.label}
              </CTAButton>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
