"use client";

import { Linkedin, Twitter, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  Resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "API Reference", href: "#api" },
    { name: "Status", href: "#status" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Mail, href: "#", label: "Email", color: "#EA4335" },
];

export default function Footer() {
  return (
    <footer className="relative w-full max-w-full overflow-x-hidden bg-white dark:bg-[#000000] text-[#000000] dark:text-white overflow-hidden transition-colors">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3B82F6] opacity-[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#3B82F6] opacity-[0.04] rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px),
                           linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Newsletter Section */}
        <div className="border-b border-gray-200 dark:border-[#404040]/30 py-12 sm:py-14 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" />
              <span className="text-xs sm:text-sm font-medium text-[#3B82F6]">
                Stay Updated
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#000000] via-[#404040] to-[#737373] dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
            >
              Join 2,000+ hiring teams
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#737373] mb-6 sm:mb-8 text-base sm:text-lg px-4 sm:px-0"
            >
              Get weekly insights on AI recruiting and exclusive tips
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-4 sm:px-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-[#F3F4F6] dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#404040]/50 rounded-full text-[#000000] dark:text-white placeholder:text-[#737373] focus:outline-none focus:border-[#3B82F6] transition-colors text-sm sm:text-base"
              />
              <button
                type="submit"
                className="group bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 text-sm sm:text-base"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-2"
            >
              <Link href="/" className="inline-flex items-center gap-2 sm:gap-2.5 mb-4 sm:mb-6 group">
                
                <span className="text-lg sm:text-xl font-bold text-[#000000] dark:text-white">RecruiterAI</span>
              </Link>

              <p className="text-[#737373] mb-6 sm:mb-8 max-w-xs text-xs sm:text-sm leading-relaxed">
                AI-powered recruiting platform that automates your entire hiring
                workflow. Hire faster, hire better.
              </p>

              {/* Social Links with Hover Effects */}
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="group relative w-10 h-10 sm:w-11 sm:h-11 bg-[#F3F4F6] dark:bg-[#1A1A1A] hover:bg-[#3B82F6] border border-gray-300 dark:border-[#404040]/30 hover:border-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#3B82F6] opacity-0 group-hover:opacity-10 transition-opacity" />
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:scale-110 text-[#737373] dark:text-white group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
              >
                <h4 className="font-semibold mb-4 sm:mb-5 text-[#000000] dark:text-white text-xs sm:text-sm tracking-tight relative inline-block">
                  {category}
                  <div className="absolute -bottom-2 left-0 w-6 sm:w-8 h-0.5 bg-[#3B82F6] rounded-full" />
                </h4>
                <ul className="space-y-2.5 sm:space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group text-[#737373] hover:text-[#3B82F6] transition-colors text-xs sm:text-sm inline-flex items-center gap-1.5"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-y border-gray-200 dark:border-[#404040]/30 py-6 sm:py-8 mb-6 sm:mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-[#737373]">
                  99.9% Uptime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F3F4F6] dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#404040]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-[#737373]">
                  SOC 2 Certified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F3F4F6] dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#404040]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 9.5a1.5 1.5 0 113 0v.5h1a.5.5 0 010 1h-5a.5.5 0 010-1h1v-.5z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-[#737373]">
                  GDPR Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F3F4F6] dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#404040]/30 rounded flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-[#737373]">
                  256-bit Encryption
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-8"
          >
            <p className="text-[#737373] text-xs sm:text-sm">
              © 2026 RecruiterAI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="#privacy"
                className="text-[#737373] hover:text-[#3B82F6] transition-colors text-xs sm:text-sm relative group"
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all" />
              </Link>
              <Link
                href="#terms"
                className="text-[#737373] hover:text-[#3B82F6] transition-colors text-xs sm:text-sm relative group"
              >
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all" />
              </Link>
              <Link
                href="#cookies"
                className="text-[#737373] hover:text-[#3B82F6] transition-colors text-xs sm:text-sm relative group"
              >
                Cookies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom border gradient */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-50" />
    </footer>
  );
}