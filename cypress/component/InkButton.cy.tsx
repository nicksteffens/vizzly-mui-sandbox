import InkButton from '../../src/components/InkButton';

describe('<InkButton />', () => {
  it('renders primary variant', () => {
    cy.mount(<InkButton>Primary</InkButton>);
    cy.get('button').should('be.visible').and('contain.text', 'Primary');
    cy.vizzlySnapshot();
  });

  it('renders secondary variant', () => {
    cy.mount(<InkButton color="secondary">Secondary</InkButton>);
    cy.get('button').should('be.visible').and('contain.text', 'Secondary');
    cy.vizzlySnapshot();
  });

  it('renders disabled state', () => {
    cy.mount(<InkButton disabled>Disabled</InkButton>);
    cy.get('button').should('be.disabled');
    cy.vizzlySnapshot();
  });

  it('renders large size', () => {
    cy.mount(<InkButton size="large">Large</InkButton>);
    cy.get('button').should('have.class', 'MuiButton-sizeLarge');
    cy.vizzlySnapshot();
  });

  it('renders small size', () => {
    cy.mount(<InkButton size="small">Small</InkButton>);
    cy.get('button').should('have.class', 'MuiButton-sizeSmall');
    cy.vizzlySnapshot();
  });
});
