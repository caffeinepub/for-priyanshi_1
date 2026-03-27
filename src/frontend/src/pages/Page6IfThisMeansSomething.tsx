interface Page6Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Page6IfThisMeansSomething({
  onNext,
  onPrev,
}: Page6Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(155deg, #0D3B38 0%, #1A5C56 50%, #2E7D6E 100%)",
      }}
      data-ocid="future.section"
    >
      <span className="absolute top-24 left-8 text-2xl opacity-25 sparkle">
        {"\uD83C\uDF38"}
      </span>
      <span
        className="absolute top-28 right-8 text-2xl opacity-25 sparkle"
        style={{ animationDelay: "0.8s" }}
      >
        {"\uD83D\uDCAB"}
      </span>
      <span className="absolute bottom-24 right-10 text-xl opacity-20">
        {"\uD83C\uDF38"}
      </span>
      <span
        className="absolute bottom-28 left-10 text-xl opacity-20 sparkle"
        style={{ animationDelay: "1.2s" }}
      >
        {"\uD83D\uDCAB"}
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
          Looking Ahead
        </p>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.6rem,4.5vw,2.6rem)",
            color: "#C8F0EC",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          If This Means Something To You&hellip;
        </h2>
        <div className="stagger-2 flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(100,220,200,0.5)",
            }}
          />
          <span style={{ color: "#C8F0EC", fontSize: "1.2rem" }}>
            {"\uD83C\uDF38"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(100,220,200,0.5)",
            }}
          />
        </div>
        <div
          className="stagger-3 text-left mb-6"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(100,220,200,0.3)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "2rem",
            boxShadow: "0 8px 32px rgba(0,100,90,0.4)",
          }}
        >
          <p
            className="font-lato"
            style={{
              color: "#C8F0EC",
              fontSize: "clamp(0.95rem,2.2vw,1.05rem)",
              lineHeight: 1.95,
            }}
          >
            I&apos;m not asking for anything big. Just a chance &mdash; to talk
            more, to laugh together, to see where this goes. Nothing rushed,
            nothing forced. Just two people getting to know each other, honestly
            and gently. That&apos;s all I&apos;m hoping for.
          </p>
        </div>
        <blockquote
          className="stagger-4 font-playfair"
          style={{
            color: "#7FFFD4",
            fontSize: "clamp(1rem,2.5vw,1.15rem)",
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          &ldquo;The best things begin with a simple hello.&rdquo;
        </blockquote>
        <div className="stagger-5 flex justify-between">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            data-ocid="future.secondary_button"
          >
            ← Back
          </button>
          <button
            type="button"
            className="btn-romantic"
            onClick={onNext}
            data-ocid="future.primary_button"
          >
            One Last Thing →
          </button>
        </div>
      </div>
    </section>
  );
}
