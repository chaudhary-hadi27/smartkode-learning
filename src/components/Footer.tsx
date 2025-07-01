// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center text-gray-500 text-sm py-6 border-t border-gray-600 bg-black"
      role="contentinfo"
      aria-label="Footer"
    >
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://learn.smartkode.io"
          className="hover:underline text-white"
          title="Visit SmartKode Learning"
        >
          SmartKode Learning
        </Link>
        . All rights reserved.
      </p>
      <p className="mt-2 text-xs text-gray-400">
        Built with ❤️ for learners passionate about AI, automation, and full-stack dev.
      </p>
    </footer>
  );
}
