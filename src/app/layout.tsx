"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {/* Navbar */}
        <header className="w-full flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/solvify-logo.png"
                alt="Solvify Concepts Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">Solvify Concepts</span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-base font-medium">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <Link href="/#about" className="hover:text-blue-700">
              About
            </Link>
            <Link href="/#services" className="hover:text-blue-700">
              Services
            </Link>
          </nav>
          <Link
            href="/contact"
            className="ml-4 px-6 py-2 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition hidden md:inline-block"
          >
            Contact us
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-blue-50 transition ml-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-blue-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-blue-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Mobile Menu Dropdown & Overlay */}
          {menuOpen && (
            <>
              {/* Overlay */}
              <div
                className="fixed inset-0 z-40 bg-black/10 md:hidden"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu overlay"
              />
              {/* Dropdown */}
              <div
                className="absolute top-20 right-8 bg-white shadow-lg rounded-xl flex flex-col items-stretch w-48 z-50 border border-gray-100 animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href="/" className="px-6 py-3 hover:bg-blue-50 text-left">
                  Home
                </Link>
                <Link
                  href="/#about"
                  className="px-6 py-3 hover:bg-blue-50 text-left"
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="px-6 py-3 hover:bg-blue-50 text-left"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="m-3 px-6 py-2 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-900 transition text-center"
                >
                  Contact us
                </Link>
              </div>
            </>
          )}
        </header>
        <main className="min-h-[80vh]">{children}</main>
        {/* Footer */}
        <footer className="w-full bg-black text-white py-8 px-8 mt-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="font-bold text-lg">Solvify Concept</div>
            <nav className="flex gap-8 text-base font-medium">
              <Link href="/#about" className="hover:underline">
                About
              </Link>
              <Link href="/#services" className="hover:underline">
                Services
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="mt-6 text-sm text-center text-gray-400">
            © 2025 Solvify concept. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
