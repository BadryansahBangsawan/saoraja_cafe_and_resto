"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Page";
import AllImagesGrid from "../../components/AllImagesGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Playfair_Display } from "next/font/google";

// Elegant serif font for retro headings
const retroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Sample gallery images - replace with actual gallery images
const sampleGalleryImages = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/img${String(i + 1).padStart(2, '0')}.jpg`,
  title: `Moment ${i + 1}`,
  category: i % 3 === 0 ? "interior" : i % 3 === 1 ? "food" : "atmosphere",
  date: new Date(2024, Math.floor(i / 5), (i % 28) + 1).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}));

const GalleryPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // Simulate loading gallery images
  useEffect(() => {
    const loadImages = async () => {
      try {
        // In a real app, you'd fetch these from an API or filesystem
        // For now, we'll use the sample images
        const imageSrcs = sampleGalleryImages.map(img => img.src);
        setImages(imageSrcs);
      } catch (error) {
        console.error('Failed to load gallery images:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const categories = {
    all: sampleGalleryImages,
    interior: sampleGalleryImages.filter(img => img.category === "interior"),
    food: sampleGalleryImages.filter(img => img.category === "food"),
    atmosphere: sampleGalleryImages.filter(img => img.category === "atmosphere"),
  };

  const categoryInfo = {
    all: { label: "Semua", icon: "📷", description: "Koleksi foto lengkap Saoraja" },
    interior: { label: "Interior", icon: "🏛️", description: "Suasana dan dekorasi dalam ruangan" },
    food: { label: "Makanan", icon: "🍽️", description: "Hidangan istimewa kami" },
    atmosphere: { label: "Suasana", icon: "✨", description: "Moments dan suasana hangat" },
  };

  const currentImages = categories[selectedCategory as keyof typeof categories];
  const currentImageSrcs = currentImages.map(img => img.src);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d3ae33] mx-auto mb-4"></div>
            <p className="text-amber-700">Memuat gallery...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
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
                Moments & Memories
              </Badge>
              <h1 className={`${retroSerif.className} text-4xl md:text-6xl lg:text-7xl text-[#1B1B1D] mb-4`}>
                Gallery
                <span className="block text-3xl md:text-5xl lg:text-6xl text-[#d3ae33] mt-2">
                  Saoraja
                </span>
              </h1>
              <p className="text-lg md:text-xl text-amber-800/80 max-w-2xl mx-auto italic">
                &quot;Setiap foto menceritakan kisah, setiap sudut menyimpan kenangan manis&quot;
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d3ae33] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="max-w-6xl mx-auto px-4 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-white/60 backdrop-blur-sm border-amber-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1">📸</div>
                <div className="text-2xl font-bold text-[#1B1B1D]">{images.length}</div>
                <div className="text-sm text-amber-700">Foto</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-amber-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1">☕</div>
                <div className="text-2xl font-bold text-[#1B1B1D]">2024</div>
                <div className="text-sm text-amber-700">Tahun</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-amber-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-2xl font-bold text-[#1B1B1D]">100%</div>
                <div className="text-sm text-amber-700">Kenyamanan</div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-amber-200">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-1">💖</div>
                <div className="text-2xl font-bold text-[#1B1B1D]">∞</div>
                <div className="text-sm text-amber-700">Kisah</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-6xl mx-auto px-4 pb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(categoryInfo).map(([key, info]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key)}
                className={`${
                  selectedCategory === key
                    ? "bg-[#d3ae33] hover:bg-[#d3ae33]/90 text-white"
                    : "border-amber-300 text-amber-700 hover:bg-amber-50"
                }`}
              >
                <span className="mr-2">{info.icon}</span>
                {info.label}
              </Button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-amber-800/70 italic text-sm">
              {categoryInfo[selectedCategory as keyof typeof categoryInfo].description}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-white/40 backdrop-blur-sm rounded-lg border border-amber-200 p-6">
            <AllImagesGrid images={currentImageSrcs} />
          </div>
        </section>

        {/* Retro decorative elements */}
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-amber-700/60 text-sm">
              <span>✦</span>
              <span className="italic">Setiap momen adalah kenangan yang berharga</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
