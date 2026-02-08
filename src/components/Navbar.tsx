"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useContactModal } from "@/context/ContactModalContext";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How its work" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EAEEFE]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-1">
          <Image
            src="/Logo.png"
            alt="Eazy Cutz"
            width={140}
            height={44}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        {/* Desktop nav links - centered (anchor links for in-page scroll) */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 transition-colors hover:text-[#000000]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#6753FF] to-[#001CD5] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-95"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-white/50 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[#d4d4eb] bg-[#e6e6fa] transition-all duration-200 ease-out md:hidden ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-white/60"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); openModal(); }}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#6753FF] to-[#001CD5] px-4 py-3 text-base font-medium text-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
