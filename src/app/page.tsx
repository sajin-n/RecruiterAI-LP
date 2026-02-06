import {
  Navbar,
  Footer,
  Hero,
  HowItWorks,
  ImpactResults,
  HireFromAnywhere,
  Testimonials,
  FAQ,
  FinalCTA,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-dark-primary-bg transition-colors">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ImpactResults />
      <HireFromAnywhere />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
