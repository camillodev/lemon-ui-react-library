module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/components'],
  testMatch: ['**/*.test.js', '**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: ['components/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
