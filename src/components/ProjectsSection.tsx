import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Filter,
  Grid3x3,
  LayoutGrid,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "ExecFi",
    tagline: "AI Powered DeFi and smart wallet platform",
    image:
      "/execfi_thumbnail.png",
    stack: ["Next.js", "Solidity", "Privy", "Biconomy", "Wagmi"],
    role: "Fullstack & Web3 Developer",
    duration: "Ongoing",
    featured: true,
    category: "web3",
    color: "#00FFFF",
    description:
      "A next-gen AI Powered DeFi and smart wallet platform designed to bring Web3 usability to everyone. Exploring account abstraction, smart wallets, and AI-driven finance tools to bridge Web2 usability and Web3 autonomy.",
    impact: "Next-generation DeFi platform with enhanced UX",
    liveUrl: "https://execfi.xyz",
    githubUrl: "https://github.com/TopengDev",
  },
  {
    id: 2,
    title: "HireMeUp",
    tagline:
      "AI-powered recruitment platform connecting talents with opportunities",
    image:
      "hiremeup_thumbnail.png",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
    role: "Fullstack Developer",
    duration: "Ongoing",
    featured: true,
    category: "fullstack",
    color: "#FF6B35",
    description:
      "An innovative AI-powered recruitment platform that revolutionizes the hiring process by intelligently matching candidates with job opportunities. Features advanced resume parsing, skill assessment, and automated candidate screening to streamline recruitment workflows.",
    impact: "Transforming recruitment with AI-driven talent matching",
    liveUrl: "https://hiremeup.topengdev.com",
    githubUrl: "https://github.com/TopengDev",
  },
  {
    id: 9,
    title: "DigitalPartnership",
    tagline:
      "Enterprise integration portal for Indosat Ooredoo Hutchison",
    image:
      "ioh_thumbnail.png",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    role: "Fullstack Developer",
    duration: "Production",
    featured: false,
    category: "fullstack",
    color: "#007AFF",
    description:
      "Indosat Ooredoo Hutchison's official digital partnership portal for enterprise integrations. Built to streamline digital partnerships and enterprise collaborations with scalable architecture.",
    impact: "Serving thousands of enterprise partners nationwide",
    liveUrl: "https://ioh.co.id/portal/id/ioh-digitalpartnershipsportal",
    githubUrl: "https://github.com/TopengDev",
  },
  {
    id: 3,
    title: "KNNEK",
    tagline: "Web3-native community platform",
    image:
      "knnek_thumbnail.png",
    stack: ["Next.js", "Solidity", "WebSocket", "Ethers.js"],
    role: "Web3 Developer",
    duration: "6 months",
    featured: false,
    category: "web3",
    color: "#9D00FF",
    description:
      "A Web3-native community platform connecting crypto enthusiasts through real-time chat. Built with decentralized authentication and blockchain integration for enhanced privacy and security.",
    impact: "Connecting crypto enthusiasts with Web3-first approach",
    liveUrl: "https://knnek.com/",
    githubUrl: "https://github.com/TopengDev",
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    tagline: "AI-powered resume compatibility analyzer",
    image:
      "resumind_thumbnail.png",
    stack: ["React", "NestJS", "OpenAI", "NLP"],
    role: "Fullstack Developer",
    duration: "3 months",
    featured: false,
    category: "fullstack",
    color: "#FF3D71",
    description:
      "An AI-powered resume analyzer that measures compatibility with job descriptions using NLP. Provides detailed feedback and recommendations to improve resume match rates with job requirements.",
    impact: "Helping job seekers optimize their applications",
    liveUrl: "https://resumind.topengdev.com",
    githubUrl: "https://github.com/TopengDev/ai_resume_analyzer",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    tagline: "Multi-purpose ready e-commerce solution",
    image:
      "e-commerce_thumbnail.png",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    role: "Fullstack Developer",
    duration: "2 months",
    featured: false,
    category: "fullstack",
    color: "#00D9FF",
    description:
      "e-commerce_thumbnail.png",
    impact: "Production-ready e-commerce template",
    liveUrl: "https://simple-e-commerce.topengdev.com",
    githubUrl: "https://github.com/TopengDev/Simple-E-Commerce",
  },
  {
    id: 6,
    title: "Mafia Code",
    tagline: "Developer community for SaaS builders",
    image:
      "mcc_thumbnail.png",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    role: "Fullstack Developer",
    duration: "4 months",
    featured: false,
    category: "fullstack",
    color: "#FFD60A",
    description:
      "An open developer community for SaaS and product builders. Platform for developers to connect, collaborate, and share knowledge about building and scaling SaaS products.",
    impact: "Growing community of SaaS builders",
    liveUrl: "https://mafiacode.vercel.app",
    githubUrl: "https://github.com/TopengDev",
  },
  {
    id: 7,
    title: "Startup Landing Page",
    tagline: "Modern & sophisticated startup company landing page",
    image:
    "startuppage_thumbnail.png",
    stack: ["html5", "tailwindcss"],
    role: "Frontend Developer",
    duration: "A Day",
    featured: false,
    category: "design",
    color: "#FFD60A",
    description:
    "Modern & sophisticated startup company landing page design",
    impact: "Accelerate your growth with us.",
    liveUrl: "https://startuppage.topengdev.com",
    githubUrl: "https://github.com/TopengDev",
  },{
    id: 8,
    title: "Tech Company Landing Page",
    tagline: "Modern & sophisticated tech company landing page",
    image:
    "techpage_thumbnail.png",
    stack: ["html5", "tailwindcss"],
    role: "Frontend Developer",
    duration: "A Day",
    featured: false,
    category: "design",
    color: "#FFD60A",
    description:
    "Modern & sophisticated tech company landing page design",
    impact: "Build with the future.",
    liveUrl: "https://techpage.topengdev.com",
    githubUrl: "https://github.com/TopengDev",
  },

   
];

