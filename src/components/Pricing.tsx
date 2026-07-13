import { Check, Send } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For focused single-account traders",
    price: "€499",
    duration: "12 Months",
    features: [
      "1 Trading Account",
      "MT4 or MT5",
      "Installation Guide",
      "Standard Support",
      "Core EA Engine",
      "Documentation Access",
    ],
    popular: false,
    labelType: "Starter",
  },
  {
    name: "Professional",
    tagline: "For serious active traders",
    price: "€899",
    duration: "24 Months",
    features: [
      "3 Trading Accounts",
      "MT4 & MT5",
      "Priority Support",
      "Strategy Optimization Assistance",
      "Advanced Presets",
      "Session Templates",
    ],
    popular: true,
    labelType: "Professional",
  },
  {
    name: "Elite",
    tagline: "For portfolio-scale operators",
    price: "€1,300",
    duration: "Lifetime Updates",
    features: [
      "Up to 10 Trading Accounts",
      "VIP Concierge Support",
      "Premium Updates",
      "VPS Setup Assistance",
      "Priority Activation",
      "Dedicated Onboarding",
    ],
    popular: false,
    labelType: "Elite",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Licensing
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Choose your{" "}
            <span className="text-gold-gradient italic">access tier.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every license unlocks the same institutional core. Higher tiers add
            capacity, priority access, and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-3xl p-10 transition-all duration-500 ${
                plan.popular
                  ? "border border-gold bg-gradient-to-b from-gold/10 via-card to-card shadow-[var(--shadow-gold-lg)] lg:-translate-y-4"
                  : "border border-gold/15 bg-card/60 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-gold-gradient px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="text-[10px] uppercase tracking-[0.32em] text-gold">
                {plan.labelType} License
              </div>
              <h3 className="mt-3 text-3xl font-light">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.tagline}
              </p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-5xl font-light text-gold-gradient">
                  {plan.price}
                </span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {plan.duration}
              </div>
              <ul className="mt-8 space-y-3 border-t border-gold/10 pt-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://t.me/Alphavantrex1"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-medium uppercase tracking-[0.24em] transition-all ${
                  plan.popular
                    ? "bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-[1.02]"
                    : "border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                Get {plan.name} on Telegram
                <Send className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Prices in EUR. Activation delivered by email within one business day
          of payment confirmation.
        </p>
      </div>
    </section>
  );
}
