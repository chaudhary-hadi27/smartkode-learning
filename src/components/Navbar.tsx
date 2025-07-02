"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const SIDEBAR_ANIMATION_DURATION = 400;

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("sidebar-open", next);
      return next;
    });
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove("sidebar-open");
  }, [pathname]);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 20);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        document.body.classList.remove("sidebar-open");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* === SEO Meta === */}
      <Head>
        <title>SmartKode Learning - AI & ML Courses</title>
        <meta name="description" content="Learn AI, ML, and emerging technologies at SmartKode. Hands-on experience with real-world projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* === Navbar === */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black px-4 py-4 shadow-md transition-all duration-500 ease-in-out">
        <div className="relative flex items-center justify-between">
          {/* Brand */}
          <div className="pl-4 flex items-center space-x-3 transition-all duration-500 ease-in-out">
            {scrolled ? (
              <Image
                src="/dark-theme-logo.png"
                alt="SmartKode Logo"
                width={48}
                height={48}
                priority
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            ) : (
              <>
                <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide hidden md:block">
                  SmartKode Learning
                </h1>
                <span className="sr-only">SmartKode - Learn Real-World AI Skills</span>
              </>
            )}
          </div>

          {/* Sidebar Toggle */}
          {mounted && (
            <button
              type="button"
              aria-label="Toggle sidebar"
              aria-expanded={isOpen}
              aria-controls="sidebar"
              onClick={toggleSidebar}
              className="w-6 h-6 rounded-lg border border-gray-600 flex items-center justify-center bg-transparent hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white transition-all duration-500 ease-in-out mr-4"
            >
              <div
                className={`w-px h-3 transform transition-transform duration-300 bg-white ${
                  isOpen ? "translate-x-2" : "-translate-x-2"
                }`}
              />
            </button>
          )}
        </div>
      </header>

      {/* === Sidebar === */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              id="sidebar"
              role="complementary"
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-64 bg-black text-white p-6 shadow-lg z-40"
            >
              <nav
                className="flex flex-col gap-4 mt-32 lg:mt-64"
                role="navigation"
                aria-label="Sidebar Navigation"
              >
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => {
                      toggleSidebar();
                      if (href === "/") {
                        setTimeout(() => {
                          router.push("/");
                        }, SIDEBAR_ANIMATION_DURATION);
                      }
                    }}
                    className="hover:text-gray-300 transition-all duration-300"
                    title={label}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
