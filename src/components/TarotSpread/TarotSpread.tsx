import type { AppStatus, TarotVisualCard } from "../../types/tarot";
import { TarotCard } from "../TarotCard/TarotCard";
import styles from "./TarotSpread.module.css";

type TarotSpreadProps = {
  status: AppStatus;
  cards: TarotVisualCard[];
  traceValue: string;
};

export function TarotSpread({
  status,
  cards,
  traceValue,
}: TarotSpreadProps) {
  const activeInput = traceValue.trim() || "No stack trace offered yet.";

  return (
    <section className={styles.wrapper}>
      <div className={styles.traceBox}>
        <p className={styles.traceLabel}>Sacrificed error log</p>
        <p className={styles.traceValue}>{activeInput}</p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <TarotCard
            key={card.id}
            card={card}
            revealed={status === "result"}
          />
        ))}
      </div>
    </section>
  );
}
