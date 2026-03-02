import InkButton from '../../src/components/InkButton';

describe('<InkButton />', () => {
  it('renders primary variant', () => {
    cy.mount(<InkButton>Primary</InkButton>);
    cy.vizzlySnapshot();
  });

  it('renders secondary variant', () => {
    cy.mount(<InkButton color="secondary">Secondary</InkButton>);
    cy.vizzlySnapshot();
  });

  it('renders disabled state', () => {
    cy.mount(<InkButton disabled>Disabled</InkButton>);
    cy.vizzlySnapshot();
  });
});
