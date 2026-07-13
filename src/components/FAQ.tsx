"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which platforms are supported?",
    a: "The EA runs on both MetaTrader 4 and MetaTrader 5. A single license covers both platforms depending on your chosen plan.",
  },
  {
    q: "How do I install the EA?",
    a: "A comprehensive installation guide is provided with every license. Setup typically takes less than 30 minutes on a standard VPS or local machine.",
  },
  {
    q: "Do I need a VPS?",
    a: "While not strictly required, a VPS is strongly recommended for optimal performance and 24/5 uptime. We provide VPS setup assistance for Professional and Elite license holders.",
  },
  {
    q: "Which brokers are compatible?",
    a: "The EA is tested across ECN, Standard, and Raw-spread environments from major brokers worldwide. If your broker supports MT4 or MT5, it is likely compatible.",
  },
  {
    q: "How does licensing work?",
    a: "Each license is tied to a specific number of trading accounts depending on your plan. Activation is delivered by email within one business day of payment confirmation.",
  },
  {
    q: "Can I move my license to a new account?",
    a: "License transfers are available on request. Contact support for assistance with moving your license to a different trading account.",
  },
  {
    q: "How are updates delivered?",
    a: "Updates are delivered directly to licensed clients via email and our Telegram channel. Elite license holders receive premium updates with priority access.",
  },
  {
    q: "What risk should I expect?",
    a: "Forex trading involves substantial risk. The EA includes multiple risk management layers but cannot eliminate market risk entirely. We recommend starting with conservative settings.",
  },
  {
    q: "How is drawdown controlled?",
    a: "Multi-layered drawdown protection operates at trade, session, daily, and portfolio levels. The preservation-first philosophy aims to protect equity before pursuing growth.",
  },
  {
    q: "Do you offer support?",
    a: "Yes. Support levels vary by license tier: Standard (Starter), Priority (Professional), and VIP Concierge (Elite). All clients receive installation guidance.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept Visa, Mastercard, PayPal, bank transfer, crypto, Apple Pay, and Google Pay. All transactions are encrypted and PCI-compliant.",
  },
  {
    q: "How is activation delivered?",
    a: "Activation files and instructions are delivered by email within one business day of confirmed payment.",
  },
  {
    q: "What is your refund policy?",
    a: "Please refer to our Refund Policy page for complete terms. Due to the digital nature of the product, restrictions apply.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Frequently Asked
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Everything you need{" "}
            <span className="text-gold-gradient italic">to know.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 divide-y divide-gold/10 rounded-3xl border border-gold/15 bg-card/40 backdrop-blur">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="block w-full px-6 py-5 text-left transition-colors hover:bg-gold/5 sm:px-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span
                  className={`text-sm font-medium sm:text-base ${
                    openIndex === i ? "text-gold" : "text-foreground"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-none text-gold transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-3 pr-10 text-sm leading-relaxed text-muted-foreground animate-fade-up">
                  {faq.a}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
