/* globals context cy */

/// <reference types="Cypress" />

context('Sidebar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('does something', () => {
    cy.contains('YDKJS Exercises');
  });
});
