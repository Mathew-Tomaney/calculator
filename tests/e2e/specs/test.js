// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('number buttons should update display of running total', () => {
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '42');
  });

  it('arithmetical operatotions update display with result', () => {
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '50');
  });
});
