import type {
  CardOrientation,
  TarotCard,
  TarotVisualCard,
} from "../types/tarot";

function card(entry: TarotCard): TarotCard {
  return entry;
}

export const tarotDeck: TarotCard[] = [
  card({
    id: "null-pointer",
    roman: "I",
    symbol: "∅",
    name: "The Null Pointer",
    subtitle: "The Empty Throne",
    keywords: ["absence", "dereference", "void"],
    bugCategory: "nullish",
    tone: "panic",
    uprightMeaning:
      "Something sacred was invoked before it had ever been given form.",
    reversedMeaning:
      "The obvious null is only the messenger; the real sin happened one layer earlier.",
    debugAdvice:
      "Trace the value back to its first assignment and guard the missing branch.",
    matchTerms: ["null pointer", "nullreference", "nil", "none", "undefined"],
  }),
  card({
    id: "undefined-oracle",
    roman: "II",
    symbol: "??",
    name: "The Undefined Oracle",
    subtitle: "She Who Was Never Declared",
    keywords: ["scope", "type", "assumption"],
    bugCategory: "type",
    tone: "data",
    uprightMeaning:
      "A value was trusted by prophecy rather than by inspection.",
    reversedMeaning:
      "Your types look convinced, but runtime reality has already defected.",
    debugAdvice:
      "Inspect the runtime shape and verify every assumption crossing a boundary.",
    matchTerms: ["undefined", "not defined", "typeerror", "attributeerror"],
  }),
  card({
    id: "off-by-one",
    roman: "III",
    symbol: "±1",
    name: "The Off-by-One",
    subtitle: "The Almost-Right Oracle",
    keywords: ["boundary", "index", "range"],
    bugCategory: "logic",
    tone: "data",
    uprightMeaning:
      "The ritual failed not through malice, but through a single misplaced boundary.",
    reversedMeaning:
      "The count is innocent; the collection you trusted may already be malformed.",
    debugAdvice:
      "Audit loop limits, array bounds, and inclusive-versus-exclusive comparisons.",
    matchTerms: ["index out of range", "out of bounds", "off by one", "rangeerror"],
  }),
  card({
    id: "dependency-knot",
    roman: "IV",
    symbol: "⛓",
    name: "The Dependency Knot",
    subtitle: "Three Versions Entered, None Agreed",
    keywords: ["version", "peer", "package"],
    bugCategory: "dependency",
    tone: "oracle",
    uprightMeaning:
      "The shrine hears many packages chanting the same name in different tongues.",
    reversedMeaning:
      "A dependency was blamed, but the real fracture lies in the toolchain around it.",
    debugAdvice:
      "Inspect version drift, peer requirements, and duplicate transitive packages.",
    matchTerms: ["dependency", "peer", "package", "node_modules", "version"],
  }),
  card({
    id: "cursed-cache",
    roman: "V",
    symbol: "⌘",
    name: "The Cursed Cache",
    subtitle: "Artifact of Yesterday's Build",
    keywords: ["stale", "artifact", "invalidate"],
    bugCategory: "cache",
    tone: "oracle",
    uprightMeaning:
      "Old state lingers in hidden chambers, convincing fresh code to wear old mistakes.",
    reversedMeaning:
      "You cleared one cache and angered the other three still nesting underneath.",
    debugAdvice:
      "Invalidate build, package, and browser caches before chasing deeper causes.",
    matchTerms: ["cache", "stale", "incremental", "artifact"],
  }),
  card({
    id: "ancestor-code",
    roman: "VI",
    symbol: "🜂",
    name: "Ancestor Code",
    subtitle: "Legacy Whispers Through Comments",
    keywords: ["legacy", "deprecated", "inheritance"],
    bugCategory: "legacy",
    tone: "oracle",
    uprightMeaning:
      "The current failure inherits obligations from a design nobody still remembers.",
    reversedMeaning:
      "The old code is ugly, yes, but the new patch may have broken its secret treaty.",
    debugAdvice:
      "Read the oldest call sites and verify what hidden contracts the code still expects.",
    matchTerms: ["legacy", "deprecated", "monolith", "spaghetti", "god class"],
  }),
  card({
    id: "memory-leak",
    roman: "VII",
    symbol: "◈",
    name: "The Memory Leak",
    subtitle: "Hoarder of Allocated Realms",
    keywords: ["heap", "retain", "allocation"],
    bugCategory: "memory",
    tone: "panic",
    uprightMeaning:
      "The heap is remembering what your code never formally released.",
    reversedMeaning:
      "The leak may be real, but the spike could still be an innocent witness to something hotter.",
    debugAdvice:
      "Profile allocations, subscriptions, and object retention across the failing path.",
    matchTerms: ["memory leak", "out of memory", "heap", "malloc", "oom"],
  }),
  card({
    id: "deadlock",
    roman: "VIII",
    symbol: "⊛",
    name: "The Deadlock",
    subtitle: "Two Threads, One Grudge",
    keywords: ["lock", "wait", "contention"],
    bugCategory: "async",
    tone: "panic",
    uprightMeaning:
      "Progress stopped because two promises to cooperate became vows to wait forever.",
    reversedMeaning:
      "The freeze is not mutual exclusion itself, but a starvation ritual wearing its robes.",
    debugAdvice:
      "Map lock ordering, awaited resources, and any path that can block while holding state.",
    matchTerms: ["deadlock", "lock", "mutex", "blocked", "waiting"],
  }),
  card({
    id: "race-condition",
    roman: "IX",
    symbol: "⇄",
    name: "The Race Condition",
    subtitle: "First to Finish, Last to Behave",
    keywords: ["concurrency", "timing", "ordering"],
    bugCategory: "async",
    tone: "data",
    uprightMeaning:
      "Two timelines touched the same state and left conflicting stories behind.",
    reversedMeaning:
      "The race is only visible now because a previous state mutation was never made explicit.",
    debugAdvice:
      "Instrument timing, isolate shared state, and make ordering requirements explicit.",
    matchTerms: ["race", "concurrent", "parallel", "promise", "await"],
  }),
  card({
    id: "phantom-env",
    roman: "X",
    symbol: "ENV",
    name: "The Phantom Env",
    subtitle: "Works on One Machine Only",
    keywords: ["environment", "variable", "machine"],
    bugCategory: "environment",
    tone: "oracle",
    uprightMeaning:
      "A hidden environment assumption made one machine blessed and another accursed.",
    reversedMeaning:
      "The env file is noisy, but the actual betrayal may be a default you forgot existed.",
    debugAdvice:
      "Compare environment variables, runtime versions, and local-versus-deploy defaults.",
    matchTerms: ["env", ".env", "environment", "works on my machine", "variable"],
  }),
  card({
    id: "build-wraith",
    roman: "XI",
    symbol: "⚙",
    name: "The Build Wraith",
    subtitle: "Compiler of Unfinished Intentions",
    keywords: ["compile", "transpile", "bundle"],
    bugCategory: "build",
    tone: "oracle",
    uprightMeaning:
      "The code may be sincere, but the build ritual translated it into another language with its own grudges.",
    reversedMeaning:
      "The compiler screams at the surface while the real problem lives in generated or configured code.",
    debugAdvice:
      "Check bundler config, generated files, and mismatched transpilation targets.",
    matchTerms: ["build", "compile", "transpile", "bundle", "vite", "webpack"],
  }),
  card({
    id: "infinite-loop",
    roman: "XII",
    symbol: "∞",
    name: "The Infinite Loop",
    subtitle: "The Algorithm Eats Its Tail",
    keywords: ["recursion", "termination", "spin"],
    bugCategory: "logic",
    tone: "panic",
    uprightMeaning:
      "A condition meant to end the ritual instead became the reason it never ends.",
    reversedMeaning:
      "The loop is visible, but the true culprit may be state that never meaningfully changes.",
    debugAdvice:
      "Validate termination conditions and inspect whether state transitions actually progress.",
    matchTerms: ["infinite loop", "maximum call stack", "recursion", "stack overflow"],
  }),
  card({
    id: "silent-catch",
    roman: "XIII",
    symbol: "…",
    name: "The Silent Catch",
    subtitle: "Error Swallowed Before Testimony",
    keywords: ["exception", "masking", "fallback"],
    bugCategory: "unknown",
    tone: "data",
    uprightMeaning:
      "A prior exception was quietly buried, leaving only a weaker symptom behind.",
    reversedMeaning:
      "The catch block is noisy, but the real silence happened in an ignored return path.",
    debugAdvice:
      "Log suppressed errors and remove fallbacks that hide the original failure.",
    matchTerms: ["caught", "swallowed", "fallback", "suppressed", "ignored"],
  }),
  card({
    id: "timezone-rift",
    roman: "XIV",
    symbol: "UTC",
    name: "The Timezone Rift",
    subtitle: "Midnight Belongs to No One",
    keywords: ["date", "offset", "locale"],
    bugCategory: "logic",
    tone: "data",
    uprightMeaning:
      "Time itself is not wrong, but two layers disagree on whose clock gets the final word.",
    reversedMeaning:
      "The offset looks cursed, yet the true crack may be string parsing dressed as time logic.",
    debugAdvice:
      "Normalize timestamps, inspect parsing boundaries, and verify timezone assumptions end to end.",
    matchTerms: ["timezone", "utc", "date", "dst", "offset"],
  }),
  card({
    id: "permission-denied",
    roman: "XV",
    symbol: "⛔",
    name: "Permission Denied",
    subtitle: "Gatekeeper of the File Realm",
    keywords: ["access", "ownership", "policy"],
    bugCategory: "io",
    tone: "panic",
    uprightMeaning:
      "The operation was valid in spirit, but denied by a boundary you did not negotiate.",
    reversedMeaning:
      "Permissions are loud, yet the path, user, or mount may be the true imposter.",
    debugAdvice:
      "Verify ownership, execution context, and whether the target path is what you think it is.",
    matchTerms: ["permission denied", "eacces", "forbidden", "access denied"],
  }),
  card({
    id: "encoding-hex",
    roman: "XVI",
    symbol: "UTF",
    name: "The Encoding Hex",
    subtitle: "One Text, Many Curses",
    keywords: ["charset", "unicode", "bytes"],
    bugCategory: "io",
    tone: "oracle",
    uprightMeaning:
      "The data arrived intact, but was interpreted through the wrong alphabet of reality.",
    reversedMeaning:
      "The mojibake is not the source; upstream bytes may already be malformed.",
    debugAdvice:
      "Inspect file encodings, request headers, and byte-to-string conversion boundaries.",
    matchTerms: ["encoding", "utf", "unicode", "charset", "decode"],
  }),
  card({
    id: "import-phantom",
    roman: "XVII",
    symbol: "↥",
    name: "The Import Phantom",
    subtitle: "Module Sought, Module Missing",
    keywords: ["resolver", "path", "module"],
    bugCategory: "dependency",
    tone: "data",
    uprightMeaning:
      "A symbol was summoned from a path the runtime no longer recognizes.",
    reversedMeaning:
      "The import is blamed, but the export shape may have already shifted beneath it.",
    debugAdvice:
      "Check alias resolution, file casing, and whether the imported symbol still exists.",
    matchTerms: ["cannot find module", "module not found", "importerror", "require"],
  }),
  card({
    id: "flaky-familiar",
    roman: "XVIII",
    symbol: "🎲",
    name: "The Flaky Familiar",
    subtitle: "Passes in Secret, Fails in Public",
    keywords: ["test", "non-deterministic", "timing"],
    bugCategory: "unknown",
    tone: "oracle",
    uprightMeaning:
      "The failure appears only when observed from the wrong angle or under impatient clocks.",
    reversedMeaning:
      "Randomness is the scapegoat; shared state may be rehearsing the betrayal.",
    debugAdvice:
      "Stabilize test timing, isolate globals, and seed any source of randomness.",
    matchTerms: ["flaky", "intermittent", "random", "test failed", "ci only"],
  }),
  card({
    id: "socket-whisper",
    roman: "XIX",
    symbol: "↯",
    name: "The Socket Whisper",
    subtitle: "Connection Lost Between Heartbeats",
    keywords: ["network", "timeout", "transport"],
    bugCategory: "io",
    tone: "data",
    uprightMeaning:
      "The message was true, but the channel carrying it could not survive the journey.",
    reversedMeaning:
      "The timeout is visible, though the deeper wound may be retries multiplying in the dark.",
    debugAdvice:
      "Inspect network boundaries, retry policy, and what happens before the timeout fires.",
    matchTerms: ["timeout", "socket", "network", "connection reset", "econnreset"],
  }),
  card({
    id: "config-mirage",
    roman: "XX",
    symbol: "⚚",
    name: "The Config Mirage",
    subtitle: "Every Layer Has a Different Truth",
    keywords: ["config", "flag", "default"],
    bugCategory: "environment",
    tone: "data",
    uprightMeaning:
      "The system obeyed configuration exactly, which is why the outcome feels so wrong.",
    reversedMeaning:
      "The config file is not lying, but another layer overrode it with quiet confidence.",
    debugAdvice:
      "List effective config values at runtime and identify the final source of truth.",
    matchTerms: ["config", "yaml", "json", "toml", "flag"],
  }),
  card({
    id: "async-abyss",
    roman: "XXI",
    symbol: "⟳",
    name: "The Async Abyss",
    subtitle: "Promise Returned, Consequence Deferred",
    keywords: ["await", "task", "queue"],
    bugCategory: "async",
    tone: "oracle",
    uprightMeaning:
      "The work did not fail; it merely escaped the place where you expected it to finish.",
    reversedMeaning:
      "What looks asynchronous may actually be synchronous blockage hidden behind abstraction.",
    debugAdvice:
      "Trace promise lifecycles and verify which tasks are awaited, canceled, or detached.",
    matchTerms: ["async", "await", "promise", "task", "future"],
  }),
  card({
    id: "segmentation-fault",
    roman: "XXII",
    symbol: "SEGV",
    name: "The Segmentation Fault",
    subtitle: "Forbidden Memory, Unforgiving Consequence",
    keywords: ["pointer", "signal", "core"],
    bugCategory: "memory",
    tone: "panic",
    uprightMeaning:
      "Your code crossed into memory that did not consent to being touched.",
    reversedMeaning:
      "The crash looks low-level, but the fatal act may have been arranged far upstream.",
    debugAdvice:
      "Inspect native boundaries, pointer lifetimes, and any code path touching raw memory.",
    matchTerms: ["segmentation fault", "segfault", "core dumped", "access violation", "sigsegv"],
  }),
  card({
    id: "stale-schema",
    roman: "XXIII",
    symbol: "DB",
    name: "The Stale Schema",
    subtitle: "Table and Code No Longer Correspond",
    keywords: ["migration", "column", "schema"],
    bugCategory: "build",
    tone: "oracle",
    uprightMeaning:
      "The code remembers a field the database has already forgotten, or vice versa.",
    reversedMeaning:
      "The schema looks guilty, yet the serializer or cache may be replaying old shapes.",
    debugAdvice:
      "Verify migrations, generated clients, and whether runtime schema matches expected models.",
    matchTerms: ["schema", "migration", "column", "relation", "database"],
  }),
  card({
    id: "mock-betrayal",
    roman: "XXIV",
    symbol: "MASK",
    name: "The Mock Betrayal",
    subtitle: "Your Test Double Knows Too Much",
    keywords: ["mock", "stub", "fixture"],
    bugCategory: "legacy",
    tone: "data",
    uprightMeaning:
      "A fake collaborator taught the code habits the real world refuses to honor.",
    reversedMeaning:
      "The mock looks suspicious, but the production dependency may be violating the same contract.",
    debugAdvice:
      "Compare mocks with production interfaces and trim any test-only assumptions.",
    matchTerms: ["mock", "stub", "fixture", "spy", "jest.fn"],
  }),
  card({
    id: "version-curse",
    roman: "XXV",
    symbol: "v?",
    name: "The Version Curse",
    subtitle: "Minor Bump, Major Omen",
    keywords: ["upgrade", "breaking", "release"],
    bugCategory: "dependency",
    tone: "panic",
    uprightMeaning:
      "The upgrade promised compatibility while quietly rewriting the rules of the rite.",
    reversedMeaning:
      "The new version may be innocent; an older pin elsewhere could be the one binding the error.",
    debugAdvice:
      "Audit lockfile changes, release notes, and any transitive version mismatches.",
    matchTerms: ["upgrade", "downgrade", "breaking change", "semver", "lockfile"],
  }),
  card({
    id: "mutation-echo",
    roman: "XXVI",
    symbol: "≈",
    name: "The Mutation Echo",
    subtitle: "Shared State Remembers Every Touch",
    keywords: ["state", "reference", "side effect"],
    bugCategory: "logic",
    tone: "oracle",
    uprightMeaning:
      "One innocent write altered a distant branch that still believed itself untouched.",
    reversedMeaning:
      "The mutation is obvious, yet the stale read that enabled it may be older and meaner.",
    debugAdvice:
      "Trace shared references and isolate where mutable state leaks across boundaries.",
    matchTerms: ["mutation", "state", "side effect", "reference", "shared"],
  }),
  card({
    id: "lost-index",
    roman: "XXVII",
    symbol: "#",
    name: "The Lost Index",
    subtitle: "You Sought a Record Without a Guide",
    keywords: ["lookup", "search", "ordering"],
    bugCategory: "logic",
    tone: "data",
    uprightMeaning:
      "A lookup assumed order, uniqueness, or presence that the data never swore to provide.",
    reversedMeaning:
      "The missing element is not absent; the query path itself may already be skewed.",
    debugAdvice:
      "Verify sort order, lookup assumptions, and any indexing logic around the failing query.",
    matchTerms: ["index", "lookup", "not found", "missing key", "keyerror"],
  }),
  card({
    id: "feature-flag-eclipse",
    roman: "XXVIII",
    symbol: "⚑",
    name: "The Feature Flag Eclipse",
    subtitle: "Half the World Is on Another Branch",
    keywords: ["toggle", "cohort", "rollout"],
    bugCategory: "environment",
    tone: "oracle",
    uprightMeaning:
      "Two users inhabit two realities, and only one of them sees the bug.",
    reversedMeaning:
      "The flag looks guilty, but the stale config distributing it may be the true occult engine.",
    debugAdvice:
      "Check flag defaults, targeting rules, and whether clients received the intended variant.",
    matchTerms: ["feature flag", "toggle", "rollout", "cohort", "experiment"],
  }),
  card({
    id: "retry-storm",
    roman: "XXIX",
    symbol: "↻",
    name: "The Retry Storm",
    subtitle: "Every Recovery Attempt Deepens the Flood",
    keywords: ["backoff", "load", "cascade"],
    bugCategory: "io",
    tone: "panic",
    uprightMeaning:
      "A temporary failure became a lasting outage because recovery attacked faster than healing.",
    reversedMeaning:
      "The retries seem cursed, though the original downstream wound may still be untreated.",
    debugAdvice:
      "Inspect retry loops, backoff policy, and whether failures are being amplified downstream.",
    matchTerms: ["retry", "backoff", "throttle", "429", "rate limit"],
  }),
  card({
    id: "shadow-state",
    roman: "XXX",
    symbol: "☽",
    name: "The Shadow State",
    subtitle: "UI and Truth No Longer Match",
    keywords: ["render", "state", "sync"],
    bugCategory: "logic",
    tone: "oracle",
    uprightMeaning:
      "The interface and the underlying data are reciting different versions of the same event.",
    reversedMeaning:
      "The state bug is visible in the UI, but the root breach may live in a cache or selector.",
    debugAdvice:
      "Compare source-of-truth state with rendered state and inspect stale selectors or memoization.",
    matchTerms: ["state mismatch", "stale state", "render", "hydration", "ui"],
  }),
  card({
    id: "broken-migration",
    roman: "XXXI",
    symbol: "⇪",
    name: "The Broken Migration",
    subtitle: "Yesterday's Data Resists Today's Shape",
    keywords: ["deploy", "schema", "transform"],
    bugCategory: "build",
    tone: "panic",
    uprightMeaning:
      "The deployment moved forward, but the data below refused the new arrangement.",
    reversedMeaning:
      "The migration script is loud, but the real danger may be the missing rollback path.",
    debugAdvice:
      "Review migration ordering, backfills, and assumptions about preexisting production data.",
    matchTerms: ["migration failed", "backfill", "rollback", "deploy"],
  }),
  card({
    id: "floating-decimal",
    roman: "XXXII",
    symbol: "0.1",
    name: "The Floating Decimal",
    subtitle: "Precision Was Promised, Approximation Arrived",
    keywords: ["number", "rounding", "precision"],
    bugCategory: "logic",
    tone: "data",
    uprightMeaning:
      "Math obeyed the machine exactly, which is why the human expectation feels betrayed.",
    reversedMeaning:
      "The precision issue is visible, but conversion or formatting may have summoned it.",
    debugAdvice:
      "Inspect numeric precision, rounding rules, and type conversions around calculations.",
    matchTerms: ["nan", "infinity", "precision", "rounding", "float"],
  }),
  card({
    id: "file-handle-revenant",
    roman: "XXXIII",
    symbol: "FD",
    name: "The File Handle Revenant",
    subtitle: "Opened Once, Closed Never",
    keywords: ["descriptor", "resource", "leak"],
    bugCategory: "io",
    tone: "panic",
    uprightMeaning:
      "A resource stayed bound beyond its ritual purpose and now haunts every new attempt.",
    reversedMeaning:
      "The open handle is not alone; cleanup order may already be compromised elsewhere.",
    debugAdvice:
      "Inspect resource cleanup, stream lifecycle, and whether descriptors are consistently closed.",
    matchTerms: ["too many open files", "descriptor", "stream closed", "ebusy"],
  }),
  card({
    id: "container-drift",
    roman: "XXXIV",
    symbol: "□",
    name: "The Container Drift",
    subtitle: "Image, Volume, and Reality Diverged",
    keywords: ["docker", "image", "runtime"],
    bugCategory: "environment",
    tone: "data",
    uprightMeaning:
      "The container claims reproducibility while quietly carrying history in layers and mounts.",
    reversedMeaning:
      "The image seems guilty, but the host network, volume, or env injection may be the real saboteur.",
    debugAdvice:
      "Compare image contents, mounted files, and runtime environment inside the container.",
    matchTerms: ["docker", "container", "image", "compose", "kubernetes"],
  }),
  card({
    id: "ghost-process",
    roman: "XXXV",
    symbol: "PID",
    name: "The Ghost Process",
    subtitle: "A Previous Run Still Haunts the Port",
    keywords: ["port", "lock", "process"],
    bugCategory: "unknown",
    tone: "oracle",
    uprightMeaning:
      "What you started is not what you are actually talking to anymore.",
    reversedMeaning:
      "The port conflict is visible, but stale workers or watchers may still be holding the true grudge.",
    debugAdvice:
      "Check background processes, occupied ports, and whether stale workers survived a restart.",
    matchTerms: ["address already in use", "port", "process", "pid", "listen eaddrinuse"],
  }),
  card({
    id: "monolith-promise",
    roman: "XXXVI",
    symbol: "§",
    name: "The Monolith's Promise",
    subtitle: "One Function to Rule Too Much",
    keywords: ["coupling", "side effect", "legacy"],
    bugCategory: "legacy",
    tone: "oracle",
    uprightMeaning:
      "One sacred function now contains enough responsibility to create its own weather.",
    reversedMeaning:
      "The giant function is suspicious, but the hidden global state feeding it may be the older pact.",
    debugAdvice:
      "Trace side effects through the biggest ownership boundary before trusting any local fix.",
    matchTerms: ["god method", "monolith", "huge function", "legacy flow", "side effects"],
  }),
];

export function toVisualCard(
  cardEntry: TarotCard,
  orientation?: CardOrientation,
): TarotVisualCard {
  return {
    id: cardEntry.id,
    roman: cardEntry.roman,
    symbol: cardEntry.symbol,
    name: cardEntry.name,
    subtitle: cardEntry.subtitle,
    tone: cardEntry.tone,
    orientation,
  };
}

export const previewCards: TarotVisualCard[] = tarotDeck
  .slice(0, 3)
  .map((entry) => toVisualCard(entry));
