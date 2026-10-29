import Image from "next/image";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  // console.log(project);
  return (
    <div className="group relative flex flex-col w-full rounded-xl overflow-hidden bg-white border border-neutral-200/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      {/* Image Preview Container */}
      <div className="relative w-full aspect-16/10 sm:aspect-video overflow-hidden bg-neutral-100">
        <Image
          src={project?.imgLink || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"}
          alt={project?.title || "Project Image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Priority Badge */}
        {project?.priority !== undefined && project?.priority !== null && project?.priority !== "" && Number(project?.priority) > 0 && (
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-900/90 backdrop-blur-md text-white border border-white/20 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-[11px]">Priority:</span>
            <span className="text-amber-300 font-bold">#{project.priority}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 space-y-3 sm:space-y-4">
        <div className="space-y-1 sm:space-y-1.5">
          {project?.category && (
            <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md w-fit">
              {project.category}
            </span>
          )}
          <h2 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-1">
            {project?.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2 leading-relaxed">
            {project?.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 mt-auto flex items-center gap-1.5 sm:gap-2">
          {/* Primary Action: Live Link */}
          {project?.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 min-h-[36px] rounded-lg text-[11px] sm:text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-150 active:scale-[0.97] cursor-pointer shadow-xs truncate"
            >
              <CiLocationArrow1 className="text-sm sm:text-base shrink-0" />
              <span className="truncate">Live Demo</span>
            </a>
          ) : (
            <span
              className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 min-h-[36px] rounded-lg text-[11px] sm:text-xs font-medium text-neutral-400 bg-neutral-100 cursor-not-allowed truncate"
            >
              <CiLocationArrow1 className="text-sm sm:text-base shrink-0" />
              <span className="truncate">No Link</span>
            </span>
          )}

          {/* Secondary Action: Show Details */}
          <Link
            href={`/project-details/${project?._id}`}
            className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 min-h-[36px] rounded-lg text-[11px] sm:text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-all duration-150 active:scale-[0.97] cursor-pointer truncate"
          >
            <BiSolidCommentDetail className="text-sm sm:text-base text-neutral-500 shrink-0" />
            <span className="truncate">Details</span>
          </Link>

          {/* Tertiary Action: Edit */}
          <Link
            href={`/edit-project/${project?._id}`}
            className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-3 py-2 min-h-[36px] rounded-lg text-[11px] sm:text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-200 transition-all duration-150 active:scale-[0.97] cursor-pointer shrink-0"
            title="Edit Project"
          >
            <MdModeEdit className="text-sm sm:text-base text-neutral-500 shrink-0" />
            <span className="hidden xs:inline">Edit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

