import { useEffect, useState } from "react";
import HeartRibbon from "../components/HeartRibbon";
import { useSubmitResponse } from "../hooks/useQueries";

type ChoiceState = "none" | "yes" | "think" | "no";

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
      <div
        className="celebration-pop relative z-10 flex flex-col items-center"
        style={{ maxWidth: 520 }}
      >
        <div
          style={{ fontSize: "4rem", marginBottom: "0.5rem", lineHeight: 1 }}
        >
          {"\uD83D\uDC97"}
        </div>
        <div
          style={{
            background: "rgba(155,26,78,0.12)",
            border: "2.5px solid rgba(155,26,78,0.35)",
            borderRadius: "1.4rem",
            padding: "1.2rem 2rem",
            marginBottom: "1.4rem",
            boxShadow:
              "0 4px 24px rgba(155,26,78,0.18), 0 0 0 6px rgba(155,26,78,0.06)",
          }}
        >
          <p
            className="priyanshi-name"
            style={{
              fontSize: "clamp(1.7rem,6vw,2.8rem)",
              marginBottom: 0,
              lineHeight: 1.3,
            }}
          >
            You just made me the happiest person alive {"\uD83D\uDCAB"}
          </p>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1.5px solid rgba(200,163,90,0.4)",
            borderRadius: "1rem",
            padding: "0.9rem 1.6rem",
            boxShadow: "0 2px 12px rgba(47,37,34,0.08)",
          }}
        >
          <p
            className="font-lato"
            style={{
              color: "var(--brown)",
              fontSize: "clamp(1rem,2.2vw,1.15rem)",
              lineHeight: 1.75,
              fontWeight: 700,
              margin: 0,
            }}
          >
            Yuvraj is smiling so wide right now.{" "}
            <span style={{ color: "#9B1A4E" }}>Thank you, Priyanshi.</span>{" "}
            {"\uD83D\uDC95"}
          </p>
        </div>
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
          Either way, you matter.
        </p>
      </div>
    </div>
  );
}

function NoOverlay() {
  return (
    <div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(232,225,245,0.98) 0%, rgba(210,200,235,0.98) 100%)",
      }}
    >
      <div className="celebration-pop" style={{ maxWidth: 480 }}>
        <div
          style={{ fontSize: "3.2rem", marginBottom: "0.8rem", lineHeight: 1 }}
        >
          🤍
        </div>

        <p
          className="font-playfair"
          style={{
            color: "#4a3060",
            fontSize: "clamp(1.5rem,4vw,2rem)",
            fontWeight: 700,
            marginBottom: "1.2rem",
          }}
        >
          That&apos;s okay, truly.
        </p>

        {/* Main message card */}
        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1.5px solid rgba(160,130,200,0.35)",
            borderRadius: "1.2rem",
            padding: "1.3rem 1.6rem",
            marginBottom: "1.2rem",
            boxShadow: "0 4px 20px rgba(100,70,160,0.1)",
          }}
        >
          <p
            className="font-lato"
            style={{
              color: "#5a4070",
              fontSize: "clamp(0.95rem,2vw,1.05rem)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            I&apos;m not going anywhere. Not because I&apos;m waiting &mdash;
            but because you genuinely matter to me, feelings or no feelings.
            You&apos;re someone I care about, and that doesn&apos;t just switch
            off.
          </p>
        </div>

        {/* Friendship card */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,240,250,0.85), rgba(240,230,255,0.85))",
            border: "1.5px solid rgba(180,130,210,0.4)",
            borderRadius: "1.2rem",
            padding: "1.2rem 1.6rem",
            marginBottom: "1.4rem",
            boxShadow: "0 4px 20px rgba(140,80,200,0.12)",
          }}
        >
          <p
            style={{
              fontSize: "1.6rem",
              marginBottom: "0.6rem",
              lineHeight: 1,
            }}
          >
            🤝
          </p>
          <p
            className="font-lato"
            style={{
              color: "#6a4a80",
              fontSize: "clamp(0.95rem,2vw,1.05rem)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            If you ever want to talk &mdash; about anything, anytime &mdash;
            I&apos;m here. As a friend. No awkwardness, no pressure, no strings.
            Just someone who&apos;s always one text away. 💬✨
          </p>
        </div>

        {/* Small gesture line */}
        <p
          className="font-lato"
          style={{
            color: "#8a6a9a",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            maxWidth: "360px",
            margin: "0 auto 1.4rem",
            fontStyle: "italic",
          }}
        >
          🌸 Even if we don&apos;t talk for months &mdash; if one day you need
          someone, I&apos;ll still pick up. That&apos;s just how it is.
        </p>

        <p
          className="font-playfair"
          style={{
            color: "#9B1A4E",
            fontSize: "1.1rem",
            fontWeight: 700,
            fontStyle: "italic",
          }}
        >
          &mdash; Yuvraj
        </p>
      </div>
    </div>
  );
}

interface Page7Props {
  onPrev: () => void;
}

export default function Page8HerChoice({ onPrev }: Page7Props) {
  const [choice, setChoice] = useState<ChoiceState>("none");
  const { mutate: submitResponse } = useSubmitResponse();

  useEffect(() => {
    if (choice !== "none") {
      submitResponse(choice);
    }
  }, [choice, submitResponse]);

  if (choice === "yes") return <CelebrationOverlay />;
  if (choice === "think") return <ThinkOverlay />;
  if (choice === "no") return <NoOverlay />;

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
          className="stagger-1 priyanshi-name inline-flex items-center justify-center"
          style={{ fontSize: "clamp(2.5rem,8vw,4rem)", marginBottom: "0.3rem" }}
        >
          Dear Priyanshi,
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
            You don&apos;t owe me anything. I just wanted to be honest with you,
            because you deserve that. Whatever you feel right now &mdash;
            that&apos;s okay.
          </p>
        </div>

        <p
          className="stagger-3 font-playfair"
          style={{
            fontSize: "clamp(1.3rem,3.5vw,1.8rem)",
            color: "var(--gold-bright)",
            fontWeight: 700,
            fontStyle: "italic",
            marginBottom: "2rem",
          }}
        >
          &mdash; Yuvraj
        </p>

        <div className="stagger-4 flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <button
            type="button"
            className="btn-yes"
            onClick={() => setChoice("yes")}
          >
            YES {"\uD83D\uDC96"}
          </button>
          <button
            type="button"
            className="btn-think"
            onClick={() => setChoice("think")}
          >
            LET ME THINK {"\uD83C\uDF19"}
          </button>
        </div>

        <div className="stagger-4 flex justify-center mb-6">
          <button
            type="button"
            onClick={() => setChoice("no")}
            style={{
              background: "transparent",
              border: "1.5px solid rgba(100,80,90,0.35)",
              borderRadius: "2rem",
              padding: "0.6rem 1.8rem",
              color: "rgba(90,60,70,0.75)",
              fontSize: "0.92rem",
              fontFamily: "var(--font-lato)",
              cursor: "pointer",
              letterSpacing: "0.06em",
              transition: "all 0.2s",
            }}
          >
            No
          </button>
        </div>

        <div className="stagger-5">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            style={{ opacity: 0.7 }}
          >
            ← Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
