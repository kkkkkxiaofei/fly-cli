// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedConfig = require('./jest.config.js');
module.exports = {
  ...sharedConfig,
  testMatch: ['**/*.spec.ts'],
  testTimeout: 10000,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
