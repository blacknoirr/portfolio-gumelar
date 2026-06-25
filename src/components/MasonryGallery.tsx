"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { normalizeGalleryItems, packGalleryJustified } from "@/lib/gallery";
import type { GalleryItem } from "@/lib/gallery";

interface MasonryGalleryProps {
  items: (GalleryItem | GalleryItem[])[];
  projectTitle: string;
  className?: string;
}

export function MasonryGallery({
  items,
  projectTitle,
  className = "",
}: MasonryGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    if (!containerRef.current) return;

    // Measure initial width on mount
    setContainerWidth(containerRef.current.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const normalized = normalizeGalleryItems(items);

  // Determine active breakpoint based on actual container width
  let breakpoint: "mobile" | "sm" | "md" | "lg" = "md";
  if (containerWidth < 640) {
    breakpoint = "mobile";
  } else if (containerWidth < 768) {
    breakpoint = "sm";
  }

  const rows = packGalleryJustified(normalized, breakpoint);

  const showJustified = isMounted && containerWidth > 0;

  if (!showJustified) {
    // SSR & Initial Mount Fallback: Standard CSS Grid
    // Prevents layout shifts and provides immediate SEO crawler compatibility
    const flatNormalized = normalized.flat();
    return (
      <div
        ref={containerRef}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}
      >
        {flatNormalized.map((image, index) => {
          const aspectClass =
            image.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]";
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg bg-gray-100 w-full ${aspectClass}`}
            >
              <Image
                src={image.url}
                alt={`${projectTitle} gallery image fallback ${index + 1}`}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`flex flex-col gap-6 ${className}`}>
      {rows.map((row, rowIndex) => {
        if (breakpoint === "mobile") {
          // Stack 1-column on mobile with exact native aspect ratio
          const image = row[0];
          return (
            <div
              key={rowIndex}
              className="relative overflow-hidden rounded-lg bg-gray-100 w-full"
              style={{
                aspectRatio: image.aspectRatio,
                width: "100%",
              }}
            >
              <Image
                src={image.url}
                alt={`${projectTitle} gallery image ${rowIndex + 1}`}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        }

        // Calculate dynamic height for this row to fill width exactly
        const sumAR = row.reduce((sum, img) => sum + img.aspectRatio, 0);
        const gapWidth = (row.length - 1) * 24; // gap-6 (1.5rem = 24px)
        const rowHeight = (containerWidth - gapWidth) / sumAR;

        return (
          <div
            key={rowIndex}
            className="flex flex-row gap-6 w-full"
            style={{ height: `${rowHeight}px` }}
          >
            {row.map((image, itemIndex) => {
              const itemWidth = rowHeight * image.aspectRatio;

              return (
                <div
                  key={itemIndex}
                  className="relative overflow-hidden rounded-lg bg-gray-100"
                  style={{
                    width: `${itemWidth}px`,
                    height: "100%",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={`${projectTitle} gallery image ${rowIndex + 1}-${itemIndex + 1}`}
                    fill
                    unoptimized
                    sizes={`${Math.round(itemWidth)}px`}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

