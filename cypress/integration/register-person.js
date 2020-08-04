const { createYield, textSpanContainsTextSpan, updateComputedPropertyName } = require("typescript")

describe('Tries to register a new person', function () {
    it('Successfully registers a new person', function () {
        cy.server();
        cy.fixture('registerPersonSuccess').as('newPerson')
        cy.route('POST', '**/api/people.json', '@newPerson').as('registerRoute');

        cy.visit('http://localhost:3000/register')
        cy.get('#personName').type('Julia Rodrigues').should('have.value', 'Julia Rodrigues')
        cy.get('#personAge').type(24).should('have.value', 24)
        cy.get('#personGender').select('F').should('have.value', 'F')
        cy.contains('OK').click();
        cy.get('#map').click('center');
        cy.get('#inventoryWater').type(5).should('have.value', 5)
        cy.get('#inventorySoup').type(5).should('have.value', 5)
        cy.get('#inventoryMeds').type(5).should('have.value', 5)
        cy.get('#inventoryWeapon').type(5).should('have.value', 5)

        cy.contains('Submit').click();

        cy.wait('@registerRoute')
        cy.contains('200 - Person registered')
    })

    it('Cannot register a new person due to lack of required input', function () {
        cy.server();
        cy.fixture('registerPersonFail').as('failPerson')
        cy.route({
            method: 'POST',
            url: '**/api/people.json',
            response: '@failPerson',
            status: 422
        }).as('failRoute');

        cy.visit('http://localhost:3000/register')
        cy.get('#personName').type('This is a failed cypress test')
        cy.get('#personAge').type(6)
        cy.contains('OK').click();
        cy.get('#map').click('center');
        cy.get('#inventoryWater').type(3)
        cy.get('#inventorySoup').type(5)
        cy.get('#inventoryMeds').type(3)
        cy.get('#inventoryWeapon').type(5)

        cy.contains('Submit').click();

        cy.wait('@failRoute')
        cy.contains("Error: Request failed with status code 422 -");
    })
})