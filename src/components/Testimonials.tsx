"use client";

import { useState } from "react";
import { Star, ChevronDown } from "lucide-react";

const testimonials = [
  { flag: "🇬🇧", name: "James Whitfield", country: "United Kingdom", quote: "The risk management architecture is what convinced me. Daily loss protection has done its job more than once." },
  { flag: "🇧🇷", name: "Sofia Almeida", country: "Brazil", quote: "Support was exceptional during onboarding. Setup on my VPS took less than an hour, everything documented." },
  { flag: "🇯🇵", name: "Kenji Nakamura", country: "Japan", quote: "What I appreciate is the honesty. No promises of overnight riches — just disciplined execution across sessions." },
  { flag: "🇳🇬", name: "Amina Okafor", country: "Nigeria", quote: "Ran it on a demo for six weeks before going live. The consistency of the exit logic sold me." },
  { flag: "🇩🇪", name: "Lukas Berger", country: "Germany", quote: "Clean UI on the input panel. Presets made it easy to start conservative and adjust as I gained confidence." },
  { flag: "🇫🇷", name: "Isabelle Laurent", country: "France", quote: "I've used other EAs. The difference here is how it behaves during high-impact news — it steps aside cleanly." },
  { flag: "🇸🇬", name: "Wei Zhang", country: "Singapore", quote: "The multi-timeframe confirmation genuinely reduces noise. Fewer trades, better selection." },
  { flag: "🇦🇺", name: "Oliver Thompson", country: "Australia", quote: "Documentation is professional. Feels like an institutional product, not a Telegram-group script." },
  { flag: "🇦🇪", name: "Rashid Al-Farsi", country: "UAE", quote: "Priority support answered within a couple of hours. Very rare in this industry." },
  { flag: "🇨🇦", name: "Michael Foster", country: "Canada", quote: "The equity protection layer is the feature I value most. It respects capital first." },
  { flag: "🇿🇦", name: "Thabo Dlamini", country: "South Africa", quote: "Adaptive execution feels different in trending vs ranging conditions — clearly not a rigid grid system." },
  { flag: "🇮🇹", name: "Elena Rossi", country: "Italy", quote: "Runs quietly on my VPS with no crashes over months of uptime." },
];

const INITIAL_COUNT = 9;

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Global Community
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Trusted by traders{" "}
            <span className="text-gold-gradient italic">worldwide.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Feedback from our international client community. Names shown are
            illustrative samples of typical client experience.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gold/15 bg-card/60 p-6 backdrop-blur transition-all hover:border-gold/40 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-lg">
                    {t.flag}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t.country}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {testimonials.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-8 py-3 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold/10"
            >
              {showAll ? "Show less reviews" : "Show more reviews"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
