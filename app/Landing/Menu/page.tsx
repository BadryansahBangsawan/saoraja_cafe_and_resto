import React from "react";

const MenuPage = () => {
  // The PDF is stored at app/pages/asset/SaorajaMenu/menu.pdf
  // For browser access we can reference it via a relative path.
  const pdfPath = "/asset/SaorajaMenu/menu.pdf";

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#722F37] text-white py-4 px-4 shadow-md">
        <h1 className="text-xl font-bold text-center">Menu Kami</h1>
      </div>

      <main className="p-4">
        <div className="w-full h-[80vh] border rounded-md overflow-hidden">
          {/* Use <object> for better PDF accessibility and fallback */}
          <object
            data={pdfPath}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Menu PDF"
          >
            <iframe src={pdfPath} className="w-full h-full" title="Menu PDF" />
            {/* Fallback content for browsers that don't support PDF rendering */}
            <p className="p-4 text-center">
              Your browser does not support PDFs. You can download the PDF
              <br />
              <a
                href={pdfPath}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Menu PDF
              </a>
            </p>
          </object>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
