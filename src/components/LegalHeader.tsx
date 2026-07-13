import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalHeader() {
  return (
    <header className="relative z-10 border-b border-gold/15 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold hover:text-gold/80"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
        <div className="text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Alpha Vantrex EA
        </div>
      </div>
    </header>
  );
}
