import { Send, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-black via-charcoal to-black p-12 text-center sm:p-20">
          {/* Background Image */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <img
              src="/assets/hero-bg-mzCnvDA4.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold"></span>Begin
            </div>
            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Enter the next era of<br />
              <span className="text-gold-gradient italic">
                professional automation.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Secure your license today and receive activation, installation
              guide, and onboarding within one business day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://t.me/Alphavantrex1"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-hover inline-flex items-center gap-3 rounded-full bg-gold-gradient px-10 py-4 text-sm font-medium uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold-lg)]"
              >
                Get Your EA Now <Send className="h-4 w-4" />
              </a>
              <a
                href="mailto:alphavantrex@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-10 py-4 text-sm font-medium uppercase tracking-[0.24em] text-gold hover:bg-gold/10"
              >
                <Mail className="h-4 w-4" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
