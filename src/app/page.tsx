"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/Courses/CoursesSection";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setSidebarOpen(document.body.classList.contains("sidebar-open"));
    };

    updateState(); // check on mount
    const observer = new MutationObserver(updateState);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex transition-all duration-500 ease-in-out">
      {/* === Sidebar (large screen only, hidden by default) === */}
      <aside
        className={`hidden lg:block transition-all duration-500 ease-in-out ${
          sidebarOpen ? "w-1/6" : "w-0"
        } overflow-hidden`}
      >
        {/* Sidebar content is already rendered by Navbar.tsx */}
      </aside>

      {/* === Main Content === */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          sidebarOpen ? "lg:w-4/4" : "w-full"
        }`}
      >
        <Head>
          <title>SmartKode School | Courses</title>
          <meta
            name="description"
            content="Launch Your Tech Career with 2-Month Intensive Courses by SmartKode"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Hero />
        <CoursesSection />
        <Experience />
        <Testimonials />
        <Location />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
