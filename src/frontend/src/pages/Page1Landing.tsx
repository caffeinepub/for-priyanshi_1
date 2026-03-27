import HeartRibbon from "../components/HeartRibbon";

interface Page1Props {
  onNext: () => void;
}

export default function Page1Landing({ onNext }: Page1Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      style={{
        background:
          "linear-gradient(135deg, #F6D6D8 0%, #F0C8D0 40%, #EAB8C8 70%, #F6D6D8 100%)",
      }}
      data-ocid="landing.section"
    >
      <span className="absolute top-24 left-6 text-3xl opacity-30">
        {"\uD83C\uDF38"}
      </span>
      <span className="absolute top-28 right-6 text-3xl opacity-30">
        {"\uD83C\uDF37"}
      </span>
      <span className="absolute bottom-20 left-8 text-2xl opacity-25">
        {"\u2728"}
      </span>
      <span className="absolute bottom-24 right-8 text-2xl opacity-25">
        {"\uD83D\uDCAB"}
      </span>

      <div className="relative z-10 max-w-xl">
        <h1
          className="stagger-1 priyanshi-name inline-flex items-center justify-center"
          style={{
            fontSize: "clamp(3rem,10vw,5.5rem)",
            lineHeight: 1.2,
            marginBottom: "0.3rem",
          }}
        >
          Hey Priyanshi…
          <HeartRibbon size="0.6em" />
        </h1>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.4rem,4vw,2rem)",
            color: "#F7EFE7",
            textShadow: "0 2px 12px rgba(47,37,34,0.4)",
            marginBottom: "1.2rem",
            fontWeight: 600,
          }}
        >
          I made this just for you {"\uD83D\uDCAB"}
        </h2>
        <p
          className="stagger-3 font-lato"
          style={{
            fontSize: "clamp(0.95rem,2.5vw,1.1rem)",
            color: "var(--taupe)",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          A small world I built, just for your eyes.
        </p>
        <div className="stagger-4">
          <button
            type="button"
            className="btn-romantic"
            onClick={onNext}
            data-ocid="landing.primary_button"
          >
            Enter My World →
          </button>
        </div>
      </div>

      <div
        className="stagger-5 absolute bottom-10 flex gap-3"
        style={{ fontSize: "1.5rem", opacity: 0.4 }}
      >
        <span>{"\uD83D\uDC95"}</span>
        <span>{"\uD83D\uDC95"}</span>
        <span>{"\uD83D\uDC95"}</span>
      </div>
    </section>
  );
}
