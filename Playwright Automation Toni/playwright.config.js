// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30000, // by default the timeout for every step in playwright is 30s but at this level you can overwright by adding your desired timeout
  expect:{ // the expect timeout is exclusive to asserition validations
    timeout: 5000 
  },

  reporter: 'html',
  
  use: {

    browserName: 'chromium',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: false
  },

});

module.exports = config // this makes the variable avaialable to the entire project
