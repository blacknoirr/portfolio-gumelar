export type Category = "Product Design" | "Photography";
export type ImageOrientation = "landscape" | "portrait";

export interface GalleryImage {
  url: string;
  orientation?: ImageOrientation;
  aspectRatio?: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  coverImage: string;
  description: string;
  tags: string[];
  content: string;
  gallery?: (string | GalleryImage | (string | GalleryImage)[])[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "terseeart-communal-space",
    title: "Terseeart Communal Space",
    category: "Product Design",
    coverImage: "/project-terseeart/cover1.jpg",
    description:
      "A digital platform designed to connect artists, creative communities, and art enthusiasts through showcasing events, artwork, and community-driven engagement.",
    tags: ["UI/UX", "Website", "Responsive", "Figma"],
    content:
      "Terseeart Communal Space is a community-centered platform that bridges artists and art enthusiasts in one digital ecosystem. The project focuses on fostering collaboration, showcasing creative works, and simplifying event participation through an intuitive user experience. The design process involved user research, information architecture planning, wireframing, prototyping, and usability testing to create an engaging and accessible platform for the creative community.",
    gallery: [
      [
        "/project-terseeart/landscape1.png",
        "/project-terseeart/landscape2.png",
      ],
      ["/project-terseeart/landscape3.png"],
      ["/project-terseeart/landscape4.png"],
    ],
  },
  {
    id: "2",
    slug: "workpro-hrms",
    title: "Workpro Human Resource Management System",
    category: "Product Design",
    coverImage: "/project-workpro/cover-landscape.png",
    description:
      "WorkPro is a web-based workforce management platform developed at Gunung Amal Solution International that helps companies streamline employee management, operational workflows, and internal business processes in a more efficient and organized way. The platform is designed to improve productivity by centralizing workforce-related activities into a single digital ecosystem.",
    tags: ["UI/UX", "Website", "Responsive", "Figma"],
    content: "",
    gallery: [
      [
        "/project-terseeart/landscape1.png",
        "/project-terseeart/landscape2.png",
      ],
      [
        "/project-terseeart/landscape3.png",
        "/project-terseeart/landscape4.png",
      ],
    ],
  },
  {
    id: "3",
    slug: "joy-threaters",
    title: "Joy Threaters",
    category: "Photography",
    coverImage: "/project-joythreaters/cover1.jpg",
    description:
      "Produced visual documentation for live music gigs, focusing on authentic storytelling, artist presence, crowd engagement, and overall event atmosphere. Experienced in working within fast-paced environments while creating visually impactful imagery for promotional and archival purposes.",
    tags: ["Photography", "Events", "Gigs", "Concerts"],
    content: "",
    gallery: [
      {
        url: "/project-joythreaters/image1.jpg",
        orientation: "landscape",
      },
      {
        url: "/project-joythreaters/image2.jpg",
        orientation: "landscape",
      },
      {
        url: "/project-joythreaters/image3.jpg",
        orientation: "landscape",
      },
      {
        url: "/project-joythreaters/image7.jpg",
        orientation: "portrait",
      },
      {
        url: "/project-joythreaters/image6.jpg",
        orientation: "portrait",
      },
      {
        url: "/project-joythreaters/image4.jpg",
        orientation: "landscape",
      },
      {
        url: "/project-joythreaters/image5.jpg",
        orientation: "portrait",
      },
    ],
  },
  {
    id: "4",
    slug: "mezita-brand",
    title: "Mezita Catalogue",
    category: "Photography",
    coverImage: "/project-mezita/cover1.jpg",
    description:
      "Mezita is a fashion brand focused on delivering stylish and contemporary apparel with an emphasis on visual identity and product presentation. In this project, I worked on creating a catalogue photography series aimed at showcasing the brand's products through strong visual storytelling and clean commercial aesthetics.",
    tags: ["Product Photography", "Fashion", "Commercial", "Catalogue"],
    content: "",
    gallery: [
      [
        "/project-mezita/landscape1.jpg",
        "/project-mezita/portrait1.jpg",
        "/project-mezita/portrait2.jpg",
      ],
      [
        "/project-mezita/portrait3.jpg",
        "/project-mezita/portrait4.jpg",
        "/project-mezita/landscape2.jpg",
      ],
    ],
  },
];

export const categories: Category[] = ["Product Design", "Photography"];
