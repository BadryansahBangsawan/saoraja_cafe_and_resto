"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Page";
import { Playfair_Display } from "next/font/google";
const displaySerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};



// Main App Component
const SaorajaLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Hero Section with background image */}
      <section
        id="main"
        role="main"
        aria-label="Hero"
        className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/Home/bg.jpg)" }}
          aria-hidden
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="relative z-10 w-full px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-12 place-items-center">
            <div className="text-center text-white">
              <AnimatedText delay={300}>
                <h1
                  className={`${displaySerif.className} text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] font-semibold leading-tight mb-3 sm:mb-4`}
                >
                  <span className="block text-5xl sm:text-6xl md:text-7xl">
                    Saoraja
                  </span>
                  <span className="block text-4xl sm:text-5xl md:text-6xl mt-1 text-[#d3ae33]">
                    Cafe & Resto
                  </span>
                </h1>
              </AnimatedText>

              <AnimatedText delay={600}>
                <p className="text-base md:text-lg mb-5 text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] max-w-2xl mx-auto">
                  Tempat makan dan nongkrong dengan suasana hangat, nyaman, dan
                  instagramable, cocok untuk keluarga, teman, maupun acara
                  komunitas.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaorajaLandingPage;
