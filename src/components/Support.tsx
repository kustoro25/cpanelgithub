import { Check, Send, Mail, ArrowRight } from "lucide-react";

const supportItems = [
  "Professional installation assistance",
  "MT4 & MT5 setup guidance",
  "VPS configuration assistance",
  "License activation support",
  "Technical troubleshooting",
  "Future software updates",
  "Product guidance",
  "Fast response support",
];

export default function Support() {
  return (
    <section id="support" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Support
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            World-class{" "}
            <span className="text-gold-gradient italic">customer support.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A dedicated team behind every licensed client — installation,
            activation, and continuous product guidance.
          </p>
        </div>

        {/* Support Items Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {supportItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-gold/10 bg-black/30 p-4"
            >
              <Check className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <span className="text-sm text-foreground/85">{item}</span>
            </div>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href="https://t.me/Alphavantrex1"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center justify-between gap-4 rounded-2xl p-6 transition-all hover:border-gold/40"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                  Telegram Support
                </div>
                <div className="text-sm text-foreground/90">
                  @Alphavantrex1
                </div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gold" />
          </a>
          <a
            href="mailto:alphavantrexea@gmail.com"
            className="glass-card flex items-center justify-between gap-4 rounded-2xl p-6 transition-all hover:border-gold/40"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                  Email
                </div>
                <div className="text-sm text-foreground/90">
                  alphavantrexea@gmail.com
                </div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
