module.exports = {
    url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
    elements: {
      subject: '#id_contact',
      email: '#email',
      orderRef: '#id_order',
      message: '#message',
      fileUpload: '#fileUpload',
      submitButton: '#submitMessage',
      successAlert: '.alert-success',
      errorAlert: '.alert-danger'
    }
  };
  