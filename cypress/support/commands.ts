Cypress.Commands.add('vizzlySnapshot', (name?: string, options: { screenshotOptions?: object; properties?: object } = {}) => {
  let label = cy.state('runnable').fullTitle();
  if (name) label += ` - ${name}`;

  const safeName = label.replace(/[<>]/g, '').replace(/\s+/g, '-');

  cy.screenshot(safeName, {
    capture: 'viewport',
    ...(options.screenshotOptions ?? {}),
  }).then(() => {
    const screenshotPath = [
      Cypress.config('screenshotsFolder'),
      Cypress.spec.name,
      `${safeName}.png`,
    ].join('/');

    return cy.task('vizzlyScreenshot', {
      label,
      screenshotPath,
      properties: {
        browser: Cypress.browser.name,
        viewport: `${Cypress.config('viewportWidth')}x${Cypress.config('viewportHeight')}`,
        ...(options.properties ?? {}),
      },
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
