import { vizzlyScreenshot } from '@vizzly-testing/cli/client';
import { join } from 'path';

// Auto-generates snapshot name from test title, matching our Percy convention
Cypress.Commands.add('vizzlySnapshot', (name?: string, options: { screenshotOptions?: object; properties?: object } = {}) => {
  let label = cy.state('runnable').fullTitle();
  if (name) label += ` - ${name}`;

  const safeName = label.replace(/[<>]/g, '').replace(/\s+/g, '-');

  cy.screenshot(safeName, {
    capture: 'viewport',
    ...(options.screenshotOptions ?? {}),
  }).then(() => {
    const screenshotPath = join(
      Cypress.config('screenshotsFolder') as string,
      Cypress.spec.name,
      `${safeName}.png`
    );

    return vizzlyScreenshot(label, screenshotPath, {
      browser: Cypress.browser.name,
      viewport: `${Cypress.config('viewportWidth')}x${Cypress.config('viewportHeight')}`,
      ...(options.properties ?? {}),
    });
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      vizzlySnapshot(name?: string, options?: { screenshotOptions?: object; properties?: object }): Chainable<void>;
    }
  }
}
