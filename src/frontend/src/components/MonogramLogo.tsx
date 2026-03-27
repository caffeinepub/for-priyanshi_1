import { useState } from "react";
import EasterEggModal from "./EasterEggModal";

export default function MonogramLogo() {
  const [clickCount, setClickCount] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  const handleClick = () => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 3) {
      setShowEgg(true);
      setClickCount(0);
    }
  };

  return (
    <>
      <button
        type="button"
        className="monogram fixed top-3 left-4 z-50"
        onClick={handleClick}
        title="Y\u2665P"
        data-ocid="monogram.button"
        aria-label="Y heart P monogram"
      >
        Y{"\u2665"}P
      </button>
      {showEgg && <EasterEggModal onClose={() => setShowEgg(false)} />}
    </>
  );
}
