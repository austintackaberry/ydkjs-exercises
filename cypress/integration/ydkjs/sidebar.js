/* globals context cy */

/// <reference types="Cypress" />

context('Sidebar', () => {
  const select = (id) => `[data-testid="${id}"]`; 
  
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

  it('navigates to /scope-closures when Scope & Closures is picked', () => {
    cy.get(select('/scope-closures')).click({ force: true });
    cy.url().should('include', '/scope-closures');

    cy.contains('Chapter 1: What is Scope?').should('exist');
    cy.contains('Chapter 2: Lexical Scope').should('exist');
    cy.contains('Chapter 3: Function vs Block Scope').should('exist');
    cy.contains('Chapter 4: Hoisting').should('exist');
    cy.contains('Chapter 5: Scope Closures').should('exist');
  });

  it('navigates to /this-object-prototypes when this & Object Prototypes is picked', () => {
    cy.get(select('/this-object-prototypes')).click({ force: true });
    cy.url().should('include', '/this-object-prototypes');

    cy.contains('Chapter 1: this or That?').should('exist');
    cy.contains('Chapter 2: this All Makes Sense Now').should('exist');
    cy.contains('Chapter 3: Objects').should('exist');
    cy.contains('Chapter 4: Mixing (Up) "Class" Objects').should('exist');
    cy.contains('Chapter 6: Behavior Delegation').should('exist');
  });

  it('navigates to /types-grammar when Types & Grammar is picked', () => {
    cy.get(select('/types-grammar')).click({ force: true });
    cy.url().should('include', '/types-grammar');

    cy.contains('Chapter 1: Types').should('exist');
    cy.contains('Chapter 2: Values').should('exist');
    cy.contains('Chapter 3: Natives').should('exist');
    cy.contains('Chapter 4: Coercion').should('exist');
    cy.contains('Chapter 5: Grammar').should('exist');
  });

  it('navigates to /async-performance when Async & Performance is picked', () => {
    cy.get(select('/async-performance')).click({ force: true });
    cy.url().should('include', '/async-performance');

    cy.contains('Chapter 1: Asynchrony: Now & Later').should('exist');
    cy.contains('Chapter 2:').should('exist');
    cy.contains('Chapter 3:').should('exist');
    cy.contains('Chapter 4:').should('exist');
    cy.contains('Chapter 5:').should('exist');
  });

  it('navigates to /es6-beyond when ES6 & Beyond is picked', () => {
    cy.get(select('/es6-beyond')).click({ force: true });
    cy.url().should('include', '/es6-beyond');

    cy.contains('Chapter 1:').should('exist');
    cy.contains('Chapter 2:').should('exist');
    cy.contains('Chapter 3:').should('exist');
    cy.contains('Chapter 4:').should('exist');
    cy.contains('Chapter 5:').should('exist');
    cy.contains('Chapter 6:').should('exist');
    cy.contains('Chapter 7:').should('exist');
    cy.contains('Chapter 8:').should('exist');
  });
});
