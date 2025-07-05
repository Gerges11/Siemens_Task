module.exports = {
    '@tags': ['contact'],
  
    'Submit with missing required fields should fail': function (browser) {
      const contactPage = browser.page.contactUs();
      contactPage
        .navigate()
        .click('@submitButton')
        .waitForElementVisible('@errorAlert', 10000)
        .assert.containsText('@errorAlert', 'There is 1 error');
    },
  
    'Submit with all required fields and file upload should succeed': function (browser) {
      const contactPage = browser.page.contactUs();
      contactPage
        .navigate()
        // Properly select 'Customer service' from dropdown
        .execute(function() {
          document.querySelector('#id_contact').value = '2';
          var event = new Event('change', { bubbles: true });
          document.querySelector('#id_contact').dispatchEvent(event);
        })
        .setValue('@email', 'gerges@example.com')
        .setValue('@orderRef', '1234')
        .setValue('@message', 'This is a test message.')
        .setValue('@fileUpload', require('path').resolve(__dirname + '/../upload/testfile.txt'))
        .click('@submitButton')
        .pause(5000)
        .assert.containsText('body', 'Your message has been successfully sent');
    }
  };
  
