import Link from "next/link";

type Props = {
  backgroundUrl?: string;
};

export default function HeroSection({
  backgroundUrl = "/Home/Kopi.jpg",
}: Props) {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-[calc(100vh-76px)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 px-4 py-12 md:py-16 lg:py-24 max-w-6xl mx-auto flex items-center justify-center h-full">
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-center justify-items-center text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Saoraja
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
              Cafe & Resto
            </span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-white/90">
            Tempat makan dan nongkrong dengan suasana hangat, nyaman, dan
            instagramable, cocok untuk keluarga, teman, maupun acara komunitas.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            <Link
              href="#menu"
              className="px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800"
            >
              Lihat Menu
            </Link>
            <Link
              href="#temukan"
              className="px-5 py-3 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100"
            >
              Temukan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
