import { useEffect, useState } from "react";
import { useSubmitResponse } from "../hooks/useQueries";

type ChoiceState = "none" | "yes" | "think";

interface HeartDrop {
  id: number;
  left: string;
  delay: string;
  duration: string;
  emoji: string;
}

function CelebrationOverlay() {
  const hearts: HeartDrop[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 3.4 + Math.sin(i) * 4).toFixed(1)}%`,
    delay: `${(i * 0.12).toFixed(2)}s`,
    duration: `${2.2 + (i % 5) * 0.4}s`,
    emoji: [
      "\uD83D\uDC96",
      "\uD83D\uDC95",
      "\u2728",
      "\uD83D\uDCAB",
      "\uD83C\uDF38",
      "\u2B50",
    ][i % 6],
  }));

  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(246,214,216,0.97) 0%, rgba(232,167,182,0.97) 100%)",
      }}
      data-ocid="celebration.modal"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-rain"
          style={{
            left: h.left,
            top: "-40px",
            fontSize: `${1.2 + (h.id % 3) * 0.5}rem`,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        >
          {h.emoji}
        </span>
      ))}
      <div className="celebration-pop relative z-10">
        <p
          className="priyanshi-name"
          style={{ fontSize: "clamp(2rem,7vw,3.5rem)", marginBottom: "1rem" }}
        >
          You just made me the happiest person alive {"\uD83D\uDCAB"}
        </p>
        <p
          className="font-lato"
          style={{
            color: "var(--taupe)",
            fontSize: "clamp(0.95rem,2vw,1.1rem)",
            lineHeight: 1.75,
            maxWidth: "480px",
          }}
        >
          Yuvraj is smiling so wide right now. Thank you, Priyanshi.{" "}
          {"\uD83D\uDC95"}
        </p>
      </div>
    </div>
  );
}

function ThinkOverlay() {
  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,182,230,0.97) 0%, rgba(221,208,240,0.97) 100%)",
      }}
      data-ocid="think.modal"
    >
      <div className="celebration-pop">
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
          {"\uD83C\uDF19"}
        </div>
        <p
          className="font-playfair"
          style={{
            color: "var(--brown)",
            fontSize: "clamp(1.5rem,4vw,2.2rem)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          Take your time, I&apos;ll be here {"\uD83D\uDE0A"}
        </p>
        <p
          className="font-lato"
          style={{
            color: "var(--taupe)",
            fontSize: "clamp(0.95rem,2vw,1.05rem)",
            lineHeight: 1.75,
            maxWidth: "420px",
          }}
        >
          No rush, no pressure. Whenever you&apos;re ready &mdash; or not.
          Either way, you matter. {"\uD83C\uDF19"}
        </p>
      </div>
    </div>
  );
}

interface Page7Props {
  onPrev: () => void;
}

export default function Page7HerChoice({ onPrev }: Page7Props) {
  const [choice, setChoice] = useState<ChoiceState>("none");
  const { mutate: submitResponse } = useSubmitResponse();

  useEffect(() => {
    if (choice !== "none") {
      submitResponse(choice);
    }
  }, [choice, submitResponse]);

  if (choice === "yes") return <CelebrationOverlay />;
  if (choice === "think") return <ThinkOverlay />;

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
          style={{ background: "rgba(247,239,231,0.88)" }}
        >
          <p
            className="font-lato"
            style={{
              color: "var(--taupe)",
              fontSize: "clamp(0.95rem,2.2vw,1.05rem)",
              lineHeight: 1.95,
            }}
          >
            I don&apos;t want to pressure you in any way. You don&apos;t owe me
            anything. But I wanted to be honest with you, because you deserve
            honesty. Whatever you decide, I&apos;ll respect it completely.
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
        <div className="stagger-4 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            type="button"
            className="btn-yes"
            onClick={() => setChoice("yes")}
            data-ocid="choice.primary_button"
          >
            YES {"\uD83D\uDC96"}
          </button>
          <button
            type="button"
            className="btn-think"
            onClick={() => setChoice("think")}
            data-ocid="choice.secondary_button"
          >
            LET ME THINK {"\uD83C\uDF19"}
          </button>
        </div>
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
