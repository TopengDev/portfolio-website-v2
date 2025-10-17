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
    title: "DeFi Trading Platform",
    tagline:
      "Decentralized exchange with advanced trading features",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nfGVufDF8fHx8MTc2MDY4Mjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Next.js", "Solidity", "Web3.js", "Hardhat"],
    role: "Web3 Developer",
    duration: "4 months",
    featured: true,
    category: "web3",
    color: "#00FFFF",
    description:
      "Built a decentralized trading platform with smart contract integration, real-time price feeds, and liquidity pools. Implemented automated market maker (AMM) algorithms and yield farming mechanisms.",
    impact: "$2M+ in total value locked, 5K+ active traders",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    tagline:
      "Modern shopping experience with real-time inventory",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MDY4Mjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    role: "Fullstack Developer",
    duration: "3 months",
    featured: true,
    category: "fullstack",
    color: "#007AFF",
    description:
      "Built a high-performance e-commerce platform with advanced filtering, real-time inventory management, and seamless payment integration. Achieved 40% faster page loads through optimized image delivery and server-side rendering.",
    impact:
      "2.5x increase in conversion rate, 60% reduction in bounce rate",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "NFT Marketplace",
    tagline: "Create, buy, and sell digital assets",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZnQlMjBhcnR8ZW58MXx8fHwxNzYwNzI0OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["React", "Solidity", "IPFS", "Ethers.js"],
    role: "Web3 Developer",
    duration: "5 months",
    featured: false,
    category: "web3",
    color: "#9D00FF",
    description:
      "Developed a full-featured NFT marketplace with minting, auctions, and royalty distribution. Integrated IPFS for decentralized storage and implemented ERC-721 and ERC-1155 standards.",
    impact: "10K+ NFTs minted, $500K+ in trading volume",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    tagline: "Data visualization for enterprise insights",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwNzI0OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["React", "NestJS", "Redis", "Recharts"],
    role: "Lead Developer",
    duration: "4 months",
    featured: false,
    category: "fullstack",
    color: "#FF3D71",
    description:
      "Developed a comprehensive analytics dashboard processing millions of data points daily. Implemented efficient caching strategies and real-time data streaming for instant insights.",
    impact: "Reduced report generation time from 45s to 3s",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Design System",
    tagline: "Component library for consistent UX",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYwNjUwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["React", "Storybook", "TailwindCSS", "Figma"],
    role: "UI Designer",
    duration: "3 months",
    featured: false,
    category: "design",
    color: "#00D9FF",
    description:
      "Created a comprehensive design system with 50+ reusable components, detailed documentation, and design tokens. Used by 10+ teams across the organization.",
    impact: "70% reduction in design-to-dev handoff time",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "SaaS Collaboration Tool",
    tagline: "Team productivity reinvented",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwNzE5NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    stack: ["Next.js", "NestJS", "WebSocket", "Docker"],
    role: "Fullstack Developer",
    duration: "6 months",
    featured: false,
    category: "fullstack",
    color: "#FFD60A",
    description:
      "Built a real-time collaboration platform with workspace management, live document editing, and video conferencing capabilities. Scaled to support 10K+ concurrent users.",
    impact: "Increased team productivity by 35%",
    liveUrl: "#",
    githubUrl: "#",
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
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #00FFFF, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, #007AFF, transparent 70%)",
          bottom: "20%",
          right: "10%",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity }}
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
              {/* 3D Glow effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}60, transparent 70%)`,
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
              {/* Glow */}
              <motion.div
                className="absolute -inset-3 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)`,
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