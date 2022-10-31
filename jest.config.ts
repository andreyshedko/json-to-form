import { JestConfigWithTsJest } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: JestConfigWithTsJest = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js','ts', 'tsx', 'd.ts'],
  moduleDirectories: ['node_modules', 'src'],
  resetMocks: false,
  testEnvironment: 'jsdom',
  transform: {
    ...tsjPreset.transform,
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/build/'
  ],
  verbose: true,
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
};

export default config;
