module.exports = {
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  setupFilesAfterEnv: ['jest-extended', 'jest-chain'],
}
