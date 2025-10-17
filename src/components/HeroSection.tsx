import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  Star,
} from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "50%"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0D0D0D" }}
    >
      {/* Custom cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: 0,
          top: 0,
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorVariant === "hover" ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Large glowing orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, #00FFFF, transparent 70%)",
          left: "20%",
          top: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, #007AFF, transparent 70%)",
          right: "20%",
          bottom: "20%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: useTransform(
            scrollYProgress,
            [0, 1],
            ["0%", "-10%"],
          ),
          y: useTransform(
            scrollYProgress,
            [0, 1],
            ["0%", "20%"],
          ),
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Floating badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card-strong mb-8 group cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setCursorVariant("hover")}
          onHoverEnd={() => setCursorVariant("default")}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </motion.div>
          <span className="text-cyan-400">
            Available for freelance work
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Animated name reveal */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <h1
              className="text-[#EDEDED] mb-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Hi, I'm
            </h1>
          </motion.div>
        </div>

        {/* 3D name with gradient */}
        <div className="relative mb-8">
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
            }}
          >
            {/* Shadow layers for 3D effect */}
            {[...Array(3)].map((_, i) => (
              <motion.h1
                key={i}
                className="gradient-text absolute inset-0"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  transform: `translate(${i * 2}px, ${i * 2}px)`,
                  opacity: 0.1 - i * 0.03,
                  zIndex: -i,
                }}
                animate={{
                  transform: `translate(${i * 2 + Math.sin(Date.now() / 1000) * 2}px, ${i * 2 + Math.cos(Date.now() / 1000) * 2}px)`,
                }}
              >
                Christopher
              </motion.h1>
            ))}

            {/* Main text */}
            <motion.h1
              className="gradient-text relative"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                textShadow: "0 0 40px rgba(0, 255, 255, 0.3)",
              }}
              animate={{
                textShadow: [
                  "0 0 40px rgba(0, 255, 255, 0.3)",
                  "0 0 60px rgba(0, 255, 255, 0.5)",
                  "0 0 40px rgba(0, 255, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Christopher
            </motion.h1>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -left-20 top-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 3, repeat: Infinity },
            }}
          >
            <Code2 className="w-12 h-12 text-cyan-400/30" />
          </motion.div>
          <motion.div
            className="absolute -right-20 top-1/2 -translate-y-1/2"
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 2.5, repeat: Infinity },
            }}
          >
            <Zap className="w-12 h-12 text-blue-400/30" />
          </motion.div>
        </div>

        {/* Animated role text */}
        <motion.div
          className="mb-12 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "Fullstack Developer",
              "•",
              "Web3 Developer",
              "•",
              "UI Designer",
            ].map((text, i) => (
              <motion.span
                key={i}
                className={
                  text === "•"
                    ? "text-cyan-400"
                    : "text-gray-400"
                }
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1 + i * 0.1,
                  duration: 0.5,
                }}
              >
                {text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline with typewriter effect */}
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Crafting exceptional digital experiences with clean
          code and stunning design. Turning ideas into reality,
          one pixel at a time.
        </motion.p>

        {/* CTA Buttons with advanced animations */}
        <motion.div
          className="flex gap-6 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setCursorVariant("hover")}
            onHoverEnd={() => setCursorVariant("default")}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="relative px-8 py-6 text-lg overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, #00FFFF, #007AFF)",
                color: "#0D0D0D",
              }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setCursorVariant("hover")}
            onHoverEnd={() => setCursorVariant("default")}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="relative px-8 py-6 text-lg glass-card-strong border-cyan-400/50 text-cyan-400 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">
                Get In Touch
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating stats cards */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {[
            { label: "Projects", value: "50+", icon: Code2 },
            {
              label: "Happy Clients",
              value: "30+",
              icon: Star,
            },
            { label: "Years Exp", value: "5+", icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card-strong rounded-2xl p-6 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
              <p className="gradient-text text-2xl mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
        >
          <span className="text-gray-500 text-sm">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}