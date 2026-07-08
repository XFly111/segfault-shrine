import type { CardTone, TarotVisualCard } from "../../types/tarot";
import styles from "./TarotCard.module.css";

type TarotCardProps = {
  card: TarotVisualCard;
  revealed: boolean;
};

function toneClassName(tone: CardTone) {
  if (tone === "data") {
    return styles.data;
  }

  if (tone === "panic") {
    return styles.panic;
  }

  return styles.oracle;
}

export function TarotCard({ card, revealed }: TarotCardProps) {
  const toneClass = toneClassName(card.tone);

  return (
    <article className={`${styles.card} ${toneClass}`}>
      <div className={`${styles.inner} ${revealed ? styles.revealed : ""}`}>
        <div className={styles.faceBack}>
          <div className={styles.backPattern} />
        </div>

        <div className={styles.faceFront}>
          <div className={styles.roman}>{card.roman}</div>
          <div className={styles.symbol}>{card.symbol}</div>
          <div className={styles.title}>{card.name}</div>
          <div className={styles.subtitle}>{card.subtitle}</div>
        </div>
      </div>
    </article>
  );
}
