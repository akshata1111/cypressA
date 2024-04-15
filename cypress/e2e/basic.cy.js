/// <reference types="cypress" />

describe('Verify Cypress Basiccommands',function(){
    it('Verify Title of the page',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('contain','WebDriverUniversity.com')
    })

    it('Verify Current URL',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.url().should('contain','webdriveruniversity')
    })

    it.skip('How to log on Cypress test runner',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.log("before radio button")
       
        cy.get('input[value= "green"]').click()
        cy.contains('Green').should('be.visible')
        cy.get('label').contains('Option 4').should('be.visible')
        cy.contains('label',"Option 3").should('be.visible')
        cy.log("after radio button")
    })
    it.only('How to log on Cypress test runner',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.reload()
        cy.wait(2000)
        cy.log('after 2 sec')
        cy.reload()
        cy.log('after reload')
    })
})