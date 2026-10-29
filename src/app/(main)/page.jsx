import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/core/oneProject";
import Image from "next/image";



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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto px-4">
        {projectList.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>
    </div>
  );
}
