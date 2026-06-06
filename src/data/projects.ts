export type Category = "Product Design" | "Photography";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  coverImage: string;
  description: string;
  tags: string[];
  content: string;
  gallery?: string[];
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
      "/project-terseeart/gallery-1.jpg",
      "/project-terseeart/gallery-2.jpg",
      "/project-terseeart/gallery-3.jpg",
      "/project-terseeart/gallery-4.jpg",
    ],
  },
  {
    id: "3",
    slug: "landscape-photography",
    title: "Landscape Photography Series",
    category: "Photography",
    coverImage:
      "https://placehold.co/1200x800/f5f5f5/999999?text=Landscape+Photography",
    description:
      "A collection of landscape photographs capturing the beauty of natural environments.",
    tags: ["Photography", "Nature", "Landscapes", "Post-processing"],
    content:
      "This photography series explores the interplay of light, color, and composition in natural landscapes. Each image was carefully composed and post-processed to enhance mood and visual impact while maintaining authenticity. The collection spans various seasons and locations, showcasing the diverse beauty of the natural world.",
    gallery: [
      "https://placehold.co/1200x700/f5f5f5/999999?text=Mountain+Landscape",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Lake+Landscape",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Forest+Landscape",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Desert+Landscape",
    ],
  },
  {
    id: "4",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Product Design",
    coverImage:
      "https://placehold.co/1200x800/f5f5f5/999999?text=E-Commerce+Platform",
    description:
      "Design and prototyping of a modern e-commerce platform with focus on conversion optimization.",
    tags: ["E-Commerce", "Conversion", "Checkout Flow", "Prototyping"],
    content:
      "Created a full product design for an e-commerce platform, focusing on streamlining the shopping experience and optimizing conversion rates. The design includes an intuitive product discovery system, simplified checkout process, and personalized recommendations. User testing showed a 60% reduction in cart abandonment and a 35% increase in average order value.",
    gallery: [
      "https://placehold.co/1200x700/f5f5f5/999999?text=Product+Discovery",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Product+Details+Page",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Shopping+Cart",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Checkout+Flow",
    ],
  },
  {
    id: "6",
    slug: "urban-photography",
    title: "Urban Photography Project",
    category: "Photography",
    coverImage:
      "https://placehold.co/1200x800/f5f5f5/999999?text=Urban+Photography",
    description:
      "Documentary-style photography exploring urban architecture and street life.",
    tags: [
      "Street Photography",
      "Architecture",
      "Documentary",
      "Black & White",
    ],
    content:
      "A documentary photography project capturing the essence of urban environments. Through careful observation and technical precision, these images reveal the hidden beauty in everyday city scenes, architectural details, and human interactions within urban landscapes. The series combines both color and black & white photography.",
    gallery: [
      "https://placehold.co/1200x700/f5f5f5/999999?text=Street+Photography+1",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Urban+Architecture",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Street+Photography+2",
      "https://placehold.co/1200x700/f5f5f5/999999?text=Urban+Details",
    ],
  },
];

export const categories: Category[] = ["Product Design", "Photography"];
