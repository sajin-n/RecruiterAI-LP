"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const faqs = [
  {
    question: "How does AI screening work?",
    answer:
      "Our AI analyzes resumes using natural language processing to understand skills, experience, and qualifications. It compares candidates against your job requirements and ranks them based on fit. The AI learns from your hiring decisions to improve recommendations over time, achieving 95%+ accuracy in identifying qualified candidates.",
  },
  {
    question: "Does RecruiterAI integrate with our existing ATS?",
    answer:
      "Yes! RecruiterAI integrates seamlessly with popular ATS platforms including Greenhouse, Lever, Workday, BambooHR, and more. We also offer API access for custom integrations. Data syncs automatically in real-time, so you never have to manually transfer information between systems.",
  },
  {
    question: "What's the pricing structure?",
    answer:
      "We offer flexible pricing based on your hiring volume. Plans start at $299/month for startups (up to 5 open roles), $599/month for growing teams (up to 20 roles), and custom enterprise pricing for larger organizations. All plans include unlimited users, AI screening, and automated scheduling. No long-term contracts required.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams are up and running within 30 minutes. Simply connect your job boards, import your existing candidates (optional), and configure your screening criteria. Our onboarding wizard guides you through each step. For enterprise clients, we offer white-glove implementation with dedicated support.",
  },
  {
    question: "Is candidate data secure?",
    answer:
      "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit using AES-256 encryption. We never sell or share candidate data. You maintain full ownership of your data, and candidates can request deletion at any time. We also offer data residency options for EU customers.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-4 sm:py-5 md:py-6 flex items-start justify-between text-left group"
      >
        <span className="font-semibold text-[#000000] dark:text-white text-base sm:text-lg pr-6 sm:pr-8 group-hover:text-[#3B82F6] transition-colors">
          {faq.question}
        </span>
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
            isOpen
              ? "bg-[#3B82F6] text-white"
              : "bg-[#F3F4F6] dark:bg-[#2A2A2A] text-[#737373] dark:text-gray-400 group-hover:bg-[#EFF6FF] dark:group-hover:bg-[#3B82F6]/20 group-hover:text-[#3B82F6]"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          ) : (
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-5 md:pb-6 text-[#737373] dark:text-white leading-relaxed pr-6 sm:pr-8 md:pr-12 text-sm sm:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Dark mode color equivalents
  const getDarkColor = (lightColor: string) => {
    if (!isDark) return lightColor;
    
    const colorMap: Record<string, string> = {
      "#A5D8FF": "#5B9BD5",
      "#D0BCFF": "#9B7EDE",
      "#B197FC": "#8B6FD9",
    };
    
    return colorMap[lightColor] || lightColor;
  };

  return (
    <section
      id="faq"
      className="relative w-full max-w-full overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#EFF6FF] dark:from-[#000000] dark:to-[#0A0A0A] overflow-hidden transition-colors"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/3 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#3B82F6] opacity-[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
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
            className="inline-flex items-center gap-2 bg-[#3B82F6]/10 backdrop-blur-sm border border-[#3B82F6]/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <span className="text-xs sm:text-sm font-semibold text-[#3B82F6] tracking-tight">
              FAQ
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] dark:text-white mb-4 sm:mb-6 leading-tight tracking-tight px-4 sm:px-0">
            Frequently Asked{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #3B82F6, ${getDarkColor('#B197FC')}, ${getDarkColor('#D0BCFF')})`
              }}
            >
              Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#737373] dark:text-white max-w-2xl mx-auto font-light px-4 sm:px-0">
            Everything you need to know about RecruiterAI
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-[#1A1A1A] rounded-xl sm:rounded-2xl shadow-sm border-2 border-gray-100 dark:border-gray-800 p-4 sm:p-6 md:p-8 lg:p-10"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center px-4 sm:px-0"
        >
          <p className="text-[#737373] dark:text-white mb-4 text-sm sm:text-base">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#2563EB] font-semibold transition-colors group text-sm sm:text-base"
          >
            Contact our support team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}