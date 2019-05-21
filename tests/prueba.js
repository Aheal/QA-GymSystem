const chromedriver = require('chromedriver');

module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('body')
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('input[name=btnK]')
        .click('input[name=btnK]')
        .pause(3000)
        .assert.attributeContains('input[name=q]', 'value','nightwatch')
        .end();
    }
  };