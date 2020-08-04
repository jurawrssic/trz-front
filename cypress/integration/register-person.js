const { createYield } = require("typescript")

describe('Tries to register a new person', function () {
    it('Successfully registers a new person', function () {
        cy.visit('http://localhost:3000/register')
        cy.get('#personName').type('This is a successful cypress test')
        cy.get('#personAge').type(18)
        cy.get('#personGender').select('F')
        cy.contains('OK').click();
        cy.get('#map').click('center');
        cy.get('#inventoryWater').type(5)
        cy.get('#inventorySoup').type(5)
        cy.get('#inventoryMeds').type(5)
        cy.get('#inventoryWeapon').type(5)
        cy.contains('Submit').click();
        cy.contains("201 - Created");
    })

    it('Cannot register a new person due to lack of required input', function () {
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
        cy.contains("Error: Request failed with status code 422 -");
    })
})