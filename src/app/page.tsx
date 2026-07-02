import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-24 sm:pt-32">
        <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-600">
          Our Work
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Selected Projects
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-500">
          A collection of websites and web applications we&apos;ve designed and
          developed for businesses across various industries.
        </p>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
