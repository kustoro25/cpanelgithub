import { CreditCard, Wallet, Lock, Shield, Award, Star, FileText, Download } from "lucide-react";

const paymentMethods = [
  { icon: CreditCard, label: "Visa" },
  { icon: CreditCard, label: "Mastercard" },
  { icon: Wallet, label: "PayPal" },
  { icon: Wallet, label: "Bank Transfer" },
  { icon: Wallet, label: "Crypto" },
  { icon: CreditCard, label: "Apple Pay" },
  { icon: CreditCard, label: "Google Pay" },
];

const trustItems = [
  { icon: Lock, label: "SSL Secure" },
  { icon: Shield, label: "Encrypted Payments" },
  { icon: Award, label: "Licensed Software" },
  { icon: Star, label: "Premium Support" },
  { icon: FileText, label: "Professional Documentation" },
  { icon: Download, label: "Verified Downloads" },
];

export default function PaymentsAndTrust() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Payments */}
          <div className="glass-card rounded-3xl p-10">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold"></span>Payments
            </div>
            <h3 className="mt-4 text-2xl font-light">Secure global checkout</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              All transactions are encrypted and processed through PCI-compliant
              providers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-2 rounded-full border border-gold/20 bg-black/30 px-4 py-2 text-xs text-foreground/80"
                >
                  <method.icon className="h-3.5 w-3.5 text-gold" />
                  {method.label}
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Security */}
          <div className="glass-card rounded-3xl p-10">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-8 bg-gold"></span>Trust &amp; Security
            </div>
            <h3 className="mt-4 text-2xl font-light">
              Institutional-grade safeguards
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-xl border border-gold/15 bg-black/30 p-4 text-center"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/80">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
