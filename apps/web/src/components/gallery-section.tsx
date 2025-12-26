import { Card, CardContent } from "@/components/ui/card";

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop", alt: "Interior Cafe" },
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop", alt: "Kopi Spesial" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop", alt: "Area Makan" },
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop", alt: "Retro Cafe" },
    { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop", alt: "Menu Lezat" },
    { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop", alt: "Suasana Hangat" },
  ];

  return (
    <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-primary">
          Galeri Cafe
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <Card key={i} className="overflow-hidden border-0">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
