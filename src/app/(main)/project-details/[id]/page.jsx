import { getProjectById } from '@/lib/core/oneProject';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  GoArrowLeft,
  GoCalendar,
  GoGlobe,
  GoIssueOpened,
  GoLightBulb,
  GoPencil,
  GoRepo,
  GoTag,
  GoCheckCircleFill,
} from 'react-icons/go';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';

const Page = async ({ params }) => {
  const { id } = await params;
  const projectDetails = await getProjectById(id);
  const project = projectDetails?.project;

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400">
          <GoIssueOpened className="text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Project Not Found</h2>
        <p className="text-sm text-neutral-500 mb-6">
          The project you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-150"
        >
          <GoArrowLeft className="text-base" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  // Format date nicely
  const formattedDate = project?.updatedAt
    ? new Date(project.updatedAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    : 'Recently Updated';

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-8 space-y-8 animate-in fade-in duration-300">
      {/* Top Header / Breadcrumbs & Action Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80">
        <div className="space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors group"
          >
            <GoArrowLeft className="text-base transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <GoCheckCircleFill className="text-xs text-emerald-500" />
              Live Project
            </span>
            {project?.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200/80">
                {project.category}
              </span>
            )}
          </div>
        </div>

        {/* Quick Action Toolbar */}
        <div className="flex items-center flex-wrap gap-2.5">
          {project?.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200/90 shadow-2xs hover:border-neutral-300 transition-all duration-150 active:scale-[0.98]"
            >
              <FiGithub className="text-base" />
              <span>Repository</span>
            </a>
          )}

          {project?.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-xs hover:shadow transition-all duration-150 active:scale-[0.98]"
            >
              <FiExternalLink className="text-base" />
              <span>Live Website</span>
            </a>
          )}

          <Link
            href={`/edit-project/${project?._id}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 transition-all duration-150 active:scale-[0.98]"
          >
            <MdModeEdit className="text-base text-neutral-600" />
            <span>Edit</span>
          </Link>
        </div>
      </div>

      {/* Hero Showcase Title Section */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {project?.title}
        </h1>
        {project?.category && (
          <p className="text-base sm:text-lg text-neutral-500 font-medium max-w-3xl">
            {project?.category}
          </p>
        )}
      </div>

      {/* Featured Visual Preview Container */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-900/5 border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group">
        {/* Browser Mockup Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 backdrop-blur-md border-b border-neutral-200/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block"></span>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-2 px-4 py-1 rounded-lg bg-white/80 border border-neutral-200/80 text-xs text-neutral-500 font-mono max-w-sm truncate">
            <GoGlobe className="text-xs text-neutral-400 shrink-0" />
            <span className="truncate">{project?.liveLink || 'https://portfolio-studio.preview'}</span>
          </div>

          {project?.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
            >
              <span>Visit</span>
              <FiExternalLink className="text-xs" />
            </a>
          ) : (
            <div className="w-12"></div>
          )}
        </div>

        {/* Project Image */}
        <div className="relative w-full aspect-video sm:aspect-21/9 bg-neutral-100 overflow-hidden">
          <Image
            src={project?.imgLink || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'}
            alt={project?.title || 'Project Preview'}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Project Overview, Challenges & Future Plans */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview & Description Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-2xs space-y-4">
            <h2 className="text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-900"></span>
              Project Overview
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base whitespace-pre-line">
              {project?.description || 'No description provided for this project.'}
            </p>
          </div>

          {/* Challenges Faced Section */}
          <div className="bg-linear-to-br from-amber-500/5 via-white to-transparent rounded-2xl p-6 sm:p-8 border border-amber-200/70 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <GoIssueOpened className="text-lg" />
              </div>
              <div>
                <h2 className="text-base font-bold text-neutral-900">Challenges & Problem Solving</h2>
                <p className="text-xs text-neutral-500">Key engineering hurdles conquered during development</p>
              </div>
            </div>
            <div className="pl-0 sm:pl-12">
              <p className="text-neutral-700 leading-relaxed text-sm whitespace-pre-line bg-amber-50/50 p-4 rounded-xl border border-amber-200/50">
                {project?.challenges || 'No specific challenges documented.'}
              </p>
            </div>
          </div>

          {/* Future Roadmap & Plans */}
          <div className="bg-linear-to-br from-blue-500/5 via-white to-transparent rounded-2xl p-6 sm:p-8 border border-blue-200/70 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <GoLightBulb className="text-lg" />
              </div>
              <div>
                <h2 className="text-base font-bold text-neutral-900">Future Roadmap & Improvements</h2>
                <p className="text-xs text-neutral-500">Upcoming features, scalability milestones, and iterations</p>
              </div>
            </div>
            <div className="pl-0 sm:pl-12">
              <p className="text-neutral-700 leading-relaxed text-sm whitespace-pre-line bg-blue-50/50 p-4 rounded-xl border border-blue-200/50">
                {project?.futureplans || 'No future plans recorded.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Tech Stack, Metadata & Direct Links */}
        <div className="space-y-6">
          {/* Tech Stack Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
              <GoTag className="text-neutral-600 text-lg" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Technologies Used
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project?.tags && Array.isArray(project.tags) && project.tags.length > 0 ? (
                project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 border border-neutral-200/70 transition-colors"
                  >
                    #{tag}
                  </span>
                ))
              ) : (
                <p className="text-xs text-neutral-400 italic">No tags specified</p>
              )}
            </div>
          </div>

          {/* Quick Info & Metadata Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-100">
              Project Details
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start justify-between gap-3">
                <span className="text-neutral-500">Category</span>
                <span className="font-semibold text-neutral-800 text-right">
                  {project?.category || 'Not specified'}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-500">Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Published & Live
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-neutral-500">Last Updated</span>
                <span className="font-medium text-neutral-700 flex items-center gap-1.5">
                  <GoCalendar className="text-neutral-400" />
                  {formattedDate}
                </span>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-3">
                <span className="text-neutral-400 text-xs">Project ID</span>
                <span className="font-mono text-[11px] text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md truncate max-w-37.5">
                  {project?._id}
                </span>
              </div>
            </div>
          </div>

          {/* External Links Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-2xs space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 pb-2 border-b border-neutral-100">
              Quick Links
            </h2>

            <div className="space-y-2">
              {project?.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100/90 border border-neutral-200/80 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <GoGlobe className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">Live Website</p>
                      <p className="text-[11px] text-neutral-500 truncate max-w-40">
                        {project.liveLink.replace(/^https?:\/\//, '')}
                      </p>
                    </div>
                  </div>
                  <FiExternalLink className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </a>
              )}

              {project?.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 hover:bg-neutral-100/90 border border-neutral-200/80 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <FiGithub className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">Source Code</p>
                      <p className="text-[11px] text-neutral-500 truncate max-w-40">
                        {project.githubLink.replace(/^https?:\/\//, '')}
                      </p>
                    </div>
                  </div>
                  <FiExternalLink className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

