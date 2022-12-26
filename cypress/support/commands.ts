/// <reference types="cypress" />
import { onHomePage } from "../support/pageObjects/HomePage"
import { onFormArticlePage } from "../support/pageObjects/FormArticlePage"

import cypressConfig from "../../cypress.config"

// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }



Cypress.Commands.add('loginToApp', (user,pass) => {
    cy.visit('/login')
    cy.get('[placeholder="Email"]').type(user)
    cy.get('[placeholder="Password"]').type(pass)
    cy.get('[type="submit"]').click()


})

Cypress.Commands.add('newArticle', (title, description, body, tags) => {


    onHomePage.NavBarNewArticle().click()
    onFormArticlePage.articleTitle().type(onFormArticlePage.randomize(title))
    onFormArticlePage.articleDescription().type(onFormArticlePage.randomize(description))
    onFormArticlePage.articleBody().type(onFormArticlePage.randomize(body))
    onFormArticlePage.artilceTags().type(tags)
    onFormArticlePage.articleFormButton().click()

})