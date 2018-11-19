/* globals context cy */

/// <reference types="Cypress" />

context('Sidebar', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Progress').should('exist');
  });

  it('closes when X is clicked and reopens when hamburger is clicked', () => {
    cy.get('[data-testid=closeSidebar]').click();
    cy.contains('Progress').should('not.exist');
    cy.get('[data-testid=openSidebar]').click();
    cy.contains('Progress').should('exist');
  });

  it('navigates to /up-going when Up & Going is picked', () => {
    cy.contains(/Up & Going \(/).click({ force: true });
    cy.url().should('include', '/up-going');
    cy.contains('Chapter 1: Into Programming').should('exist');
    cy.contains('Chapter 2: Into JavaScript').should('exist');
  });
});
