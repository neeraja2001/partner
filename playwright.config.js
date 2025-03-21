const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Define the directory where tests are located
  timeout: 120000, // Set a global timeout of 2 minutes per test
  retries: 1, // Retry failed tests once
  use: {
    headless: false, // Set to true if you want headless mode
    browserName: 'chromium', // Use Chromium browser
    viewport: { width: 1280, height: 720 }, // Set default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS certificate errors
    screenshot: 'only-on-failure', // Capture screenshots only when tests fail
    video: 'retain-on-failure', // Record video if the test fails
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Save test report in an HTML format
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
