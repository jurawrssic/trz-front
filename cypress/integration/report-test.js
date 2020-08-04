describe('Tries to report people as infected', function () {
    it('Successfully reports', function () {
        cy.visit('http://localhost:3000/report')
        cy.get('#searchQuery').click().type('Dmitry')
        cy.contains('REPORT').click()
        cy.contains("Report Person as Infected");
        cy.get('#reportedBy').type('48011ea9-19cd-4612-a9b0-f71ffcb6ca2a')
        cy.get('Report!').click();
        cy.contains("204 - No Content");
    })

    it('Fails to report', function () {
        cy.visit('http://localhost:3000/report')
        cy.get('#searchQuery').click().type('Dmitry')
        cy.contains('REPORT').click()
        cy.contains("Report Person as Infected");
        cy.get('Report!').click();
        cy.contains("404 - Not Found");
    })
})