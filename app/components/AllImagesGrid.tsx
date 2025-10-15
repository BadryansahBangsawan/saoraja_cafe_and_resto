"use client";
import React, { useState } from "react";

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
            className="relative overflow-hidden rounded-lg bg-gray-100 focus:outline-none"
            aria-label={`Open image ${idx + 1}`}
          >
            {/* Aspect ratio container: 3:4 (width:height = 3:4) */}
            <div className="w-full" style={{ paddingTop: "133.333%" }}>
              <img
                src={src}
                alt={`gallery-${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                loading="lazy"
                style={{ position: "absolute", top: 0, left: 0 }}
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
