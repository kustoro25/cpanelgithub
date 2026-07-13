"use client";

import { ArrowRight } from "lucide-react";

const forexPairs = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.24%" },
  { pair: "XAU/USD", price: "2,412.30", change: "+1.08%" },
  { pair: "GBP/USD", price: "1.2765", change: "-0.11%" },
  { pair: "USD/JPY", price: "156.42", change: "+0.19%" },
  { pair: "AUD/USD", price: "0.6621", change: "+0.05%" },
  { pair: "USD/CHF", price: "0.8894", change: "-0.08%" },
  { pair: "NZD/USD", price: "0.6015", change: "+0.12%" },
  { pair: "EUR/GBP", price: "0.8493", change: "-0.03%" },
  { pair: "USD/CAD", price: "1.3712", change: "+0.07%" },
  { pair: "BTC/USD", price: "68,240", change: "+2.14%" },
];

const stats = [
  { value: "24/5", label: "Automation" },
  { value: "MT4 · MT5", label: "Compatible" },
  { value: "Multi-Broker", label: "Certified" },
  { value: "Continuous", label: "Updates" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg-mzCnvDA4.jpg"
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]"></div>
      </div>

      {/* Floating Dots */}
      <div className="pointer-events-none absolute inset-0">
        {[
          [0, 0, 0, 6],
          [53, 37, 0.7, 7],
          [16, 74, 1.4, 8],
          [69, 16, 2.1, 9],
          [32, 53, 2.8, 10],
          [85, 90, 3.5, 6],
          [48, 32, 0, 7],
          [11, 69, 0.7, 8],
          [64, 11, 1.4, 9],
          [27, 48, 2.1, 10],
          [80, 85, 2.8, 6],
          [43, 27, 3.5, 7],
          [6, 64, 0, 8],
          [59, 6, 0.7, 9],
          [22, 43, 1.4, 10],
          [75, 80, 2.1, 6],
          [38, 22, 2.8, 7],
          [1, 59, 3.5, 8],
        ].map(([top, left, delay, duration], i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60 animate-float"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          {/* Label Pill */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-black/40 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-gold"></span>
            Institutional-Grade Automation
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-light leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl">
            The Future of<br />
            <span className="text-gold-gradient italic">Professional Forex</span><br />
            Automation.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Institutional-grade MT4 &amp; MT5 Expert Advisors engineered for
            intelligent execution, disciplined risk management, and long-term
            consistency.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="shine-hover group inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-gold-lg)] transition-transform hover:scale-[1.02]"
            >
              Get Your EA Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-black/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-gold backdrop-blur transition-colors hover:bg-gold/10"
            >
              View Verified Results
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gold/10 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-light text-gold sm:text-xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Ticker */}
      <div className="relative overflow-hidden border-y border-gold/15 bg-black/60 py-3 backdrop-blur">
        <div className="flex animate-ticker gap-12 whitespace-nowrap">
          {[...forexPairs, ...forexPairs].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <span className="font-medium tracking-widest text-foreground/80">
                {item.pair}
              </span>
              <span className="text-gold">{item.price}</span>
              <span
                className={
                  item.change.startsWith("+")
                    ? "text-emerald-400/80"
                    : "text-red-400/80"
                }
              >
                {item.change}
              </span>
              <span className="text-gold/30">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
