import Navbar from "../../components/Navbar/Page";
import fs from "fs";
import path from "path";
import AllImagesGrid from "../../components/AllImagesGrid";
// Build a list of images from public/gallery
const galleryDir = path.join(process.cwd(), "public", "gallery");
let files: string[] = [];
try {
  files = fs
    .readdirSync(galleryDir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
} catch (e) {
  files = [];
}

const items = files.map((f, i) => ({
  id: String(i + 1),
  img: `/gallery/${f}`,
  url: `/gallery/${f}`,
  height: 500,
}));

const images = items.map((it) => it.img);

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-[#1B1B1D]">
          Gallery Saoraja
        </h1>
        <section className="py-6">
          <AllImagesGrid images={images} />
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;
