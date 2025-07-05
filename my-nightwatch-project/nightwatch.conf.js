module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["nightwatch/page-objects"], // <-- ADD THIS

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'http://automationpractice.multiformis.com/index.php',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
