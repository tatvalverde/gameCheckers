//# TODO The folder cypress.config include baseUrl

import SiteUpPage from "../pages/siteUp.page";

describe('Verify Checkers game', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('1.Verify that the site is up', function () {

//#TODO By sending a GET request, we check that the site is loading and nothing crashes, that it  is a checker game
// #1
        // cy.request(`/`).as('checkersRequest');
        // cy.get('@checkersRequest').then(checkers => {
        //     expect(checkers.status).to.eq(200)
        //  })

// #2
        cy.request({url: `/`})
            .its('status')
            .should('be.eq', 200)

        SiteUpPage.header.should('have.text', 'Checkers').and('be.visible')
        cy.get('.boardWrapper').should('exist')

        SiteUpPage.message.should('have.text', 'Select an orange piece to move.')
            .and('be.visible')
        SiteUpPage.footNote.should('contain', 'Restart...').and('be.visible')
        SiteUpPage.footNote.should('contain', 'Rules').and('be.visible')
    })
})