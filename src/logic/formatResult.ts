import type { DrawResult } from "../types/tarot";

export function formatResult(result: DrawResult): string {
  const cardLines = result.cards.map((entry) => `- ${entry.card.name}`).join("\n");

  return [
    "Segfault Shrine",
    result.inputExcerpt,
    cardLines,
    result.reading.verdict,
  ].join("\n");
}
