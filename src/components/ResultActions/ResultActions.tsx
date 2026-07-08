import { Button } from "../Button/Button";
import styles from "./ResultActions.module.css";

type FeedbackTone = "success" | "error";

type ResultActionsProps = {
  hasResult: boolean;
  isBusy: boolean;
  feedbackMessage: string | null;
  feedbackTone: FeedbackTone | null;
  onDrawAgain: () => void;
  onCopy: () => void;
  onScreenshot: () => void;
};

export function ResultActions({
  hasResult,
  isBusy,
  feedbackMessage,
  feedbackTone,
  onDrawAgain,
  onCopy,
  onScreenshot,
}: ResultActionsProps) {
  if (!hasResult && !feedbackMessage) {
    return null;
  }

  return (
    <section className={styles.actions}>
      <Button onClick={onDrawAgain} variant="secondary" disabled={isBusy}>
        Draw Again
      </Button>
      <Button
        disabled={!hasResult || isBusy}
        variant="secondary"
        onClick={onCopy}
      >
        Copy Result
      </Button>
      <Button
        disabled={!hasResult || isBusy}
        variant="secondary"
        onClick={onScreenshot}
      >
        Save Screenshot
      </Button>
      {feedbackMessage ? (
        <p
          className={`${styles.feedback} ${feedbackTone === "error" ? styles.error : styles.success}`}
        >
          {feedbackMessage}
        </p>
      ) : null}
    </section>
  );
}
