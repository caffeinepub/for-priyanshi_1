interface Page7Props {
  onPrev: () => void;
}

export default function Page7HerChoice({ onPrev }: Page7Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(150deg, #F0C0C8 0%, #E8A7B6 40%, #D48090 100%)",
      }}
      data-ocid="choice.section"
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
          className="stagger-1 priyanshi-name"
          style={{ fontSize: "clamp(2.5rem,8vw,4rem)", marginBottom: "0.3rem" }}
        >
          Dear Priyanshi,
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
          className="stagger-2 romantic-card text-left mb-6"
          style={{ background: "rgba(247,239,231,0.92)" }}
        >
          <p
            className="font-lato"
            style={{
              color: "var(--taupe)",
              fontSize: "clamp(0.95rem,2.2vw,1.08rem)",
              lineHeight: 2,
            }}
          >
            I&apos;m always here for you.
            <br />
            <br />
            I&apos;m not going anywhere. Not because I&apos;m waiting &mdash;
            but because you genuinely matter to me, feelings or no feelings.
            You&apos;re someone I care about, and that doesn&apos;t just switch
            off.
            <br />
            <br />
            {"\uD83E\uDD1D"}
            <br />
            <br />
            If you ever want to talk &mdash; about anything, anytime &mdash;
            I&apos;m here. As a friend. No awkwardness, no pressure, no strings.
            Just someone who&apos;s always one text away. {"\uD83D\uDCAC\u2728"}
            <br />
            <br />
            {"\uD83C\uDF38"} Even if we don&apos;t talk for months &mdash; if
            one day you need someone, I&apos;ll still pick up. That&apos;s just
            how it is.
          </p>
        </div>
        <p
          className="stagger-3 font-playfair"
          style={{
            fontSize: "clamp(1.3rem,3.5vw,1.8rem)",
            color: "var(--gold-bright)",
            fontWeight: 700,
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
        >
          &mdash; Yuvraj
        </p>
        <div className="stagger-5">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            data-ocid="choice.cancel_button"
            style={{ opacity: 0.7 }}
          >
            ← Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
