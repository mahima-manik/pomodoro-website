import Header from "@/components/Header";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FeaturesGrid from "@/components/FeaturesGrid";
import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout";
import Modal from "@/components/Modal";
import FeaturesListicle from "@/components/FeaturesListicle";
import FeaturesAccordion from "@/components/FeaturesAccordion";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion/>
        {/* <FeaturesGrid /> */}
        {/* <Pricing /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
