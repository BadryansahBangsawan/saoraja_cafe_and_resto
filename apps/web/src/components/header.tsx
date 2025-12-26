"use client";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "Beranda" },
    { to: "#gallery", label: "Galeri" },
    { to: "#reservation", label: "Reservasi" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_saoraja.png"
              alt="Saoraja Cafe Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-serif text-2xl font-bold text-primary">
              Saoraja Cafe
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {links.map(({ to, label }) => {
              return (
                <Link
                  key={to}
                  href={to}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
