'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    GoArrowLeft,
    GoTag,
    GoGlobe,
    GoImage,
    GoStack,
    GoTools,
    GoLightBulb,
    GoPlus,
    GoRepo,
    GoPencil
} from 'react-icons/go';

const AddProjectForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        imgLink: '',
        liveLink: '',
        githubLink: '',
        tags: '',
        challenges: '',
        futureplans: '',
    });

    // ২. প্রতিটি ইনপুট ফিল্ডের চেঞ্জ হ্যান্ডেল করার জন্য কমন ফাংশন
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // যে ইনপুটে টাইপ করা হচ্ছে তার name অনুযায়ী value আপডেট হবে
        }));
    };

    // ৩. ফর্ম সাবমিট হ্যান্ডলার (শুধুমাত্র ডাটা কনসোল করবে)
    const handleSubmit = (e) => {
        e.preventDefault();

        // ট্যাগগুলোকে কমা দিয়ে আলাদা করে সুন্দর একটি array বানানো
        const formattedTags = formData.tags
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        const projectData = {
            ...formData,
            tags: formattedTags, // অ্যারে আকারে ট্যাগ
        };


        console.log('Ready for Database / Payload:', projectData);

    };

    // লাইভ ট্যাগ প্রিভিউয়ের জন্য
    const activeTags = formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

    return (
        <div className="max-w-4xl mx-auto py-8">
            {/* Header Section */}
            <div className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-4 group"
                >
                    <GoArrowLeft className="text-base transition-transform group-hover:-translate-x-1" />
                    <span>Back to Projects</span>
                </Link>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                            Add New Project
                        </h1>
                        <p className="text-sm text-neutral-500 mt-1">
                            Fill in the project details below to showcase your work in Portfolio Studio.
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* SECTION 1: Basic Information */}
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-neutral-100">
                        <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                            <GoPencil className="text-lg" />
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-neutral-900">Basic Information</h2>
                            <p className="text-xs text-neutral-500">Provide the title, category and high-level overview.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Title */}
                        <div className="md:col-span-2">
                            <label htmlFor="title" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Project Title <span className="text-rose-500">*</span>
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Portfolio Studio - Creator Platform"
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Category <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white cursor-pointer"
                                >
                                    <option value="" disabled>Select a category</option>
                                    <option value="Full-Stack Application">Full-Stack Application</option>
                                    <option value="Frontend Development">Frontend Development</option>
                                    <option value="Backend & API">Backend & API</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                                    <option value="Open Source Tool">Open Source Tool</option>
                                </select>
                            </div>
                        </div>

                        {/* Tech Stack / Tags */}
                        <div>
                            <label htmlFor="tags" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Tech Stack Tags <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                    <GoTag className="text-base" />
                                </div>
                                <input
                                    id="tags"
                                    name="tags"
                                    type="text"
                                    required
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="e.g. React, Next.js, Tailwind, MongoDB"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                                />
                            </div>
                            <span className="text-[11px] text-neutral-400 mt-1 block">Separate technologies with commas</span>
                        </div>

                        {/* Live Tags Preview */}
                        {activeTags.length > 0 && (
                            <div className="md:col-span-2 flex flex-wrap items-center gap-1.5 pt-1">
                                <span className="text-xs text-neutral-500 mr-1">Preview tags:</span>
                                {activeTags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Project Overview & Description <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Write a compelling summary of what the project does, who it is for, and key features..."
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white resize-y"
                            />
                        </div>
                    </div>
                </div>

                {/* SECTION 2: Media & Links */}
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-neutral-100">
                        <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                            <GoGlobe className="text-lg" />
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-neutral-900">Media & Live Links</h2>
                            <p className="text-xs text-neutral-500">Provide direct URLs to preview, live demo, and source code.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Image Link */}
                        <div className="md:col-span-2">
                            <label htmlFor="imgLink" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Image URL / Thumbnail Link <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                    <GoImage className="text-base" />
                                </div>
                                <input
                                    id="imgLink"
                                    name="imgLink"
                                    type="url"
                                    required
                                    value={formData.imgLink}
                                    onChange={handleChange}
                                    placeholder="https://images.unsplash.com/... or your hosted image URL"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                                />
                            </div>

                            {/* Image Preview Box */}
                            {formData.imgLink && (
                                <div className="mt-3 p-2 bg-neutral-50 rounded-xl border border-neutral-200 inline-block">
                                    <p className="text-xs text-neutral-500 mb-1.5 font-medium">Image Preview:</p>
                                    <img
                                        src={formData.imgLink}
                                        alt="Project preview"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                        className="h-32 w-auto object-cover rounded-lg border border-neutral-200 shadow-xs"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Live Link */}
                        <div>
                            <label htmlFor="liveLink" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Live Website / Demo URL <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                    <GoGlobe className="text-base" />
                                </div>
                                <input
                                    id="liveLink"
                                    name="liveLink"
                                    type="url"
                                    required
                                    value={formData.liveLink}
                                    onChange={handleChange}
                                    placeholder="https://yourproject.com"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                                />
                            </div>
                        </div>

                        {/* GitHub Link */}
                        <div>
                            <label htmlFor="githubLink" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                GitHub Repository URL <span className="text-rose-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                                    <GoRepo className="text-base" />
                                </div>
                                <input
                                    id="githubLink"
                                    name="githubLink"
                                    type="url"
                                    required
                                    value={formData.githubLink}
                                    onChange={handleChange}
                                    placeholder="https://github.com/username/repository"
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 3: Deep Dive & Story */}
                <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-neutral-100">
                        <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
                            <GoTools className="text-lg" />
                        </div>
                        <div>
                            <h2 className="text-base font-bold text-neutral-900">Challenges & Future Roadmap</h2>
                            <p className="text-xs text-neutral-500">Document the technical difficulties faced and upcoming plans.</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {/* Challenges */}
                        <div>
                            <label htmlFor="challenges" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Challenges Faced <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                id="challenges"
                                name="challenges"
                                rows={3}
                                required
                                value={formData.challenges}
                                onChange={handleChange}
                                placeholder="Explain any major technical hurdles, bugs, or architectural decisions you solved..."
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white resize-y"
                            />
                        </div>

                        {/* Future Plans */}
                        <div>
                            <label htmlFor="futureplans" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                                Future Plans & Improvements <span className="text-rose-500">*</span>
                            </label>
                            <textarea
                                id="futureplans"
                                name="futureplans"
                                rows={3}
                                required
                                value={formData.futureplans}
                                onChange={handleChange}
                                placeholder="What new features, optimizations, or scaling plans do you have for this project?"
                                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all bg-white resize-y"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() =>
                            setFormData({
                                title: '',
                                category: '',
                                description: '',
                                imgLink: '',
                                liveLink: '',
                                githubLink: '',
                                tags: '',
                                challenges: '',
                                futureplans: '',
                            })
                        }
                        className="px-5 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                        Reset Form
                    </button>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 shadow-md shadow-neutral-900/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                        <GoPlus className="text-lg" />
                        <span>Publish Project</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProjectForm;
