import InkAlert from '../../src/components/InkAlert';

describe('<InkAlert />', () => {
  it('renders success severity', () => {
    cy.mount(<InkAlert severity="success">This is a success alert</InkAlert>);
    cy.vizzlySnapshot();
  });

  it('renders error severity', () => {
    cy.mount(<InkAlert severity="error">This is an error alert</InkAlert>);
    cy.vizzlySnapshot();
  });

  it('renders warning severity', () => {
    cy.mount(<InkAlert severity="warning">This is a warning alert</InkAlert>);
    cy.vizzlySnapshot();
  });
});
