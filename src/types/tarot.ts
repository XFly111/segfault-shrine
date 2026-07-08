export type AppStatus =
  | "idle"
  | "error"
  | "drawing"
  | "result"
  | "screenshotError";

export type CardTone = "oracle" | "data" | "panic";

export type BugCategory =
  | "type"
  | "nullish"
  | "dependency"
  | "environment"
  | "cache"
  | "async"
  | "memory"
  | "logic"
  | "io"
  | "build"
  | "legacy"
  | "unknown";

export type TarotCard = {
  id: string;
  name: string;
  roman: string;
  symbol: string;
  subtitle: string;
  keywords: string[];
  bugCategory: BugCategory;
  tone: CardTone;
  uprightMeaning: string;
  reversedMeaning?: string;
  debugAdvice: string;
  matchTerms: string[];
};

export type TarotVisualCard = Pick<
  TarotCard,
  "id" | "roman" | "symbol" | "name" | "subtitle" | "tone"
>;

export type DrawnCard = {
  card: TarotCard;
  orientation: "upright" | "reversed";
};

export type Reading = {
  title: string;
  summary: string;
  verdict: string;
  cardReadings: Array<{
    cardId: string;
    text: string;
    advice: string;
  }>;
};

export type DrawResult = {
  input: string;
  inputExcerpt: string;
  cards: DrawnCard[];
  reading: Reading;
  createdAt: number;
};
