export type ImageOrientation = "landscape" | "portrait";

export interface GalleryImage {
  url: string;
  orientation?: ImageOrientation;
  aspectRatio?: number;
}

export type GalleryItem = string | GalleryImage;

export interface NormalizedImage {
  url: string;
  orientation: ImageOrientation;
  aspectRatio: number;
}

// Normalize a single gallery item
function normalizeSingleItem(item: GalleryItem): NormalizedImage {
  const isObject = typeof item === "object" && item !== null;
  const url = isObject ? item.url : item;
  
  // Auto-detect orientation from string/filename if not explicitly specified
  let orientation: ImageOrientation = "landscape";
  if (isObject && item.orientation) {
    orientation = item.orientation;
  } else {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes("portrait")) {
      orientation = "portrait";
    } else if (lowerUrl.includes("landscape")) {
      orientation = "landscape";
    }
  }
  
  // Determine aspect ratio: fallback to standard dimensions if not defined
  let aspectRatio = orientation === "portrait" ? 0.67 : 16 / 9;
  if (isObject && typeof item.aspectRatio === "number" && item.aspectRatio > 0) {
    aspectRatio = item.aspectRatio;
  }

  return { url, orientation, aspectRatio };
}

// Normalize gallery items to include orientation and calculated/custom aspect ratio
// Supports flat items or nested arrays for custom row grouping
export function normalizeGalleryItems(
  items: (GalleryItem | GalleryItem[])[]
): (NormalizedImage | NormalizedImage[])[] {
  return items.map((item) => {
    if (Array.isArray(item)) {
      return item.map((subItem) => normalizeSingleItem(subItem));
    }
    return normalizeSingleItem(item);
  });
}

// Internal packing function for consecutive flat items
function packFlatItems(
  items: NormalizedImage[],
  breakpoint: "sm" | "md" | "lg"
): NormalizedImage[][] {
  const rows: NormalizedImage[][] = [];
  let currentRow: NormalizedImage[] = [];
  let currentRowRatio = 0;

  const isTablet = breakpoint === "sm";
  const minItems = isTablet ? 1 : 2;
  const targetRatio = isTablet ? 2.2 : 3.5;

  for (const item of items) {
    currentRow.push(item);
    currentRowRatio += item.aspectRatio;

    const meetsMinItems = currentRow.length >= minItems;
    const meetsTargetRatio = currentRowRatio >= targetRatio;
    const isSingleLandscapeOnTablet = 
      isTablet && item.orientation === "landscape" && currentRow.length === 1;

    if (meetsMinItems && (meetsTargetRatio || isSingleLandscapeOnTablet)) {
      rows.push([...currentRow]);
      currentRow = [];
      currentRowRatio = 0;
    }
  }

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  const isOrphan = (row: NormalizedImage[]) => {
    if (!row || row.length === 0) return false;
    if (breakpoint === "sm") {
      return row.length === 1 && row[0].orientation === "portrait";
    }
    return row.length < 2;
  };

  if (rows.length > 1 && isOrphan(rows[rows.length - 1])) {
    const lastRow = rows[rows.length - 1];
    const secondLastRow = rows[rows.length - 2];

    const movedItem = secondLastRow.pop();
    if (movedItem) {
      lastRow.unshift(movedItem);
    }

    if (isOrphan(secondLastRow)) {
      rows[rows.length - 2] = [...secondLastRow, ...lastRow];
      rows.pop();
    }
  }

  return rows;
}

// Justified packing algorithm to organize images into uniform-height rows
// Supports mixed flat items and explicit pre-grouped nested arrays
export function packGalleryJustified(
  items: (NormalizedImage | NormalizedImage[])[],
  breakpoint: "mobile" | "sm" | "md" | "lg" = "md"
): NormalizedImage[][] {
  if (breakpoint === "mobile" || items.length === 0) {
    // Stacking 1-column on mobile: flatten everything
    const flat: NormalizedImage[] = [];
    for (const item of items) {
      if (Array.isArray(item)) {
        flat.push(...item);
      } else {
        flat.push(item);
      }
    }
    return flat.map((item) => [item]);
  }

  const finalRows: NormalizedImage[][] = [];
  let autoPackQueue: NormalizedImage[] = [];

  const flushQueue = () => {
    if (autoPackQueue.length > 0) {
      const packed = packFlatItems(autoPackQueue, breakpoint);
      finalRows.push(...packed);
      autoPackQueue = [];
    }
  };

  for (const item of items) {
    if (Array.isArray(item)) {
      // Flush consecutive flat items before inserting explicit custom row
      flushQueue();
      if (item.length > 0) {
        finalRows.push(item);
      }
    } else {
      autoPackQueue.push(item);
    }
  }

  flushQueue();
  return finalRows;
}

