# 🖼️ Image Guide — Adding & Converting Images

This document explains how to add new images to the portfolio and convert them to `.webp` format for optimal performance.

---

## 📁 Folder Structure

All images live inside the `/public` directory:

```
public/
├── profile.webp                      # Hero profile photo (home page)
├── logo.webp                         # Navbar logo
├── logo.png                          # Original logo (kept for favicon)
│
├── project-joythreaters/
│   ├── cover1.webp                   # Cover image shown on project card
│   ├── image1.webp                   # Gallery images
│   └── ...
│
├── project-mezita/
│   ├── cover1.webp
│   └── ...
│
├── project-terseeart/
│   ├── cover1.webp
│   └── ...
│
└── project-workpro/
    └── cover-landscape.webp
```

> **Rule:** Always place images inside a project-specific subfolder (e.g. `project-myproject/`). Only shared assets like `profile` and `logo` go in the root `/public`.

---

## 🚀 Step-by-Step: Adding Images to a New or Existing Project

### Step 1 — Place Your Raw Images

Copy your original `.jpg`, `.jpeg`, or `.png` images into the correct folder inside `/public`:

```
public/
└── project-myproject/
    ├── cover1.jpg          ← your cover image
    ├── image1.jpg          ← gallery images
    └── image2.png
```

**Naming conventions:**
| File name pattern | Purpose |
|---|---|
| `cover1` | Cover image shown on project cards and detail page hero |
| `image1`, `image2`, ... | Gallery images (for photography projects) |
| `landscape1`, `landscape2`, ... | Landscape-oriented gallery images (for design projects) |
| `portrait1`, `portrait2`, ... | Portrait-oriented gallery images (for design projects) |

> The gallery layout system auto-detects orientation from the filename — files with `landscape` or `portrait` in the name are handled automatically.

---

### Step 2 — Register the Images in the Conversion Script

Open `scripts/convert-to-webp.js` and add your new image paths to the `IMAGES_TO_CONVERT` array:

```js
const IMAGES_TO_CONVERT = [
  // ...existing images...

  // project-myproject   ← add a comment for your project
  "project-myproject/cover1.jpg",
  "project-myproject/image1.jpg",
  "project-myproject/image2.png",
];
```

> **Important:** Use the path **relative to the `/public` folder**, not the full path.

---

### Step 3 — Run the Conversion Script

Make sure you are in the project root directory, then run:

```bash
node scripts/convert-to-webp.js
```

The script will:
1. ✅ Convert each image to `.webp` at **quality 85** (high quality, great compression)
2. 🗑️ Delete the original `.jpg`/`.png` file automatically after a successful conversion
3. Print a size comparison report, e.g.:
   ```
   ✅ project-myproject/cover1.jpg → project-myproject/cover1.webp (1200KB → 140KB, 88% smaller)
   🗑️  Deleted: project-myproject/cover1.jpg
   ```

> **Note:** The script will skip a file with a warning (`⚠️ Skipping`) if it doesn't exist, so no harm done if you make a typo.

---

### Step 4 — Register the Project in `projects.ts`

Open `src/data/projects.ts` and add a new entry to the `projects` array.

**Use `.webp` extensions** for all image paths:

```ts
{
  id: "5",
  slug: "my-project-slug",
  title: "My Project Title",
  category: "Product Design", // or "Photography"
  coverImage: "/project-myproject/cover1.webp",   // ← .webp
  description: "Short description shown on cards and the detail page.",
  tags: ["UI/UX", "Figma", "Website"],
  content: "Longer description shown on the project detail page.",
  gallery: [
    // See gallery format examples below
  ],
},
```

---

## 🗂️ Gallery Format Reference

The gallery supports two formats depending on your project type.

### Format A — Explicit Row Grouping (for Design Projects)

Group images into rows using nested arrays. Images in the same array appear side-by-side:

```ts
gallery: [
  // Row 1: two images side by side
  [
    "/project-myproject/landscape1.webp",
    "/project-myproject/landscape2.webp",
  ],
  // Row 2: single full-width image
  ["/project-myproject/landscape3.webp"],
],
```

### Format B — Auto-Packed with Orientation (for Photography Projects)

Provide flat objects with `url` and `orientation`. The layout engine will automatically pack them into justified rows:

```ts
gallery: [
  { url: "/project-myproject/image1.webp", orientation: "landscape" },
  { url: "/project-myproject/image2.webp", orientation: "portrait" },
  { url: "/project-myproject/image3.webp", orientation: "landscape" },
  { url: "/project-myproject/image4.webp", orientation: "portrait" },
],
```

> **Tip:** You can also mix both formats in the same gallery array.

---

## ⚡ Quick Reference Checklist

When adding new images, go through this checklist:

- [ ] Place original image files in `/public/project-yourproject/`
- [ ] Add the image paths to `IMAGES_TO_CONVERT` in `scripts/convert-to-webp.js`
- [ ] Run `node scripts/convert-to-webp.js`
- [ ] Confirm `.webp` files were created and originals were deleted
- [ ] Add the project entry to `src/data/projects.ts` using `.webp` paths
- [ ] Start the dev server (`npm run dev`) and verify images render correctly

---

## 🔧 Conversion Script Options

The script is located at `scripts/convert-to-webp.js`.

| Setting | Default | Description |
|---|---|---|
| Quality | `85` | WebP quality (1–100). 85 is the sweet spot for visual quality vs file size. Increase to 90–95 for near-lossless. |
| Delete originals | `true` | Originals are deleted after a successful conversion. |
| `logo.png` exception | Kept | `logo.png` is intentionally kept as the source for the favicon (`src/app/icon.png`). |

To change the quality, edit this line in the script:

```js
await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath);
//                                    ^^^ change this value
```

---

## ❓ Troubleshooting

| Problem | Solution |
|---|---|
| `⚠️ Skipping (not found)` | The image path in `IMAGES_TO_CONVERT` doesn't match the actual filename. Double-check spelling and extension. |
| `❌ Failed: ...` | The file may be corrupted or in an unsupported format. Try re-exporting the image. |
| Image shows broken in browser | Make sure the path in `projects.ts` uses `.webp` and matches the actual filename exactly (case-sensitive). |
| `sharp` not found error | Run `npm install sharp --save-dev` in the project root. |