const categories = [
  { id: "all", label: "All Projects", icon: LayoutGrid },
  { id: "web3", label: "Web3", icon: Zap },
  { id: "fullstack", label: "Fullstack", icon: Layers },
  { id: "design", label: "Design", icon: Sparkles },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [hoveredId, setHoveredId] = useState<number | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">(
    "grid",
  );

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(
    (p) => p.featured,
  );
  const otherProjects = filteredProjects.filter(
    (p) => !p.featured,
  );

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Static background grid for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Simplified gradient orbs */}
      <div
        className="absolute w-96 h-96 rounded-full blur-2xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #00FFFF, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full blur-2xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #007AFF, transparent 70%)",
          bottom: "20%",
          right: "10%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-subtle mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">
              Portfolio Showcase
            </span>
          </motion.div>

          <h2
            className="gradient-text mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Featured Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "glass-card-strong text-cyan-400"
                  : "glass-card-subtle text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {category.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured Projects - 3D Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Optimized Glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)`,
                }}
              />

              <motion.div
                className="relative glass-card-strong rounded-3xl overflow-hidden noise-texture"
                animate={{
                  y: hoveredId === project.id ? -12 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image container with parallax */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale:
                        hoveredId === project.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />

                  {/* Animated mesh overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(${project.color}20 1px, transparent 1px),
                        linear-gradient(90deg, ${project.color}20 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  />

                  {/* Hover overlay with icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="glass-card-strong rounded-full p-6"
                      style={{
                        boxShadow: `0 0 40px ${project.color}80`,
                      }}
                      animate={{
                        scale:
                          hoveredId === project.id
                            ? [1, 1.2, 1]
                            : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight
                        className="w-10 h-10"
                        style={{ color: project.color }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Featured badge with animation */}
                  <div className="absolute top-6 right-6">
                    <motion.div
                      className="glass-card-strong rounded-full px-5 py-2.5 flex items-center gap-2"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${project.color}40`,
                          `0 0 40px ${project.color}60`,
                          `0 0 20px ${project.color}40`,
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                        },
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-medium">
                        Featured
                      </span>
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      className="glass-card rounded-full px-4 py-2"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}40`,
                      }}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span
                        className="text-xs font-medium"
                        style={{ color: project.color }}
                      >
                        {project.category.toUpperCase()}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Content with enhanced styling */}
                <div className="p-8 relative">
                  {/* Background accent */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3
                          className="mb-2 transition-all duration-300"
                          style={{
                            color:
                              hoveredId === project.id
                                ? project.color
                                : "#EDEDED",
                            textShadow:
                              hoveredId === project.id
                                ? `0 0 20px ${project.color}50`
                                : "none",
                          }}
                          animate={{
                            x: hoveredId === project.id ? 4 : 0,
                          }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-gray-400 text-sm">
                          {project.tagline}
                        </p>
                      </div>
                      <motion.div
                        className="p-3 rounded-xl"
                        style={{
                          background: `${project.color}20`,
                        }}
                        whileHover={{ rotate: 180, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Zap
                          className="w-5 h-5"
                          style={{ color: project.color }}
                        />
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.5 + techIndex * 0.05,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="border-white/10 bg-white/5 text-gray-300 text-xs hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: project.color }}
                    >
                      <span>Explore Project</span>
                      <motion.div
                        animate={{
                          x: hoveredId === project.id ? 6 : 0,
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.color}20, transparent)`,
                  }}
                  animate={{
                    x:
                      hoveredId === project.id
                        ? ["0%", "200%"]
                        : "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Bento Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              layout
            >
              {/* Optimized Glow */}
              <motion.div
                className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}30, transparent 70%)`,
                }}
              />

              <motion.div
                className="relative glass-card rounded-2xl overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />

                  {/* Category tag */}
                  <div className="absolute top-3 left-3">
                    <div
                      className="glass-card rounded-full px-3 py-1"
                      style={{
                        background: `${project.color}30`,
                        border: `1px solid ${project.color}50`,
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  >
                    <div
                      className="glass-card rounded-full p-4"
                      style={{
                        boxShadow: `0 0 30px ${project.color}60`,
                      }}
                    >
                      <ArrowRight
                        className="w-6 h-6"
                        style={{ color: project.color }}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="p-5">
                  <h4
                    className="text-sm mb-1 font-medium transition-colors"
                    style={{
                      color:
                        hoveredId === project.id
                          ? project.color
                          : "#EDEDED",
                    }}
                  >
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card-strong rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto noise-texture relative"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, ${selectedProject.color}, transparent, ${selectedProject.color})`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-[2px] rounded-3xl bg-[#0D0D0D] glass-card-strong" />

              <div className="relative z-10">
                <div className="relative h-96 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 glass-card-strong rounded-full hover:bg-white/20 transition-colors group"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="p-12 relative z-10">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge
                    className="px-4 py-1.5"
                    style={{
                      background: `${selectedProject.color}30`,
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}50`,
                    }}
                  >
                    {selectedProject.role}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/20 text-gray-300 px-4 py-1.5"
                  >
                    {selectedProject.duration}
                  </Badge>
                  <Badge
                    className="px-4 py-1.5"
                    style={{
                      background: `${selectedProject.color}20`,
                      color: selectedProject.color,
                      border: `1px solid ${selectedProject.color}40`,
                    }}
                  >
                    {selectedProject.category}
                  </Badge>
                </div>

                <h2
                  className="mb-3"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: selectedProject.color,
                    textShadow: `0 0 30px ${selectedProject.color}30`,
                  }}
                >
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  {selectedProject.tagline}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-cyan-400 rounded-full" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.stack.map((tech) => (
                        <Badge
                          key={tech}
                          className="px-4 py-2"
                          style={{
                            background: `${selectedProject.color}15`,
                            color: selectedProject.color,
                            border: `1px solid ${selectedProject.color}30`,
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-cyan-400 rounded-full" />
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-cyan-400 rounded-full" />
                      Impact
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {selectedProject.impact}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button
                      className="px-8 py-6"
                      style={{
                        background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}CC)`,
                        color: "#0D0D0D",
                      }}
                      onClick={() =>
                        window.open(
                          selectedProject.liveUrl,
                          "_blank",
                        )
                      }
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="px-8 py-6"
                      style={{
                        borderColor: `${selectedProject.color}50`,
                        color: selectedProject.color,
                      }}
                      onClick={() =>
                        window.open(
                          selectedProject.githubUrl,
                          "_blank",
                        )
                      }
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
