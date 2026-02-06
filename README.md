# RecruiterAI Landing Page

A modern, conversion-focused landing page for RecruiterAI - an AI-powered recruiting platform that automates the entire hiring workflow.

## Tech Stack

- **Framework**: Next.js 15.1.6 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.13.5
- **Advanced Animations**: GSAP 3.14.2 
- **Icons**: Lucide React, React Icons
- **Language**: TypeScript 5.7.3

## Project Structure

```
recruiter-ai/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & Tailwind imports
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Navigation bar with mobile card menu
│   │   │   └── Footer.tsx    # Footer component
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Hero section with pain point bubbles
│   │   │   ├── HowItWorks.tsx        # Flowchart automation section
│   │   │   ├── ImpactResults.tsx     # Metrics & benefits section
│   │   │   ├── HireFromAnywhere.tsx  # Platform integrations slider
│   │   │   ├── Testimonials.tsx      # Customer testimonials
│   │   │   ├── FAQ.tsx               # FAQ accordion
│   │   │   └── FinalCTA.tsx          # Final call-to-action
│   │   ├── ui/
│   │   │   ├── BounceCards.tsx       # Interactive card carousel with hover & swipe
│   │   │   └── LogoLoop.tsx          # Infinite scrolling logo slider (Tailwind CSS)
│   │   └── index.ts          # Component exports
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Theme provider for dark/light mode
│   └── lib/
│       └── utils.ts          # Utility functions
├── tailwind.config.ts        # Tailwind configuration with custom colors
├── postcss.config.js         # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies and scripts
```

## Getting Started

## Features

- ✅ **Fully Responsive Design** - Mobile-first approach with all breakpoints optimized
- ✅ **Smooth Animations** - Framer Motion for declarative animations throughout
- ✅ **Advanced Gestures** - GSAP-powered drag interactions and stack animations
- ✅ **Interactive Flowcharts** - Multi-stage workflow visualizations with expandable cards
- ✅ **Animated Metrics** - Responsive bar chart with staggered animations
- ✅ **Infinite Logo Slider** - Seamless scrolling platform integrations carousel
- ✅ **3D Effects** - WebGL-powered rotating menu with gl-matrix
- ✅ **Testimonials Carousel** - Desktop grid + mobile swipeable carousel
- ✅ **Expandable FAQ** - Smooth accordion with staggered animations
- ✅ **Mobile Card Navigation** - Glassmorphic card menu with smooth transitions
- ✅ **Dark/Light Mode** - Theme context provider for automatic theme switching
- ✅ **SEO Optimized** - Complete metadata and structured data implementation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Setup

The project uses Next.js 15 with the App Router. All environment variables are pre-configured. No additional setup needed for local development.


## Performance & Optimization

### Image Optimization
- All external images use Unsplash CDN with crop parameters
- Install Next.js Image component for local images
- Consider using WebP format for faster loading

### Bundle Size
- Framer Motion: ~40KB gzipped
- GSAP: ~35KB gzipped
- Tailwind CSS: ~10KB gzipped (with tree-shaking)
- Total: ~85KB gzipped for production

### Lighthouse Recommendations
- Add meta descriptions to each section
- Optimize font loading (system fonts are pre-optimized)
- Consider lazy loading for below-fold components
- Add image placeholders for faster perceived load time

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
⚠️ Mobile browsers: All modern versions (iOS Safari 12+, Chrome Mobile)

### Known Limitations
- CSS `text-wrap: balance` not supported in older browsers
- `-webkit-user-drag` for drag interactions (Safari specific)
- WebGL used in InfiniteMenu requires WebGL2 support

### Build for Production
```bash
npm run build
npm run start
```

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check Tailwind CSS is processing: Look for generated classes in browser DevTools

### Mobile Responsiveness Not Working
- Ensure viewport meta tag is present (auto-added by Next.js)
- Check that `overflow-x-hidden` is applied to body element
- Verify Tailwind breakpoints in `tailwind.config.ts`

### Animations Not Smooth
- Check if browser hardware acceleration is enabled
- Disable browser extensions that modify DOM
- For GSAP: Verify `useLayoutEffect` is properly cleaning up animations
- For Framer Motion: Check `AnimatePresence` is wrapping exit animations

## Contributing

We welcome contributions! Please:
1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes following project conventions
3. Test on mobile and desktop
4. Commit with clear messages
5. Push to your fork and create a Pull Request

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Format with Prettier (auto on save)
- Add comments for complex logic

## License

This project is licensed under the MIT License.

## Support

For issues, questions, or suggestions:
- Create an issue on GitHub
- Check existing issues first
- Provide reproduction steps for bugs
