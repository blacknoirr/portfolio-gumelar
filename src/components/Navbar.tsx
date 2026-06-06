"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Gum Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm transition-colors ${
              isActive("/work")
                ? "text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              isActive("/about")
                ? "text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${
              isActive("/contact")
                ? "text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
