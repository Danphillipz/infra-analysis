import { devices, PlaywrightTestConfig } from '@playwright/test';

import { baseConfig } from '../../playwright.config.base';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      // Applitools project specifically for visual regression
      // This prevents all other projects from unnecessarily repeating applitools tests
      // Retries disabled to prevent unnecessarily repeating a test within applitools following a visual regression
      name: 'applitools',
      grep: /.*@visual-regression/,
      grepInvert: null,
      retries: 0,
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
  grepInvert: /.*@visual-regression/,
};

export default config;
