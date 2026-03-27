interface Page2Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Page2HowItStarted({ onNext, onPrev }: Page2Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(160deg, #2D1B69 0%, #4A2080 50%, #6B3FA0 100%)",
      }}
      data-ocid="how_started.section"
    >
      <span className="absolute top-20 left-5 text-2xl opacity-30 sparkle">
        {"\u2728"}
      </span>
      <span
        className="absolute top-24 right-5 text-2xl opacity-25 sparkle"
        style={{ animationDelay: "1s" }}
      >
        {"\uD83C\uDF19"}
      </span>
      <span
        className="absolute bottom-28 left-8 text-xl opacity-20 sparkle"
        style={{ animationDelay: "0.5s" }}
      >
        {"\u2728"}
      </span>
      <span className="absolute bottom-24 right-8 text-xl opacity-20">
        {"\uD83C\uDF19"}
      </span>

      <div className="max-w-2xl w-full text-center relative z-10">
        <p
          className="stagger-1 font-great-vibes"
          style={{
            color: "#D4AF37",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          Our Story
        </p>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.8rem,5vw,2.8rem)",
            color: "#E8D5FF",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          How It All Started
        </h2>
        <div className="stagger-2 flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(200,160,255,0.5)",
            }}
          />
          <span style={{ color: "#E8D5FF", fontSize: "1.2rem" }}>
            {"\u2728"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(200,160,255,0.5)",
            }}
          />
        </div>
        <div
          className="stagger-3 text-left"
          style={{
            lineHeight: 1.95,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(200,160,255,0.3)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 8px 32px rgba(80,0,120,0.3)",
          }}
        >
          <p
            className="font-lato"
            style={{
              color: "#E8D5FF",
              fontSize: "clamp(0.95rem,2.2vw,1.05rem)",
            }}
          >
            I don&apos;t remember the exact moment it happened. But I remember
            noticing you &mdash; the way you carried yourself, calm and
            effortless, like you didn&apos;t need to try to stand out. You just
            did. It was something in the way you smiled, not for anyone in
            particular, just&hellip; <em>naturally</em>. Like sunlight that
            doesn&apos;t ask permission to be warm. That&apos;s when something
            shifted for me.
          </p>
        </div>
        <div className="stagger-4 flex justify-between mt-10">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            data-ocid="how_started.secondary_button"
          >
            ← Back
          </button>
          <button
            type="button"
            className="btn-nav"
            onClick={onNext}
            data-ocid="how_started.primary_button"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
