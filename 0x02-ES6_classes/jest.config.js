module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  }; 
