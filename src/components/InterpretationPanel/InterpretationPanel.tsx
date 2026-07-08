import type { AppStatus, DrawResult } from "../../types/tarot";
import styles from "./InterpretationPanel.module.css";

type InterpretationPanelProps = {
  status: AppStatus;
  result: DrawResult | null;
};

export function InterpretationPanel({ status, result }: InterpretationPanelProps) {
  const panelHeader = (
    <div className={styles.panelHeader}>
      <span className={styles.panelDot} />
      <span className={styles.panelLabel}>
        神谕解读 <span className={styles.panelDivider}>·</span> ORACLE INTERPRETATION
      </span>
    </div>
  );

  if (status === "drawing") {
    return (
      <section className={styles.panel}>
        {panelHeader}
        <h2 className={styles.title}>The Shrine is reading the stack.</h2>
        <p className={styles.body}>
          Parsing omens, rotating three bug vectors, and pretending this is a
          deterministic process.
        </p>
        <div className={styles.loadingShell}>
          <div className={styles.loadingPulse} aria-hidden="true" />
          <p className={styles.loadingLabel}>Aligning core dump sigils...</p>
        </div>
      </section>
    );
  }

  if (status !== "result" || !result) {
    return (
      <section className={styles.panel}>
        {panelHeader}
        <h2 className={styles.title}>The Shrine is waiting.</h2>
        <p className={styles.body}>
          Offer a stack trace and the Shrine will reveal three distinct bug omens,
          a suspiciously confident reading, and a shareable debug prophecy.
        </p>
      </section>
    );
  }

  const { reading, inputExcerpt } = result;

  return (
    <section className={styles.panel}>
      {panelHeader}
      <p className={styles.kicker}>{reading.title}</p>
      <h2 className={styles.title}>Your stack trace has been witnessed.</h2>
      <p className={styles.summary}>{inputExcerpt}</p>
      <p className={styles.body}>{reading.summary}</p>

      <div className={styles.list}>
        {reading.cardReadings.map((entry) => (
          <article className={styles.item} key={entry.cardId}>
            <p className={styles.itemLabel}>
              {result.cards.find((cardEntry) => cardEntry.card.id === entry.cardId)?.card.name ??
                entry.cardId}
            </p>
            <p className={styles.itemText}>{entry.text}</p>
            <p className={styles.itemAdvice}>{entry.advice}</p>
          </article>
        ))}
      </div>

      <p className={styles.verdict}>{reading.verdict}</p>
    </section>
  );
}
