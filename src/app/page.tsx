import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Audiences } from "@/components/sections/Audiences";
import { Creatives } from "@/components/sections/Creatives";
import { DownloadCta } from "@/components/sections/DownloadCta";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Moodboard } from "@/components/sections/Moodboard";
import { Ticker } from "@/components/sections/Ticker";

export default function Home() {
  return (
    <>
      <a
        href="#browse"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-on-primary"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Moodboard />
        <Features />
        <HowItWorks />
        <Creatives />
        <Audiences />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
