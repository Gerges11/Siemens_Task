module.exports = {
    testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'API Test Report',
      outputPath: './tests_output/api-test-report.html'
    }]
  ],
    moduleDirectories: ['node_modules', '<rootDir>'],
    testEnvironment: 'node'
  };
  