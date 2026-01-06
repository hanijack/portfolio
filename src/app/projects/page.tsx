
import Link from "next/link"
import { getAllProjectsFromDb } from "@/services/projectService";
import { Metadata } from "next";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Projects',
}


async function Projects() {
   const projects = await getAllProjectsFromDb();

  return (
    <>

      <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 ">Projects</h2>
<p className="mb-12 text-gray-700 dark:text-gray-300">
  Here are some of the things I&apos;ve built—each one tackling a unique challenge, solving a real problem, or pushing me to explore something new in design, data, or deployment.
</p>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project:any) => (
    <div
      key={project._id}
      className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] p-6 flex flex-col justify-between"
    >
      <Link href={`/projects/${project._id}`}>
  <h3 className="text-xl font-semibold text-indigo-600 hover:underline py-3">
    {project.name}
  </h3>
</Link>
      <div className="flex flex-wrap gap-2 text-sm mb-4">
        {project.techn.map((tech:string) => (
          <span key={tech} className="px-2 py-1 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.links[0]} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Demo</a>
        <a href={project.links[1]} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Code</a>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default Projects