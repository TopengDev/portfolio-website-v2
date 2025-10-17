import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, Play, MessageCircle, ThumbsUp, Award } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    company: 'TechStart Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    quote: 'Christopher delivered an exceptional product that exceeded our expectations. His attention to detail and technical expertise made our vision a reality. The Web3 integration was seamless and the UI is absolutely stunning.',
    rating: 5,
    project: 'DeFi Platform',
    color: '#00FFFF',
    metrics: {
      delivery: 'On Time',
      quality: '5/5',
      communication: 'Excellent',
    },
    tags: ['Web3', 'UI/UX', 'React'],
  },
  {
    name: 'Michael Chen',
    role: 'CTO at DataFlow',
    company: 'DataFlow Analytics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    quote: 'Working with Christopher was a game-changer for our platform. He not only built our entire analytics dashboard but also provided valuable insights that improved our product strategy. His fullstack expertise is unmatched.',
    rating: 5,
    project: 'Analytics Dashboard',
    color: '#007AFF',
    metrics: {
      delivery: 'Early',
      quality: '5/5',
      communication: 'Outstanding',
    },
    tags: ['Fullstack', 'Analytics', 'Performance'],
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager at Innovate',
    company: 'Innovate Labs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    quote: 'His ability to translate complex requirements into elegant solutions is remarkable. The dashboard he built has become the cornerstone of our operations. Christopher is a true professional who goes above and beyond.',
    rating: 5,
    project: 'Enterprise Dashboard',
    color: '#9D00FF',
    metrics: {
      delivery: 'On Time',
      quality: '5/5',
      communication: 'Great',
    },
    tags: ['Enterprise', 'Real-time', 'NestJS'],
  },
  {
    name: 'David Park',
    role: 'Founder at CloudSync',
    company: 'CloudSync',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    quote: "Christopher's work ethic and commitment to quality are outstanding. He completely transformed our product vision into a beautiful, functional application. The smart contract integration he implemented is flawless.",
    rating: 5,
    project: 'NFT Marketplace',
    color: '#FF3D71',
    metrics: {
      delivery: 'Early',
      quality: '5/5',
      communication: 'Perfect',
    },
    tags: ['NFT', 'Solidity', 'IPFS'],
  },
  {
    name: 'Lisa Anderson',
    role: 'Design Director',
    company: 'Creative Studio',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    quote: 'As a designer, I appreciate Christopher\'s eye for detail and his ability to bring designs to life pixel-perfectly. His animations and micro-interactions add so much polish to every project. Truly exceptional work!',
    rating: 5,
    project: 'Design System',
    color: '#00D9FF',
    metrics: {
      delivery: 'On Time',
      quality: '5/5',
      communication: 'Excellent',
    },
    tags: ['UI/UX', 'Design', 'Animation'],
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      next();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.08) 1px, transparent 0)`,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ 
          background: `radial-gradient(circle, ${currentTestimonial.color}, transparent 70%)`,
          top: '20%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Client Feedback</span>
          </motion.div>
          
          <h2 className="gradient-text mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Testimonials
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Client list */}
          <div className="lg:col-span-1 space-y-4">
            <motion.div
              className="glass-card-strong rounded-2xl p-6 noise-texture"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white">Trusted By</h3>
              </div>
              
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <motion.button
                    key={index}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      index === currentIndex
                        ? 'glass-card-strong'
                        : 'glass-card hover:glass-card-strong'
                    }`}
                    onClick={() => {
                      goTo(index);
                      setAutoPlay(false);
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      border: index === currentIndex 
                        ? `2px solid ${testimonial.color}40`
                        : '2px solid transparent',
                    }}
                  >
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {index === currentIndex && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: `0 0 20px ${testimonial.color}80`,
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                    {index === currentIndex && (
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: testimonial.color }}
                        layoutId="activeTestimonial"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Clients', value: '30+', icon: ThumbsUp },
                  { label: 'Rating', value: '5.0', icon: Star },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-2xl gradient-text mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Main testimonial card */}
          <div className="lg:col-span-2">
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100, rotateY: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100, rotateY: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  className="glass-card-strong rounded-3xl overflow-hidden noise-texture relative"
                  style={{
                    boxShadow: `0 0 60px ${currentTestimonial.color}30`,
                  }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: `conic-gradient(from 0deg, ${currentTestimonial.color}, transparent, ${currentTestimonial.color})`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-[2px] bg-[#0D0D0D] glass-card-strong rounded-3xl" />

                  <div className="relative z-10 p-12">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={currentTestimonial.avatar}
                            alt={currentTestimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-2"
                            style={{ borderColor: `${currentTestimonial.color}60` }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              boxShadow: `0 0 30px ${currentTestimonial.color}60`,
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-white mb-1">{currentTestimonial.name}</h4>
                          <p className="text-sm text-gray-400 mb-2">{currentTestimonial.role}</p>
                          <div className="flex gap-1">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: i * 0.1, type: 'spring' }}
                              >
                                <Star
                                  className="w-4 h-4 fill-current"
                                  style={{ color: currentTestimonial.color }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote icon */}
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      >
                        <Quote 
                          className="w-16 h-16 opacity-20" 
                          style={{ color: currentTestimonial.color }}
                        />
                      </motion.div>
                    </div>

                    {/* Quote */}
                    <motion.p
                      className="text-gray-200 leading-relaxed mb-8"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{currentTestimonial.quote}"
                    </motion.p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(currentTestimonial.metrics).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          className="glass-card rounded-xl p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ 
                            scale: 1.05, 
                            background: `${currentTestimonial.color}20` 
                          }}
                        >
                          <p className="text-xs text-gray-400 mb-1 capitalize">{key}</p>
                          <p 
                            className="font-medium"
                            style={{ color: currentTestimonial.color }}
                          >
                            {value}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentTestimonial.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 rounded-full glass-card text-sm text-gray-300"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{
                            scale: 1.1,
                            background: `${currentTestimonial.color}20`,
                            color: currentTestimonial.color,
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project badge */}
                    <div className="flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                      <span className="text-xs text-gray-500">Project: </span>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: currentTestimonial.color }}
                      >
                        {currentTestimonial.project}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    prev();
                    setAutoPlay(false);
                  }}
                  className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 rounded-full w-12 h-12 group"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                  }}
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        goTo(index);
                        setAutoPlay(false);
                      }}
                      className={`rounded-full transition-all ${
                        index === currentIndex ? 'w-12' : 'w-3'
                      } h-3`}
                      style={{
                        background:
                          index === currentIndex
                            ? `linear-gradient(90deg, ${testimonials[index].color}, ${testimonials[index].color}80)`
                            : 'rgba(255, 255, 255, 0.2)',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    next();
                    setAutoPlay(false);
                  }}
                  className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 rounded-full w-12 h-12 group"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                  }}
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Auto-play toggle */}
              <div className="flex justify-center mt-6">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-gray-400 hover:text-white transition-colors"
                  onClick={() => setAutoPlay(!autoPlay)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {autoPlay ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <Play className="w-4 h-4" />
                      </motion.div>
                      <span>Auto-play enabled</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Enable auto-play</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
