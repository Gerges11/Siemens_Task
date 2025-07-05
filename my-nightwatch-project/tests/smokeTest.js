module.exports = {
    'Open homepage': function (browser) {
      browser
        .url('http://automationpractice.multiformis.com/index.php')
        .waitForElementVisible('body', 5000)
        .assert.titleContains('My Store')
        .end();
    }
  };
  