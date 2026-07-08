import type { DrawnCard, Reading } from "../types/tarot";

function formatList(items: string[]) {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function toExcerpt(input: string) {
  const singleLine = input.replace(/\s+/g, " ").trim();
  return singleLine.length > 108
    ? `${singleLine.slice(0, 105)}...`
    : singleLine;
}

function getMeaning(entry: DrawnCard) {
  if (entry.orientation === "reversed") {
    return (
      entry.card.reversedMeaning ??
      `Reversed, ${entry.card.name} warns that the loudest error is only a decoy.`
    );
  }

  return entry.card.uprightMeaning;
}

function lowerFirst(value: string) {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function generateReading(input: string, cards: DrawnCard[]): Reading {
  if (cards.length < 3) {
    return {
      title: "Rite Interrupted",
      summary:
        "The Shrine did not receive enough omens to form a trustworthy diagnosis.",
      verdict:
        "Draw again after offering a fuller stack trace, then inspect the first explicit failure.",
      cardReadings: cards.map((entry) => ({
        cardId: entry.card.id,
        text: `${entry.card.name}: ${getMeaning(entry)}`,
        advice: `Ritual action: ${entry.card.debugAdvice}`,
      })),
    };
  }

  const excerpt = toExcerpt(input);
  const cardNames = cards.map((entry) => entry.card.name);
  const categoryNames = Array.from(
    new Set(cards.map((entry) => entry.card.bugCategory)),
  );
  const firstCard = cards[0]!;
  const secondCard = cards[1]!;
  const thirdCard = cards[2]!;

  return {
    title: `Rite of ${firstCard.card.name}`,
    summary: `The Shrine listened to "${excerpt}" and surfaced ${formatList(cardNames)}. This does not read like one bug wearing one mask; it reads like a ${formatList(categoryNames)} disturbance echoing across the same failing path.`,
    verdict: `Do not appease the symptom with a random hotfix. Begin with ${lowerFirst(firstCard.card.debugAdvice)} Then ${lowerFirst(secondCard.card.debugAdvice)} Finally, ${lowerFirst(thirdCard.card.debugAdvice)}`,
    cardReadings: cards.map((entry) => ({
      cardId: entry.card.id,
      text: `${entry.orientation === "reversed" ? "Reversed" : "Upright"} ${entry.card.name}: ${getMeaning(entry)}`,
      advice: `Ritual action: ${entry.card.debugAdvice}`,
    })),
  };
}
