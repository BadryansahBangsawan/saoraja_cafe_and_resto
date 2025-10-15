import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar/Page";
interface ButtonProps {
  primary?: boolean;
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  children,
  href,
  ariaLabel,
}) => {
  const className = `px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
    primary
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black border border-gray-300 hover:bg-gray-100"
  }`;

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

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

// Komponen untuk text typing effect
interface TypedTextProps {
  text: string;
  speed?: number; // ms per character
}

const TypedText: React.FC<TypedTextProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset when text changes
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="inline-block" aria-live="polite">
      {displayText}
      <span className="animate-pulse" aria-hidden={true}>
        |
      </span>
    </span>
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

      {/* Hero Section */}
      <section
        id="main"
        role="main"
        aria-label="Hero"
        className="px-4 py-8 md:py-16 lg:py-24 max-w-6xl mx-auto flex items-center justify-center min-h-[calc(100vh-76px)]"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <AnimatedText delay={300}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 text-[#1B1B1D]">
                <span className="block mb-2">Saoraja</span>
                <TypedText text="Cafe & Resto" />
              </h1>
            </AnimatedText>

            <AnimatedText delay={600}>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-[#1B1B1D]">
                Tempat makan dan nongkrong dengan suasana hangat, nyaman, dan
                instagramable, cocok untuk keluarga, teman, maupun acara
                komunitas.
              </p>
            </AnimatedText>

            <AnimatedText delay={1200}>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                <Button primary href="/Landing/Menu" ariaLabel="Open menu list">
                  List Menu
                </Button>
              </div>
            </AnimatedText>
          </div>

          <AnimatedText delay={600}>
            <div className="relative mt-6 md:mt-0">
              {/* Decorative coffee cup removed */}
            </div>
          </AnimatedText>
        </div>
      </section>
    </div>
  );
};

export default SaorajaLandingPage;
