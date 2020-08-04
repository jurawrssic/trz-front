// If it doesn't find Dmitry when it writes his name on the search input,
// you can erase the y at the end of his name and save, it will run just fine then xD
// idk why it fails when it's automated, when the input is entered manually it never fails :/

describe('Tries to report a person as infected', function () {
    it('Successfully reports', function () {
        cy.server();
        cy.fixture('reportSuccess').as('newReport')
        cy.route('POST', '**/api/people/b3e14474-db93-4dc1-947c-dd619442b3e6/report_infection.json', '@newReport').as('reportRoute');

        cy.visit('http://localhost:3000/')
        cy.contains('Report').click()
        cy.get('#searchQuery').click().type('Dmitry')
        cy.get('#reportButton').click()
        cy.contains("Report Person as Infected");
        cy.get('#reportedBy').type('89b5987b-89f5-4833-83af-064f091c4879')
        cy.contains('Report!').click();

        cy.wait('@reportRoute')
        cy.contains('Report sucessfull')
    })

    it('Fails to report', function () {
        cy.visit('http://localhost:3000/')
        cy.contains('Report').click()
        cy.get('#searchQuery').click().type('Dmitry')
        cy.get('#reportButton').click()
        cy.contains("Report Person as Infected");
        cy.contains('Report!').click();
        cy.contains("404 - Not Found");
    })
})