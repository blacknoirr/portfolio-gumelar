import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`}>
      <div className="group cursor-pointer">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 mb-4">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-black group-hover:text-gray-700 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs px-3 py-1 rounded-full bg-black text-white">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
