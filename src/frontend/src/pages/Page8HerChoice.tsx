import HeartRibbon from "../components/HeartRibbon";

interface Page8Props {
  onPrev: () => void;
}

export default function Page8HerChoice({ onPrev }: Page8Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(150deg, #F0C0C8 0%, #E8A7B6 40%, #D48090 100%)",
      }}
    >
      <span
        className="absolute top-24 left-8 text-2xl sparkle"
        style={{ opacity: 0.35 }}
      >
        {"\uD83D\uDC95"}
      </span>
      <span
        className="absolute top-28 right-8 text-2xl sparkle"
        style={{ opacity: 0.3, animationDelay: "0.8s" }}
      >
        {"\uD83D\uDC96"}
      </span>
      <span
        className="absolute bottom-24 left-10 text-xl sparkle"
        style={{ opacity: 0.3, animationDelay: "1.5s" }}
      >
        {"\u2728"}
      </span>

      <div className="max-w-xl w-full text-center relative z-10">
        <h2
          className="stagger-1 priyanshi-name inline-flex items-center justify-center gap-2"
          style={{ fontSize: "clamp(2.5rem,8vw,4rem)", marginBottom: "0.3rem" }}
        >
          Dear Priyanshi,&#x1F497;&#x1F380;
          <HeartRibbon size="0.55em" />
        </h2>
        <div className="stagger-1 flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(247,239,231,0.7)",
            }}
          />
          <span style={{ color: "#F7EFE7", fontSize: "1.2rem" }}>
            {"\uD83D\uDC96"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(247,239,231,0.7)",
            }}
          />
        </div>

        <div
          className="stagger-2 romantic-card text-left mb-8"
          style={{
            background: "rgba(30, 10, 20, 0.65)",
            border: "1.5px solid rgba(247,239,231,0.25)",
          }}
        >
          <p
            className="font-playfair"
            style={{
              color: "#F7EFE7",
              fontSize: "clamp(1rem,2.3vw,1.12rem)",
              lineHeight: 2,
              marginBottom: "1.2rem",
            }}
          >
            I&apos;m not going anywhere. Not because I&apos;m waiting &mdash;
            but because you genuinely matter to me, feelings or no feelings.
            You&apos;re someone I care about, and that doesn&apos;t just switch
            off.
          </p>

          <p
            style={{
              fontSize: "1.8rem",
              textAlign: "center",
              marginBottom: "1.2rem",
            }}
          >
            &#x1F91D;
          </p>

          <p
            className="font-playfair"
            style={{
              color: "#F7EFE7",
              fontSize: "clamp(1rem,2.3vw,1.12rem)",
              lineHeight: 2,
              marginBottom: "1.2rem",
            }}
          >
            If you ever want to talk &mdash; about anything, anytime &mdash;
            I&apos;m here. As a friend. No awkwardness, no pressure, no strings.
            Just someone who&apos;s always one text away. &#x1F4AC;&#x2728;
          </p>

          <p
            className="font-playfair"
            style={{
              color: "rgba(247,239,231,0.8)",
              fontSize: "clamp(0.95rem,2vw,1.05rem)",
              lineHeight: 1.85,
              fontStyle: "italic",
              marginBottom: "1.6rem",
            }}
          >
            &#x1F338; Even if we don&apos;t talk for months &mdash; if one day
            you need someone, I&apos;ll still pick up. That&apos;s just how it
            is.
          </p>

          <p
            className="priyanshi-name"
            style={{
              fontSize: "clamp(1.2rem,3vw,1.6rem)",
              textAlign: "right",
              marginBottom: 0,
            }}
          >
            &mdash; Yuvraj
          </p>
        </div>

        <div className="stagger-5 flex justify-center">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            style={{ opacity: 0.7 }}
          >
            &#x2190; Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
