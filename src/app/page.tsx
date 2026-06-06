import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const recentProjects = projects.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-6 mb-8">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          Gumelar Adi Setia
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          A product designer passionate about creating thoughtful, user-centered
          experiences. Specialized in UI/UX design, product strategy, and visual
          storytelling.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Recent Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Link
          href="/work"
          className="flex justify-center selection:inline-block px-6 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors font-medium text-sm"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}
