export default function Results() {
  return (
    <section id="results" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Verified Results
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Performance,{" "}
            <span className="text-gold-gradient italic">transparently measured.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sample analytics visualization. Full verified reports available on
            request to licensed clients and qualified prospects.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* Equity Growth Chart */}
          <div className="glass-card rounded-3xl p-8 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Equity Growth
                </div>
                <div className="mt-1 text-2xl font-light text-gold">
                  +47.82%
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Trailing 12 months
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id="rgrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 82)" stopOpacity="0.4"></stop>
                    <stop offset="100%" stopColor="oklch(0.82 0.14 82)" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="rline" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="oklch(0.9 0.16 88)"></stop>
                    <stop offset="100%" stopColor="oklch(0.62 0.14 70)"></stop>
                  </linearGradient>
                </defs>
                <line x1="0" x2="100" y1="20" y2="20" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="40" y2="40" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="60" y2="60" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="80" y2="80" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <path d="M0,57.7 L1.69,55.07 L3.39,52.15 L5.08,49.03 L6.78,45.77 L8.47,42.48 L10.17,39.27 L11.86,36.24 L13.56,33.48 L15.25,31.10 L16.95,29.16 L18.64,27.73 L20.34,26.83 L22.03,26.48 L23.73,26.65 L25.42,27.31 L27.12,28.39 L28.81,29.80 L30.51,31.45 L32.20,33.22 L33.90,35.01 L35.59,36.70 L37.29,38.18 L38.98,39.38 L40.68,40.21 L42.37,40.63 L44.07,40.61 L45.76,40.14 L47.46,39.23 L49.15,37.93 L50.85,36.30 L52.54,34.40 L54.24,32.31 L55.93,30.12 L57.63,27.90 L59.32,25.72 L61.02,23.66 L62.71,21.76 L64.41,20.05 L66.10,18.53 L67.80,17.22 L69.49,16.07 L71.19,15.06 L72.88,14.13 L74.58,13.23 L76.27,12.30 L77.97,11.28 L79.66,10.13 L81.36,8.81 L83.05,7.29 L84.75,5.57 L86.44,5 L88.14,5 L89.83,5 L91.53,5 L93.22,5 L94.92,5 L96.61,5 L98.31,5 L100,5 L100,100 L0,100 Z" fill="url(#rgrad)"></path>
                <path d="M0,57.7 L1.69,55.07 L3.39,52.15 L5.08,49.03 L6.78,45.77 L8.47,42.48 L10.17,39.27 L11.86,36.24 L13.56,33.48 L15.25,31.10 L16.95,29.16 L18.64,27.73 L20.34,26.83 L22.03,26.48 L23.73,26.65 L25.42,27.31 L27.12,28.39 L28.81,29.80 L30.51,31.45 L32.20,33.22 L33.90,35.01 L35.59,36.70 L37.29,38.18 L38.98,39.38 L40.68,40.21 L42.37,40.63 L44.07,40.61 L45.76,40.14 L47.46,39.23 L49.15,37.93 L50.85,36.30 L52.54,34.40 L54.24,32.31 L55.93,30.12 L57.63,27.90 L59.32,25.72 L61.02,23.66 L62.71,21.76 L64.41,20.05 L66.10,18.53 L67.80,17.22 L69.49,16.07 L71.19,15.06 L72.88,14.13 L74.58,13.23 L76.27,12.30 L77.97,11.28 L79.66,10.13 L81.36,8.81 L83.05,7.29 L84.75,5.57 L86.44,5 L88.14,5 L89.83,5 L91.53,5 L93.22,5 L94.92,5 L96.61,5 L98.31,5 L100,5" fill="none" stroke="url(#rline)" strokeWidth="0.6" strokeLinecap="round"></path>
              </svg>
            </div>
          </div>

          {/* Win Rate */}
          <div className="glass-card flex flex-col justify-between rounded-3xl p-8">
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Win Rate
            </div>
            <div className="mt-6 text-4xl font-light text-gold-gradient">
              68.4%
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-black/40">
              <div className="animate-shimmer h-full w-full"></div>
            </div>
          </div>

          {/* Max Drawdown */}
          <div className="glass-card flex flex-col justify-between rounded-3xl p-8">
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Max Drawdown
            </div>
            <div className="mt-6 text-4xl font-light text-gold-gradient">
              6.2%
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-black/40">
              <div className="animate-shimmer h-full w-full"></div>
            </div>
          </div>

          {/* Profit Factor */}
          <div className="glass-card flex flex-col justify-between rounded-3xl p-8">
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Profit Factor
            </div>
            <div className="mt-6 text-4xl font-light text-gold-gradient">
              2.14
            </div>
            <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-black/40">
              <div className="animate-shimmer h-full w-full"></div>
            </div>
          </div>

          {/* Monthly Returns */}
          <div className="glass-card rounded-3xl p-8 lg:col-span-2">
            <div className="mb-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Monthly Returns
            </div>
            <div className="flex h-56 items-end gap-2">
              {[
                { month: "J", val: 3.2, pct: "62.7%" },
                { month: "F", val: 2.1, pct: "41.2%" },
                { month: "M", val: 4.5, pct: "88.2%" },
                { month: "A", val: 1.8, pct: "35.3%" },
                { month: "M", val: 3.9, pct: "76.5%" },
                { month: "J", val: 2.7, pct: "52.9%" },
                { month: "J", val: 5.1, pct: "100%" },
                { month: "A", val: 3.4, pct: "66.7%" },
                { month: "S", val: 2.9, pct: "56.9%" },
                { month: "O", val: 4.2, pct: "82.4%" },
                { month: "N", val: 3.1, pct: "60.8%" },
                { month: "D", val: 3.8, pct: "74.5%" },
              ].map((item, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t bg-gold-gradient transition-all hover:opacity-80" style={{ height: item.pct }} title={`${item.month} · +${item.val}%`}></div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drawdown Profile */}
          <div className="glass-card rounded-3xl p-8">
            <div className="mb-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Drawdown Profile
            </div>
            <div className="flex h-56 items-start gap-1.5">
              {["60%", "40%", "75%", "30%", "55%", "45%", "90%", "50%", "35%", "65%", "45%", "55%"].map((h, i) => (
                <div key={i} className="flex-1 rounded-b bg-gradient-to-b from-red-400/40 to-red-500/10" style={{ height: h }}></div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Low, controlled drawdown reflects the preservation-first
              philosophy.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Past performance is not indicative of future results. Trading involves
          risk.
        </p>
      </div>
    </section>
  );
}
