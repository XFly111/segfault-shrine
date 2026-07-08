import type { DrawResult } from "../types/tarot";

export function formatResult(result: DrawResult): string {
  const cardLines = result.cards
    .map((entry, index) => {
      const reading = result.reading.cardReadings[index];
      const text = reading?.text ?? entry.card.uprightMeaning;
      const advice = reading?.advice ?? `Ritual action: ${entry.card.debugAdvice}`;

      return [
        `${index + 1}. ${entry.card.name} (${entry.orientation})`,
        `   ${text}`,
        `   ${advice}`,
      ].join("\n");
    })
    .join("\n");

  return [
    "Segfault Shrine",
    `Input: ${result.inputExcerpt}`,
    "",
    "Draw:",
    cardLines,
    "",
    result.reading.summary,
    "",
    `Verdict: ${result.reading.verdict}`,
  ].join("\n");
}
