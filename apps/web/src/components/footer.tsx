import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Saoraja Cafe & Resto</h3>
            <p className="text-primary-foreground/80">
              Pengalaman kuliner klasik dengan nuansa retro yang hangat
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Hubungi Kami</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +62 812-3456-7890
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Jl. Retro No. 123, Makassar
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Senin - Minggu
              </p>
              <p>10:00 - 22:00 WITA</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          © 2025 Saoraja Cafe & Resto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
