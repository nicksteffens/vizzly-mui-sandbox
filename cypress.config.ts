import { defineConfig } from 'cypress';
import { vizzlyScreenshot } from '@vizzly-testing/cli/client';

export default defineConfig({
  allowCypressEnv: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on) {
      on('task', {
        async vizzlyScreenshot({ label, screenshotPath, properties }: { label: string; screenshotPath: string; properties: object }) {
          await vizzlyScreenshot(label, screenshotPath, properties);
          return null;
        },
      });
    },
  },
});
