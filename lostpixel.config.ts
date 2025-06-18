import type { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  pageShots: {
    baseUrl: 'http://localhost:3000',   // or your dev server port
    pages: [
      {
        path: '',   // root of localhost
        name: 'local-homepage',
        waitBeforeScreenshot: 3000,
        viewport: {
          width: 1280,
          height: 720
        }
      }
    ]
  },

  browserLaunchOptions: {
    chromium: {
      headless: true,
      args: [
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--disable-extensions'
      ]
    }
  },

  threshold: 0.2,
  failOnDifference: process.env.LOST_PIXEL_IS_UPDATING !== '1'
};
