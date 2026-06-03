"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "@/declarations/icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers to show with ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // e.g. 1 ... 4 5 6 ... 10

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-3 pt-12 border-t border-border/30">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:border-primary hover:bg-primary/5 active:scale-95"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, idx) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-12 h-12 flex items-center justify-center text-muted-foreground font-medium"
              >
                ...
              </span>
            );
          }

          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={`w-12 h-12 rounded-full font-bold text-sm transition-all duration-300 ${
                isCurrent
                  ? "bg-primary border border-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "border border-border hover:border-primary hover:bg-primary/5 active:scale-95 text-foreground"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:border-primary hover:bg-primary/5 active:scale-95"
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>
  );
}
