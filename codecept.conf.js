const ProxySettings = require('./proxy-settings')

exports.config = {
  name: 'fees-register-admin-web-acceptance-tests',
  tests: './test/end-to-end/tests/*_test.js',
  timeout: 10000,
  output: './output',
  helpers: {
    WebDriverIO: {
      host: process.env.WEB_DRIVER_HOST || 'localhost',
      port: process.env.WEB_DRIVER_PORT || '4444',
      browser: process.env.BROWSER || 'chrome',
      url: process.env.URL || 'https://localhost:3415',
      waitForTimeout: 15000,
      desiredCapabilities: {
        proxy: new ProxySettings()
      }
    }
  },
  include: {
    I: './test/end-to-end/pages/steps_file.js',
    Idam: './test/end-to-end/pages/idam_backdoor.js'
  },
  bootstrap: false,
  mocha: {}
}