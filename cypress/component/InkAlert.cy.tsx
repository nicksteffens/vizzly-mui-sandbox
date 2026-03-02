import InkAlert from '../../src/components/InkAlert';

describe('<InkAlert />', () => {
  it('renders success severity', () => {
    cy.mount(<InkAlert severity="success">This is a success alert</InkAlert>);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'This is a success alert');
    cy.vizzlySnapshot();
  });

  it('renders error severity', () => {
    cy.mount(<InkAlert severity="error">This is an error alert</InkAlert>);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'This is an error alert');
    cy.vizzlySnapshot();
  });

  it('renders warning severity', () => {
    cy.mount(<InkAlert severity="warning">This is a warning alert</InkAlert>);
    cy.get('[role="alert"]').should('be.visible').and('contain.text', 'This is a warning alert');
    cy.vizzlySnapshot();
  });
});
