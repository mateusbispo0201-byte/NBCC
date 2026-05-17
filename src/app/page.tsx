import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Differentials from "@/components/sections/Differentials";
import Cases from "@/components/sections/Cases";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Philosophy />
        <Services />
        <Process />
        <Differentials />
        <Cases />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
