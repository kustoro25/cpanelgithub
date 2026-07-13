"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#why", label: "Why" },
  { href: "#tech", label: "Technology" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-gold/15"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/assets/android-chrome-192x192.png"
            alt="Alpha Vantrex EA"
            className="h-9 w-9"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs uppercase tracking-[0.28em] text-gold">
              Alpha Vantrex
            </span>
            <span className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
              Expert Advisor
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 text-sm text-foreground/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#pricing"
          className="hidden items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 text-xs uppercase tracking-[0.24em] text-gold transition-all hover:bg-gold hover:text-primary-foreground lg:inline-flex"
        >
          Get Your EA
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile menu button */}
        <button
          className="rounded-full border border-gold/30 p-2 text-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gold/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base text-foreground/70 transition-colors hover:text-gold hover:bg-gold/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-medium uppercase tracking-[0.24em] text-primary-foreground"
            >
              Get Your EA
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
