"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Sparkles, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
    "Full feature access",
  ];

  const stats = [
    { value: "500+", label: "Companies", delay: 0 },
    { value: "50K+", label: "Hires Made", delay: 0.1 },
    { value: "10M+", label: "Candidates Screened", delay: 0.2 },
    { value: "4.9★", label: "Customer Rating", delay: 0.3 },
  ];

  return (
    <section
      id="contact"
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F3F4F6] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors"
    >
      {/* Enhanced background decoration with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-light-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-3/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-accent-2/10 rounded-full blur-3xl"
        />
      </div>

      {/* Refined grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          {/* Enhanced Badge with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-[#3B82F6]/10 dark:bg-white/10 backdrop-blur-md border border-[#3B82F6]/30 dark:border-white/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-lg shadow-accent-1/10"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-1 animate-pulse" />
            <span className="text-[#3B82F6] dark:text-white/90 text-xs sm:text-sm font-medium tracking-tight">
              Join 500+ companies hiring smarter with AI
            </span>
          </motion.div>

          {/* Headline with refined animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
          >
            Ready to Hire{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
                Better, Faster?
              </span>
              {/* Subtle underline decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-accent-1/50 via-accent-2/50 to-accent-3/50 rounded-full origin-left"
              />
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#737373] dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-4 sm:px-0"
          >
            Start your free trial today and experience the future of recruiting.
            No setup fees, no long-term contracts.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
          >
            <a
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:shadow-2xl hover:shadow-[#3B82F6]/25 dark:hover:shadow-white/25 hover:scale-105 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-light-primary relative z-10" />
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>

            <a
              href="#"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10 dark:bg-white/5 dark:hover:bg-white/10 text-[#3B82F6] dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-[#3B82F6]/30 dark:border-white/20 hover:border-[#3B82F6]/50 dark:hover:border-white/40 transition-all backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>Schedule Demo</span>
            </a>
          </motion.div>

          {/* Features list with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 text-[#737373] dark:text-gray-400 group text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="group-hover:text-[#404040] dark:group-hover:text-gray-300 transition-colors">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Stats strip with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-gray-200 dark:border-white/10 relative"
        >
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-accent-1 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.9 + stat.delay,
                  type: "spring",
                  stiffness: 200,
                }}
                className="group text-center relative"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-accent-1/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl dark:blur-xl" />
                
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] dark:text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-[#737373] dark:text-gray-400 group-hover:text-[#404040] dark:group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>

                {/* Divider (hide on last item on desktop) */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 xl:-right-8 w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 sm:mt-14 md:mt-16 h-0.5 sm:h-1 w-full max-w-xs sm:max-w-md mx-auto bg-gradient-to-r from-transparent via-accent-1/30 to-transparent rounded-full"
        />
      </div>
    </section>
  );
}