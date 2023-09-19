"use client";

import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import SocialsFooter from "./components/socialsfooter/SocialsFooter";
import UnderFooter from "./components/underfooter/UnderFooter";

export default function Home() {
  return (
    <main className="h-screen">
      <Hero />
      <Features />
      <About />
      <Blog />
      <Footer />
      <SocialsFooter />
      <UnderFooter />
    </main>
  );
}
