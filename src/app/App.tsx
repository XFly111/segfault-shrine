import { startTransition, useRef, useState } from "react";
import { ErrorInput } from "../components/ErrorInput/ErrorInput";
import { Header } from "../components/Header/Header";
import { InterpretationPanel } from "../components/InterpretationPanel/InterpretationPanel";
import { ResultActions } from "../components/ResultActions/ResultActions";
import { TarotSpread } from "../components/TarotSpread/TarotSpread";
import { previewCards } from "../data/cards";
import type { AppStatus, Reading } from "../types/tarot";
import styles from "./App.module.css";

const previewReading: Reading = {
  title: "Oracle Interpretation",
  summary:
    "The Shrine is awake. This scaffold uses placeholder cards and a preview reading so we can validate layout, motion, and states before real draw logic lands.",
  verdict:
    "The interface is prepared. Real card selection, keyword weighting, copy, and screenshot behavior will be implemented in the next feature slices.",
  cardReadings: [
    {
      cardId: "off-by-one",
      text: "You counted with confidence and still missed the boundary.",
      advice: "Audit loop limits and inclusive ranges.",
    },
    {
      cardId: "memory-leak",
      text: "The heap remembers what your code forgot to release.",
      advice: "Track allocations and free the forgotten ones.",
    },
    {
      cardId: "deadlock",
      text: "Two waiting points have made a pact against progress.",
      advice: "Untangle shared locks and make ordering explicit.",
    },
  ],
};

export function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<AppStatus>("idle");
  const resultRef = useRef<HTMLElement | null>(null);

  const handleDraw = () => {
    const trimmed = input.trim();

    if (!trimmed) {
      startTransition(() => setStatus("error"));
      return;
    }

    startTransition(() => setStatus("drawing"));

    window.setTimeout(() => {
      startTransition(() => setStatus("result"));
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
  };

  const handleReset = () => {
    startTransition(() => setStatus("idle"));
  };

  const hasResult = status === "result";
  const hasError = status === "error";
  const isDrawing = status === "drawing";

  return (
    <div className={styles.shell}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <ErrorInput
            value={input}
            onChange={setInput}
            isError={hasError}
            isDisabled={isDrawing}
          />

          <div className={styles.primaryAction}>
            <button
              className={styles.drawButton}
              type="button"
              onClick={handleDraw}
              disabled={isDrawing}
            >
              {isDrawing ? "Reading the stack trace..." : "Draw Cards"}
            </button>
          </div>
        </section>

        <section className={styles.resultShell} ref={resultRef}>
          <TarotSpread
            status={status}
            cards={previewCards}
            inputExcerpt={input.trim()}
          />

          <InterpretationPanel
            status={status}
            input={input}
            reading={previewReading}
          />

          <ResultActions
            hasResult={hasResult}
            onDrawAgain={handleReset}
          />
        </section>
      </main>
    </div>
  );
}
