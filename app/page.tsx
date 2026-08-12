"use client";

import { useEffect, useState } from "react";

import Provider from "@/components/Section/Provider";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Section/Hero";
import Impact from "@/components/Section/Impact";
import Donate from "@/components/Section/Donate";
import Stories from "@/components/Section/Stories";
import Support from "@/components/Section/Support";
import Slide from "@/components/Section/Slide";
import Family from "@/components/Section/Family";
import Footer from "@/components/Section/Footer";

export default function Home() {
  const [isSupportVisible, setIsSupportVisible] = useState(false);

  useEffect(() => {
    const support = document.getElementById("support-section");

    if (!support) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSupportVisible(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(support);

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Navbar principale */}
      {!isSupportVisible && <Navbar />}

      <Hero />
      <Provider />
      <Impact />
      <Donate />
      <Stories />

      {/* Section Support */}
      <Support />

      <Slide />
      <Family />
      <Footer />
    </main>
  );
}