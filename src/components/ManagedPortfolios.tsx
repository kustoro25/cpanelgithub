import { Check, Send } from "lucide-react";

const features = [
  "Professional execution by a dedicated team",
  "Predefined capital protection rules",
  "Ongoing portfolio monitoring",
  "Transparent, verifiable reporting",
  "Personal risk consultation",
];

export default function ManagedPortfolios() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10 sm:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"></div>
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
                <span className="h-px w-8 bg-gold"></span>Managed Portfolios
              </div>
              <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
                Professional Account<br />
                <span className="text-gold-gradient italic">Management.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Invest while our experienced team executes disciplined strategies
                using predefined risk management rules. Full transparency,
                capital protection, and institutional-style reporting.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-gold/10 bg-black/30 p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                    <span className="text-sm text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/Alphavantrex1"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-hover mt-8 inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
              >
                Request Consultation
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
