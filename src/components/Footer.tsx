import { Mail, Send } from "lucide-react";

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 text-gold"
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-black/60 pt-20">
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/android-chrome-192x192.png"
                alt=""
                className="h-10 w-10"
              />
              <div className="leading-tight">
                <div className="text-sm uppercase tracking-[0.28em] text-gold">
                  Alpha Vantrex
                </div>
                <div className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
                  Expert Advisor
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Institutional-grade Forex automation engineered for disciplined
              execution, capital preservation, and long-term consistency.
            </p>
            <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground/80">
              Risk disclosure: Trading foreign exchange carries substantial risk
              and may not be suitable for every investor. Past performance is
              not indicative of future results.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="mb-5 text-[11px] uppercase tracking-[0.28em] text-gold">
              Company
            </div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><a href="#top" className="hover:text-gold">Home</a></li>
              <li><a href="#tech" className="hover:text-gold">About</a></li>
              <li><a href="#features" className="hover:text-gold">Features</a></li>
              <li><a href="#pricing" className="hover:text-gold">Pricing</a></li>
              <li><a href="#results" className="hover:text-gold">Verified Results</a></li>
              <li><a href="#community" className="hover:text-gold">Community</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
              <li><a href="#support" className="hover:text-gold">Support Center</a></li>
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <div className="mb-5 text-[11px] uppercase tracking-[0.28em] text-gold">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>
                <a href="mailto:alphavantrex@gmail.com" className="flex items-center gap-2 hover:text-gold">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                  alphavantrex@gmail.com
                </a>
              </li>
              <li>
                <a href="https://t.me/Alphavantrex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                  <Send className="h-3.5 w-3.5 text-gold" />
                  t.me/Alphavantrex
                </a>
              </li>
              <li>
                <a href="https://t.me/Alphavantrex1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                  <Send className="h-3.5 w-3.5 text-gold" />
                  @Alphavantrex1
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@Alphavantrex" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                  <YoutubeIcon />
                  @Alphavantrex
                </a>
              </li>
            </ul>
            <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-gold">
              Legal
            </div>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li><a href="/privacy" className="hover:text-gold">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gold">Terms &amp; Conditions</a></li>
              <li><a href="/refund" className="hover:text-gold">Refund Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-gold">Risk Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>&copy; 2026 Alpha Vantrex EA. All rights reserved.</div>
          <div className="tracking-widest">CRAFTED FOR PROFESSIONAL TRADERS</div>
        </div>
      </div>
    </footer>
  );
}
