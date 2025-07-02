"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const testimonials = [
  {
    name: "Ali Raza",
    role: "AI Student",
    message:
      "SmartKode helped me go from zero to building AI chatbots in 2 months. The mentorship was on another level!",
    image: "/student1.jpg",  // 👈 Local image
  },
  {
    name: "Fatima Khan",
    role: "Frontend Developer",
    message:
      "The hands-on projects really boosted my confidence. I landed an internship right after the course.",
    image: "/student2.jpeg",  // 👈 Local image
  },
  {
    name: "Zain Sheikh",
    role: "Data Science Enthusiast",
    message:
      "Their teaching style is very practical and focused. I finally understand real-world Python and ML.",
    image: "/student3.jpg",  // 👈 Local image
  },
];

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Student Testimonials | SmartKode Learning</title>
        <meta
          name="description"
          content="Hear directly from SmartKode students about how they mastered AI, web development, and landed tech roles with real-world projects and mentorship."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Student Testimonials | SmartKode" />
        <meta
          property="og:description"
          content="Discover what learners are saying about their journey at SmartKode — from beginners to job-ready developers."
        />
        <meta property="og:image" content="/video/bg.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section
        id="testimonials"
        className="bg-black py-24 px-6 text-white scroll-mt-25"
        role="region"
        aria-label="Testimonials Section"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-400 text-lg">
            Real feedback from learners who trusted SmartKode to start their tech journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 shadow-md hover:shadow-lg transition-all"
              aria-label={`Testimonial from ${testimonial.name}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  width={50}
                  height={50}
                  className="rounded-full border border-gray-700"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic">
                &quot;{testimonial.message}&quot;
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
