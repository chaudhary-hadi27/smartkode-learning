"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>SmartKode Learning | Learn AI, Automation & Full Stack Dev</title>
        <meta
          name="description"
          content="Launch your tech career with SmartKode Learning. Learn AI, Automation, and Full Stack Development through real-world projects and expert guidance."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SmartKode Learning" />
        <meta
          property="og:description"
          content="Master AI, Automation, and Full Stack Development at SmartKode."
        />
        <meta property="og:image" content="/video/bg.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learn.smartkode.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartKode Learning" />
        <meta name="twitter:description" content="AI & Full Stack Bootcamp with hands-on experience." />
        <meta name="twitter:image" content="/video/bg.jpg" />
        <link rel="canonical" href="https://learn.smartkode.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SmartKode Learning",
            url: "https://learn.smartkode.io",
            logo: "https://learn.smartkode.io/dark-theme-logo.png",
            // Uncomment when ready
            // sameAs: [
            //   "https://facebook.com/smartkode",
            //   "https://twitter.com/smartkode",
            //   "https://linkedin.com/company/smartkode",
            // ],
            description:
              "SmartKode is a learning platform for AI, Automation, and Full Stack Development with real-world projects.",
          }),
        }}
      />

      <section
        id="hero"
        role="banner"
        className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
        aria-label="Hero Section"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/bg.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/video/bg-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

        <div className="relative z-20 text-center px-6 sm:px-10 py-16 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Launch Your Tech Career
          </motion.h1>

          <span className="sr-only">
            SmartKode Learning offers project-based training in AI, Automation, and Full Stack Web Development.
          </span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
          >
            Master AI, Automation, and Full Stack Development with real-world projects and expert guidance — only at{" "}
            <span className="text-white font-semibold">SmartKode Learning</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link href="#courses" aria-label="Explore Courses Section" role="link">
              <button className="w-52 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 px-6 rounded-xl transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-300">
                Explore Courses
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
