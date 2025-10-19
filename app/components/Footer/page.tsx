import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-[#1B1B1D]">Saoraja</h3>
          <p className="text-sm text-gray-600 mt-1">
            Cafe & Resto — Hangout spot with a warm, comfy vibe.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <Button asChild>
            <Link href="/Landing/Menu">
              Menu
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/Landing/temukan">
              Find Us
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/Landing/tentang_kami">
              About
            </Link>
          </Button>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Saoraja Cafe
        </div>
      </div>
    </footer>
  );
}
