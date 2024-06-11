/// <reference types="cypress" />
describe('Iframe',function(){
    it('iframe 1 - jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('a[href= "index.html"]').should('have.text','Home')
        cy.get('#frame').then(function($iframe){
            cy.log($iframe)
            cy.log($iframe.contents())
        })
    })
})
