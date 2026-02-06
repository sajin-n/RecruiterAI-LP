"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { name: "Platform", href: "#features", hasDropdown: false },
  { name: "Solutions", href: "#how-it-works", hasDropdown: false },
  { name: "Resources", href: "#results", hasDropdown: false },
  { name: "Company", href: "#testimonials", hasDropdown: false },
];

const mobileNavCards = [
  {
    label: "Product",
    bgColor: "#1A0B2E",
    textColor: "#fff",
    links: [
      { label: "Platform", href: "#features", ariaLabel: "Platform features" },
      { label: "Solutions", href: "#how-it-works", ariaLabel: "Our solutions" },
    ]
  },
  {
    label: "Learn",
    bgColor: "#2D1B4E",
    textColor: "#fff",
    links: [
      { label: "Resources", href: "#results", ariaLabel: "Resources" },
      { label: "Company", href: "#testimonials", ariaLabel: "About company" },
    ]
  },
  {
    label: "Get Started",
    bgColor: "#3F2C5F",
    textColor: "#fff",
    links: [
      { label: "Login", href: "#contact", ariaLabel: "Login to account" },
      { label: "Sign up", href: "#contact", ariaLabel: "Create account" },
      { label: "Book a demo", href: "#contact", ariaLabel: "Schedule a demo" },
    ]
  }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = mobileNavRef.current;
    if (!navEl) return 280;

    const contentEl = navEl.querySelector('.mobile-nav-content') as HTMLElement;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.height = 'auto';

      const contentHeight = contentEl.scrollHeight;
      const padding = 16;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.height = wasHeight;

      return contentHeight + padding;
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = mobileNavRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 0, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease: 'power3.out'
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.4, 
      ease: 'power3.out', 
      stagger: 0.08 
    }, '-=0.2');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  const toggleMobileMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl shadow-sm border-b border-white/10 dark:border-white/5"
      style={{ 
        backgroundColor: isDark ? 'rgba(64, 64, 64, 0.1)' : `${getDarkColor('#D0BCFF')}4D` // 4D = 30% opacity
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo - Desktop: Link, Mobile: Toggle Theme */}
          <div className="flex items-center gap-2.5 group">
            <Link href="/" className="hidden lg:flex items-center gap-2.5">
              <div className="w-9 h-9 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group-hover:bg-black/20 dark:group-hover:bg-white/20 group-hover:scale-105">
                <div className="w-5 h-5 bg-black dark:bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                RecruiterAI
              </span>
            </Link>
            {/* Mobile: Logo with theme toggle */}
            <button 
              onClick={toggleTheme}
              className="lg:hidden flex items-center gap-2.5 cursor-pointer"
              aria-label="Toggle theme"
            >
              <div className="w-9 h-9 bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group-hover:bg-black/20 dark:group-hover:bg-white/20 group-hover:scale-105">
                <div className="w-5 h-5 bg-black dark:bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                RecruiterAI
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all font-medium text-sm px-4 py-2 rounded-lg group"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className="w-5 h-5 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              href="#contact"
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all font-semibold text-sm px-4 py-2 rounded-lg"
            >
              Log in
            </Link>
            <Link
              href="#contact"
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all font-semibold text-sm px-4 py-2 rounded-lg"
            >
              Sign up
            </Link>
            <Link
              href="#contact"
              className="text-black hover:text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-xl hover:scale-105"
              style={{
                background: isDark 
                  ? `linear-gradient(to right, ${getDarkColor('#D0BCFF')}, ${getDarkColor('#B197FC')})`
                  : `linear-gradient(to right, #D0BCFF, #B197FC)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark
                  ? `linear-gradient(to right, ${getDarkColor('#B197FC')}, ${getDarkColor('#D0BCFF')})`
                  : `linear-gradient(to right, #B197FC, #D0BCFF)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark
                  ? `linear-gradient(to right, ${getDarkColor('#D0BCFF')}, ${getDarkColor('#B197FC')})`
                  : `linear-gradient(to right, #D0BCFF, #B197FC)`;
              }}
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden group h-10 w-10 flex flex-col items-center justify-center cursor-pointer gap-[6px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-black/10 dark:hover:bg-white/10"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
          >
            <div
              className={`w-[24px] h-[2px] bg-current transition-[transform,opacity] duration-300 ease-out ${
                isOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`w-[24px] h-[2px] bg-current transition-[transform,opacity] duration-300 ease-out ${
                isOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Card Navigation */}
      <div className="lg:hidden">
        <div
          ref={mobileNavRef}
          className="mobile-nav-container overflow-hidden will-change-[height]"
          style={{ height: 0 }}
        >
          <div
            className={`mobile-nav-content px-6 pb-4 flex flex-col gap-3 ${
              isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }`}
            aria-hidden={!isExpanded}
          >
            {mobileNavCards.map((card, idx) => (
              <div
                key={`${card.label}-${idx}`}
                className="nav-card select-none relative flex flex-col gap-3 p-4 rounded-xl min-h-[80px] backdrop-blur-sm border border-white/10"
                ref={setCardRef(idx)}
                style={{ backgroundColor: card.bgColor, color: card.textColor }}
              >
                <div className="nav-card-label font-semibold tracking-tight text-lg">
                  {card.label}
                </div>
                <div className="nav-card-links flex flex-col gap-2">
                  {card.links?.map((link, i) => (
                    <Link
                      key={`${link.label}-${i}`}
                      className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-sm font-medium"
                      href={link.href}
                      aria-label={link.ariaLabel}
                      onClick={toggleMobileMenu}
                    >
                      <GoArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}