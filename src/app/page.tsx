import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyAlphaPhoenix from "@/components/WhyAlphaPhoenix";
import Technology from "@/components/Technology";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ManagedPortfolios from "@/components/ManagedPortfolios";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import VideoLibrary from "@/components/VideoLibrary";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import PaymentsAndTrust from "@/components/PaymentsAndTrust";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyAlphaPhoenix />
        <Technology />
        <Features />
        <Pricing />
        <ManagedPortfolios />
        <Results />
        <Testimonials />
        <Community />
        <VideoLibrary />
        <FAQ />
        <Support />
        <PaymentsAndTrust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
