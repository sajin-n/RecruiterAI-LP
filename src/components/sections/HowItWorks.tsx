"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import {
  FileText,
  Brain,
  Mail,
  Calendar,
  Clock,
  Video,
  CheckCircle,
  XCircle,
  Send,
  UserPlus,
  Users,
  RefreshCw,
  Zap,
  ChevronDown,
} from "lucide-react";

// Dark mode color equivalents
const getDarkColor = (lightColor: string, isDark: boolean) => {
  if (!isDark) return lightColor;
  
  const colorMap: Record<string, string> = {
    "#A5D8FF": "#5B9BD5", // Light blue → Darker blue
    "#D0BCFF": "#9B7EDE", // Light purple → Darker purple
    "#B197FC": "#8B6FD9", // Light violet → Darker violet
  };
  
  return colorMap[lightColor] || lightColor;
};

const workflows = [
  {
    id: 1,
    title: "Screening & Scheduling",
    subtitle: "From application to interview, fully automated",
    benefit: "Screen 250+ applications in minutes vs. 8 hours manually",
    accentColor: "#A5D8FF",
    steps: [
      {
        icon: FileText,
        title: "New Application",
        description: "Candidate submits resume",
        type: "start",
      },
      {
        icon: Brain,
        title: "AI Resume Screening",
        description: "Ranks top 20% of candidates",
        type: "process",
      },
      {
        icon: Mail,
        title: "Auto-send Questions",
        description: "Screening questions via email",
        type: "process",
      },
      {
        title: "Score > 75%?",
        type: "decision",
        branches: [
          {
            label: "YES",
            icon: Calendar,
            title: "Auto-schedule Interview",
            description: "Calendar link sent",
          },
          {
            label: "NO",
            icon: Mail,
            title: "Thank You Email",
            description: "Keep in talent pool",
          },
        ],
      },
      {
        icon: Clock,
        title: "Send Reminder",
        description: "24 hours before interview",
        type: "end",
      },
    ],
  },
  {
    id: 2,
    title: "Multi-Stage Interviews",
    subtitle: "Intelligent interview progression",
    benefit: "Reduce time-to-hire from 42 days to 12 days",
    accentColor: "#D0BCFF",
    steps: [
      {
        icon: CheckCircle,
        title: "Interview Accepted",
        description: "Candidate confirms attendance",
        type: "start",
      },
      {
        icon: Video,
        title: "AI Video Interview",
        description: "Technical screening",
        type: "process",
      },
      {
        icon: Brain,
        title: "AI Scores Responses",
        description: "Custom rubric applied",
        type: "process",
      },
      {
        title: "Score > 80%?",
        type: "decision",
        branches: [
          {
            label: "YES",
            icon: Calendar,
            title: "Schedule Round 2",
            description: "With hiring manager",
          },
          {
            label: "NO",
            icon: XCircle,
            title: "Auto-rejection",
            description: "With feedback",
          },
        ],
      },
      {
        icon: Send,
        title: "Send Offer Letter",
        description: "Welcome kit included",
        type: "end",
      },
    ],
  },
  {
    id: 3,
    title: "Talent Pipeline",
    subtitle: "Re-engage qualified candidates automatically",
    benefit: "Build a qualified talent pipeline - never start from zero",
    accentColor: "#B197FC",
    steps: [
      {
        icon: UserPlus,
        title: "Borderline Candidate",
        description: "Scored 60-74%",
        type: "start",
      },
      {
        icon: Users,
        title: "Add to Future Talent",
        description: "Database for nurturing",
        type: "process",
      },
      {
        icon: Clock,
        title: "Wait 3 Months",
        description: "Automated patience",
        type: "process",
      },
      {
        title: "New Position?",
        type: "decision",
        branches: [
          {
            label: "YES",
            icon: Mail,
            title: "Re-engagement Email",
            description: "Personalized outreach",
          },
          {
            label: "NO",
            icon: RefreshCw,
            title: "Check Next Quarter",
            description: "Automated follow-up",
          },
        ],
      },
      {
        icon: Zap,
        title: "Fast-track Interview",
        description: "Skip initial screening",
        type: "end",
      },
    ],
  },
];

interface Step {
  type: string;
  title?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  branches?: Array<{ icon: React.ComponentType<{ className?: string }>; label: string; title: string; description: string }>;
}

