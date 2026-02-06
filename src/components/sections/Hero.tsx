"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import BounceCards from "@/components/ui/BounceCards";

// Dark mode color equivalents
const getDarkColor = (lightColor: string, isDark: boolean) => {
  if (!isDark) return lightColor;
  
  const colorMap: Record<string, string> = {
    "#A5D8FF": "#5B9BD5",
    "#D0BCFF": "#9B7EDE",
    "#B197FC": "#8B6FD9",
  };
  
  return colorMap[lightColor] || lightColor;
};

const conversations = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Founder at TechStart",
    quote:
      "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
    color: "#A5D8FF",
    borderColor: "#7CC4F5",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Rahul M.",
    role: "Hiring Manager at GrowthCo",
    quote:
      "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
    color: "#D0BCFF",
    borderColor: "#B89EFF",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Priya S.",
    role: "CEO at InnovateLabs",
    quote:
      "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
    color: "#B197FC",
    borderColor: "#9B7AE6",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 4,
    name: "Amit T.",
    role: "Head of HR at ScaleUp",
    quote:
      "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
    color: "#3B82F6",
    borderColor: "#2563EB",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 5,
    name: "Lisa W.",
    role: "VP People at CloudNine",
    quote:
      "We spent $40k on a recruiter who sent us candidates that didn't even match the job description. Never again.",
    color: "#A5D8FF",
    borderColor: "#7CC4F5",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
  },
];

const stats = [
  { value: "10x", label: "Faster screening" },
  { value: "94%", label: "Match accuracy" },
  { value: "2.3k", label: "Active recruiters" },
];

const desktopTransforms = [
  "rotate(5deg) translate(-280px)",
  "rotate(-2deg) translate(-140px)",
  "rotate(0deg) translate(0px)",
  "rotate(3deg) translate(140px)",
  "rotate(-4deg) translate(280px)",
];

const ConversationBubble = ({
  conversation,
}: {
  conversation: (typeof conversations)[0];
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(conversation.color, isDark);
  
  return (
    <div
      className="relative w-full max-w-[320px] sm:w-[300px] rounded-xl p-4 sm:p-5 shadow-lg border-2 transition-all duration-300 hover:shadow-xl bg-white dark:bg-[#1A1A1A] dark:border-gray-800"
      style={{
        borderColor: isDark ? undefined : displayColor + "20",
      }}
    >
      {/* Vertical accent bar */}
      <div
        className="absolute top-4 left-0 w-1 h-12 rounded-r-full"
        style={{ backgroundColor: displayColor }}
      />

      {/* Profile */}
      <div className="flex items-start gap-3 mb-4 pl-3">
        <div className="relative w-10 h-10 rounded-full flex-shrink-0 shadow-md overflow-hidden ring-2 ring-white">
          <img
            src={conversation.avatar}
            alt={conversation.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 pt-0.5 flex-1">
          <h4 className="font-semibold text-[#000000] dark:text-white text-sm leading-tight truncate">
            {conversation.name}
          </h4>
          <p className="text-xs text-[#737373] dark:text-gray-400 leading-tight line-clamp-1">
            {conversation.role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-[#404040] dark:text-gray-300 text-sm leading-relaxed pl-3">
        &quot;{conversation.quote}&quot;
      </p>

      {/* Decorative corner element */}
      <div
        className="absolute bottom-3 right-3 w-6 h-6 rounded-md opacity-10"
        style={{ backgroundColor: displayColor }}
      />
    </div>
  );
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <section className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-light-primary-bg dark:bg-dark-primary-bg overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 transition-colors">
      {/* Minimalist background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#3B82F6] opacity-[0.03] dark:opacity-[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#B197FC] opacity-[0.04] dark:opacity-[0.08] rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px),
                           linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Central hero content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/60 dark:bg-dark-secondary-bg/60 backdrop-blur-md border border-[#3B82F6]/10 dark:border-accent-1/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] dark:bg-accent-1 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-tight">
              Trusted by 500+ companies
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] sm:leading-[0.95] tracking-tight px-2 sm:px-0"
          >
            Every Hire,{" "}
            <span 
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#B197FC', isDark)}, ${getDarkColor('#D0BCFF', isDark)})`
              }}
            >
              Faster and Better
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Stop losing candidates to slow processes. Intelligent screening
            that works at your pace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all overflow-hidden shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 text-gray-700 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-accent-1 px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base transition-colors group"
            >
              View Demo
              <div className="w-6 sm:w-8 h-[1px] bg-[#3B82F6] group-hover:w-8 sm:group-hover:w-12 transition-all" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3B82F6]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bounce Cards Section - Pain Point Bubbles */}
        <div className="relative flex justify-center items-center mt-8 sm:mt-12 lg:mt-0">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-8 sm:-top-12 lg:-top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase text-center px-4"
          >
            Real pain points from real hiring teams
          </motion.p>

          {/* Desktop: BounceCards with hover */}
          <div className="hidden lg:flex justify-center">
            <BounceCards
              containerWidth={1100}
              containerHeight={280}
              animationDelay={0.8}
              animationStagger={0.15}
              easeType="elastic.out(1, 0.5)"
              transformStyles={desktopTransforms}
              enableHover
            >
              {conversations.map((conversation) => (
                <ConversationBubble
                  key={conversation.id}
                  conversation={conversation}
                />
              ))}
            </BounceCards>
          </div>

          {/* Mobile: Stack with swipe interaction */}
          <div className="lg:hidden w-full flex justify-center px-4">
            <BounceCards
              containerHeight={360}
              animationDelay={0.6}
              enableHover={false}
            >
              {conversations.map((conversation) => (
                <ConversationBubble
                  key={conversation.id}
                  conversation={conversation}
                />
              ))}
            </BounceCards>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#3B82F6] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}