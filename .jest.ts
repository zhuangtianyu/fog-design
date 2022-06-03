export default {
  setupFiles: ['./test/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@namespace$': '<rootDir>/namespace.json',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@static(.*)$': '<rootDir>/static$1',
  },
  snapshotResolver: './test/snapshot-resolver.ts',
};
