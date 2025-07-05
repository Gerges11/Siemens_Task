module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php?controller=contact',
  elements: {
    subject: '#id_contact',
    email: '#email',
    orderRef: '#id_order',
    message: '#message',
    // Note: on this demo site, the file input id is actually 'fileUpload'
    fileUpload: '#fileUpload', 
    submitButton: '#submitMessage', // id of the submit button
    successAlert: '.alert-success',
    errorAlert: '.alert-danger'
  }
};
