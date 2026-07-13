import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Alpha Vantrex EA",
};

export default function PrivacyPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,168,76,0.18),transparent_70%)]" />
      <LegalHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
          <span className="text-gold-gradient">Privacy Policy</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Your privacy is fundamental to how we build and deliver Alpha Vantrex EA
          products. This policy explains what information we
          collect and how we use it.
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-gold [&_h2]:tracking-wide [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:leading-relaxed">
          <h2>Information We Collect</h2>
          <p>
            We collect only the information required to deliver licenses,
            activate software, and provide customer support. This typically
            includes your name, email address, trading account number (for
            license binding), and payment confirmation data from our payment
            providers.
          </p>

          <h2>How We Use Information</h2>
          <p>
            Customer information is used solely for licensing, account
            activation, customer support, and service improvements. We use
            aggregated, non-identifying data to improve product reliability and
            performance.
          </p>

          <h2>Data Sharing</h2>
          <p>
            Personal information is never sold or shared for marketing purposes.
            We share limited data only with trusted service providers required to
            operate the business — payment processors, email delivery, and
            hosting infrastructure — under strict confidentiality obligations.
          </p>

          <h2>Payment Security</h2>
          <p>
            Payments are securely processed through trusted third-party payment
            providers. We do not store full payment card numbers on our servers.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain customer information for as long as necessary to fulfill
            license obligations, provide support, and comply with legal, tax, and
            accounting requirements.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting our support team. We
            will respond within a reasonable timeframe.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact{" "}
            <a
              className="text-gold hover:underline"
              href="mailto:alphavantrex@gmail.com"
            >
              alphavantrex@gmail.com
            </a>
            .
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
