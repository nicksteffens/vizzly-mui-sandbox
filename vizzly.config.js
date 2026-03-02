export default {
  comparison: {
    threshold: 2.0,
  },

  storybook: {
    viewports: [{ name: 'default', width: 1280, height: 900 }],
    browser: {
      headless: true,
      args: ['--no-sandbox'],
    },
    screenshot: {
      fullPage: true,
    },
    concurrency: 3,
  },
};
