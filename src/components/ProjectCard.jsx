import Image from "next/image";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";

const ProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <div className="group relative flex flex-col w-full  rounded-[4px] overflow-hidden bg-white  border border-neutral-200/80  transition-all duration-300 hover:-translate-y-1">
      {/* Image Preview Container */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={project?.imgLink}
          alt={project?.title}
          fill

          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-5 space-y-4">
        <div className="space-y-1.5">
          <h2 className="text-lg font-semibold tracking-tight  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {project?.title}
          </h2>
          <p className="text-sm text-neutral-500  line-clamp-2 leading-relaxed">
            {project?.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 mt-auto flex items-center gap-2.5">
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900  shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <CiLocationArrow1 className="text-lg" />
            <span>Live Link</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-800 dark:hover:bg-neutral-700/80 border border-neutral-200/70 dark:border-neutral-700/70 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <MdModeEdit className="text-base text-neutral-500 dark:text-neutral-400" />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

