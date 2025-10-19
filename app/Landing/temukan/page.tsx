"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Page";
import Footer from "../../components/Footer/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Playfair_Display } from "next/font/google";

// Elegant serif font for retro headings
const retroSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const TemukanPage = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. Sudirman No. 123, Kota Baru",
      subtitle: "Kelurahan Melati, Kecamatan Taman, 12345",
      copyText: "Jl. Sudirman No. 123, Kota Baru, 12345",
      copyType: "address"
    },
    {
      icon: "📞",
      title: "Telepon",
      content: "+62 812-3456-7890",
      subtitle: "Senin - Minggu, 08:00 - 22:00",
      copyText: "+62 812-3456-7890",
      copyType: "phone"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@saoraja.com",
      subtitle: "Respon dalam 24 jam",
      copyText: "info@saoraja.com",
      copyType: "email"
    },
    {
      icon: "🌐",
      title: "Website",
      content: "www.saoraja.com",
      subtitle: "Online 24/7",
      copyText: "www.saoraja.com",
      copyType: "website"
    }
  ];

  const operatingHours = [
    { day: "Senin - Jumat", time: "08:00 - 22:00", status: "open" },
    { day: "Sabtu", time: "08:00 - 23:00", status: "open" },
    { day: "Minggu", time: "08:00 - 22:00", status: "open" },
    { day: "Hari Libur", time: "09:00 - 22:00", status: "open" }
  ];

  const features = [
    { icon: "🅿️", title: "Parkir Luas", description: "Area parkir yang luas dan aman" },
    { icon: "📶", title: "WiFi Gratis", description: "Koneksi internet cepat dan stabil" },
    { icon: "🎵", title: "Live Music", description: "Setiap Jumat & Sabtu malam" },
    { icon: "🎂", title: "Acara Privat", description: "Ruang tersedia untuk acara khusus" },
    { icon: "♿", title: "Aksesibel", description: "Fasilitas ramah disabilitas" },
    { icon: "🚬", title: "Smoking Area", description: "Area khusus untuk merokok" }
  ];

  const transportation = [
    {
      mode: "Mobil",
      icon: "🚗",
      instructions: "5 menit dari pusat kota, tersedia parkir luas"
    },
    {
      mode: "Transportasi Umum",
      icon: "🚌",
      instructions: "Halte bus terdekat 2 menit jalan kaki"
    },
    {
      mode: "Taksi/Online",
      icon: "🚕",
      instructions: "Drop point tepat di depan restoran"
    },
    {
      mode: "Sepeda Motor",
      icon: "🏍️",
      instructions: "Parkir khusus motor tersedia"
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
                Visit Us
              </Badge>
              <h1 className={`${retroSerif.className} text-4xl md:text-6xl lg:text-7xl text-[#1B1B1D] mb-4`}>
                Temukan
                <span className="block text-3xl md:text-5xl lg:text-6xl text-[#d3ae33] mt-2">
                  Saoraja
                </span>
              </h1>
              <p className="text-lg md:text-xl text-amber-800/80 max-w-2xl mx-auto italic">
                &quot;Temukan rumah Anda di sini, di mana setiap kunjungan adalah pulang ke kampung halaman&quot;
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#d3ae33] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Lokasi Kami
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <Card className="bg-white/60 backdrop-blur-sm border-amber-200 overflow-hidden">
            <CardContent className="p-0">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className={`${retroSerif.className} text-2xl text-[#1B1B1D] mb-2`}>
                    Peta Interaktif
                  </h3>
                  <p className="text-amber-800/70 mb-4">
                    Jl. Sudirman No. 123, Kota Baru
                  </p>
                  <Button className="bg-[#d3ae33] hover:bg-[#d3ae33]/90 text-white">
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Informasi Kontak
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{info.icon}</div>
                  <h3 className={`${retroSerif.className} text-lg text-[#1B1B1D] mb-2`}>
                    {info.title}
                  </h3>
                  <p className="text-amber-800 font-medium mb-1">{info.content}</p>
                  <p className="text-amber-700/60 text-sm mb-4">{info.subtitle}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                    onClick={() => handleCopy(info.copyText, info.copyType)}
                  >
                    {copied === info.copyType ? "✓ Tersalin!" : `Salin ${info.title}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Operating Hours */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Jam Operasional
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {operatingHours.map((schedule, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#1B1B1D] mb-1">{schedule.day}</h3>
                    <p className="text-amber-800">{schedule.time}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 border-green-200"
                  >
                    {schedule.status === "open" ? "Buka" : "Tutup"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Card className="bg-gradient-to-r from-[#d3ae33] to-[#c9a130] text-white border-0 inline-block">
              <CardContent className="p-4">
                <p className="font-semibold">
                  🟢 Sedang Buka Sekarang!
                </p>
                <p className="text-sm text-white/90">
                  Pesanan terakhir: 21:30
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Fasilitas
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className={`${retroSerif.className} text-lg text-[#1B1B1D] mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-amber-800/70 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Transportation */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className={`${retroSerif.className} text-3xl md:text-4xl text-[#1B1B1D] mb-4`}>
              Cara Menuju ke Sini
            </h2>
            <div className="h-0.5 w-16 bg-[#d3ae33] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportation.map((transport, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{transport.icon}</div>
                  <h3 className={`${retroSerif.className} text-lg text-[#1B1B1D] mb-2`}>
                    {transport.mode}
                  </h3>
                  <p className="text-amber-800/70 text-sm">{transport.instructions}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Card className="bg-gradient-to-r from-[#d3ae33] to-[#c9a130] text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className={`${retroSerif.className} text-3xl md:text-4xl mb-4`}>
                Kami Menanti Kedatangan Anda
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Reservasi tidak diperlukan, tetapi kami menyarankan untuk memesan terlebih dahulu
                untuk jaminan tempat, terutama di akhir pekan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-[#d3ae33] hover:bg-gray-100">
                  📞 Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#d3ae33]">
                  📧 Email Reservasi
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
              <span className="italic">Pintu kami selalu terbuka untuk Anda</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TemukanPage;