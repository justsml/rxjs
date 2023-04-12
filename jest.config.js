// Similar to webpack.config, this will load the path aliases from tsconfig.json
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!<rootDir>/types/**/*.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.spec.ts',
    '!<rootDir>/**/*.test.ts',
    '!<rootDir>/**/__fixtures__/**/*.ts',
    '!<rootDir>/test/**/*.ts',
  ],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'json-summary'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    ...moduleNameMapper,
    "axios": "axios/dist/node/axios.cjs"
  },
  rootDir: 'src',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)'
  ],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/?(*.)(spec|test).ts'],
};
