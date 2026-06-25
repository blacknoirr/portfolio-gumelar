# Portfolio Gallery System: How to Add Photos

This guide explains how to add new landscape and portrait photographs to your project detail galleries. 

Because this website does not use a database, all your project configurations are stored statically in **[`src/data/projects.ts`](file:///Users/gmlradii/Documents/Project/Portfolio%20%20Project/portfolio-gumelar/src/data/projects.ts)**.

---

## Step-by-Step Guide to Adding a Photo

### Step 1: Upload Your Image File
1. Save your image files in the `public/` directory. 
2. It is best to organize them inside subfolders matching your projects. For example:
   - `public/project-terseeart/my-new-photo.jpg`
   - `public/project-joythreaters/my-landscape-shot.jpg`

### Step 2: Configure the Photo in code
Open the file **[`src/data/projects.ts`](file:///Users/gmlradii/Documents/Project/Portfolio%20%20Project/portfolio-gumelar/src/data/projects.ts)**. Locate the project you want to modify, and add your image path to the `gallery` array.

You have three options for how to write the entry:

---

## 📷 Option A: Auto-Detect from Filename (easiest)
If you include the keyword `portrait` or `landscape` in your image's filename, the layout engine will automatically detect and layout the image correctly. You can just input a simple string:

```typescript
gallery: [
  // This will auto-layout as a LANDSCAPE image (aspect ratio 1.5)
  "/project-terseeart/my-landscape-photo.jpg",

  // This will auto-layout as a PORTRAIT image (aspect ratio 0.67)
  "/project-terseeart/project-portrait-mockup.png",
]
```

---

## 🧭 Option B: Explicit Orientation Object
If your filename doesn't contain `portrait` or `landscape`, you can specify the orientation explicitly using an object structure:

```typescript
gallery: [
  {
    url: "/project-terseeart/my-image.jpg",
    orientation: "portrait", // can be "portrait" or "landscape"
  }
]
```

---

## 📐 Option C: Custom Aspect Ratio (for pixel-perfection)
If your photo has a unique aspect ratio (e.g. panoramic or square) and you want to prevent cropping altogether, you can provide a custom `aspectRatio` property (`width / height`):

```typescript
gallery: [
  {
    url: "/project-terseeart/square-diagram.jpg",
    orientation: "landscape",
    aspectRatio: 1.0, // Square (1:1 ratio)
  },
  {
    url: "/project-terseeart/panoramic-banner.jpg",
    orientation: "landscape",
    aspectRatio: 2.33, // Ultra-wide panoramic (21:9 ratio)
  }
]
```

---

## 🗂️ Explicit Manual Rows (Define photo count & order per row)

By default, the layout packs photos automatically. If you want to explicitly control **which photos are displayed together in a specific row** and their exact order, you can group them into **nested arrays `[...]`** inside the `gallery` array:

```typescript
gallery: [
  // Row 1: Explicitly displays exactly 1 landscape image
  ["/project-terseeart/my-main-landscape.jpg"],

  // Row 2: Explicitly displays 2 portrait images side-by-side
  [
    "/project-terseeart/portrait-2.jpg",
    "/project-terseeart/portrait-3.jpg",
  ],

  // Row 3: Explicitly displays 1 landscape and 1 portrait side-by-side
  [
    "/project-terseeart/landscape-4.jpg",
    "/project-terseeart/portrait-1.jpg"
  ]
]
```

When you wrap items in nested brackets `[...]`, the layout engine preserves this row grouping exactly and calculates the matching width and height so they stretch perfectly together side-by-side!

---

## Layout Rules Reference

Our justified editorial algorithm uses the following layout principles to keep your site premium and polished:
- **Tablet/Desktop (>= 640px)**: Photos in the same row share the exact same height. Their widths are calculated automatically so they stretch dynamically to fill 100% of the row container width (no trailing gaps or awkward margins on the right!).
- **Orphan Prevention**: If the last row has only 1 image, the algorithm automatically moves an image from the previous row to balance it out, or merges them. You never have to worry about a single huge image at the bottom of the page.
- **Mobile (< 640px)**: The images stack in 1 column, spanning full-width while preserving their natural aspect ratio heights (never squishing).
