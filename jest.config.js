// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "\\.jpg$"],
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/.jest/mocks/fileMock.ts",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@stories/(.*)$": "<rootDir>/src/stories/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1"
  },
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/App.tsx",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/**/*.stories.ts(x)",
    "!src/**/*.d.ts",
    "!src/components/index.ts",
    "!src/stories/*.ts(x)",
    "!src/@types/*d.ts",
    "!src/pages/**/*.ts(x)",
    "!src/routes/index.ts",
    "!src/routes/*.ts(x)",
    "!src/services/*.ts",
    "!src/slices/*.ts",
    "!src/styles/index.ts",
    "!src/styles/global-styles.ts",
    "!src/styles/**/*.ts(x)",
    "!src/template/index.ts",
    "!src/utils/*.ts(x)"
  ],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {
                  env: { VITE_SERVER_BASE_URL: "https://www.url.com" }
                }
              }
            }
          ]
        }
      }
    ],
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
