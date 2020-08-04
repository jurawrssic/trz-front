describe('Tries to trade between people', function () {
    it('Successfully trades', function () {
        cy.visit('http://localhost:3000/trade')
        cy.get('#select1').get('#searchQuery').click().type('Dmitry')
        cy.get('#select1').contains('SELECT!').click()
        cy.contains('Selected Dmitry, M, 25 as Person #1')
        cy.get('#inventory1').get('#inventoryWater').type(1)
        cy.get('#select2').get('#searchQuery').click().type('Lucas Renan')
        cy.get('#select2').contains('SELECT!').click()
        cy.contains('Selected Lucas Renan, M, 25 as Person #2')
        cy.get('#inventory2').get('#inventoryWater').type(1)
        cy.contains("TRADE!").click();
        cy.contains("204 - No Content");
    })

    it('Cannot trade due to different trade values', function () {
        cy.visit('http://localhost:3000/trade')
        cy.get('#select1').get('#searchQuery').click().type('Dmitry')
        cy.get('#select1').contains('SELECT!').click()
        cy.contains('Selected Dmitry, M, 25 as Person #1')
        cy.get('#inventory1').get('#inventoryWater').type(1)
        cy.get('#select2').get('#searchQuery').click().type('Lucas Renan')
        cy.get('#select2').contains('SELECT!').click()
        cy.contains('Selected Lucas Renan, M, 25 as Person #2')
        cy.get('#inventory2').get('#inventoryWater').type(2)
        cy.contains("TRADE!").click();
        cy.contains("Trade cost must be the same on both sides!");
    })

    it('Cannot trade due to user no selecting a person to trade', function () {
        cy.visit('http://localhost:3000/trade')
        cy.contains("TRADE!").click();
        cy.contains("Must select person on both sides of the trade!");
    })
})