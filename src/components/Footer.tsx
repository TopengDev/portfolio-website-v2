import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  ExternalLink,
  FileText,
  Code2,
  Sparkles,
  ArrowUpRight,
  Coffee,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/topengdev',
    color: '#00FFFF',
    hoverColor: 'hover:bg-cyan-500/20',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/christopher-indrawan',
    color: '#007AFF',
    hoverColor: 'hover:bg-blue-500/20',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/topengdev',
    color: '#00D9FF',
    hoverColor: 'hover:bg-cyan-400/20',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:christopher@topengdev.com',
    color: '#9D00FF',
    hoverColor: 'hover:bg-purple-500/20',
  },
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleCopyrightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);

    // Easter egg: Click 5 times to reveal
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 5000);
        return 0;
      }
      return newCount;
    });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              className="gradient-text mb-4"
              style={{ fontSize: '2rem', fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              TopengDev
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building exceptional digital experiences with modern web technologies.
              Specializing in full-stack development, UI/UX design, and Web3 solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl glass-card-subtle ${social.hoverColor} transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl"
                    style={{ background: `${social.color}40` }}
                    transition={{ duration: 0.3 }}
                  />

                  <social.icon
                    className="w-5 h-5 relative z-10"
                    style={{ color: social.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-cyan-400 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <Coffee className="w-4 h-4" />
                  Buy Me a Coffee
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright with Easter Egg */}
          <motion.div
            className="relative cursor-pointer overflow-hidden px-6 py-3 rounded-xl glass-card-subtle hover:glass-card transition-all group"
            onClick={handleCopyrightClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-400 text-sm flex items-center gap-2">
              © 2025 Christopher Indrawan
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              All rights reserved
            </span>

            {/* Ripple effects */}
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="absolute rounded-full bg-cyan-400/30 pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 0,
                  height: 0,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  width: 200,
                  height: 200,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
              />
            ))}

            {/* Easter Egg */}
            <AnimatePresence>
              {showEasterEgg && (
                <motion.div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 glass-card-strong rounded-xl whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <span className="text-cyan-400 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    You found the secret! 🎉
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Built With */}
          <motion.div
            className="text-gray-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>Built with</span>
            <motion.span
              className="text-cyan-400 flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-4 h-4" />
              React + TypeScript
            </motion.span>
            <span>and</span>
            <motion.span
              className="text-blue-400"
              whileHover={{ scale: 1.05 }}
            >
              Motion
            </motion.span>
          </motion.div>
        </div>

        {/* Scroll to top indicator */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 p-3 rounded-xl glass-card-strong hover:glass-card group"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUpRight className="w-5 h-5 text-cyan-400 rotate-45" />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </footer>
  );
}
