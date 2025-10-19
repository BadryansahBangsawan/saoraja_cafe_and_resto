"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

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
    { text: "Tentang Kami", href: "/Landing/tentang_kami" },
    { text: "Temukan", href: "/Landing/temukan" },
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
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={isTransparent ? "text-white hover:text-white/80" : "text-[#1B1B1D] hover:text-[#1B1B1D]/80"}
              aria-label="Open menu"
            >
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
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 max-w-[85%]">
            <SheetHeader>
              <SheetTitle className="text-[#1B1B1D]">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-6">
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`px-3 py-3 rounded-md transition-colors block ${
                      pathname === item.href
                        ? "text-[#d3ae33] bg-gray-50 font-semibold"
                        : "text-[#1B1B1D] hover:bg-gray-50"
                    }`}
                  >
                    {item.text}
                  </Link>
                  {index < navItems.length - 1 && <Separator />}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
