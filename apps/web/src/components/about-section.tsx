import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Clock, Phone } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 text-primary">
          Tentang Kami
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Saoraja Cafe & Resto hadir dengan konsep retro yang membawa Anda kembali ke masa
          lalu. Dengan dekorasi vintage dan menu klasik, kami menawarkan pengalaman
          kuliner yang tak terlupakan.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-xl mb-2">Menu Klasik</h3>
              <p className="text-muted-foreground">
                Menu tradisional dengan resep asli yang disajikan dengan sentuhan modern
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-xl mb-2">Buka Setiap Hari</h3>
              <p className="text-muted-foreground">
                10:00 - 22:00 WITA
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-xl mb-2">Reservasi</h3>
              <p className="text-muted-foreground">
                Hubungi kami untuk reservasi meja Anda
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
