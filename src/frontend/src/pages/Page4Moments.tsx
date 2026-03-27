interface Page4Props {
  onNext: () => void;
  onPrev: () => void;
}

interface Memory {
  emoji: string;
  title: string;
  text: string;
  color: string;
  rotate: string;
  shadow: string;
}

const MEMORIES: Memory[] = [
  {
    emoji: "👀",
    title: "2–3 seconds during exams",
    text: "I look up for literally no reason, and somehow you're looking too. 2–3 seconds, maybe less. But it hits different than anything else on that paper.",
    color: "#FFF9B0",
    rotate: "-2deg",
    shadow: "rgba(255,220,50,0.3)",
  },
  {
    emoji: "😏",
    title: "Checking your paper",
    text: 'I checked your answers on purpose. Told you "marks cut jayenge" with a straight face. That side-eye you gave me? Worth it. The little arm squeeze while pretending to be annoyed? Also worth it.',
    color: "#FFD6E7",
    rotate: "1.5deg",
    shadow: "rgba(255,100,150,0.25)",
  },
  {
    emoji: "🎙️",
    title: "That voice",
    text: "When you're annoyed but trying not to laugh — that voice you do — it's soft and a little dramatic and honestly kind of the best thing.",
    color: "#D4F1FF",
    rotate: "-1deg",
    shadow: "rgba(100,180,255,0.25)",
  },
  {
    emoji: "📱",
    title: "Waiting all day",
    text: "Some days feel slow for no real reason. And then one message from you and suddenly it's fine. I don't know how that works but it does.",
    color: "#E0FFD4",
    rotate: "2deg",
    shadow: "rgba(100,220,120,0.25)",
  },
  {
    emoji: "😂",
    title: "Telling the teacher",
    text: "Yes, I told sir. On purpose. I was watching your face the whole time. That calm-but-clearly-annoyed expression — half anger, half trying to keep it together — I'd do it again honestly.",
    color: "#EFD6FF",
    rotate: "-1.5deg",
    shadow: "rgba(180,100,255,0.25)",
  },
];

function StickyNote({ memory, index }: { memory: Memory; index: number }) {
  return (
    <div
      data-ocid={`moments.item.${index + 1}`}
      className="text-left relative"
      style={{
        background: memory.color,
        borderRadius: "4px",
        padding: "1.4rem 1.2rem 1.6rem",
        transform: `rotate(${memory.rotate})`,
        boxShadow: `4px 6px 24px ${memory.shadow}, 0 2px 8px rgba(0,0,0,0.35)`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "rotate(0deg) scale(1.04)";
        el.style.boxShadow = `6px 10px 32px ${memory.shadow}, 0 4px 16px rgba(0,0,0,0.4)`;
        el.style.zIndex = "10";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = `rotate(${memory.rotate})`;
        el.style.boxShadow = `4px 6px 24px ${memory.shadow}, 0 2px 8px rgba(0,0,0,0.35)`;
        el.style.zIndex = "1";
      }}
    >
      {/* Tape strip at top */}
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50px",
          height: "20px",
          background: "rgba(255,255,255,0.55)",
          borderRadius: "2px",
        }}
      />
      {/* Fold corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "22px",
          height: "22px",
          background:
            "linear-gradient(225deg, rgba(0,0,0,0.12) 50%, transparent 50%)",
          borderRadius: "0 0 4px 0",
        }}
      />
      <p
        className="font-playfair"
        style={{
          color: "#3a2a1a",
          fontSize: "0.88rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        {memory.emoji} {memory.title}
      </p>
      <p
        className="font-lato"
        style={{
          color: "#4a3a2a",
          fontSize: "clamp(0.85rem,2vw,0.95rem)",
          lineHeight: 1.75,
        }}
      >
        {memory.text}
      </p>
    </div>
  );
}

export default function Page4Moments({ onNext, onPrev }: Page4Props) {
  return (
    <section
      className="page-fade-in min-h-screen flex flex-col items-center justify-center px-6 py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2d1b4e 0%, #4a1942 35%, #7b2d5e 65%, #2d1b4e 100%)",
      }}
    >
      {/* Bokeh blobs */}
      {[
        { id: "b1", top: "8%", left: "5%", size: 80 },
        { id: "b2", top: "15%", right: "8%", size: 120 },
        { id: "b3", top: "45%", left: "2%", size: 60 },
        { id: "b4", bottom: "20%", right: "5%", size: 100 },
        { id: "b5", bottom: "10%", left: "12%", size: 70 },
      ].map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            background: "#fff",
            opacity: 0.08,
            top: (b as { top?: string }).top,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            bottom: (b as { bottom?: string }).bottom,
            filter: "blur(28px)",
          }}
        />
      ))}

      <span
        className="absolute top-20 left-10 text-2xl sparkle"
        style={{ opacity: 0.5 }}
      >
        ✨
      </span>
      <span
        className="absolute top-28 right-12 text-xl sparkle"
        style={{ opacity: 0.4, animationDelay: "0.6s" }}
      >
        ⭐
      </span>
      <span
        className="absolute bottom-24 left-14 text-xl sparkle"
        style={{ opacity: 0.4, animationDelay: "1.2s" }}
      >
        💫
      </span>
      <span
        className="absolute bottom-20 right-10 text-2xl sparkle"
        style={{ opacity: 0.5, animationDelay: "0.3s" }}
      >
        ✨
      </span>

      <div className="max-w-4xl w-full text-center relative z-10">
        <p
          className="stagger-1 font-great-vibes"
          style={{
            color: "#f8d57e",
            fontSize: "1.3rem",
            marginBottom: "0.5rem",
          }}
        >
          Memories
        </p>
        <h2
          className="stagger-2 font-playfair"
          style={{
            fontSize: "clamp(1.8rem,5vw,2.8rem)",
            color: "#fff",
            fontWeight: 700,
            marginBottom: "0.8rem",
            textShadow: "0 2px 16px rgba(0,0,0,0.4)",
          }}
        >
          Small Things I Remember
        </h2>
        <div className="stagger-2 flex items-center justify-center gap-3 mb-12">
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "#f8d57e",
              opacity: 0.6,
            }}
          />
          <span style={{ color: "#f8d57e", fontSize: "1.2rem" }}>💕</span>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "#f8d57e",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Row 1: 3 sticky notes */}
        <div className="stagger-3 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {MEMORIES.slice(0, 3).map((m, i) => (
            <StickyNote key={m.title} memory={m} index={i} />
          ))}
        </div>

        {/* Row 2: 2 sticky notes centered */}
        <div className="stagger-4 grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14 sm:max-w-2xl sm:mx-auto">
          {MEMORIES.slice(3).map((m, i) => (
            <StickyNote key={m.title} memory={m} index={i + 3} />
          ))}
        </div>

        <div className="stagger-4 flex justify-between">
          <button type="button" className="btn-nav" onClick={onPrev}>
            ← Back
          </button>
          <button type="button" className="btn-nav" onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