const StepCard = ({
  step,
  accentColor,
  isActive,
  delay,
}: {
  step: Step;
  accentColor: string;
  isActive: boolean;
  delay: number;
}): JSX.Element => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(accentColor, isDark);
  if (step.type === "decision") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration: 0.5 }}
        className="relative"
      >
        {/* Decision point */}
        <div className="flex items-center justify-center mb-6">
          <div
            className="relative px-6 py-3 rounded-2xl font-bold text-sm text-white shadow-lg dark:shadow-md"
            style={{ 
              backgroundColor: displayColor,
              boxShadow: isDark ? `0 4px 12px -4px ${displayColor}` : `0 8px 24px -8px ${displayColor}`,
            }}
          >
            {step.title}
          </div>
        </div>

        {/* Branches */}
        <div className="grid grid-cols-2 gap-4">
          {step.branches?.map((branch: Step['branches'][number], idx: number) => {
            const Icon = branch.icon;
            const isYes = branch.label === "YES";
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: delay + 0.2, duration: 0.4 }}
                className="group relative"
              >
                {/* Branch label */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md z-10 ${
                    isYes ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                >
                  {branch.label}
                </div>

                {/* Branch card */}
                <div
                  className={`relative overflow-hidden rounded-xl p-4 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl ${
                    isYes
                      ? "bg-gradient-to-br from-emerald-50 to-white border-emerald-400"
                      : "bg-gradient-to-br from-rose-50 to-white border-rose-300"
                  }`}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 ${
                      isYes ? "bg-emerald-500" : "bg-rose-500"
                    }`}
                  />

                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md dark:shadow-none relative z-10 ${
                      isYes ? "bg-emerald-500" : "bg-rose-500"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-gray-900 text-center mb-1 relative z-10">
                    {branch.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-600 text-center relative z-10">
                    {branch.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  const Icon = step.icon;
  const isStart = step.type === "start";
  const isEnd = step.type === "end";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group relative"
    >
      {/* Badge */}
      {(isStart || isEnd) && (
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md z-10 ${
            isStart ? "bg-emerald-500" : "bg-blue-500"
          }`}
        >
          {isStart ? "START" : "END"}
        </div>
      )}

      <div
        className={`relative overflow-hidden rounded-xl p-5 border-2 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl ${
          isStart
            ? "bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-[#1A1A1A] border-emerald-400"
            : isEnd
              ? "bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-[#1A1A1A] border-blue-400"
              : "bg-white dark:bg-[#1A1A1A]"
        }`}
        style={
          !isStart && !isEnd
            ? { borderColor: displayColor + "40" }
            : undefined
        }
      >
        {/* Glow effect */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 dark:opacity-0"
          style={{ backgroundColor: displayColor }}
        />

        <div
          className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110"
          style={{
            backgroundColor: displayColor,
            boxShadow: isDark ? 'none' : `0 8px 20px -6px ${displayColor}`,
          }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-sm font-bold text-gray-900 dark:text-white text-center mb-2 relative z-10">
          {step.title}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-300 text-center relative z-10">
          {step.description}
        </div>
      </div>
    </motion.div>
  );
};

const WorkflowCard = ({
  workflow,
  index,
  isMobile,
}: {
  workflow: (typeof workflows)[0];
  index: number;
  isMobile: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayColor = getDarkColor(workflow.accentColor, isDark);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#1A1A1A] shadow-lg hover:shadow-2xl transition-all duration-500"
        style={{
          boxShadow: isDark ? '0 10px 30px -15px rgba(0,0,0,0.3)' : `0 10px 40px -15px ${displayColor}40`,
        }}
      >
        {/* Gradient top border */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `linear-gradient(90deg, ${displayColor}, ${displayColor}cc)`,
          }}
        />

        {/* Header - Always visible, clickable on mobile */}
        <div
          className={`p-6 ${isMobile ? "cursor-pointer" : ""}`}
          onClick={() => isMobile && setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: displayColor,
                    boxShadow: isDark ? 'none' : `0 0 12px ${displayColor}80`,
                  }}
                />
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  {workflow.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{workflow.subtitle}</p>
            </div>
            
            {isMobile && (
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </div>

        {/* Content - Expandable on mobile, always visible on desktop */}
        <motion.div
          initial={isMobile ? { height: 0 } : false}
          animate={
            isMobile
              ? { height: isExpanded ? "auto" : 0 }
              : { height: "auto" }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={isMobile ? "overflow-hidden" : ""}
        >
          <div className="px-6 pb-6 pt-6">
            {/* Steps */}
            <div className="space-y-4 mb-6">
              {workflow.steps.map((step, stepIdx) => (
                <div key={stepIdx}>
                  <StepCard
                    step={step}
                    accentColor={workflow.accentColor}
                    isActive={isInView && (!isMobile || isExpanded)}
                    delay={stepIdx * 0.1}
                  />
                  
                  {/* Arrow connector */}
                  {stepIdx < workflow.steps.length - 1 && step.type !== "decision" && (
                    <div className="flex justify-center my-3">
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={
                          isInView && (!isMobile || isExpanded)
                            ? { opacity: 1, scaleY: 1 }
                            : {}
                        }
                        transition={{ delay: stepIdx * 0.1 + 0.05, duration: 0.3 }}
                        className="w-0.5 h-6 rounded-full"
                        style={{ backgroundColor: displayColor + "40" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Benefit highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView && (!isMobile || isExpanded)
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: workflow.steps.length * 0.1 + 0.2 }}
              className="relative overflow-hidden rounded-xl p-4 border-2"
              style={{
                backgroundColor: displayColor + "08",
                borderColor: displayColor + "30",
              }}
            >

              <div className="flex items-start gap-3 relative z-10">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: displayColor,
                    boxShadow: isDark ? 'none' : `0 4px 12px -4px ${displayColor}`,
                  }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white leading-relaxed pt-0.5">
                  {workflow.benefit}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function HowItWorks() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#000000] dark:via-[#0A0A0A] dark:to-[#000000] overflow-hidden transition-colors"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#A5D8FF] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#B197FC] rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-[#D0BCFF] rounded-full blur-3xl opacity-5" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px),
                           linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#3B82F6] tracking-tight">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0"
          >
            AI Recruiting Software That Works
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#B197FC', isDark)}, ${getDarkColor('#D0BCFF', isDark)})`
              }}
            >
              Like Your Own HR Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0"
          >
            Build custom hiring workflows in minutes. No coding required.
          </motion.p>
        </motion.div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {workflows.map((workflow, index) => (
            <WorkflowCard
              key={workflow.id}
              workflow={workflow}
              index={index}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}