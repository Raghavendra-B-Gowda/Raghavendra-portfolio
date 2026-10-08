import { useEffect, useState, memo } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface LottieLoaderProps {
  onComplete: () => void;
}

export const LottieLoader = memo(function LottieLoader({
  onComplete,
}: LottieLoaderProps) {
  const [lottieError, setLottieError] = useState(false);

  useEffect(() => {
    // Loop the loading animation for a set duration to simulate webpage load,
    // then immediately unmount and reveal the webpage.
    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 3000);

    return () => window.clearTimeout(completeTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen w-full items-center justify-center bg-background">
      {/* ─── Fallback: Obsidian Void minimalist animated loading ─── */}
      {lottieError ? (
        <div className="obsidian-fallback">
          <div className="obsidian-wordmark">
            <span className="obsidian-letter" style={{ "--i": 0 } as React.CSSProperties}>l</span>
            <span className="obsidian-letter" style={{ "--i": 1 } as React.CSSProperties}>o</span>
            <span className="obsidian-letter" style={{ "--i": 2 } as React.CSSProperties}>a</span>
            <span className="obsidian-letter" style={{ "--i": 3 } as React.CSSProperties}>d</span>
            <span className="obsidian-letter" style={{ "--i": 4 } as React.CSSProperties}>i</span>
            <span className="obsidian-letter" style={{ "--i": 5 } as React.CSSProperties}>n</span>
            <span className="obsidian-letter" style={{ "--i": 6 } as React.CSSProperties}>g</span>
          </div>
          <div className="obsidian-progress-track">
            <div className="obsidian-progress-fill" />
          </div>
          <div className="obsidian-status">INITIALIZING</div>
        </div>
      ) : (
        /* ─── Lottie player (from code.html — max-w-[1000px] centered) ─── */
        <div 
          className="flex w-full max-w-[600px] items-center justify-center filter brightness-0 invert"
          style={{ filter: 'brightness(0) invert(1)' }}
        >
          <DotLottieReact
            src="https://lottie.host/7c87d6e7-c3dd-4702-8e33-141a822a8afc/GknsIYw3R3.lottie"
            autoplay
            loop
          />
        </div>
      )}
    </div>
  );
});

export default LottieLoader;
