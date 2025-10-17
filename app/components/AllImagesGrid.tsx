"use client";
import React, { useState } from "react";
import Image from "next/image";

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

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white text-2xl p-2"
            onClick={() => setOpen(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div className="max-w-[90vw] max-h-[90vh] p-2">
            <img
              src={images[open]}
              alt={`opened-${open + 1}`}
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              loading="eager"
              decoding="async"
            />
          </div>

          <button
            className="absolute left-6 text-white text-3xl p-2"
            onClick={() =>
              setOpen((v) =>
                v === null ? null : (v - 1 + images.length) % images.length
              )
            }
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="absolute right-6 text-white text-3xl p-2"
            onClick={() =>
              setOpen((v) => (v === null ? null : (v + 1) % images.length))
            }
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
