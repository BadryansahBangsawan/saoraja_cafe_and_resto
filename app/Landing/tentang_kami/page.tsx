"use client";
import React from "react";
import Navbar from "../../components/Navbar/Page";
import Footer from "../../components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Playfair_Display } from "next/font/google";

// Elegant serif font for retro headings
const retroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TentangKamiPage = () => {
  const timeline = [
    {
      year: "2024",
      title: "Awal Perjalanan",
      description: "Saoraja Cafe & Resto dibuka dengan visi menciptakan tempat berkumpul yang hangat dan nyaman.",
      icon: "🌱"
    },
    {
      year: "2024",
      title: "Komunitas Tumbuh",
      description: "Mulai menjadi tempat favorit bagi komunitas lokal untuk berkumpul, bekerja, dan bersantai.",
      icon: "🏛️"
    },
    {
      year: "Sekarang",
      title: "Destinasi Wisata Kuliner",
      description: "Menjadi salah satu destinasi kafe dan resto paling dicari di kota dengan cita rasa autentik.",
      icon: "⭐"
    }
  ];

  const values = [
    {
      title: "Kualitas Terbaik",
      description: "Hanya menggunakan bahan-bahan pilihan dengan kualitas terbaik untuk setiap hidangan.",
      icon: "✨"
    },
    {
      title: "Kenyamanan",
      description: "Menciptakan suasana yang nyaman dan hangat untuk setiap pelanggan.",
      icon: "🏡"
    },
    {
      title: "Kreativitas",
      description: "Selalu berinovasi dalam menu dan layanan untuk memberikan pengalaman terbaik.",
      icon: "🎨"
    },
    {
      title: "Keramahan",
      description: "Layanan yang ramah dan personal membuat setiap kunjungan terasa spesial.",
      icon: "💝"
    }
  ];

  const team = [
    {
      name: "Chef Jaya",
      role: "Head Chef",
      description: "Dengan pengalaman 15+ tahun dalam kuliner Indonesia dan internasional.",
      passion: "Spesialis masakan tradisional dengan sentuhan modern."
    },
    {
      name: "Sarah Putri",
      role: "Restaurant Manager",
      description: "Ahli dalam manajemen restoran dengan fokus pada pengalaman pelanggan.",
      passion: "Berkomitmen menciptakan momen tak terlupakan untuk setiap tamu."
    },
    {
      name: "Budi Santoso",
      role: "Barista & Mixologist",
      description: "Juara barista regional dengan keahlian dalam kopi dan cocktail craft.",
      passion: "Menikmati seni dalam menciptakan minuman sempurna."
    }
  ];

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
                Our Story
              </Badge>
              <h1 className={`${retroSerif.className} text-4xl md:text-6xl lg:text-7xl text-[#1B1B1D] mb-4`}>
                Tentang
                <span className="block text-3xl md:text-5xl lg:text-6xl text-[#d3ae33] mt-2">
                  Saoraja
                </span>
              </h1>
              <p className="text-lg md:text-xl text-amber-800/80 max-w-2xl mx-auto italic">
                &quot;Lebih dari sekadar kafe, kami adalah rumah bagi cerita dan kenangan indah&quot;
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d3ae33] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-6`}>
                Kisah Kami
              </h2>
              <div className="space-y-4 text-amber-800">
                <p className="leading-relaxed">
                  Saoraja Cafe & Resto lahir dari hasrat sederhana: menciptakan ruang di mana
                  orang bisa berkumpul, berbagi cerita, dan menikmati hidangan lezat dalam suasana
                  yang hangat dan menyambut.
                </p>
                <p className="leading-relaxed">
                  Nama &quot;Saoraja&quot; diambil dari bahasa Bugis yang berarti &quot;rumah besar&quot;, mencerminkan
                  visi kami untuk menjadi rumah kedua bagi setiap pelanggan. Setiap sudut di tempat
                  kami dirancang dengan cinta, setiap hidangan dimasak dengan passion, dan setiap
                  layanan diberikan dengan hati.
                </p>
                <p className="leading-relaxed">
                  Kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang
                  pengalaman, kenangan, dan koneksi antar manusia.
                </p>
              </div>
            </div>
            <Card className="bg-white/60 backdrop-blur-sm border-amber-200 p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h3 className={`${retroSerif.className} text-2xl text-[#1B1B1D] mb-2`}>
                    Filosofi Kami
                  </h3>
                  <p className="text-amber-800/80 italic">
                    &quot;Makanan adalah jembatan antara budaya, tradisi, dan inovasi&quot;
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#d3ae33]">50+</div>
                    <div className="text-sm text-amber-700">Menu</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#d3ae33]">1000+</div>
                    <div className="text-sm text-amber-700">Pelanggan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#d3ae33]">⭐ 4.9</div>
                    <div className="text-sm text-amber-700">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Perjalanan Kami
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-semibold text-[#d3ae33] mb-2">{item.year}</div>
                  <h3 className={`${retroSerif.className} text-xl text-[#1B1B1D] mb-3`}>
                    {item.title}
                  </h3>
                  <p className="text-amber-800/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Nilai-Nilai Kami
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className={`${retroSerif.className} text-lg text-[#1B1B1D] mb-3`}>
                    {value.title}
                  </h3>
                  <p className="text-amber-800/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Tim Kami
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto bg-[#d3ae33]/20 rounded-full flex items-center justify-center text-3xl mb-3">
                      👨‍🍳
                    </div>
                    <h3 className={`${retroSerif.className} text-xl text-[#1B1B1D] mb-1`}>
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="bg-[#d3ae33] text-white">
                      {member.role}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <p className="text-amber-800/70 text-sm leading-relaxed">
                      {member.description}
                    </p>
                    <div className="text-center">
                      <p className="text-xs text-amber-600 italic">
                        <em>&quot;{member.passion}&quot;</em>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Pertanyaan Umum
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="nama-saoraja" className="bg-white/60 backdrop-blur-sm border-amber-200">
                <AccordionTrigger className="text-left px-6">
                  <span className="text-[#1B1B1D] font-medium">Apa arti nama Saoraja?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-amber-800/70">
                  Saoraja adalah bahasa Bugis yang berarti &quot;rumah besar&quot;. Nama ini mencerminkan visi kami
                  untuk menjadi rumah kedua bagi setiap pelanggan - tempat yang hangat, nyaman, dan menyambut.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="keistimewaan" className="bg-white/60 backdrop-blur-sm border-amber-200">
                <AccordionTrigger className="text-left px-6">
                  <span className="text-[#1B1B1D] font-medium">Apa yang membuat Saoraja spesial?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-amber-800/70">
                  Kami menggabungkan resep tradisional dengan sentuhan modern, menggunakan bahan-bahan
                  pilihan, dan menciptakan suasana yang unik. Setiap detail dirancang untuk memberikan
                  pengalaman tak terlupakan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="menu-vegetarian" className="bg-white/60 backdrop-blur-sm border-amber-200">
                <AccordionTrigger className="text-left px-6">
                  <span className="text-[#1B1B1D] font-medium">Apakah tersedia menu vegetarian?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-amber-800/70">
                  Ya, kami memiliki berbagai pilihan vegetarian yang lezat. Kami juga dapat menyesuaikan
                  menu sesuai dengan preferensi diet Anda jika diberitahu sebelumnya.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Card className="bg-gradient-to-r from-[#d3ae33] to-[#c9a130] text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className={`${retroSerif.className} text-3xl md:text-4xl mb-4`}>
                Mari Berkunjung ke Rumah Kami
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Kami sangat menantikan kehadiran Anda untuk berbagi kenangan indah bersama
                di Saoraja Cafe & Resto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-[#d3ae33] hover:bg-gray-100">
                  Reservasi Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#d3ae33]">
                  Lihat Menu
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Retro decorative elements */}
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 text-amber-700/60 text-sm">
              <span>✦</span>
              <span className="italic">Dibangun dengan passion, disajikan dengan cinta</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TentangKamiPage;