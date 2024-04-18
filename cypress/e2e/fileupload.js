/// <reference types="cypress" />

describe('Verify file upload in cypress',function(){
    it('Verify  file upload in cypress - ex1',function(){
    cy.on('window:alert',function(str){
     expect(str).to.eq('Your file has now been uploaded!')
     return true
    })
    cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
    cy.get('input[type="file"]').selectFile('G:\\Deskt\\cypressA\\cypress\\fixtures\\exapmleupload')
    cy.get('input[type="submit"]').click()
    cy.url().should('contain','example')
})
})

