<div align="center">

# 🚀 Portfolio Studio
### *The Ultimate Full-Stack Project Showcase & CMS Platform*

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Platform-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-studio-roan-iota.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16_App_Router-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_Cloud-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br/>

**A developer-first portfolio CMS designed to curate, organize, prioritize, and showcase modern web projects with zero friction.**

[Explore Live Demo](https://portfolio-studio-roan-iota.vercel.app/) · [Report Bug](https://github.com/Md-Abdullah303/portfolio-studio/issues) · [Request Feature](https://github.com/Md-Abdullah303/portfolio-studio/issues)

</div>

---

## 📌 Table of Contents
- [✨ Key Features](#-key-features)
- [🎯 Project Priority Engine](#-project-priority-engine)
- [🛠️ Tech Stack Architecture](#️-tech-stack-architecture)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🔌 API Endpoints Reference](#-api-endpoints-reference)
- [🚀 Quickstart & Installation](#-quickstart--installation)
- [🔐 Environment Configuration](#-environment-configuration)
- [👨‍💻 Author & Connect](#-author--connect)

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 🔢 **Custom Project Priority** | Rank top-priority projects on the fly (1, 2, 3...) with dynamic visual badge markers. |
| 📁 **Full Lifecycle Project CMS** | Add, edit, and organize project showcases with descriptions, live URLs, GitHub repos, and tags. |
| 🔐 **Modern Authentication** | Bulletproof user sign-up, session control, and protected routes powered by **Better-Auth**. |
| 💡 **Challenges & Future Plans** | Dedicated spaces to articulate engineering obstacles faced and planned roadmap features. |
| ⚡ **Lightning-Fast App Router** | Server Components and optimized Client Components in Next.js 16 with zero-lag routing. |
| 🎨 **Responsive Dark/Light UI** | Crafted with Tailwind CSS v4, smooth hover elevations, and responsive grid layouts. |
| 🔔 **Interactive Feedback** | Instant notifications via `react-hot-toast` for streamlined user interactions. |

---

## 🎯 Project Priority Engine

Take full control of how your portfolio showcases projects to recruiters and visitors:

- **Ascending Priority Ordering**: Projects are served in ascending sequence (`1` is the absolute top, followed by `2`, `3`...).
- **Instant Backend Sorting**: The database automatically indexes and sorts all queries via `AddProject.find().sort({ priority: 1 })`.
- **Live Visual Priority Badges**: Every prioritized project card clearly highlights its rank so you always know your showcase lineup.
- **Effortless In-Place Reordering**: Need to change the lineup? Edit the project, update its priority number, and your portfolio updates immediately.

---

## 🛠️ Tech Stack Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) | React full-stack framework with App Router & Server Actions |
| **UI Library** | [React 19](https://react.dev/) | Component architecture & concurrent rendering |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first, high-performance styling engine |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/) | Cloud NoSQL document database |
| **ODM** | [Mongoose](https://mongoosejs.com/) | Schema validation and typed object data modeling |
| **Authentication** | [Better-Auth](https://www.better-auth.com/) | Modern typescript-friendly authentication layer |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather, Octicons & Material design vector iconography |
| **Feedback UI** | [React Hot Toast](https://react-hot-toast.com/) | Lightweight, animated toast notifications |
| **Cloud Hosting** | [Vercel](https://vercel.com/) | Edge network global deployment |

## 📂 Project Directory Structure

```plaintext
portfolio-studio/
├── public/                 # Static visual assets
├── src/
│   ├── app/                # Next.js App Router (Layouts, Pages & APIs)
│   │   ├── (auth)/         # Authentication routes (login, register)
│   │   ├── (main)/         # Main authenticated dashboard & studio pages
│   │   │   ├── add-project/        # Create new project showcase
│   │   │   ├── edit-project/[id]/  # In-place project editor & priority manager
│   │   │   ├── project-details/[id]# Deep-dive project overview
│   │   │   └── page.jsx            # Main showcase gallery
│   │   ├── api/            # Serverless REST endpoints
│   │   │   ├── add-project/        # GET (sorted by priority), POST
│   │   │   └── add-project/[id]/   # GET, PATCH, DELETE
│   │   ├── globals.css     # Global theme & Tailwind tokens
│   │   └── layout.js       # Root application layout & provider shell
│   ├── components/         # Reusable UI components & forms
│   │   ├── Form/           # Add & Edit project forms
│   │   ├── Navigation/     # Sidebar & top navigation bars
│   │   └── ProjectCard.jsx # Showcase card with priority badges
│   ├── lib/                # Database connections, core fetchers & utilities
│   │   ├── core/           # Data fetching functions (allProjects, getProjectById)
│   │   └── mongodb.js      # Cached MongoDB connection client
│   └── models/             # Mongoose schemas (AddProject schema)
├── .env.example            # Environment variables blueprint
└── package.json            # Project manifest & dependencies
```

---

## 🔌 API Endpoints Reference

The platform provides a clean, predictable RESTful API:

| Method | Endpoint | Description | Query / Body Payload |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/add-project` | Fetch all projects **sorted ascending by priority** | None |
| `POST` | `/api/add-project` | Create a new project showcase | `{ title, category, description, priority, ... }` |
| `GET` | `/api/add-project/:id` | Fetch detailed data for a specific project | Route parameter `:id` |
| `PATCH` | `/api/add-project/:id` | Update project details, links, or priority rank | Partial JSON payload of updated fields |
| `DELETE` | `/api/add-project/:id` | Remove a project permanently | Route parameter `:id` |

---

## 🚀 Getting Started

Follow these simple steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Md-Abdullah303/portfolio-studio.git
cd portfolio-studio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory and add your credentials:
```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_uri
DB_name=portfolio-studio

NEXT_PUBLIC_URL=http://localhost:3000
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

---

## 👨‍💻 Author

Developed with ❤️ by **[Md Abdullah](https://github.com/Md-Abdullah303)**

---

## 📄 License

This project is licensed under the MIT License.
