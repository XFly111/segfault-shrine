import type { DrawnCard, Reading } from "../types/tarot";

export function generateReading(input: string, cards: DrawnCard[]): Reading {
  return {
    title: "Oracle Interpretation",
    summary: input.trim() || "No stack trace offered.",
    verdict: "Scaffold placeholder reading.",
    cardReadings: cards.map((entry) => ({
      cardId: entry.card.id,
      text: entry.card.name,
      advice: entry.card.debugAdvice,
    })),
  };
}
