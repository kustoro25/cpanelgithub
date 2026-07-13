import { Check, Send } from "lucide-react";

const items = [
  "Product announcements",
  "EA update notifications",
  "Trading education",
  "Market insights",
  "Premium content",
  "Community discussions",
  "Exclusive promotions",
  "New feature releases",
  "Customer support",
  "Future product launches",
];

export default function Community() {
  return (
    <section id="community" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-16">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"></div>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-8 bg-gold"></span>Official Community
              </div>
              <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
                Join the official<br />
                <span className="text-gold-gradient italic">Alpha Vantrex EA</span> community.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Become part of a growing global community of traders receiving
                product updates, educational content, trading insights, important
                announcements, exclusive offers, and support directly from Alpha
                Vantrex EA.
              </p>
              <a
                href="https://t.me/Alphavantrex1"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-hover mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Join Telegram Channel
              </a>
              <div className="mt-4 text-xs text-muted-foreground">
                t.me/Alphavantrex1
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-gold/10 bg-black/30 p-3 text-sm"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
