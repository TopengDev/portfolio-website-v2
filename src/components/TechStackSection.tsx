import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Palette,
  Package,
  GitBranch,
  Sparkles,
  Zap,
  Cpu,
  Globe,
  Triangle,
  FileCode2,
  Paintbrush,
  Cat,
  Circle,
  Box,
  Hexagon,
  Diamond,
  Smartphone,
  Mail,
  Terminal,
  BarChart3,
  Leaf,
  Grid3x3,
  Settings,
  Cloud,
} from "lucide-react";

const techCategories = [
  {
    category: "Frontend",
    icon: Code2,
    color: "#00FFFF",
    gradient: "from-cyan-500 to-blue-500",
    position: { x: 0, y: 0 },
    techs: [
      { name: "React", icon: Code2, expertise: "Expert" },
      { name: "Next.js", icon: Triangle, expertise: "Expert" },
      { name: "TypeScript", icon: FileCode2, expertise: "Expert" },
      { name: "TailwindCSS", icon: Paintbrush, expertise: "Expert" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "#007AFF",
    gradient: "from-blue-500 to-purple-500",
    position: { x: 1, y: 0 },
    techs: [
      { name: "NestJS", icon: Cat, expertise: "Advanced" },
      { name: "Golang", icon: Circle, expertise: "Advanced" },
      { name: "Node.js", icon: Server, expertise: "Expert" },
      { name: "Solidity", icon: Hexagon, expertise: "Advanced" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "#00FFFF",
    gradient: "from-cyan-500 to-teal-500",
    position: { x: 0, y: 1 },
    techs: [
      { name: "PostgreSQL", icon: Database, expertise: "Expert" },
      { name: "Redis", icon: Circle, expertise: "Advanced" },
      { name: "MongoDB", icon: Leaf, expertise: "Advanced" },
      { name: "Prisma", icon: Grid3x3, expertise: "Advanced" },
    ],
  },
  {
    category: "DevOps",
    icon: Package,
    color: "#9D00FF",
    gradient: "from-purple-500 to-pink-500",
    position: { x: 1, y: 1 },
    techs: [
      { name: "Docker", icon: Box, expertise: "Advanced" },
      { name: "Nginx", icon: Server, expertise: "Advanced" },
      { name: "CI/CD", icon: Settings, expertise: "Advanced" },
      { name: "AWS", icon: Cloud, expertise: "Intermediate" },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    color: "#FF3D71",
    gradient: "from-pink-500 to-rose-500",
    position: { x: 0.5, y: -0.3 },
    techs: [
      { name: "Figma", icon: Palette, expertise: "Expert" },
      { name: "Framer", icon: Sparkles, expertise: "Advanced" },
      { name: "UI/UX", icon: Diamond, expertise: "Expert" },
      {
        name: "Prototyping",
        icon: Smartphone,
        expertise: "Advanced",
      },
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    color: "#00D9FF",
    gradient: "from-cyan-400 to-blue-400",
    position: { x: 0.5, y: 1.3 },
    techs: [
      { name: "Git", icon: GitBranch, expertise: "Expert" },
      { name: "VS Code", icon: Terminal, expertise: "Expert" },
      { name: "Postman", icon: Mail, expertise: "Expert" },
      { name: "Linear", icon: BarChart3, expertise: "Advanced" },
    ],
  },
];

export function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState<
    number | null
  >(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="tech"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 122, 255, 0.05) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">
              Technologies & Expertise
            </span>
          </motion.div>

          <h2
            className="gradient-text mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Tech Universe
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Hover over each technology sphere to explore my
            expertise
          </motion.p>
        </motion.div>

        {/* 3D Floating Tech Spheres */}
        <div className="relative h-[600px] mb-20">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            const isSelected = selectedCategory === index;

            // Calculate position based on orbit - fixed positioning
            const angle =
              (index / techCategories.length) * Math.PI * 2;
            const radius = 200;
            const centerX = 50;
            const centerY = 50;
            const x = centerX + Math.cos(angle) * 35;
            const y = centerY + Math.sin(angle) * 35;

            return (
              <motion.div
                key={category.category}
                className="absolute z-10"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() =>
                  setSelectedCategory(isSelected ? null : index)
                }
              >
                {/* Wrapper for both glow and sphere */}
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute left-0 top-0 rounded-full blur-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${category.color}60, transparent 70%)`,
                      width: "200px",
                      height: "200px",
                      marginLeft: "-40px",
                      marginTop: "-40px",
                    }}
                    animate={{
                      scale:
                        isHovered || isSelected
                          ? [1, 1.3, 1]
                          : 1,
                      opacity:
                        isHovered || isSelected
                          ? [0.4, 0.7, 0.4]
                          : 0.2,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  {/* Main sphere */}
                  <motion.div
                    className="glass-card-strong rounded-full cursor-pointer group"
                    style={{
                      width: "120px",
                      height: "120px",
                    }}
                    animate={{
                      scale: isHovered || isSelected ? 1.15 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {/* Rotating gradient border */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: `conic-gradient(from 0deg, ${category.color}, transparent, ${category.color})`,
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Inner sphere */}
                    <div className="absolute top-1/2 -translate-y-1/2 inset-[2px] glass-card-strong rounded-full flex flex-col items-center justify-center noise-texture overflow-hidden">
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${category.color}80, transparent)`,
                        }}
                      />

                      <div className="relative z-10 text-center">
                        <motion.div
                          className="mb-2"
                          animate={{
                            scale:
                              isHovered || isSelected
                                ? [1, 1.15, 1]
                                : 1,
                          }}
                          transition={{
                            scale: {
                              duration: 1,
                              repeat: Infinity,
                            },
                          }}
                        >
                          <Icon
                            className="mx-auto"
                            style={{
                              color: category.color,
                              width: "32px",
                              height: "32px",
                              filter: `drop-shadow(0 0 10px ${category.color}80)`,
                            }}
                          />
                        </motion.div>
                        <p
                          className="font-medium text-sm"
                          style={{
                            color: category.color,
                            textShadow: `0 0 20px ${category.color}50`,
                          }}
                        >
                          {category.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Tech details popup */}
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 z-20"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{
                    opacity: isHovered || isSelected ? 1 : 0,
                    y: isHovered || isSelected ? 0 : -20,
                    scale: isHovered || isSelected ? 1 : 0.8,
                    pointerEvents:
                      isHovered || isSelected ? "auto" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card-strong rounded-2xl p-5 noise-texture relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}, transparent)`,
                      }}
                    />
                    <div className="relative z-10 space-y-3">
                      {category.techs.map((tech, techIndex) => {
                        const TechIcon = tech.icon;
                        return (
                          <motion.div
                            key={tech.name}
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: techIndex * 0.05,
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-6 flex items-center justify-center flex-shrink-0">
                                <TechIcon className="w-5 h-5" style={{ color: category.color }} />
                              </div>
                              <div>
                                <p className="text-white text-sm">
                                  {tech.name}
                                </p>
                                <p
                                  className="text-xs"
                                  style={{
                                    color: `${category.color}80`,
                                  }}
                                >
                                  {tech.expertise}
                                </p>
                              </div>
                            </div>
                            <motion.div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{
                                background: category.color,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: techIndex * 0.2,
                              }}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-32 h-32">
              <motion.div
                className="absolute inset-0 glass-card-strong rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
              </motion.div>
              <div className="absolute inset-2 glass-card-strong rounded-full flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Cpu
                    className="w-12 h-12 text-cyan-400"
                    style={{
                      filter:
                        "drop-shadow(0 0 10px rgba(0,255,255,0.5))",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "Technologies",
              value: "20+",
              icon: Globe,
            },
            {
              label: "Years Experience",
              value: "5+",
              icon: Zap,
            },
            {
              label: "Projects Built",
              value: "50+",
              icon: Code2,
            },
            {
              label: "Happy Clients",
              value: "30+",
              icon: Sparkles,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card-strong rounded-2xl p-6 text-center group hover:scale-105 transition-transform relative overflow-hidden noise-texture"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <motion.p
                className="gradient-text mb-1"
                style={{ fontSize: "2rem" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: index * 0.1 + 0.3,
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
