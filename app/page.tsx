import Header from "@/components/Header";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FeaturesGrid from "@/components/FeaturesGrid";
import Problem from "@/components/Problem";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <FeaturesGrid />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
