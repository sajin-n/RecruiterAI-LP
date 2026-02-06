"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Zap,
  Clock,
  Video,
  FileCheck,
  Users,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Timer,
  BarChart3,
} from "lucide-react";

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

const metrics = [
  {
    metric: "Faster Screening",
    value: "10x",
    description: "AI parses and ranks 250+ applications per day vs 25 manually",
    icon: Zap,
    color: "#3B82F6",
    barHeight: 100,
  },
  {
    metric: "Faster Time-to-Hire",
    value: "70%",
    description: "Average hiring timeline drops from 42 days to just 12 days",
    icon: Clock,
    color: "#B197FC",
    barHeight: 70,
  },
  {
    metric: "Interview Capacity",
    value: "25x",
    description:
      "AI conducts 200+ automated screening interviews daily vs 8 manual calls",
    icon: Video,
    color: "#D0BCFF",
    barHeight: 95,
  },
  {
    metric: "Completion Rate",
    value: "95%",
    description:
      "Smart application forms reduce candidate drop-off dramatically",
    icon: FileCheck,
    color: "#A5D8FF",
    barHeight: 89,
  },
  {
    metric: "Qualified Apps",
    value: "89%",
    description:
      "AI job description optimizer attracts higher-quality candidate pipelines",
    icon: Users,
    color: "#3B82F6",
    barHeight: 80,
  },
  {
    metric: "Lower Costs",
    value: "80%",
    description:
      "vs traditional recruiting agencies and multiple software subscriptions",
    icon: DollarSign,
    color: "#B197FC",
    barHeight: 50,
  },
  {
    metric: "Bad Hire Reduction",
    value: "50%",
    description:
      "AI skills assessment and matching improves hiring accuracy dramatically",
    icon: ShieldCheck,
    color: "#D0BCFF",
    barHeight: 50,
  },
];

const benefitCards = [
  {
    title: "Fast Resume Processing",
    description:
      "AI-powered sorting & ranking of 500+ applications with 99.2% accuracy",
    icon: Timer,
    color: "#A5D8FF",
  },
  {
    title: "Quick Time-to-Hire",
    description:
      "70% faster: time-to-hire reduction from 45 days to 12 days on average",
    icon: TrendingUp,
    color: "#D0BCFF",
  },
  {
    title: "Massive Capacity Increase",
    description:
      "25x interview capacity: AI conducts interviews autonomously in live calls",
    icon: BarChart3,
    color: "#B197FC",
  },
  {
    title: "Less Drop-off",
    description:
      "95% application completion: smart application forms reduce drop-off",
    icon: FileCheck,
    color: "#3B82F6",
  },
  {
    title: "Better Applicants",
    description:
      "89% more qualified applicants via AI job description optimization",
    icon: Users,
    color: "#A5D8FF",
  },
  {
    title: "Fewer Mistakes",
    description:
      "50% reduction in bad hires with AI assessment and matching",
    icon: ShieldCheck,
    color: "#D0BCFF",
  },
];

const MetricBar = ({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = metric.icon;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(metric.color, isDark);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group flex flex-col items-center min-w-[90px] sm:min-w-[100px]"
    >
      {/* Value */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 200 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] dark:text-white mb-2 sm:mb-3"
      >
        {metric.value}
      </motion.div>

      {/* Bar Container */}
      <div className="relative w-14 sm:w-16 md:w-20 h-40 sm:h-48 md:h-64 bg-[#F3F4F6] dark:bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-inner">
        {/* Animated Bar */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: `${metric.barHeight}%` } : {}}
          transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 rounded-t-2xl transition-all"
          style={{ backgroundColor: displayColor }}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 -mt-5 sm:-mt-6 rounded-xl flex items-center justify-center z-10 transition-transform group-hover:scale-110"
        style={{ 
          backgroundColor: displayColor,
          boxShadow: isDark ? 'none' : `0 4px 12px -4px ${displayColor}`,
        }}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      {/* Label */}
      <div className="mt-3 sm:mt-4 text-center">
        <h4 className="font-semibold text-[#000000] dark:text-white text-xs sm:text-sm md:text-base mb-1">
          {metric.metric}
        </h4>
        <p className="text-[10px] sm:text-xs text-[#737373] mt-1 max-w-[120px] sm:max-w-[140px] leading-relaxed">
          {metric.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({
  card,
  inStack = false,
}: {
  card: (typeof benefitCards)[0];
  inStack?: boolean;
}) => {
  const Icon = card.icon;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(card.color, isDark);

  return (
    <div
      className={`group relative bg-white dark:bg-[#1A1A1A] rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-300 border-2 ${
        inStack ? 'h-full w-full p-6 sm:p-8' : 'p-4 sm:p-6 border-gray-100 hover:shadow-2xl hover:-translate-y-1'
      }`}
    >
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ 
          background: `linear-gradient(135deg, ${displayColor}20 0%, ${displayColor}05 100%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`rounded-xl sm:rounded-2xl flex items-center justify-center transition-all group-hover:scale-105 ${
            inStack ? 'w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6' : 'w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4'
          }`}
          style={{ 
            backgroundColor: displayColor,
            boxShadow: isDark ? 'none' : `0 4px 12px -4px ${displayColor}`,
          }}
        >
          <Icon className={`text-white ${inStack ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-5 h-5 sm:w-6 sm:h-6'}`} />
        </div>

        {/* Text */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight ${
          inStack ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
        }`}>
          {card.title}
        </h3>
        <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
          inStack ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
        }`}>
          {card.description}
        </p>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full opacity-5 blur-2xl transition-opacity group-hover:opacity-10"
        style={{ backgroundColor: card.color }}
      />
    </div>
  );
};

export default function ImpactResults() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="results"
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-[#EFF6FF] to-white dark:from-[#000000] dark:via-[#0A0A0A] dark:to-[#000000] overflow-hidden transition-colors"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#A5D8FF] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#B197FC] opacity-[0.03] rounded-full blur-3xl" />
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
              Impact & Results
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0">
            The RecruiterAI{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#B197FC', isDark)}, ${getDarkColor('#D0BCFF', isDark)})`
              }}
            >
              Advantage
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#737373] max-w-2xl mx-auto font-light px-4 sm:px-0">
            Real results from real companies using AI-powered recruiting
          </p>
        </motion.div>

        {/* Metrics Bar Chart */}
        <div className="mb-12 sm:mb-16 md:mb-20 overflow-hidden">
          <div className="flex justify-start sm:justify-center items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-6 px-4 scrollbar-thin">
            {metrics.map((metric, index) => (
              <MetricBar key={metric.metric} metric={metric} index={index} />
            ))}
          </div>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {benefitCards.map((card) => (
            <BenefitCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}