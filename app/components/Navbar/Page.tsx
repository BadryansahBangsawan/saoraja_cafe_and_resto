"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface NavItemProps {
  text: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  onDark?: boolean; // use white text when true (for transparent over hero)
}

const Logo = () => (
  <Link
    href="/"
    aria-label="Saoraja Cafe & Resto Home"
    className="flex items-center gap-2"
  >
    <Image
      src="/logo.png"
      alt="Saoraja Cafe & Resto"
      width={150}
      height={48}
      priority
      className="h-10 sm:h-12 w-auto"
    />
  </Link>
);

const NavItem: React.FC<NavItemProps> = ({
  text,
  href,
  isActive,
  onClick,
  onDark,
}) => (
  <Link
    href={href}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
    className={`px-4 py-2 transition-colors ${
      isActive
        ? "text-[#d3ae33] font-semibold"
        : onDark
        ? "text-white hover:text-gray-200"
        : "text-[#1B1B1D] hover:text-gray-600"
    }`}
  >
    {text}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Menu", href: "/Landing/Menu" },
    { text: "Tentang Kami", href: "/Landing/Tentang" },
    { text: "Temukan", href: "/Landing/Temukan" },
    { text: "Gallery Saoraja", href: "/Landing/gallery" },
  ];

  const closeMobile = () => setMobileOpen(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Consider hero when at top of the page on the home route: transparent over hero,
  // become solid after the user scrolls or when on other pages.
  useEffect(() => {
    const handler = () => setAtTop(window.scrollY < 50);
    // run once to set initial state
    if (typeof window !== "undefined") handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  const isTransparent = pathname === "/" && atTop;

  return (
    <nav
      className={`${
        isTransparent
          ? "bg-transparent absolute top-0 left-0 right-0 z-50"
          : "bg-white relative"
      } px-4 py-4 flex items-center justify-between`}
    >
      <Logo />

      {/* Center the nav items on md+ */}
      <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            text={item.text}
            href={item.href}
            isActive={pathname === item.href}
            onDark={isTransparent}
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
          className={`p-2 rounded-md ${
            isTransparent ? "text-white" : "text-[#1B1B1D]"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d3ae33]`}
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

      {/* Mobile menu overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/40 md:hidden z-40"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed top-0 right-0 bottom-0 w-72 max-w-[85%] bg-white md:hidden z-50 shadow-xl p-4 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-[#1B1B1D]">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="p-2 rounded-md text-[#1B1B1D] hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
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
                </button>
              </div>
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`px-3 py-3 rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-[#d3ae33] bg-gray-50 font-semibold"
                        : "text-[#1B1B1D] hover:bg-gray-50"
                    }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
