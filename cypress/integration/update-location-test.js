describe('Tries to register update a persons location', function () {
    it('Successfully updates location', function () {
        cy.visit('http://localhost:3000/updateLocation')
        cy.get('#searchQuery').type('Fabio Akita')
        cy.contains('SELECT').click();
        cy.contains('Selected Fabio Akita, M, 30. You can now choose your new location on the map')
        cy.contains('OK').click();
        cy.get('#map').click('center');
        cy.contains('Change my Location!').click();
        cy.contains('200 - OK')
    })

    it('Cannot update location due to lack of required input (selected person)', function () {
        cy.visit('http://localhost:3000/updateLocation')
        cy.contains('OK').click();
        cy.get('#map').click('center');
        cy.contains('Change my Location!').click();
        cy.contains('Select a person to change location!')
    })
})