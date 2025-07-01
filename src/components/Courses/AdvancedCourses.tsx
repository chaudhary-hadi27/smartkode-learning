"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { advancedCourses, Course } from "@/data/advancedCourses";

export default function AdvancedCourses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCourse(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = selectedCourse ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  const CourseCard = ({ course }: { course: Course }) => (
    <article
      className="bg-[#111] border border-gray-700 p-6 rounded-2xl hover:border-cyan-400 shadow-md hover:shadow-cyan-700/20 transition-all duration-300"
      aria-labelledby={`course-${course.id}`}
    >
      <Image
        src={course.image}
        alt={`${course.title} course cover`}
        width={400}
        height={200}
        className="rounded-lg mb-4"
        loading="lazy"
      />
      <h3
        id={`course-${course.id}`}
        className="text-2xl font-semibold text-white mb-3"
      >
        {course.title}
      </h3>
      <p className="text-gray-400 text-base whitespace-pre-wrap">
        {course.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={() => setSelectedCourse(course)}
          className="w-full sm:w-auto bg-[#00B2FF] text-black py-2 px-6 rounded-lg text-base font-semibold hover:bg-[#1dcaff] transition-all"
          aria-label={`Learn more about ${course.title}`}
        >
          Learn More
        </button>
      </div>
    </article>
  );

  const CourseModal = ({ course }: { course: Course }) => (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto pt-20 px-2 sm:px-6"
      >
        <div className="bg-[#0a0a0a] border border-cyan-500 rounded-2xl max-w-5xl w-full p-4 sm:p-10 relative shadow-2xl text-gray-200 space-y-10">
          <button
            onClick={() => setSelectedCourse(null)}
            className="absolute top-4 right-6 text-white text-2xl hover:scale-110 transition-transform"
            aria-label="Close Course Modal"
          >
            ✕
          </button>

          <Image
            src={course.image}
            alt={`${course.title} full image`}
            width={1000}
            height={500}
            className="rounded-xl w-full object-cover mb-6"
            loading="lazy"
          />

          <div className="space-y-2">
            <h1
              id="course-modal-title"
              className="text-3xl sm:text-5xl font-bold text-cyan-400 leading-tight"
            >
              {course.title}
            </h1>
            <p
              className="text-gray-300 text-lg sm:text-xl whitespace-pre-wrap break-words"
              style={{ overflowWrap: "anywhere" }}
            >
              {course.description}
            </p>
          </div>

          {course.longDescription && (
            <div
              className="prose prose-invert max-w-none text-[17px] leading-relaxed break-words whitespace-pre-line"
              style={{ overflowWrap: "anywhere" }}
            >
              <ReactMarkdown
                components={{
                  h2: ({ ...props }) => (
                    <h2
                      className="text-2xl font-semibold text-white border-b border-white pb-2 my-4"
                      {...props}
                    />
                  ),
                  h3: ({ ...props }) => (
                    <h3
                      className="text-xl font-semibold text-white mt-8 mb-2 border-b border-gray-700 pb-1"
                      {...props}
                    />
                  ),
                }}
              >
                {course.longDescription}
              </ReactMarkdown>
            </div>
          )}

          {course.points && (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-white border-b border-white pb-2 mb-6">
                📚 Topics You&apos;ll Master
              </h2>
              {course.points.map((point, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                    {point.topics.map((topic, j) => (
                      <li
                        key={j}
                        className="break-words whitespace-pre-wrap"
                        style={{ overflowWrap: "anywhere" }}
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <Head>
        <title>Advanced Courses | AI, Automation & Mastery</title>
        <meta
          name="description"
          content="Master AI and automation with SmartKode&apos;s advanced-level courses focused on real-world implementation and project building."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Advanced Courses | SmartKode" />
        <meta
          property="og:description"
          content="Join advanced learners in mastering artificial intelligence, automation, and full stack skills."
        />
        <meta property="og:image" content="/video/bg.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="relative px-4 sm:px-6">
        <section
          className={`mb-20 relative z-10 transition-all duration-300 ${
            selectedCourse ? "blur-sm scale-[0.98]" : ""
          }`}
          aria-labelledby="advanced-courses-heading"
        >
          <h2
            id="advanced-courses-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
          >
            Advanced Level Courses
            <br />
            <span className="text-lg sm:text-xl font-normal text-gray-400">
              AI, Automation, and Real-World Projects
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {advancedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {selectedCourse && <CourseModal course={selectedCourse} />}
      </div>
    </>
  );
}
