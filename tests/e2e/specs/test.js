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

  it('arithmetical operations with standard numbers update display with result', () => {
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '50');
  });

  it('multiple operations can be chained together', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  });

  it('negative numbers work as expected', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-13.333333333333334');
  });

  it('decimals work as expected', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4.5');
  });

  it('large numbers work', () => {
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number4').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#number2').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '55771545960');
  });

  it('numbers divided by 0 are undefined', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'cannot divide by zero');
  });
});
