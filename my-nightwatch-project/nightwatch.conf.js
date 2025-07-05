module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["nightwatch/page-objects"],

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'http://automationpractice.multiformis.com/index.php',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            "--headless",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--window-size=1920,1080",
            `--user-data-dir=/tmp/chrome-user-data-${process.pid}`
          ]
        }
      }
    }
  }
};
