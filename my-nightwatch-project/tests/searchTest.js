module.exports = {
    '@tags': ['search'],
  
    'Search for dress should show products': function (browser) {
      const homePage = browser.page.homePage();
      homePage
        .navigate()
        .setValue('@searchBox', 'dress')
        .click('@searchButton')
        .waitForElementVisible('@productList', 5000)
        .assert.visible('@productList');
    }
  };
  