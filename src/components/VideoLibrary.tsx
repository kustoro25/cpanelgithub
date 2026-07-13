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
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const items = [
  "EA demonstrations",
  "Installation tutorials",
  "Trading education",
  "Feature explanations",
  "Product updates",
  "Strategy discussions",
  "Community announcements",
];

export default function VideoLibrary() {
  return (
    <section id="youtube" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-8 bg-gold"></span>Video Library
          </div>
          <h2 className="mt-6 text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl">
            Watch Alpha Vantrex EA{" "}
            <span className="text-gold-gradient italic">in action.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Full-length walkthroughs, installation guides, and feature deep
            dives on our official YouTube channel.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card flex items-center gap-3 rounded-2xl p-5"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                <YoutubeIcon />
              </div>
              <div className="text-sm text-foreground/85">{item}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href="https://youtube.com/@Alphavantrex"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-hover inline-flex items-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)]"
          >
            <YoutubeIcon /> Visit YouTube Channel
          </a>
          <div className="text-xs text-muted-foreground">
            @Alphavantrex
          </div>
        </div>
      </div>
    </section>
  );
}
