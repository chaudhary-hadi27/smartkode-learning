"use client";

import { motion } from "framer-motion";
import { Code2, Users, Zap } from "lucide-react";
import Head from "next/head";

export default function Experience() {
  const cards = [
    {
      icon: <Code2 size={28} className="text-white mb-4" aria-hidden="true" />,
      title: "Real Projects",
      desc: "Work on automation, full-stack apps, and AI-based tools — all inspired by real-world scenarios.",
    },
    {
      icon: <Users size={28} className="text-white mb-4" aria-hidden="true" />,
      title: "Expert Mentorship",
      desc: "Daily support and feedback from mentors rated 5.0 by learners for quality guidance.",
    },
    {
      icon: <Zap size={28} className="text-white mb-4" aria-hidden="true" />,
      title: "Accelerated Learning",
      desc: "A focused 2-month track that gets you job-ready faster than traditional programs.",
    },
  ];

  return (
    <>
      <Head>
        <title>SmartKode Experience | Real Projects, Mentors, Job-Ready Learning</title>
        <meta
          name="description"
          content="Explore the SmartKode experience: Build real-world AI and automation projects, get 1-on-1 mentorship, and accelerate your tech career in just 2 months."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SmartKode Experience" />
        <meta
          property="og:description"
          content="Build real-world projects, receive expert mentorship, and become job-ready fast with SmartKode's hands-on learning approach."
        />
        <meta property="og:image" content="/video/bg.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section
        id="experience"
        className="bg-black text-white py-24 px-6 text-center scroll-mt-24"
        role="region"
        aria-labelledby="experience-title"
      >
        <div className="max-w-4xl mx-auto mb-12">
          <h2 id="experience-title" className="text-4xl font-bold mb-4">
            The SmartKode Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Not just theory — we train you with mentorship, projects, and tools that matter in real jobs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#111] p-8 rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300"
              aria-labelledby={`card-${i}-title`}
            >
              {card.icon}
              <h3 id={`card-${i}-title`} className="text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>

              {card.title === "Expert Mentorship" && (
                <div className="flex justify-center mt-4" aria-label="5-star rating">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="mx-0.5"
                      role="img"
                      aria-label="Star"
                    >
                      <path d="M12 .587l3.668 7.571L24 9.748l-6 5.851L19.335 24 12 20.201 4.665 24 6 15.599 0 9.748l8.332-1.59z" />
                    </svg>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
