///<reference types="cypress" />
import hp from "../pages/contactUs2"

describe('Verify Contact Us page', function () {
    let selector = new hp
    it('contact us', function () {
        selector.visitUrl()
        selector.contactus('Akshata', 'SS', 'akshata@gmail.com', 'hello')
        cy.get('h1').should('contain', 'Thank You')
    })
})