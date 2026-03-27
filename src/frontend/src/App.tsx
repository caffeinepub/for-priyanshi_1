import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import FloatingParticles from "./components/FloatingParticles";
import MonogramLogo from "./components/MonogramLogo";
import ProgressBar from "./components/ProgressBar";
import Page1Landing from "./pages/Page1Landing";
import Page2HowItStarted from "./pages/Page2HowItStarted";
import Page4Moments from "./pages/Page4Moments";
import Page5WhatIFeelNow from "./pages/Page5WhatIFeelNow";
import Page6IfThisMeansSomething from "./pages/Page6IfThisMeansSomething";
import Page7IllWaitForYou from "./pages/Page7IllWaitForYou";
import Page8HerChoice from "./pages/Page8HerChoice";

const queryClient = new QueryClient();

function RomanticApp() {
  const [page, setPage] = useState(1);

  const goTo = (p: number) => {
    const clamped = Math.min(Math.max(p, 1), 7);
    setPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  return (
    <div className="relative min-h-screen" style={{ overflowX: "hidden" }}>
      <FloatingParticles />
      <MonogramLogo />
      <ProgressBar currentPage={page} onNavigate={goTo} />

      <main key={page}>
        {page === 1 && <Page1Landing onNext={next} />}
        {page === 2 && <Page2HowItStarted onNext={next} onPrev={prev} />}
        {page === 3 && <Page4Moments onNext={next} onPrev={prev} />}
        {page === 4 && <Page5WhatIFeelNow onNext={next} onPrev={prev} />}
        {page === 5 && (
          <Page6IfThisMeansSomething onNext={next} onPrev={prev} />
        )}
        {page === 6 && <Page7IllWaitForYou onNext={next} onPrev={prev} />}
        {page === 7 && <Page8HerChoice onPrev={prev} />}
      </main>

      <footer
        className="relative z-10 text-center py-4 font-lato"
        style={{ fontSize: "0.75rem", color: "var(--taupe)", opacity: 0.65 }}
      >
        {"\u00A9"} {new Date().getFullYear()}. Built with{" "}
        <span style={{ color: "var(--gold)" }}>{"\u2665"}</span> using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--gold)", textDecoration: "none" }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RomanticApp />
    </QueryClientProvider>
  );
}
