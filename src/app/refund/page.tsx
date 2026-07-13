import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy — Alpha Vantrex EA",
};

export default function RefundPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,168,76,0.18),transparent_70%)]" />
      <LegalHeader />
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:px-10">
        <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
          Legal
        </div>
        <h1 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
          <span className="text-gold-gradient">Refund Policy</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Due to the digital nature of our Expert Advisors, software licenses,
          and downloadable products, all completed purchases are generally
          considered final once the product has been delivered or activated.
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-light [&_h2]:text-gold [&_h2]:tracking-wide [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_p]:leading-relaxed">
          <h2>Refunds May Be Considered If</h2>
          <ul>
            <li>A duplicate payment was made</li>
            <li>We are unable to deliver the purchased license</li>
            <li>
              The product cannot be activated due to a verified technical issue
              our support team cannot resolve
            </li>
          </ul>

          <h2>Refunds Are Not Available For</h2>
          <ul>
            <li>Change of mind</li>
            <li>Trading losses</li>
            <li>Incorrect software configuration by the user</li>
            <li>VPS issues outside our control</li>
            <li>Broker execution differences or broker-side restrictions</li>
            <li>Failure to follow the installation instructions provided</li>
          </ul>

          <h2>Before Requesting a Refund</h2>
          <p>
            Customers should always contact support before requesting a refund
            so our team can investigate and resolve any issue. Most technical
            concerns can be fully resolved within one business day.
          </p>

          <h2>How to Request</h2>
          <p>
            Email{" "}
            <a
              className="text-gold hover:underline"
              href="mailto:alphavantrex@gmail.com"
            >
              alphavantrex@gmail.com
            </a>{" "}
            with your order reference, license key, and a description of the
            issue. Approved refunds are processed to the original payment method
            within 5–10 business days.
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
