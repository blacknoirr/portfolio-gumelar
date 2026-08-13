import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const recentProjects = projects.slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 md:py-16">
      <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 md:gap-8 mb-8">
        {/* Text */}
        <div className="space-y-2 md:space-y-4 md:self-start">
          <h1 className="text-4xl text-[#FF450D] md:text-6xl font-semibold leading-tight tracking-tight">
            Well Hello,
          </h1>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            I'm Gumelar Adi Setia
          </h1>
          <p className="text-lg xl:text-xl text-gray-600 max-w-2xl leading-relaxed">
            A product designer passionate about creating thoughtful,
            user-centered experiences. Specialized in UI/UX design, product
            strategy, and visual storytelling.
          </p>
        </div>
        {/* Photo */}
        <div className="self-center h-56 md:self-stretch flex-shrink-0">
          <Image
            src="/profile.webp"
            alt="Foto Gumelar Adi Setia"
            width={300}
            height={300}
            sizes="100vw"
            className="h-full w-auto  "
          />
        </div>
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
          className="flex justify-center selection:inline-block px-6 py-2 md:py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors font-medium text-md"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}
