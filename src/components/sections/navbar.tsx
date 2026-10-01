"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 font-semibold text-slate-900 transition-opacity hover:opacity-90"
        >
          <div className="relative h-8 w-8 shrink-0">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200/90 bg-slate-100 shadow-2xs transition-transform group-hover:scale-105">
              <Image
                src={personalInfo.avatarUrl || "/images/profile.png"}
                alt={personalInfo.name}
                width={32}
                height={32}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 shadow-2xs"
              title="Open to Work"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Tiar Rizky Budiyono
            <span className="ml-1.5 font-mono text-xs font-normal text-slate-500">
              {personalInfo.degree}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action: Download CV */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={personalInfo.cvPdfPath}
            download="CV-Tiar-Rizky-Budiyono.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-1.5 font-medium">
              <Icon name="download" size={14} />
              <span>Download CV</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={personalInfo.cvPdfPath}
                download="CV-Tiar-Rizky-Budiyono.pdf"
                className="block w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Icon name="download" size={14} />
                  <span>Download CV</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
