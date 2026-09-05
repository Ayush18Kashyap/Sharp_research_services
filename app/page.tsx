import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Coverage from "@/components/sections/Coverage";
import WhyBGVMatters from "@/components/sections/WhyBGVMatters";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Process />
        <Industries />
        <Coverage />
        <WhyBGVMatters />
        <FAQ />
        <Contact />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
