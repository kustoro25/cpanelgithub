import { Check } from "lucide-react";

const benefits = [
  "Smarter execution across market regimes",
  "Stronger equity and drawdown protection",
  "Improved trade selection and filtering",
  "Adaptive intelligence for shifting volatility",
  "Institutional-style architecture end-to-end",
];

export default function Technology() {
  return (
    <section id="tech" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.14_82/0.08),transparent_60%)]"></div>
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>New Generation
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            The next evolution of<br />
            <span className="text-gold-gradient italic">Forex automation.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Alpha Vantrex EA has retired every previous EA
            version. In its place, a new-generation system rebuilt from the
            ground up with institutional-grade architecture — smarter execution,
            stronger capital protection, and refined adaptability.
          </p>
          <ul className="mt-10 space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <Check className="h-3 w-3 text-gold" />
                </span>
                <span className="text-sm text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 rounded-xl border border-gold/15 bg-black/40 p-5 text-xs leading-relaxed text-muted-foreground">
            We do not promise guaranteed returns. Forex trading involves
            substantial risk. Our focus is technology, transparency and
            disciplined execution — not marketing hype.
          </p>
        </div>

        {/* Right Column - System Core Card */}
        <div className="relative">
          <div className="glass-card relative overflow-hidden rounded-3xl p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  System Core
                </div>
                <div className="mt-1 text-lg text-foreground">
                  Phoenix Engine v3
                </div>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                Active
              </span>
            </div>

            {/* SVG Chart */}
            <div className="relative aspect-[16/9] w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.14 82)" stopOpacity="0.4"></stop>
                    <stop offset="100%" stopColor="oklch(0.82 0.14 82)" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="oklch(0.9 0.16 88)"></stop>
                    <stop offset="100%" stopColor="oklch(0.62 0.14 70)"></stop>
                  </linearGradient>
                </defs>
                <line x1="0" x2="100" y1="20" y2="20" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="40" y2="40" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="60" y2="60" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <line x1="0" x2="100" y1="80" y2="80" stroke="oklch(0.82 0.14 82 / 0.06)" strokeWidth="0.2"></line>
                <path d="M0,57.7 L1.69,55.07 L3.39,52.15 L5.08,49.03 L6.78,45.77 L8.47,42.48 L10.17,39.27 L11.86,36.24 L13.56,33.48 L15.25,31.10 L16.95,29.16 L18.64,27.73 L20.34,26.83 L22.03,26.48 L23.73,26.65 L25.42,27.31 L27.12,28.39 L28.81,29.80 L30.51,31.45 L32.20,33.22 L33.90,35.01 L35.59,36.70 L37.29,38.18 L38.98,39.38 L40.68,40.21 L42.37,40.63 L44.07,40.61 L45.76,40.14 L47.46,39.23 L49.15,37.93 L50.85,36.30 L52.54,34.40 L54.24,32.31 L55.93,30.12 L57.63,27.90 L59.32,25.72 L61.02,23.66 L62.71,21.76 L64.41,20.05 L66.10,18.53 L67.80,17.22 L69.49,16.07 L71.19,15.06 L72.88,14.13 L74.58,13.23 L76.27,12.30 L77.97,11.28 L79.66,10.13 L81.36,8.81 L83.05,7.29 L84.75,5.57 L86.44,5 L88.14,5 L89.83,5 L91.53,5 L93.22,5 L94.92,5 L96.61,5 L98.31,5 L100,5 L100,100 L0,100 Z" fill="url(#grad)"></path>
                <path d="M0,57.7 L1.69,55.07 L3.39,52.15 L5.08,49.03 L6.78,45.77 L8.47,42.48 L10.17,39.27 L11.86,36.24 L13.56,33.48 L15.25,31.10 L16.95,29.16 L18.64,27.73 L20.34,26.83 L22.03,26.48 L23.73,26.65 L25.42,27.31 L27.12,28.39 L28.81,29.80 L30.51,31.45 L32.20,33.22 L33.90,35.01 L35.59,36.70 L37.29,38.18 L38.98,39.38 L40.68,40.21 L42.37,40.63 L44.07,40.61 L45.76,40.14 L47.46,39.23 L49.15,37.93 L50.85,36.30 L52.54,34.40 L54.24,32.31 L55.93,30.12 L57.63,27.90 L59.32,25.72 L61.02,23.66 L62.71,21.76 L64.41,20.05 L66.10,18.53 L67.80,17.22 L69.49,16.07 L71.19,15.06 L72.88,14.13 L74.58,13.23 L76.27,12.30 L77.97,11.28 L79.66,10.13 L81.36,8.81 L83.05,7.29 L84.75,5.57 L86.44,5 L88.14,5 L89.83,5 L91.53,5 L93.22,5 L94.92,5 L96.61,5 L98.31,5 L100,5" fill="none" stroke="url(#line)" strokeWidth="0.6" strokeLinecap="round"></path>
              </svg>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gold/10 pt-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Uptime
                </div>
                <div className="mt-1 text-base text-gold">99.98%</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Latency
                </div>
                <div className="mt-1 text-base text-gold">42ms</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Pairs
                </div>
                <div className="mt-1 text-base text-gold">9</div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gold/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
