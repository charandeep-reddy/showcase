import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-500">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-zinc-900 transition-colors group-hover:text-zinc-600">
          Visit Project
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            ↗
          </span>
        </span>
      </div>
    </a>
  );
}
