// karma.conf.js
module.exports = function(config) {
    config.set({
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      browsers: ['ChromeHeadless'],
      singleRun: true,
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--headless',
            '--disable-gpu',
            '--no-sandbox',
            '--remote-debugging-port=9222',
          ],
        },
      },
      reporters: ['progress', 'kjhtml'],
      autoWatch: false,
      // other configurations
    });
  };
  