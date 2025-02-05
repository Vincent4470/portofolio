"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Hero />
        <TechStack />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
