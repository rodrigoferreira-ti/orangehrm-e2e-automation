// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HOME_ELEMENTS from './elements/home_elements';

Cypress.Commands.add('login', (username, password) => { // Efetuar o login de forma modular, caso ocorra alguma mudança na tela de login  
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.usernameInput).type(username);
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.passwordInput).type(password);
    cy.get(HOME_ELEMENTS.LOGIN_ELEMENTS.submitButton).click();  
 });

