interface Page7Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Page7IllWaitForYou({ onNext, onPrev }: Page7Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(155deg, #D8889A 0%, #C4607A 35%, #B85070 65%, #C46880 100%)",
      }}
    >
      <span className="absolute top-24 left-6 text-2xl opacity-30 sparkle">
        {"\uD83C\uDF39"}
      </span>
      <span
        className="absolute top-32 right-8 text-xl opacity-25 sparkle"
        style={{ animationDelay: "0.8s" }}
      >
        {"\uD83D\uDC95"}
      </span>
      <span
        className="absolute bottom-28 left-10 text-xl opacity-25 sparkle"
        style={{ animationDelay: "1.4s" }}
      >
        {"\uD83C\uDF39"}
      </span>
      <span
        className="absolute bottom-24 right-6 text-2xl opacity-30 sparkle"
        style={{ animationDelay: "0.4s" }}
      >
        {"\uD83D\uDC96"}
      </span>

      <div className="max-w-2xl w-full text-center relative z-10">
        <h2
          className="stagger-1 priyanshi-name"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          I&apos;ll Still Be Here
        </h2>

        <div className="stagger-1 flex items-center justify-center gap-3 mb-8">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(247,239,231,0.5)",
            }}
          />
          <span style={{ color: "rgba(247,239,231,0.7)", fontSize: "1.1rem" }}>
            {"\uD83C\uDF39"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "rgba(247,239,231,0.5)",
            }}
          />
        </div>

        <div
          className="stagger-2 romantic-card text-left mb-6"
          style={{
            background: "rgba(247,239,231,0.13)",
            border: "1px solid rgba(247,239,231,0.25)",
          }}
        >
          <p
            className="font-playfair"
            style={{
              color: "#F7EFE7",
              fontSize: "clamp(0.97rem, 2.2vw, 1.08rem)",
              lineHeight: 2,
            }}
          >
            I know you said no. And I&apos;m not here to change that.
          </p>
          <p
            className="font-playfair mt-5"
            style={{
              color: "#F7EFE7",
              fontSize: "clamp(0.97rem, 2.2vw, 1.08rem)",
              lineHeight: 2,
            }}
          >
            I just wanted you to know &mdash; I&apos;m still here. Not waiting
            desperately, not hoping you&apos;ll change your mind. Just&hellip;
            still here. The way some things stay without asking for anything.
          </p>

          <div
            className="mt-6"
            style={{
              background: "rgba(247,239,231,0.18)",
              border: "2px solid rgba(247,239,231,0.5)",
              borderRadius: "1rem",
              padding: "1.1rem 1.3rem",
              boxShadow:
                "0 0 20px rgba(247,239,231,0.12), inset 0 0 12px rgba(247,239,231,0.07)",
            }}
          >
            <p
              className="font-playfair"
              style={{
                color: "#F7EFE7",
                fontSize: "clamp(1rem, 2.4vw, 1.12rem)",
                lineHeight: 2,
                fontWeight: 500,
              }}
            >
              If life ever made me choose between giving up and choosing
              you&hellip; I&apos;d choose you, every single time.
            </p>

            <div
              className="mt-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(155,26,78,0.7) 0%, rgba(180,50,100,0.65) 100%)",
                borderRadius: "0.8rem",
                padding: "0.85rem 1.2rem",
                boxShadow:
                  "0 4px 20px rgba(155,26,78,0.45), 0 0 0 3px rgba(247,239,231,0.3)",
              }}
            >
              <p
                className="font-playfair"
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.15rem, 3vw, 1.45rem)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  fontWeight: 700,
                  textShadow: "0 2px 10px rgba(0,0,0,0.25)",
                  margin: 0,
                  letterSpacing: "0.01em",
                }}
              >
                {"\u2728"} &ldquo;I&apos;m glad you exist, Priyanshi.&rdquo;{" "}
                {"\u2728"}
              </p>
            </div>
          </div>
        </div>

        <p
          className="stagger-3 font-playfair"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "var(--gold-bright)",
            fontWeight: 700,
            fontStyle: "italic",
            marginBottom: "0.8rem",
          }}
        >
          &mdash; Yuvraj
        </p>

        <p
          className="stagger-3 font-lato"
          style={{
            color: "rgba(247,239,231,0.65)",
            fontSize: "0.88rem",
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          No pressure. No expectations. Just honesty.
        </p>

        <div className="stagger-4 flex justify-start mb-4">
          <button type="button" className="btn-nav" onClick={onPrev}>
            &#x2190; Back
          </button>
        </div>

        <div className="stagger-4 flex justify-center">
          <button
            type="button"
            className="btn-romantic font-bold"
            onClick={onNext}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              letterSpacing: "0.03em",
            }}
          >
            My Last Message For You &#x1F48C;
          </button>
        </div>
      </div>
    </section>
  );
}
