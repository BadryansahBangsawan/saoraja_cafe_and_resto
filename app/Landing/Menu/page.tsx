"use client";
import React from "react";
import Navbar from "../../components/Navbar/Page";
import Footer from "../../components/Footer/page";

const MenuPage = () => {
  // Use images from /public/menu as the official menu content
  const images = Array.from({ length: 12 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/menu/menu-${n}.png`;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Site Navbar for consistency with Home */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full">
        <section className="max-w-6xl mx-auto px-4 py-6 md:py-10">
          {/* Page title styled like Home (dark text + subtle accent) */}
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1B1B1D]">
              Menu Kami
            </h1>
            <div
              className="mt-2 h-1 w-16 bg-[#d3ae33] rounded-full"
              aria-hidden="true"
            />
          </header>

          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-3 md:p-4">
            <div className="grid grid-cols-1 gap-4">
              {images.map((src, idx) => (
                <figure key={src} className="w-full">
                  <img
                    src={src}
                    alt={`Halaman Menu ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto rounded-md border border-gray-100"
                  />
                  <figcaption className="sr-only">Halaman {idx + 1}</figcaption>
                </figure>
              ))}
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
