/// <reference types="cypress" />

describe('Verify file upload in cypress', function () {
    it('Verify  file upload in cypress - ex1', function () {
        cy.on('window:alert', function (str) {
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('input[type="file"]').selectFile('G:\\Deskt\\cypressA\\cypress\\fixtures\\example1')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain', 'example')
    })
})
    it('Verify  file upload in cypress - ex2', function () {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        cy.get('input[type="file"]').first().selectFile(["G:\\Deskt\\cypressA\\cypress\\fixtures\\example1", "G:\\Deskt\\cypressA\\cypress\\fixtures\\example2"])
        cy.get('#ember361').should('contain',"2")

    })
