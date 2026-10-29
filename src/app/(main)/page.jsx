import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/core/oneProject";
import Link from "next/link";
import { GoInbox, GoPlus } from "react-icons/go";

export default async function Home() {
  const projectsData = await allProjects();
  const projectList = projectsData?.projects || [];
  const projectCount = projectList.length;

  return (
    <div className="mt-4 sm:mt-8 space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-2.5 sm:space-y-3 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{projectCount} {projectCount === 1 ? 'Project' : 'Projects'} in Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white signature-font">
          My all Projects
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
          Explore and manage curated portfolio projects, live demos, and case studies.
        </p>
      </div>

      {/* Projects Grid or Responsive Empty State */}
      {projectCount === 0 ? (
        <div className="max-w-md mx-auto my-12 p-8 sm:p-10 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-neutral-800/80 text-neutral-400 flex items-center justify-center">
            <GoInbox className="text-2xl" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-white">No projects found</h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              You have not added any projects to Portfolio Studio yet. Click below to add your first work.
            </p>
          </div>
          <Link
            href="/add-project"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 transition-all duration-150 active:scale-[0.98]"
          >
            <GoPlus className="text-base" />
            <span>Add New Project</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto px-4">
          {projectList.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      )}
    </div>
  );
}
