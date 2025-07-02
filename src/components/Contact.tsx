"use client";

import { Mail, Phone } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Contact Us | SmartKode Learning</title>
        <meta
          name="description"
          content="Get in touch with SmartKode for course enrollment or inquiries. We're just an email or call away!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact SmartKode Learning" />
        <meta
          property="og:description"
          content="Reach out to SmartKode via email or phone for guidance, support, or joining a course."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>

      {/* 📬 Contact Section */}
      <section
        id="contact"
        className="px-6 py-20 text-center bg-black text-white scroll-mt-28"
        role="region"
        aria-labelledby="contact-heading"
      >
        <h3 id="contact-heading" className="text-4xl font-bold mb-8">
          📬 Get in Touch with SmartKode
        </h3>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-lg">
          Have questions or want to join a course? We’re always here to help.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* 📧 Email Contact */}
          <Link
            href="mailto:learning@smartkode.io"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-3 rounded-lg"
            title="Send us an email"
            aria-label="Email SmartKode"
          >
            <Mail className="w-5 h-5 text-[#00B2FF]" />
            <span className="text-white">learning@smartkode.io</span>
          </Link>

          {/* 📞 Phone Contact */}
          <Link
            href="tel:+923004479894"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition px-6 py-3 rounded-lg"
            title="Call SmartKode"
            aria-label="Call SmartKode"
          >
            <Phone className="w-5 h-5 text-[#00B2FF]" />
            <span className="text-white">+92-300 4479894</span>
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Response time: Within 24 hours — faster on weekdays.
        </p>
      </section>
    </>
  );
}
