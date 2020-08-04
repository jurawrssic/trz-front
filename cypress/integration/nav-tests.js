const { createYield } = require("typescript")

describe('Check Navigation', function () {
    it('Checks Homepage Content and if all components are loading', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Population info')
        cy.contains('Items Info')
    })

    it('Checks Register URL and if all components are loading', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Register').click();
        cy.url().should('include', '/register')
        cy.contains('New Person')
        cy.contains('Google Maps')
        cy.contains('Fiji Water:')
    })

    it('Checks Update Location URL and if all components are loading', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Update').click();
        cy.url().should('include', '/updateLocation')
        cy.contains('New Location')
        cy.contains('SELECT')
        cy.contains('Google Maps')
    })

    it('Checks Trade URL and if all components are loading', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Trade').click();
        cy.url().should('include', '/trade')
        cy.contains('Trading')
        cy.contains('SELECT')
        cy.contains('Fiji Water:')
    })

    it('Checks Report URL and if all components are loading', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Report').click();
        cy.url().should('include', '/report')
        cy.contains('Registered People')
    })
})