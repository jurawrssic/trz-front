describe('Tries to trade between people', function () {
    it('Successfully trades', function () {
        cy.server();
        cy.fixture('tradeSuccess').as('newTrade');
        cy.route('POST', '**/api/people/1b9a3b21-8de3-4eb6-b492-17b5d0530f49/properties/trade_item.json', '@newTrade').as('successTrade');

        cy.visit('http://localhost:3000/trade');
        cy.get('#select1').get('#searchQuery').click().type('Dmitry');
        cy.get('#select1').contains('SELECT!').click();
        cy.contains('Selected Dmitry, M, 25 as Person #1');
        cy.get('div>input').eq(1).type(1);
        cy.get('div>input').eq(5).click().type('Lucas Renan');
        cy.get('#select2').contains('SELECT!').click();
        cy.contains('Selected Lucas Renan, M, 25 as Person #2');
        cy.get('div>input').eq(6).type(1);

        cy.contains("TRADE!").click();

        cy.wait('@successTrade');
        cy.contains("200 - Trade Successfull");
    })

    it('Cannot trade due to different trade values', function () {
        cy.server();
        cy.fixture('tradeFail').as('noTrade');
        cy.route({
            method: 'POST',
            url: '**/api/people/1b9a3b21-8de3-4eb6-b492-17b5d0530f49/properties/trade_item.json',
            response: '@noTrade',
            status: 406
        }).as('failTrade');

        cy.visit('http://localhost:3000/trade');
        cy.get('#select1').get('#searchQuery').click().type('Dmitr');
        cy.get('#select1').contains('SELECT!').click();
        cy.contains('Selected Dmitry, M, 25 as Person #1');
        cy.get('div>input').eq(1).type(2);
        cy.get('div>input').eq(5).click().type('Lucas Renan');
        cy.get('#select2').contains('SELECT!').click();
        cy.contains('Selected Lucas Renan, M, 25 as Person #2');
        cy.get('div>input').eq(6).type(1);

        cy.contains("TRADE!").click();
        cy.contains("Trade cost must be the same on both sides!");
    })

    it('Cannot trade due to user not selecting a person to trade', function () {
        cy.visit('http://localhost:3000/trade')
        cy.contains("TRADE!").click();
        cy.contains("Must select person on both sides of the trade!");
    })
})