interface EasterEggModalProps {
  onClose: () => void;
}

export default function EasterEggModal({ onClose }: EasterEggModalProps) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(47,37,34,0.45)", backdropFilter: "blur(8px)" }}
      data-ocid="easter_egg.modal"
    >
      <div
        className="romantic-card text-center max-w-sm w-full celebration-pop"
        style={{ border: "2px solid var(--gold)" }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          {"\uD83C\uDF1F"}
        </div>
        <p
          className="font-playfair mb-3"
          style={{
            color: "var(--brown)",
            fontSize: "1.15rem",
            fontWeight: 600,
            lineHeight: 1.6,
          }}
        >
          You found the secret!
        </p>
        <p
          className="font-lato"
          style={{
            color: "var(--taupe)",
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          Yuvraj has been smiling just thinking about you. That&apos;s the real
          magic.
        </p>
        <button
          type="button"
          className="btn-romantic mt-5"
          onClick={onClose}
          data-ocid="easter_egg.close_button"
        >
          Close {"\u2728"}
        </button>
      </div>
    </div>
  );
}
