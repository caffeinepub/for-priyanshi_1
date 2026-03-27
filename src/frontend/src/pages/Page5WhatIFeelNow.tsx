interface Page5Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Page5WhatIFeelNow({ onNext, onPrev }: Page5Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(150deg, #4A0E2B 0%, #7B1D45 50%, #A83060 100%)",
      }}
      data-ocid="feelings.section"
    >
      <span
        className="absolute top-24 right-8 text-2xl sparkle"
        style={{ opacity: 0.3 }}
      >
        {"\uD83D\uDC95"}
      </span>
      <span
        className="absolute top-20 left-8 text-2xl sparkle"
        style={{ opacity: 0.25, animationDelay: "0.7s" }}
      >
        {"\uD83C\uDF39"}
      </span>
      <span
        className="absolute bottom-28 left-8 text-2xl sparkle"
        style={{ opacity: 0.25, animationDelay: "1.1s" }}
      >
        {"\uD83D\uDC95"}
      </span>
      <span
        className="absolute bottom-24 right-10 text-xl"
        style={{ opacity: 0.2 }}
      >
        {"\uD83C\uDF39"}
      </span>

      <div className="max-w-2xl w-full text-center relative z-10">
        <p
          className="stagger-1 font-great-vibes"
          style={{
            color: "#FFD700",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          From My Heart
        </p>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.8rem,5vw,2.8rem)",
            color: "#FFD6E7",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          What I Feel Now
        </h2>
        <div className="stagger-2 flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(255,150,180,0.5)",
            }}
          />
          <span style={{ color: "#FFD6E7", fontSize: "1.2rem" }}>
            {"\uD83D\uDC97"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(255,150,180,0.5)",
            }}
          />
        </div>
        <div
          className="stagger-3 text-left mb-8"
          style={{
            background: "rgba(255,180,200,0.12)",
            border: "1px solid rgba(255,150,180,0.35)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 8px 32px rgba(180,0,60,0.35)",
          }}
        >
          <p
            className="font-lato"
            style={{
              color: "#FFD6E7",
              fontSize: "clamp(0.95rem,2.2vw,1.05rem)",
              lineHeight: 1.95,
            }}
          >
            I won&apos;t pretend this is easy to say. But I&apos;ve thought
            about it long enough to know it&apos;s true &mdash; I really like
            you,{" "}
            <span className="priyanshi-name" style={{ fontSize: "1.35em" }}>
              Priyanshi
            </span>
            . Not in a fleeting way. In a way that makes me want to know more
            about you, spend time with you, and be someone you&apos;re glad to
            have around. I&apos;m not here to overwhelm you. I just didn&apos;t
            want to keep this inside any longer.
          </p>
        </div>
        <p
          className="stagger-4 font-playfair"
          style={{
            fontSize: "clamp(1.5rem,4vw,2rem)",
            color: "#FFD700",
            fontWeight: 700,
            fontStyle: "italic",
            marginBottom: "2rem",
          }}
        >
          &mdash; Yuvraj
        </p>
        <div className="stagger-5 flex justify-between">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            data-ocid="feelings.secondary_button"
          >
            ← Back
          </button>
          <button
            type="button"
            className="btn-nav"
            onClick={onNext}
            data-ocid="feelings.primary_button"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
