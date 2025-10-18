import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Badge } from './ui/badge';
import { 
  Code2, 
  Palette, 
  Zap, 
  Sparkles, 
  Award, 
  Coffee, 
  Rocket, 
  Heart,
  Layers,
  TrendingUp,
  Users,
  Target,
  Gamepad2,
  BookOpen,
  Music,
  Plane,
  Server,
  Paintbrush,
  Database,
  Box,
  GitBranch,
  Cloud,
  Network,
  Triangle,
  FileCode2
} from 'lucide-react';

const skills = [
  { name: 'React & Next.js', level: 95, icon: Code2, color: '#00FFFF' },
  { name: 'TypeScript', level: 92, icon: Zap, color: '#007AFF' },
  { name: 'UI/UX Design', level: 90, icon: Palette, color: '#9D00FF' },
  { name: 'Node.js', level: 88, icon: Layers, color: '#00D9FF' },
  { name: 'Design Systems', level: 93, icon: Sparkles, color: '#FF3D71' },
  { name: 'Performance Optimization', level: 87, icon: TrendingUp, color: '#00FFFF' },
];

const achievements = [
  { icon: Award, label: '20+ Awards', value: 'Design Excellence' },
  { icon: Coffee, label: '1000+ Cups', value: 'Of Coffee' },
  { icon: Rocket, label: '50+ Projects', value: 'Launched' },
  { icon: Heart, label: '100%', value: 'Client Satisfaction' },
];

const interests = [
  { icon: Palette, label: 'Design', color: '#00FFFF' },
  { icon: Code2, label: 'Coding', color: '#007AFF' },
  { icon: Gamepad2, label: 'Gaming', color: '#9D00FF' },
  { icon: BookOpen, label: 'Learning', color: '#FF3D71' },
  { icon: Music, label: 'Music', color: '#00D9FF' },
  { icon: Plane, label: 'Travel', color: '#FFD60A' },
];

const techStack = [
  { name: 'React', icon: Code2, color: '#00FFFF' },
  { name: 'TypeScript', icon: FileCode2, color: '#007AFF' },
  { name: 'Next.js', icon: Triangle, color: '#EDEDED' },
  { name: 'Node.js', icon: Server, color: '#00FF00' },
  { name: 'Tailwind', icon: Paintbrush, color: '#00D9FF' },
  { name: 'Figma', icon: Palette, color: '#FF3D71' },
  { name: 'PostgreSQL', icon: Database, color: '#007AFF' },
  { name: 'Docker', icon: Box, color: '#00D9FF' },
  { name: 'Git', icon: GitBranch, color: '#FF3D71' },
  { name: 'AWS', icon: Cloud, color: '#FFD60A' },
  { name: 'GraphQL', icon: Network, color: '#9D00FF' },
  { name: 'Redis', icon: Database, color: '#FF3D71' },
];

