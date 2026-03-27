import { useMemo } from "react";

const EMOJIS = [
  "\uD83D\uDC95",
  "\u2728",
  "\uD83C\uDF38",
  "\u2B50",
  "\uD83D\uDCAB",
  "\uD83C\uDF37",
  "\uD83D\uDC96",
  "\uD83C\uDF3A",
];

interface Particle {
  id: number;
  emoji: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
}

export default function FloatingParticles() {
  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        emoji: EMOJIS[i % EMOJIS.length],
        left: `${(i * 6.25 + Math.sin(i * 1.3) * 5 + 2).toFixed(1)}%`,
        duration: `${12 + (i % 7) * 2.5}s`,
        delay: `${-(i * 1.4 + 0.5)}s`,
        size: `${1.1 + (i % 4) * 0.3}rem`,
        opacity: 0.25 + (i % 3) * 0.08,
      })),
    [],
  );

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: 0,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}
