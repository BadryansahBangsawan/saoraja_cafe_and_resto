"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Logo = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold italic text-[#d3ae33]">
      <span className="text-[#1B1B1D]">Saoraja </span>Cafe & Resto
    </span>
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ text, href, isActive, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`px-4 py-2 transition-colors ${
      isActive
        ? "text-[#d3ae33] font-semibold"
        : "text-[#1B1B1D] hover:text-gray-600"
    }`}
  >
    {text}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { text: "Menu", href: "/Landing/Menu" },
    { text: "Tentang Kami", href: "/Landing/Tentang" },
    { text: "Temukan", href: "/Landing/Temukan" },
    { text: "Gallery Saoraja", href: "/Landing/gallery" },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="bg-white px-4 py-4 flex items-center justify-between relative">
      <Logo />

      {/* Center the nav items on md+ */}
      <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            text={item.text}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((s) => !s)}
          className="p-2 rounded-md text-[#1B1B1D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d3ae33]"
        >
          <span className="sr-only">Toggle menu</span>
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden mt-2 z-50"
        >
          <div className="flex flex-col p-3">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                text={item.text}
                href={item.href}
                isActive={pathname === item.href}
                onClick={closeMobile}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
