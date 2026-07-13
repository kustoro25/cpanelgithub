import { Brain, Shield, ChartLine, Gauge, Cpu, Layers, Server } from "lucide-react";

const featureColumns = [
  {
    icon: Brain,
    title: "Intelligent Market Analysis",
    items: [
      "Multi-Timeframe Confirmation",
      "Trend Detection",
      "Breakout Detection",
      "Pullback Analysis",
      "Liquidity Detection",
      "Market Structure",
      "Volatility Analysis",
      "Momentum Filter",
      "News Filter",
      "Session Detection",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    items: [
      "Automatic Lot Size",
      "Smart Risk %",
      "Daily Loss Protection",
      "Weekly Protection",
      "Monthly Drawdown Control",
      "Equity Protection",
      "Capital Preservation",
      "Margin Monitoring",
      "Profit Lock",
      "Automatic Pause",
    ],
  },
  {
    icon: ChartLine,
    title: "Trade Management",
    items: [
      "Smart Stop Loss",
      "Smart Take Profit",
      "Dynamic Trailing Stop",
      "Break Even",
      "Partial Close",
      "Scaling",
      "Time Exit",
      "Session Exit",
    ],
  },
  {
    icon: Gauge,
    title: "Market Filters",
    items: [
      "Spread Filter",
      "Slippage Filter",
      "Weekend Protection",
      "Friday Closing",
      "Holiday Protection",
      "Swap Optimization",
      "Broker Quality Detection",
      "Session Filter",
    ],
  },
  {
    icon: Cpu,
    title: "Automation",
    items: [
      "24/5 Monitoring",
      "Fully Automated",
      "Adaptive Execution",
      "Instant Orders",
      "Error Recovery",
      "Duplicate Protection",
      "Connection Recovery",
    ],
  },
  {
    icon: Layers,
    title: "Customization",
    items: [
      "Beginner Mode",
      "Professional Mode",
      "Conservative",
      "Balanced",
      "Aggressive",
      "Time Filters",
      "Pair Selection",
      "Presets",
    ],
  },
  {
    icon: Server,
    title: "Compatibility",
    items: [
      "MT4",
      "MT5",
      "ECN",
      "Standard",
      "VPS Ready",
      "Multi Pair",
      "Multi Timeframe",
      "Gold",
      "Forex",
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Complete System
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Engineered detail,{" "}
            <span className="text-gold-gradient italic">at every layer.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From market analysis to broker-quality detection, every component
            was designed to work as one cohesive institutional system.
          </p>
        </div>

        {/* Feature Columns Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureColumns.map((col) => (
            <div
              key={col.title}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-card/60 p-8 backdrop-blur transition-all hover:border-gold/40 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold">
                  <col.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium tracking-tight">
                  {col.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground/75"
                  >
                    <span className="h-1 w-1 flex-none rounded-full bg-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
