import InkButton from '../../src/components/InkButton';

describe('<InkButton />', () => {
  it('renders primary variant', () => {
    cy.mount(<InkButton>Primary</InkButton>);
    cy.get('button').should('be.visible').and('contain.text', 'Primary');
  });

  it('renders secondary variant', () => {
    cy.mount(<InkButton color="secondary">Secondary</InkButton>);
    cy.get('button').should('be.visible').and('contain.text', 'Secondary');
  });

  it('renders disabled state', () => {
    cy.mount(<InkButton disabled>Disabled</InkButton>);
    cy.get('button').should('be.disabled');
  });
});
