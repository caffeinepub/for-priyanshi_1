export default function HeartRibbon({ size = "1em" }: { size?: string }) {
  return (
    <span
      className="heart-ribbon-wrap"
      style={{ width: size, height: size, fontSize: size }}
      aria-hidden="true"
    >
      <span className="hr-heart">💗</span>
      <span className="hr-ribbon" style={{ color: "#c8a35a" }}>
        🎀
      </span>
    </span>
  );
}
