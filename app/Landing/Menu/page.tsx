"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Page";
import Footer from "../../components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Playfair_Display } from "next/font/google";

// Elegant serif font for retro headings
const retroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Use images from /public/menu as the official menu content
  const images = Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/menu/menu-${n}.png`;
  });

  // Categorize menu pages (assuming first 4 are food, next 4 are drinks, last 4 are desserts)
  const categories = {
    all: images,
    food: images.slice(0, 4),
    drinks: images.slice(4, 8),
    desserts: images.slice(8, 12),
  };

  const categoryInfo = {
    all: { label: "Semua Menu", icon: "📖", description: "Lihat seluruh menu kami" },
    food: { label: "Makanan", icon: "🍽️", description: "Hidangan utama dan pembuka" },
    drinks: { label: "Minuman", icon: "☕", description: "Kopi, teh, dan minuman lainnya" },
    desserts: { label: "Dessert", icon: "🍰", description: " hidangan penutup manis" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Site Navbar for consistency with Home */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full">
        {/* Retro Hero Section */}
        <section className="relative overflow-hidden">
          {/* Vintage pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #1B1B1D 0, #1B1B1D 1px, transparent 1px, transparent 15px)`,
            }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-xs tracking-widest uppercase border-amber-600 text-amber-700">
                Since 2024
              </Badge>
              <h1 className={`${retroSerif.className} text-4xl md:text-6xl lg:text-7xl text-[#1B1B1D] mb-4`}>
                Menu
                <span className="block text-3xl md:text-5xl lg:text-6xl text-[#d3ae33] mt-2">
                  Saoraja
                </span>
              </h1>
              <p className="text-lg md:text-xl text-amber-800/80 max-w-2xl mx-auto italic">
                &quot;Perjalanan rasa yang memanjakan lidah, menghadirkan kenangan dalam setiap suapan&quot;
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d3ae33] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Content Section */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-white/80 backdrop-blur-sm border border-amber-200">
                {Object.entries(categoryInfo).map(([key, info]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-[#d3ae33] data-[state=active]:text-white transition-all duration-300"
                  >
                    <span className="mr-2">{info.icon}</span>
                    <span className="hidden sm:inline">{info.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Category Description */}
            <div className="text-center mb-8">
              <p className="text-amber-800/70 italic">
                {categoryInfo[selectedCategory as keyof typeof categoryInfo].description}
              </p>
            </div>

            {/* Menu Cards */}
            <ScrollArea className="h-[600px] rounded-lg border border-amber-200 bg-white/60 backdrop-blur-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories[selectedCategory as keyof typeof categories].map((src, idx) => (
                  <Card key={src} className="group hover:shadow-xl transition-all duration-500 border-amber-200 overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={src}
                          alt={`Menu Halaman ${idx + 1}`}
                          loading="lazy"
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Vintage overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Page number badge */}
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-[#d3ae33]/90 text-white backdrop-blur-sm">
                            {idx + 1}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className={`${retroSerif.className} text-lg text-[#1B1B1D]`}>
                            Halaman {idx + 1}
                          </h3>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-amber-300 text-amber-700 hover:bg-amber-50"
                            onClick={() => {
                              const img = new Image();
                              img.src = src;
                              img.onload = () => {
                                const win = window.open();
                                win?.document.write(`<img src="${src}" style="max-width:100%; height:auto;" />`);
                              };
                            }}
                          >
                            Lihat Detail
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </Tabs>

          {/* Retro decorative elements */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 text-amber-700/60 text-sm">
              <span>✦</span>
              <span className="italic">Dibuat dengan cinta dan rempah pilihan</span>
              <span>✦</span>
            </div>
          </div>
        </section>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default MenuPage;
