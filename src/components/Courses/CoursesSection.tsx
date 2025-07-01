"use client";

import BeginnerCourses from "./BeginnerCourses";
import IntermediateCourses from "./IntermediateCourses";
import AdvancedCourses from "./AdvancedCourses";

export default function CoursesSection() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="px-6 py-16 bg-black scroll-mt-8 text-white"
    >
      <div className="text-center">
        <h2
          id="courses-heading"
          className="text-3xl font-bold mb-2"
        >
          Our Courses
        </h2>

        <p className="text-sm sm:text-base font-semibold text-cyan-400 animate-pulse mt-4 max-w-2xl mx-auto">
          🎓 Enroll by visiting our office and receive your official{" "}
          <span className="text-white font-semibold">Student Card</span>.
        </p>
      </div>

      {/* Course Levels */}
      <div className="mt-12 space-y-16">
        <BeginnerCourses />
        <IntermediateCourses />
        <AdvancedCourses />
      </div>
    </section>
  );
}
