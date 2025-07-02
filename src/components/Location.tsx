"use client";

import Link from "next/link";
import Head from "next/head";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <>
      <Head>
        <title>Our Location | Visit SmartKode Campus in Lahore</title>
        <meta
          name="description"
          content="Visit SmartKode's campus in Lahore, where creativity meets code. Check out our location on Google Maps."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Visit SmartKode Campus" />
        <meta
          property="og:description"
          content="Explore our Lahore campus and see where innovation happens. View on Google Maps."
        />
        <meta property="og:type" content="place" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section
        id="location"
        className="px-6 py-20 text-center bg-black text-white scroll-mt-24"
        role="region"
        aria-labelledby="location-title"
      >
        <h3 id="location-title" className="text-4xl font-bold mb-6">
          Visit Our Campus
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Our campus is located in Lahore — come explore the space where
          creativity and technology unite!
        </p>

        <Link
          href="https://www.google.com/maps/place/31%C2%B035'47.7%22N+74%C2%B027'26.7%22E"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#00B2FF] transition-all duration-300 hover:scale-[1.01] group"
          title="Click to view on Google Maps"
        >
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13601.713780881084!2d74.457405!3d31.596585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM1JzQ3LjciTiA3NMKwMjcnMjYuNyJF!5e0!3m2!1sen!2s!4v1718728000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-full border-none rounded-2xl"
              title="SmartKode Location on Google Maps"
            ></iframe>

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 text-white text-lg font-semibold">
                <FaMapMarkerAlt className="text-[#00B2FF]" aria-hidden="true" />
                Open in Google Maps
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
