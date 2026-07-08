export const keywordRules = {
  undefined: ["type", "nullish"],
  null: ["nullish"],
  module: ["dependency", "build"],
  cache: ["cache"],
  timeout: ["async", "io"],
  memory: ["memory"],
  leak: ["memory"],
  lock: ["async"],
};
