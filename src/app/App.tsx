import { startTransition, useEffect, useRef, useState } from "react";
import { ErrorInput } from "../components/ErrorInput/ErrorInput";
import { Header } from "../components/Header/Header";
import { InterpretationPanel } from "../components/InterpretationPanel/InterpretationPanel";
import { ResultActions } from "../components/ResultActions/ResultActions";
import { TarotSpread } from "../components/TarotSpread/TarotSpread";
import { previewCards, tarotDeck, toVisualCard } from "../data/cards";
import { drawCards } from "../logic/drawCards";
import { formatResult } from "../logic/formatResult";
import { generateReading } from "../logic/generateReading";
import type {
  AppStatus,
  DrawResult,
  TarotVisualCard,
} from "../types/tarot";
import { copyText } from "../utils/clipboard";
import { captureElementAsPng, downloadPng } from "../utils/screenshot";
import styles from "./App.module.css";

type FeedbackTone = "success" | "error";

function buildInputExcerpt(input: string) {
  const singleLine = input.replace(/\s+/g, " ").trim();
  return singleLine.length > 120
    ? `${singleLine.slice(0, 117)}...`
    : singleLine;
}

export function App() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<AppStatus>("idle");
  const [result, setResult] = useState<DrawResult | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [feedbackTone, setFeedbackTone] = useState<FeedbackTone | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);
  const drawTimerRef = useRef<number | null>(null);
  const feedbackTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (drawTimerRef.current) {
        window.clearTimeout(drawTimerRef.current);
      }

      if (feedbackTimerRef.current) {
        window.clearTimeout(feedbackTimerRef.current);
      }
    };
  }, []);

  const setFeedback = (message: string, tone: FeedbackTone) => {
    if (feedbackTimerRef.current) {
      window.clearTimeout(feedbackTimerRef.current);
    }

    setFeedbackMessage(message);
    setFeedbackTone(tone);
    feedbackTimerRef.current = window.setTimeout(() => {
      setFeedbackMessage(null);
      setFeedbackTone(null);
    }, 2800);
  };

  const handleInputChange = (nextValue: string) => {
    setInput(nextValue);

    if (status === "error" && nextValue.trim()) {
      startTransition(() => setStatus("idle"));
    }
  };

  const handleDraw = () => {
    const trimmed = input.trim();

    if (!trimmed) {
      startTransition(() => setStatus("error"));
      return;
    }

    if (drawTimerRef.current) {
      window.clearTimeout(drawTimerRef.current);
    }

    setFeedbackMessage(null);
    setFeedbackTone(null);
    setResult(null);
    startTransition(() => setStatus("drawing"));

    drawTimerRef.current = window.setTimeout(() => {
      const cards = drawCards(tarotDeck, trimmed);
      const nextResult: DrawResult = {
        input: trimmed,
        inputExcerpt: buildInputExcerpt(trimmed),
        cards,
        reading: generateReading(trimmed, cards),
        createdAt: Date.now(),
      };

      startTransition(() => {
        setResult(nextResult);
        setStatus("result");
      });
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 900);
  };

  const handleReset = () => {
    if (drawTimerRef.current) {
      window.clearTimeout(drawTimerRef.current);
    }

    setResult(null);
    setFeedbackMessage(null);
    setFeedbackTone(null);
    startTransition(() => setStatus("idle"));
  };

  const handleCopy = async () => {
    if (!result) {
      return;
    }

    try {
      await copyText(formatResult(result));
      setFeedback("Copied the prophecy to your clipboard.", "success");
    } catch {
      setFeedback("Clipboard ritual interrupted. Try again in this browser tab.", "error");
    }
  };

  const handleScreenshot = async () => {
    if (!result || !resultRef.current) {
      return;
    }

    try {
      const dataUrl = await captureElementAsPng(resultRef.current);
      downloadPng(dataUrl, `segfault-shrine-${result.createdAt}.png`);
      setFeedback("Screenshot prepared. The relic is downloading.", "success");
    } catch {
      setFeedback("Screenshot ritual interrupted. Please try once more.", "error");
    }
  };

  const hasResult = status === "result" && result !== null;
  const hasError = status === "error";
  const isDrawing = status === "drawing";
  const spreadCards: TarotVisualCard[] = hasResult
    ? result.cards.map((entry) => toVisualCard(entry.card, entry.orientation))
    : previewCards;
  const traceValue = result?.inputExcerpt ?? input.trim();

  return (
    <div className={styles.shell}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <ErrorInput
            value={input}
            onChange={handleInputChange}
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
              {isDrawing ? "Aligning core dump sigils..." : "▶ 抽牌 · DRAW CARDS"}
            </button>
          </div>
        </section>

        <section className={styles.resultShell} ref={resultRef}>
          <TarotSpread
            status={status}
            cards={spreadCards}
            traceValue={traceValue}
          />

          <InterpretationPanel
            status={status}
            result={result}
          />

          <ResultActions
            hasResult={hasResult}
            isBusy={isDrawing}
            feedbackMessage={feedbackMessage}
            feedbackTone={feedbackTone}
            onDrawAgain={handleReset}
            onCopy={handleCopy}
            onScreenshot={handleScreenshot}
          />
        </section>

        <footer className={styles.footer}>
          <span>故障神龛 · SEGFAULT.SHRINE</span>
          <span>构建数: ∞ — 缺陷数: ∞+1</span>
          <span>v0.13.3</span>
        </footer>
      </main>
    </div>
  );
}
