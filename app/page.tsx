import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
