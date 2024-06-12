///<reference types='cypress' />
import myp from "../pages/4.orangehrm"
import data from "../../fixtures/4.orange.json"

describe('Verify orange hrm login page',function(){
    let page= new myp
    it('Verify login with valid cri',function(){
        page.visiturl()
        page.loginUser(data.valid)
        cy.url().should('contain','/dashboard/index')
    })

    it('Verify login page for invalid cri',function(){
        page.visiturl()
        page.loginUser(data.invalid)
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})