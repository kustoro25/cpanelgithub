import { Brain, Activity, Shield, Lock, Gauge, TrendingDown, Clock, Layers, Cpu, Server, RefreshCw } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Market Intelligence",
    description: "Adaptive models read structure, momentum and liquidity in real time.",
  },
  {
    icon: Activity,
    title: "Institutional Execution",
    description: "Sub-second order routing engineered for professional environments.",
  },
  {
    icon: Shield,
    title: "Advanced Risk Management",
    description: "Multi-layered controls at trade, session, daily and portfolio level.",
  },
  {
    icon: Lock,
    title: "Capital Preservation",
    description: "Preservation-first philosophy: protect equity before pursuing growth.",
  },
  {
    icon: Gauge,
    title: "Adaptive Analysis",
    description: "Regime detection recalibrates behavior across trending & ranging markets.",
  },
  {
    icon: TrendingDown,
    title: "Low Drawdown Philosophy",
    description: "Engineered for smoother equity curves and disciplined exposure.",
  },
  {
    icon: Clock,
    title: "24/5 Automation",
    description: "Continuous monitoring across every major session, hands-free.",
  },
  {
    icon: Layers,
    title: "Multi-Broker Support",
    description: "Tested across ECN, Standard and Raw-spread environments.",
  },
  {
    icon: Cpu,
    title: "MT4 & MT5 Compatible",
    description: "One license, both platforms, identical institutional core.",
  },
  {
    icon: Server,
    title: "VPS Optimized",
    description: "Low-latency profile calibrated for professional VPS hosting.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description: "Ongoing refinements delivered directly to licensed clients.",
  },
];

export default function WhyAlphaPhoenix() {
  return (
    <section id="why" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Why Alpha Vantrex EA
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            An architecture built for{" "}
            <span className="text-gold-gradient italic">consistency.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every layer of the system is designed with the same philosophy:
            preserve capital first, execute with discipline, and adapt
            intelligently to market conditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="shine-hover group relative overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-br from-card to-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-gold)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all group-hover:bg-gold/10">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-medium tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
