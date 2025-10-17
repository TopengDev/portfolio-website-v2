import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Briefcase,
  Award,
  TrendingUp,
  Users,
  Code2,
  Rocket,
} from "lucide-react";

const experiences = [
  {
    company: "Mafia Code Community",
    role: "Co‑Leader",
    period: "Jan 2023 – May 2023",
    type: "Community / Volunteer",
    achievements: [
      "Mentored junior developers and facilitated code reviews across community projects",
      "Co‑organized learning sessions and contribution workflows to improve collaboration",
      "Contributed to project scaffolds and lightweight CI templates for smoother onboarding",
    ],
    skills: [
      "Node.js",
      "Next.js",
      "TRPC",
      "PostgreSQL",
      "Docker",
    ],
    icon: Building2,
    color: "#00FFFF",

    metrics: {
      mentees: "several juniors",
      sessions: "weekly meetups",
      scope: "community leadership",
    },
  },
  {
    company: "Ihsan Solusi",
    role: "Fullstack Developer",
    period: "2023 - present",
    type: "Full-time",
    achievements: [
      "Built enterprise dashboard with real-time analytics",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Collaborated with design team to improve UX by 45%",
      "Developed RESTful APIs serving 50K+ daily requests",
    ],
    skills: ["Next.js", "NestJS", "Redis", "TypeScript"],
    icon: Briefcase,
    color: "#007AFF",
    metrics: {
      deployment: "-80%",
      ux: "+45%",
      requests: "50K/day",
    },
  },
  {
    company: "Indosat",
    role: "Frontend Developer",
    period: "2021 - 2022",
    type: "Full-time",
    achievements: [
      "Developed customer-facing portal handling 50K+ daily visits",
      "Reduced bundle size by 40% through code splitting",
      "Created reusable component library used across 5+ projects",
      "Improved lighthouse score from 65 to 95",
    ],
    skills: ["React", "Redux", "Webpack", "Sass"],
    icon: Building2,
    color: "#9D00FF",
    metrics: {
      visitors: "50K/day",
      bundle: "-40%",
      score: "95/100",
    },
  },
  {
    company: "Freelance",
    role: "Fullstack Developer & Designer",
    period: "2020 - Present",
    type: "Freelance",
    achievements: [
      "Delivered 20+ projects for startups and SMBs",
      "Maintained 5-star rating across all client engagements",
      "Specialized in rapid prototyping and MVP development",
      "Built Web3 dApps with smart contract integration",
    ],
    skills: ["Full Stack", "UI/UX", "Web3", "Solidity"],
    icon: Rocket,
    color: "#FF3D71",
    metrics: {
      projects: "20+",
      rating: "5.0★",
      clients: "15+",
    },
  },
];

