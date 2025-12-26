"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNkM2FlMzMiLz4KPC9zdmc+')] opacity-20" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-5xl md:text-8xl font-bold mb-4 text-primary">
          Saoraja Cafe & Resto
        </h1>

        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Nikmati pengalaman kuliner klasik dengan nuansa retro yang hangat
        </p>
        <a href="#reservation">
          <Button size="lg" className="text-lg px-8 py-6">
            Reservasi Sekarang
          </Button>
        </a>
      </div>
    </section>
  );
}
