import type { BugCategory } from "../types/tarot";

export type KeywordRule = {
  terms: string[];
  categories?: BugCategory[];
  cardIds?: string[];
  weight?: number;
};

export const keywordRules: KeywordRule[] = [
  {
    terms: ["segmentation fault", "segfault", "sigsegv", "core dumped", "access violation"],
    categories: ["memory", "legacy"],
    cardIds: ["segmentation-fault", "memory-leak", "ancestor-code"],
    weight: 7,
  },
  {
    terms: ["null", "nil", "none", "undefined", "cannot read", "nullreference"],
    categories: ["nullish", "type"],
    cardIds: ["null-pointer", "undefined-oracle"],
    weight: 6,
  },
  {
    terms: ["typeerror", "attributeerror", "class cast", "invalid cast", "not a function"],
    categories: ["type"],
    cardIds: ["undefined-oracle", "mutation-echo"],
    weight: 5,
  },
  {
    terms: ["module not found", "cannot find module", "importerror", "peer dependency", "version mismatch"],
    categories: ["dependency", "build"],
    cardIds: ["import-phantom", "dependency-knot", "version-curse"],
    weight: 6,
  },
  {
    terms: ["cache", "stale", "artifact", "incremental", "memoized"],
    categories: ["cache"],
    cardIds: ["cursed-cache", "shadow-state"],
    weight: 5,
  },
  {
    terms: ["timeout", "timed out", "socket", "connection reset", "econnreset", "network"],
    categories: ["io", "async"],
    cardIds: ["socket-whisper", "retry-storm", "async-abyss"],
    weight: 6,
  },
  {
    terms: ["memory", "heap", "oom", "malloc", "leak"],
    categories: ["memory"],
    cardIds: ["memory-leak", "file-handle-revenant"],
    weight: 6,
  },
  {
    terms: ["lock", "mutex", "deadlock", "blocked", "concurrent", "race", "await"],
    categories: ["async"],
    cardIds: ["deadlock", "race-condition", "async-abyss"],
    weight: 5,
  },
  {
    terms: ["build", "compile", "transpile", "bundle", "syntax", "parser", "vite", "webpack"],
    categories: ["build"],
    cardIds: ["build-wraith", "broken-migration"],
    weight: 5,
  },
  {
    terms: ["index", "out of bounds", "range", "boundary", "keyerror", "not found"],
    categories: ["logic"],
    cardIds: ["off-by-one", "lost-index"],
    weight: 5,
  },
  {
    terms: ["env", ".env", "config", "yaml", "json", "toml", "flag", "works on my machine"],
    categories: ["environment"],
    cardIds: ["phantom-env", "config-mirage", "feature-flag-eclipse", "container-drift"],
    weight: 5,
  },
  {
    terms: ["legacy", "deprecated", "monolith", "spaghetti", "side effect"],
    categories: ["legacy"],
    cardIds: ["ancestor-code", "monolith-promise"],
    weight: 5,
  },
  {
    terms: ["encoding", "unicode", "utf", "charset", "decode", "mojibake"],
    categories: ["io"],
    cardIds: ["encoding-hex"],
    weight: 6,
  },
  {
    terms: ["timezone", "utc", "date", "offset", "dst"],
    categories: ["logic", "environment"],
    cardIds: ["timezone-rift"],
    weight: 6,
  },
  {
    terms: ["flaky", "intermittent", "ci only", "random", "test failed", "mock"],
    categories: ["unknown", "legacy"],
    cardIds: ["flaky-familiar", "mock-betrayal"],
    weight: 5,
  },
  {
    terms: ["docker", "container", "compose", "kubernetes", "image"],
    categories: ["environment"],
    cardIds: ["container-drift", "ghost-process"],
    weight: 6,
  },
];
