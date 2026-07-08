import type { DrawnCard, TarotCard } from "../types/tarot";

export function drawCards(cards: TarotCard[]): DrawnCard[] {
  return cards.slice(0, 3).map((card, index) => ({
    card,
    orientation: index === 2 ? "reversed" : "upright",
  }));
}
