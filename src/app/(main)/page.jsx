import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/core/oneProject";
import Image from "next/image";



export default async function Home() {

  const projects = await allProjects()

  // console.log(projects.projects);
  return (
    <div className="mt-10 space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-center signature-font">My all Projects</h1>
      </div>

      <div className="grid grid-cols-3 gap-7 max-w-7xl mx-auto">
        {/* akhane map kore amar all project dekhabo apadoto akta prject box deya disi */}
        {
          projects?.projects?.reverse().map((project) => {
            return <ProjectCard key={project._id} project={project} />
          })
        }
      </div>
    </div>
  );
}
