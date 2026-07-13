import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Alpha Vantrex EA",
};

export default function TermsPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,168,76,0.18),transparent_70%)]" />
      <LegalHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
          <span className="text-gold-gradient">Terms of Service</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          By purchasing or using any Alpha Vantrex EA product,
          you agree to the following terms.
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-gold [&_h2]:tracking-wide [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:leading-relaxed">
          <h2>License Use</h2>
          <p>
            Users agree to use the software only under their licensed accounts
            and within the number of accounts permitted by their purchased
            license tier.
          </p>

          <h2>Prohibited Actions</h2>
          <ul>
            <li>Redistribution, resale, or sublicensing of the software</li>
            <li>Reverse engineering, decompiling, or modifying the software</li>
            <li>Unauthorized sharing of license keys or activation credentials</li>
            <li>
              Using the software in a manner that violates broker terms or
              applicable law
            </li>
          </ul>

          <h2>Trading Risk</h2>
          <p>
            Trading involves substantial financial risk. No software can
            guarantee profits or eliminate losses. Users remain fully
            responsible for their trading decisions, account funding, risk
            configuration, and outcomes.
          </p>

          <h2>Service Availability</h2>
          <p>
            We strive to maintain reliable software, updates, and support. We do
            not guarantee uninterrupted service and are not liable for losses
            caused by broker downtime, VPS failures, connectivity issues, or
            third-party platform changes.
          </p>

          <h2>Termination</h2>
          <p>
            Licenses may be revoked without refund in cases of violation of
            these terms, including redistribution or misuse of the software.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Alpha Vantrex EA
            is not liable for any indirect, incidental, or
            consequential damages arising from the use of our products.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a
              className="text-gold hover:underline"
              href="mailto:alphavantrexea@gmail.com"
            >
              alphavantrexea@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-16 border-t border-gold/10 pt-6 text-xs text-muted-foreground">
          Last updated: January 2026 · Questions? Email{" "}
          <a
            href="mailto:alphavantrexea@gmail.com"
            className="text-gold hover:underline"
          >
            alphavantrexea@gmail.com
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
