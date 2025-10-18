import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Calendar,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "topengdev@outlook.com",
    href: "mailto:topengdev@outlook.com",
    color: "#00FFFF",
    description: "Best for detailed inquiries",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/christopher-indrawan-dev",
    href: "https://linkedin.com/in/christopher-indrawan-dev",
    color: "#007AFF",
    description: "Professional networking",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/topengdev",
    href: "https://github.com/topengdev",
    color: "#00D9FF",
    description: "Check out my work",
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    value: "Book a meeting",
    href: "#",
    color: "#9D00FF",
    description: "Let's discuss your project",
  },
];

const availability = [
  { icon: Clock, label: "Response Time", value: "< 24 hours" },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia (GMT+7)",
  },
  {
    icon: Zap,
    label: "Availability",
    value: "Open for projects",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<
    string | null
  >(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">
              Get in Touch
            </span>
          </motion.div>

          <h2
            className="gradient-text mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Let's Work Together
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss
            opportunities? I'd love to hear from you. Let's
            create something amazing together.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods - Left Column */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability Card */}
            <div className="glass-card-strong rounded-3xl p-6 noise-texture relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-cyan-400 mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Availability
                </h3>

                <div className="space-y-4">
                  {availability.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <item.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">
                          {item.label}
                        </p>
                        <p className="text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={
                    method.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block glass-card-strong rounded-2xl p-4 noise-texture group hover:scale-105 transition-all relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${method.color}10, transparent)`,
                    }}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div
                      className="p-3 rounded-xl glass-card-subtle"
                      style={{
                        background: `${method.color}20`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon
                        className="w-5 h-5"
                        style={{ color: method.color }}
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium">
                        {method.title}
                      </p>
                      <p className="text-gray-400 text-sm truncate">
                        {method.value}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                className="absolute -inset-0.5 rounded-3xl opacity-75"
                style={{
                  background:
                    "linear-gradient(90deg, #00FFFF, #007AFF, #9D00FF, #00FFFF)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Form Container */}
              <div className="relative glass-card-strong rounded-3xl p-8 md:p-12 noise-texture overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-xl rounded-3xl z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <motion.div
                          className="inline-flex p-4 rounded-full bg-green-500/20 mb-4"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <CheckCircle2 className="w-16 h-16 text-green-400" />
                        </motion.div>
                        <h3 className="text-white text-2xl mb-2">
                          Message Sent!
                        </h3>
                        <p className="text-gray-400">
                          I'll get back to you soon.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-6"
                >
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Name
                      </label>
                      <div className="relative">
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() =>
                            setFocusedField("name")
                          }
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          required
                          className="bg-white/5 border-white/10 focus:border-cyan-400 text-white placeholder:text-gray-500 transition-all"
                        />
                        <AnimatePresence>
                          {focusedField === "name" && (
                            <motion.div
                              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg -z-10 blur"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() =>
                            setFocusedField("email")
                          }
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@example.com"
                          required
                          className="bg-white/5 border-white/10 focus:border-cyan-400 text-white placeholder:text-gray-500 transition-all"
                        />
                        <AnimatePresence>
                          {focusedField === "email" && (
                            <motion.div
                              className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg -z-10 blur"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("subject")
                        }
                        onBlur={() => setFocusedField(null)}
                        placeholder="Project Inquiry"
                        required
                        className="bg-white/5 border-white/10 focus:border-cyan-400 text-white placeholder:text-gray-500 transition-all"
                      />
                      <AnimatePresence>
                        {focusedField === "subject" && (
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg -z-10 blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("message")
                        }
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="bg-white/5 border-white/10 focus:border-cyan-400 text-white placeholder:text-gray-500 resize-none transition-all"
                      />
                      <AnimatePresence>
                        {focusedField === "message" && (
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-lg -z-10 blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-medium py-6 transition-all"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Sparkles className="w-5 h-5" />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
