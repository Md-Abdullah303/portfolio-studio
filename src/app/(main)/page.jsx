import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold">My all Projects</h1>
      </div>

      <div className="grid grid-cols-3 gap-7">
        {/* akhane map kore amar all project dekhabo apadoto akta prject box deya disi */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
