module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['tap'],
    files: [
      'tmp/test.browser.js',
      'tmp/tests.js',
    ],
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeTravis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    reporters: ['tape', 'coverage']
  })
}