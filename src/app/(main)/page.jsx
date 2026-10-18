import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/core/oneProject";
import Image from "next/image";



export default async function Home() {

  const projects = await allProjects()
  const projectList = projects?.projects || [];

  const sortedProjects = [...projectList].sort((a, b) => {
    const pA = Number(a?.priority) > 0 ? Number(a.priority) : 999999;
    const pB = Number(b?.priority) > 0 ? Number(b.priority) : 999999;
    if (pA !== pB) {
      return pA - pB;
    }
    return new Date(b?.updatedAt || 0) - new Date(a?.updatedAt || 0);
  });

  return (
    <div className="mt-10 space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-center signature-font">My all Projects</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto px-4">
        {
          sortedProjects.map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })
        }
      </div>
    </div>
  );
}
