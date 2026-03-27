interface ProgressBarProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

const STEPS = [
  "Hello",
  "Our Start",
  "Moments",
  "My Heart",
  "Our Future",
  "I'll Wait",
  "Your Choice",
];

export default function ProgressBar({
  currentPage,
  onNavigate,
}: ProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{
        background: "rgba(246,214,216,0.85)",
        backdropFilter: "blur(12px)",
      }}
      data-ocid="progress.panel"
    >
      <div className="max-w-2xl mx-auto flex items-center">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className="flex items-center"
            style={{ flex: i < STEPS.length - 1 ? 1 : 0 }}
          >
            <div className="flex flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => onNavigate(i + 1)}
                className={`progress-dot${currentPage === i + 1 ? " active" : ""}`}
                aria-label={label}
                data-ocid="progress.tab"
                title={label}
              />
              <span
                className="hidden sm:block font-lato"
                style={{
                  fontSize: "0.6rem",
                  color: currentPage === i + 1 ? "var(--gold)" : "var(--taupe)",
                  fontWeight: currentPage === i + 1 ? 600 : 400,
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && <div className="progress-line mx-1" />}
          </div>
        ))}
      </div>
    </div>
  );
}