export function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'values'>('story');

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Static background for performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-2xl"
          style={{ top: '10%', left: '10%' }}
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-blue-500/5 blur-2xl"
          style={{ bottom: '10%', right: '10%' }}
        />
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
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Get to Know Me</span>
          </motion.div>
          
          <h2 className="gradient-text mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image + Floating Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Main image container */}
              <motion.div
                className="relative w-full h-full glass-card-strong rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20" />
                
                {/* Placeholder for portrait */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                  >
                    <Code2 className="w-32 h-32 text-cyan-400/30" />
                  </motion.div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'conic-gradient(from 0deg, #00FFFF, #007AFF, #00FFFF)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-[3px] rounded-3xl bg-[#0D0D0D]" />
                </motion.div>
              </motion.div>

              {/* Floating achievement cards */}
              {achievements.map((achievement, index) => {
                const positions = [
                  { top: '5%', right: '-10%' },
                  { bottom: '30%', right: '-15%' },
                  { top: '30%', left: '-10%' },
                  { bottom: '5%', left: '-15%' },
                ];
                
                return (
                  <motion.div
                    key={achievement.label}
                    className="absolute glass-card-strong rounded-2xl p-4 cursor-pointer group"
                    style={positions[index]}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <achievement.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-cyan-400 text-sm font-medium">{achievement.label}</p>
                        <p className="text-gray-400 text-xs">{achievement.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content Tabs */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8">
              {[
                { id: 'story', label: 'My Story', icon: Sparkles },
                { id: 'skills', label: 'Skills', icon: Target },
                { id: 'values', label: 'Values', icon: Heart },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'glass-card-strong text-cyan-400'
                      : 'glass-card-subtle text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(tab.id as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="glass-card-strong rounded-3xl p-8 noise-texture relative overflow-hidden min-h-[400px]">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {activeTab === 'story' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="gradient-text mb-6" style={{ fontSize: '2rem' }}>
                      Creative Developer & Designer
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        I'm a passionate fullstack developer and UI designer with over 5 years of experience
                        crafting beautiful, functional digital products. My journey started with a curiosity
                        for how things work, which evolved into a love for creating seamless user experiences.
                      </p>
                      <p>
                        I specialize in React, Next.js, and modern web technologies, combining technical
                        expertise with design thinking to build products that users love. From concept to
                        deployment, I ensure every pixel serves a purpose.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring new design trends, contributing to
                        open-source projects, or mentoring aspiring developers.
                      </p>
                    </div>

                    {/* Quick Facts */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        { icon: Target, label: 'Detail-oriented', color: '#00FFFF' },
                        { icon: Zap, label: 'Fast learner', color: '#FFD60A' },
                        { icon: Users, label: 'Team player', color: '#9D00FF' },
                        { icon: Rocket, label: 'Problem solver', color: '#FF3D71' }
                      ].map((fact, i) => (
                        <motion.div
                          key={fact.label}
                          className="px-4 py-2 glass-card-subtle rounded-full text-sm flex items-center gap-2"
                          style={{ 
                            borderColor: `${fact.color}30`,
                            borderWidth: '1px'
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          whileHover={{ 
                            borderColor: `${fact.color}80`,
                            backgroundColor: `${fact.color}10`
                          }}
                        >
                          <fact.icon className="w-4 h-4" style={{ color: fact.color }} />
                          <span style={{ color: fact.color }}>{fact.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="gradient-text mb-6" style={{ fontSize: '2rem' }}>
                      Technical Expertise
                    </h3>
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="group cursor-pointer"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onHoverStart={() => setHoveredSkill(index)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <motion.div
                                className="p-2 rounded-lg"
                                style={{ background: `${skill.color}20` }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <skill.icon
                                  className="w-5 h-5"
                                  style={{ color: skill.color }}
                                />
                              </motion.div>
                              <span className="text-white font-medium">{skill.name}</span>
                            </div>
                            <motion.span
                              className="text-sm"
                              style={{ color: skill.color }}
                              animate={{
                                scale: hoveredSkill === index ? 1.2 : 1,
                              }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          
                          {/* Animated skill visualization */}
                          <div className="relative h-2 glass-card-subtle rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            >
                              {/* Shine effect */}
                              <motion.div
                                className="absolute inset-0"
                                style={{
                                  background: `linear-gradient(90deg, transparent, ${skill.color}60, transparent)`,
                                }}
                                animate={{
                                  x: ['-100%', '200%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'values' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="gradient-text mb-6" style={{ fontSize: '2rem' }}>
                      Core Values & Interests
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      {[
                        { title: 'Quality over Quantity', desc: 'I believe in crafting products that stand the test of time.' },
                        { title: 'Continuous Learning', desc: 'Technology evolves, and so do I. Always learning, always growing.' },
                        { title: 'User-Centric Design', desc: 'Every decision I make puts the user experience first.' },
                        { title: 'Clean Code', desc: 'Beautiful code is maintainable code. I write for humans, not just machines.' },
                      ].map((value, i) => (
                        <motion.div
                          key={value.title}
                          className="flex gap-4 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-cyan-400 mt-2"
                            whileHover={{ scale: 2 }}
                          />
                          <div>
                            <h4 className="text-white font-medium mb-1">{value.title}</h4>
                            <p className="text-gray-400 text-sm">{value.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-cyan-400 mb-4">Interests & Hobbies</h4>
                      <div className="flex flex-wrap gap-3">
                        {interests.map((interest, i) => (
                          <motion.div
                            key={interest.label}
                            className="glass-card-subtle rounded-2xl px-4 py-3 flex items-center gap-2 cursor-pointer group"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                              scale: 1.1,
                              background: `${interest.color}20`,
                            }}
                          >
                            <interest.icon className="w-5 h-5" style={{ color: interest.color }} />
                            <span className="text-sm text-gray-300">{interest.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Interactive Skills Showcase */}
        <motion.div
          className="glass-card-strong rounded-3xl p-12 noise-texture relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="gradient-text mb-4" style={{ fontSize: '2rem' }}>
                Tech Stack at a Glance
              </h3>
              <p className="text-gray-400">Technologies I work with daily</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                  }}
                >
                  <motion.div
                    className="mb-2 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <tech.icon className="w-10 h-10" style={{ color: tech.color }} />
                  </motion.div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
