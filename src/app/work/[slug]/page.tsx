import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Gumelar Adi`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/work"
        className="text-sm text-gray-600 hover:text-black transition-colors mb-12 inline-block"
      >
        ← Back to Work
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm px-3 py-1 rounded-full bg-black text-white">
              {project.category}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-600">
                  {tag}
                  {project.tags.indexOf(tag) < project.tags.length - 1
                    ? " ·"
                    : ""}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.description}
          </p>

          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 leading-relaxed">{project.content}</p>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-8 border-t border-gray-200">
          <Link
            href="/work"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