export function ExperienceTimeline() {
  const [selectedIndex, setSelectedIndex] = useState<
    number | null
  >(null);
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  return (
    <section
      id="work"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
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
          top: "30%",
          right: "10%",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">
              Career Journey
            </span>
          </motion.div>

          <h2
            className="gradient-text mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Experience
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isHovered = hoveredIndex === index;
              const isSelected = selectedIndex === index;
              const isActive = isHovered || isSelected;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() =>
                    setSelectedIndex(isSelected ? null : index)
                  }
                >
                  {/* Enhanced Timeline node */}
                  <motion.div
                    className="cursor-pointer mb-6 inline-block relative"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                  >
                    {/* Main node */}
                    <div
                      className="relative w-24 h-24 rounded-full glass-card-strong flex items-center justify-center overflow-hidden group"
                      style={{
                        boxShadow: isActive
                          ? `0 0 40px ${exp.color}80`
                          : `0 0 20px ${exp.color}40`,
                      }}
                    >
                      {/* Pulsing rings */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full pointer-events-none"
                          style={{
                            border: `2px solid ${exp.color}`,
                          }}
                          animate={{
                            scale: isActive ? [1, 2, 2] : 1,
                            opacity: isActive ? [1, 0, 0] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}
                      {/* Rotating gradient background */}
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `conic-gradient(from 0deg, ${exp.color}, transparent, ${exp.color})`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Icon */}
                      <div className="relative z-10">
                        <Icon
                          className="w-10 h-10"
                          style={{
                            color: exp.color,
                            filter: `drop-shadow(0 0 10px ${exp.color})`,
                          }}
                        />
                      </div>

                      {/* Year label */}
                      <motion.div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                        }}
                      >
                        <span
                          className="text-xs font-medium"
                          style={{ color: exp.color }}
                        >
                          {exp.period.split(" - ")[0]}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Enhanced Content card */}
                  <motion.div
                    className="glass-card-strong rounded-2xl overflow-hidden noise-texture group/card cursor-pointer"
                    whileHover={{ y: -6 }}
                    animate={{
                      boxShadow: isActive
                        ? `0 0 40px ${exp.color}40`
                        : "0 0 0px transparent",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: `conic-gradient(from 0deg, ${exp.color}, transparent, ${exp.color})`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="absolute inset-[2px] bg-[#0D0D0D] glass-card-strong rounded-2xl" />

                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <motion.h3
                              className="text-white"
                              animate={{
                                color: isActive
                                  ? exp.color
                                  : "#EDEDED",
                              }}
                            >
                              {exp.company}
                            </motion.h3>
                            <span
                              className="text-xs px-3 py-1 rounded-full glass-card"
                              style={{
                                background: `${exp.color}20`,
                                color: exp.color,
                                border: `1px solid ${exp.color}40`,
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <p
                            className="mb-1"
                            style={{ color: exp.color }}
                          >
                            {exp.role}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {exp.period}
                          </p>
                        </div>

                        {/* Metrics cards */}
                        <div className="flex gap-2">
                          {Object.entries(exp.metrics).map(
                            ([key, value], i) => (
                              <motion.div
                                key={key}
                                className="glass-card rounded-lg px-3 py-2 text-center"
                                initial={{
                                  scale: 0,
                                  rotate: -180,
                                }}
                                whileInView={{
                                  scale: 1,
                                  rotate: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  delay:
                                    0.6 +
                                    index * 0.15 +
                                    i * 0.1,
                                  type: "spring",
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  y: -4,
                                }}
                              >
                                <p className="text-xs text-gray-500 mb-0.5">
                                  {key}
                                </p>
                                <p
                                  className="text-sm font-medium"
                                  style={{ color: exp.color }}
                                >
                                  {value}
                                </p>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <ul className="space-y-3">
                          {exp.achievements
                            .slice(
                              0,
                              isActive
                                ? exp.achievements.length
                                : 3,
                            )
                            .map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="text-gray-300 text-sm flex items-start gap-3 group/item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  delay:
                                    0.7 +
                                    index * 0.15 +
                                    i * 0.1,
                                }}
                              >
                                <motion.div
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{
                                    background: exp.color,
                                  }}
                                  whileHover={{ scale: 2 }}
                                />
                                <span className="group-hover/item:text-white transition-colors">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                        </ul>

                        {!isActive &&
                          exp.achievements.length > 3 && (
                            <motion.button
                              className="text-xs mt-3 flex items-center gap-1"
                              style={{ color: exp.color }}
                              whileHover={{ x: 4 }}
                            >
                              <span>
                                Show{" "}
                                {exp.achievements.length - 3}{" "}
                                more
                              </span>
                              <span>→</span>
                            </motion.button>
                          )}
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs text-gray-500 mb-3">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.div
                              key={skill}
                              className="px-3 py-1.5 rounded-full glass-card text-xs text-gray-300 hover:text-white transition-colors"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                delay:
                                  0.8 + index * 0.15 + i * 0.05,
                              }}
                              whileHover={{
                                scale: 1.1,
                                background: `${exp.color}20`,
                                color: exp.color,
                              }}
                            >
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${exp.color}20, transparent)`,
                        }}
                        animate={{
                          x: isActive
                            ? ["-100%", "200%"]
                            : "-100%",
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}