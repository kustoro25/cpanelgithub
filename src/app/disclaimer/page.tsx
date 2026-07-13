import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Risk Disclaimer — Alpha Vantrex EA",
};

export default function DisclaimerPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,168,76,0.18),transparent_70%)]" />
      <LegalHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
          <span className="text-gold-gradient">Risk Disclaimer</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Please read the following risk information carefully before using any
          Alpha Vantrex EA product.
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-gold [&_h2]:tracking-wide [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:leading-relaxed">
          <h2>Trading Risk</h2>
          <p>
            Forex, CFDs, cryptocurrencies, and leveraged financial instruments
            involve substantial risk and are not suitable for every investor. You
            may lose some or all of your invested capital.
          </p>

          <h2>No Performance Guarantee</h2>
          <p>
            Past performance does not guarantee future results. Backtests, live
            results, and demonstrations shown are for informational purposes
            only and do not represent guarantees of any specific outcome.
          </p>

          <h2>Our Role</h2>
          <p>
            Alpha Vantrex EA provides trading technology and
            educational support. We do not provide personalized financial advice,
            and we do not guarantee profits or specific financial outcomes.
          </p>

          <h2>Your Responsibility</h2>
          <p>
            Users should carefully evaluate their financial situation, risk
            tolerance, and applicable regulations in their jurisdiction before
            trading. Consider consulting an independent, licensed financial
            advisor.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Broker performance, spreads, slippage, execution quality, VPS
            reliability, and connectivity are outside our control and may affect
            trading outcomes.
          </p>
        </div>

        <div className="mt-16 border-t border-gold/10 pt-6 text-xs text-muted-foreground">
          Last updated: January 2026 · Questions? Email{" "}
          <a
            href="mailto:alphavantrex@gmail.com"
            className="text-gold hover:underline"
          >
            alphavantrex@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
