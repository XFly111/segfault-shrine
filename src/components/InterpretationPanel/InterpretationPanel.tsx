import type { AppStatus, Reading } from "../../types/tarot";
import styles from "./InterpretationPanel.module.css";

type InterpretationPanelProps = {
  status: AppStatus;
  input: string;
  reading: Reading;
};

export function InterpretationPanel({
  status,
  input,
  reading,
}: InterpretationPanelProps) {
  if (status !== "result") {
    return (
      <section className={styles.panel}>
        <p className={styles.kicker}>Oracle Interpretation</p>
        <h2 className={styles.title}>The Shrine is waiting.</h2>
        <p className={styles.body}>
          Draw once and we will swap this placeholder with a real reading flow,
          a result panel, and share-ready content.
        </p>
      </section>
    );
  }

  const excerpt = input.trim().slice(0, 96);

  return (
    <section className={styles.panel}>
      <p className={styles.kicker}>{reading.title}</p>
      <h2 className={styles.title}>Your stack trace has been witnessed.</h2>
      <p className={styles.summary}>
        {excerpt}
      </p>
      <p className={styles.body}>{reading.summary}</p>

      <div className={styles.list}>
        {reading.cardReadings.map((entry) => (
          <article className={styles.item} key={entry.cardId}>
            <p className={styles.itemText}>{entry.text}</p>
            <p className={styles.itemAdvice}>{entry.advice}</p>
          </article>
        ))}
      </div>

      <p className={styles.verdict}>{reading.verdict}</p>
    </section>
  );
}
