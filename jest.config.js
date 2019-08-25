module.exports = {
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  setupFilesAfterEnv: ['jest-extended', 'jest-chain'],
}
