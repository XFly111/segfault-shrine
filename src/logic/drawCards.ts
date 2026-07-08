import { keywordRules } from "../data/keywordRules";
import type {
  BugCategory,
  CardOrientation,
  DrawnCard,
  TarotCard,
} from "../types/tarot";

const DRAW_COUNT = 3;
const BASE_WEIGHT = 1;
const CATEGORY_WEIGHT = 4;
const TERM_WEIGHT = 3;
const KEYWORD_WEIGHT = 1;

function addWeight<K extends string>(
  target: Map<K, number>,
  key: K,
  amount: number,
) {
  target.set(key, (target.get(key) ?? 0) + amount);
}

function weightedPickIndex(weights: number[]) {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let roll = Math.random() * total;

  for (let index = 0; index < weights.length; index += 1) {
    roll -= weights[index] ?? 0;

    if (roll <= 0) {
      return index;
    }
  }

  return weights.length - 1;
}

function normalizeInput(input: string) {
  return input.toLowerCase();
}

function scoreCards(input: string, cards: TarotCard[]) {
  const normalized = normalizeInput(input);
  const categoryWeights = new Map<BugCategory, number>();
  const cardWeights = new Map<string, number>();

  keywordRules.forEach((rule) => {
    const hasMatch = rule.terms.some((term) => normalized.includes(term));

    if (!hasMatch) {
      return;
    }

    const boost = rule.weight ?? CATEGORY_WEIGHT;

    rule.categories?.forEach((category) => {
      addWeight(categoryWeights, category, boost);
    });

    rule.cardIds?.forEach((cardId) => {
      addWeight(cardWeights, cardId, boost + 1);
    });
  });

  return cards.map((card) => {
    let weight =
      BASE_WEIGHT +
      (categoryWeights.get(card.bugCategory) ?? 0) +
      (cardWeights.get(card.id) ?? 0);

    card.matchTerms.forEach((term) => {
      if (normalized.includes(term)) {
        weight += TERM_WEIGHT;
      }
    });

    card.keywords.forEach((keyword) => {
      if (normalized.includes(keyword.toLowerCase())) {
        weight += KEYWORD_WEIGHT;
      }
    });

    return {
      card,
      weight: Math.max(BASE_WEIGHT, weight),
    };
  });
}

function rollOrientation(weight: number): CardOrientation {
  const reversedChance = weight >= 9 ? 0.18 : 0.3;
  return Math.random() < reversedChance ? "reversed" : "upright";
}

export function drawCards(cards: TarotCard[], input: string): DrawnCard[] {
  const pool = scoreCards(input, cards);
  const draw: DrawnCard[] = [];

  while (draw.length < DRAW_COUNT && pool.length > 0) {
    const pickIndex = weightedPickIndex(pool.map((entry) => entry.weight));
    const [picked] = pool.splice(pickIndex, 1);

    if (!picked) {
      break;
    }

    draw.push({
      card: picked.card,
      orientation: rollOrientation(picked.weight),
    });
  }

  return draw;
}
