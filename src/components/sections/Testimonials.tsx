"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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

const testimonials = [
  {
    id: 1,
    quote:
      "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
    name: "Rahul Mehta",
    title: "Founder",
    company: "TechStart Solutions",
    avatar: "RM",
    rating: 5,
    color: "#A5D8FF",
  },
  {
    id: 2,
    quote:
      "As an HR team of one, I was drowning in applications. RecruiterAI now screens 300+ resumes while I focus on the final interviews. It's like having a whole team backing me up.",
    name: "Ananya Sharma",
    title: "Head of People",
    company: "GrowthWorks",
    avatar: "AS",
    rating: 5,
    color: "#D0BCFF",
  },
  {
    id: 3,
    quote:
      "The AI interview feature saved us countless hours. Candidates love the flexibility of async video interviews, and we get consistent, unbiased assessments every time.",
    name: "Vikram Patel",
    title: "CTO",
    company: "InnovateTech Labs",
    avatar: "VP",
    rating: 5,
    color: "#B197FC",
  },
];

const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(testimonial.color, isDark);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        y: isActive ? 0 : 10,
      }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-[#1A1A1A] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border-2 ${
        isActive ? "border-gray-200 dark:border-gray-700" : "border-gray-100 dark:border-gray-800"
      }`}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 w-1 h-12 sm:h-16 rounded-r-full"
        style={{ backgroundColor: displayColor }}
      />

      {/* Rating */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-[#404040] dark:text-white text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
          style={{ 
            backgroundColor: displayColor,
            boxShadow: isDark ? 'none' : `0 2px 8px -2px ${displayColor}`,
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-[#000000] dark:text-white text-sm">
            {testimonial.name}
          </h4>
          <p className="text-[#737373] dark:text-white text-xs">
            {testimonial.title} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#F3F4F6] to-white dark:from-[#0A0A0A] dark:to-[#000000] overflow-hidden transition-colors"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#D0BCFF] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#A5D8FF] opacity-[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-xs sm:text-sm font-semibold text-[#3B82F6] tracking-tight">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0">
            Loved by{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#B197FC', isDark)}, ${getDarkColor('#D0BCFF', isDark)})`
              }}
            >
              Recruiters Worldwide
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#737373] max-w-2xl mx-auto font-light px-4 sm:px-0">
            See what hiring teams are saying about RecruiterAI
          </p>
        </motion.div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonial} isActive={true} />
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 px-4 transition-all duration-500 ${
                    index === activeIndex
                      ? "opacity-100"
                      : "opacity-0 absolute"
                  }`}
                >
                  {index === activeIndex && (
                    <TestimonialCard testimonial={testimonial} isActive={true} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              title="Previous testimonial"
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 hover:border-[#3B82F6] flex items-center justify-center text-[#737373] hover:text-[#3B82F6] transition-all shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  title={`Go to testimonial ${index + 1}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#3B82F6]"
                      : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              title="Next testimonial"
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white border-2 border-gray-200 hover:border-[#3B82F6] flex items-center justify-center text-[#737373] hover:text-[#3B82F6] transition-all shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#737373] text-xs sm:text-sm px-4 sm:px-0"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold text-[#000000] dark:text-white">4.9/5</span>
            <span>from 500+ reviews</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700" />
          <span className="text-center">Trusted by Fortune 500 & Startups alike</span>
        </motion.div>
      </div>
    </section>
  );
}