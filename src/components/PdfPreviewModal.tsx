
import React, { useState, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const PdfPreviewModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(700);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = () => {
    setLoading(false);
    setError(true);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goToPrevPage();
      if (event.key === "ArrowRight") goToNextPage();
    },
    [onClose, numPages]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(Math.min(window.innerWidth - 48, 850));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[92vh] max-h-[900px] bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-[#111827] shrink-0">
          <div>
            <h2 className="text-white font-semibold text-lg">
              Resume Preview
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Ashish Vishwakarma - CV
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close PDF preview"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-red-500 transition-colors"
          >
            &times;
          </button>
        </div>

        {/* PDF Preview Area */}
        <div className="flex-1 min-h-0 overflow-auto flex justify-center p-3 sm:p-5 bg-[#080b16]">
          {loading && (
            <div className="text-gray-300 flex items-center justify-center">
              Loading resume...
            </div>
          )}

          {error && (
            <div className="text-red-400 flex items-center justify-center">
              Unable to load PDF. Please check the PDF file path.
            </div>
          )}

          <Document
            file="/pdf/Ashish_cv.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className="flex justify-center"
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-xl"
            />
          </Document>
        </div>

        {/* Footer / Pagination */}
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-t border-white/10 bg-[#111827]">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <span className="text-gray-300 text-sm whitespace-nowrap">
            Page {pageNumber} of {numPages || "..."}
          </span>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages || numPages === 0}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfPreviewModal;
