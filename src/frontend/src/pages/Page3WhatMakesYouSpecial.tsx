interface Page3Props {
  onNext: () => void;
  onPrev: () => void;
}

const CARDS = [
  {
    icon: "\uD83C\uDF38",
    title: "Your Kindness",
    desc: "The way you treat people around you, with patience and warmth, says everything about who you are.",
  },
  {
    icon: "\u2728",
    title: "Your Energy",
    desc: "There\u2019s a quiet confidence in you that makes everyone around you feel at ease. You light up a room without even realizing it.",
  },
  {
    icon: "\uD83D\uDC9B",
    title: "Your Soul",
    desc: "Beyond anything else, it\u2019s your genuine heart that makes you truly beautiful. That\u2019s rare, and I see it.",
  },
];

export default function Page3WhatMakesYouSpecial({
  onNext,
  onPrev,
}: Page3Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative"
      style={{
        background:
          "linear-gradient(150deg, #DDD0F0 0%, #C9B6E6 40%, #D8C8F0 100%)",
      }}
      data-ocid="special.section"
    >
      <div className="max-w-3xl w-full text-center relative z-10">
        <p
          className="stagger-1 font-great-vibes"
          style={{
            color: "var(--gold)",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          About You
        </p>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.6rem,4.5vw,2.6rem)",
            color: "var(--brown)",
            fontWeight: 700,
            marginBottom: "0.4rem",
          }}
        >
          What Makes You Special,{" "}
          <span className="priyanshi-name" style={{ fontSize: "inherit" }}>
            Priyanshi
          </span>
        </h2>
        <div className="stagger-2 flex items-center justify-center gap-3 mb-10">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "var(--gold)",
              opacity: 0.5,
            }}
          />
          <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>
            {"\u2728"}
          </span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "var(--gold)",
              opacity: 0.5,
            }}
          />
        </div>
        <div className="stagger-3 grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="romantic-card text-center"
              data-ocid={`special.item.${i + 1}`}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>
                {card.icon}
              </div>
              <h3
                className="font-playfair"
                style={{
                  color: "var(--brown)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-lato"
                style={{
                  color: "var(--taupe)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="stagger-4 flex justify-between">
          <button
            type="button"
            className="btn-nav"
            onClick={onPrev}
            data-ocid="special.secondary_button"
          >
            ← Back
          </button>
          <button
            type="button"
            className="btn-nav"
            onClick={onNext}
            data-ocid="special.primary_button"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
