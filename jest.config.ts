/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  // All imported modules in your tests should be mocked automatically
  moduleFileExtensions: ["ts", "tsx", "js"],

  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest",
  },
  // testTimeout: 1000000,
  // testMatch: ["*.test.+(ts|tsx|js)"],
};
