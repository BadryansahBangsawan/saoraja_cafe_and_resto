"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ReservationSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      guests: parseInt(formData.get("guests") as string),
      notes: (formData.get("notes") as string) || undefined,
    };

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message || "Reservasi berhasil!",
        });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Terjadi kesalahan",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Terjadi kesalahan jaringan",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-4xl md:text-5xl">Reservasi Meja</CardTitle>
            <CardDescription>Silakan isi formulir di bawah ini untuk reservasi</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Tanggal</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Waktu</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Jumlah Tamu</Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  placeholder="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Catatan (Opsional)</Label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Permintaan khusus..."
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                {isSubmitting ? "Mengirim..." : "Kirim Reservasi"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
