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

function toneColor(tone: CardTone) {
  if (tone === "data") {
    return "#22D3EE";
  }

  if (tone === "panic") {
    return "#EF4444";
  }

  return "#A855F7";
}

function CardBackSVG() {
  const ticks = Array.from({ length: 24 }, (_, index) => {
    const angle = (index * Math.PI * 2) / 24;
    const innerRadius = 61;
    const outerRadius = 68;

    return {
      x1: 100 + innerRadius * Math.cos(angle),
      y1: 160 + innerRadius * Math.sin(angle),
      x2: 100 + outerRadius * Math.cos(angle),
      y2: 160 + outerRadius * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="200" height="320" fill="#18181B" />
      <rect x="5" y="5" width="190" height="310" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.65" />
      <rect x="9" y="9" width="182" height="302" fill="none" stroke="#A855F7" strokeWidth="0.3" opacity="0.3" />
      <line x1="100" y1="15" x2="100" y2="305" stroke="#22D3EE" strokeWidth="0.25" opacity="0.1" />
      <line x1="15" y1="160" x2="185" y2="160" stroke="#22D3EE" strokeWidth="0.25" opacity="0.1" />
      <circle cx="100" cy="160" r="66" fill="none" stroke="#A855F7" strokeWidth="0.5" opacity="0.35" />
      <circle cx="100" cy="160" r="48" fill="none" stroke="#A855F7" strokeWidth="0.3" opacity="0.2" />
      <line x1="53" y1="113" x2="147" y2="207" stroke="#22D3EE" strokeWidth="0.4" opacity="0.25" />
      <line x1="147" y1="113" x2="53" y2="207" stroke="#22D3EE" strokeWidth="0.4" opacity="0.25" />
      {ticks.map((tick, index) => (
        <line
          key={index}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="#A855F7"
          strokeWidth="0.5"
          opacity="0.45"
        />
      ))}
      <polygon points="100,118 126,152 114,183 86,183 74,152" fill="none" stroke="#A855F7" strokeWidth="0.7" opacity="0.45" />
      <circle cx="100" cy="160" r="10" fill="#A855F7" opacity="0.08" />
      <circle cx="100" cy="160" r="3.5" fill="#A855F7" opacity="0.55" />
      <text x="15" y="29" fill="#A855F7" fontSize="7" opacity="0.45" fontFamily="monospace">0xDEAD</text>
      <text x="148" y="29" fill="#A855F7" fontSize="7" opacity="0.45" fontFamily="monospace">0xBEEF</text>
      <text x="15" y="312" fill="#A855F7" fontSize="7" opacity="0.45" fontFamily="monospace">SIGFLT</text>
      <text x="143" y="312" fill="#A855F7" fontSize="7" opacity="0.45" fontFamily="monospace">SIGSEG</text>
      <line x1="15" y1="37" x2="80" y2="37" stroke="#A855F7" strokeWidth="0.4" opacity="0.35" />
      <line x1="120" y1="37" x2="185" y2="37" stroke="#A855F7" strokeWidth="0.4" opacity="0.35" />
      <line x1="15" y1="283" x2="80" y2="283" stroke="#A855F7" strokeWidth="0.4" opacity="0.35" />
      <line x1="120" y1="283" x2="185" y2="283" stroke="#A855F7" strokeWidth="0.4" opacity="0.35" />
      <text x="100" y="41" textAnchor="middle" fill="#A855F7" fontSize="7.5" opacity="0.55" fontFamily="monospace" letterSpacing="3">SHRINE</text>
      <text x="100" y="279" textAnchor="middle" fill="#A855F7" fontSize="7.5" opacity="0.55" fontFamily="monospace" letterSpacing="3">SHRINE</text>
      <circle cx="20" cy="20" r="2" fill="#A855F7" opacity="0.4" />
      <circle cx="180" cy="20" r="2" fill="#A855F7" opacity="0.4" />
      <circle cx="20" cy="300" r="2" fill="#A855F7" opacity="0.4" />
      <circle cx="180" cy="300" r="2" fill="#A855F7" opacity="0.4" />
    </svg>
  );
}

function CardFrontSVG({ card }: { card: TarotVisualCard }) {
  const accent = toneColor(card.tone);
  const isReversed = card.orientation === "reversed";
  const orientationCopy = isReversed ? "↙ 逆位 · REVERSED" : "↗ 正位 · UPRIGHT";
  const orientationColor = isReversed ? "#EF4444" : "#A855F7";

  return (
    <svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <rect width="200" height="320" fill="#0D0D10" />
      <rect width="200" height="320" fill={accent} opacity="0.04" />
      <rect x="5" y="5" width="190" height="310" fill="none" stroke={accent} strokeWidth="1" opacity="0.8" />
      <rect x="9" y="9" width="182" height="302" fill="none" stroke={accent} strokeWidth="0.3" opacity="0.35" />
      <line x1="15" y1="50" x2="185" y2="50" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="270" x2="185" y2="270" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      <text x="100" y="37" textAnchor="middle" fill={accent} fontSize="9.5" fontFamily="monospace" letterSpacing="4" opacity="0.85">
        {card.roman}
      </text>
      <rect x="20" y="58" width="160" height="204" fill={accent} opacity="0.03" />
      <rect x="20" y="58" width="8" height="1" fill={accent} opacity="0.4" />
      <rect x="20" y="58" width="1" height="8" fill={accent} opacity="0.4" />
      <rect x="172" y="58" width="8" height="1" fill={accent} opacity="0.4" />
      <rect x="179" y="58" width="1" height="8" fill={accent} opacity="0.4" />
      <rect x="20" y="261" width="8" height="1" fill={accent} opacity="0.4" />
      <rect x="20" y="254" width="1" height="8" fill={accent} opacity="0.4" />
      <rect x="172" y="261" width="8" height="1" fill={accent} opacity="0.4" />
      <rect x="179" y="254" width="1" height="8" fill={accent} opacity="0.4" />
      <text
        x="100"
        y="166"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={accent}
        fontSize="56"
        opacity="0.92"
        fontFamily="Georgia, serif"
      >
        {card.symbol}
      </text>
      <text
        x="100"
        y="225"
        textAnchor="middle"
        fill={orientationColor}
        fontSize="9"
        fontFamily="'JetBrains Mono', monospace"
        opacity="0.88"
        letterSpacing="0.45"
      >
        {orientationCopy}
      </text>
      <text
        x="100"
        y="286"
        textAnchor="middle"
        fill="#E4E4E7"
        fontSize="10.5"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        opacity="0.95"
      >
        {`“${card.name.toUpperCase()}”`}
      </text>
      <text
        x="100"
        y="301"
        textAnchor="middle"
        fill={accent}
        fontSize="7"
        fontFamily="'JetBrains Mono', monospace"
        opacity="0.6"
        letterSpacing="0.5"
      >
        {card.subtitle}
      </text>
      <circle cx="18" cy="315" r="1.5" fill={accent} opacity="0.4" />
      <circle cx="182" cy="315" r="1.5" fill={accent} opacity="0.4" />
    </svg>
  );
}

export function TarotCard({ card, revealed }: TarotCardProps) {
  const toneClass = toneClassName(card.tone);
  const accent = toneColor(card.tone);

  return (
    <article className={`${styles.card} ${toneClass}`}>
      <div
        className={`${styles.inner} ${revealed ? styles.revealed : ""}`}
        style={{
          boxShadow: revealed
            ? `0 0 40px ${accent}22, 0 20px 40px rgba(0,0,0,0.6)`
            : "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <div className={styles.faceBack}>
          <CardBackSVG />
        </div>

        <div className={styles.faceFront}>
          <CardFrontSVG card={card} />
        </div>
      </div>
    </article>
  );
}
