"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type AllImagesGridProps = {
  images: string[];
};

export default function AllImagesGrid({ images }: AllImagesGridProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {images.map((src, idx) => (
          <button
            key={src + idx}
            onClick={() => setOpen(idx)}
            className="relative overflow-hidden rounded-lg bg-gray-100 focus:outline-none [content-visibility:auto] [contain-intrinsic-size:300px_400px]"
            aria-label={`Open image ${idx + 1}`}
          >
            {/* Aspect ratio container: 3:4 (width:height = 3:4) */}
            <div className="w-full relative" style={{ paddingTop: "133.333%" }}>
              <Image
                src={src}
                alt={`gallery-${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="absolute inset-0 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                loading={idx < 4 ? "eager" : "lazy"}
                priority={idx < 2}
              />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={() => setOpen(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/70 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="max-w-[90vw] max-h-[90vh] p-2">
              <img
                src={images[open || 0]}
                alt={`opened-${(open || 0) + 1}`}
                className="w-full h-auto object-contain rounded-xl shadow-lg"
                loading="eager"
                decoding="async"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-white/20"
              onClick={() => setOpen(null)}
              aria-label="Close image"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 text-white hover:bg-white/20"
              onClick={() =>
                setOpen((v) =>
                  v === null ? null : (v - 1 + images.length) % images.length
                )
              }
              aria-label="Previous image"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 text-white hover:bg-white/20"
              onClick={() =>
                setOpen((v) => (v === null ? null : (v + 1) % images.length))
              }
              aria-label="Next image"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
