import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon minimal 10 digit"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  time: z.string().min(1, "Waktu wajib diisi"),
  guests: z.number().int().min(1, "Minimal 1 tamu").max(20, "Maksimal 20 tamu"),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = reservationSchema.parse(body);

    console.log("Reservasi baru:", validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Reservasi berhasil dibuat",
        data: validatedData,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validasi gagal",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Error creating reservation:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server",
      },
      { status: 500 }
    );
  }
}